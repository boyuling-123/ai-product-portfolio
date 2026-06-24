# AI 测评平台 highlights

## 扫描文件

- /Users/lu/Desktop/评测平台/评测平台2-自用（API接好）/测评平台v4.8-大批量数据与评价稳定性PRD.md
- /Users/lu/Desktop/评测平台/评测平台2-自用（API接好）/测评平台开发计划.md
- /Users/lu/Desktop/评测平台/评测平台2-自用（API接好）/src/lib/taskRunner.ts
- /Users/lu/Documents/skill与prd/portfolio/assets/screenshots/eval-platform-home.png
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/eval-platform-01.png

## 候选亮点列表

- 入选｜数据/量化结果｜3000 条分批跑通：v4.8 PRD 写明 3000 条级别数据可生成、导入、下载、跑批、评价；AI 造数按每批 30 条落表，避免 JSON 截断。 证据：评测平台v4.8-大批量数据与评价稳定性PRD.md
- 入选｜技术壁垒｜1 个 Runner 跑两类任务：开发计划把批量运行和 AI 评价统一到受控并发 Task Runner；并发 1-10，超出排队，运行与评价复用同一机制。 证据：测评平台开发计划.md / src/lib/taskRunner.ts
- 入选｜方法论沉淀｜标准答案先确认再评：导入 skill 区分 dataset_only、dataset_with_expected、run_plan、evaluation_plan；标准答案字段未确认时不能开始 reference 评价。 证据：测评平台v4.8-大批量数据与评价稳定性PRD.md
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. 3000 条分批跑通（数据/量化结果）
   - 论据：v4.8 PRD 写明 3000 条级别数据可生成、导入、下载、跑批、评价；AI 造数按每批 30 条落表，避免 JSON 截断。
   - 页面锚点：cases/eval-platform.html#evidence-eval-platform-1
   - 证据：评测平台v4.8-大批量数据与评价稳定性PRD.md
2. 1 个 Runner 跑两类任务（技术壁垒）
   - 论据：开发计划把批量运行和 AI 评价统一到受控并发 Task Runner；并发 1-10，超出排队，运行与评价复用同一机制。
   - 页面锚点：cases/eval-platform.html#evidence-eval-platform-2
   - 证据：测评平台开发计划.md / src/lib/taskRunner.ts
3. 标准答案先确认再评（方法论沉淀）
   - 论据：导入 skill 区分 dataset_only、dataset_with_expected、run_plan、evaluation_plan；标准答案字段未确认时不能开始 reference 评价。
   - 页面锚点：cases/eval-platform.html#evidence-eval-platform-3
   - 证据：测评平台v4.8-大批量数据与评价稳定性PRD.md

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
