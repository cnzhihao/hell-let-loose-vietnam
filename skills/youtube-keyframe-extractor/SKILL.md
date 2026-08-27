---
name: youtube-keyframe-extractor
description: Extract traceable gameplay screenshots from YouTube videos for Sandustry Wiki and Guide pages. Use this skill whenever the user provides a YouTube URL or asks to download, parse, transcribe, locate a spoken phrase, find a timestamp, capture a keyframe, add arrows to a game screenshot, or place video evidence in a specific article section—even if they only say “找一张视频里的图” or “不要用封面”. Separate official UI/mechanics evidence from community gameplay examples, keep signed media URLs and raw videos out of the repository, and return a timestamp-to-asset-to-page-placement record with attribution and validation.
compatibility: Requires filesystem access to the Sandustry project; a local video/audio analysis tool and ffmpeg are preferred; a logged-in browser may be needed to inspect a user-provided YouTube page; Node/npm are required when the frame is connected to a local Wiki page. Do not deploy or publish externally unless the user explicitly asks.
---

# YouTube Keyframe Extractor

把游戏视频变成 Wiki 页面中“有用途、有时间点、有来源”的截图证据。这个 Skill 负责视频来源、字幕定位、关键帧抽取、素材登记、页面接入和验收；它不负责把整段视频改写成文章，也不把社区实况冒充官方教程。

## 什么时候使用

遇到以下任何情况都使用本 Skill：

- 用户提供 YouTube 视频，要求解析、下载、找字幕、找解说时间点或截关键帧；
- 用户说“不要封面，要视频里实际讲到那一步的画面”；
- 用户希望把玩家实况截图放进 Map、Water、Buildings、Animals、Mod、Seed 或其他 Wiki/Guide 页面；
- 用户要求在截图上加箭头、标出按钮、路线、工厂空间或地图区域；
- 用户要求在图片下方显示视频链接、频道、时间点和社区内容说明；
- 已经有截图，但需要判断它应该放在哪个 H2、流程卡或步骤之后。

如果只是制作整篇 Wiki 文章而不涉及视频素材，使用 `.agents/skills/wiki-page-builder/SKILL.md`；如果任务同时涉及文章生产和视频关键帧，先用本 Skill 建立视觉证据，再交给 Wiki Page Builder 接入正文。

## 证据角色

| 证据 | 可以支持什么 | 不能支持什么 |
|---|---|---|
| 官方 Steam/官方 Wiki 截图 | 按钮位置、正式名称、公开机制和界面关系 | 当前存档中的路线或玩家的最优布局 |
| 官方视频关键帧 | 官方演示中可见的操作和画面 | 没有画面直接证明的配方、固定数值或所有版本规则 |
| 玩家视频关键帧 | 这个玩家实际采用过的路线、布局、Mod 或存档案例 | 官方机制、固定坐标、通用 Seed、永久数值或版本兼容性 |

玩家视频必须标为 `YouTube community gameplay`、`player example` 或同等说明。字幕只是定位工具；自动字幕中的物品名、按键和机制术语必须回到画面与官方来源复核。

## 开始前

先读取：

1. `README.md`、`AGENTS.md`；
2. `Docs/Wiki内页生产方案.md`；
3. `Docs/素材清单.md`、`public/assets/asset-manifest.json`；
4. 目标页面的数据、共享视觉组件和当前 `git status --short --branch`。

保留用户已有改动，先确认目标页面、目标章节和已有素材，避免重复下载或把图片放错位置。

## 标准流程

### 1. 写视觉任务

先写清楚这张图要帮助玩家完成什么：

```text
页面 / 路由：
目标章节：
玩家正在做什么：
图片要让玩家看到什么：
成功判断：
需要箭头吗：
证据角色：官方机制 / 官方演示 / 社区案例
```

如果图片只是装饰，不要为它启动视频解析流程。

### 2. 规范化 YouTube 来源

1. 优先使用公开的 `https://www.youtube.com/watch?v=...` 地址，记录视频 ID、标题、频道和时长。
2. 用户提供的 `googlevideo.com` 地址是带签名的临时媒体地址，只能作为一次性分析入口；不要写进代码、Markdown、素材清单或页面链接。
3. 需要登录时使用用户已经登录的浏览器页面；不读取、导出或保存登录凭据。
4. 如果视频被权限、地区或反机器人机制拦截，不使用可疑下载站、盗版镜像或绕过访问控制的方式；改用可访问来源或已核验画面。

### 3. 取得临时分析副本

需要精确抽帧时，在本地工作目录取得视频或音频副本。下载工具应来自可审计的开源项目或用户已提供的合法本地文件；不要把完整视频放进 `public/assets/`、Git 或部署包。

临时副本只用于导出/定位字幕、比较时间点前后画面和抽取少量静帧。最终项目只保留经过选择的 JPG/PNG、公开 YouTube `watch` 链接和带 `&t=` 的时间点链接。

### 4. 先拿字幕，再定位时间点

优先使用 YouTube 页面可见的字幕或 transcript；没有字幕时，才使用本地语音识别，并明确标记为自动识别文本。不要把未核验的自动字幕当作官方术语。

搜索动作词和场景词：

```text
water / route / factory / next factory / map / modded / research / minimap
```

每个候选时间点都回到播放器确认：解说和画面是否同步、画面是否真的展示目标动作、字幕是否有识别错误、这一帧服务哪个页面章节。没有看到对应画面时，不得凭字幕猜测截图内容或伪造时间点。

