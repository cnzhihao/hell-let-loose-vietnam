---
name: game-site-level4-builder
description: Build and review a player-first game Wiki or game hot-word site from verified keyword materials. Use this skill whenever the user mentions 生财关卡 4、Level 4、把关键词素材做成网站、搭建/改造游戏 Wiki、参考别人做 Wiki、首页像 Micro SaaS、需要 TanStack + Cloudflare 建站、收集真实游戏素材、生成游戏内页，或要求本地启动、检查 SEO、提交关卡 4 作业。它会先读取项目资料和参考对象，再实现首页、Wiki 索引、真实内页和本地验证，并严格区分“本地实现”“作业提交”和“公网部署”。
compatibility: Requires a project directory with filesystem access, Node.js/npm for a web project, and JSON/Markdown validation tools. Use the configured Shengcai MCP for handbook lookup when available; do not replace it with direct browser operation.
---

# Game Site Level 4 Builder

把关卡 2/3 得到的关键词、页面矩阵、真实素材和来源，落成一个玩家能快速找到答案的游戏 Wiki 首版。这个 Skill 只负责关卡 4 的内容生成、前端搭建和本地交付；公网部署、域名、GSC/GA 和数据复盘属于后续关卡，除非用户明确要求，不要提前执行。

## 什么时候使用

当用户要做以下任一事情时使用本 Skill：

- 按生财有术“国外-热词游戏站”路线进入关卡 4；
- 把 `keywords.json`、关键词素材或首页开发信息变成可访问网站；
- 创建或改造游戏 Wiki、攻略站、游戏 SEO 站的首页、分类页和内页；
- 用户说“先找参考对象并模仿”“这个首页不像 Wiki”“玩家想直接找到东西”；
- 用户指定 TanStack、Cloudflare、React 或要求启动本地服务器；
- 收集官方游戏图片、图标、视频缩略图并放入 `public/assets/`；
- 检查 title、description、H1/H2/H3、内部链接、移动端布局或关卡 4 作业材料。

如果任务只是搜索关键词、收集来源和制作页面矩阵，使用项目中的 `game-site-research`；如果已经进入“把资料做成网站”，使用本 Skill，并在需要时同时读取研究 Skill 的输出。

## 不可越过的边界

1. **先判断真实状态。** 不能把“有素材”写成“网站完成”，不能把“本地可访问”写成“已上线”，不能把“有 Cloudflare 配置”写成“已部署”。
2. **手册用生财 MCP 读取。** 用户要求查看、核对、总结生财手册或关卡时，先用配置好的生财 MCP；不要直接操作浏览器，也不要用通用网页搜索替代。按 `activitySearch`/`activityList` → `activityManualToc` → `activityManualDetail` 读取，并只使用同一次目录返回且 `hasContent=true` 的 `itemId`。MCP 不可用时要说明原因。
3. **事实必须来自素材。** 不编造配方、数值、兑换码、联机模式、平台范围、视频字幕、官方链接或发布日期。证据不足时写“暂无可靠公开资料”或保留为待复核页。
4. **参考不等于复制。** 参考站只用于观察搜索入口、分类、条目密度、事实卡和攻略结构；不要复制其文案、品牌、图片、代码、外链或竞争站资源。
5. **不为了凑页面而灌水。** 一个页面对应一个明确关键词或玩家问题；Florin、Cheats、Debug Mode、精确配方和动态平台结论等证据薄弱主题，宁可缩短并标记边界。
6. **不泄露秘密。** 不把 API Key、Cloudflare Token、GSC/GA 密钥、登录状态或密码写进 Skill、源码、Docs 或聊天。
7. **只改项目范围内的文件。** 先读 `README.md`、`AGENTS.md` 和当前关卡文档；保留用户已有文件，编辑文本使用 `apply_patch`。

## 第 1 步：读取项目和确定输入

先做只读检查，不要立即改代码：

1. 读取项目根目录的 `README.md`、`AGENTS.md`。
2. 读取当前关卡对应的作业与素材，至少包括：
   - `Docs/首页开发信息.json`；
   - `Docs/关键词素材.md`；
   - `Docs/keywords.json`；
   - `README.md` 的页面矩阵；
   - `Docs/关卡4-参考网站、内容与结构.md`；
   - `Docs/关卡4-改造过程记录.md`；
   - `Docs/素材清单.md` 和 `public/assets/asset-manifest.json`（如果已存在）。
3. 检查 `package.json`、`vite.config.*`、`wrangler.*`、`src/routes/`、`src/components/`、`src/data/` 和现有样式。
4. 检查 `git status --short --branch`，识别用户已有改动；不要覆盖未理解的改动。
5. 记录当前状态：哪些是资料完成、哪些是代码完成、哪些是本地验证完成、哪些仍未提交或未部署。

如果用户要求 Cloudflare 且推荐 TanStack，优先采用并记录 `TanStack Start + React + TanStack Router` 与 Cloudflare Workers 构建配置；如果用户没有指定技术栈，不要凭项目没有 `package.json` 就假定技术栈，先选择一个最小可运行方案并写入记录。

