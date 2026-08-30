# Content helpfulness audit

> Reviewed 2026-08-30 (Asia/Shanghai) with `wiki-page-builder`, `game-site-level4-builder`, `game-site-seo-readiness` and `youtube-keyframe-extractor`. This is a local/template-safe content audit; it does not authorize indexing or deployment.

## Contract applied

- Every content entry must answer a player question, state a short answer/lead, expose quick facts, provide 4–6 complete action steps, give a failure or evidence boundary, cite sources and link to a useful next page.
- Official game, store, patch, roadmap and news material is used for mechanics and current product facts. Community material may only illustrate a player example and is not used to prove an official rule.
- Version-sensitive claims are dated or explicitly marked for recheck. Missing proof remains `pending` rather than becoming a thin or speculative guide.
- All content remains template-safe: `indexable: false`, `noindex, nofollow`, robots `Disallow: /` and an empty sitemap.

## Entry-by-entry result

| Route | Helpfulness result | Evidence boundary / next useful action |
|---|---|---|
| `/wiki/basics/game-overview` | Orientation page now turns the verified game shape into a choice of next task. | Official overview facts; open Beginner, Modes or Access for the next question. |
| `/guides/beginner` | First-match chain covers tutorial, squad entry, communication, objective reading and role restraint. | Exact platform bindings remain build-sensitive; start with the official tutorial. |
| `/wiki/battlefield/launch-maps` | Map hub now gives all six launch names plus an official environment cue for choosing the right map brief. | It does not claim routes, cover, strongpoints or best roles; open the specific map profile. |
| `/wiki/battlefield/game-modes` | Mode page gives a decision path from server mode to the relevant win condition and cap rule. | Detailed mechanics come from the official mode guide; recheck after mode updates. |
| `/wiki/roles/roles-and-units` | Role page helps a new player choose a safe learning path while exposing the official count discrepancy. | No complete roster is asserted until a current-build roster pass reconciles 19 versus 17. |
| `/wiki/systems/tunnels-helicopters` | Vietnam-specific systems are connected to spawn pressure, transport and Patch 1.3 checks. | Current tunnel cooldown/hot-tunnel rule is dated; aircraft details route to the first-flight guide. |
| `/wiki/systems/movement-and-teamplay` | Player receives a repeatable objective-first movement and communication loop. | Communication examples do not establish universal bindings or a guaranteed squad outcome. |
| `/wiki/access/release-and-platforms` | Release/platform page answers whether the game is live and where to verify a current listing. | Price and availability are dynamic; use the live storefront rather than a frozen snapshot. |
| `/wiki/access/crossplay-and-platforms` | Server labels are turned into a practical mismatch check for players who cannot join friends. | Cross-progression and shared entitlements are not inferred; recheck current server wording. |
| `/wiki/access/pc-requirements` | Minimum/recommended hardware is presented as a dated comparison and upgrade decision. | Official requirements are not a performance guarantee; compare the actual scene and recheck updates. |
| `/wiki/updates/patch-1-3` | Current patch page identifies tunnel, vehicle, helicopter, VOIP, map and fix-sensitive changes. | Patch notes are time-bound; use the latest update as the current authority. |
| `/wiki/updates/patch-1-2` | Historical update page helps explain why an older tip may differ from the current patch. | It is a historical reference, not a current settings or balance recommendation. |
| `/wiki/updates/roadmap-2026` | Roadmap page separates planned work from features that are live now. | Planned items are not promises or launch facts; verify a later patch before acting on them. |
| `/guides/join-a-squad` | Server platform/capacity check, open-squad choice and first-call loop make the page actionable before queueing. | UI labels and keybinds can change; the page does not promise squad availability. |
| `/guides/voice-chat` | Input testing, lobby/in-match channel distinction and position–direction–intent format answer the immediate voice problem. | Party Voice Chat is documented as lobby-only; exact push-to-talk bindings need current capture. |
| `/guides/helicopter-controls` | First-flight page now includes the Patch 1.3 inversion/Layout B/co-pilot boundary and a safe transport objective. | Exact bindings and aircraft handling remain platform/build-sensitive. |
| `/guides/best-settings` | Settings page recommends a repeatable one-change stability/visibility baseline instead of a universal preset. | No benchmark or “best” FPS claim is made; use the crash guide for instability. |
| `/guides/crashing-fixes` | Failure-stage logging, official launch options and the conditional AMD branch create a reversible troubleshooting path. | AMD overlay/gore and launch options are temporary checks with variable results, not universal fixes. |
| `/wiki/battlefield/thanh-hoa-bridge` | Official river-crossing, jungle/mountain, village and trainyard cues become a first-match question. | Sector, route, strongpoint and role advice remain pending current-build evidence. |
| `/wiki/battlefield/hue-outskirts` | Official mountain, terrace, jungle, waterway, base and industrial cues help frame the first terrain question. | No fixed objective order, route or cover pattern is claimed. |
| `/wiki/battlefield/van-tuong` | Official village, jungle and river-network cues help a squad decide what to observe around a live objective. | Boat availability and bankside tactics are not inferred from the profile. |
| `/wiki/battlefield/quang-ngai` | Official flooding, cliff/cave, bamboo and open-lowland cues support a pace/crossing observation. | No universal crossing, vertical route or role recommendation is published. |
| `/wiki/battlefield/dak-to-airfield` | Official airstrip, open-ground, crater and hilltop-fortification cues give a concrete cover/spacing question. | Vehicle lanes, sightlines and strongpoints require direct current-build verification. |
| `/wiki/battlefield/cam-ranh-port` | Official dock, compound, dune, creek-bed and waterway cues help players classify the current fight. | Water routes, boat tactics and strongpoints remain unverified. |
| `/wiki/roles/weapons` | Current-versus-planned weapon boundary prevents an incomplete roster from being presented as fact. | Exact launch roster, stats and damage claims remain pending current UI/source capture. |
| `/wiki/roles/vehicles` | Confirmed armour, mortar, helicopter and patrol-boat families route the player to relevant systems guidance. | Exact models, controls and performance are not asserted. |
| `/wiki/access/editions-and-buying` | Live storefront verification gives a safe purchase workflow without stale regional price copy. | Region, tax, discount, edition and subscription state must be checked at checkout. |

