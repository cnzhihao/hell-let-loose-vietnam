# Launch audit — HLL Vietnam Field Manual

> Pre-launch audit only. This record does not authorize deployment, DNS, Search Console, analytics or index submission.

## Audit context

- Project: HLL Vietnam Field Manual
- Repository: https://github.com/cnzhihao/hell-let-loose-vietnam
- Clone: `/Users/xuzhihao/方好心晴公司内容/IP 运营/02-教程项目/AI 上站-游戏资讯站/Sep./hell-let-loose-vietnam`
- Branch: `main`
- Implementation commit reviewed: `9993176` (`Build HLL Vietnam field manual`)
- Audit date: 2026-08-29
- Timezone: Asia/Shanghai
- Local origin used for runtime checks: `http://127.0.0.1:3000`
- Configured production origin: none (`websiteConfig.url: null`)
- Indexing mode: pre-launch/template-safe (`websiteConfig.isTemplate: true`)

## Route inventory

| Route family | Routes checked | Expected state |
|---|---|---|
| Home | `/` | 200, one H1, local canonical, noindex |
| Wiki hub | `/wiki` | 200, category directory, noindex |
| Wiki categories | `/wiki/basics`, `/wiki/battlefield`, `/wiki/roles`, `/wiki/systems`, `/wiki/access`, `/wiki/updates` | 200, source-backed entry cards, noindex |
| Beginner Guide | `/guides`, `/guides/beginner` | 200, task-first guide, noindex |
| Content entries | 13 routes from `src/content/site.ts` (10 keyword routes plus supporting pages) | 200, one H1, self canonical, noindex |
| Legacy route | `/guides/map` | 301 to `/wiki/battlefield/launch-maps` |
| Unknown content | `/wiki/missing/no-such-page`, `/wiki/basics/not-a-real-entry` | 404, noindex |
| Machine endpoints | `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` | 200, template-safe output |

## Checks completed

- `pnpm check`: passed — Biome, content check, locale parity, 5 unit tests and TypeScript.
- `pnpm build`: passed — client and SSR/Worker production builds. Vite emitted a non-blocking large-chunk warning for the existing application bundle.
- `pnpm e2e`: passed — 13 tests passed, 1 mobile-only test skipped by project configuration; Chromium and mobile projects both exercised.
- `git diff --check`: passed.
- `jq empty public/assets/asset-manifest.json`: required manifest is valid JSON; no new game asset is registered.
- Runtime content crawl: 13 entry routes returned 200, one H1, self canonical and `noindex, nofollow`.
- Runtime residue scan: checked home, Wiki, Guide, mode, access and update pages; no old template repository, old game name or placeholder copy was rendered.

## Machine endpoint results

```text
/robots.txt             200  User-agent: * / Disallow: /
/sitemap.xml             200  <urlset> with no <loc> entries
/manifest.webmanifest   200  application/manifest+json; HLL Vietnam Field Manual
```

## Blockers before public launch

1. A real HTTPS production origin is not configured. Do not switch `isTemplate` to `false` until the origin is known and authorized.
2. Public indexing is intentionally closed: all entries are `indexable: false`, robots disallows crawling, and the sitemap is empty.
3. The full role roster and map-by-map tactical briefs still need their own source-backed research pass before being promoted to evergreen indexable pages.
4. No game screenshots or video frames are included. Any future asset needs a traceable record in `Docs/素材清单.md` and `public/assets/asset-manifest.json`.

## External operations

- New GitHub repository was created as requested; code is prepared for push to `origin`.
- No `wrangler deploy` was run.
- No DNS, Cloudflare production configuration, GSC/Bing/GA setup, index request, outreach, account creation or paid link operation was run.

## Next authorized step

Provide/confirm the production origin and explicitly authorize deployment. Then rerun this audit with `websiteConfig.url`, change the intended source-backed routes to `indexable: true`, set `isTemplate: false`, verify the non-empty sitemap, and only then consider deployment and indexing operations.