## 第 2 步：先找参考对象，再决定 Wiki 结构

至少比较多个参考对象，并把观察和取舍写入 `Docs/参考对象.md` 或 `Docs/关卡4-参考网站、内容与结构.md`。优先查看：

- 游戏官方 Wiki：搜索、Materials/Buildings/Systems 等分类、密集条目列表；
- 一个数据库型 Wiki：条目标签、分类跳转、状态、相关页面；
- 一个新手攻略站：breadcrumb、摘要、步骤、callout、目录、Sources、Related pages；
- 一个补充参考：事实卡、FAQ、页面分组或快速入口。

把参考结构映射到目标站，而不是只列网址。例如：

| 玩家任务 | Wiki 结构 |
|---|---|
| 我知道关键词 | 首页搜索 → `/wiki/<slug>` |
| 我不知道关键词 | `/wiki` 分类 → 条目列表 |
| 我刚开始玩 | `/guide` → 相关资源和物流页 |
| 我想确认平台/更新 | 独立的 Steam、Demo、Game Pass、Online、Updates 条目 |

首页的第一任务是让玩家在几秒内搜索、浏览分类或进入新手页。不要把有限空间先花在长篇项目介绍、团队故事、统计数字、泛化 FAQ 或 Micro SaaS 式 CTA 上；游戏介绍可以保留，但应服务于查找和下一步阅读。

若项目有 `frontend-design` Skill，在视觉重塑前读取它并执行“计划 → 自查 → 构建 → 截图/预览 → critique”的循环。视觉应该从游戏素材抽取配色和一个可识别的签名元素，不能用无关的通用模板装饰 Wiki。

## 第 3 步：把关键词和证据变成内容模型

优先使用数据驱动的内容模型，而不是把所有文案硬编码在路由组件里。常见结构如下，字段可按项目调整：

```ts
type WikiEntry = {
  slug: string
  title: string
  category: string
  kind: string
  summary: string
  status: string
  updated: string
  keywords: string[]
  sources: { label: string; href: string }[]
  related: string[]
  facts?: { label: string; value: string }[]
  lead?: string
  sections?: { heading: string; paragraphs: string[] }[]
}
```

写每页前确认：

- 这个页面对应哪个关键词和用户意图；
- 它属于入口、新手、知识、机制、平台、更新还是社区；
- 它的证据状态是“已交叉验证”“单一官方来源”“社区线索待复核”还是“暂缓发布”；
- 它应该链接到哪些父级、兄弟页、官方 CTA 和 Sources。

页面首屏优先回答问题：页面类型、H1、摘要、状态/更新时间、Short answer 或 Quick facts。正文再按 3–5 个清晰 H2 拆开。不要为了满足“1200 字”机械扩写；如果原始素材只有有限事实，保持简洁并公开证据边界。

动态事实（版本、发售、价格、评价、语言、Game Pass、平台标签、兑换码）带采集日期。官方标签和玩家猜测冲突时以官方为准；没有完整字幕时只能写视频标题、简介、章节或可见内容摘要。

## 第 4 步：实现最小 Wiki 首版

最低交付应包含以下路由，名称可按现有项目适配：

1. `/`：Wiki 首页。至少有搜索入口、热门/快速入口、分类入口和新手 Guide；可放官方 Demo/Steam CTA。
2. `/wiki`：完整索引。至少有搜索、分类分组、分类锚点或侧栏、官方链接和证据提示。
3. `/wiki/<slug>`：动态真实内页。至少先做一个有可靠来源的主题，再批量接入其他关键词。
4. `/guide`：新手攻略内页。建议包含 breadcrumb、摘要、Short answer、步骤 H2、目录、事实卡、Sources、Related pages。

实现时遵守：

- 内容集中在 `src/data/` 或等价内容层，路由负责渲染；
- 内部导航用 TanStack Router 的 `Link`，避免把站内跳转写成整页刷新 `<a>`；
- 父级 `/wiki` layout 与索引页、动态条目路由保持清晰的嵌套路由关系；
- 主题色、官方链接、游戏事实来自首页开发信息和关键词素材；
- 用真实素材填充，不能把研究阶段的猜测直接变成公开断言；
- 先让页面能访问，再迭代视觉；不因为设计未完美而阻塞最小可用首版。

## 第 5 步：收集和接入静态素材

素材优先来自官网、Steam、官方 Wiki、官方 YouTube 和官方平台商店。参考站只用于结构研究，不作为图片下载源。

新增素材时：

1. 放入项目的 `public/assets/`；favicon 等项目图标按现有目录规则保留。
2. 在 `Docs/素材清单.md` 记录文件、用途、来源、归属和发布风险。
3. 同步更新 `public/assets/asset-manifest.json`，保持合法 JSON。
4. 标明图片尺寸和适用场景；16×16 图标只用于小标签，不要强行放大做 hero。
5. 记录“官方来源”不等于获得商标、版权或商业再分发授权；商业化前重新核对授权边界。
6. 接入页面时添加有意义的 `alt`，不把官方素材伪装成本站原创。

