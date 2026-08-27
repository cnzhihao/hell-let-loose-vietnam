---
name: wiki-page-builder
description: Produce, rewrite, enrich, or audit one player-first game Wiki inner page from verified materials. Use this skill whenever the user mentions a game Wiki page, guide page, mechanism page, Map/Water/Lava/resource/building/research page, asks to turn a keyword into an actionable article, requests screenshots, YouTube keyframes, diagrams, arrows, source attribution, beginner review, or asks whether a page really helps a new player—even when they do not explicitly say “use a skill”. Keep page content, URL route, research evidence, visuals, and site-wide architecture separate; use the existing project workflow and do not deploy unless explicitly asked.
compatibility: Requires filesystem access to the Sandustry project, Node.js/npm for implementation checks, Markdown/JSON files for research and asset records, and optionally a local browser and web access for visual/source verification. Use configured Shengcai MCP only when the user asks about the Shengcai handbook or its assignments.
---

# Wiki Page Builder

把一个搜索词或玩家问题，做成一篇“刚买游戏、完全不会玩的人也能照着完成任务”的 Wiki 内页。这个 Skill 只负责单个内页的内容、素材、组件接入和本地验收，不负责整站信息架构、关键词研究、部署、GSC/GA 或数据复盘。

## 什么时候使用

使用本 Skill 的典型请求包括：

- 创建、重写、扩充或审查 `/guides/<slug>`、`/wiki/<slug>`、Guide 或机制内页；
- 做 Map、Water、Lava、Aura、Flux Emanator、建筑、研究、资源、物流、Seed 或 Mod 页面；
- 用户说“这个页面玩家看不懂”“要告诉我具体怎么做”“纯文字不行”“加游戏截图/视频关键帧/箭头/流程图”；
- 从一个关键词、官方 Wiki 条目或玩家问题生产一页可发布内容；
- 以新手视角检查页面是否能让玩家完成第一次操作；
- 要求补充 YouTube、Steam、官方 Wiki 来源，或给社区视频内容做额外说明。

如果任务是找关键词、建立页面矩阵，先使用 `.agents/skills/game-site-research/SKILL.md`。如果任务是搭建首页、索引、整站路由或关卡 4 交付，使用 `.agents/skills/game-site-level4-builder/SKILL.md`。如果两类任务同时出现，先研究，再用本 Skill 生产内页。

## 核心原则：页面不是路由

先确定玩家要完成的任务，再决定页面内容；不要因为已经有一个路由，就把一段泛泛介绍塞进去。

- **页面**回答一个明确问题，例如“如何解锁并使用 Map”。
- **路由**只是页面的访问地址，例如 `/guides/map`；除非页面矩阵明确需要，不要为了改文案新建路由。旧路由迁移时保留跳转，不要让旧链接失效。
- **内容层**放在项目现有的数据文件中，通常是 `src/data/site-content.ts`；路由和渲染组件只负责展示。
- **素材层**放在 `public/assets/`，每个新素材必须能追溯到来源。
- **来源层**要在正文外清楚说明官方事实、社区案例和待复核信息。

最终判断标准不是字数，而是玩家是否能完成一个最小成功动作，并知道下一步。

## 开始前：读取和保护项目状态

先做只读检查，保留用户已有改动：

1. 读取项目根目录的 `README.md`、`AGENTS.md`。
2. 读取 `Docs/Wiki内页生产方案.md`，它是本 Skill 的详细参考流程；内容超过 300 行时按其中目录只读相关章节，不要把整份长文复制进页面。
3. 读取与页面相关的 `Docs/关键词素材.md`、`Docs/keywords.json`、页面矩阵、`Docs/素材清单.md` 和 `public/assets/asset-manifest.json`。
4. 检查现有页面数据、路由、共享组件、样式和 `git status --short --branch`。
5. 先确认页面当前状态：已存在的内容、已有来源、可复用图片、未验证事实、用户已经修改的区域。

若项目文件与文档状态不一致，先报告差异，再基于实际文件工作。不要用 `git reset`、`git checkout` 或批量覆盖来“清理”用户改动。

## 生产流程

### 1. 写页面简报，不先写正文

用下面的格式确定页面任务：

```text
关键词 / 玩家问题：
页面要帮助玩家完成：
玩家开始时拥有什么：
玩家最终应该看到什么：
首个点击 / 按键：
完成后的下一步：
路由（仅作实现信息）：
证据状态：已交叉验证 / 单一官方来源 / 社区线索待复核 / 暂缓发布
```

页面至少要能回答：

1. 我第一步点击或按什么？
2. 画面上具体看哪里？
3. 做完后应该看到什么结果？
4. 什么时候继续下一步？
5. 失败时先检查什么？

### 2. 核验事实和来源边界

