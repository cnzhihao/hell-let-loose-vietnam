# AGENTS.md — 海外游戏热词站上站模板

> 用法：把本文件复制到新项目根目录，并重命名为 `AGENTS.md`。先替换文中的 `[项目名]`、`[游戏名]`、`[正式域名]` 等占位符，再开始执行任务。
>
> 本模板把以下 5 个项目级 Skill 的工作流固化为一套可复查的上站流程：
>
> - `game-site-research`
> - `game-site-level4-builder`
> - `wiki-page-builder`
> - `youtube-keyframe-extractor`
> - `seo-agent-site-optimization`

## 1. 项目身份和目标

你正在维护的是 `[项目名]` 海外游戏热词站，不是 `[游戏名]` 游戏本体，也不是游戏下载站。

项目目标：围绕一个正在被搜索的海外游戏词，完成以下可复查链路：

```text
搜索需求
→ 关键词和页面矩阵
→ 可靠来源与真实素材
→ 首页、Wiki 和攻略内页
→ 本地验证
→ 公网部署
→ GSC/GA 数据
→ SEO 复盘、补页或继续观察
```

网站必须优先帮助玩家完成查找和操作：

- 首页提供搜索、热门条目、分类入口和新手入口；
- Wiki 承接资源、建筑、机制、平台和更新等事实查询；
- Guide 承接 Map、Water、Lava、Animals、工厂或新手操作等任务；
- 官方 Steam、Demo、Game Pass 或其他平台链接只承接真实的平台访问需求；
- 上线后根据 GSC/GA 和页面证据决定补页、改造、继续观察或停止扩张。

### 1.1 可替换配置

开始新项目时先补齐：

| 配置 | 值 |
|---|---|
| 项目名 | `[项目名]` |
| 游戏名 | `[游戏名]` |
| 主词 | `[主关键词]` |
| 正式域名 | `[正式域名]` |
| canonical 协议 | `https://` 或项目实际协议 |
| 目标语言 | `[语言]` |
| 代码仓库 | `[仓库地址或未建立]` |
| 技术栈 | `[例如 TanStack Start + React + Cloudflare Workers]` |
| 资料根目录 | `Docs/` |
| 静态素材目录 | `public/assets/` |

如果某项尚未确认，写“未确认”，不要根据项目名称、旧项目或环境变量猜测。

## 2. 全局工作规则

### 2.1 开始任何新任务前

先读取：

1. 项目根目录的 `README.md`；
2. 当前 `AGENTS.md`；
3. 与任务对应的 `Docs/` 资料、作业、研究报告或 SEO 报告；
4. 相关代码、素材和当前 `git status --short --branch`。

先做只读检查，再决定是否编辑。用户已有的未提交修改属于用户资产，不得覆盖、回滚或批量清理。

### 2.2 生财手册规则

当用户要求查看、核对、搜索或总结生财有术航海手册、关卡、任务卡或作业要求时，必须使用配置好的生财 MCP。

读取顺序：

```text
activitySearch 或 activityList
→ 确认 activityId
→ activityManualToc
→ activityManualDetail
```

要求：

- 不根据 URL 或名称自行猜 `activityId`；
- `activityManualDetail` 只能使用同一次目录返回、且 `hasContent=true` 的 `itemId`；
- 如果返回 `truncated=true`，继续用 `nextOffset` 读取，直到完整或已足够回答；
- 生财 MCP 不可用时说明原因，再考虑其他读取方式；
- 读取手册是只读操作；提交作业、评论、点赞、收藏或修改站内数据必须得到用户明确授权。

### 2.3 文件和编辑规则

- 所有项目文件放在项目目录内，不要写到工作区根目录；
- 项目文档、关键词、研究资料和报告放在 `Docs/`；
- 使用 `apply_patch` 编辑文本和代码；
- 不删除、重命名或覆盖用户已有文件，除非用户明确要求；
- JSON 必须合法，用 `jq empty` 或等价工具检查；
- Markdown 必须能被普通编辑器阅读；
- `public/assets/` 只存可追溯、明确要发布的静态素材；
- 新素材必须同步更新素材清单和 `asset-manifest.json`；
- 不在仓库、报告、Skill、源码或聊天中写入 API Key、密码、Cookie、Cloudflare Token、GSC/GA 密钥或其他秘密；
- 不复制旧项目的域名、游戏名、sitemap、robots、统计 ID、品牌、文案或来源链接。

### 2.4 事实和来源规则

来源优先级：

```text
游戏官网
→ 官方 Steam/平台商店
→ 官方 Wiki、官方新闻和官方 YouTube
→ Steam 社区、Reddit、可靠媒体和玩家视频
```

必须遵守：

- Google 搜索结果是发现入口，不是事实来源；
- 官方标签与玩家猜测冲突时，以官方标签为准；
- 社区视频只能证明某个玩家做过某事，不能单独证明官方机制；
- 没拿到完整字幕时，只能写标题、简介、章节或可见画面摘要；
- 找不到来源时写“暂无可靠公开资料”或“待复核”，不要填假链接或推测配方；
- 动态事实（版本、价格、评价、平台、语言、Game Pass、发售状态、更新）必须带采集日期；
- 禁止输出 404、打不开、可疑 SEO、第三方下载或竞争对手页面作为凑数来源；
- 参考站只用于研究信息架构，不能复制它的文案、品牌、图片、代码或外链。

统一证据状态：

| 状态 | 含义 |
|---|---|
| 已交叉验证 | 多个可靠来源一致，或一个足够权威的官方来源支持 |
| 单一官方来源 | 一个官方页面支持，发布时保留来源和复核日期 |
| 社区线索待复核 | 可用于理解玩家问题或寻找线索，不能写成确定事实 |
| 暂缓发布 | 证据不足、结论风险高或页面暂时不值得发布 |

### 2.5 状态不可混写

以下状态必须分别记录：

```text
资料已整理
≠ 网站已实现
≠ 本地可访问
≠ GitHub 已提交
≠ 公网已部署
≠ sitemap 已提交
≠ URL 已请求索引
≠ URL 已被搜索引擎收录
≠ 实时测试访问是长期搜索流量
```

任何报告和回复都要使用准确状态，不用“已上线”“已收录”“有流量”等模糊表述掩盖证据缺口。

### 2.6 外部操作权限

只有用户明确授权，才执行：

