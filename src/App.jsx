import { ArrowUpRight, Mail, Phone } from "lucide-react";

const navItems = [
  ["自驱工具", "#tools"],
  ["业务项目", "#business"],
  ["Skill", "#skills"],
  ["关于我", "#about"],
];

const tools = [
  {
    kicker: "评测基础设施",
    title: "AI 测评平台",
    big: "Eval OS",
    claim: "把测试集、模型、跑批、AI 评分和 bad-case 回流做成一个可运行的平台。",
    points: [
      "设计测试集导入、AI 造数和批量跑批链路。",
      "把模型输出、标准答案和 AI 评分放到同一张工作台里。",
      "为人工复核和 bad-case 回流预留闭环。",
    ],
    tags: ["可演示", "本地平台"],
    links: [
      ["Demo", "http://127.0.0.1:3000/"],
      ["案例详情", "/cases/eval-platform.html"],
    ],
  },
  {
    kicker: "Prompt 资产化",
    title: "Prompt 管理平台",
    big: "Prompt Hub",
    claim: "把散落在对话里的 Prompt 变成可搜索、可版本化、可共享的工作资产。",
    points: [
      "设计 Prompt 列表、分类、版本号和编辑入口。",
      "沉淀共享状态、标签和操作日志的管理口径。",
      "预留与测评平台联动的评估路径。",
    ],
    tags: ["真实截图", "待补 Demo"],
    links: [["案例详情", "/cases/prompt-manager.html"]],
  },
  {
    kicker: "个人信息产品",
    title: "FreeSignal",
    big: "Signal Flow",
    claim: "不是资讯站，而是把“我想研究什么”变成每天自动送来的可评分信息流。",
    points: [
      "拆出研究目标、信息来源、筛选维度和每日摘要。",
      "设计来源诊断和维度生成，让信息流可运营。",
      "用 HTML 项目承载完整 C 端产品体验。",
    ],
    tags: ["个人产品", "可演示"],
    links: [
      ["Demo", "http://127.0.0.1:8006/public/index.html"],
      ["案例详情", "/cases/freesignal.html"],
    ],
  },
  {
    kicker: "Skill 执行可视化",
    title: "Skill 可视化",
    big: "Runtime Map",
    claim: "只用 HTML 和 Claude Code 提示词，把 Skill 的节点、日志和结果可视化出来。",
    points: [
      "设计节点图、运行观察器和终端联动逻辑。",
      "让原本黑盒的 Skill 执行过程变成可解释路径。",
      "支持查看文件、节点状态、失败事件和输出结果。",
    ],
    tags: ["可演示", "真实截图"],
    links: [
      ["Demo", "http://127.0.0.1:4173/"],
      ["案例详情", "/cases/skill-visualizer.html"],
    ],
  },
  {
    kicker: "写作风格知识库",
    title: "去 AI 味口喷 Wiki",
    big: "Human Voice",
    claim: "专门收集我的口喷表达、自然语气和反 AI 味规则，用来把输出改得像人话。",
    points: [
      "沉淀个人表达偏好、句式和常见 AI 味问题。",
      "把“太像机器写的”拆成可修改的具体规则。",
      "适合服务作品集文案、汇报页和 Skill 输出润色。",
    ],
    tags: ["知识库"],
    links: [["案例详情", "/cases/wiki-humanized-writing.html"]],
  },
  {
    kicker: "复盘与回流",
    title: "Loop 知识库",
    big: "Bad-case Loop",
    claim: "专门存放 bad-case、复盘、归因和回流动作，让问题不只停留在一次性修复。",
    points: [
      "按问题、原因、修复动作和复用规则组织记录。",
      "把评测、Prompt、Skill 里的失败样例沉淀成资产。",
      "支持后续进入规则库、测试集和产品改进。",
    ],
    tags: ["知识沉淀"],
    links: [["案例详情", "/cases/wiki-loop.html"]],
  },
  {
    kicker: "模型工具调用",
    title: "Qwen3-4B 工具路由微调",
    big: "Router Tune",
    claim: "围绕小模型工具路由，搭建数据 schema、训练链路和评估口径。",
    points: [
      "定义工具调用 schema 和训练样本格式。",
      "梳理 baseline、微调后评估和成本耗时记录。",
      "链路已通，最终数据仍需要补完整。",
    ],
    tags: ["链路探索"],
    links: [["案例详情", "/cases/qwen-router-tuning.html"]],
  },
];