### 5. 建立时间点表

先产出中间表，再抽帧：

| 解说/字幕片段 | 时间点 | 画面内容 | 页面用途 | 证据边界 |
|---|---:|---|---|---|
| 真实短句 | 00:00 | 看到了什么 | 放在哪个 H2 | 官方/社区/待复核 |

Map 页的实际样例：

| 短句 | 时间点 | 页面用途 |
|---|---:|---|
| `pipe any of this water out?` | 03:45 | 水源路线侦察案例 |
| `I have some ideas for our next factory` | 13:32 | 工厂扩展空间案例 |
| `if you want to play modded maps like this` | 27:21 | 自定义地图差异案例 |

### 6. 抽取并检查关键帧

先用播放器复核时间点，再用本地工具抽取静帧。`ffmpeg` 模板：

```bash
ffmpeg -i input.mp4 -ss 00:03:45 -frames:v 1 -q:v 2 frame-0345.jpg
```

如果字幕和画面有延迟，在目标点前后各取几帧比较，选择真正能说明动作的一帧。允许必要的裁切、缩放和压缩，但不要在原始图片上直接画死箭头或大段文字。

文件名应表达用途，例如：

```text
sandustry-map-video-water-route.jpg
sandustry-map-video-factory-layout.jpg
sandustry-map-video-modded-map.jpg
```

### 7. 登记素材和来源

新增图片必须同步更新 `Docs/素材清单.md` 和 `public/assets/asset-manifest.json`。每张视频关键帧至少记录：

```text
sourcePage: https://www.youtube.com/watch?v=VIDEO_ID
sourceAsset: https://www.youtube.com/watch?v=VIDEO_ID&t=225s
timestamp: 00:03:45
sourcePhrase: pipe any of this water out?
plannedUse: Map scouting section
credit: CHANNEL / YouTube community gameplay
```

图片下方要直接显示带时间点的来源链接，例如 `Open YouTube at 03:45 ↗`，不要只放视频首页 URL。

### 8. 接入 Wiki 页面

在 `src/data/site-content.ts` 的视觉数据中绑定图片、alt、caption、credit、sourceHref、sourceLabel 和 variant。关键帧要紧跟它解释的 H2 或步骤卡：

```text
Scouting trip → 水源路线帧
Factory site → 工厂布局帧
Custom maps / mods → Mod 地图帧
```

正文直接说玩家该做什么，不把“根据我们的研究”“视频作者说”写成文章主体。来源、频道、时间点和证据边界放在图注与 `Sources & Attribution`。

### 9. 使用网页 SVG 标注层

官方 Steam 截图中的 `Research`、`Map`、`Minimap` 按钮，使用项目已有的 `WikiVisual.annotations`，由 `src/components/wiki-visual.tsx` 叠加 SVG：

```ts
annotations: [
  { label: 'Expand map', labelX: 18, labelY: 15, targetX: 78, targetY: 14 },
]
```

使用图片内部 0–100 的百分比坐标；每张图最多 1–3 个箭头；标签使用短动作词；箭头不能遮挡按钮、字幕、关键数字或目标区域；原图保持可追溯，箭头随容器缩放。社区实况帧主要用于路线、布局和 Mod 差异案例，不强行加箭头。

### 10. 玩家视角验收

逐张图检查：

1. 这是解说对应时间点的画面，而不是视频封面；
2. 图片下方有频道、归属、时间点和可点击来源；
3. 社区案例没有被写成官方机制；
4. 正文已告诉玩家下一步，不需要玩家猜图；
5. 官方来源负责机制事实，视频只负责可见操作或案例；
6. 图片、流程卡和正文同宽，移动端没有横向溢出。

## 固定输出格式

完成后交付以下结构：

```text
## Source
- 视频标题 / 频道 / URL / 可访问状态

## Timestamp map
| phrase | time | frame | page placement | evidence boundary |

## Assets
- 新增文件、尺寸和本地路径
- manifest / 素材清单是否同步

## Page integration
- 绑定页面、H2、caption、source link
- 箭头或流程图是否使用

## Validation
- 字幕与画面是否复核
- 图片是否加载
- 来源链接是否可点击
- 构建、JSON、浏览器检查结果

## Unresolved
- 没有字幕、时间点不确定、版本差异或授权边界
```

## 不能做的事

- 不把视频封面当教程截图；
- 不把自动字幕未经核验的术语当成事实；
- 不把玩家视频当官方机制说明；
- 不把带签名的 `googlevideo.com` URL 写进项目；
- 不把完整视频或音频提交到仓库或部署包；
- 不使用可疑下载站、盗版镜像或绕过访问控制的方式；
- 不为了凑图片而截取与页面动作无关的画面；
- 不在图片上覆盖大段文章正文；
- 不声称“已读取完整字幕”或“作者说了某句话”，除非确实有可复查字幕和时间点。

## 项目验证

只新增素材记录时运行：

```bash
jq empty public/assets/asset-manifest.json
git diff --check
```

接入页面时再运行：

```bash
npm run typecheck
npm run build
```

并用本地浏览器检查目标页：图片、箭头、图注、YouTube 时间点链接、相关页面和移动端宽度。

详细的 Map 页复盘见 `Docs/Wiki内页生产方案.md`；素材登记格式见 `Docs/素材清单.md` 和 `public/assets/asset-manifest.json`。
