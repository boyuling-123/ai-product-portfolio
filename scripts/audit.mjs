import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const outDir = path.join(root, "assets", "screenshots");
const url = process.env.PORTFOLIO_URL || "http://127.0.0.1:9010/";
const reportPath = path.join(root, "audit-report.md");

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 }
];

const knownExternalHosts = new Set([
  "github.com",
  "127.0.0.1"
]);

const checks = [];
const issues = [];

function addCheck(name, ok, details = "") {
  checks.push({ name, ok, details });
  if (!ok) issues.push(`${name}: ${details}`);
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function crawlInternalLinks(startUrl) {
  const queue = [new URL(startUrl).href];
  const visited = new Set();
  const bad = [];
  while (queue.length) {
    const current = queue.shift();
    const cleanCurrent = current.split("#")[0];
    if (visited.has(cleanCurrent)) continue;
    visited.add(cleanCurrent);
    let response;
    try {
      response = await fetch(cleanCurrent);
    } catch (error) {
      bad.push(`${cleanCurrent} -> ${error.message}`);
      continue;
    }
    if (response.status >= 400) {
      bad.push(`${cleanCurrent} -> ${response.status}`);
      continue;
    }
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) continue;
    const text = await response.text();
    for (const match of text.matchAll(/\bhref="([^"]+)"/g)) {
      const href = match[1];
      if (/^(mailto:|tel:|javascript:)/.test(href)) continue;
      const next = new URL(href, cleanCurrent);
      if (next.origin !== new URL(startUrl).origin) continue;
      queue.push(next.href);
    }
  }
  return { visited, bad };
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const html = await fs.readFile(path.join(root, "index.html"), "utf8");
  const browser = await chromium.launch({ headless: true });
  const consoleItems = [];
  const pageErrors = [];
  const viewportResults = [];
  let firstLoadMs = 0;

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    page.on("console", msg => {
      if (["warning", "error"].includes(msg.type())) {
        consoleItems.push(`[${viewport.name}] ${msg.type()}: ${msg.text()}`);
      }
    });
    page.on("pageerror", err => pageErrors.push(`[${viewport.name}] ${err.message}`));
    const start = Date.now();
    const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    const loadMs = Date.now() - start;
    if (viewport.name === "desktop") firstLoadMs = loadMs;
    const status = response?.status() || 0;
    const metrics = await page.evaluate(() => ({
      title: document.title,
      bodyText: document.body.innerText,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      imageCount: document.images.length,
      brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.getAttribute("src") || ""),
      anchors: [...document.querySelectorAll("a[href]")].map(a => ({ href: a.href, text: a.textContent.trim() })),
      emptyButtons: [...document.querySelectorAll("a,button")].filter(el => !el.textContent.trim() && !el.getAttribute("aria-label")).length,
      sectionCounts: {
        homeCards: document.querySelectorAll("main .card").length,
        forbiddenHomeLabels: [...document.querySelectorAll("main h2, main h3")].filter(el => /作品集入口|最快入口|精选案例/.test(el.textContent)).length,
        primaryLinks: [...document.querySelectorAll("a[href]")].filter(a => ["自驱工具", "Skill", "业务项目", "关于我"].some(text => a.textContent.includes(text))).length
      },
      placeholderHits: (document.body.innerText.match(/TODO|Lorem|lorem|待填写|请填写/g) || []).length
    }));
    await page.screenshot({ path: path.join(outDir, `portfolio-${viewport.name}.png`), fullPage: true });
    viewportResults.push({ viewport, status, loadMs, metrics });
    await page.close();
  }

  await browser.close();

  const desktop = viewportResults.find(item => item.viewport.name === "desktop");
  const mobile = viewportResults.find(item => item.viewport.name === "mobile");
  const tablet = viewportResults.find(item => item.viewport.name === "tablet");

  addCheck("页面可访问", viewportResults.every(item => item.status >= 200 && item.status < 400), viewportResults.map(item => `${item.viewport.name}:${item.status}`).join(", "));
  addCheck("控制台无错误警告", consoleItems.length === 0 && pageErrors.length === 0, [...consoleItems, ...pageErrors].join("; "));
  addCheck("所有图片可加载", viewportResults.every(item => item.metrics.brokenImages.length === 0), viewportResults.flatMap(item => item.metrics.brokenImages).join(", "));
  addCheck("移动端无横向滚动", mobile.metrics.scrollWidth <= mobile.metrics.clientWidth + 1, `${mobile.metrics.scrollWidth}px / ${mobile.metrics.clientWidth}px`);
  addCheck("平板布局正常", tablet.metrics.scrollWidth <= tablet.metrics.clientWidth + 1, `${tablet.metrics.scrollWidth}px / ${tablet.metrics.clientWidth}px`);
  addCheck("桌面布局正常", desktop.metrics.scrollWidth <= desktop.metrics.clientWidth + 1, `${desktop.metrics.scrollWidth}px / ${desktop.metrics.clientWidth}px`);
  addCheck("首屏加载小于 3 秒", firstLoadMs < 3000, `${firstLoadMs}ms`);
  addCheck("首页为封面结构", desktop.metrics.sectionCounts.homeCards === 0 && desktop.metrics.sectionCounts.forbiddenHomeLabels === 0 && desktop.metrics.sectionCounts.primaryLinks >= 4, JSON.stringify(desktop.metrics.sectionCounts));
  const htmlFiles = await fs.readdir(root, { recursive: true });
  const pageFiles = htmlFiles.filter(file => typeof file === "string" && file.startsWith("pages/") && file.endsWith(".html"));
  const caseFiles = htmlFiles.filter(file => typeof file === "string" && file.startsWith("cases/") && file.endsWith(".html"));
  addCheck("多页面结构已建立", pageFiles.length >= 4 && caseFiles.length >= 21, `pages=${pageFiles.length}, cases=${caseFiles.length}`);
  addCheck("无明显临时占位词", viewportResults.every(item => item.metrics.placeholderHits === 0), `hits=${viewportResults.map(item => item.metrics.placeholderHits).join("/")}`);
  addCheck("交互控件有文本或 aria", desktop.metrics.emptyButtons === 0, `empty=${desktop.metrics.emptyButtons}`);

  const srcMatches = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(match => match[1]);
  const altMissing = [...html.matchAll(/<img\b[^>]*>/g)].filter(match => !/\balt="[^"]+"/.test(match[0])).length;
  addCheck("图片均有 alt", altMissing === 0, `missing=${altMissing}`);
  const localMissing = [];
  for (const src of srcMatches) {
    if (/^https?:\/\//.test(src)) continue;
    const localPath = path.join(root, src);
    if (!(await pathExists(localPath))) localMissing.push(src);
  }
  addCheck("本地图片文件存在", localMissing.length === 0, localMissing.join(", "));

  const anchors = desktop.metrics.anchors;
  const localLinks = anchors.filter(item => item.href.startsWith(url));
  const externalLinks = anchors.filter(item => !item.href.startsWith(url));
  const crawl = await crawlInternalLinks(url);
  const badLocal = crawl.bad;
  const uncheckedExternal = externalLinks.filter(item => !knownExternalHosts.has(new URL(item.href).hostname));
  addCheck("内部链接无 404 风险", badLocal.length === 0, badLocal.join(", "));
  addCheck("外部链接已限定为已知目标", uncheckedExternal.length === 0, uncheckedExternal.map(item => item.href).join(", "));

  const report = [
    "# Portfolio Audit Report",
    "",
    `- 审计时间：${new Date().toISOString()}`,
    `- 审计地址：${url}`,
    `- 内部页面数：${crawl.visited.size}`,
    `- 截图输出：assets/screenshots/portfolio-mobile.png, portfolio-tablet.png, portfolio-desktop.png`,
    "",
    "## 结果",
    "",
    ...checks.map(item => `- ${item.ok ? "✅" : "❌"} ${item.name}${item.details ? `：${item.details}` : ""}`),
    "",
    "## 证据口径",
    "",
    "- 页面允许出现“空证据位”，用于标记缺少授权截图或脱敏材料的位置。",
    "- 页面不允许出现 TODO、Lorem、待填写、请填写等临时占位词。",
    "- 业务截图只使用真实本地截图或公开测试图，不用推测图冒充实际界面。",
    "",
    "## 视口结果",
    "",
    ...viewportResults.map(item => `- ${item.viewport.name} ${item.viewport.width}x${item.viewport.height}：HTTP ${item.status}，load ${item.loadMs}ms，scroll ${item.metrics.scrollWidth}/${item.metrics.clientWidth}，images ${item.metrics.imageCount}`),
    "",
    "## 待处理问题",
    "",
    issues.length ? issues.map(item => `- ${item}`).join("\n") : "- 无阻塞问题。",
    ""
  ].join("\n");

  await fs.writeFile(reportPath, report, "utf8");
  if (issues.length) {
    console.error(`audit failed: ${issues.length} issue(s)`);
    process.exitCode = 1;
  } else {
    console.log("audit passed");
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
