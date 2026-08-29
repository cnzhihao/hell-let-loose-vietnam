# HLL Vietnam Field Manual

这是一个面向 **Hell Let Loose: Vietnam** 的玩家优先 Wiki / 游戏资讯站。应用代码基于 [mkfast-lite](https://github.com/MkFastHQ/mkfast-lite)，工作流由仓库内的项目级 Skills 管理，事实页面均保留官方来源和核验日期。

当前仓库是本地研究预览：内容已完成第一轮官方资料核验，但还没有生产域名和部署授权，因此仍保持 `isTemplate: true`、`noindex`、robots 禁止抓取和空 sitemap。

## 直接开始

```bash
git clone https://github.com/cnzhihao/hell-let-loose-vietnam.git
cd hell-let-loose-vietnam
pnpm install
pnpm dev
```

打开 `http://127.0.0.1:3000/`。本地页面可以浏览和验收，但不能直接当成正式站发布。

## 当前内容范围

第一轮页面已经覆盖：

- `/wiki/basics/game-overview`：游戏规模、阵营、地图、角色和平台总览；
- `/guides/beginner`：Getting Started、首场比赛、沟通和指挥角色边界；
- `/wiki/battlefield/launch-maps`、`/wiki/battlefield/game-modes`：六张首发地图和四种官方 launch mode；
- `/wiki/roles/roles-and-units`、`/wiki/systems/*`：角色族、隧道、直升机、巡逻艇、移动与团队配合；
- `/wiki/access/*`：发行平台、crossplay 和 PC 配置要求；
- `/wiki/updates/*`：Patch 1.2、Patch 1.3 和带 planned 标记的 2026 路线图。

未写入完整角色名单、逐地图战术、价格、玩家数、评价快照、跨进度和通用按键表，因为当前资料或版本边界不足。

## 上站前必须完成

1. 在 `src/config/website.ts` 写入真实 HTTPS 生产域名；
2. 复核所有动态事实和页面素材授权；
3. 按 `AGENTS.md` 重新执行研究、页面和 SEO readiness 流程；
4. 明确授权后再将 `isTemplate` 改为 `false`、部署并提交索引。

不要只替换游戏名就上线。每个可索引页面都要对应明确搜索意图、真实用户问题和可靠来源。

## 技术栈和路由

- React 19 + TypeScript；
- TanStack Start + TanStack Router 文件路由；
- Vite、Tailwind CSS v4、Paraglide（可选多语言）；
- Cloudflare Workers 部署适配；
- Vitest + Playwright + Biome + TypeScript 验证。

基础页面结构：

```text
/                         Wiki 首页
/wiki                     Wiki 分类目录
/wiki/<category>          分类页
/wiki/<category>/<entry>  默认条目页
/guides                   Guide 目录
/guides/<slug>            可自定义的 Guide 规范路径
/robots.txt               模板模式禁止抓取；正式模式输出 sitemap
/sitemap.xml              只列出 indexable 页面
```

内容和路由是分开的：优先在 `src/content/` 增加内容，再通过通用路由渲染；只有需要特殊布局或 canonical 路径时，才增加单独 route 文件。

## 常用命令

```bash
pnpm dev             # 本地开发
pnpm check           # Biome、内容、locale、单元测试和 TypeScript
pnpm build           # 生产构建和 TypeScript
pnpm e2e             # Playwright 桌面端与移动端
pnpm locale:compile  # 修改 project.inlang/messages 后重新生成
pnpm cf-typegen      # 修改 Cloudflare bindings 后重新生成
pnpm content:check   # 检查分类、slug、路径、关联页和 indexable 来源
```

`src/routeTree.gen.ts`、`src/locale/paraglide/` 和 `worker-configuration.d.ts` 是生成文件：改动路由、翻译或 Cloudflare 配置后使用命令重新生成，不手工编辑。

## Skill 路由

| 任务 | Skill |
|---|---|
| 初始化模板、替换站点配置、检查模板安全状态 | `game-site-template-builder` |
| 选游戏词、挖关键词、做页面矩阵和来源研究 | `game-site-research` |
| 搭建首页、Wiki、Guide、素材和本地站 | `game-site-level4-builder` |
| 生产或审计一个具体 Wiki / Guide 内页 | `wiki-page-builder` |
| 从 YouTube 找时间点和实机关键帧 | `youtube-keyframe-extractor` |
| 新站上线前审计 metadata、robots、sitemap 和可索引性 | `game-site-seo-readiness` |
| 上线并有真实数据后的 GSC → SEO Agent 复盘 | `seo-agent-site-optimization` |
| 有内容资产后的外链渠道研究和授权外展 | `game-site-external-link-outreach` |

推荐工作流：

```text
game-site-template-builder
→ game-site-research
→ game-site-level4-builder
→ wiki-page-builder
→ game-site-seo-readiness
→ 本地验证
→ 明确授权后部署
→ seo-agent-site-optimization / game-site-external-link-outreach
```

后两个 Skill 是上线后的运营流程，不是初始化时自动执行的步骤。

## 外部操作边界

默认只做本地文件、只读研究、草稿和验证。没有明确授权，不执行公网部署、DNS、GSC/Bing/GA 操作、索引请求、发帖、发邮件、编辑第三方 Wiki、创建账号、购买链接或付费建链。

## 状态定义

```text
资料已整理 ≠ 网站已实现 ≠ 本地可访问 ≠ GitHub 已推送
≠ 公网已部署 ≠ sitemap 已提交 ≠ URL 已收录 ≠ 已有长期搜索流量
```

## 仓库结构

```text
AGENTS.md                    Agent 总控规范
README.md                    起站和命令说明
Docs/                        研究、页面矩阵和素材模板
src/config/                  站点与游戏配置
src/content/                 Wiki 分类、条目、来源和关联关系
src/routes/                  TanStack 文件路由
src/components/wiki/         Wiki 页面和搜索组件
public/assets/               可追溯的发布素材
skills/                      项目级 Skills 及 references
scripts/check-content.ts     内容结构检查
tests/                       单元测试和 E2E 测试
```
