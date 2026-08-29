# Launch audit — Hell Let Loose Vietnam Wiki

> Template-mode launch audit. The authorized Cloudflare preview deployment and public template-safe domain route are recorded below; this does not mean the site is configured for production indexing or that Search Console or analytics were enabled.

## Audit context

- Project: Hell Let Loose Vietnam Wiki
- Repository: https://github.com/cnzhihao/hell-let-loose-vietnam
- Clone: `/Users/xuzhihao/方好心晴公司内容/IP 运营/02-教程项目/AI 上站-游戏资讯站/Sep./hell-let-loose-vietnam`
- Branch: `main`
- Implementation reviewed: local working tree after the competitor-driven full-site upgrade
- Audit date: 2026-08-30
- Timezone: Asia/Shanghai
- Local origin used for runtime checks: `http://127.0.0.1:3000`
- Configured production origin: not designated (`websiteConfig.url: null`); the public template-safe route is verified separately below
- Indexing mode: pre-launch/template-safe (`websiteConfig.isTemplate: true`)
- Authorized preview deployment: `https://hll-vietnam-field-manual.zhcnzhihao.workers.dev`
- Authorized public domain route: `https://hellletloosevietnamguide.site`
- Deployed Worker version: `aa357cbe-02c3-4077-a7de-b53f5a87a496`

## Route inventory

| Route family | Routes checked | Expected state |
|---|---|---|
| Home | `/` | 200, one H1, local canonical, noindex |
| Wiki hub | `/wiki` | 200, category directory, noindex |
| Wiki categories | `/wiki/basics`, `/wiki/battlefield`, `/wiki/roles`, `/wiki/systems`, `/wiki/access`, `/wiki/updates` | 200, source-backed entry cards, noindex |
| Beginner and task Guides | `/guides`, `/guides/beginner`, `/guides/join-a-squad`, `/guides/voice-chat`, `/guides/helicopter-controls`, `/guides/best-settings`, `/guides/crashing-fixes` | 200, task-first guide, noindex |
| Content entries | 27 records from `src/content/site.ts`, including six map pages, weapons, vehicles and editions/buying | 200, one H1, self canonical, noindex |
| Legacy route | `/guides/map` | 301 to `/wiki/battlefield/launch-maps` |
| Unknown content | `/wiki/missing/no-such-page`, `/wiki/basics/not-a-real-entry` | 404, noindex |
| Machine endpoints | `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` | 200, template-safe output |
| Public domain route | `https://hellletloosevietnamguide.site/*` | Cloudflare Worker Route, HTTPS verified |

## Checks completed

- `pnpm locale:compile`: passed; English and Chinese locale modules compiled.
- `jq empty Docs/keywords.json public/assets/asset-manifest.json`: passed.
- `pnpm content:check`: passed; 6 categories and 27 entries, including tag and local-visual checks.
- `pnpm theme:check`: passed; 31 component/route/style source files use token-backed runtime colors, with all required `field-*` tokens present in both themes.
- `pnpm check`: passed; Biome, theme contract, content validation, locale parity, 5 unit tests and TypeScript.
- `pnpm build`: passed for client and SSR/Worker output. Vite reported the existing large-bundle advisory; it is non-blocking.
- `PLAYWRIGHT_BASE_URL=https://hll-vietnam-field-manual.zhcnzhihao.workers.dev pnpm e2e`: passed against the public Worker; 25 tests passed and 1 mobile-only test was skipped across Chromium and Pixel 7 projects (26 test cases total), including theme, narrow viewport and duplicate-logo-text checks.
- `PLAYWRIGHT_BASE_URL=https://hellletloosevietnamguide.site pnpm e2e`: passed against the public domain route; 25 tests passed and 1 mobile-only test was skipped across Chromium and Pixel 7 projects (26 test cases total).
- `git diff --check`: passed.
- Runtime crawl: passed for 31 home, directory, entry and unknown paths; each expected page returned one H1, a self canonical, description and `noindex, nofollow`, while the unknown path returned 404.
- Legacy route: `/guides/map` returned HTTP 301 to `/wiki/battlefield/launch-maps`.
- The asset manifest now includes eight selected official public CDN images; no competitor assets, raw videos, signed URLs or raw audio are included.
- All eight registered official WebP assets returned HTTP 200 from the local server and loaded in the homepage E2E check with source links.
- The browser favicon was redesigned with GPT Image 2 as an original H/W helmet badge with a simplified W; the 16px and 32px raster checks remain legible, and the existing PWA icon derivatives were intentionally left unchanged in this favicon-only pass.
- Runtime crawl scope is 27 content records plus the new generic Guide paths; each must return one H1, self canonical and `noindex, nofollow` in template mode.
- YouTube community keyframe extraction was attempted but blocked by the platform login/bot check; no community frame was substituted or treated as official evidence.