const businessProjects = [
  {
    tags: ["电商图片", "图像处理", "测评闭环"],
    title: "Brand+ 电商图片处理平台",
    big: "图片生产链路",
    summary:
      "面向白底主图、图片翻译、详情页多语种、卖点图和主图套图，把底层 AI 图像能力包装成业务可调用的标准化工具。",
    points: [
      "设计白底图检测、抠图生成、二次编辑和质量评分链路。",
      "拆解图片内容检测、图翻、多语言诊断、AI 排版和协议转换。",
      "沉淀能力矩阵、批量测评、bad-case 回流和 Skill 化复用方式。",
    ],
    links: [
      ["案例详情", "/cases/brand-plus.html"],
      ["PRD 摘要", "/prds/brand-plus-image-capability.html"],
    ],
  },
  {
    tags: ["AI 视频", "工作台", "人工可控"],
    title: "PPC 视频生成工作台",
    big: "脚本到剪辑",
    summary:
      "围绕商品短视频，把商品输入、脚本、分镜、素材、视频片段、剪辑合成、保存导出拆成可编辑、可重跑、可验收的工作台链路。",
    points: [
      "梳理商品图、商品链接、目标语言、视频类型、渠道尺寸等入参。",
      "设计脚本生成、分镜画布、视频片段画布和全局批量生成动作。",
      "补充剪辑 iframe、素材库、自动保存、项目数据和资产沉淀规则。",
    ],
    links: [
      ["案例详情", "/cases/ppc-video-workbench.html"],
      ["PRD 摘要", "/prds/ppc-video-workbench.html"],
    ],
  },
  {
    tags: ["MCP / Skill", "平台接入", "能力网关"],
    title: "悟空 MCP 对接",
    big: "能力接入平台",
    summary:
      "围绕业务 Agent 如何接入超编 / 悟空类平台，梳理 API、MCP、ComfyCloud 工作流、Oneday Agent 和 LangGraph 子 Agent 的接入边界。",
    points: [
      "定义 Tool / 子 Agent / Skill 的能力层级、入参出参和调用协议。",
      "梳理业务身份、资源分配、流量管控、任务监控和失败兜底口径。",
      "推动平台从“单点能力接入”变成“可管理、可观测、可复用”的能力底座。",
    ],
    links: [["案例详情", "/cases/platform-agent.html"]],
  },
  {
    tags: ["Multi-Agent", "图像生成/编辑", "Human-in-loop"],
    title: "堆友 Agent 建设",
    big: "多 Agent 架构",
    summary:
      "围绕 AI 设计主聊天框，把图像生成、图像编辑、文本处理、任务规划、状态记忆和结果总结拆成 supervisor + 子 Agent / Tool 的结构。",
    points: [
      "设计 mainSupervisor、imageSupervisor、TextProcess 和底层工具组。",
      "引入 state 记忆、任务完整性检查、用户问询和模型路由策略。",
      "结合模型评测知识库，支持多模型接入、选择理由记录和后续优化。",
    ],
    links: [
      ["案例详情", "/cases/agent-building.html"],
      ["框架摘要", "/prds/agent-product-framework.html"],
    ],
  },
];