- 公网部署；
- 域名、DNS、Cloudflare、GSC、GA 或 Bing 账户操作；
- GSC/Bing sitemap 提交或索引请求；
- Reddit、Steam、Discord、论坛、评论区或社交媒体发帖；
- 编辑第三方 Wiki、目录或数据库；
- 联系开发者、创作者、站长或媒体；
- 创建账号、购买链接、付费广告或其他代表用户公开沟通的动作。

可以在授权前完成：

- 只读研究；
- 本地草稿；
- 本地代码和内容修改；
- 本地构建和页面检查；
- 外部发布内容的草稿准备。

## 3. 五个 Skill 的总流程

### 3.1 标准顺序

```text
1. game-site-research
   研究关键词、意图、来源和页面矩阵

2. game-site-level4-builder
   把研究结果落成首页、Wiki、Guide 和本地可访问网站

3. wiki-page-builder
   针对一个关键词或玩家任务生产可执行的 Wiki/Guide 内页

4. youtube-keyframe-extractor（可选）
   在需要视频实机画面时，先建立时间点、关键帧和来源证据

5. seo-agent-site-optimization
   上线并产生真实数据后，用 GSC → SEO Agent → 站内改造 → 验证的闭环持续优化
```

视频关键帧通常在单页生产前或单页生产过程中执行：

```text
youtube-keyframe-extractor → wiki-page-builder 接入正文
```

SEO 发现内容缺口时，可以回到：

```text
seo-agent-site-optimization → game-site-research → wiki-page-builder
```

不要因为 SEO Agent 提到一个词，就跳过来源验证直接批量生成页面。

### 3.2 工作流路由表

| 用户请求 | 主 Skill | 可能协作的 Skill |
|---|---|---|
| 查资料、挖关键词、做页面矩阵 | `game-site-research` | 无或后续 `wiki-page-builder` |
| 把素材做成整站、搭首页和 Wiki | `game-site-level4-builder` | `game-site-research` |
| 创建/重写一个 Map、Water、Animals 页面 | `wiki-page-builder` | `youtube-keyframe-extractor` |
| 找视频中的某句话、时间点或截图 | `youtube-keyframe-extractor` | `wiki-page-builder` |
| 看 GSC、根据搜索数据改站 | `seo-agent-site-optimization` | `game-site-research`、`wiki-page-builder` |

---

## 4. Skill 一：game-site-research

### 4.1 目标

把一个游戏主题和关键词清单，整理成另一个 Agent 可以直接使用的研究系统，而不是只输出一篇泛泛的游戏介绍。

最终要建立：

```text
关键词
→ 玩家意图
→ 稳定路由
→ 页面类型
→ 可核验来源
→ 可发布事实
→ 不确定性
→ 内链角色
```

### 4.2 触发条件

以下请求使用本 Skill：

- 查游戏资料；
- 做关键词素材；
- 研究 Google、YouTube、官网、Steam、官方 Wiki 或官方平台；
- 生成页面矩阵；
- 生成首页开发信息；
- 生成 favicon/icon 提示词；
- 进入生财关卡 3；
- 为后续建站准备真实素材。

### 4.3 输入

开始前收集或推断：

- 游戏正式名称；
- 项目目录；
- `Docs/keywords.json` 或关键词笔记；
- 现有页面矩阵；
- 首页开发信息；
- 作业或手册要求；
- 旧研究报告；
- 用户要求的研究范围；
- 用户是否还要求首页 brief、icon prompt 或网站实现。

如果游戏名或项目目录确实不可确定，才询问一个简短问题；否则做最小合理假设并记录。

### 4.4 标准工作流

#### 第 1 步：建立项目和事实源

1. 定位项目目录并列出文件；
2. 读取 `README.md`、`AGENTS.md` 和相关 Docs；
3. 读取 `Docs/keywords.json` 并统计关键词；
4. 读取页面矩阵、首页资料、作业要求和历史研究；
5. 确认哪个文件是最新可信的事实源；
6. 若新旧文件冲突，记录冲突，不能静默覆盖；
7. 机器可读内容放 JSON，人类可读内容放 Markdown。

#### 第 2 步：先建立页面矩阵

每个有效关键词至少记录：

| 字段 | 内容 |
|---|---|
| Keyword | 精确搜索词 |
| Route | 稳定页面路径 |
| Search intent | 玩家想知道或完成什么 |
| Cluster | 新手、Wiki、地图、平台、资源、更新、社区等 |
| Page role | Hub、Guide、CTA、News、Reference 或谨慎占位页 |
| Priority | P0、P1 或 P2 |
| Evidence status | 证据状态 |
| Internal links | 父级、兄弟页、官方 CTA |

常见页面集群：

- Entry：首页和新手页；
- Knowledge：Wiki、Map、Systems、Research；
- Access：Steam、Demo、发售、Game Pass、Online；
- Mechanics：Water、Lava、资源、物流、后期机制；
- Freshness/community：Updates、Cheats、Debug Mode、Mods、玩家问题。

不要因为 Google 自动补全出现一个词，就自动创建页面。无关词、同名词、竞品词和无明确用户价值的词要过滤并说明原因。

#### 第 3 步：生成首页开发 brief

如果用户要求首页资料，整理：

- Meta Title；
- 140–160 字符左右的 Meta Description（以项目要求为准）；
- Hero eyebrow、title、description、stats、CTA 和视频标签；
- 四个有不同意图的 Start Here 卡片；
- 游戏介绍和 label/value 统计；
- 最终 CTA 和 Footer 链接；
- Light/Dark 主题色；
- 语言优先级；
- Title、Description、Hero stats、卡片数量、Footer 和代码可用性的自检。

只使用已经验证的数字。动态或不确定的数字省略或标记复核。

#### 第 4 步：生成图标提示词

需要图标时，生成适合 512×512 PNG favicon 的英文提示词，方向来自：

- 官方 Logo 或配色；
- 游戏资源、地形、工厂或核心机制；
- 可识别但不侵犯其他站点品牌的视觉元素。

提示词和真实图片文件是两个交付物。没有真实文件就不能声称图标已生成。

#### 第 5 步：按四类渠道研究每个关键词

Google：

- 用精确词发现搜索表达和候选页面；
- 记录原始结果和它透露的用户问题；
- 不把搜索摘要当作事实；
- 不把一次排名观察写成永久排名。

YouTube：

- 每个关键词最多选择两个真正相关的视频；
- 记录真实 watch URL、标题、频道、可见日期和用途；
- 官方视频用于公告和官方演示，玩家视频用于实操案例；
- 没有专门视频时记录“暂无合适视频”，不拿无关视频凑数；
- 明确区分直接证据和相邻背景。

