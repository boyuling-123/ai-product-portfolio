# 数字人视频生成 Skill highlights

## 扫描文件

- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/SKILL.md
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/model_template_matcher.py
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/first_frame_generator.py
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/video_generator.py
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/_poll_task.py

## 候选亮点列表

- 入选｜反直觉决策｜先首帧再视频：Skill 明确不从衣物图一步生成视频，而是先生成试穿首帧，再把首帧交给视频模型。 证据：skill可视化/model-video-generator-rewrite/SKILL.md
- 入选｜技术壁垒｜模板模特候选池：只有衣物图时不乱配模特，先查询模板候选，让用户选择后再生成试穿首帧。 证据：skill可视化/model-video-generator-rewrite/scripts/model_template_matcher.py
- 入选｜方法论沉淀｜视频数量跟首帧走：不固定生成 4 段视频；1 张首帧生成 1 段，多张首帧生成多段，数量由前序选择决定。 证据：model-video-generator-rewrite/SKILL.md / scripts/video_generator.py
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. 先首帧再视频（反直觉决策）
   - 论据：Skill 明确不从衣物图一步生成视频，而是先生成试穿首帧，再把首帧交给视频模型。
   - 页面锚点：cases/skill-digital-human-video.html#evidence-skill-digital-human-video-1
   - 证据：skill可视化/model-video-generator-rewrite/SKILL.md
2. 模板模特候选池（技术壁垒）
   - 论据：只有衣物图时不乱配模特，先查询模板候选，让用户选择后再生成试穿首帧。
   - 页面锚点：cases/skill-digital-human-video.html#evidence-skill-digital-human-video-2
   - 证据：skill可视化/model-video-generator-rewrite/scripts/model_template_matcher.py
3. 视频数量跟首帧走（方法论沉淀）
   - 论据：不固定生成 4 段视频；1 张首帧生成 1 段，多张首帧生成多段，数量由前序选择决定。
   - 页面锚点：cases/skill-digital-human-video.html#evidence-skill-digital-human-video-3
   - 证据：model-video-generator-rewrite/SKILL.md / scripts/video_generator.py

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