## Authorized Cloudflare deployment and public domain route

- `pnpm run deploy`: passed with the final Worker Route configuration; the Vite/Cloudflare build completed and Wrangler uploaded the static assets plus the Worker bundle.
- Worker: `hll-vietnam-field-manual`
- Public preview URL: <https://hll-vietnam-field-manual.zhcnzhihao.workers.dev>
- Version ID: `aa357cbe-02c3-4077-a7de-b53f5a87a496`
- Final binding: `hellletloosevietnamguide.site/*` is configured as a Cloudflare Worker Route with the domain's existing proxied A records preserved. The earlier Custom Domain attempt was rejected because those records already existed; no unknown DNS record was deleted.
- Public smoke checks: `https://hellletloosevietnamguide.site/` and `/wiki/roles/vehicles` returned HTTP 200 over HTTPS; the favicon returned `image/png`; the remote domain E2E check passed on Chromium and mobile projects (25 passed, 1 skipped).
- Public route/head audit: all 36 declared HTML routes on `https://hellletloosevietnamguide.site` returned HTTP 200 with one H1, non-empty title/description, self canonical, matching Open Graph URL, English language and `noindex, nofollow`.
- Public negative and asset checks: the unknown Wiki path returned 404 with noindex, `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`, and all 13 manifest assets returned HTTP 200.
- Template safety remained unchanged after deployment: `robots.txt` returns exactly `User-agent: *` plus `Disallow: /`, `sitemap.xml` contains no `<loc>` entries, and rendered pages retain `noindex, nofollow`. Cloudflare's managed robots configuration was disabled so it does not override the project's template robots policy.
- The deployed Worker is a preview of the template-safe site. `websiteConfig.url` remains unset and `websiteConfig.isTemplate` remains `true`; the authorized DNS delegation and Worker Route are complete, while no Custom Domain, GSC/Bing/GA, index request or sitemap submission was performed.

## Theme contract and visual verification

- Runtime page colors now come from the shared `:root` and `.dark` semantic tokens. Hero overlays, map SVG strokes, cards, filters, steps, notices, source panels, visual annotations, Footer and Logo shell no longer carry page-level fixed hex/rgb/rgba values.
- The PWA manifest and root metadata retain the configured default dark color as static metadata; runtime `color-scheme` switches between `dark` and `light` for native controls.
- The E2E theme scenario switched dark → light → dark and compared computed styles after the transition settled. The entry scenario covered `/wiki/roles/vehicles`; the mobile scenario checked 320px width in both themes.

| Surface | Dark computed background / foreground | Light computed background / foreground |
|---|---|---|
| Home `.field-hero` | `rgb(24, 24, 25)` / `rgb(226, 227, 231)` | `rgb(240, 240, 236)` / `rgb(24, 24, 25)` |
| Home `.field-brief` | `color(srgb 0.116706 0.119216 0.107451)` / `rgb(226, 227, 231)` | `color(srgb 0.932392 0.935529 0.912941)` / `rgb(24, 24, 25)` |
| Home `.field-band` | `rgb(60, 64, 40)` / `rgb(226, 227, 231)` | `rgb(226, 231, 216)` / `rgb(24, 24, 25)` |
| Home `footer` | `rgb(24, 24, 25)` / `rgb(226, 227, 231)` | `rgb(240, 240, 236)` / `rgb(24, 24, 25)` |
| Home `.field-card` / `.field-search` | `rgb(36, 37, 37)` / `rgb(226, 227, 231)` | `rgb(240, 240, 236)` / `rgb(24, 24, 25)` |
| Vehicles `.field-step` | `color(srgb 0.237059 0.208627 0.166275)` / `rgb(226, 227, 231)` | `color(srgb 0.917059 0.885294 0.829608)` / `rgb(24, 24, 25)` |
| Vehicles `.field-visual-frame` | `rgb(24, 24, 25)` / `rgb(226, 227, 231)` | `rgb(240, 240, 236)` / `rgb(24, 24, 25)` |
| Vehicles `.field-notice` | `rgb(60, 64, 40)` / `rgb(226, 227, 231)` | `rgb(226, 231, 216)` / `rgb(24, 24, 25)` |
| Vehicles `.field-on-this-page` | `color(srgb 0.281804 0.238275 0.176157)` / `rgb(226, 227, 231)` | `color(srgb 0.905804 0.859216 0.784863)` / `rgb(24, 24, 25)` |