const skillGroups = [
  {
    title: "A. 提效 Skill",
    items: [
      {
        label: "PRD",
        title: "PRD 撰写 Skill",
        big: "Baseline 锚定",
        summary: "不是直接代写文档，而是先建立 Baseline，再让需求、字段、验收和代码约束对齐。",
        proof: [
          ["壁垒", "6 个 Phase 先做澄清、评估和 Baseline，避免散点需求直接变成长文档。"],
          ["证据", "prd-writer/SKILL.md 与 ai-coding-rules.md 写明分阶段流程和字段级约束。"],
          ["展示", "详情页展示规则证据、文档模板和原始材料对照。"],
        ],
        href: "/cases/skill-prd-writer.html",
      },
      {
        label: "PRD Change",
        title: "需求增加 PRD Skill",
        big: "变更不覆盖",
        summary: "核心价值不是把新增需求补进去，而是判断改动级别、保留旧版、标出影响面。",
        proof: [
          ["壁垒", "Level 1/2 变更分流，小改走增量，大改进入新版本，减少历史逻辑被误删。"],
          ["证据", "update-workflow.md 写明旧版保留、影响分析和版本化产物。"],
          ["展示", "详情页放原 PRD、新需求、影响表与更新稿结构。"],
        ],
        href: "/cases/skill-prd-change.html",
      },
      {
        label: "Meeting",
        title: "会议纪要 Skill",
        big: "纪要到复盘",
        summary: "它不是转写摘要，而是把会议拆成总结、纪要、汇报、复盘和 v2 修订链路。",
        proof: [
          ["壁垒", "5 阶段输出链让同一份转写同时服务会后同步、向上汇报和改版复盘。"],
          ["证据", "会议内容整理/SKILL.md 与流程图.mmd 明确阶段顺序和确认节点。"],
          ["展示", "详情页给出转写材料到纪要产物的证据截图。"],
        ],
        href: "/cases/skill-meeting-notes.html",
      },
      {
        label: "Script",
        title: "篡改猴 Skill",
        big: "先侦察 DOM",
        summary: "普通脚本容易一跑就坏，这个 Skill 把网页侦察、选择器验证和断点续跑放在前面。",
        proof: [
          ["壁垒", "先抓页面结构再写脚本，先跑 3 条样本，每 10 条写入 localStorage。"],
          ["证据", "tampermonkey-generator/SKILL.md 和 workflow 文档写明侦察、测试、持久化规则。"],
          ["展示", "详情页展示脚本生成前后的代码证据和运行策略。"],
        ],
        href: "/cases/skill-tampermonkey.html",
      },
      {
        label: "Prototype",
        title: "原型图 HTML 绘制",
        big: "PRD 映射页面",
        summary: "亮点在于把 PRD 页面、状态、字段映射到 HTML，而不是单纯做一个静态展示页。",
        proof: [
          ["壁垒", "0 手画原型，先解析 PRD，再生成 Layout Shell、页面结构和功能标注。"],
          ["证据", "pm-proto-gen/SKILL.md 写明 PRD 解析、页面生成和约束注入。"],
          ["展示", "详情页放 HTML 原型截图和规则证据。"],
        ],
        href: "/cases/skill-html-prototype.html",
      },
    ],
  },
  {
    title: "B. 标准化 / 沉淀 Skill",
    items: [
      {
        label: "MCP",
        title: "钉钉 MCP 描述生成器",
        big: "129 个样本",
        summary: "真正出彩的是用样本和反例库约束描述写法，让工具描述能被模型稳定理解。",
        proof: [
          ["壁垒", "6 类模板、反例库、触发场景和不适用场景一起生成，避免只改一句简介。"],
          ["证据", "钉钉mcp描述生成器/SKILL.md、反例库.md 与模板文件可追溯。"],
          ["展示", "详情页展示描述生成规则和反例证据。"],
        ],
        href: "/cases/skill-mcp-description.html",
      },
      {
        label: "MCP Map",
        title: "钉钉 MCP 梳理器",
        big: "能力原子化",
        summary: "它解决的是 MCP 太多、描述太散的问题，把工具拆成可搜索、可组合的能力资产。",
        proof: [
          ["壁垒", "129 个 MCP 被重新按业务场景、字段、返回值和风险归档。"],
          ["证据", "aihub_mcp_featured_1779267985777.md 写明 129 个 MCP 原始集合。"],
          ["展示", "详情页展示归档逻辑和 MCP-to-Skill 映射方式。"],
        ],
        href: "/cases/skill-mcp-organizer.html",
      },
    ],
  },
  {
    title: "C. 业务 Skill",
    items: [
      {
        label: "Video",
        title: "数字人视频生成 Skill",
        big: "首帧再视频",
        summary: "它的亮点是把数字人视频前置成可验证首帧，而不是直接赌最终视频结果。",
        proof: [
          ["壁垒", "模板模特候选池先匹配，再生成首帧，视频数量跟随首帧数量。"],
          ["证据", "model-video-generator-rewrite/SKILL.md 和 matcher / generator 脚本可验证。"],
          ["展示", "详情页突出模板库、打标和首帧验收链路。"],
        ],
        href: "/cases/skill-digital-human-video.html",
      },
      {
        label: "Image",
        title: "商品图生成 Skill",
        big: "模板匹配 + 事实筛选",
        summary: "不是“给图生图”，而是先识别商品事实，再匹配卖点模板和画面限制。",
        proof: [
          ["壁垒", "7 轮任务文件夹、4 次交互门禁、卖点事实筛选把生图错误拦在前面。"],
          ["证据", "商品卖点图重构/SKILL.md 与 match_selling_points.py 写明模板匹配逻辑。"],
          ["展示", "详情页放 3 张结果图和模板库证据。"],
        ],
        href: "/cases/skill-product-image.html",
      },
      {
        label: "Try-on",
        title: "虚拟试衣生成 Skill",
        big: "三类输入分流",
        summary: "虚拟试衣的壁垒不在生成按钮，而在判断何时可生成、何时必须补模特或补授权。",
        proof: [
          ["壁垒", "商品图、人物图、服装类别走不同准入路径，缺少关键素材时不硬生成。"],
          ["证据", "Skill 页面和数字人视频链路中保留了首帧、人物、服装约束证据。"],
          ["展示", "详情页展示分流规则、失败原因和二次生成建议。"],
        ],
        href: "/cases/skill-virtual-try-on.html",
      },
    ],
  },
];