## Directory and shell pages

The home page, `/wiki`, `/guides` and the six category pages (`/wiki/basics`, `/wiki/battlefield`, `/wiki/roles`, `/wiki/systems`, `/wiki/access`, `/wiki/updates`) were checked as navigation surfaces. They expose the question-based entry points, topic filters, result counts, latest content or category cards needed to reach the 27 entries; they do not pretend to be standalone mechanic guides. Their template metadata and empty-sitemap behavior remain unchanged.

## Visual evidence decision

No new YouTube keyframe is included in this pass. The existing eight official static assets are contextual and already registered in `Docs/素材清单.md` and `public/assets/asset-manifest.json`. The pages that mention controls, channels and troubleshooting use official written Patch/news material and clearly mark build-sensitive details; a video frame would be platform/version-specific without adding a verified fact. The YouTube extraction path was checked under the project Skill, but community access returned a login/bot check, so no unverified frame was substituted.

If a later current-build capture becomes available, the first candidates are the helicopter binding screen, voice-channel selector, server platform filter and AMD settings/launch-options UI. Each candidate must pass the YouTube Skill's public-source, timestamp, visible-frame, attribution and manifest checks before publication.

## Open evidence work

- Reconcile the complete current role and weapon rosters from an official/current-build source.
- Capture current-build helicopter, voice and server-browser UI only if exact controls or labels become a high-value user question.
- Add map sector/strongpoint/route guidance only after a source-backed current-build map pass; the current pages intentionally stop at useful official terrain profiles.