## Machine endpoint results

```text
/robots.txt             200  User-agent: * / Disallow: /
/sitemap.xml             200  `<urlset>` with no `<loc>` entries
/manifest.webmanifest   200  application/manifest+json; Hell Let Loose Vietnam Wiki
```

## Blockers before public launch

1. A production indexing origin is intentionally not designated even though the public HTTPS domain route is verified. Keep `websiteConfig.url` unset and do not switch `isTemplate` to `false` until the production launch gate is explicitly approved.
2. Public indexing is intentionally closed: all entries are `indexable: false`, robots disallows crawling, and the sitemap is empty.
3. The full role roster and map-by-map tactical briefs still need their own source-backed research pass before being promoted to evergreen indexable pages.
4. The six map pages intentionally remain roster records: map-by-map routes, strongpoints and role recommendations need a direct current-build evidence pass.
5. Community gameplay frames are not included because the accessible YouTube extraction path was blocked; official visual context is included and fully registered.

## External operations

- New GitHub repository was created as requested; `main` was pushed to `origin` at the end of this audit.
- Authorized Cloudflare deployment was completed with `pnpm run deploy`; Spaceship nameservers were delegated to Cloudflare and the Worker Route was verified on the purchased domain.
- No Custom Domain was created, and no GSC/Bing/GA setup, index request, sitemap submission, outreach, account creation or paid link operation was run.

## Next authorized step

Before a production launch, explicitly approve the real HTTPS origin and launch status, complete the remaining source-backed role/map evidence review, then change only intended routes to `indexable: true`, set `isTemplate: false`, regenerate and verify the non-empty sitemap, and separately authorize any indexing operation. The currently deployed domain remains template-safe and noindex.

## 2026-08-30 Homepage search-intent update

- Applied the Guide-first homepage direction from the recorded search-intent research: the visible H1 and homepage title now lead with `Hell Let Loose Vietnam Guide`, while the brand and site identity remain `Hell Let Loose Vietnam Wiki`.
- The homepage now puts the first-match CTA, platform/crossplay CTA, four high-intent quick answers, question-based search shortcuts, six topic areas and a priority-sorted latest section in the primary path.
- Header secondary CTA now points to `/guides/beginner`; the homepage no longer presents a second visible Wiki label inside the logo lockup.
- Search behavior was verified for empty-state popular questions, Escape-to-close, Enter-to-directory, and the current three-result `helicopter controls` query. E2E selectors now wait for the SSR client to become interactive and scope duplicate Guide links correctly.
- Latest local checks: `pnpm locale:compile` passed; `jq empty Docs/keywords.json public/assets/asset-manifest.json` passed; `pnpm content:check` passed with 6 categories and 27 entries; `pnpm check` passed with 6 unit tests; `pnpm build` passed for client and SSR/Worker output; `pnpm e2e` passed with 25 tests and 1 skipped; `git diff --check` passed.
- Domain status at this earlier homepage-only checkpoint: the user had purchased `hellletloosevietnamguide.site` at Spaceship, but domain setup had not yet been performed. This was superseded by the final Cloudflare route setup recorded below; `websiteConfig.url` remains `null`, and `websiteConfig.isTemplate` remains `true`.
- Before any public launch, reconcile the 27 content records with the keyword/page research files, complete the remaining evidence review, run the production-origin SEO readiness audit, and obtain separate authorization for Cloudflare/DNS deployment and any indexing change.

## 2026-08-30 Current research, SEO and preview audit

