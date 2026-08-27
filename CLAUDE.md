# Agent handoff

请先阅读 `AGENTS.md` 和 `README.md`。本仓库是游戏 Wiki starter，不是具体游戏项目；默认模板模式必须保持 `noindex`、空 sitemap 和禁止抓取。

代码修改后优先运行：

```bash
pnpm content:check
pnpm check
pnpm build
```

如果改了路由、locale 或 Cloudflare bindings，分别运行 `pnpm locale:compile`、开发/构建触发 route tree 生成或 `pnpm cf-typegen`。生成文件不要手工编辑。公网部署、搜索引擎提交、外链和账号操作必须得到明确授权。