建议的接入节奏是：先把一张主视觉接入首页，再给 1–2 个高优先级条目接图标，最后决定是否使用体积较大的横幅。不要为了“素材已收集”就声称素材系统已经完成。

## 第 6 步：SEO、结构和可访问性检查

每个已实现页面逐一检查：

- `title` 与 `description` 已填，内容准确且与页面意图一致；
- 页面只有一个主 H1，H2/H3 顺序合理；
- 首页、索引、条目、Guide 之间存在可点击的内部链接；
- 外部官方链接使用真实 URL、明确标签和安全的 `target`/`rel`；
- 图片有准确 `alt`，装饰元素有适当的无障碍处理；
- 动态条目从 slug 找不到内容时返回清晰的 Not found，不渲染空白页；
- 搜索结果能进入真实页面，分类锚点和移动端布局不被溢出遮挡；
- 全站没有旧游戏名、旧域名、旧 sitemap、旧 robots、旧统计 ID 或旧 CTA 残留。

标题和描述的目标长度以项目作业为准；如果要求 40–60 字符标题、140–160 字符描述，使用脚本实测，不凭眼睛判断。长度合规不能替代事实准确和用户价值。

## 第 7 步：本地验证和开发服务器

至少执行这些检查，保留真实结果：

```bash
jq empty Docs/keywords.json Docs/首页开发信息.json public/assets/asset-manifest.json
npm run build
npm run dev -- --host 127.0.0.1
```

开发服务器启动后，用 `curl` 或可用的本地浏览器检查首页、Wiki、Guide、至少一个真实条目和所有已实现路由；确认返回 200、页面有正确 title/description/H1，静态素材能返回 200。页面结构复杂时再用浏览器检查桌面和窄屏布局。此处的浏览器检查是测试本地应用，不是用浏览器读取生财手册。

验证记录至少包括：

- 构建/类型检查结果；
- JSON 与素材 manifest 结果；
- 关键路由状态码；
- title、description、H1/H2/H3 和导航结果；
- 官方 CTA、Sources、Related pages 是否可点击；
- 移动端基本布局和图片加载结果；
- 当前仍未完成的截图、作业提交、部署或数据接入。

## 第 8 步：更新文档并准确交付

完成实现后更新 `Docs/关卡4-改造过程记录.md`，内容至少覆盖：

1. 起点问题和用户反馈；
2. 参考对象及其结构如何映射；
3. 严重干扰修复和视觉重塑；
4. 首页、索引、真实内页和 Guide 的实现；
5. 素材目录、来源和使用边界；
6. SEO、路由、构建、SSR/本地浏览器验证；
7. GitHub、作业截图、公网部署的实际状态；
8. 当前关卡 4 结论和下一步。

交付回复固定说明四件事：

- 修改了哪些文件；
- 完成了哪个关卡或子步骤；
- 还有哪些未完成，尤其是作业提交和公网部署；
- 做了哪些验证，以及下一步最小行动。

推荐的状态措辞：

> 关卡 4 网站实现已完成，首页、Wiki 索引、真实内页和本地验证已具备；正式截图/作业提交待收尾。当前没有 Cloudflare 公网部署、GSC/GA 数据，因此不把项目写成已上线或已有流量。

## 关卡 4 完成判定

将状态拆成三层，不要用一个“完成”掩盖差异：

| 状态 | 可以写 | 还不能写 |
|---|---|---|
| 资料完成 | 来源、事实、关键词和证据边界已整理 | 网站已完成 |
| 网站实现完成 | 本地首页、索引、真实内页、Guide 和结构检查通过 | 已上线、已收录、有流量 |
| 交付闭环完成 | 截图、代码版本、关卡 4 作业材料已整理/提交 | GSC/GA 已有数据 |

只有用户明确要求并且实际完成公网操作后，才进入 Cloudflare 部署检查。部署前不要提前生成或伪造正式域名、sitemap、robots、GSC、GA 或搜索数据。

## 最小质量门槛

在没有把任务交给用户前，确认：

- [ ] 已读项目规则和关卡 4 输入文件；
- [ ] 已记录多个参考对象和结构取舍；
- [ ] 首页是玩家查找入口，而不是长篇 SaaS 介绍；
- [ ] 有 `/wiki`、至少一个真实 `/wiki/<slug>` 和 `/guide`；
- [ ] 内容来自素材，每个页面有来源和证据边界；
- [ ] 官方素材有 manifest、用途、来源和归属说明；
- [ ] title、description、单一 H1、H2/H3、内部链接已检查；
- [ ] `jq empty`、`npm run build`、关键路由和素材状态码通过；
- [ ] 文档记录了完成项、未完成项和下一步；
- [ ] 没有把本地实现、GitHub、Cloudflare、公网、GSC/GA 混为一谈。