官网、商店和官方 Wiki：

- 确认游戏身份、开发者、发行商、平台和版本状态；
- 用 Steam 支持 Steam 状态、Early Access、功能、语言和商店链接；
- 用 Xbox、PlayStation、Epic、GOG 等官方商店只确认对应平台当前页面；
- 用官方 Wiki 确认机制和正式资源名；
- 最终引用前打开原始页面或使用可靠页面检查方式。

社区和二级来源：

- 只补充玩家表达、实践案例或进一步复核线索；
- 明确标为社区证据；
- 不能把社区 workaround 写成官方功能。

#### 第 6 步：交叉验证和分级

每条准备发布的事实都要：

- 尽量用两个可靠来源交叉验证；
- 标记来源类型；
- 给动态事实加采集日期；
- 区分已确认事实和当前推断；
- 缺来源时写待复核。

高风险主题包括：

- 联机/合作模式；
- Game Pass 和主机范围；
- Codes、Cheats、Debug Mode、下载；
- 精确配方、成本、掉落率、上限和进度数字；
- 发售日期和当前更新；
- 视频是否官方、是否存在完整字幕。

#### 第 7 步：写关键词素材文件

通常更新 `Docs/关键词素材.md`。文件开头包含：

- 采集日期；
- 项目和关键词文件；
- 来源优先级；
- 字幕限制；
- 排除坏链接和可疑链接的规则。

每个关键词包含：

```markdown
### N. Keyword

User intent: 玩家要完成的事情。

- Google: 发现入口和原始结果。
- YouTube: 视频、频道、用途和局限。
- Official/Steam/Wiki: 权威来源。
- Verified facts: 可以安全发布的事实。
- Reusable page material: 页面结构和可写内容。
- Status: 证据状态和下一次复核动作。
```

文件结尾包含：

- 交叉验证矩阵；
- 可以现在发布的页面；
- 需要补证据的页面；
- 发布前最终复核清单。

#### 第 8 步：验证

交付前检查：

- 研究文件都在项目目录内；
- JSON 合法；
- 关键词章节数量与有效关键词一致；
- 每个最终来源可读且没有 404；
- 没有竞品、虚假 SEO、第三方下载或未验证来源；
- 官方事实没有错误归给玩家视频；
- YouTube 摘要没有冒充完整字幕；
- 动态事实有采集日期；
- Florin、Cheats、平台不确定性等证据缺口仍然可见；
- 页面矩阵路由和关键词一致。

### 4.5 产物和完成条件

默认产出：

1. 页面矩阵；
2. 首页开发 brief（Markdown，必要时加 JSON）；
3. `Docs/关键词素材.md`；
4. icon prompt（如果任务包含）；
5. 完成、待办和发布前复核摘要。

完成意味着研究链路可被另一个 Agent 复用，不意味着网站已实现、已部署或已收录。

### 4.6 禁止事项

- 不绕过登录墙、付费墙、Bot 防护或访问控制；
- 不下载可疑文件、作弊工具或第三方安装包；
- 不发布没有来源支撑的断言；
- 不部署、不买域名、不发外部消息，除非另有明确授权；
- 不覆盖无关项目文件。

---

## 5. Skill 二：game-site-level4-builder

### 5.1 目标

把关键词矩阵、真实素材和来源落成一个玩家可以快速找到答案的 Wiki 首版。

它负责：

- 首页；
- Wiki 索引和分类；
- 真实条目页；
- 新手 Guide；
- 内部导航；
- 基础 SEO、无障碍和移动端检查；
- 本地构建和交付记录。

它默认不负责公网部署、域名、GSC/GA 和数据复盘。

### 5.2 触发条件

以下请求使用本 Skill：

- 进入生财关卡 4；
- 把 `keywords.json`、关键词素材或首页信息变成网站；
- 搭建或改造游戏 Wiki、攻略站、游戏 SEO 站；
- 研究参考对象并映射 Wiki 结构；
- 指定 TanStack、React、Cloudflare 或要求启动本地服务器；
- 收集官方素材并接入网站；
- 检查 Title、Description、H1/H2/H3、内链、移动端或关卡 4 交付。

### 5.3 标准工作流

#### 第 1 步：读取项目和确定输入

先读：

- `README.md`、`AGENTS.md`；
- `Docs/首页开发信息.json`；
- `Docs/关键词素材.md`；
- `Docs/keywords.json`；
- 页面矩阵；
- 参考对象文档；
- `Docs/素材清单.md`；
- `public/assets/asset-manifest.json`（如果存在）；
- `package.json`、Vite/Wrangler 配置、`src/routes/`、`src/components/`、`src/data/`；
- `git status --short --branch`。

先记录当前状态：资料完成、代码完成、本地验证、GitHub、部署和数据各到哪一步。

如果项目指定 Cloudflare 且采用 TanStack，优先记录实际使用的 `TanStack Start + React + TanStack Router + Cloudflare Workers`；没有指定时选择最小可运行方案，不因“没有 package.json”就猜技术栈。

#### 第 2 步：参考对象研究

至少比较多个对象：

- 官方 Wiki；
- 数据库型 Wiki；
- 新手攻略站；
- 补充参考站。

观察：

- 搜索入口；
- 分类；
- 条目密度；
- 标签和状态；
- breadcrumb；
- 摘要和事实卡；
- 目录、步骤、callout；
- Sources 和 Related pages。

将“玩家任务”映射为本站结构，例如：

| 玩家任务 | 目标结构 |
|---|---|
| 我知道关键词 | 首页搜索 → `/wiki/<slug>` |
| 我不知道关键词 | `/wiki` 分类 → 条目列表 |
| 我刚开始玩 | Guides → 新手、资源和物流页 |
| 我想确认平台或更新 | 独立的 Steam、Demo、Game Pass、Online、Updates 条目 |

首页第一任务是让玩家几秒内搜索、浏览分类或进入新手页。不要先做成长篇项目介绍、团队故事、泛 FAQ 或 SaaS 式 CTA。

若项目存在独立的视觉设计 Skill，视觉重塑前按其要求完成计划、自查、构建、截图/预览和 critique；否则仍需从真实游戏素材提取主题色和签名元素。

#### 第 3 步：把关键词和证据变成内容模型

优先将内容放到数据层，路由只负责查找和渲染。示例：

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

每页写作前确认：

- 对应哪个关键词和用户意图；
- 属于入口、新手、知识、机制、平台、更新还是社区；
- 证据状态是什么；
- 父级、兄弟页、官方 CTA 和 Sources 链接是什么。

