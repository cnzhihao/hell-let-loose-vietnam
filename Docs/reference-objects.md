# Reference objects

> Research record for Hell Let Loose Vietnam Wiki. Accessed 2026-08-29 (Asia/Shanghai). These are structure references only; no competitor text, visual identity, code, images or outbound links are copied into the site.

## Official HLL: Vietnam game page

- URL: https://www.hellletloose.com/game/hll-vietnam
- Type: official game/product page.
- Useful structure: strong game identity first, then scale/faction/role claims, feature modules, official video or article links, and a direct path to the official product ecosystem.
- Pattern adopted: homepage gives the player a concise answer, then routes to Wiki categories and the official sources panel. Feature claims are stored in `src/content/site.ts` with evidence state and collection date.
- Intentionally different: the site does not repeat marketing copy as a full landing page. It turns individual search intents into short, source-visible entries and labels unresolved claims.
- Boundary: official facts may be cited through direct links; official logos, screenshots and video frames are not copied into this repository.

## Visual direction checked against the official page

- Checked 2026-08-29: the official product page leans on a near-black field, olive green, rust orange, sand gold, condensed display type, full-width visual bands and clear routes into the product ecosystem.
- Pattern adopted: the home hero uses the same broad visual grammar — dark command-center canvas, condensed uppercase headings, source-status panel and high-contrast rust CTA — while the Wiki remains a research tool rather than a marketing clone.
- Intentionally different: no proprietary font files, official logo, screenshot, video frame or copied page markup is used. The hero map is an original inline SVG contour/grid treatment created for this repository, and the type falls back to local system fonts.

## Official launch and mode articles

- URLs: https://www.hellletloose.com/blog/hllv-out-now and https://www.hellletloose.com/blog/hllv-game-modes
- Type: official launch/news and mechanics reference.
- Useful structure: launch article establishes the platform/map/mode baseline; the mode article expands one intent into named rules and terminology.
- Pattern adopted: separate `Launch Maps` and `Game Modes` entries, with the mode page organized by player decision (which win condition is active) rather than a generic news summary.
- Intentionally different: the mode-count conflict between the landing page and launch materials is shown as a recheck boundary instead of silently choosing a number.
- Boundary: only facts directly supported by the official pages are used. Community videos linked by the official page are not treated as transcripts or mechanics evidence.

## Official Steam store and news feed

- URLs: https://store.steampowered.com/app/3079210/Hell_Let_Loose_Vietnam/ and https://steamcommunity.com/app/3079210/allnews/
- Type: official store listing and publisher/developer news feed.
- Useful structure: store metadata answers release/platform/access questions; the news feed supplies version-sensitive update context.
- Pattern adopted: dedicated Access pages for release/platforms, crossplay and PC requirements; separate dated entries for Patch 1.2 and Patch 1.3.
- Intentionally different: prices, review counts, language lists and live service data are not frozen in evergreen copy. They remain dynamic checks or direct official destinations.
- Boundary: store/news facts are checked with a collection date. No store artwork, screenshots or user reviews are republished.

## Repeated competitor patterns observed during discovery

- Search discovery surfaced community/database-style sites such as GGSage, hllvietnam.org and RogueWiki. They were inspected only as information-architecture references on 2026-08-29, not as factual sources.
- Common useful patterns: a broad Wiki directory, a separate beginner guide, map/mode hubs, patch/news pages, and cross-links from overview pages into task pages.
- Our mapping: `/wiki` is the directory; `/guides/beginner` is the first-match task page; `/wiki/battlefield/launch-maps` and `/wiki/battlefield/game-modes` split map roster from win-condition mechanics; `/wiki/updates/*` keeps dates and planned content visible.
- Intentionally different: every page shows its evidence boundary and source links. We do not copy competitor wording, rankings, layouts, assets or brand signals, and we do not use competitor pages as final evidence for game facts.
