# Content helpfulness audit

> Reviewed 2026-08-30 (Asia/Shanghai) with `wiki-page-builder`, `game-site-level4-builder`, `game-site-seo-readiness` and `youtube-keyframe-extractor`. The current result is a production-origin launch candidate; it does not authorize GSC/Bing verification or sitemap submission.

## Contract applied

- Every content entry must answer a player question, state a short answer/lead, expose quick facts, provide 4–6 complete action steps, give a failure or evidence boundary, cite sources and link to a useful next page.
- Official game, store, patch, roadmap and news material is used for mechanics and current product facts. Community material may only illustrate a player example and is not used to prove an official rule.
- Version-sensitive claims are dated or explicitly marked for recheck. Missing proof remains `pending` rather than becoming a thin or speculative guide.
- 17 source-backed content records are intended to be indexable in ready mode. Community-lead records and the incomplete vehicle hub remain useful for navigation but stay `noindex, follow` and out of the sitemap.

## Entry-by-entry result

| Route | Helpfulness result | Evidence boundary / next useful action |
|---|---|---|
| `/wiki/basics/game-overview` | Orientation page now turns the verified game shape into a choice of next task. | Official overview facts; open Beginner, Modes or Access for the next question. |
| `/guides/beginner` | First-match chain covers tutorial, squad entry, communication, objective reading and role restraint. | Exact platform bindings remain build-sensitive; start with the official tutorial. |
| `/wiki/battlefield/launch-maps` | Map hub now gives all six launch names plus an official environment cue for choosing the right map brief. | It does not claim routes, cover, strongpoints or best roles; open the specific map profile. |
| `/wiki/battlefield/game-modes` | Mode page gives a decision path from server mode to the relevant win condition and cap rule. | Detailed mechanics come from the official mode guide; recheck after mode updates. |
| `/wiki/roles/roles-and-units` | Current Steam About section’s 17 named roles are grouped into six units and cross-checked against 25 public snapshot loadout profiles, with a direct choice-and-verification path. | The official landing page still says 19 without naming two additional roles; six roles have no complete snapshot loadout record and live availability/progression remain client-sensitive. |
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
| `/guides/helicopter-controls` | First-flight page compares two matching third-party PC catalogues with a timestamped KAISER Mtbb profile, a visible mouse-control setting check, Patch 1.3 boundaries and a safe transport objective. | The catalogues and creator profile conflict on several axes; the current client, infantry controls, console controls and free-look remain platform/build-sensitive. |
| `/guides/best-settings` | Settings page recommends a repeatable one-change stability/visibility baseline instead of a universal preset. | No benchmark or “best” FPS claim is made; use the crash guide for instability. |
| `/guides/crashing-fixes` | Failure-stage logging, official launch options and the conditional AMD branch create a reversible troubleshooting path. | AMD overlay/gore and launch options are temporary checks with variable results, not universal fixes. |
| `/wiki/battlefield/thanh-hoa-bridge` | Official river-crossing cues are paired with a pre-release GamesRadar reviewer’s bridge/side-approach/high-ground observation. | It is one dated preview context, not current fixed sectors, strongpoints, routes or role advice. |
| `/wiki/battlefield/hue-outskirts` | Official terrain cues are paired with IronHeart Gaming’s timestamped bridge/boat/factory-side/Industrial player sequence. | It is one match example; mode, objective state, build and fixed strongpoint order remain unverified. |
| `/wiki/battlefield/van-tuong` | Official village, jungle and river-network cues are paired with a current snapshot index of five Conquest and fifteen Domination objective labels/grid lookups. | The index is not a capture order; boat availability, route and role tactics remain contextual. |
| `/wiki/battlefield/quang-ngai` | Official flooding, cliff/cave, bamboo and open-lowland cues are paired with a current snapshot objective index for live-map lookup. | The index is not a universal crossing route, cover plan or role recommendation. |
| `/wiki/battlefield/dak-to-airfield` | Official airstrip, open-ground, crater and hilltop-fortification cues are paired with a current snapshot objective index for live-map lookup. | Vehicle lanes, sightlines and capture order remain mode/context-sensitive. |
| `/wiki/battlefield/cam-ranh-port` | Official dock, compound, dune, creek-bed and waterway cues are paired with a current snapshot objective index for live-map lookup. | Water routes, boat tactics, cover and capture order remain contextual. |
| `/wiki/roles/weapons` | A 22-name US/NVA reference union is separated from official Patch 1.3 names, planned roadmap weapons and a 20-record current snapshot cross-check. | The current snapshot has 18 named weapon-like labels plus two unresolved IDs; role access, unlocks, ammunition, weight, damage and recoil still require current-client or official-matrix verification. |
| `/wiki/roles/vehicles` | Confirmed armour, mortar, helicopter and patrol-boat families route the player to relevant systems guidance. | Exact models, controls and performance are not asserted. |
| `/wiki/access/editions-and-buying` | Live storefront verification gives a safe purchase workflow without stale regional price copy. | Region, tax, discount, edition and subscription state must be checked at checkout. |

