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
- Deployed Worker version: `f83960fa-5922-46ec-85ea-eb275c6f12bf`

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

## 2026-08-30 All-page helpfulness and Skill audit

- The content-helpfulness pass reviewed all 27 content entries plus `/`, `/wiki`, `/guides` and the six Wiki category shells against `wiki-page-builder`, `game-site-level4-builder` and `game-site-seo-readiness`. The detailed route-by-route record is in `Docs/content-helpfulness-audit.md`.
- Every content entry now has a direct player task, short answer/lead, quick facts, sources, related pages and four to six complete action steps with a success signal. `scripts/check-content.ts` now rejects entries outside the four-to-six range or with missing step fields.
- The six map pages now provide official historical setting and terrain profiles from the [Launch Maps announcement](https://steamcommunity.com/app/3079210/announcements/detail/690891687156777529), plus a first-match observation question. They remain explicitly bounded: sector, strongpoint, route, cover and role tactics are not published without current-build evidence.
- High-intent troubleshooting and onboarding pages were made operational: server-browser capacity/filter checks, lobby versus in-match voice channels, Patch 1.3 helicopter inversion/Layout B/co-pilot notes, and the documented conditional AMD launch/crash checks.
- `youtube-keyframe-extractor` was reviewed for the visual-evidence decision. No new YouTube frame was added because the current claims are supported by official written material and a frame would be platform/build-specific without proving a necessary fact. The attempted community extraction remained blocked by YouTube's login/bot check; no unverified image was substituted. Existing eight official static assets remain registered in `Docs/素材清单.md` and `public/assets/asset-manifest.json`.
- Final local verification for this pass: `pnpm theme:check`, `pnpm locale:compile`, `jq empty Docs/keywords.json public/assets/asset-manifest.json`, `pnpm content:check`, `pnpm research:check`, `pnpm check`, `pnpm build`, `pnpm e2e` and `git diff --check` all passed. The build retains only the existing large-bundle advisory.
- A fresh local runtime crawl checked 36 home, directory and content routes. All returned 200 with one H1, title, description, self canonical and `noindex, nofollow`; the unknown Wiki path returned 404 and `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`.
- The earlier blocker wording that called map pages “roster records” is superseded by this section: the pages now contain source-backed terrain profiles, while map tactics remain pending. The full role/weapon roster and any exact current-build control tables remain open evidence work.
- Template safety was not relaxed: `websiteConfig.url` is still `null`, `websiteConfig.isTemplate` is still `true`, every entry remains `indexable: false`, robots remains disallowed, and the sitemap remains empty.

## 2026-08-30 Content sync deployment and public recheck

- The all-page helpfulness and evidence-boundary updates were committed as `95c865e` (`Complete content helpfulness audit and evidence updates`) and pushed to `origin/main`.
- `pnpm run deploy` completed successfully against the existing Worker `hll-vietnam-field-manual`; the current deployed version is `f83960fa-5922-46ec-85ea-eb275c6f12bf`.
- Before this deployment, 25 of the 36 declared routes had visible-content differences between local and the public domain. After deployment, a fresh comparison of all 36 routes found 36/36 exact visible-content, title, H1 and description matches between `http://127.0.0.1:3000` and `https://hellletloosevietnamguide.site`.
- Public-domain E2E passed: 25 tests passed and 1 mobile-only test was skipped across Chromium and Pixel 7 projects (26 test cases total).
- Public route/head verification passed for all 36 declared HTML routes: HTTP 200, one H1, title, description, self canonical and `noindex, nofollow`. The two legacy routes were also checked: `/guides/map` returns 301 to `/wiki/battlefield/launch-maps`, and `/wiki/basics/beginner-guide` returns 301 to `/guides/beginner`.
- Public negative and machine endpoint checks passed: `/wiki/missing/no-such-page` returns 404; `/robots.txt` returns the project `User-agent: *` and `Disallow: /` policy; `/sitemap.xml` contains no `<loc>` entries; and `/manifest.webmanifest` returns valid JSON with `application/manifest+json`.
- Template safety is unchanged: `websiteConfig.url` remains `null`, `websiteConfig.isTemplate` remains `true`, every entry remains `indexable: false`, and no GSC/Bing/GA, index request or sitemap submission was performed.
- The separate upstream Skill PR remains open and was not merged: [game-site-agents-template PR #2](https://github.com/cnzhihao/game-site-agents-template/pull/2).

## 2026-08-30 Evidence completion pass

- Research sources were rechecked against the current official game page, Steam About section, official Patch 1.3, official roadmap, official `Inside the Armoury` videos, GamesRadar and public YouTube gameplay. YouTube Skill was used for caption-based timestamp location and a return to the player for visible-frame verification; no login, cookie, CAPTCHA or bot-check bypass was used.
- Roles: the current Steam About section now supplies a named 17-role roster grouped as Command (1), Infantry (7), Recon (2), Armour (2), Helicopter—US only (2) and Mortar Squad (3). The official landing page still advertises 19 specialised roles without naming the additional two; the discrepancy remains visible and is not silently reconciled.
- Weapons: `/wiki/roles/weapons` now carries a 22-name US/NVA reference catalogue, separately identifies official Patch 1.3 names and current gameplay examples, and keeps roadmap items M14, Type 56 SKS and Stoner 63 as planned. The 22-name list is a third-party research lead; role access, unlocks, ammunition, weight, damage, recoil and best-in-slot claims remain unverified.
- Maps: Thanh Hóa Bridge now includes a dated pre-release GamesRadar reviewer observation; Huế Outskirts includes IronHeart Gaming’s 2026-08-13 player example with timestamps for bridge/boat, supply drop, factory-side dock and Industrial. These are explicitly non-universal. Vạn Tường, Quảng Ngãi, Đắk Tô Airfield and Cam Ranh Port still need direct current-build sector/strongpoint/route evidence, so no unsupported route table was added.
- Controls: `/guides/helicopter-controls` now records the KAISER Mtbb PC profile (2026-08-22): W/S, A/D, mouse, E and Space as described by the creator, with `Control helicopter with mouse` visibly On at about 02:05. It is labelled `Community lead`; free look, infantry, console, default and later-build bindings remain open.
- Assets: no YouTube binary frame was retained because the available capture included player/ad chrome and did not add a necessary site asset. `Docs/素材清单.md` records the inspected public videos and timestamps; `public/assets/asset-manifest.json` remains limited to the existing registered official assets.
- Local `game-site-seo-readiness` audit passed: all 36 declared HTML routes returned 200 with one H1, title, description, self canonical and `noindex, nofollow`; `/guides/map` remained a 301 to `/wiki/battlefield/launch-maps`; the unknown Wiki path returned 404; robots still disallows crawling; sitemap contains no `<loc>`; manifest returned valid JSON. The new roles, weapons, helicopter table and Huế evidence text were also checked in rendered HTML.
- Required checks passed: `pnpm locale:compile`; `jq empty Docs/keywords.json public/assets/asset-manifest.json`; `pnpm content:check`; `pnpm check`; `pnpm build`; `pnpm e2e` (25 passed, 1 skipped); and `git diff --check`. The existing large-bundle advisory remains the only build warning.
- This evidence pass did not commit, push, deploy, alter DNS, change `websiteConfig.url`, disable `isTemplate`, open robots or generate a sitemap. The public domain therefore remains on the previous deployed template-safe version and must not be considered synchronized with these uncommitted local content changes.

### Remaining evidence gate

1. Obtain a current-client or official source that reconciles the 19-versus-17 role count before publishing an official 19-role claim.
2. Replace the weapon reference lead with a current-client or official role/loadout matrix before claiming a complete official weapon roster.
3. Capture current-build tactical-map evidence for named sectors/strongpoints/routes on Vạn Tường, Quảng Ngãi, Đắk Tô Airfield and Cam Ranh Port; do not promote the two existing player observations into universal route advice.
4. Capture current-build infantry, console, voice-channel and server-browser controls only if those exact high-intent questions justify another YouTube or in-client evidence pass.

## 2026-08-30 Current-build evidence expansion

- The pending evidence pass was extended with the public [HLLVDB roles](https://hellletloosevietnamdb.com/database/roles), [loadouts](https://hellletloosevietnamdb.com/database/loadouts), [arsenal](https://hellletloosevietnamdb.com/database/arsenal), [interactive map index](https://hellletloosevietnamdb.com/database/world/map) and [data versions](https://hellletloosevietnamdb.com/database/versions). These are reference sources only; their own version notes defer to official updates and in-game verification.
- Roles: `/wiki/roles/roles-and-units` now exposes all 17 names from the current Steam About section plus 25 named snapshot loadout profiles. Six roles have no complete snapshot loadout record. The official landing-page count remains 19 with two unnamed roles; no names were invented.
- Maps: all six map pages now expose five Conquest strongpoint labels and fifteen Domination control-point labels from the current public snapshot, with derived A1–J10 grid references. Unresolved record IDs are preserved. The tables are objective lookup material, not a fixed capture order, route, cover plan or role recommendation.
- Weapons: `/wiki/roles/weapons` now separates the 22-name reference union from the current snapshot’s 18 named weapon-like records and two unresolved record IDs within a 66-record weapons/equipment dataset. Planned roadmap weapons remain planned; no unresolved record was renamed.
- Controls: `/guides/helicopter-controls` now compares the matching launch-era PC catalogues from [HLL Vietnam](https://hellletloosevietnam.org/guides/helicopter-controls/) and [All Things How](https://allthings.how/hell-let-loose-vietnam-keybinds-and-best-keyboard-and-mouse-settings/) with KAISER’s timestamped YouTube profile. Conflicting axes remain explicit and the current client is the authority. YouTube Skill was used; no new frame or binary asset was retained.
- The research docs were synchronized: `Docs/keywords.json`, `Docs/page-matrix.md`, `Docs/page-briefs.md`, `Docs/keyword-materials.md`, `Docs/content-helpfulness-audit.md` and `Docs/素材清单.md` now record the expanded sources and boundaries.
- Template safety is unchanged: `websiteConfig.url` remains `null`, `websiteConfig.isTemplate` remains `true`, all entries remain `indexable: false`, robots remains `Disallow: /`, sitemap remains empty, and this pass did not commit, push, deploy or alter DNS.

## 2026-08-30 Final local SEO readiness after evidence expansion

- Scope: local pre-launch/template-safe audit using `game-site-seo-readiness`; no production indexing or deployment authorization was inferred.
- Route inventory: 36 declared HTML routes (home, Wiki/Guide directories, six category routes and 27 content routes) all returned HTTP 200. Every route had one H1, a non-empty title and description, a self canonical, matching `og:url` and `noindex, nofollow`.
- Redirect/negative checks: `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`; `/wiki/basics/beginner-guide` returned 301 to `/guides/beginner`; `/wiki/missing/no-such-page` returned 404.
- Machine endpoints: `/robots.txt` returned `User-agent: *` plus `Disallow: /`; `/sitemap.xml` contained zero `<loc>` entries; `/manifest.webmanifest` returned 200 with `application/manifest+json`.
- Evidence-page rendering: roles (2 tables), weapons (3 tables), helicopter controls (2 tables) and all six map pages (2 tables each) rendered the new cross-check material. The 320px Playwright check found document width equal to viewport width and one H1 on every updated route; no horizontal overflow was detected.
- Full local commands passed after the evidence update: `pnpm locale:compile`, `jq empty Docs/keywords.json public/assets/asset-manifest.json`, `pnpm content:check`, `pnpm research:check`, `pnpm theme:check`, `pnpm check`, `pnpm build`, `pnpm e2e` (25 passed, 1 skipped) and `git diff --check`.
- Decision: keep template mode. `websiteConfig.url` remains `null`, `websiteConfig.isTemplate` remains `true`, all entries remain `indexable: false`, robots remains blocked and sitemap remains empty. Local changes are not yet committed, pushed, deployed or synchronized to the public domain.

## 2026-08-30 Authorized push and deployment after evidence expansion

- The evidence-expansion implementation and synchronized research documents were committed as `02ebcb4` (`Complete current-build evidence expansion`) and pushed successfully to `origin/main`.
- `pnpm run deploy` passed against the existing Worker `hll-vietnam-field-manual`; the deployed Worker version is `d48f502d-2198-4b00-9a26-ccc169180f98`.
- The Worker remains attached to `hellletloosevietnamguide.site/*`; the public preview URL remains `https://hll-vietnam-field-manual.zhcnzhihao.workers.dev`.
- Public post-deployment checks passed: `/` and `/wiki/roles/vehicles` returned 200, `/guides/map` returned 301 to `/wiki/battlefield/launch-maps`, the unknown Wiki route returned 404, `/assets/hllv-wiki-favicon.png` returned 200 `image/png`, and `/manifest.webmanifest` returned 200 `application/manifest+json`.
- Public route/head audit passed for all 36 declared HTML routes: each returned one H1, a non-empty title and description, a self canonical, matching `og:url`, English language and `noindex, nofollow`.
- Public template endpoints remain closed: `/robots.txt` is exactly `User-agent: *` plus `Disallow: /`, and `/sitemap.xml` contains zero `<loc>` entries.
- Public-domain Playwright E2E passed with 25 tests passed and 1 mobile-only test skipped. The local pre-push E2E also passed with the same result. The existing large-bundle advisory is the only build warning.
- Template safety was not relaxed: `websiteConfig.url` remains `null`, `websiteConfig.isTemplate` remains `true`, every entry remains `indexable: false`, and no GSC/Bing/GA setup, index request or sitemap submission was performed.
- The follow-up audit-record commit changes documentation only; it does not alter the deployed runtime bundle. The site runtime corresponds to commit `02ebcb4`.

## 2026-08-30 Production-origin launch candidate before GSC/Bing submission

- Scope: the user authorized the source-backed production-origin launch candidate, push and Cloudflare deployment. This record stops immediately before Google Search Console or Bing Webmaster Tools verification, sitemap submission or index requests; none of those external indexing operations were performed.
- Source-backed indexability was enabled only for 17 useful content records. The remaining 10 records (`roles-and-units`, `helicopter-controls`, six map-specific pages, `weapons` and `vehicles`) remain navigable but use `noindex, follow` and are excluded from the sitemap because their role roster, exact controls, tactical routes or complete equipment evidence is not yet reconciled.
- Code commit `0b3de1f` (`Prepare source-backed pages for indexing`) is on `origin/main`. `pnpm run deploy` completed for Worker `hll-vietnam-field-manual`; deployed Worker version `2978c0f4-a996-4572-b0b1-85632268f33e` is attached to `hellletloosevietnamguide.site/*`.
- Public `game-site-seo-readiness` audit passed for all 36 declared HTML routes (home, Wiki/Guide directories, six category routes and 27 content routes): each returned HTTP 200 with one H1, a non-empty title and description, a self canonical, matching `og:url`, and the expected robots directive. The production canonical is `https://hellletloosevietnamguide.site`.
- Public indexing controls passed in ready mode: `/robots.txt` returns `User-agent: *`, `Allow: /` and the production sitemap URL; `/sitemap.xml` contains 26 unique production URLs and no `noindex` content; the 17 selected source-backed content URLs are present. `/guides/map` returns 301 to `/wiki/battlefield/launch-maps`, `/wiki/basics/beginner-guide` returns 301 to `/guides/beginner`, and the unknown Wiki route returns 404.
- Public asset and regression checks passed: `/manifest.webmanifest` returns valid `application/manifest+json`, `/assets/hllv-wiki-favicon.png` returns 200 `image/png`, and public-domain Playwright E2E passed with 25 tests passed and 1 mobile-only test skipped. Local `pnpm check`, build, E2E and the required JSON, locale, content, research, theme and diff checks had already passed for this same code state.
- No GSC/Bing verification, property creation, sitemap submission, URL inspection/index request, GA setup, outreach or paid-link operation was performed. The site is now at the last technical step before those submissions; a separate explicit indexing operation remains required.

## 2026-08-30 On-page SEO content-depth optimization (local)

- Scope: applied the SEO体检 findings to all 26 URLs currently emitted by `sitemap.xml`. This pass is local only; it did not deploy, submit a sitemap or request indexing.
- Content depth: added data-layer editorial sections in `src/content/editorial.ts` and merged them through `src/content/site.ts`. The sections are page-specific: first-match decisions, mode and map reading, evidence boundaries, platform and purchase checks, troubleshooting workflows and dated update handling. They are not repeated keyword filler.
- Rendered content check: an SSR `main`-text crawl measured every sitemap page at 1,200+ English word tokens. The minimum was approximately 1,263 words (`/wiki/basics`); the homepage measured approximately 1,800 words. The crawl included headings, facts, action steps, sources and related links that are visible in the main content area.
- Keyword alignment: directory H1s now use `Hell Let Loose Vietnam Wiki`, `Hell Let Loose Vietnam Guides` and category-specific search language. Public entry titles/H1s and metadata were aligned to the corresponding page intent without changing the site brand (`Hell Let Loose Vietnam Wiki`). The homepage title was shortened to `Hell Let Loose Vietnam Guide | HLL Vietnam Wiki`.
- Metadata and structure: category, Wiki and Guides directory heads now include self canonical, 70–160 character descriptions, OG image metadata and Twitter card metadata. All audited sitemap pages have one H1; the previous Guides H1-to-H3 jump is resolved.
- Image stability: visual and logo `<img>` elements now carry intrinsic width and height attributes. Visual dimensions match the registered public assets; no new YouTube binary asset was added because the current content did not require additional visual evidence.
- Local verification completed after the changes: `pnpm locale:compile`, `jq empty Docs/keywords.json public/assets/asset-manifest.json`, `pnpm content:check`, `pnpm check`, `pnpm build`, `pnpm e2e` (25 passed, 1 skipped), `git diff --check`, plus a 26-route rendered word-count and head-contract crawl. The build retains only the existing large-bundle advisory.
- The browser SEO tool’s initial 26-page audit identified the content-depth, image-dimension, directory social-meta and heading issues that this pass addresses. The public post-change resubmission is recorded below; no score is inferred from the local crawl alone.
- The production runtime for commit `f13e431` was deployed as Worker version `b928e7c9-0843-47e8-84b4-b64a1def1312` before the external resubmission. The public domain was then compared with the local render across all 26 URLs and found identical for visible main content, title, description, canonical and robots.

## 2026-08-30 Public on-page SEO resubmission

- The user explicitly authorized pushing and deploying before submitting the audit. All 26 submissions below used `https://hellletloosevietnamguide.site`, never the local development server.
- Result: 26/26 completed; average score `92.12`; range `89–99`; 25 pages received `A · 优秀` and one page received `B · 良好`. The tool reported public word counts from `1,323` to `1,846`; every page met the requested 1,200-word minimum. Meta, links, images/media, social/structured-data and technical/crawl sections were full score on every page.

| Public route | Score | Grade | Tool words |
|---|---:|---|---:|
| `/` | 93 | A | 1,846 |
| `/guides` | 94 | A | 1,428 |
| `/wiki` | 99 | A | 1,715 |
| `/wiki/basics` | 93 | A | 1,323 |
| `/wiki/battlefield` | 93 | A | 1,537 |
| `/wiki/roles` | 92 | A | 1,393 |
| `/wiki/systems` | 94 | A | 1,413 |
| `/wiki/access` | 94 | A | 1,396 |
| `/wiki/updates` | 93 | A | 1,347 |
| `/wiki/basics/game-overview` | 92 | A | 1,515 |
| `/guides/beginner` | 91 | A | 1,675 |
| `/wiki/battlefield/launch-maps` | 92 | A | 1,521 |
| `/wiki/battlefield/game-modes` | 91 | A | 1,549 |
| `/wiki/systems/tunnels-helicopters` | 90 | A | 1,440 |
| `/wiki/systems/movement-and-teamplay` | 89 | B | 1,409 |
| `/wiki/access/release-and-platforms` | 91 | A | 1,394 |
| `/wiki/access/crossplay-and-platforms` | 91 | A | 1,432 |
| `/wiki/access/pc-requirements` | 92 | A | 1,424 |
| `/wiki/updates/patch-1-3` | 92 | A | 1,355 |
| `/wiki/updates/patch-1-2` | 92 | A | 1,402 |
| `/wiki/updates/roadmap-2026` | 90 | A | 1,416 |
| `/guides/join-a-squad` | 92 | A | 1,568 |
| `/guides/voice-chat` | 92 | A | 1,426 |
| `/guides/best-settings` | 91 | A | 1,408 |
| `/guides/crashing-fixes` | 91 | A | 1,469 |
| `/wiki/access/editions-and-buying` | 91 | A | 1,379 |

- Remaining findings: the tool flags a generic “landing page handoff” on 24 Wiki/editorial pages because it treats useful internal links as jump-only entries and does not recognize an editorial answer as a product interaction. No artificial calculator, form or other fake interaction was added. It also gives phrase-level warnings for exact keyword presence in descriptions/H2s and a partial title/H1 match on `movement-and-teamplay`; these are natural-language scoring notes, not crawl or indexation failures. The page is intentionally not keyword-stuffed, and the page-specific answer, source boundary and related action remain the priority.
- Public recheck also passed the 26-route head contract, 26 sitemap URLs, production robots policy, legacy 301, unknown-route 404, manifest, public/local visible-content comparison and public Playwright E2E. No GSC/Bing verification, sitemap submission or index request was performed.

### Remaining evidence boundary

The role-count discrepancy (official landing page 19 versus current Steam About roster 17), complete official weapon/loadout matrix, universal map route/tactical evidence and exact current-client control tables remain documented as evidence work. They do not block submitting the currently selected 17 source-backed URLs, but the 10 bounded pages must stay out of the sitemap until independently verified.

## 2026-08-30 GSC and Bing ownership/submission

- Google Search Console ownership for `https://hellletloosevietnamguide.site/` was verified successfully with the Cloudflare domain-name-provider flow. Cloudflare authorized the one-time addition of the TXT record `google-site-verification=syuNDsdFjpNhpj7Rr9io5No6uqrBV9-rLHnptXvVmtw`; the record must remain in DNS to retain verification.
- Google Search Console accepted `/sitemap.xml` for submission. The immediate Sitemaps view showed `Couldn't fetch` / `0` discovered pages while processing; an independent public check at `https://hellletloosevietnamguide.site/sitemap.xml` returned HTTP 200 with `application/xml` and the expected 26 production URLs. This is recorded as submitted but pending Google’s next read, not as successfully crawled yet.
- Bing Webmaster Tools imported exactly one site from the verified GSC account: `https://hellletloosevietnamguide.site/`. Its Sitemaps view contains `https://hellletloosevietnamguide.site/sitemap.xml` with `Imported · Processing`, `Sitemaps with errors: 0` and `Sitemaps with warnings: 0` at submission time; discovered URLs had not populated yet.
- No URL Inspection indexing requests were made. No robots, sitemap, canonical, `isTemplate` or content changes were made during this external submission pass. The site remains in the already-approved production-ready mode; indexing submission does not imply that Google or Bing has indexed the pages or that traffic exists.
- Next verification: recheck the Google Sitemaps status and Bing discovered-URL count after processing time. If Google continues to report a fetch error despite the public 200 response, inspect the detailed sitemap error and only then decide whether a resubmission or technical change is warranted.