const aboutCards = [
  {
    title: "我能做什么",
    items: [
      "把电商图片、视频生成、多语言图像处理等业务需求拆成可落地的产品链路。",
      "定义 Tool、Skill、Workflow、Agent 的能力边界、入参出参、触发条件和调用协议。",
      "围绕测试集、模型版本、Prompt 版本、评估维度和 bad-case 建立持续优化流程。",
      "用 AI Coding 快速搭建测评平台、Prompt 管理、Skill 可视化、HTML 汇报等内部工具。",
    ],
  },
  {
    title: "经历背景",
    items: [
      "阿里国际数字商业集团：AI 设计中台 / 电商图片处理 / Agent / Skill / MCP / AI 测评。",
      "钉钉：企业级 AI 产品与智能会议纪要，参与用户调研、原型、PRD、协同交付。",
      "中关村科金：Prompt 工程与垂直领域模型优化，覆盖分类、抽取、摘要和 bad-case 分析。",
      "北京化工大学 211，本科，信息管理与信息系统。",
    ],
  },
  {
    title: "关键词",
    items: [
      "AIGC 产品、AI 图像处理、AI 视频生成、Agent 工作流。",
      "Skill / MCP / Tool Schema / LangGraph / Workflow。",
      "Prompt 工程、模型评测、工具路由、大模型微调。",
      "HTML 原型、自动化脚本、数据跑批、知识库、SOP、Loop。",
    ],
  },
];

