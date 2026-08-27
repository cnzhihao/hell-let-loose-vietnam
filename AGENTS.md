# AGENTS.md — Game Site Template

本仓库是可复用的游戏 Wiki / 游戏资讯站起站模板，不是某个具体游戏站，也不是任何现有站点。所有工作默认只作用于当前 clone 的新站目录；不要为了验证模板去修改其他站点。

## 1. 项目目标和边界

模板基于 `mkfast-lite` 的成熟 TanStack Start 基础，提供：

- React 19、TypeScript、TanStack Start/Router、Vite、Tailwind CSS v4；
- Cloudflare Workers 适配、SEO endpoint、响应式布局、主题切换；
- Wiki 首页、分类目录、条目页、Guide 目录和可自定义 Guide 路径；
- 内容数据层、来源/证据字段、关联页、robots、sitemap 和基础 JSON-LD；
- 适合后续接入的关键词研究、单页生产、视频关键帧和上线后 SEO 复盘 Skills。

不包含：具体游戏事实、旧站资料、正式域名、GSC/GA 数据、账号、密钥、自动发布、自动外链和购买链接。

“模板可运行”只表示本地 starter 能启动；“正式站可发布”必须经过配置替换、来源核验、内容检查、构建检查和用户明确授权。

## 2. 开始任务前

先读取：

1. `README.md`；
2. 与任务对应的 `Docs/` 文件；
3. 相关 `skills/<skill-name>/SKILL.md`；
4. SKILL 中列出的必要 references；
5. `git status --short --branch` 和当前路由/内容/素材。

保留用户已有修改。编辑本地文件使用 `apply_patch`；不使用 `git reset --hard`、`git checkout --` 或无范围的批量覆盖。

## 3. 模板初始化状态

默认配置必须保持以下安全状态，直到真实站资料准备完成：

- `src/config/website.ts` 中 `isTemplate: true`；
- `websiteConfig.url` 未设置为真实域名；
- `src/config/game.ts` 不包含虚构的官方链接；
- 示例条目 `indexable: false`、`evidenceState: 'pending'`；
- `/robots.txt` 输出 `Disallow: /`；
- `/sitemap.xml` 不输出 URL；
- 首页、目录和条目输出 `noindex`；
- 不写入 GA/GSC、Cloudflare、GitHub 或第三方平台的秘密。

内容检查会阻止模板模式下出现 `indexable: true` 的条目。准备上线时，先完成真实资料和来源替换，再切换 `isTemplate: false`，然后重新执行全部检查；不要通过删除检查来“解决”失败。

## 4. 代码分层

```text
框架层：src/components、src/routes、src/lib、src/styles.css
配置层：src/config/website.ts、src/config/game.ts、project.inlang/
内容层：src/content/、Docs/、public/assets/
工作流层：skills/、scripts/、tests/
```

优先修改配置层和内容层，不把某个游戏名、域名、统计 ID 或旧项目文案硬编码进框架层。通用条目用 `src/content/site.ts` 的数据模型驱动；如果内容规模增长，可拆成 `src/content/entries/<slug>.ts`，但要保持同一类型契约和校验脚本。

### 内容契约

每个 `WikiEntry` 至少需要：

- `slug`、`categorySlug`、`title`、`pageType`、`summary`、`lead`；
- `indexable`、`evidenceState`、`updated`、`keywords`；
- `facts`、`sections`、`sources`、`relatedSlugs`；
- 需要特殊 URL 时添加稳定的 `path`，并用它作为 canonical 和 sitemap 路径。

可索引条目必须有可靠来源；动态事实必须写采集/更新时间和复核边界。证据状态只能使用 `verified`、`single-official-source`、`community-lead`、`pending`。

### 生成文件

以下文件由工具生成，不手工维护：

- `src/routeTree.gen.ts`：修改文件路由后由 TanStack/Vite 重新生成；
- `src/locale/paraglide/`：修改 `project.inlang/messages/` 后运行 `pnpm locale:compile`；
- `worker-configuration.d.ts`：修改 Cloudflare 配置后运行 `pnpm cf-typegen`。

## 5. 路由和 SEO 规则

基础路由：

