# Game Site Agents Template

一个用于搭建海外游戏热词站 / 游戏 Wiki 的可复用 Agent 工作流模板。

本仓库包含：

- 根目录 AGENTS.md：整合五个 Skill 的项目规则、阶段流程、交接协议、验证门槛和外部操作边界；
- skills/：五个项目级 Skill 的详细执行说明。

## 五个 Skill

1. game-site-research：关键词、搜索意图、来源和页面矩阵；
2. game-site-level4-builder：首页、Wiki、Guide、素材和本地建站；
3. wiki-page-builder：单个 Wiki、Guide 或机制内页；
4. youtube-keyframe-extractor：视频字幕定位、关键帧、来源和页面接入；
5. seo-agent-site-optimization：GSC → SEO Agent → 站内优化 → 验证复盘。

## 推荐使用方式

1. 将 AGENTS.md 复制到新站根目录；
2. 按需将 skills/ 下的 Skill 复制到新站的 .agents/skills/；
3. 替换 AGENTS.md 中的 [项目名]、[游戏名]、[正式域名] 等占位符；
4. 根据新项目实际文件名调整 Docs/、src/ 和 public/assets/ 约定；
5. 按 game-site-research → game-site-level4-builder → wiki-page-builder 执行；
6. 页面需要视频画面时，在单页生产前或过程中使用 youtube-keyframe-extractor；
7. 网站上线并产生真实搜索数据后，再使用 seo-agent-site-optimization。

## 状态边界

模板要求严格区分：

资料已整理
≠ 网站已实现
≠ 本地可访问
≠ 公网已部署
≠ sitemap 已提交
≠ URL 已被收录
≠ 实时测试访问是长期搜索流量

公网部署、账户操作、索引请求、发帖、外链、联系站长和付费动作，均需要明确授权。

## 仓库范围

本仓库只保存可复用的工作流和 Skill 文档，不包含具体游戏项目源码、GSC/GA 数据、部署凭据、素材文件或账号信息。
