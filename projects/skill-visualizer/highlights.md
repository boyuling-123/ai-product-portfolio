# Skill Visualizer highlights

## 扫描文件

- /Users/lu/Downloads/skill可视化/docs/PRD-skill-visualizer-v0.1.md
- /Users/lu/Downloads/skill可视化/docs/CC-Runtime-Event-Protocol.md
- /Users/lu/Downloads/skill可视化/scripts/skill-graph.mjs
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/skill-visualizer-01.png
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/skill-visualizer-02.png
- /Users/lu/Documents/skill与prd/portfolio/assets/evidence/handwritten/skill-visualizer-03.png

## 候选亮点列表

- 入选｜反直觉决策｜HTML 只做观察者：协议把真实执行留在 Claude Code，HTML 只接收 run/node/file 级事件，避免浏览器直接跑本地命令。 证据：skill可视化/docs/CC-Runtime-Event-Protocol.md
- 入选｜方法论沉淀｜8 类事件统一语义：协议定义 run.started、node.output、file.write 等 8 类事件，让 Skill 节点状态可追踪。 证据：skill可视化/docs/CC-Runtime-Event-Protocol.md
- 入选｜技术壁垒｜多 Skill 节点画板：PRD 要求上传多个 Skill，解析节点、输入输出和跨 Skill 连线，先验证数据流表达再接执行器。 证据：skill可视化/docs/PRD-skill-visualizer-v0.1.md
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. HTML 只做观察者（反直觉决策）
   - 论据：协议把真实执行留在 Claude Code，HTML 只接收 run/node/file 级事件，避免浏览器直接跑本地命令。
   - 页面锚点：cases/skill-visualizer.html#evidence-skill-visualizer-1
   - 证据：skill可视化/docs/CC-Runtime-Event-Protocol.md
2. 8 类事件统一语义（方法论沉淀）
   - 论据：协议定义 run.started、node.output、file.write 等 8 类事件，让 Skill 节点状态可追踪。
   - 页面锚点：cases/skill-visualizer.html#evidence-skill-visualizer-2
   - 证据：skill可视化/docs/CC-Runtime-Event-Protocol.md
3. 多 Skill 节点画板（技术壁垒）
   - 论据：PRD 要求上传多个 Skill，解析节点、输入输出和跨 Skill 连线，先验证数据流表达再接执行器。
   - 页面锚点：cases/skill-visualizer.html#evidence-skill-visualizer-3
   - 证据：skill可视化/docs/PRD-skill-visualizer-v0.1.md

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