function Nav() {
  return (
    <header className="nav-shell">
      <a className="brand-mark" href="#top" aria-label="返回首页">
        <span>LU</span>
        <small>AI PRODUCT PORTFOLIO</small>
      </a>
      <nav className="nav-links" aria-label="主导航">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function LinkButton({ href, children, primary = false }) {
  return (
    <a className={primary ? "button-link primary" : "button-link"} href={href}>
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

function ToolCard({ item, index }) {
  return (
    <article className="content-card tool-card">
      <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
      <p className="kicker">{item.kicker}</p>
      <h3>{item.title}</h3>
      <strong className="big-word">{item.big}</strong>
      <p className="claim">{item.claim}</p>
      <ul className="point-list">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="tag-row">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="actions">
        {item.links.map(([label, href], linkIndex) => (
          <LinkButton href={href} primary={linkIndex === 0} key={href}>
            {label}
          </LinkButton>
        ))}
      </div>
    </article>
  );
}

function BusinessCard({ item }) {
  return (
    <article className="content-card business-card">
      <div className="tag-row">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{item.title}</h3>
      <strong className="big-word">{item.big}</strong>
      <p className="claim">{item.summary}</p>
      <ul className="point-list">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="actions">
        {item.links.map(([label, href], index) => (
          <LinkButton href={href} primary={index === 0} key={href}>
            {label}
          </LinkButton>
        ))}
      </div>
    </article>
  );
}

function SkillCard({ item }) {
  return (
    <article className="content-card skill-card">
      <p className="kicker">{item.label}</p>
      <h3>{item.title}</h3>
      <strong className="big-word">{item.big}</strong>
      <p className="claim">{item.summary}</p>
      <ul className="proof-list">
        {item.proof.map(([label, text]) => (
          <li key={label}>
            <strong>{label}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <div className="actions">
        <LinkButton href={item.href} primary>
          案例详情
        </LinkButton>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="site-shell" id="top">
      <Nav />
      <main>
        <section className="hero-section">
          <p className="eyebrow">AI Product Portfolio</p>
          <h1>把 AI 想法做成能跑、能看、能复用的产品工具。</h1>
          <p className="hero-lead">
            我关注的是从问题到工具的完整落地：测评平台、Prompt 管理、信息产品、Skill 工作流、业务生成链路，以及能进入真实协作的产品产物。
          </p>
          <p className="hero-note">
            作品集按“能被看见”的顺序组织：自驱工具是主角，Skill 展示壁垒、证据和结果，业务项目只放脱敏产物和方法。
          </p>
          <div className="hero-actions">
            <LinkButton href="#tools" primary>
              看自驱工具
            </LinkButton>
            <LinkButton href="#business">看业务项目</LinkButton>
            <LinkButton href="#skills">看 Skill</LinkButton>
          </div>
        </section>

        <section className="section-block" id="tools">
          <SectionHeader
            eyebrow="Self-Driven Tools"
            title="自驱工具"
            text="这一组保留你原本作品集里的 7 个工具入口，每个工具都有对应案例详情；有 Demo 的保留 Demo，没有 Demo 的不补虚假链接。"
          />
          <div className="tool-grid">
            {tools.map((item, index) => (
              <ToolCard item={item} index={index} key={item.title} />
            ))}
          </div>
        </section>

        <section className="section-block" id="business">
          <SectionHeader
            eyebrow="Business Projects"
            title="业务项目：从 AI 能力到真实生产链路"
            text="这里放阿里国际 AI 设计中台相关工作中的业务项目，展示重点是产品方案、链路拆解、评测闭环和工程协同。"
          />
          <div className="business-grid">
            {businessProjects.map((item) => (
              <BusinessCard item={item} key={item.title} />
            ))}
          </div>
        </section>

        <section className="section-block" id="skills">
          <SectionHeader
            eyebrow="Skills"
            title="Skill：把工作方法做成可复用资产"
            text="这部分沿用原站的 A/B/C 分类，回答每个 Skill 卡住了哪个难点、为什么不是普通 Prompt、证据在哪里。"
          />
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-grid">
                {group.items.map((item) => (
                  <SkillCard item={item} key={item.title} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section-block" id="about">
          <SectionHeader
            eyebrow="About"
            title="关于我"
            text="我是卢柄元，AI 产品经理，关注 AIGC、Agent 工作流和 AI 原生工作系统。相比只写需求文档，我更擅长把一个模糊的 AI 能力拆成可调用的 Tool、可复用的 Skill、可观测的 Agent 流程，以及能持续优化的评测闭环。"
          />
          <div className="about-grid">
            {aboutCards.map((card) => (
              <article className="content-card about-card" key={card.title}>
                <h3>{card.title}</h3>
                <ul className="point-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="content-card about-card contact-card">
              <h3>联系方式</h3>
              <div className="contact-list">
                <a href="tel:13609358177">
                  <Phone size={17} />
                  <span>136-0935-8177</span>
                </a>
                <a href="mailto:13609358177@163.com">
                  <Mail size={17} />
                  <span>13609358177@163.com</span>
                </a>
              </div>
              <p>
                作品集只展示脱敏后的项目结构、方法和证据位；涉及公司内部业务细节、未公开数据和原始文档的部分，适合在面试中结合简历继续展开。
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