页面首屏优先给出：页面类型、H1、摘要、状态/更新时间、Short answer 或 Quick facts。正文用 3–5 个清晰 H2 解决问题，不为了字数机械扩写。

#### 第 4 步：实现最小 Wiki 首版

最低路由：

- `/`：搜索、热门入口、分类入口和新手 Guide；
- `/wiki`：完整索引、搜索、分类、官方链接和证据提示；
- `/wiki/<slug>`：至少一个有可靠来源的真实条目；
- `/guide` 或现有项目对应的 Guides 路由：新手攻略。

实现规则：

- 内容集中在 `src/data/` 或等价内容层；
- 内部导航使用框架路由组件，避免无必要的整页刷新；
- 父级 layout、索引页和动态条目关系清晰；
- 主题色、官方链接和事实来自研究资料；
- 先让页面可访问，再迭代视觉；
- 研究猜测不能直接变成公开断言。

#### 第 5 步：收集和接入素材

优先来源：官网、Steam、官方 Wiki、官方 YouTube 和官方平台商店。参考站不能作为游戏图片下载源。

新增素材必须：

1. 放入 `public/assets/`；
2. 更新 `Docs/素材清单.md`；
3. 更新 `public/assets/asset-manifest.json`；
4. 记录尺寸、用途、来源、归属、采集日期和发布风险；
5. 使用有意义的 `alt`；
6. 不把“官方来源”误写成“获得商业再分发授权”。

16×16 图标只用于小标签，不要强行放大成 Hero。不要因为素材收集完成就声称素材系统完成。

#### 第 6 步：SEO、结构和可访问性检查

逐页检查：

- Title 和 Description 已填且符合页面意图；
- 页面只有一个 H1；
- H2/H3 顺序合理；
- 首页、索引、条目和 Guide 可以互相点击；
- 官方外链真实、标签清楚、`target`/`rel` 合理；
- 图片 `alt` 准确；
- 无效 slug 返回清晰的 Not Found；
- 搜索结果能进入真实页面；
- 分类锚点和移动端没有溢出；
- 没有旧游戏名、旧域名、旧 sitemap、旧 robots 或旧统计 ID。

#### 第 7 步：本地验证

根据项目脚本执行等价检查，通常包括：

```bash
jq empty Docs/keywords.json Docs/homepage-brief.json public/assets/asset-manifest.json
npm run typecheck
npm run build
git diff --check
npm run dev -- --host 127.0.0.1
```

使用 `curl` 或本地浏览器检查首页、Wiki、Guide、至少一个真实条目、所有已实现路由和静态素材；确认返回 200、Title/Description/H1 正确、官方 CTA 可点击、移动端没有明显布局问题。

#### 第 8 步：更新记录并交付

如果项目有改造记录，更新 `Docs/关卡4-改造过程记录.md` 或对应文件，至少记录：

1. 起点问题和用户反馈；
2. 参考对象及结构映射；
3. 视觉和干扰问题修复；
4. 首页、索引、真实内页和 Guide；
5. 素材、来源和使用边界；
6. SEO、路由、构建和本地验证；
7. GitHub、截图、部署的实际状态；
8. 当前结论和下一步。

### 5.4 三层完成判定

| 状态 | 可以写 | 还不能写 |
|---|---|---|
| 资料完成 | 来源、事实、关键词和证据边界已整理 | 网站已完成 |
| 网站实现完成 | 本地首页、索引、真实内页、Guide 和结构检查通过 | 已上线、已收录、有流量 |
| 交付闭环完成 | 截图、代码版本、关卡材料已整理或提交 | GSC/GA 已有数据 |

只有用户明确要求且实际完成公网操作后，才进入部署检查。

---

## 6. Skill 三：wiki-page-builder

### 6.1 目标

把一个搜索词或玩家问题做成一篇新手也能照着完成任务的 Wiki/Guide 内页。

核心原则：

```text
先确定玩家任务
→ 再决定页面内容
→ 再决定路由和视觉
```

路由只是地址，页面必须有独立用户价值。不要因为已有一个路由，就塞入泛泛介绍。

### 6.2 触发条件

以下请求使用本 Skill：

- 创建、重写、扩充或审查一个 Wiki/Guide/机制页面；
- 做 Map、Water、Lava、Aura、资源、建筑、研究、物流、Seed 或 Mod 页面；
- 用户说页面看不懂、需要具体操作或需要新手检查；
- 添加截图、视频关键帧、箭头、流程图、来源和归因；
- 判断页面是否真的帮助玩家完成第一次操作。

如果任务是整站架构，先使用 `game-site-level4-builder`；如果任务是关键词和来源，先使用 `game-site-research`；如果含视频关键帧，先使用或同时使用 `youtube-keyframe-extractor`。

### 6.3 标准工作流

#### 开始前：只读检查

先读取：

- `README.md`、`AGENTS.md`；
- `Docs/Wiki内页生产方案.md` 或等价详细方案；
- `Docs/关键词素材.md`、`Docs/keywords.json`、页面矩阵；
- `Docs/素材清单.md` 和 `asset-manifest.json`；
- 目标页面数据、路由、共享组件和样式；
- `git status --short --branch`。

确认现有内容、来源、可复用图片、未验证事实和用户改动。

#### 第 1 步：写页面简报

先填写：

```text
关键词 / 玩家问题：
页面要帮助玩家完成：
玩家开始时拥有什么：
玩家最终应该看到什么：
首个点击 / 按键：
完成后的下一步：
路由：
证据状态：
```

页面必须至少回答：

1. 第一步点击或按什么；
2. 画面上具体看哪里；
3. 完成后看到什么；
4. 什么时候继续；
5. 失败时先检查什么。

#### 第 2 步：核验事实

使用官网、官方商店、官方 Wiki、官方 YouTube，再用社区来源补充实际玩法。

必须区分：

- 官方机制事实；
- 官方演示画面；
- 玩家路线/布局案例；
- 待复核内容。

不确定的按键、价格、配方、版本差异、Mod 路径、Seed 结果和动态平台信息不能猜。动态事实带采集日期。没有完整字幕时不能写“视频作者说了……”。

#### 第 3 步：把页面压缩成动作链

先用 4–6 个动词描述主流程，例如：

```text
解锁 / 获取
→ 找到入口
→ 点击或按键
→ 看懂界面
→ 完成最小操作
→ 验证结果
→ 回到主循环
```

Map 页示例：

