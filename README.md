# Game Site Agents Template

一个用于搭建海外游戏热词站 / 游戏 Wiki 的可复用 Agent 工作流模板。

本仓库包含：

- 根目录 AGENTS.md：整合项目 Skill 的规则、阶段流程、交接协议、验证门槛和外部操作边界；
- skills/：六个项目级 Skill 的入口文件和按任务加载的 references。

## 目录结构

```text
AGENTS.md
README.md
skills/
├── game-site-research/
│   ├── SKILL.md
│   └── references/
├── game-site-level4-builder/
│   ├── SKILL.md
│   └── references/
├── wiki-page-builder/
│   ├── SKILL.md
│   └── references/
├── youtube-keyframe-extractor/
│   ├── SKILL.md
│   └── references/
├── seo-agent-site-optimization/
│   ├── SKILL.md
│   └── references/
└── game-site-external-link-outreach/
    ├── SKILL.md
    └── references/
```

每个 SKILL.md 保留触发条件、硬边界、主流程、输出和完成标准；详细方法、Schema、提示词、模板和检查清单放在对应 references 中，按当前任务读取。

## 六个 Skill

1. game-site-research：关键词、搜索意图、来源和页面矩阵；
2. game-site-level4-builder：首页、Wiki、Guide、素材和本地建站；
3. wiki-page-builder：单个 Wiki、Guide 或机制内页；
4. youtube-keyframe-extractor：视频字幕定位、关键帧、来源和页面接入；
5. seo-agent-site-optimization：GSC → SEO Agent → 站内优化 → 验证复盘；
6. game-site-external-link-outreach：外链研究、渠道评分、外展稿、授权执行、状态核验和引荐复盘。

## 推荐使用方式

1. 将 AGENTS.md 复制到新站根目录；
2. 将需要的整个 skills/<skill-name>/ 目录（包括 references）复制到新站的 .agents/skills/；
3. 替换 AGENTS.md 中的 [项目名]、[游戏名]、[正式域名] 等占位符；
4. 根据新项目实际文件名调整 Docs/、src/ 和 public/assets/ 约定；
5. 按 game-site-research → game-site-level4-builder → wiki-page-builder 执行；
6. 页面需要视频画面时，在单页生产前或过程中使用 youtube-keyframe-extractor；
7. 网站上线并产生真实搜索数据后，再使用 seo-agent-site-optimization；
8. 有可引用的深层内容资产且需要做外链研究或外展时，使用 game-site-external-link-outreach；任何公开发布、联系或提交都要单独授权。

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
