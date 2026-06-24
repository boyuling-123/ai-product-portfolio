# 虚拟试衣生成 Skill highlights

## 扫描文件

- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/SKILL.md
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/image_understand.py
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/first_frame_generator.py
- /Users/lu/Downloads/skill可视化/model-video-generator-rewrite/scripts/model_template_matcher.py

## 候选亮点列表

- 入选｜技术壁垒｜3 类输入先分流：Skill 先识别模特图、衣物图、其他图，再按只有衣物、只有模特、两者都有三种场景分流。 证据：skill可视化/model-video-generator-rewrite/SKILL.md
- 入选｜反直觉决策｜缺模特不硬生成：只有衣物图时先让用户选模板模特或上传模特图；确认前不进入试穿首帧。 证据：skill可视化/model-video-generator-rewrite/SKILL.md
- 入选｜方法论沉淀｜首帧就是验收点：first_frame_generator 要求有衣物图时必须提供模特图或模板模特图，未解析到首帧会抛错。 证据：skill可视化/model-video-generator-rewrite/scripts/first_frame_generator.py
- 筛掉｜泛化形容词没有进入首屏；缺少文件证据或数字对比时，只保留在二级说明或素材缺口。

## 最终入选亮点与证据

1. 3 类输入先分流（技术壁垒）
   - 论据：Skill 先识别模特图、衣物图、其他图，再按只有衣物、只有模特、两者都有三种场景分流。
   - 页面锚点：cases/skill-virtual-try-on.html#evidence-skill-virtual-try-on-1
   - 证据：skill可视化/model-video-generator-rewrite/SKILL.md
2. 缺模特不硬生成（反直觉决策）
   - 论据：只有衣物图时先让用户选模板模特或上传模特图；确认前不进入试穿首帧。
   - 页面锚点：cases/skill-virtual-try-on.html#evidence-skill-virtual-try-on-2
   - 证据：skill可视化/model-video-generator-rewrite/SKILL.md
3. 首帧就是验收点（方法论沉淀）
   - 论据：first_frame_generator 要求有衣物图时必须提供模特图或模板模特图，未解析到首帧会抛错。
   - 页面锚点：cases/skill-virtual-try-on.html#evidence-skill-virtual-try-on-3
   - 证据：skill可视化/model-video-generator-rewrite/scripts/first_frame_generator.py

## 决策依据

只把本地文件、截图、PRD 或源码中能直接看到的内容放进首屏；只有泛泛逻辑、没有证据的点放入二级页或留待补素材。