```text
Research → Map → 展开地图 → 查看 Minimap → 返回工厂 → 开始建造
```

#### 第 4 步：按动作组织正文

推荐结构：

```text
H1：对象 + 玩家最终要完成的动作
一句话摘要
Short answer
总流程

H2：解锁 / 获取
H2：找到并打开
H2：完成第一次任务
H2：接回游戏主循环
H2：Advanced（Seeds / Mods / 特殊版本）
H2：FAQ
Sources & Attribution
Related pages
```

每个核心 H2 只解决一个动作。正文直接说玩家该做什么，不把研究过程语言写给读者；来源放在图片下方和 Sources 区域。

#### 第 5 步：为动作匹配视觉

每张图发布前都要回答：“玩家看完它，知道点哪里、看哪里，还是知道下一步做什么？”

优先顺序：

1. 官方截图或官方图标；
2. 官方视频关键帧；
3. 社区实况关键帧；
4. CSS/SVG 流程图或机制图；
5. 纯装饰封面。

动作和视觉匹配：

| 动作 | 适合视觉 |
|---|---|
| 解锁/获取 | 研究树或购买界面 |
| 找入口/看 HUD | 完整 HUD 和局部箭头 |
| 实际使用 | 操作中的游戏画面 |
| 判断成功 | 前后状态或结果区域 |
| 进阶布局 | 工厂、路线和空间实景 |
| Mod/Seed | 社区案例并明确边界 |

不要把与动作无关的封面、数字统计或广告图放在步骤前。

#### 第 6 步：使用可缩放的 SVG 箭头

默认保留原始图片，使用共享 `WikiVisual` 或等价组件叠加 SVG。推荐数据结构：

```ts
type WikiVisualAnnotation = {
  label: string
  labelX: number
  labelY: number
  targetX: number
  targetY: number
}
```

坐标使用图片内部 0–100 百分比：

```ts
annotations: [
  { label: 'Click Research', labelX: 78, labelY: 14, targetX: 58, targetY: 68 },
]
```

规则：

- 每张图最多 1–3 个箭头；
- 标签用短动作词或区域名；
- 箭头和标签在亮暗画面上都可见；
- 不遮挡按钮、字幕、数字和目标区域；
- 图片、流程卡和正文容器宽度一致；
- 桌面和窄屏都检查标注位置。

#### 第 7 步：接入素材和来源

新增图片同步更新：

- `Docs/素材清单.md`；
- `public/assets/asset-manifest.json`。

每张视觉旁边至少显示：

```text
Caption：这张图帮助玩家确认什么
Credit：Official Steam screenshot / Official Wiki / YouTube community gameplay
Source：真实来源链接；视频附时间点
Boundary：官方机制 / 社区案例 / 待复核线索
```

正文末尾或侧栏加入 `Sources & Attribution`，说明每条来源支持什么，不能只放一个笼统的“来源”链接。

#### 第 8 步：保持数据、路由、组件分离

- 文案、章节、视觉和来源放在内容层，通常是 `src/data/site-content.ts`；
- 路由只查找 slug 和渲染页面；
- 优先复用共享视觉、步骤卡、机制图和 Sources 组件；
- `alt` 描述实际界面和动作；
- 图片和卡片统一容器宽度；
- 不为了一个页面修改无关的全站导航、SEO、部署配置或其他页面；
- 用户只要求审查时默认只读；用户要求修改时才编辑。

### 6.4 单页验收

玩家视角：

- 首屏能找到第一步；
- 每步都有点哪里、看哪里、会发生什么；
- 至少有一次最小成功操作；
- 有失败排查；
- 主流程和 Advanced 分开；
- 没有把研究过程和营销统计当正文。

来源和素材：

- 关键事实有来源或明确待复核；
- 社区视频没有冒充官方机制；
- 关键帧是真实视频画面，不是封面；
- 图片下方有可点击来源；
- 新素材已登记；
- 箭头指向真实目标且不遮挡。

工程：

- 页面和路由职责清楚；
- 只有一个 H1；
- 图片加载且 `alt` 有意义；
- 没有横向溢出；
- 目标页和相邻页本地打开正常；
- `npm run typecheck`、`npm run build`、`git diff --check` 通过；
- JSON 合法；
- 没有把本地实现、索引请求或实时测试写成已部署、已收录或已有搜索流量。

### 6.5 单页完成条件

完成交付必须说明：

1. 修改了哪些文件；
2. 完成了哪个页面子步骤；
3. 仍有哪些来源、素材或用户确认项；
4. 做了哪些验证及结果；
5. 下一步最小行动。

如果没有部署，明确写“本地页面已完成，未执行公网部署”。

---

## 7. Skill 四：youtube-keyframe-extractor

### 7.1 目标

把 YouTube 视频转成 Wiki 页面中有用途、有时间点、有来源的截图证据：

```text
YouTube 来源
→ 字幕/动作定位
→ 播放器画面复核
→ 时间点表
→ 关键帧
→ 素材登记
→ 页面位置和归因
```

它不负责把整段视频改写成文章，也不把玩家实况冒充官方教程。

### 7.2 触发条件

以下请求使用本 Skill：

- 用户提供 YouTube URL；
- 找字幕、短语、时间点或解说位置；
- 不要封面、要视频中的实际画面；
- 截取 Map、Water、Buildings、Animals、Mod 或 Seed 的实机画面；
- 给截图加箭头；
- 把视频证据放到指定页面章节；
- 需要来源、频道、时间点和社区案例说明。

### 7.3 证据角色

| 证据 | 可以支持 | 不能支持 |
|---|---|---|
| 官方 Steam/Wiki 截图 | 按钮、正式名称、公开机制和界面关系 | 玩家存档路线和最优布局 |
| 官方视频关键帧 | 官方演示中可见的操作和画面 | 画面未展示的配方、固定数值和所有版本规则 |
| 玩家视频关键帧 | 该玩家采用过的路线、布局、Mod 或存档案例 | 官方机制、固定坐标、通用 Seed、永久数值 |

玩家视频必须标为 `YouTube community gameplay`、`player example` 或同等说明。自动字幕只是定位工具，物品名、按键和机制术语必须回到画面与官方来源复核。

### 7.4 标准工作流

#### 开始前

读取：

1. `README.md`、`AGENTS.md`；
2. `Docs/Wiki内页生产方案.md` 或等价页面生产方案；
3. `Docs/素材清单.md` 和 `asset-manifest.json`；
4. 目标页面数据、共享视觉组件和当前 Git 状态。