- Research flow completed for this refresh: `game-site-research` materials now cover 27 keyword records, 27 keyword briefs and 27 matrix routes. `scripts/check-research.ts` is included in `pnpm check` so a content route cannot drift away from its research handoff.
- The naming handoff records the recent Google Trends signal: `Hell Let Loose Vietnam Guide` is stronger than the exact `Wiki` modifier in the captured recent comparison, so the homepage H1/title and task entry points are Guide-first while the site brand remains `Hell Let Loose Vietnam Wiki`.
- Official source recheck found a role-count discrepancy: the official product page says 19 specialised roles while the current Steam About copy says 17. The homepage and roles page show that boundary; no complete roster or role-count claim is promoted as reconciled.
- Local SEO readiness crawl: 36 declared HTML routes (home, guides/wiki hubs, six category routes and 27 content routes) returned HTTP 200 with one H1, non-empty title/description, self canonical and `noindex, nofollow`. `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`; both unknown Wiki paths returned 404. `/robots.txt` returned `Disallow: /`; `/sitemap.xml` contained zero `<loc>` entries; the manifest returned 200 with the expected JSON content type.
- Local checks completed: `pnpm locale:compile`, `jq empty Docs/keywords.json public/assets/asset-manifest.json`, `pnpm content:check`, `pnpm theme:check`, `pnpm research:check`, `pnpm check`, `pnpm build`, local `pnpm e2e` (25 passed, 1 skipped) and `git diff --check` all passed. The build retains the existing large-bundle advisory only.
- Deployment-prep check: `pnpm exec wrangler deploy --dry-run` passed with no bindings. Because Cloudflare deployment had been explicitly authorized earlier, the current template-safe build was then deployed to the existing preview Worker. Current version: `58fb80f3-93dd-4fa9-94f3-ec1f0e7af0df`; remote E2E passed with 25 tests and 1 skipped; remote route/head audit matched the local results.
- Domain boundary at this earlier pre-delegation checkpoint: the purchased domain still reported Spaceship nameservers and the placeholder A record. This was superseded by the final Cloudflare route setup recorded below.
- Template safety unchanged: `websiteConfig.url` is still `null`, `websiteConfig.isTemplate` is still `true`, all entries remain `indexable: false`, and no GSC/Bing/GA setup, index request, sitemap submission, outreach, account creation or paid link action was performed.

### Minimum next action

Keep the verified Cloudflare Route and template-safe noindex/robots/sitemap behavior in place. Before production indexing, complete the remaining role/map evidence review, explicitly approve the production launch origin, and rerun the full SEO-readiness gate.

## 2026-08-30 Cloudflare domain binding and public final audit

- Spaceship nameservers were changed from `launch1.spaceship.net` / `launch2.spaceship.net` to `sonia.ns.cloudflare.com` / `toby.ns.cloudflare.com`; direct authoritative queries now return the Cloudflare nameservers and Cloudflare anycast A records.
- Cloudflare Zone `hellletloosevietnamguide.site` is active on the Free plan. DNSSEC was checked in Spaceship and has 0 DS records.
- The first Custom Domain deployment attempt correctly surfaced two pre-existing imported proxied root A records (`54.149.79.189` and `34.216.117.25`, both AWS EC2 reverse-DNS names). Because they were not created by this project and deleting them would be irreversible, they were preserved.
- The final `wrangler.jsonc` uses `hellletloosevietnamguide.site/*` with `zone_name: "hellletloosevietnamguide.site"`; `pnpm run deploy` succeeded and registered Worker Route version `aa357cbe-02c3-4077-a7de-b53f5a87a496`.
- Public domain verification passed: HTTPS `/` and `/wiki/roles/vehicles` returned 200; `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`; the unknown Wiki path returned 404; `/robots.txt` returned exactly `User-agent: *` and `Disallow: /`; `/sitemap.xml` had zero `<loc>` entries; `/manifest.webmanifest` returned 200 with `application/manifest+json`.
- The public domain SEO audit covered all 36 HTML routes. Every route returned one H1, title, description, self canonical, matching `og:url` and `noindex, nofollow`.
- Cloudflare's managed robots configuration was set to `Disable robots.txt configuration` after the first public check showed Cloudflare's Content Signals Policy prepended to the response. A second public check confirmed the project's exact template-safe robots response.
- Final validation passed: `pnpm locale:compile`; `jq empty Docs/keywords.json public/assets/asset-manifest.json`; `pnpm content:check`; `pnpm theme:check`; `pnpm research:check`; `pnpm check`; `pnpm build`; local `pnpm e2e` (25 passed, 1 skipped); public-domain `pnpm e2e` (25 passed, 1 skipped); public 36-route SEO audit; and `git diff --check`.
- `websiteConfig.url` remains `null`, `websiteConfig.isTemplate` remains `true`, all entries remain `indexable: false`, and no GSC/Bing/GA, index request, sitemap submission, outreach, account creation or paid link operation was performed.