按项目规则优先使用：官网、Steam 或其他官方商店、官方 Wiki、官方 YouTube；再使用 Steam 社区、Reddit、可靠媒体和玩家视频补充实际玩法。

- 一个玩家视频可以证明“这个玩家这样做过”，不能单独证明官方机制、固定坐标、配方、按键或所有版本都如此。
- 社区视频必须标为 `YouTube community gameplay`、`player example` 或同等说明，正文不能写成官方教程。
- 没有完整字幕时，只能写视频标题、简介、章节或看得见的画面；不能声称“视频解说说了……”或伪造时间点。
- YouTube 关键帧必须记录真实 URL、标题、频道、时间点、画面用途和证据边界。不能只使用封面充当教程截图。
- 不确定的快捷键、价格、版本差异、Mod 安装路径、Seed 结果、精确配方和动态平台信息，查不到可靠证据就写“待复核/暂无可靠公开资料”，不要猜。
- 事实尽量用两个来源交叉验证；动态事实写采集日期。

### 3. 把页面写成动作链

先将页面压缩成 4–6 个动词，再展开正文。通用顺序是：

```text
解锁 / 获取 → 找到入口 → 点击或按键 → 看懂界面
→ 完成一次最小操作 → 验证结果 → 回到主循环 → 进阶用法
```

例如 Map Guide 页可以是：

```text
Research → Map → 展开地图 → 边走边看 Minimap → 返回工厂 → 开始建造
```

顶部先给出一张总流程图或流程卡，让玩家一眼知道全貌；每个核心 H2 只解决一个动作。

### 4. 按玩家任务组织正文

推荐的页面结构：

```text
H1: [对象] Guide: [玩家最终要完成的动作]
一句话摘要：这页能帮玩家完成什么
Short answer：第一步 → 第二步 → 最终结果
总流程：Open → Choose → Confirm → Use → Verify

H2: 1. 解锁 / 获取 [对象]
直接操作 → 完成后的画面 → 继续条件 → 截图 / 箭头 → 步骤卡

H2: 2. 找到并打开 [对象]
入口位置 → 要看哪个区域 → 截图 / 箭头 → 常见误区

H2: 3. 用它完成第一次任务
最小可行操作 → 成功信号 → 失败排查 → 场景截图 / 流程图

H2: 4. 下一步怎么接回游戏主循环
什么时候回工厂、建造、扩展或验证

H2: Advanced: Seeds / Mods / 特殊版本
备份 → 检查版本 → 新存档测试 → 保持独立

H2: FAQ
只回答有证据支持的真实问题
```

正文里直接说玩家该怎么做，不要使用这些研究过程语言：`The current Official Wiki Research page...`、`according to our research`、`the source says`、`we found that`。来源放在图片下方和 `Sources & Attribution` 区域，正文只保留对玩家有用的动作、结果和排错信息。

### 5. 为每个核心动作配正确视觉

图片不是装饰，也不是文章字数的替代品。每张图发布前都要回答：“玩家看完它，能知道点哪里、看哪里，还是下一步做什么？”

优先顺序：

1. 已有官方游戏截图或官方图标；
2. 官方视频中与动作对应的关键帧；
3. 社区实况在真实操作时间点的关键帧；
4. CSS/SVG 流程图或机制图，用于串起截图之间的关系；
5. 纯装饰封面只能做氛围，不能替代操作图。

每个核心动作至少选择一种视觉：

| 动作 | 适合的视觉 |
|---|---|
| 解锁 / 获取 | 研究树或购买界面局部图，箭头指向入口 |
| 找入口 / 看 HUD | 完整 HUD 图 + 1 个局部箭头 |
| 实际使用 | 操作中的游戏画面或视频关键帧 |
| 判断成功 | 前后状态对比、结果区域或流程图 |
| 进阶布局 | 工厂/路线实景图，标出预留空间和连接方向 |
| Mod / Seed | 社区案例图，但明确不是官方机制证据 |

不要把一张与动作无关的 `100 mined`、数字统计或视频封面放在步骤前充当广告。图片必须紧跟它解释的动作，并在下方给出简短说明。

### 6. 在截图上添加可缩放箭头

默认保留原始图片，不直接破坏 JPG/PNG。使用项目已有的 `WikiVisual` / `src/components/wiki-visual.tsx` 叠加 SVG 标注；如果组件能力不足，先扩展共享组件，不要为每个页面复制一套箭头代码。

当前推荐的数据结构：

```ts
type WikiVisualAnnotation = {
  label: string
  labelX: number
  labelY: number
  targetX: number
  targetY: number
}

type WikiVisual = {
  src: string
  alt: string
  caption: string
  credit: string
  sourceHref?: string
  sourceLabel?: string
  annotations?: readonly WikiVisualAnnotation[]
}
```