先确认目标章节、已有素材和用户修改，避免重复下载或错放图片。

#### 第 1 步：写视觉任务

```text
页面 / 路由：
目标章节：
玩家正在做什么：
图片要让玩家看到什么：
成功判断：
需要箭头吗：
证据角色：官方机制 / 官方演示 / 社区案例
```

如果图片只是装饰，不启动视频解析流程。

#### 第 2 步：规范化 YouTube 来源

优先记录公开的：

```text
https://www.youtube.com/watch?v=VIDEO_ID
```

同时记录视频 ID、标题、频道、时长和可访问状态。

`googlevideo.com` 带签名媒体地址只能作为一次性分析入口，不能写进代码、报告、素材清单或页面链接。需要登录时使用用户已登录的浏览器，不读取、导出或保存凭据。

视频被权限、地区或反机器人机制拦截时，不使用可疑下载站、盗版镜像或绕过访问控制的方式。

#### 第 3 步：取得临时分析副本

精确抽帧时可以临时取得视频或音频副本，用于：

- 字幕定位；
- 比较目标点前后画面；
- 抽取少量静帧。

临时副本不进入 `public/assets/`、Git 或部署包。最终只保留选中的 JPG/PNG、公开 watch URL 和时间点链接。

#### 第 4 步：先字幕，再画面

1. 优先使用 YouTube 页面可见字幕或 transcript；
2. 没有字幕时才使用本地语音识别，并明确标记为自动识别；
3. 搜索 `water`、`route`、`factory`、`map`、`modded`、`research`、`minimap` 等动作词；
4. 生成候选时间点；
5. 回到播放器核对解说和画面是否同步；
6. 确认画面真的展示目标动作；
7. 检查字幕中的物品名和按键是否误识别。

只有字幕没有画面时，不得猜截图内容或伪造时间点。

#### 第 5 步：建立时间点表

先产出中间表，再抽帧：

| 解说/字幕片段 | 时间点 | 画面内容 | 页面用途 | 证据边界 |
|---|---:|---|---|---|
| 真实短句 | 00:00 | 看到了什么 | 放在哪个 H2 | 官方/社区/待复核 |

每个候选点至少要有短句、时间、可见画面、页面用途和证据角色。

#### 第 6 步：抽取和检查关键帧

先复核播放器，再用本地工具抽帧，例如：

```bash
ffmpeg -i input.mp4 -ss 00:03:45 -frames:v 1 -q:v 2 frame-0345.jpg
```

如果字幕和画面有延迟，前后取几帧比较。允许必要的裁切、缩放和压缩，但不要在原图上直接画死大段正文或箭头。

文件名表达用途，例如：

```text
[game]-map-video-water-route.jpg
[game]-map-video-factory-layout.jpg
[game]-map-video-modded-map.jpg
```

#### 第 7 步：登记素材和来源

每张图至少记录：

```text
sourcePage: https://www.youtube.com/watch?v=VIDEO_ID
sourceAsset: https://www.youtube.com/watch?v=VIDEO_ID&t=225s
timestamp: 00:03:45
sourcePhrase: 真实短句
plannedUse: 页面章节
credit: CHANNEL / YouTube community gameplay
```

同步更新：

- `Docs/素材清单.md`；
- `public/assets/asset-manifest.json`。

图片下方直接显示带时间点的来源，例如 `Open YouTube at 03:45 ↗`，不要只放视频首页链接。

#### 第 8 步：接入页面

在内容层绑定：

- 图片路径；
- `alt`；
- caption；
- credit；
- `sourceHref`；
- `sourceLabel`；
- variant；
- 目标 H2 或步骤卡。

正文直接说玩家下一步怎么做，来源、频道、时间点和证据边界放在图注与 `Sources & Attribution`。

#### 第 9 步：使用网页 SVG 标注层

官方截图中的 Research、Map、Minimap 等按钮使用共享 `WikiVisual.annotations` 叠加 SVG：

```ts
annotations: [
  { label: 'Expand map', labelX: 18, labelY: 15, targetX: 78, targetY: 14 },
]
```

每张图最多 1–3 个箭头，使用 0–100 百分比坐标。社区实况帧主要用于路线、布局和 Mod 案例，不强行添加机制箭头。

#### 第 10 步：玩家视角验收

逐张检查：

1. 是实际画面，不是视频封面；
2. 画面与解说时间点对应；
3. 来源、频道、归属和时间点可点击；
4. 社区案例没有冒充官方机制；
5. 正文告诉玩家下一步；
6. 图片、流程卡和正文同宽；
7. 移动端没有横向溢出。

### 7.5 固定输出

```markdown
## Source
- 视频标题 / 频道 / URL / 可访问状态

## Timestamp map
| phrase | time | frame | page placement | evidence boundary |

## Assets
- 新增文件、尺寸和本地路径
- manifest / 素材清单是否同步

## Page integration
- 页面、H2、caption、source link
- 是否使用箭头或流程图

## Validation
- 字幕与画面是否复核
- 图片是否加载
- 来源链接是否可点击
- 构建、JSON、浏览器检查结果

## Unresolved
- 字幕、时间点、版本差异或授权边界
```

### 7.6 禁止事项

- 不把封面当教程截图；
- 不把未经核验的自动字幕当官方术语；
- 不把玩家视频当官方机制说明；
- 不保存带签名的 `googlevideo.com` URL；
- 不把完整视频或音频提交到仓库或部署包；
- 不使用可疑下载站、盗版镜像或绕过访问控制；
- 不为了凑图片截取无关画面；
- 不在图片上覆盖大段文章正文；
- 没有可复查字幕和时间点时，不声称“已读取完整字幕”或“作者说了某句话”。

### 7.7 验证

只新增素材记录时：

```bash
jq empty public/assets/asset-manifest.json
git diff --check
```

接入页面时再运行：

```bash
npm run typecheck
npm run build
```

并使用本地浏览器检查图片、箭头、图注、时间点链接、相关页面和移动端宽度。

---

## 8. Skill 五：seo-agent-site-optimization

### 8.1 目标

把上线后真实的 GSC 数据，转成可验证、可回滚、能持续复查的 SEO 改造闭环，而不是一次性的 SEO 意见：

```text
GSC Performance
→ 上传 SEO Agent
→ 多轮分析
→ 决策分类
→ 站内改造
→ 本地验证
→ 授权后部署
→ 公网复查
→ 再回到 SEO Agent
```

### 8.2 触发条件

