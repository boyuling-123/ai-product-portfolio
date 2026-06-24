# Prompt 管理平台 highlights

## 扫描文件

- /tmp/materials-desk-extract/prompt-platform/prisma/schema.prisma
- /tmp/materials-desk-extract/prompt-platform/src/app/prompts/[id]/page.tsx
- /tmp/materials-desk-extract/prompt-platform/src/app/api/prompts/[id]/rollback/route.ts
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/prompt-manager-01.png
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/prompt-manager-02.png
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/prompt-manager-03.png
- /Users/lu/Documents/skill与prd/工作与项目经历整理.md

## 候选亮点列表

- 入选｜技术壁垒｜Prompt 有版本实体：Prisma schema 把 Category、Prompt、PromptVersion 拆成三张表，并用 promptId+version 唯一约束版本。 证据：materials-desk / prompt-platform/prisma/schema.prisma
- 入选｜反直觉决策｜回滚也创建新版本：回滚接口不是覆盖旧内容，而是把目标版本内容写成 nextVersion，保留可追溯历史。 证据：materials-desk / prompt-platform/src/app/api/prompts/[id]/rollback/route.ts
- 入选｜跨领域整合｜接到测评和路由：经历材料写明 Prompt 管理与测评平台、工具路由实验、Agent 调试链路关联，不是孤立文档库。 证据：工作与项目经历整理.md
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. Prompt 有版本实体（技术壁垒）
   - 论据：Prisma schema 把 Category、Prompt、PromptVersion 拆成三张表，并用 promptId+version 唯一约束版本。
   - 页面锚点：cases/prompt-manager.html#evidence-prompt-manager-1
   - 证据：materials-desk / prompt-platform/prisma/schema.prisma
2. 回滚也创建新版本（反直觉决策）
   - 论据：回滚接口不是覆盖旧内容，而是把目标版本内容写成 nextVersion，保留可追溯历史。
   - 页面锚点：cases/prompt-manager.html#evidence-prompt-manager-2
   - 证据：materials-desk / prompt-platform/src/app/api/prompts/[id]/rollback/route.ts
3. 接到测评和路由（跨领域整合）
   - 论据：经历材料写明 Prompt 管理与测评平台、工具路由实验、Agent 调试链路关联，不是孤立文档库。
   - 页面锚点：cases/prompt-manager.html#evidence-prompt-manager-3
   - 证据：工作与项目经历整理.md

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
