# DeepSeek 暖陶视觉依据

- 原型展示页提供了徽标、尺寸、配色、双语问候语和星空轨道的设计依据。
- [徽标](src/client/assets/deepseek.svg) 取自原型的内嵌 SVG。使用原始 `0 1 27 21` viewBox 和 `#4176e6` 蓝色。
- [主题配对](src/theme/palette.js) 将暖陶明暗颜色映射为 DSH 令牌。字体使用 Anthropic Serif Display、Source Han Serif CN 和 Songti SC 的本机可用回退。
- 首屏延续原型的居中层次和留白。动画集中于问候语、推理轨道和测速状态，并响应系统的减少动态效果设置。