以下请求使用本 Skill：

- 看 GSC 数据；
- 导出或上传 GSC XLSX；
- 询问今天 SEO 目标；
- 与 SEO Agent 沟通；
- 根据搜索表现优化网站；
- 改 Title、Description、H1/H2、内链、canonical、robots、sitemap；
- 根据搜索词补页面；
- 复盘 GSC/GA、收录或索引状态。

### 8.3 操作契约

- 只把用户指定域名和项目作为目标；
- 必须确认准确的 GSC Property，不能从项目名推断；
- 先只读检查，再编辑；
- 读取项目规则、当前 SEO 内容、路由和 Git 状态；
- SEO Agent 给多个任务时，评估所有相关、安全、站内任务，不只执行 P0；
- 第三方搜索量是假设，不写成真实流量；
- 索引请求、sitemap 提交和实时访问不能写成已收录或长期搜索流量；
- 用 `apply_patch` 修改；
- 不把凭据、Cookie、报告隐私内容写进仓库；
- 公开发帖、外链、目录、联系、付费和账户操作必须停在授权边界。

### 8.4 标准工作流

#### Phase 0：确认范围和访问

确定：

- 正式域名和 canonical 协议；
- 本地项目根目录；
- GSC Property；
- 搜索类型、日期范围、时区和筛选条件；
- 只做本地修改还是允许公网部署。

检查：

- `README.md`、`AGENTS.md`；
- 现有 SEO 报告目录；
- `git status`；
- `package.json` 和部署脚本；
- 浏览器是否已有登录会话。

如果 GSC 或 SEO Agent 未登录，告诉用户需要在哪个页面完成登录，不索要或保存密码。

#### Phase 1：导出和验证 GSC 报告

在准确 Property 中设置：

- Web/Image/Video 等搜索类型；
- 日期范围；
- 时区；
- 国家和设备筛选。

导出 `.xlsx` 并保留原始文件，记录：

- 文件路径；
- 导出时间；
- Property；
- 期间和筛选条件；
- Clicks；
- Impressions；
- CTR；
- Average position；
- Top queries；
- Top pages；
- 非零数据行。

确认文件是真实 XLSX。需要分析时使用可用的表格运行时或工作簿库，不凭文件名猜数据。

如果没有数据：

- 不生成虚假的 SEO 结论；
- 只做技术/站点准备度检查；
- 可以询问 Agent 在无搜索数据下能诊断什么；
- 建立 D+7/D+14 观察计划。

#### Phase 2：上传到 SEO Agent 并建立会话

通常：

1. 打开 SEO Agent 的站点报告页面；
2. 上传准确的 GSC XLSX；
3. 上传确认前逐字符检查域名/Property；
4. 确认上传；
5. 打开聊天页面；
6. 加入已有会话；
7. 若失败，有限次数重试并记录错误；
8. 不创建重复报告、重复会话或新账号来绕过不清楚的状态。

#### Phase 3：进行有证据的多轮对话

第一轮提示至少包含：

- 域名；
- 报告时间范围和时区；
- 要求给出今天最重要的 SEO 目标；
- 要求 P0/P1/P2/P3 排序；
- 每项的证据、影响页面/查询词、改代码/改内容/做内链/观察/外部授权分类；
- 不把估算搜索量写成真实流量；
- 不默认发帖、外链、付费或公开发布。

后续追问：

1. 页面级和查询级数据是否一致；
2. 点击、展示、CTR、平均排名、蚕食和“有展示无点击”页面；
3. 关键词需求、难度、SERP 和页面意图；
4. 哪些第三方估算值得影响范围；
5. Title、Description、H1/H2、内链、canonical、robots、sitemap、结构化数据、redirect 和内容缺口；
6. 哪些新页面有项目来源和真实意图支撑；
7. 完成第一轮安全改造后，基于新状态还有什么值得执行；
8. 外链建议的平台规则、相关性、自然性和是否需要外部授权。

每项建议归类：

| 决策 | 含义 |
|---|---|
| Execute | 安全、有证据、属于站内范围，可以执行 |
| Observe | 需要等待时间、更多数据或控制实验 |
| Defer | 有价值但被来源、权限或依赖阻塞 |
| Ask | 会改变范围、数据/内容完整性或需要用户选择 |
| External-confirm | 发帖、编辑、提交、联系、创建、购买或公开沟通 |

#### Phase 4：把计划转成网站修改

逐项映射到准确实现位置：

- 路由；
- 内容对象；
- metadata 函数；
- sitemap/robots；
- canonical/redirect；
- 组件；
- 部署配置。

优先做小、可逆、可衡量的改动：

- 重要 canonical 页的直达内链；
- 有证据支持的 Title/Description 实验；
- canonical、robots、sitemap 卫生；
- 真实内容结构优化；
- 有效结构化数据；
- OG/Twitter 等社交卡完整性；
- 有真实查询意图和可靠来源的新页面。

不要因为 Agent 给了泛泛的“重写页面”建议，就破坏已经表现不错的页面。测 CTR 时一次改变一个有意义的变量。

新页面必须有：

- 独立查询或用户任务；
- 可靠来源；
- 独立价值；
- 正确 canonical；
- Title/Description；
- 导航入口；
- 本地质量检查。

若证据不足，写“暂无可靠公开资料”或延期，不能编造机制、配方、日期、链接或搜索量。

如果已有 sitemap 或索引请求成功，不重复提交。只有 sitemap 发生变化或用户明确要求时，才评估下一次提交。

#### Phase 5：验证、授权部署和公网复查

至少运行：

- typecheck/lint；
- production build；
- `git diff --check`；
- 改动路由状态检查；
- Title、Description、H1；
- canonical；
- robots；
- sitemap；
- redirect；
- 内链；
- 移动端基础布局。

用户没有明确要求部署时，停在本地已验证补丁，不自行上线。

用户明确授权部署后，检查：

- 正式 canonical 域名；
- 改动页面；
- 静态素材；
- `robots.txt`；
- `sitemap.xml`；
- 部署/版本标识。

报告中分别写：

```text
代码已修改
部署已成功
sitemap/索引请求已提交
URL 已被搜索引擎收录
```

只有最后一项有实际证据时，才能写“已收录”。

#### Phase 6：继续闭环

把本轮结果送回 SEO Agent：

- 改了哪些文件和路由；
- 验证结果；
- 是否部署；
- 哪些观察；
- 哪些延期；
- 哪些外部动作没有执行。

再次询问新状态下的剩余站内优化，并重复执行安全、相关的改造。