- `/`：搜索入口、分类、starter 页面和工作流说明；
- `/wiki`：Wiki 总目录；
- `/wiki/<category>`：分类目录；
- `/wiki/<category>/<entry>`：默认条目地址；
- `/guides`、`/guides/<slug>`：Guide 目录和任务型攻略；
- `/robots.txt`、`/sitemap.xml`、`/manifest.webmanifest`：机器可读 endpoint。

要求：

- 每页只有一个主 H1，H2/H3 按玩家任务组织；
- title、description、canonical、robots、Open Graph 和适用的 JSON-LD 与页面数据一致；
- sitemap 只放 `indexable` 且有来源的页面；
- 旧路径如需迁移，使用明确的 301，不产生重复 canonical；
- 内容不足时 `noindex, follow` 或保留为待发布草稿，不为凑数量开放薄页；
- 内链必须能从首页/Wiki/Guide 目录到达，且锚文本说明目标。

默认只启用英文页面。Paraglide 保留为可选基础设施；如果新增中文或其他语言，必须有完整翻译、对应路由、hreflang 和 E2E 验证，不能只复制未翻译页面。

## 6. Skill 路由

| 任务 | Skill | 阶段 |
|---|---|---|
| 初始化新站、检查模板安全状态、替换配置 | `game-site-template-builder` | 起站 |
| 选择游戏词、关键词、页面矩阵和证据 | `game-site-research` | 研究 |
| 首页/Wiki/Guide/素材和本地实现 | `game-site-level4-builder` | 建站 |
| 一个具体内页、操作链、图注和来源 | `wiki-page-builder` | 内容 |
| YouTube 时间点、关键帧和可追溯截图 | `youtube-keyframe-extractor` | 视觉证据 |
| 新站上线前的 metadata、robots、sitemap 和可索引性审计 | `game-site-seo-readiness` | 上线前 |
| 上线后的 GSC、SEO Agent 和站内迭代 | `seo-agent-site-optimization` | 数据 |
| 有引用资产后的外链研究和外展 | `game-site-external-link-outreach` | 站外运营 |

标准顺序：

```text
template-builder → research → level4-builder → wiki-page-builder
→ seo-readiness → local checks → authorized deployment
→ SEO Agent / external-link outreach
```

后两个运营 Skill 不得在模板初始化阶段默认执行。SEO 和外链都不能替代来源研究与页面质量。

## 7. 来源、素材和事实边界

来源优先级：游戏官网、官方商店/平台页、官方 Wiki/新闻/YouTube、可靠媒体、社区资料。Google 搜索结果用于发现检索表达，不直接作为事实来源；社区视频或帖子只能证明其展示的案例，不能自动证明官方规则。

禁止：编造 URL、配方、数值、平台、价格、兑换码、联机能力、完整字幕或官方身份；使用 404、下载站、可疑 SEO 页或竞争对手链接；把参考站内容、图片、品牌或代码复制进模板。

图片进入 `public/assets/` 前要有来源、用途、归属、采集日期、尺寸和使用边界，并同步 `Docs/素材清单.md` 与 `public/assets/asset-manifest.json`。视频原始文件、signed URL、原始音频和临时下载物不得进入 Git。

## 8. 外部操作授权

默认不执行：部署、DNS、Cloudflare、GSC、GA、Bing、sitemap 提交、索引请求、发帖、发邮件、第三方 Wiki/目录编辑、创建账号、付费建链或联系站长。

即使用户说“做 SEO”或“找外链”，也先做只读分析和草稿；只有具体渠道、目标 URL、内容和动作都获得明确授权后，才执行一个外部动作并立即核验。清楚区分草稿、已发送、Pending、公开 URL、已核验链接和引荐流量。

## 9. 验证和完成定义

常用验证：

```bash
pnpm content:check
pnpm locale:check
pnpm check
pnpm build
pnpm e2e
jq empty Docs/keywords.json public/assets/asset-manifest.json
```

完成报告必须写明：修改文件、实际完成阶段、未完成项及原因、验证结果、是否执行外部操作和下一步最小动作。

状态不可混写：

```text
研究完成 ≠ 页面完成 ≠ 本地可访问 ≠ GitHub 已推送
≠ 公网已部署 ≠ sitemap 已提交 ≠ 已被收录 ≠ 有长期搜索流量
```

无论任务是否完成，本轮没有执行外部操作时，都明确说明：未部署、未提交索引、未发帖、未外展、未创建账号、未购买链接。