坐标使用图片内部的 0–100 百分比，箭头从标签指向真正的按钮、面板或目标区域：

```ts
annotations: [
  { label: 'Click Research', labelX: 78, labelY: 14, targetX: 58, targetY: 68 },
]
```

标注规则：

- 一张图最多 1–3 个箭头；
- 标签使用短动作词或区域名：`Click this`、`Expand map`、`Watch here`；
- 箭头要有炭黑描边和明显的主题色，亮暗截图上都可见；
- 标签不能遮挡关键数字、按钮或字幕；
- 画面、流程卡和正文容器使用同一主内容宽度；不要让图片比步骤卡窄或宽；
- 桌面端和窄屏都检查箭头终点、标签溢出和可读性。

### 7. 接入素材和来源

新增图片放到 `public/assets/`，并同步更新：

- `Docs/素材清单.md`：文件、用途、来源、归属、采集日期、使用边界；
- `public/assets/asset-manifest.json`：保持合法 JSON。

每张视觉下方或卡片内直接显示来源链接，至少包含：

```text
Caption：这张图帮助玩家确认什么
Credit：Official Steam screenshot / Official Wiki / YouTube community gameplay
Source：真实页面或视频链接；视频附时间点链接
Boundary：官方机制 / 社区案例 / 待复核线索
```

页面侧栏或末尾增加 `Sources & Attribution`，专门说明：哪些链接支持机制事实，哪些视频只是玩家路线、工厂布局或 Mod 案例。不要只在底部放一个笼统的“来源”而让读者猜图片从哪里来。

### 8. 实现时保持数据、路由、组件分离

- 将文案、章节、视觉、来源和流程数据写入项目现有内容层，通常是 `src/data/site-content.ts`。
- 路由只负责找到 slug 和渲染页面；不要把整篇文章硬编码在路由文件里。
- 复用 `WikiVisual`、步骤卡、机制图和 Sources 组件；改共享组件前检查其他 Wiki 页的兼容性。
- 使用真实 `alt` 文本，描述玩家看到的界面和动作，不写“image1”。
- 图片和卡片使用同一容器宽度；有 `max-width` 的旧样式时，优先改为 `width: 100%` + 统一父容器。
- 不要为了一个页面改动全站导航、SEO、部署配置或无关页面。
- 用户只要求审查时默认做只读审查；用户要求修改时才编辑代码或素材。

## 验收清单

### 玩家视角

- [ ] 刚买游戏的玩家能在首屏找到第一步；
- [ ] 每个步骤都写了“点哪里 / 看哪里 / 会发生什么”；
- [ ] 至少有一次最小成功操作，不只是概念介绍；
- [ ] 失败时有先检查什么；
- [ ] 主流程和 Advanced 内容分开；
- [ ] 没有把研究过程、第三方语言或营销统计当正文。

### 来源和素材

- [ ] 每个关键事实有可靠来源或明确标为待复核；
- [ ] 社区视频明确标注社区案例，不冒充官方机制；
- [ ] YouTube 关键帧有真实视频链接和时间点；没有关键帧就不要声称用了关键帧；
- [ ] 图片下方能直接点到来源；
- [ ] 新素材已更新素材清单和 manifest；
- [ ] 图片上的箭头指向真实目标，且没有遮挡关键信息。

### 页面和工程

- [ ] 页面与路由的职责清楚，没有为改文案无故新增路由；
- [ ] 只有一个 H1，H2/H3 层级合理；
- [ ] 图片全部加载，`alt` 有意义；
- [ ] 图片、流程图、卡片宽度一致，没有横向溢出；
- [ ] 目标页面和至少一个相邻页面在本地浏览器打开检查；
- [ ] 至少运行 `npm run typecheck`、`npm run build`、`git diff --check`；
- [ ] 若改 JSON，运行 `jq empty` 或等价合法性检查；
- [ ] 没有把本地实现、索引请求或实时测试访问写成已部署、已收录或已有搜索流量。

## 交付回复格式

完成后用简短的事实清单交付：

1. 修改了哪些文件；
2. 完成了哪个页面子步骤；
3. 哪些内容仍待来源、素材或用户确认；
4. 做了哪些验证及结果；
5. 下一步最小行动是什么。

不要只说“页面优化完成”。如果没有部署，就明确写“本地页面已完成，未执行公网部署”。

## 详细参考

需要完整的 Map 页复盘、YouTube 关键帧记录格式、SVG 箭头数据结构、来源说明和浏览器检查细节时，读取：

`Docs/Wiki内页生产方案.md`

需要整站首页、Wiki 索引、参考对象或关卡 4 流程时，读取：

`.agents/skills/game-site-level4-builder/SKILL.md`