通常进行 2–4 轮有意义的循环，直到剩余建议：

- 只需观察；
- 重复；
- 证据不足；
- 等待外部依赖；
- 需要用户授权的外部动作。

不要为了制造更多改动而无限循环。

### 8.5 外部动作边界

以下动作默认只做只读研究或草稿：

- Reddit、Steam、Discord、论坛、评论和社交媒体；
- 目录、资料库和第三方 Wiki；
- 联系开发者、作者、站长或媒体；
- 付费链接、广告、赞助、购买；
- 创建账号或改变公开资料；
- GSC/Bing 索引请求和 sitemap 提交。

获得明确授权后，最终点击前要展示：

- 准确目的地；
- 要提交的内容；
- URL；
- 账号上下文；
- 预计改变的外部状态。

尊重用户已有的排除项，例如“暂不发 Reddit”。

### 8.6 SEO 报告模板

在项目约定的 SEO 报告目录创建或更新日期化 Markdown：

```markdown
# [日期] GSC + SEO Agent 网站优化报告

## 1. Scope and access
- Domain/property:
- Report path:
- Period/timezone/filters:
- Agent upload/session status:

## 2. GSC snapshot
- Clicks / impressions / CTR / average position:
- Top queries:
- Top pages:
- Data limitations:

## 3. Agent conversation
- Today’s goal:
- Evidence and confidence:
- P0/P1/P2/P3 recommendations:

## 4. Decisions
| Item | Decision | Reason | Validation |
|---|---|---|---|

## 5. Implemented changes
- Files/routes:
- Content/metadata/internal-link changes:
- Index hygiene or structured-data changes:

## 6. Verification and deployment
- Local checks:
- Public checks:
- Deployment/version:
- What is not yet proven:

## 7. External actions
- Posted/submitted/contacted/purchased: none, or exact confirmed actions
- Drafts prepared but not published:

## 8. Observation and next Agent round
- 48–72 hour checks:
- D+7/D+14 checks:
- 2–4 week checks:
- Next minimum action:
```

### 8.7 完成条件

只有满足以下条件，才称 SEO 闭环完成：

1. 准确 GSC 报告已导出、验证并上传到匹配的 SEO Agent 网站；
2. Agent 的目标和相关追问已调查；
3. 安全、有证据、属于范围的站内任务已执行或明确标记 Observe/Defer；
4. 本地验证通过，且授权的公网验证通过；
5. 日期化报告记录了证据、决策、改动、限制、外部边界和后续日期；
6. 剩余建议都有处理方式：执行、等待数据、缺授权或证据不足。

---

## 9. 跨 Skill 交接协议

### 9.1 研究交给建站

`game-site-research` 至少交给 `game-site-level4-builder`：

- 有效关键词清单；
- 页面矩阵；
- 用户意图；
- 页面优先级；
- 证据状态；
- 来源链接；
- 首页开发 brief；
- 需要复核的事实。

### 9.2 建站交给单页生产

`game-site-level4-builder` 至少交给 `wiki-page-builder`：

- 目标路由和内容对象；
- 页面所在分类；
- 页面已有文案；
- 共享组件；
- 相关来源；
- 可复用图片；
- 父级、兄弟页和官方 CTA。

### 9.3 视频证据交给单页生产

`youtube-keyframe-extractor` 至少交给 `wiki-page-builder`：

- 视频公开 URL；
- 标题、频道和访问状态；
- 时间点表；
- 图片文件；
- 图片用途；
- `sourceHref` 和时间点链接；
- credit 和证据边界；
- 图片是否需要 SVG 标注。

### 9.4 SEO 反馈回研究和单页

`seo-agent-site-optimization` 发现新搜索词或内容缺口时：

1. 先判断是否是真实 GSC 信号、第三方估算还是 Agent 假设；
2. 用 `game-site-research` 核验词意图和来源；
3. 有可靠证据后，再用 `wiki-page-builder` 生产单页；
4. 不因为 URL 数量少就批量创建薄页面。

## 10. 项目标准目录和文件

具体文件名可以按项目语言调整，但建议保持以下职责分离：

```text
README.md                         项目当前状态、页面矩阵、下一步
AGENTS.md                         项目规则和上站工作流
Docs/
  keywords.json                   机器可读关键词
  keywords.md                     原始关键词记录
  keyword-materials.md            关键词、来源和证据
  homepage-brief.json             首页结构化资料
  homepage-brief.md               首页人类可读资料
  reference-sites.md              参考对象和结构映射
  asset-inventory.md              素材来源、用途和边界
  SEO/                            日期化 GSC/SEO 报告
public/assets/
  asset-manifest.json             静态素材清单
src/data/                         内容层
src/routes/                       路由层
src/components/                   共享展示和视觉组件
```

如果项目使用中文文件名，以项目现有约定为准，但不得混淆内容层、来源层、素材层和路由层。

## 11. 每次任务的最终交付格式

无论执行哪一个 Skill，最终回复都要说明：

1. 修改了哪些文件；
2. 完成了哪个 Skill 阶段或项目关卡；
3. 哪些内容未完成，以及原因；
4. 做了哪些验证及结果；
5. 是否执行公网、账户或公开发布操作；
6. 下一步最小行动是什么。

如果没有执行外部动作，明确写：

```text
本轮未执行发帖、外链、联系、账户创建、索引请求、sitemap 提交或公网部署。
```

## 12. 总质量门槛

在把任务交给用户前，确认：

- [ ] 关键词对应真实搜索意图；
- [ ] 页面有可靠来源和证据状态；
- [ ] 动态事实有采集日期；
- [ ] 没有坏链接、假来源、可疑下载或竞品外链；
- [ ] 首页、Wiki、Guide 和条目之间可点击；
- [ ] 单页正文能让玩家完成最小成功操作；
- [ ] 视频关键帧不是封面，且有时间点和归因；
- [ ] 新图片已登记到素材清单和 manifest；
- [ ] Title、Description、单一 H1、H2/H3 和 canonical 已检查；
- [ ] JSON、typecheck、build 和 `git diff --check` 已检查；
- [ ] 本地实现、部署、索引请求、收录和流量没有混写；
- [ ] 公共发布、账户操作和付费动作都有明确授权；
- [ ] README 或对应报告已记录当前状态和下一步。

目标不是一次生成看起来完整的站，而是维护一条可复查、可继续迭代的证据链：

```text
搜索需求 → 来源 → 内容 → 页面 → 验证 → 数据 → 决策
```