## Directory and shell pages

The home page, `/wiki`, `/guides` and the six category pages (`/wiki/basics`, `/wiki/battlefield`, `/wiki/roles`, `/wiki/systems`, `/wiki/access`, `/wiki/updates`) were checked as navigation surfaces. They expose the question-based entry points, topic filters, result counts, latest content or category cards needed to reach the 27 entries; they do not pretend to be standalone mechanic guides. In ready mode, these navigation surfaces use the verified production origin and the sitemap lists only the 17 source-backed content records.

## Visual evidence decision

No new YouTube binary keyframe is included in this pass. The existing eight official static assets are contextual and already registered in `Docs/素材清单.md` and `public/assets/asset-manifest.json`. `youtube-keyframe-extractor` was used to inspect public release-adjacent videos: captions located the control/map moments, and the player was returned to for a visible-frame check. The helicopter player frame visibly showed `Control helicopter with mouse` enabled at about 02:05, but it was not retained because the available capture included player/ad chrome and did not add a necessary site asset. Final content keeps the public watch URL, timestamp, channel, date and evidence boundary.

If a later clean current-build capture becomes available, the first candidates are the helicopter binding screen, voice-channel selector, server platform filter, AMD settings/launch-options UI and map tactical overlay. Each candidate must pass the YouTube Skill’s public-source, timestamp, visible-frame, attribution and manifest checks before publication.

## Open evidence work

- Reconcile the official landing-page role count (19) with the current Steam named roster (17); the 17 published names are complete for the source quoted, but the two extra names are not identified.
- Replace the reference weapon union with a current-client or official role/loadout matrix before calling it an official complete roster; the current snapshot is a stronger cross-check but still not an official matrix.
- Capture current-build helicopter, infantry, console, voice and server-browser UI only if exact controls or labels become a high-value user question; the published helicopter table intentionally preserves conflicting PC sources.
- Add universal map route/cover/role guidance only after a source-backed current-build tactical pass; all six maps now have bounded objective indices, while the existing Thanh Hóa and Huế notes remain player/reviewer observations.

## 2026-08-30 current-build evidence expansion

- The 17-role page now includes the complete named Steam roster and a 25-profile loadout cross-check from the public HLLVDB snapshot. The two official extra roles behind the landing page’s “19” claim remain unnamed, and six roles have no complete loadout record in the snapshot.
- Each of the six map pages now includes five Conquest and fifteen Domination objective labels with derived A1–J10 grid references from the HLLVDB map dataset. Unresolved record IDs are preserved. The tables help a player find the active objective; they do not state a fixed route or capture order.
- The weapons page now shows the 20 weapon-like HLLVDB snapshot records that can be represented without guessing: 18 named labels and two unresolved IDs, alongside the existing 22-name reference union. The snapshot’s 66 total weapons/equipment count is recorded as a source-specific boundary.
- The helicopter page now compares two independently published PC catalogues with KAISER’s changed personal profile. Because the mappings conflict, the current in-game Controls screen remains the final authority. YouTube Skill was used for public-source/timestamp/frame checks; no new binary asset was retained.
- These updates improve practical helpfulness without over-promoting unresolved evidence: community-lead and incomplete pages remain noindex, while only the selected 17 source-backed records enter the sitemap.
