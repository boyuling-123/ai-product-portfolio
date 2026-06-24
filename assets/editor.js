(function () {
  const STORAGE_PREFIX = "lu-portfolio-edits:v2:";
  const LEGACY_STORAGE_PREFIX = "lu-portfolio-edits:";
  const pageKey = STORAGE_PREFIX + location.pathname;
  const editableSelector = [
    "main h1",
    "main h2",
    "main h3",
    "main p",
    "main li",
    "main .big",
    "main .slot",
    "main .lead",
    "main .summary",
    "main .claim"
  ].join(",");

  let editMode = false;
  let dirty = false;

  function clearLegacyEdits() {
    localStorage.removeItem(LEGACY_STORAGE_PREFIX + location.pathname);
  }

  function getEditables() {
    return [...document.querySelectorAll(editableSelector)].filter((el) => {
      if (el.closest(".portfolio-editor")) return false;
      if (el.closest("a, button")) return false;
      return el.textContent.trim().length > 0;
    });
  }

  function loadEdits() {
    try {
      return JSON.parse(localStorage.getItem(pageKey) || "{}");
    } catch {
      return {};
    }
  }

  function saveEdits() {
    const edits = {};
    getEditables().forEach((el, index) => {
      edits[index] = el.innerHTML;
    });
    localStorage.setItem(pageKey, JSON.stringify(edits));
    dirty = false;
    setStatus("已保存到本机浏览器");
  }

  function applyEdits() {
    const edits = loadEdits();
    getEditables().forEach((el, index) => {
      if (Object.prototype.hasOwnProperty.call(edits, index)) {
        el.innerHTML = edits[index];
      }
    });
  }

  function setStatus(text) {
    const status = document.querySelector("[data-editor-status]");
    if (status) status.textContent = text;
  }

  function setEditMode(next) {
    editMode = next;
    document.body.classList.toggle("portfolio-editing", editMode);
    getEditables().forEach((el) => {
      el.setAttribute("contenteditable", editMode ? "true" : "false");
      el.setAttribute("spellcheck", "false");
    });
    const toggle = document.querySelector("[data-editor-toggle]");
    if (toggle) toggle.textContent = editMode ? "完成编辑" : "编辑文字";
    setStatus(editMode ? "编辑中：直接点文字修改" : "浏览模式");
  }

  function exportEdits() {
    const payload = {
      path: location.pathname,
      title: document.title,
      savedAt: new Date().toISOString(),
      edits: loadEdits()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `portfolio-edits-${location.pathname.replace(/[\\/]+/g, "-").replace(/^-|-$/g, "") || "home"}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    setStatus("已导出 JSON");
  }

  function resetEdits() {
    localStorage.removeItem(pageKey);
    setStatus("已清除本页本地修改，刷新后恢复源码");
  }

  function buildToolbar() {
    const bar = document.createElement("div");
    bar.className = "portfolio-editor";
    bar.innerHTML = `
      <button type="button" data-editor-toggle>编辑文字</button>
      <button type="button" data-editor-save>保存</button>
      <button type="button" data-editor-export>导出</button>
      <button type="button" data-editor-reset>重置</button>
      <span data-editor-status>浏览模式</span>
    `;
    document.body.appendChild(bar);
    bar.querySelector("[data-editor-toggle]").addEventListener("click", () => setEditMode(!editMode));
    bar.querySelector("[data-editor-save]").addEventListener("click", saveEdits);
    bar.querySelector("[data-editor-export]").addEventListener("click", exportEdits);
    bar.querySelector("[data-editor-reset]").addEventListener("click", resetEdits);
  }

  function injectStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .portfolio-editor {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9999;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        max-width: min(520px, calc(100vw - 28px));
        padding: 10px;
        border: 1px solid #d7deea;
        border-radius: 10px;
        background: rgba(255,255,255,.94);
        box-shadow: 0 18px 48px rgba(15,23,42,.16);
        backdrop-filter: blur(14px);
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      }
      .portfolio-editor button {
        min-height: 34px;
        border: 1px solid #d7deea;
        border-radius: 8px;
        background: #fff;
        color: #344054;
        padding: 6px 10px;
        font-size: 12px;
        font-weight: 850;
        cursor: pointer;
      }
      .portfolio-editor button:first-child {
        background: #2563eb;
        border-color: #2563eb;
        color: #fff;
      }
      .portfolio-editor span {
        color: #667085;
        font-size: 12px;
        font-weight: 760;
      }
      .portfolio-editing [contenteditable="true"] {
        outline: 2px dashed rgba(37,99,235,.42);
        outline-offset: 4px;
        border-radius: 6px;
        cursor: text;
      }
      .portfolio-editing [contenteditable="true"]:focus {
        outline-style: solid;
        background: rgba(237,244,255,.72);
      }
      @media (max-width: 720px) {
        .portfolio-editor {
          left: 10px;
          right: 10px;
          bottom: 10px;
        }
      }
      @media print {
        .portfolio-editor { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener("input", (event) => {
    if (!editMode || !event.target.matches("[contenteditable='true']")) return;
    dirty = true;
    setStatus("有未保存修改");
  });

  window.addEventListener("beforeunload", (event) => {
    if (!dirty) return;
    event.preventDefault();
    event.returnValue = "";
  });

  document.addEventListener("DOMContentLoaded", () => {
    clearLegacyEdits();
    applyEdits();
    injectStyle();
    buildToolbar();
  });
})();
