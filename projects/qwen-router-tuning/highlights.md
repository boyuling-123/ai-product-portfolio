# Qwen3-4B 工具路由微调 highlights

## 扫描文件

- /Users/lu/Downloads/fine_tuned_qwen3_4b_eval_outputs (1).csv
- /Users/lu/Downloads/fine_tuned_qwen3_4b_eval_outputs.csv
- /Users/lu/Documents/skill与prd/工作与项目经历整理.md

## 候选亮点列表

- 入选｜数据/量化结果｜38 条路由样本：CSV 里有 38 条电商工具路由样本，字段覆盖 expected_tool_label、expected_tool 和 expected_arguments。 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs (1).csv
- 入选｜方法论沉淀｜选择和参数分开评：样本把工具类别、工具名、参数 JSON 拆开，能分别检查选错工具和参数生成错误。 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs (1).csv
- 入选｜反直觉决策｜失败样本不掩盖：评估文件保留 json_parse_error 这类失败列，能把失败样本回流到训练数据和规则优化。 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs*.csv / 工作与项目经历整理.md
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. 38 条路由样本（数据/量化结果）
   - 论据：CSV 里有 38 条电商工具路由样本，字段覆盖 expected_tool_label、expected_tool 和 expected_arguments。
   - 页面锚点：cases/qwen-router-tuning.html#evidence-qwen-router-tuning-1
   - 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs (1).csv
2. 选择和参数分开评（方法论沉淀）
   - 论据：样本把工具类别、工具名、参数 JSON 拆开，能分别检查选错工具和参数生成错误。
   - 页面锚点：cases/qwen-router-tuning.html#evidence-qwen-router-tuning-2
   - 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs (1).csv
3. 失败样本不掩盖（反直觉决策）
   - 论据：评估文件保留 json_parse_error 这类失败列，能把失败样本回流到训练数据和规则优化。
   - 页面锚点：cases/qwen-router-tuning.html#evidence-qwen-router-tuning-3
   - 证据：Downloads/fine_tuned_qwen3_4b_eval_outputs*.csv / 工作与项目经历整理.md

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
