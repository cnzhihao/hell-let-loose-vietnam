import type { WikiSection } from './types';

const section = (
  heading: string,
  paragraphs: readonly string[],
  bullets?: readonly string[]
): WikiSection => ({
  heading,
  paragraphs,
  ...(bullets ? { bullets } : {}),
});

export const homepageEditorialSections: readonly WikiSection[] = [
  section(
    'A practical route from search to first match',
    [
      'This Hell Let Loose Vietnam guide is organized around the decision you are trying to make. If you are still deciding whether the game fits your group, start with the overview and the release pages. If you have installed it but have not played a public match, use the Beginner Guide, Join a Squad and Voice Chat pages in that order. If you are already in a server, skip the general introduction and open the mode or map page that matches the label on your screen. This prevents a common problem with game wikis: reading a long list of facts without knowing which fact changes your next action.',
      'The first-match route is deliberately conservative. Complete Getting Started, join an open squad, choose a non-command role you understand, and ask what the active objective is before leaving the group. The official launch material says that the Squad Leader and Commander tutorials are required before taking those command roles. That does not mean a new player cannot learn quickly; it means the first lesson is how the squad, objective and communication loop fit together before adding team-wide responsibility.',
      'For a platform or purchase question, use the Access group rather than an old search snippet. The release and platform page gives the checked platform boundary, the crossplay page explains how server labels should be interpreted, and the PC Requirements page points back to the current official hardware table. Prices, discounts, account policies and platform-store requirements can change, so this site links to the live storefront instead of freezing a regional checkout value in a static paragraph.',
      'For a tactical question, begin with the mode. Warfare, Offensive, Conquest and Domination do not ask the same question of a squad. The official mode guide describes different capture structures, timers and the Morale resource. Then use the Launch Maps page or a map-specific brief to identify the terrain cue. A river crossing, dense jungle, open airfield and industrial dock should change what you ask your squad to look at, but none of those cues is a universal route or a promise of the next sector.',
    ],
    [
      'Need a safe first session? Open Beginner Guide, then Join a Squad and Voice Chat.',
      'Need to choose a server or buy the game? Open Release & Platforms, Crossplay and PC Requirements.',
      'Need to understand a fight? Read Game Modes first, then use the matching map brief.',
      'Need a current answer? Check the date and the official source label before relying on a patch-sensitive claim.',
    ]
  ),
  section(
    'How to read evidence on this site',
    [
      'Every page separates what the publisher or official storefront states from what a player example can show. Official sources carry mechanism facts such as the launch platform list, the published mode rules, the named map environments and the requirements table. A community database or gameplay frame can be useful for vocabulary, a current-build lookup or an example of how one player approached a situation, but it does not by itself prove a universal role ability, control binding, route or balance value.',
      'The checked date is part of the answer. A release date can be stable while a price is not. A patch note is authoritative for what that update says, but it should not be read as proof that every older setting or workaround still applies. The roadmap is a plan, not a current feature list. When two official surfaces disagree, such as the 19-role headline and the 17 named roles in the current Steam About section, the page keeps both statements visible and explains what remains unresolved rather than silently choosing the larger number.',
      'Use the source list as a handoff, not as decoration. Before repeating a claim in a squad chat, open the linked source and check whether it applies to your platform, build and mode. When reporting a problem, record the same context: the exact menu label, what you were doing, the build or update, and whether the issue happened at launch, loading, server join or during play. That small habit turns a vague search query into evidence another player can actually evaluate.',
    ],
    [
      'Verified across official sources means the page has more than one official anchor for its central answer.',
      'Single official source means the claim is supported but deserves a recheck after a relevant update.',
      'Community example means the material illustrates one player or dataset and is not a universal rule.',
      'Pending means the page does not fill an evidence gap with a guess.',
    ]
  ),
  section(
    'A useful first-session checklist',
    [
      'Before launching, confirm the device and the current requirements page. In the game, complete the tutorial and look at the current audio and control screens rather than memorizing a third-party chart. In the server browser, read the platform label and choose a populated open squad. In the first minute, tell the squad where you are and what you intend to do. During the first engagement, keep one eye on the objective and one eye on the squad connection. The goal is to finish the loop with a clear picture of why the squad moved, not to maximize a statistic you do not yet understand.',
      'After the match, write down one thing that was confirmed by the interface and one thing that was only a player recommendation. If voice chat failed, note the input device, channel and mute state. If the game crashed, note the exact trigger and whether one reversible change affected it. If a map call was confusing, save the map, mode, objective and build. Those notes tell you which page to open next and help keep future site updates honest.',
    ],
    [
      'Tutorial completed before public queue.',
      'Open squad and non-command role selected.',
      'Microphone or text channel tested with a short call.',
      'Active objective identified before moving.',
      'Build, mode and failure point recorded when something behaves unexpectedly.',
    ]
  ),
] as const;

export const wikiIndexEditorialSections: readonly WikiSection[] = [
  section(
    'How to use the Hell Let Loose Vietnam Wiki',
    [
      'The directory is grouped by the decision behind the search. Basics covers the game shape and the safest first-match route. Battlefield combines the official six-map launch roster with the documented mode rules. Roles & classes is a source-bounded index for the named roster, weapons and vehicles; several detailed roster pages remain noindex while their current-build evidence is being completed. Systems & controls covers movement, tunnels, helicopters, patrol boats and voice chat. Access handles platforms, crossplay, requirements, settings, crash checks and buying. Updates keeps dated patch notes separate from future roadmap items.',
      'Open a category when you need context, or use the filters when you already know the page type or topic. The entry cards show evidence state and checked date so you can distinguish a current answer from a historical or community-led lead. Each public entry has a short answer, facts, an action chain, a failure check, source attribution and related pages. That structure is meant to reduce backtracking: the answer tells you the boundary, the steps tell you what to do, and the sources tell you how to recheck it.',
    ],
    [
      'Use Basics for first-match orientation.',
      'Use Battlefield for map and win-condition questions.',
      'Use Access for a device, platform or purchase decision.',
      'Use Updates whenever the answer may have changed with a build.',
    ]
  ),
  section('Search by the action you need to complete', [
    'Search terms work best when they describe the problem rather than only the game name. Try beginner, join a squad, voice chat, crossplay, PC requirements, crashing, game modes, maps or patch 1.3. The directory searches titles, summaries, leads, keywords, topic tags and category names, so a practical phrase can still find the right page when the exact title is unfamiliar. Clear the filters if a narrow topic hides the broader page that explains the same system.',
    'The directory is not a promise that every topic has a complete roster or a permanent answer. A page can be useful precisely because it tells you what the available evidence does not establish. For example, an official landing page can name a battlefield feature without publishing a universal control chart, and a current data snapshot can expose labels without proving that the labels apply to every faction or role. Read those boundaries before copying a number or key into a squad message.',
  ]),
  section('A source-backed reading order', [
    'For a new player, read the overview, Beginner Guide and Game Modes pages, then return to the map or access page that matches your immediate question. For a returning player, start with Updates and compare the date with the page you want to use. For a troubleshooting session, use PC Requirements and Best Settings before Crashing Fixes so that a reversible test has a clear baseline. For a role or equipment question, start with the named roster and treat detailed community catalogues as references to verify in the current client.',
  ]),
] as const;

export const guidesIndexEditorialSections: readonly WikiSection[] = [
  section(
    'Choose a guide by the moment you are in',
    [
      'The Hell Let Loose Vietnam guides directory is arranged around a task, not a game-system glossary. If you have never entered a public match, start with the Beginner Guide. If you are already at the server browser, open Join a Squad. If your squad cannot hear you, open Voice Chat. If the game feels hard to read or unstable, start with Best Settings or Crashing Fixes depending on whether the problem is performance or an actual failure. This order keeps you from applying a graphics preset to a microphone problem or choosing a command role before learning the squad loop.',
      'A good guide should leave you with a visible success signal. You should know whether the tutorial opened, whether your player is attached to a squad, whether the microphone meter reacts, whether the current objective is clear, or whether a repeatable crash trigger changed after one reversible test. If you cannot tell what success looks like, pause and record the missing context instead of making several changes at once. A sequence that cannot be evaluated is not a reliable troubleshooting sequence.',
    ],
    [
      'First public match: Beginner Guide.',
      'At the server browser: Join a Squad.',
      'No one hears you: Voice Chat.',
      'Low readability or unstable frame pacing: Best Settings.',
      'Repeatable launch, loading or in-match failure: Crashing Fixes.',
    ]
  ),
  section('The first-match decision tree', [
    'Begin by checking the official tutorial boundary. The launch material describes Getting Started and says it can be skipped with Esc, while the Squad Leader and Commander tutorials are required before those roles. For a new player, complete Getting Started, choose an open squad and take a non-command role. Ask for the active objective in a short message, then stay close enough to understand how the squad communicates and moves. If you lose the group, check the tactical map and ask for the next call rather than wandering toward a random marker.',
    'When a call is unclear, separate three questions: where are we, what are we trying to affect, and what should I do next? A map page can help you name the terrain, and a mode page can explain the win condition, but the live squad call still decides the immediate route. The guide pages intentionally avoid claiming an exact universal push-to-talk key or best route because the current client and platform can change those details.',
    'After the first match, review the moment that created the most friction. If the issue was role choice, read Roles & Units. If the issue was an objective rule, read Game Modes. If it was a crossing, airfield or dock, read Launch Maps and the matching map profile. If it was a device or crash issue, record the build and failure point before opening the troubleshooting page. This creates a useful next step instead of an undirected second attempt.',
  ]),
  section('How to use steps, failure checks and sources', [
    'The action chain on each guide is intentionally short. Complete one step, look for its success signal, and only then move to the next. A failure check is not a diagnosis; it is a guardrail that prevents a common bad inference. For example, a silent microphone should send you to the input device and permission checks before you change unrelated keybinds. A crash workaround should be tested one at a time and restored if it does not change the same trigger.',
    'The source list tells you which parts are official and which are examples. Official launch material is the boundary for tutorial and platform claims. Patch notes are the boundary for what a named update changed. Community videos and databases can show a current interface or an observed workflow, but the page keeps them labelled as examples and includes a date or build when the source provides one. If a source does not publish an exact key, route or role matrix, the guide says so rather than filling the gap from memory.',
  ]),
  section('What to record when a guide does not solve the problem', [
    'Write down the page you used, the exact in-game label, the platform, the build or patch, and the point at which the result differed. For a server issue, include the visible server label and whether the problem is discovery, joining or friend access. For voice, include the selected input device, channel and mute state. For settings, include the display mode, resolution and one change at a time. For crashes, include the reproduction step and whether a reversible test changed it. This information is more useful to support and community readers than a general statement that the game is broken.',
  ]),
] as const;

export const categoryEditorialSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  basics: [
    section(
      'What a new player needs to know first',
      [
        'The Basics category answers the questions that come before tactics: what kind of game is this, what should happen before the first public match, and which responsibility should wait until the player has learned the squad loop? Hell Let Loose: Vietnam is presented by the official material as a large-scale tactical multiplayer game with NVA and US forces, 50v50 match scale, six launch maps and several named battlefield unit families. Those facts describe the shape of the experience; they do not tell a new player which route or class will win a particular match.',
        'The safest first decision is therefore procedural. Complete Getting Started, join an open squad, choose a non-command role you understand, and ask what the squad is doing. The official launch material says the Squad Leader and Commander tutorials are required before taking those roles. Waiting is not a punishment or a statement that those roles are unimportant. It protects the first match from turning into a team-wide command lesson before the player can read the objective, communicate a location and stay connected to the group.',
        'Use the Overview page for stable orientation, the Beginner Guide for the full first-match sequence, and Join a Squad when you are already at the server browser. Voice Chat belongs beside those pages because communication is part of the first-match task rather than an optional afterthought.',
      ],
      [
        'Orientation: Overview.',
        'First public match: Beginner Guide.',
        'Server browser: Join a Squad.',
        'Microphone or channel issue: Voice Chat.',
      ]
    ),
    section('A low-risk first-match loop', [
      'A useful first match has a simple loop: identify the active objective, identify your squad, state your intent, move with the group, and check the objective again when the fight shifts. This loop gives a player something to evaluate even when the map is unfamiliar or the first engagement is confusing. It also makes failure easier to describe. “I lost the squad after the objective changed” is actionable; “I did not understand the game” is not yet a diagnosis.',
      'The map and mode pages support the loop without replacing live information. Game Modes explains whether the match is using Warfare, Offensive, Conquest or Domination rules. Launch Maps explains whether the battlefield cue is a crossing, dense terrain, open ground, an airfield or an industrial water space. The active server and tactical map still determine the immediate objective. Treat the Wiki as preparation and vocabulary, not as a promise that a static route overrides the match.',
      'After the match, write down one confirmed interface fact and one player recommendation. If a role or weapon caught your attention, use the named roster as a starting point and check the current role screen before assuming availability. The official game page and current Steam About section report different role counts, so the category keeps the discrepancy visible rather than pretending the roster is fully reconciled.',
    ]),
    section('How Basics pages handle evidence and freshness', [
      'Basics pages are meant to be useful without hiding their limits. Official sources carry the game shape, tutorial gates, launch platform boundary and published movement language. A community example may show how one player communicates or navigates a menu, but it is labelled as an example. Exact keybinds, role access, progression and UI wording should be checked in the current client. If a patch changes the tutorial or server flow, the date and source list tell you where the page needs a new pass.',
      'When a page points to another category, follow the link based on the decision you have reached. A first-match question should not become a deep weapon catalogue detour. A platform question should not be answered with a forum screenshot. The category is successful when it gets a new player from uncertainty to a small, observable next action.',
    ]),
    section(
      'Basics checklist before you move on',
      [
        'Before leaving Basics, you should be able to explain what you are trying to learn, where the active objective is shown, how you will stay connected to a squad, and which claims need a current source recheck. If those answers are clear, move to Battlefield for modes and maps, Systems for controls and communication, or Access for the device and platform decision. If they are not clear, repeat the Beginner Guide action chain instead of adding more specialist information.',
      ],
      [
        'Tutorial completed or its current label recorded.',
        'Non-command first role selected.',
        'Squad objective and first call understood.',
        'Version-sensitive facts separated from stable orientation.',
      ]
    ),
  ],
  battlefield: [
    section(
      'Read terrain and win condition together',
      [
        'The Battlefield category has two jobs. Launch Maps tells you what the official material says about the six launch environments. Game Modes tells you what the current win condition asks players to capture, hold or protect. A map name alone is not enough to choose a route. The same jungle, river or industrial space can create a different decision when the match is using Warfare, Offensive, Conquest or Domination, and the live objective can move the squad’s attention away from the terrain feature you noticed during preparation.',
        'Start by reading the mode label shown by the current server or deployment screen. Then open the matching map brief and use the official terrain cue as a question: are we crossing water, entering close vegetation, moving through open ground, approaching a defended base, or working around a dock or industrial space? This question is deliberately narrower than “what is the best route?” It helps a new player look at the right part of the live map without turning a source-backed environment description into unsupported tactics.',
      ],
      [
        'Warfare: identify the active sector and majority-control problem.',
        'Offensive: identify the active sector and attack or defense task.',
        'Conquest: identify the point order and Morale context.',
        'Domination: identify the central-point gate and HQ state.',
      ]
    ),
    section('The six launch maps as practical cues', [
      'Thanh Hóa Bridge is described through Nam Ma River crossings, jungle and mountain terrain, villages and trainyards. Huế Outskirts combines mountain terrain, terraced farms, dense jungle, waterways, bases and industrial areas. Vạn Tường is framed by small villages, dense jungle, a river network and bankside foliage. Quảng Ngãi includes flooding, cliffs and caves, bamboo forests, open lowlands and cross-river spaces. Đắk Tô Airfield centers an airstrip, open surroundings, craters and nearby hilltop fortifications. Cam Ranh Port is described with military compounds, industrial docks, dunes, creek beds and a southern waterway.',
      'These descriptions are useful because they give a squad vocabulary before the first contact. They are not a sector order, cover guarantee or class recommendation. If a player records a route or sightline, the note should include the map, mode, objective, build and timestamp. That context is what lets another player decide whether the observation is relevant; the map name by itself cannot carry that much certainty.',
    ]),
    section('Use objective labels as a lookup, not a route', [
      'The map-specific pages include a current-build community objective index where the public data exposes labels and derived grid references. That reference is useful when a player recognizes a name in a call or wants to locate a point on the live tactical map. It is intentionally not presented as an official sector matrix. The public version page lists separate current-game and gameplay snapshot builds, and its own caveat gives official updates and in-game verification priority.',
      'When a label is unresolved, the page preserves the source identifier rather than guessing a display name. That small distinction matters for map research: a plausible name can look authoritative while making future corrections difficult. Confirm the point in the current client, then record what the UI actually says. If the label, mode or grid differs, keep the difference visible and do not silently convert a community lookup into a universal instruction.',
    ]),
    section(
      'A battlefield preparation routine',
      [
        'Before a match, read the mode summary and the map profile in under a minute. During deployment, confirm the active objective, then ask one terrain question that matches the profile. During the fight, follow the squad’s current call and use the tactical map to confirm where the objective moved or which point matters. Afterward, keep only observations that include the context needed for a recheck. This routine is more transferable than memorizing one “best map route” because it still works when the mode, build or squad plan changes.',
      ],
      [
        'Map name and mode recorded.',
        'Official terrain cue identified.',
        'Live objective confirmed in the client.',
        'Route observation labelled with build and timestamp.',
      ]
    ),
    section('What the Battlefield category does not claim', [
      'This category does not publish a universal capture sequence, guaranteed vehicle lane, best class for every point, fixed cover rule or winning route. Those claims require current-build, mode-specific evidence and can change with the live match. The useful answer here is narrower: know the rule, name the environment, locate the active objective and communicate the next decision. Open the map-specific page when you need vocabulary; use the current tactical map when you need movement.',
    ]),
  ],
  roles: [
    section(
      'Choose a battlefield job before choosing a loadout',
      [
        'The Roles & classes category is a navigation layer, not a promise that every named item is available to every player. The current Steam About section names 17 roles across Command, Infantry, Recon, Armour, Helicopter and Mortar Squad. The official game page separately advertises 19 specialised roles without publishing the two additional names. The category therefore starts with the named roster and keeps the unresolved count visible instead of filling it with inference.',
        'For a first role, choose a job you can explain to the squad. Command roles carry a larger responsibility and have tutorial gates. Infantry, Recon, Armour, Helicopter and Mortar Squad are unit families, not a complete tactical lesson. Read the role name in the current deployment or Barracks screen, check the faction and loadout shown there, and only then compare a player recommendation. A database label can help you find a profile while still being incomplete or version-bound.',
      ],
      [
        'Start with the named unit family.',
        'Check current faction, role and loadout in-client.',
        'Keep command roles behind their tutorial boundary.',
        'Record platform and build for a role observation.',
      ]
    ),
    section('How to read the weapons page', [
      'Weapons are useful search vocabulary, but a name is not a complete loadout matrix. The current reference material contains named US and NVA entries, Patch 1.3 names several weapons and equipment items directly, and a public current-build snapshot exposes weapon-like records plus unresolved record IDs. The Weapons page keeps these layers separate: official mentions, reference catalogue names and current snapshot records. It does not turn a third-party list into a universal role, faction, ammunition or unlock claim.',
      'When you want to test a weapon, record the exact display label, faction, role, mode and build. Verify whether the item appears in the current loadout screen and whether the source is describing a variant or a base item. Planned weapons such as M14, Type 56 SKS and Stoner 63 remain roadmap material until an official release or patch confirms them. This discipline protects the page from a common SEO failure: a long list that looks comprehensive but cannot help a player decide what is actually selectable now.',
    ]),
    section('How to interpret the vehicles page', [
      'Official material highlights armour, helicopter and patrol-boat battlefield elements, but it does not provide the complete model, control or performance matrix needed for a detailed vehicle database. That is why the Vehicles page is a bounded hub. It helps a reader identify the vehicle family and the crew task, then points to the helicopter controls and systems pages for the next question. Exact controls should be read in the current UI or tested in a safe context rather than copied from an old chart.',
      'A gameplay frame can show that one player used a vehicle in one build. It can illustrate a landing area, combined-arms scene or interface state, but it cannot prove a universal spawn, route, handling value or seat binding. When writing a field note, preserve the visible context and label the source as a community example if it is not official. The page’s pending details are intentional: a short verified hub is more useful than a confident model list with no current-build proof.',
    ]),
    section(
      'A responsible role and gear workflow',
      [
        'Use the roster to choose a question, the current client to verify availability, and the latest official update to check whether the answer may have moved. If the question is “what should I play in my first match?”, return to Basics and choose a non-command role you understand. If the question is “which item did I see?”, capture its display label and context before searching. If the question is “what is the best loadout?”, reframe it as a build- and role-specific comparison unless an official matrix exists. The category is designed to make those distinctions explicit.',
      ],
      [
        'Role name confirmed in current UI.',
        'Faction and mode recorded.',
        'Weapon or vehicle label preserved exactly.',
        'Reference evidence not promoted to mechanism fact.',
      ]
    ),
  ],
  systems: [
    section(
      'Systems questions need a build boundary',
      [
        'The Systems & controls category covers the parts of Hell Let Loose Vietnam that are easiest to misstate from memory: movement, teamplay, tunnels, aircraft, patrol boats and voice chat. Official product material confirms the presence of enhanced movement language, tunnel networks, helicopters and patrol boats. That confirms the system’s place in the game; it does not publish every binding, interaction timing or optimal technique. Start with the current menu or in-game prompt when the question is about an exact control.',
        'Use the category as a decision map. Movement and Teamplay explains how to think about staying connected to a squad. Tunnels, Helicopters and Patrol Boats explains the official battlefield boundary. Voice Chat is a task guide for selecting an input, testing a channel and making useful calls. Helicopter Controls remains a separate, noindex research page until the conflicting public control charts are reconciled against a current client.',
      ],
      [
        'Mechanic exists: official product or patch material.',
        'Binding works for you: current platform and UI check.',
        'Technique helped one player: labelled community example.',
        'Unresolved control: keep the claim pending.',
      ]
    ),
    section('Tunnels, aircraft and patrol boats are different questions', [
      'A Vietnam battlefield feature can be visually obvious while still leaving important questions unanswered. A tunnel network is not the same evidence as a published tunnel route. A helicopter in official media confirms the combined-arms context, not a universal flight plan. A patrol boat mention does not publish its model list, seat controls or waterway strategy. When the site separates these pages, it is helping a player ask the next verifiable question instead of using one visual or marketing phrase to infer an entire system.',
      'For a live session, first name the task: transport, approach, observation, movement through a feature or communication. Then check the mode and objective. A system behaves inside a match objective, not in isolation. Record the platform, build, role and mode if you test a control or interaction. If the result differs from a public video, keep both contexts rather than deciding that one source must be universally wrong.',
    ]),
    section('A practical voice and teamplay loop', [
      'Voice chat is most useful when it reduces ambiguity. Test the input device before the first push, choose the correct channel in the current UI, and make a short call that answers location, direction and intent. A squad does not need a long narration to act; it needs a call that another player can repeat or respond to. If the input meter is silent, troubleshoot the device and operating-system permission before changing unrelated gameplay settings.',
      'Movement and Teamplay uses the same idea at a larger scale. Stay connected to the squad, keep the active objective visible, and return to a confirmed call when the route becomes unclear. This is a recommended workflow, not a hidden game rule. It is useful because it creates a success signal that a new player can observe: the squad knows where you are, you know why it is moving, and the next call is understandable.',
    ]),
    section(
      'How to test an exact control responsibly',
      [
        'Open the current Controls or Settings screen and write down the label exactly as shown. Test one action in a low-risk context, then record the platform, build and role or seat. If two public catalogues disagree, show the conflict and tell the reader to use the current binding. Do not turn a creator’s personal profile into a default chart. This is especially important for helicopter controls, where published PC catalogues and a creator profile expose different inputs for several axes while converging on only a small number of bindings.',
        'The result of a careful test is not always a completed table. Sometimes it is a better question and a clear pending state. That is still useful to the next player because it prevents them from trusting an exact-looking key that has not been reconciled.',
      ],
      [
        'Exact label copied from the current UI.',
        'One control changed or tested at a time.',
        'Platform, role, seat, mode and build recorded.',
        'Conflicting sources kept visible.',
      ]
    ),
  ],
  access: [
    section(
      'Answer the access question in the right order',
      [
        'The Access category is for decisions that happen before or around a match: where the game is available, whether a friend can join, whether a PC meets the published table, what settings to test, how to approach a crash, and where to verify the current purchase option. These questions look similar in search results but require different sources. Use the official launch and store pages for platform and release information, the official requirements page for hardware, the crossplay announcement for server context, and current patch notes for known changes or workarounds.',
        'Do not let a static Wiki value stand in for a live storefront or platform policy. This site deliberately avoids freezing prices, discounts, subscription terms and regional checkout details. It also avoids claiming that a platform label guarantees every friend or account path without checking the current server and platform UI. The useful answer is a verification path that remains valid after a price or menu label changes.',
      ],
      [
        'Platform availability: official launch material and current store.',
        'Hardware: official PC requirements table.',
        'Friend access: current server label plus crossplay guidance.',
        'Crash: latest patch notes plus a reversible local test.',
      ]
    ),
    section('PC requirements and settings are a baseline, not a preset', [
      'Start PC evaluation with the official minimum and recommended table. Compare operating system, processor, memory, graphics hardware, DirectX and storage before changing in-game settings. A machine that launches is not automatically a machine that feels stable in a large multiplayer scene, and a community preset cannot replace the publisher’s current baseline. The PC Requirements page explains what to compare; Best Settings explains how to change one group at a time and observe the result.',
      'Use a repeatable scene and change a single variable or setting group. Keep display mode, resolution and frame limit visible in your notes. Prioritize readability and stable frame pacing before chasing a higher preset. If a patch changes performance, run the same comparison again. This approach does not produce one universal “best settings” list because hardware, display and preference differ; it produces a personal configuration that another person can understand and reproduce.',
    ]),
    section('Crossplay and crash checks need failure points', [
      'When a friend cannot join, classify the failure before changing settings. Is the server not visible, is the server label incompatible, does the join action fail, or does the player enter and then disconnect? The Crossplay page keeps platform and server labels separate from assumptions about account or progression. Record what the current UI says and compare it with the official crossplay context instead of relying on an old screenshot.',
      'When the game crashes, record whether it happens at launch, loading, server join or during a match. Check the latest official patch and news material, then test one reversible change. Patch 1.3 documents an AMD-related workaround boundary, while launch guidance records additional documented checks; those are evidence-backed tests, not guaranteed fixes. Restore a change that does not affect the same trigger and preserve the reproduction details for support or community review.',
    ]),
    section('Buying and release information without stale claims', [
      'The release page records the checked launch date and the PC, PlayStation 5 and Xbox Series X|S platform boundary from official material. The Editions & Buying page sends a buyer to the live official store for the current edition name, regional currency, price, tax, discount, refund policy and platform requirement. Refresh before checkout. A dated guide can tell you where to look and what to compare; it should not pretend to know a value that can change after publication.',
      'If the platform decision depends on playing with a friend, resolve platform access and crossplay context before purchase. If it depends on a PC, compare the official requirements first. If it depends on a current discount, use the live storefront. These are separate checks, and completing them in this order reduces the chance of buying on the wrong platform or treating an expired promotion as a permanent edition difference.',
    ]),
    section(
      'Access checklist before you act',
      [
        'Name the access problem in one sentence, save the current source date, and record the platform or hardware context. Then open the page that matches the failure point. If the answer is version-sensitive, compare the latest official update before changing anything. If the answer is a live storefront value, leave the Wiki and verify it at checkout. A good access answer ends with a decision you can observe: the correct store is open, the hardware tier is known, the server label is understood, or the same crash trigger has been isolated.',
      ],
      [
        'Platform and store match the device.',
        'Requirements compared against current hardware.',
        'Server or friend-join failure classified.',
        'One reversible troubleshooting change tested.',
      ]
    ),
  ],
  updates: [
    section(
      'Separate current changes from future plans',
      [
        'The Updates & roadmap category exists to stop three different kinds of information from blending together: a released patch, a historical patch note and a planned roadmap item. Patch 1.3 and Patch 1.2 are dated official records. The 2026 roadmap is a statement of planned work. A plan can move, change scope or be replaced; it should not be described as a live weapon, map, faction or system until a later official release or patch confirms it.',
        'When a search result says “coming” or a video demonstrates something, check the source date and label before treating it as current. The page title, evidence state and source note are designed to make that distinction visible. If the same topic appears in an older patch and a newer patch, start with the newest official note and use the historical page to understand what changed, not to restore an old setting or workaround by default.',
      ],
      [
        'Current: confirmed by an official release or patch source.',
        'Historical: useful context, not automatically current behavior.',
        'Planned: roadmap material, not a feature promise for today.',
        'Unresolved: retain the source discrepancy until reconciled.',
      ]
    ),
    section('How to read Patch 1.3 and Patch 1.2', [
      'Read a patch page as a change log, not as a complete game manual. First identify the update number and date. Then separate named weapons, fixes, movement or aircraft notes, map or UI changes and any platform-specific guidance. The current Patch 1.3 page records the official named changes and its documented crash-related boundary. Patch 1.2 is kept as a historical reference so that a reader can see what an earlier update said without confusing it with the latest state.',
      'If you are solving a current problem, translate the note into a recheck: does the current build still show the same menu label, reproduce the same issue or expose the same item? If yes, record the context. If no, do not assume the older page is wrong; note that the later build changed the state. This preserves the useful part of a patch archive—the timeline—without turning it into a pile of stale advice.',
    ]),
    section('How to use the 2026 roadmap responsibly', [
      'The roadmap page lists planned Update 1.5 work such as M14, SKS, a licensed Bell UH-1 Iroquois “Huey” and radio music, and planned Update 2.0 work such as a Khe Sanh map, more weapons, US & Allies Force, Stoner 63, Navy SEALs/Green Berets themes and battalions. Those names are useful for tracking official announcements and for deciding what to recheck next. They are not evidence that the item is already selectable or that a date is guaranteed.',
      'When a planned item appears in a later official patch, move it into a current page only after checking the exact wording and build. Preserve the roadmap date and label in the history. If the item changes name or scope, record the change instead of silently overwriting the plan. This gives returning players a clean answer to “what was promised?” and “what is available now?” without mixing the two.',
    ]),
    section(
      'An update-check routine for returning players',
      [
        'Before a session after an update, open the newest official news or patch page, compare its date with the entry you plan to use, and search the page for the exact topic: role, weapon, aircraft, movement, platform, performance or crash. Then open the relevant guide and look for a version boundary. If the official note is silent, keep the guide’s claim within its documented scope and record any current-client observation separately. A short dated note is more valuable than a broad “everything changed” conclusion.',
      ],
      [
        'Find the newest official note.',
        'Classify the page as current, historical or planned.',
        'Recheck the exact topic in the current client.',
        'Record the build before updating a player example.',
      ]
    ),
  ],
} as const;

export const entryEditorialSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  'game-overview': [
    section('Turn the overview into a decision', [
      'The overview is most useful when you use it to choose the next page. A new player needs the Beginner Guide and the squad communication loop. A player comparing match rules needs Game Modes. Someone deciding whether a friend can play needs Release Date & Platforms and Crossplay. A player looking at a battlefield image needs Launch Maps before trying to infer a route. The overview deliberately does not pretend to answer every specialist question; it establishes the verified shape and points to the page where the decision can be tested.',
      'The official product and store material describes a large team game with NVA and US forces, six launch maps, specialised role families and platform information. Those facts tell you to expect coordination, a meaningful objective and version-sensitive systems. They do not tell you that one role, map or weapon is best for every squad. Treat the page as a map of the knowledge base: start broad, identify the decision, then open the dated source-backed page that narrows it.',
    ]),
    section('Stable facts, moving facts and source dates', [
      'Some overview facts are useful as orientation even when the surrounding game changes. The match scale, factions and launch-map roster provide that orientation. Other facts are more fragile. The role count is reported differently by the official game page and the current Steam About section, and platform, price, control and performance information can change with a build or storefront policy. This page keeps the role discrepancy visible because a clean-looking single number would be less honest and less helpful.',
      'Use the checked date as a prompt to recheck, not as a guarantee that every line changed on that date. If your question is about a current option, follow the source link and compare the current UI. If it is about a historical change, use Updates. If it is about what one player did, look for a community-example label. This classification tells you what kind of confidence to attach to the sentence you are reading.',
    ]),
    section('A first-session route from this page', [
      'First, open Getting Started and learn the current tutorial vocabulary. Second, join an open squad and take a non-command role. Third, ask for the active objective and state your first move. Fourth, use the mode label and map cue to understand the problem in front of the squad. Fifth, review the latest official update if a control, role or platform detail seems different from the page. This route turns the overview into an action without requiring a new player to memorize every entry in the directory.',
      'A useful success signal is not a particular score. It is the ability to explain where your squad is, what the objective is, why the group is moving and which source would settle a disagreement. Once you can do that, the deeper role, weapon, map and settings pages become easier to use because you have a context for the information.',
    ]),
    section('Questions this overview can and cannot answer', [
      'This page can answer the high-level game shape, the named launch platforms, the six-map orientation and the published role-count discrepancy. It cannot establish a complete role matrix, exact universal controls, a best route, a static price, a permanent server population or a future roadmap date. Those are separate evidence problems. Use the related links and source labels rather than forcing the overview to carry a claim its sources do not publish.',
    ]),
  ],
  'beginner-guide': [
    section('Before the first server', [
      'A first public match goes better when the player has one small objective instead of a long list of mechanics. Open Getting Started, notice the current movement and objective vocabulary, and leave the tutorial only when you can identify what the game is asking you to follow. The launch material describes the tutorial as optional and notes the Esc skip path; for a new player, the useful choice is to complete it before adding live-server pressure. If a menu label differs from a guide or screenshot, follow the current build and record the difference.',
      'Prepare the surrounding basics without trying to master everything. Confirm the device and requirements if you are on PC, select the microphone you actually intend to use, and know where the current audio and controls screens live. These are preparation steps, not promises that a particular key or preset is universal. The first match should teach you how the current client presents the system you need, not reward you for memorizing an old chart.',
    ]),
    section(
      'A low-risk first-match loop',
      [
        'At the server browser, read the visible server and platform context, choose an open squad and select a non-command role you understand. Send a short call: where you are, what you are doing and what you need to know. Then stay close enough to understand the squad’s movement and return to the tactical map when you lose the group. If the objective changes, ask for the new priority rather than assuming that the first marker remains correct.',
        'The first match is successful when you can connect four pieces: your position, your squad, the active objective and your next action. A kill count or advanced loadout is not a useful first signal if you do not know why the squad moved. When the fight becomes confusing, shrink the problem to one question and make one call. That habit transfers to every map and mode in the directory.',
      ],
      [
        '“Where am I?” — use the tactical map and squad context.',
        '“What matters?” — confirm the active objective and mode.',
        '“What should I do?” — ask for a short, concrete squad call.',
        '“Did it work?” — check whether you stayed connected and understood the next move.',
      ]
    ),
    section('What to review after the match', [
      'Write down the moment that cost the most attention. If the problem was joining or staying with a squad, open Join a Squad. If no one heard you, open Voice Chat and classify the failure at the input, channel or output point. If the objective rule was confusing, read Game Modes. If the terrain was the problem, read Launch Maps and the matching map profile. If the machine became unstable, record the trigger before opening Settings or Crashing Fixes.',
      'A short review is more useful than a broad list of everything you did not understand. Keep one confirmed fact from the UI and one recommendation that came from another player. The first belongs in your current-build notes; the second should remain a player example until it is supported by a reliable source. This distinction makes the next match easier without turning personal advice into a rule.',
    ]),
    section('Common first-match failure checks', [
      'If every squad is full or locked, refresh the list or choose another server; do not take a command role by default. If the microphone is silent, check the selected input and permission before changing game controls. If you lose the group, check the map and ask for the next call before choosing a random route. If a tutorial or control label differs, record the platform and build and check the latest official update. These checks are intentionally reversible and observable, which makes them safer than changing several settings or roles at once.',
    ]),
  ],
  'launch-maps': [
    section('How to read a map brief', [
      'A map brief answers “what kind of terrain am I about to read?” It does not answer “where should every squad go?” Start with the official historical and environment description, then compare it with the current mode and objective. A river, jungle, village, airfield or dock is a cue for what to watch and what to ask, not a guaranteed tactical sequence. Use the map name shown by the server or deployment screen so that preparation is tied to the actual battlefield.',
      'The six official launch profiles are intentionally concise at the orientation layer. Thanh Hóa Bridge emphasizes Nam Ma River crossings, jungle and mountain terrain, villages and trainyards. Huế Outskirts includes terraced farms, waterways, bases and industrial areas. Vạn Tường highlights villages, jungle, a river network and bankside foliage. Quảng Ngãi includes flooding, cliffs, caves, bamboo forests, open lowlands and cross-river spaces. Đắk Tô Airfield and Cam Ranh Port give open-ground and industrial-water cues respectively.',
    ]),
    section('Map and mode decision loop', [
      'Before moving, name the mode. In Warfare, the immediate question is usually the active sector and majority control. In Offensive, the active sector and attack or defense role matter. In Conquest, points can be taken in any order and Morale changes the resource question. In Domination, the central-point gate and HQ state matter. The official mode guide documents these distinctions; a map profile cannot replace them.',
      'Next, translate the terrain into one squad call. Ask whether the group is crossing, entering close terrain, moving over open ground, approaching a defended base or working around a water or industrial edge. Then follow the live tactical map and squad call. If you record an observation, save the map, mode, objective, build and timestamp. This creates a context that survives a later patch better than a claim that one location is always the best route.',
    ]),
    section('Use current objective data carefully', [
      'The dedicated map pages include a public current-build objective lookup where labels and grid references are available. It is useful for recognizing an objective name during a call and checking the approximate area on the live tactical map. It is not an official sector route. The public data also exposes different build labels for current game and gameplay snapshots, so the page tells you to verify the label in-client and keeps unresolved identifiers unchanged.',
      'A lookup becomes a useful field note when it includes the context needed to challenge it. Write “Domination, Cam Ranh Port, current build, point label, observed grid” rather than “Cam Ranh best route.” If the current UI does not match, preserve the discrepancy and do not make the source look cleaner than it is. The goal is reliable vocabulary and reproducibility, not a false promise of a static map meta.',
    ]),
    section('What the map list cannot answer', [
      'The launch roster and terrain descriptions do not establish universal capture order, best class, vehicle lane, cover pattern, spawn timing or optimal route. Those claims need current, mode-specific evidence and can be affected by the live squad and objective state. If you need the win condition, open Game Modes. If you need a first-match routine, open Beginner Guide. If you need a player’s route example, look for a labelled field observation and record its build and timestamp.',
    ]),
  ],
  'game-modes': [
    section('Choose a mode question before a mode tip', [
      'The official mode guide documents Warfare, Offensive, Conquest and Domination. A player usually does not need to memorize every paragraph before a match; they need to know which question changes their next action. Warfare asks the team to work through sector control and majority timing. Offensive asks attackers to push active sectors while defenders hold them. Conquest adds a Morale resource and a point layout that can be taken in any order. Domination uses central points to unlock the enemy HQ.',
      'Confirm the current mode from the server or loading context before applying one rule. A useful call sounds like “which sector is active?” or “do we need two central points?” rather than a generic request to push. If a public surface displays a different mode count, keep the discrepancy visible and use the named rules that the detailed official guide actually documents.',
    ]),
    section('Capture rules as decisions', [
      'In Warfare, the official guide describes a neutral middle sector, Soft Cap and Hard Cap areas, different capture power inside those areas and a timer of up to 90 minutes. Use that information to understand why a squad talks about the sector and the cap, not to derive a permanent route. In Offensive, attackers move through five capture points toward the enemy HQ, with a 30-minute window for each active sector; defenders win by holding the active sector for that window and cannot recapture a lost sector according to the guide.',
      'Conquest uses a cross-shaped point layout, allows points to be taken in any order and uses Morale. Domination begins with HQs locked; control of two of three central points unlocks the enemy HQ, and losing the majority can relock it. These rules are the reason a map call must include the mode. A location can be named correctly while the action attached to it is wrong for the current win condition.',
    ]),
    section(
      'First-match mode checklist',
      [
        'At deployment, say the mode name and identify the current objective. During the first fight, watch whether your squad is attacking, defending, capturing, contesting or protecting a majority condition. When the marker changes, repeat the call rather than carrying the previous rule forward. Use the map profile only to add a terrain question—crossing, close ground, open airfield or industrial edge. After the match, record which rule was confusing and return to that section rather than trying to memorize every mode at once.',
        'This checklist also helps when a player watches a community video. A video may show a strong push, but without the mode, objective and build it cannot prove that the same action is correct in another match. Treat it as a player example and retain the official mode guide as the rule boundary.',
      ],
      [
        'Mode label confirmed.',
        'Active sector, point or HQ condition identified.',
        'Squad call matches the current rule.',
        'Map terrain used as a cue, not a route promise.',
      ]
    ),
    section('When the official count changes', [
      'The launch article and detailed mode guide name four launch modes, while the current game landing page separately states six distinct gameplay modes. This page publishes the four named rules and records the marketing-page count for recheck. If a later official source names the additional modes, add them with their own rules and checked date. Until then, a confident six-mode list would create the appearance of completeness without giving a player a verified win condition.',
    ]),
  ],
  'tunnels-helicopters': [
    section('How to interpret the systems page', [
      'The official product material highlights tunnel networks, helicopters and patrol boats as part of the Vietnam battlefield. That is a useful answer to “what kind of battlefield systems should I expect?” It is not a complete interaction manual. The source does not establish every tunnel entrance, aircraft model, seat binding, patrol-boat route or timing rule. Use this page to identify the system family, then follow the current UI and the linked control or teamplay page for an actionable test.',
      'A system question becomes easier when it is stated as a task. Are you trying to move a squad, reach an objective, observe a route, communicate with a crew or understand a feature shown in official media? The mode and objective still control the immediate decision. A helicopter scene in a trailer does not tell you whether a flight is useful in the current sector, and a tunnel mention does not tell you which entry is safe or optimal.',
    ]),
    section(
      'Tunnels, aircraft and water movement are different evidence problems',
      [
        'Tunnel networks, aircraft and patrol boats can all affect how players imagine a route, but each needs a different verification method. For a tunnel question, check what the current map and UI expose. For a helicopter question, check the current role, seat and control screen. For a patrol-boat question, check the visible vehicle and objective context. Do not combine a marketing description, a gameplay frame and a database label into a single universal mechanic without a current build check.',
        'The official media used elsewhere on the site is visual context. It can show armour moving with a helicopter, infantry near a landing area or a first-person view near water. The caption says what is visible and what is not established. This is important for search visitors because a vivid screenshot can make an unsupported conclusion feel true. Read the evidence label and source note before turning a scene into advice.',
      ]
    ),
    section('A safe systems test', [
      'Record the platform, build, mode, role and the exact action you want to test. Open the current Controls or deployment screen and copy the displayed label. Test one input or interaction in a low-risk situation, then check whether the success signal is visible: the aircraft responds as expected, the squad sees the call, or the current UI exposes the relevant option. If the action cannot be tested safely, keep the result pending instead of substituting a creator profile or an old catalogue.',
      'This process is especially important for helicopter controls. Public PC catalogues and a creator profile disagree about several axes and flight inputs, while only a small number of bindings converge. The page preserves the comparison so that a reader can see why the current Controls screen wins. A conflict is not a failure of the Wiki; hiding it would be.',
    ]),
    section('Do not turn a showcase into a rule', [
      'A showcase can prove that an element appears in a scene. It cannot by itself prove universal availability, a fixed spawn, an optimal route, a default keybind or a balance value. If you use a community video or frame, label it as a player example and record the timestamp, build and visible context. If the source does not expose those details, keep the claim narrow. For a current systems question, the best next action is usually to open the live game screen, not to search for a more confident-sounding clip.',
    ]),
  ],
  'movement-and-teamplay': [
    section('Movement as a team decision', [
      'Movement in a large tactical match is not only a question of speed or a keybind. It is a question of whether the squad knows where you are, what the objective is and why you are moving. Official material highlights swimming, climbing, fast crawling and teammate dragging as movement language for the Vietnam setting. The exact control mapping remains build-sensitive, so use the current client for the input and this page for the decision loop around it.',
      'A first useful movement habit is to keep the next call small. Before leaving cover or the current group, state your direction and intent. When the objective changes, check the tactical map and repeat the call. If you lose the group, return to the last confirmed location or ask for a new marker rather than inventing a route. This makes the movement problem observable even when the terrain is unfamiliar.',
    ]),
    section('A practical communication loop', [
      'Use three pieces of information: location, direction and intent. “At the south edge, moving toward the crossing, need a smoke or a second player” is more useful than a long narration that does not tell the squad what action is needed. The exact channel and push-to-talk binding belong to the current audio and controls UI; the call structure is a player-facing recommendation designed to reduce ambiguity.',
      'Movement also includes stopping. If a route becomes unclear, pause at the last confirmed decision and ask whether the objective, mode or squad plan has changed. The goal is not to freeze the team; it is to prevent one player’s assumption from becoming a hidden route for everyone else. This is why the Beginner Guide, Voice Chat and Game Modes pages are related to movement rather than separate from it.',
    ]),
    section('Make observations that can be reused', [
      'A useful field note records the map, mode, objective, build and timestamp, then separates what the interface showed from what the player recommended. For example, “the current UI showed a route marker” is different from “this is always the best approach.” A screenshot or video frame can support the first kind of observation when its source and time are visible; it does not automatically support the second. Keep the source role clear when sharing the note with a squad or adding it to the Wiki.',
      'When movement differs across platforms or updates, preserve both the official language and the current observation. Do not rewrite a build-specific behavior as a permanent system fact. This is particularly important for enhanced movement and dragging, where a player may understand the idea but still need the current control screen to perform it.',
    ]),
    section(
      'Troubleshooting the movement question',
      [
        'If the problem is “I cannot perform the action,” open the current controls and verify the binding. If it is “I do not know where to go,” confirm the mode and active objective. If it is “the squad does not know what I am doing,” use the voice or text channel and a short location-direction-intent call. If it is “the route looked different from a video,” record the build and mode before deciding that one source is wrong. Each failure point has a different fix, and treating them as one movement problem creates unnecessary changes.',
      ],
      [
        'Input failure: current control screen.',
        'Navigation failure: tactical map and objective.',
        'Coordination failure: concise squad call.',
        'Source conflict: build, mode and timestamp.',
      ]
    ),
  ],
  'release-and-platforms': [
    section('How to verify release information', [
      'The release page is an access decision, not only a date lookup. The checked official material gives the launch date and names PC, PlayStation 5 and Xbox Series X|S as platform families. Use the source links to confirm the current store or publisher page for the device you intend to use. If a search result, storefront card or old article disagrees, compare its date and platform scope before choosing which statement applies.',
      'A release date can remain a useful historical fact while storefront availability, account requirements or regional purchasing rules change. That is why the page records the checked date and sends dynamic questions back to the live official store. The Wiki should help you reach a decision without pretending that a static paragraph can replace the checkout or platform UI.',
    ]),
    section('Platform, server and account questions are separate', [
      '“Is the game on my platform?” is different from “can I join my friend’s server?” and both are different from “does my account or subscription allow me to play?” Start with the launch platform boundary, then open Crossplay for the server-label and friend-access question. Read the current platform store for account, subscription, regional and refund terms. Do not infer all of these from one product page or a community screenshot.',
      'If you are choosing between PC and console, compare the decision that actually matters. PC adds the requirements and settings check; console access may depend on the platform’s current store and account policy. Crossplay can be a useful part of the decision, but the visible server label and current platform UI still win when a friend-join path is tested.',
    ]),
    section(
      'A purchase-readiness checklist',
      [
        'Before checkout, verify the device, official store, edition name, regional currency, final price, tax or discount, refund terms and any subscription or account requirement shown by the live platform store. Refresh the page before paying. If you are buying to play with a friend, confirm the relevant platform and crossplay context first. If you are buying for a PC, compare the official requirements before treating the store listing as enough evidence.',
        'This checklist deliberately avoids static price tables. A price copied today can be wrong tomorrow or wrong for another region. A source-backed guide can still be useful by making the comparison complete and repeatable. The final value should always come from the live official checkout context.',
      ],
      [
        'Correct platform selected.',
        'Live official storefront opened.',
        'Edition and region verified.',
        'Crossplay or PC requirements checked when relevant.',
        'Final checkout values refreshed.',
      ]
    ),
    section('What can change after a checked date', [
      'Store price, discount, regional availability, subscription requirements, refund wording and platform UI can change without changing the historical release date. Patch and news pages can also alter the practical answer around performance or access. When returning to this page after an update or purchase delay, start with the official links again and treat the checked date as the point at which the page was last reviewed, not as a live guarantee.',
    ]),
  ],
  'crossplay-and-platforms': [
    section('What crossplay evidence can tell you', [
      'The crossplay page helps separate the publisher’s platform and server context from assumptions made in a friend chat. Official material and the store listing establish the platform and cross-platform multiplayer language used by the product surfaces. The current server browser then supplies the immediate label for the server you are trying to join. Use both layers: official context explains the policy boundary, while the live UI tells you what this server exposes right now.',
      'Crossplay is not the same as cross-progression, account transfer, voice behavior or every possible friend-join path. Do not answer a question about one with evidence about another. If the goal is simply to play together, record the platform pair, the server label and the point at which the join failed. That creates a smaller and more solvable question than “does crossplay work?”',
    ]),
    section(
      'A friend-join troubleshooting order',
      [
        'First check whether the server is visible. If it is not, review filters and platform access before assuming the account or connection is broken. If it is visible, read the server label and compare it with the platform pair. If the join action fails, record the exact message or behavior. If the player enters and then loses the connection, classify that as a different failure from discovery. Only after these steps should you move to network or account-specific troubleshooting.',
        'Ask the friend to repeat the same check from their side. A mismatch between visible labels can reveal a platform or filter boundary. A match with a failed join points to a different class of issue. Keep the current build and date in the note because server and platform behavior can change after an update.',
      ],
      [
        'Discovery: can both players see the server?',
        'Compatibility: what platform label is visible?',
        'Join: what exact action or message fails?',
        'Stability: does the player disconnect after entering?',
      ]
    ),
    section('Server labels are evidence, not a promise', [
      'A server label can tell you how the current list classifies access. It cannot by itself prove every account, subscription or friend relationship will behave identically. Read the label, follow the official crossplay source, and verify the current platform store or account requirement if the question is about access outside the game. Avoid copying a community screenshot as a permanent policy; it is useful only when its platform, build and date are visible.',
      'This same rule applies to console-only or PC-only language. Treat it as a decision point to verify in the current browser and platform context. If the label changes after a patch, keep the older observation dated and update the current answer from the official source and client.',
    ]),
    section('Questions to record before asking for help', [
      'Write the two platforms, the server name or visible label, the current build, whether the server was discoverable, and the exact step that failed. Include whether the issue affects one friend or both. This information lets support or a community helper distinguish policy, filtering, account, server and connection questions. It also prevents the page from making a broad claim from one incomplete report.',
    ]),
  ],
  'pc-requirements': [
    section('Compare your machine with the official table', [
      'Use the official PC requirements page as the first comparison point. Check the operating system, processor, memory, graphics hardware, DirectX version and storage listed there against the machine you intend to use. A community post may help you interpret a part number, but it should not replace the current publisher table. Record whether your system is below minimum, between minimum and recommended, or at or above the recommended tier before changing in-game settings.',
      'Meeting the table is a readiness signal, not a guarantee that every scene will feel identical. Large multiplayer environments, display resolution, background applications, driver state and the current build can affect the result. That is why the page links to Best Settings and Crashing Fixes rather than promising one preset. Use the requirements to set expectations, then use a repeatable in-game test to isolate what your system actually does.',
    ]),
    section('A repeatable performance check', [
      'Start from a known display mode, resolution and frame-limit state. Change one setting group, enter the same kind of scene and observe readability, frame pacing and input feel. Do not change resolution, graphics quality, overlays and drivers simultaneously if the goal is to learn what fixed the problem. Save the setting and build with the observation so you can return to it after a patch.',
      'Prioritize a stable, readable image over a higher preset. A setting that looks impressive in a still screenshot may make distant silhouettes harder to read or produce uneven frame pacing in a busy fight. The “best” choice is therefore a controlled personal baseline, not a universal number copied from another machine. If your goal is competitive visibility, say that explicitly; if your goal is image quality, use a different comparison.',
    ]),
    section('What to record when performance fails', [
      'Record the build, operating system, CPU, GPU, memory, display resolution, display mode, the scene where the issue appears and whether it is a low frame rate, hitch, input delay, visual artifact or crash. Note which single change affected the same behavior. If no change helps, restore the previous baseline and move to the latest official update or support path. A clear failure description is more valuable than a long list of unrelated tweaks.',
      'If a crash is the main problem, switch to Crashing Fixes and classify the trigger. If the game launches but looks unclear, stay with Best Settings. If the machine does not meet the official table, treat that as a different decision from a bug in a supported configuration. Keeping those cases separate makes the next action safer.',
    ]),
    section('Keep requirements current', [
      'Requirements are a publisher-maintained boundary. Recheck the official page after a major update, a hardware change or a move between platforms. Do not copy a static third-party table into a purchase decision without checking the date and source. This page is successful when it lets you compare the right fields and tells you where to verify them again, not when it invents a more precise performance promise than the official source publishes.',
    ]),
  ],
  'patch-1-3': [
    section('How to read Patch 1.3', [
      'Patch 1.3 should be read as a dated official change record. Start with the update title and date, then separate named weapon or equipment changes, movement or aircraft notes, stability guidance, UI or map changes and anything tied to a platform or hardware condition. The page preserves the official wording boundary and does not convert one line into a universal claim about every role, faction or setting.',
      'If you arrived through a crash search, focus on the exact documented workaround and its condition. The note about disabling gore for AMD users is a test boundary, not a guarantee that the cause is known or that every system will improve. If you arrived through a weapon search, check whether the item is named as a current change, a variant or a separate planned item. Keep the patch number attached to the observation.',
    ]),
    section(
      'Turn patch notes into a recheck',
      [
        'After reading the note, open the current client and verify the exact part that matters to you. Does the menu still use the same label? Does the setting exist on your platform? Does the item appear in the role screen? Does the same crash trigger reproduce? One recheck is more useful than assuming that a patch headline describes every downstream behavior. Record the build and the result, including when the result is “not reproduced.”',
        'For a squad, translate the change into a small call. If the patch affects a weapon or role, tell players to check the current loadout rather than promising access. If it affects stability, tell them which reversible test was documented and what to record if it fails. If it affects a system, link the relevant guide and keep the patch note as the source boundary.',
      ],
      [
        'Read the exact named change.',
        'Check the current UI or reproduction point.',
        'Record platform and build.',
        'Do not generalize a conditional workaround.',
      ]
    ),
    section('What not to infer from one patch', [
      'A patch note does not automatically publish a complete role matrix, every control binding, a new best setting, a universal performance result or a permanent route. It also does not make a roadmap item current unless the release text confirms it. When the note is silent on a question, keep the question open and use the source that actually addresses it. This prevents a well-indexed patch page from becoming a source of accidental overclaiming.',
      'Use Patch 1.2 for historical comparison, not as a second current manual. If two notes conflict, the newer official note and current client take priority for today’s decision, while the older page remains useful for explaining the timeline.',
    ]),
    section('Patch-reading checklist', [
      'Before sharing a Patch 1.3 claim, write down the patch number, the exact item or issue, the platform and the build you tested. Link the official note. If the claim came from a community video or database, label it as an example and do not let it outrank the official release text. A dated change log becomes genuinely helpful when it tells the reader what to verify next.',
    ]),
  ],
  'patch-1-2': [
    section('Why a historical patch page matters', [
      'Patch 1.2 is a historical page, which makes it useful for understanding how the game and its documentation changed. It should not be the first source for a current control, crash workaround, weapon availability or platform answer when a newer official note exists. Start by identifying the update date and the exact topic you are researching. Then compare it with Patch 1.3 and the latest official news before applying any advice.',
      'Historical notes also explain why two players can remember different behaviors without either person inventing their experience. A menu label, performance issue or equipment state may have existed in one build and changed later. Keep the old observation dated, and use the current client to decide what a new player should do today.',
    ]),
    section('Compare old notes with current state', [
      'Make a simple comparison: what Patch 1.2 named, what Patch 1.3 changed, and what the current UI or official news now shows. Do not assume that a later note repeats every earlier fix; search the newer source for the same term and recheck in-client. If a community guide cites Patch 1.2, follow its source and inspect whether the guide itself carries a build boundary. A dated citation is a clue to investigate, not a current guarantee.',
      'For a player-facing answer, explain the practical difference. “This was documented in Patch 1.2” tells the reader why an older video says something different. “The current source confirms it still applies” is a separate claim that needs a current check. Keeping those sentences separate makes an archive useful rather than confusing.',
    ]),
    section('A safe archive workflow', [
      'Use the historical page to build a timeline, then record the current source beside it. Preserve the old title, date and wording that matters. Add the newer patch or official news link rather than rewriting history. If you update a community field note, retain its original build and timestamp so later readers can see whether the observation was historical or current. This is especially valuable for controls, performance and role or weapon catalogues.',
      'If no newer source addresses the exact issue, say that the current status is not established. A pending answer is safer than reviving an old workaround because it appears in a search result. Return to the official news feed when the next patch arrives.',
    ]),
    section(
      'Questions before using an old fix',
      [
        'Ask whether the same build, platform and trigger still exist. Check whether the official source has been superseded, whether the setting still appears, and whether a reversible test changes the same behavior. If not, restore the baseline and keep the old fix labelled historical. The page is doing its job when it prevents a reader from confusing “once documented” with “currently recommended.”',
      ],
      [
        'What build did the old note describe?',
        'Is there a newer official note?',
        'Does the current client expose the same setting or item?',
        'Can the test be reversed and measured?',
      ]
    ),
  ],
  'roadmap-2026': [
    section('How to read the roadmap', [
      'The 2026 roadmap is a planning document. Read its update labels, named themes and scope as signals of intended work, not as a current feature list. The page records planned Update 1.5 items such as M14 and SKS, a licensed Bell UH-1 Iroquois “Huey” and radio music, and planned Update 2.0 items such as a Khe Sanh map, more weapons, US & Allies Force, Stoner 63, Navy SEALs/Green Berets themes and battalions. The names help you watch for official confirmation later.',
      'A roadmap entry becomes current only when a later official release or patch says it is available. A date or season in a plan is not a guaranteed release day. If scope changes, keep the original plan as historical context and add the new official statement separately. This gives returning players a useful timeline without promising something the publisher has not shipped.',
    ]),
    section('Planned versus available', [
      'When a player asks whether a planned weapon, map or faction is in the game, use a three-part answer: what the roadmap says, what the latest official patch confirms, and what the current client shows. Do not use a community preview alone to collapse those categories. A video can show a development build, an edited title or a player interpretation; its source date and build may not be enough to prove live availability.',
      'Keep planned items out of current loadout, map and role claims until the official confirmation arrives. This is not a restriction on discussing the roadmap. It is a way to stop a search visitor from planning a purchase or squad role around content that is still subject to change.',
    ]),
    section(
      'A recheck workflow for future updates',
      [
        'When an official news post appears, compare its wording with the roadmap item, record the announcement date and build, and check the exact feature in the current client. If the post says “planned,” keep the item planned. If it says “available,” move the current fact to a patch or system page and link back to the roadmap for history. If the wording is partial, preserve the partial boundary rather than assuming the full roadmap scope shipped together.',
        'Readers can help by reporting the source and context of an observation. A useful report includes the official post, the current build, platform, map or role and what the UI actually showed. That is more valuable than a screenshot with no date or a statement that a roadmap item is “in.”',
      ],
      [
        'Official announcement located.',
        'Roadmap label compared with release wording.',
        'Current client checked on the relevant platform.',
        'Current and planned text kept separate.',
      ]
    ),
    section('Questions the roadmap cannot answer', [
      'The roadmap cannot guarantee a release day, complete weapon matrix, role access, balance value, map route, server availability or final feature scope. Those answers belong to later official patch notes and the current client. Use this page to know what to watch, not to fill an evidence gap with optimism.',
    ]),
  ],
  'join-a-squad': [
    section('Finding the right first squad', [
      'At the server browser, read the current server name, map or mode label and platform context before joining. A populated server can make communication easier, but the visible list and your own connection are the facts that matter. Choose an open squad with a role you can explain. For a first match, a non-command role reduces the amount of team-wide context you must manage while you learn the objective and squad loop.',
      'If a squad is full or locked, refresh the list or choose another server. Do not solve a slot problem by taking Squad Leader or Commander by default. The launch material says the specific tutorials are required before those roles. A first match is the place to learn how the squad communicates and moves; leadership can come after the tutorial boundary and a clearer understanding of the live objective.',
    ]),
    section('What to say in the first minute', [
      'Use one short call that tells the squad where you are, what you are doing and what you need to know. Acknowledge the objective, ask whether the group is moving or holding, and state whether you are following the next call. This creates a clear success signal: another player can tell where you are headed without asking for a full explanation. The exact channel and keybind depend on the current platform and UI, so verify them in Voice Chat rather than memorizing a universal key.',
      'After the first move, report changes rather than narrating every action. If you lose the group, check the tactical map and ask for the next confirmed location. If the mode or objective changes, repeat the question. Good squad joining is not just attaching your player to a unit; it is staying legible to that unit.',
    ]),
    section('If every squad is full', [
      'Classify the problem before assuming the server is broken. A list can be filtered, a squad can be locked, or the server can expose a platform restriction. Refresh filters, read the visible label and try another populated server. If joining fails after you select a squad, record the exact behavior and platform. That information belongs with Access or Crossplay when the issue is compatibility, not with a role guide.',
      'When creating or joining a different squad becomes possible, still choose a role you understand and tell the group what you are doing. The goal is a connected first engagement, not a perfect server choice. A player who can describe the failure point can get useful help; a player who only says “no squads” cannot yet distinguish list, filter, lock or connection problems.',
    ]),
    section(
      'First-match completion checklist',
      [
        'You have completed the tutorial boundary, joined an open squad, selected a non-command role, made a short call, identified the active objective and stayed connected through the first engagement. If one item failed, write down where. Use Voice Chat for input or channel issues, Game Modes for the win-condition question, Launch Maps for terrain vocabulary and Crashing Fixes or Access for technical failures. The action chain is complete when the next page is obvious from the failure point.',
      ],
      [
        'Server context read before joining.',
        'Open squad and understandable role selected.',
        'First call acknowledged or tested.',
        'Objective and squad connection checked after the first fight.',
      ]
    ),
  ],
  'voice-chat': [
    section('Set up voice before the push', [
      'Voice chat is a three-part setup: input device, channel and output or mute state. Open the current audio settings and choose the microphone you actually use. Speak and check whether the input meter responds. Then join a squad and send a short test message before the first engagement. If the meter is silent, start with operating-system permission and device selection; changing an unknown push-to-talk key is not the first diagnostic step.',
      'The exact channel names and bindings can differ by platform or build. This guide therefore teaches a verification routine rather than publishing a universal key. Read the current UI, record the label and repeat the test after a headset change or major patch. A current screen is stronger evidence for your session than a remembered chart.',
    ]),
    section(
      'A call format that helps',
      [
        'Use location, direction and intent. Location tells the squad where to look, direction tells them where the movement or threat is going, and intent tells them what you want other players to do. Keep the call short enough that a squad member can repeat it. If the situation changes, update the one part that changed instead of starting a long explanation from the beginning.',
        'A useful call can also include uncertainty. Say that you are checking a crossing or that you need confirmation when the map or objective is unclear. That is better than presenting a guess as a confirmed route. The Beginner Guide and Movement & Teamplay page use the same principle: communication makes the next action observable, while the current map and mode decide the context.',
      ],
      [
        'Position: where are you?',
        'Direction: what is moving or where are you looking?',
        'Intent: what should the squad do next?',
        'Confidence: what still needs confirmation?',
      ]
    ),
    section('Troubleshoot by failure point', [
      'If the input meter does not react, check the selected device and permission. If the meter reacts but the squad does not hear you, verify the channel, mute state and output context in the current UI. If one player hears you but another does not, record the platform pair and server context before assuming a global voice failure. If voice stops after an update or headset change, repeat the setup from the beginning and keep the build in the note.',
      'Do not change graphics settings, role choice and voice controls at the same time. One change at a time tells you which layer failed. If the current UI does not expose the expected control, capture the exact label and use the latest official news or support path rather than importing a third-party default.',
    ]),
    section('Voice etiquette and evidence', [
      'A readable channel is part of the solution. Use short calls, avoid repeating information that the squad already acknowledged, and leave room for an urgent location or objective update. When sharing a voice setup tip, label a creator’s setting as a personal example unless it is confirmed by the current game. A video can show that the microphone or channel worked for that player; it does not prove that the same key or device path is universal.',
    ]),
  ],
  'best-settings': [
    section('Start with a baseline', [
      'The best settings question is really two questions: can the machine run the current build reliably, and does the image feel readable and comfortable for this player? Start with the official PC requirements table, then record the current display mode, resolution, frame limit, graphics preset, input and audio state. A baseline makes the next change measurable. Without one, several simultaneous tweaks can hide the real cause of a performance or visibility difference.',
      'Do not treat a community preset as a universal answer. Hardware, display resolution, frame-rate target, input preference and the current patch all matter. The useful output of this page is a repeatable process that lets a player keep the setting that improves the same scene and restore a setting that does not.',
    ]),
    section(
      'Change settings in a controlled order',
      [
        'Begin with display mode, resolution and frame limit, then change one graphics group and test in the same kind of scene. Observe stable frame pacing, input feel and the readability of important silhouettes at normal combat distance. If the game becomes less readable, restore the last known-good value before trying another variable. Keep overlays, drivers and background applications out of the first comparison so that the result remains interpretable.',
        'A higher preset is not automatically a better experience. A stable readable image can be more useful than a visually richer one that hitches during a crowded fight. If you change a setting for comfort rather than performance, record that intention. It keeps a personal preference from being presented as a benchmark.',
      ],
      [
        'Display and resolution baseline.',
        'Frame-limit and pacing check.',
        'One graphics group at a time.',
        'Readability and input feel reviewed together.',
      ]
    ),
    section('Comfort and visibility checks', [
      'Check the settings that affect whether you can comfortably read the screen and hear the squad. A change that improves a screenshot but makes distant movement harder to distinguish is not an improvement for every player. Audio device and voice channel checks belong with Voice Chat, while crash or launch failures belong with Crashing Fixes. Keeping those questions separate stops a “best settings” search from becoming an unfocused list of tweaks.',
      'After a major patch, repeat the same baseline test before importing a new community recommendation. If a creator’s settings are useful, record the hardware, platform, date and visible goal. The source can show one player’s trade-off; it cannot establish a universal default without broader evidence.',
    ]),
    section('Personal preset versus universal claim', [
      'Call a configuration a personal preset when it is based on one machine and one preference. Call an official requirement an official requirement when it comes from the current publisher table. Call a workaround a documented test when the official patch describes it conditionally. These labels help a reader choose safely. If a setting has no visible effect, restore the baseline and record the build rather than stacking another change on top.',
    ]),
  ],
  'crashing-fixes': [
    section('Classify the crash', [
      'Start by writing down where the crash happens: before the game window opens, during loading, while joining a server, or during a match. Add the current build, platform, hardware and a repeatable trigger. “The game crashes” is a symptom; “it crashes when joining a server after changing the display mode” is a testable report. The category is more useful when the failure point is known because each point has a different set of safe checks.',
      'Check the latest official patch and news sources for a matching stability, map, audio, UI or server note. If the official material does not mention the issue, keep the cause pending. Do not assign blame to one setting simply because it changed near the crash. Restore a known-good baseline before trying another test.',
    ]),
    section(
      'A reversible troubleshooting order',
      [
        'Use one change at a time. Verify platform files through the launcher, close overlays, return to a known-good display or graphics setting, and repeat the same trigger. If you use an AMD GPU, the official Patch 1.3 note records disabling gore as a possible crash-frequency workaround, while launch guidance documents additional checks such as launch options, a High graphics setting and disabling the AMD in-game overlay. Treat each as a documented test with system-dependent results, not as a universal fix.',
        'If a change does not affect the same reproduction step, restore it. Several simultaneous changes can make the game appear fixed while leaving you unable to identify why, or can hide a new issue. The goal is not to collect tweaks; it is to isolate a variable another person can understand.',
      ],
      [
        'Baseline: reproduce and record.',
        'Official check: compare the latest notes.',
        'One reversible change: test the same trigger.',
        'Result: keep, restore or escalate with evidence.',
      ]
    ),
    section('When a workaround is evidence', [
      'A workaround is evidence when the source, condition and test result are visible. “Patch 1.3 documents this AMD check, and it changed the same trigger on this build” is a bounded statement. “This setting fixes crashes” is not. Include the GPU or platform context, the build, what changed and whether the result repeated. If it did not help, that negative result is useful too, as long as the original setting can be restored.',
      'Do not use a community video as proof of a universal fix. It can show one player’s successful session and may help you reproduce a setting, but it cannot establish every driver, map or hardware combination. Keep the source label and date when sharing it.',
    ]),
    section('Build a useful support report', [
      'A good report contains the build, platform, CPU, GPU, memory, operating system, launch or match context, exact reproduction steps, recent setting changes, official notes checked and the result of each reversible test. Attach the exact error or visible behavior if available. Avoid sending private account data. This report gives official support or a community helper a path to reproduce the issue and tells them which checks have already been completed.',
    ]),
  ],
  'editions-and-buying': [
    section('Buying without stale pricing', [
      'The safest purchase answer is a verification path, not a copied price. Use the official Steam listing for the live PC storefront and the publisher’s launch material for the platform boundary. At checkout, confirm edition name, regional currency, price, taxes, discounts, refund terms and any platform account or subscription requirement. Refresh before paying. A static Wiki value can age out even when the page itself was accurate on the day it was written.',
      'This page deliberately avoids regional price tables and edition rankings. It still helps because it tells you which facts must be checked together. If a friend or group is part of the decision, open Crossplay and verify the current server context. If a PC is part of the decision, compare the official requirements before deciding that the store listing alone is enough.',
    ]),
    section('Platform and account checklist', [
      'Confirm the device first: PC, PlayStation 5 or Xbox Series X|S according to the checked launch material. Then open the matching official store. Read the current store’s account, subscription, refund and regional terms rather than inferring them from a launch article. If you intend to play with someone on another platform, check the current crossplay and server label before purchase. These are separate checks because a game can be available on a platform while a particular friend-join expectation still needs verification.',
      'If a storefront presents more than one edition or a promotion, record what the live page says at that moment and do not treat the difference as permanent. The Wiki can point back to the source later, but only the store can give the final checkout value for your region and account.',
    ]),
    section(
      'Before checkout',
      [
        'Pause before the final payment action and verify the product title, edition contents, price, currency, tax, discount expiry, refund policy and device. If you are on PC, compare the official requirements one last time. If you are buying for a shared squad, verify the relevant platform combination and current access label. If anything is unclear, keep the checkout open and follow the official store or support link rather than relying on an old screenshot.',
        'This routine reduces the most common purchase errors: wrong platform, expired discount, misunderstood edition scope and a machine that does not match the current requirement table. It also keeps the site honest about what cannot be cached safely.',
      ],
      [
        'Device and platform match.',
        'Live official listing and region match.',
        'Edition and current promotion understood.',
        'PC requirements or crossplay context checked when relevant.',
        'Final checkout values refreshed.',
      ]
    ),
    section('What this page will not freeze', [
      'No static price, discount, subscription comparison, regional availability table or permanent edition ranking is stored here. Those details are useful only when checked at the moment of purchase. The page’s durable value is the checklist and source route. After an update, storefront redesign or delayed purchase, repeat the live verification instead of assuming the checked date still represents your checkout.',
    ]),
  ],
} as const;

export const entryDepthSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  'game-overview': [
    section('A simple way to explain the game to a friend', [
      'Describe the experience in terms of a shared objective rather than a feature list. Tell a friend that the official material presents a large team battle between NVA and US forces, then explain that the first useful skill is staying connected to a squad while reading the current objective. Mention the six launch maps and the published role families as orientation. Avoid promising that the game will feel the same on every platform or that one role will fit every player.',
      'If your friend asks whether the game is worth installing, move from the high-level shape to their actual constraint. A PC player needs the requirements page. A console player needs the current platform store. Someone joining an existing group needs the crossplay page and the visible server label. Someone who dislikes long, unclear matches needs to read the mode rules. This makes the overview a decision aid instead of a generic sales paragraph.',
      'The answer can stay honest and still be useful: the official pages establish what the product is designed to contain, while the current client establishes what your session exposes. That distinction is the reason this Wiki dates its facts and keeps unresolved counts visible.',
    ]),
  ],
  'beginner-guide': [
    section('A first-match review that actually teaches you something', [
      'After the first public match, review the sequence rather than only the result. Could you identify your squad? Could you state the active objective? Did you know where to look when the objective changed? Did the voice channel or text channel let you send a short call? These questions reveal whether the problem was orientation, communication, navigation or a technical failure. Each answer points to a different page and a different next test.',
      'If you were eliminated repeatedly, do not immediately jump to a specialist loadout or a confident route. First ask whether you were moving with a confirmed squad plan and whether the mode required attack, defense, majority control or a different objective. The Beginner Guide is successful when it gives you a repeatable loop for the next match, not when it promises that the second match will be easy.',
      'Keep one note about what the current UI showed and one note about what another player recommended. The first is a client observation; the second is advice that may be useful but remains contextual. This habit makes your own learning faster and prevents you from passing a single match’s route or keybind on as a universal rule.',
    ]),
  ],
  'launch-maps': [
    section('Build a one-minute map preparation card', [
      'Before loading into a battlefield, write the map name, mode and one terrain cue from the official profile. For Thanh Hóa Bridge, the cue can be the river crossing or trainyard. For Huế Outskirts, it can be the waterways or industrial spaces. For Vạn Tường, it can be the river network and dense vegetation. For Quảng Ngãi, it can be flooding, caves or cross-river movement. For Đắk Tô Airfield, it can be open ground around the airstrip. For Cam Ranh Port, it can be the docks, dunes or creek beds.',
      'That card is not a route plan. It is a prompt for the first squad question. Once the live objective is visible, ask whether the terrain cue is actually relevant to the current fight. If it is not, follow the objective and discard the preparation assumption. If it is, describe what the squad is about to cross or enter and wait for the current call.',
      'After the match, keep the card only if it helped you notice something concrete. Add the build, objective and timestamp if you add a field observation. This turns the map page into a living research tool without claiming that a single player’s experience defines the battlefield for everyone.',
    ]),
  ],
  'game-modes': [
    section('Translate a mode rule into a squad call', [
      'A mode rule matters when it changes the sentence you say to the squad. In Warfare, ask which sector and cap state matter. In Offensive, ask whether the squad is attacking the active sector or defending it. In Conquest, ask how the current point choice relates to Morale and majority control. In Domination, ask which central points are controlled and whether the HQ is unlocked. The official guide supplies the rule; the squad call makes it usable.',
      'Do not treat a timer as a reason to rush blindly. A timer tells you that the mode has a time boundary, not that every route or engagement has the same value. Use the current objective, map and squad information together. If you cannot tell which rule is active, stop the chain at “confirm the mode” and check the server or loading label before advising another player.',
      'When a video or forum post gives a mode tip, keep the mode name, objective and build attached to it. A tactic demonstrated in one mode may be a poor answer in another. This is why the page publishes the four named official modes and leaves the separate six-mode marketing count as a recheck item rather than inventing missing labels.',
    ]),
  ],
  'tunnels-helicopters': [
    section('Debug a systems question by layer', [
      'If a player says a system is not working, first ask whether they mean the feature, the control, the role access or the tactical result. Official material can confirm that tunnels, helicopters and patrol boats belong to the battlefield. The current UI must confirm whether a role or seat can use the interaction. The controls screen must confirm the input. The live objective and squad call decide whether using it is useful now. These are four different evidence layers.',
      'A screenshot may answer only the first layer. A keybind chart may answer a version-bound control example. A community video may show one player’s role and route. None should be stretched across the other layers without a current check. If the sources conflict, keep the conflict visible and tell the reader which screen to trust for the current session.',
      'This layered method is also a good way to write a bug report. Name the feature, role or seat, platform, build, mode, exact input and result. Say whether the option was missing, the input did nothing, the vehicle behaved differently or the squad did not receive the expected benefit. A precise boundary is more useful than a broad claim that the whole system is broken.',
    ]),
  ],
  'movement-and-teamplay': [
    section('Make movement readable to the squad', [
      'The most reliable movement habit is to make your next decision visible. Before moving, state where you are and what you intend to affect. While moving, keep the active objective in mind and check whether the squad plan changed. If you stop, say why. If you lose the group, ask for a confirmed location. These small calls let other players coordinate even when the terrain, map or mode is unfamiliar.',
      'Official material provides the vocabulary for swimming, climbing, fast crawling and dragging teammates, but it does not make every interaction automatic or publish a universal key chart. Use the current Controls screen for execution. If you are comparing a community video, record the platform, role and build. The video may be an excellent demonstration of a possible workflow while still being the wrong source for a default binding.',
      'Review movement after the first match by asking where the chain broke. If you knew the destination but not the input, use controls. If you knew the input but not the destination, use the map and mode pages. If you knew both but the squad did not, use Voice Chat. This separation keeps the remedy small and measurable.',
    ]),
  ],
  'release-and-platforms': [
    section('Answer “can I play?” without overpromising', [
      'A useful answer to “can I play Hell Let Loose Vietnam?” has at least three parts: is the game listed for the device, does the current store allow the intended purchase or access, and can the player join the people they want to play with? The official launch material supplies the platform boundary. The live platform store supplies current purchase and account terms. The Crossplay page and current server label address the friend-access question.',
      'Do not collapse these into a single yes or no from a search snippet. A platform can be named in a launch article while the live store changes its presentation. A friend can be on a supported platform while a specific server label still limits access. A PC can be supported while a particular hardware configuration needs a settings or performance check. Point to the source that answers the actual constraint.',
      'If you return to the page after a delay, repeat the live checks. The release date remains useful as history, but price, discount, regional availability, subscription terms, refund language and account flows are dynamic. A durable page tells you what to verify and in what order.',
    ]),
  ],
  'crossplay-and-platforms': [
    section('Separate policy, discovery and joining', [
      'Crossplay troubleshooting becomes manageable when you separate policy from discovery and joining. The official source and store can tell you how cross-platform multiplayer is described. The server browser tells you whether the current server is visible and which platform label it exposes. The join action tells you whether the failure happens after discovery. A disconnect after entry is a fourth problem and should not be diagnosed from a screenshot of the server list.',
      'Use the same order with a friend: write down both platforms, compare the visible label, check filters, test discovery, then test joining. If one player can see the server and the other cannot, preserve that asymmetry. If both can see it but one cannot enter, preserve the exact message or behavior. These details give support or a community helper a direction without assuming that the network, account or policy is at fault.',
      'The page does not claim cross-progression, shared entitlements, cross-save or identical voice behavior because those are separate mechanisms. A careful answer may be narrower than a forum headline, but it lets the player take the right next step and avoids turning one server example into platform policy.',
    ]),
  ],
  'pc-requirements': [
    section('Use the requirements table as a decision boundary', [
      'The official requirements table answers whether your machine falls within the publisher’s stated minimum or recommended boundary. It does not promise a fixed frame rate, identical image quality or the same result in every multiplayer scene. Use the table to decide whether the machine is a sensible starting point, then use Best Settings for controlled changes and Crashing Fixes for an actual failure.',
      'When comparing a machine, check every field rather than matching only the graphics card. Operating system, processor, memory, DirectX, storage and the rest of the official table all matter to the installation decision. Record your result as a tier and keep the official page date. If a requirement changes, update the baseline before comparing older community benchmarks.',
      'A good performance note names the scene, resolution, display mode, frame limit and one changed setting. It also says whether the problem is pacing, input feel, readability, artifacting or a crash. This makes it possible to decide whether the next page should be settings, technical support or a source recheck.',
    ]),
  ],
  'patch-1-3': [
    section('Use Patch 1.3 as a current-source checkpoint', [
      'Patch 1.3 is a checkpoint between a search result and the current client. Locate the exact named change, then open the game and verify the part that matters to your question. If you are checking tunnels, compare the documented cooldown or travel condition with the current behavior. If you are checking tanks, look at the current control or movement result. If you are checking a weapon or stability note, verify the role, platform and trigger instead of generalizing the headline.',
      'The official notes cover multiple layers of the game, including gameplay, vehicles, weapons, UI, audio, tutorials, VOIP, maps and stability. A broad update scope does not mean every related mechanic changed. Keep the claim attached to the line that supports it. If the note says improved, do not rewrite it as guaranteed fixed; if it names a conditional AMD check, do not present it as a universal solution.',
      'When the current client differs, record the build and point to the newer official note if one exists. If no newer source settles the difference, leave the status pending. A dated patch archive becomes more useful when it preserves uncertainty instead of hiding it.',
    ]),
  ],
  'patch-1-2': [
    section('Use the archive without reviving stale advice', [
      'Patch 1.2 helps explain why older screenshots, videos and player memories may differ from the current game. Start with the exact issue the historical note covers and keep its date attached. Then move forward to Patch 1.3 and the latest official news. The archive is a timeline; it is not a substitute for the current Controls, Settings, role or storefront screen.',
      'For a technical issue, test an old workaround only when it is reversible and the same trigger still exists. For a weapon or role question, verify the current loadout rather than assuming that an item mentioned in an older note remains available in the same context. For a keybind, copy the current UI label. These checks prevent a historical page from becoming a source of accidental regression.',
      'If you are writing a community report, include the old patch number and the current build separately. That lets readers see whether they are reproducing a historical behavior or reporting a present one. A negative result is worth preserving when the test and context are clear.',
    ]),
  ],
  'roadmap-2026': [
    section('Turn roadmap watching into a useful habit', [
      'A roadmap is most useful as a watch list. Keep each planned item with its announced update, wording and date. When a new official post appears, compare the scope rather than assuming that every named item shipped together. If the post is still a plan, keep it planned. If it announces availability, move the current fact to the relevant patch or system page and link back to the roadmap for history.',
      'For a weapon, map or faction question, ask three separate questions: is it named in the roadmap, is it confirmed in a release note, and does the current client expose it? A community preview can help you recognize a name or follow development, but it cannot collapse those three states by itself. Keep the source role visible, especially when a video uses a future-facing title.',
      'This workflow also protects buying and squad decisions. A player should not choose a role, plan a map rotation or buy hardware around a feature that is still subject to change. The roadmap page gives you a reason to recheck later without pretending to know the final release date or feature scope.',
    ]),
  ],
  'join-a-squad': [
    section('Make the squad choice easy to undo', [
      'A first squad choice does not need to be perfect. Choose an open squad, a role you understand and a group whose current objective you can identify. If the squad is silent, full, locked or moving in a way you cannot follow, classify the problem and choose another server or squad when possible. The goal is to create a readable first engagement, not to defend a bad selection.',
      'Use the first minute to make yourself easy to coordinate with. Say where you are, acknowledge the objective and ask whether the squad is moving or holding. Then follow one confirmed call. If the map or mode makes the destination unclear, ask the question instead of turning a guess into a route. The current voice or text control belongs to the UI; the communication pattern is the durable part of the guide.',
      'After the first engagement, check whether you stayed connected and knew why the group moved. If not, send the failure to the right page: Voice Chat for the channel, Game Modes for the rule, Launch Maps for terrain, or the technical pages for an access problem. A squad guide is complete when it tells you what to do after a miss, not only how to join.',
    ]),
  ],
  'voice-chat': [
    section('Use a voice test that isolates the layer', [
      'A reliable voice test starts before the first firefight. Select the intended input device, speak into it and check the current meter. Then join a squad and send a short message on the intended channel. If the meter does not respond, the issue is input or permission. If it responds but the squad does not hear you, check channel, mute and output context. If only one friend has trouble, preserve the platform and server context before calling it a global bug.',
      'Keep the content of the test useful but brief: state your location and ask for the current objective. This confirms that the channel carries a real call rather than only a meter animation. Once the squad acknowledges it, use location, direction and intent for later calls. Leave room for urgent updates and avoid repeating a detail the squad already confirmed.',
      'Repeat the test after a headset change, platform switch or major patch. A creator’s video can show one working setup and help you find a menu, but it cannot establish your default key or device path. Record the exact current label when the result differs so the next troubleshooting step is grounded in the client.',
    ]),
  ],
  'best-settings': [
    section('Keep a known-good settings baseline', [
      'A baseline is the setting state you can return to after an experiment. Write down display mode, resolution, frame limit, graphics state, input and audio context before changing anything. Test in the same kind of scene and change one group at a time. This gives you an answer to “what changed?” instead of a pile of tweaks that cannot be evaluated.',
      'Use three criteria together: stability, readability and comfort. A visually rich setting may create uneven pacing, and a high frame target may force a resolution trade-off that makes distant movement harder to read. A comfortable personal preset is valid, but it should be labelled as a personal choice and tied to the hardware and display that produced it.',
      'If the game crashes, stop treating the issue as a normal settings preference and use Crashing Fixes. If the machine falls outside the official requirements, record that boundary first. If a patch changes the result, keep the old baseline dated and test the new build from a clean state.',
    ]),
  ],
  'crashing-fixes': [
    section('Know when to stop changing things', [
      'Troubleshooting becomes unsafe when several changes are made at once. Begin with a reproduction, record the build and classify the failure point. Check official notes, then apply one reversible test. If the same trigger does not change, restore the setting and move to the next documented check. A workaround that cannot be measured or undone is not a useful first step.',
      'The official material records specific stability guidance, including an AMD-related Patch 1.3 workaround boundary and launch guidance around documented settings or overlays. Use those as conditional tests with the relevant hardware context. Do not imply that a workaround proves the underlying cause, and do not tell every player to disable a setting when the source limits the condition.',
      'Escalate when the issue survives a clean, documented sequence. Include the platform, build, hardware, exact trigger, recent changes, official notes checked and result of each test. Avoid private account information. A complete report is often the most helpful outcome when no local change solves the problem.',
    ]),
  ],
  'editions-and-buying': [
    section('Treat checkout as a live verification step', [
      'The durable part of a buying guide is the order of checks. Confirm the device, open the official store, read the current edition and region, verify price and promotion, review refund and account terms, and refresh before the final payment action. The store—not an old screenshot or static Wiki value—owns the final checkout truth.',
      'If the purchase is for a group, check the platform pair and crossplay context before paying. If it is for a PC, compare the current requirements before interpreting the store listing as readiness. If the question is a regional discount, stay on the live storefront because currency, tax, promotion timing and availability can change independently of the release page.',
      'This page intentionally does not rank editions or promise a best value. It helps a reader avoid the costly errors that a search snippet cannot see: wrong device, wrong region, expired discount, misunderstood edition scope or a friend-access assumption. Repeating the checklist later is part of the answer, not unnecessary friction.',
    ]),
  ],
} as const;

export const categoryDepthSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  basics: [
    section('What not to optimize before your first match', [
      'Do not spend the first session trying to learn every role, weapon, map route and advanced setting. The Basics category is more useful when it helps you choose one small, observable objective: complete the tutorial, join a squad, make a call and understand the active objective. Once that loop works, the deeper pages become easier to evaluate because you have a real match context.',
      'A new player also does not need to solve every uncertainty at once. If you cannot tell whether a problem is a control issue or a mode issue, record the exact screen and move to the relevant page. If you cannot choose a role, use the named roster only as navigation and select a non-command role you understand. If a player recommendation conflicts with the current UI, trust the current UI for the session and keep the recommendation labelled as an example.',
      'The category is complete when it gives you a next action and a recovery path. It should leave you able to say what you will test, what success looks like and where you will look if the result differs.',
    ]),
  ],
  battlefield: [
    section('A battlefield preparation card you can reuse', [
      'Write four items before a match: map, mode, official terrain cue and first question. The map tells you which brief to open. The mode tells you whether to think about sector control, attack or defense, Morale or the central-point gate. The terrain cue tells you what to look at. The first question turns that preparation into a squad call. The live objective remains the final authority.',
      'This card is intentionally short because a player cannot consult a long article while an objective changes. Use the full map and mode pages before the match, then carry only the words that help you identify the current problem. After the match, add a build and timestamp if the observation is worth keeping. Do not add “best route” unless you have evidence that is current, mode-specific and strong enough to support that claim.',
      'The same card works for a new player and a returning player. New players gain vocabulary; returning players gain a consistent way to notice what has changed after a patch. That is a more durable benefit than a static route list.',
    ]),
  ],
  roles: [
    section('From roster to role choice', [
      'Start with the task you can perform, not the most impressive title. The named roster tells you which unit families exist and gives you terms to search. The current role screen tells you what is selectable now. Your squad and mode tell you what the team needs. These three layers should agree before you describe a role as the right choice for a match.',
      'The same logic applies to weapons and vehicles. A catalogue name can help identify an item, but the current loadout screen determines whether it appears for your faction and role. An official media frame can show combined arms, armour or a helicopter, but it does not supply a complete model or control matrix. Keep pending details out of a “best class” answer until the evidence is complete.',
      'A good role note includes the role label, unit family, faction, mode, platform and build. If the source is a database or video, mark it as a reference or community example. This makes the category useful for future roster work instead of creating a list that will need to be discarded at the next update.',
    ]),
  ],
  systems: [
    section('Debug by layer instead of by keyword', [
      'When a player searches for a control, first identify whether the question is about a feature, an input, a role or a tactical result. “Are helicopters in the game?” is an official product question. “Which seat can do this?” is a current role and UI question. “What key does this use?” is a platform and build question. “Should we use it here?” is a mode, map and squad question. One source rarely answers all four.',
      'Use the Systems pages to move from the broad feature to the smallest test. Check the current screen, change one input, observe the result and record the context. If public sources disagree, preserve the disagreement. The current UI should decide what you do now, while the source notes explain why the page does not publish a false default.',
      'This approach is useful for search visitors because it converts a vague keyword into a diagnostic path. It also makes future updates cheaper: when a build changes, you can recheck the affected layer instead of rewriting every paragraph about the system.',
    ]),
  ],
  access: [
    section('A decision matrix for access questions', [
      'Start with the user’s constraint. Device constraint goes to Release Date & Platforms and the live store. Friend constraint goes to Crossplay and the current server label. Hardware constraint goes to PC Requirements and then Best Settings. Stability constraint goes to Crashing Fixes with a reproduction point. Price constraint goes directly to the live storefront through Editions & Buying.',
      'Do not answer a constraint with the nearest-looking keyword. A “PC requirements” result cannot prove crossplay. A launch date cannot prove a current discount. A crash workaround cannot prove that the machine is supported. Keeping the routes separate is what makes the Access category practical rather than a list of repeated platform phrases.',
      'When the answer depends on a live page, finish by telling the reader to refresh and verify again. When it depends on a patch, attach the build. When it depends on a local test, define the success signal and restore path. These small instructions prevent avoidable access decisions.',
    ]),
  ],
  updates: [
    section('Maintain an update page like a changelog', [
      'A useful update page records what changed, when the source said it, and what a player should recheck. It does not need to repeat the whole game manual. Patch 1.3 and Patch 1.2 remain separate so a reader can distinguish current guidance from historical context. The roadmap remains separate so a planned item cannot accidentally appear as a live feature.',
      'When a new note arrives, compare it with the existing page and move only the confirmed current fact. Preserve the old wording and date where it explains the timeline. If a later post changes the scope or status, record that difference explicitly. This makes the archive useful to players who are comparing videos, screenshots or old advice.',
      'The category’s success signal is freshness with restraint: the latest official note is easy to find, planned content is visibly planned, and unresolved discrepancies stay visible until a reliable source settles them.',
    ]),
  ],
} as const;

export const categoryFinalSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  basics: [
    section('The smallest useful next step', [
      'When a new player is overwhelmed, reduce the choice to the next screen and the next question. Open the current tutorial screen, then the server browser, then the squad context. Do not ask a first match to prove that you understand every weapon, vehicle or map. Ask whether you can identify the objective, make a call and stay connected long enough to learn what the squad is doing.',
      'If the answer is no, use the failure point rather than searching the whole site again. A silent microphone belongs to Voice Chat. A locked or missing squad belongs to Join a Squad and, when a platform label is involved, Crossplay. An unclear cap or objective belongs to Game Modes. A confusing landscape belongs to Launch Maps. This routing keeps Basics from becoming a second encyclopedia and makes it a reliable starting surface.',
      'Once the first loop works, return to the directory with one specific question. That is the point at which a role, weapon, map or settings page can add value instead of adding noise.',
    ]),
  ],
  battlefield: [
    section('A battlefield question should end in an observation', [
      'Before a match, it is enough to know the map, mode and terrain cue. During a match, convert that preparation into something you can observe: the active sector, the central-point condition, the crossing the squad is discussing, the open ground around an airfield or the water and industrial edge near a port. If you cannot see the condition in the current UI or hear it in the squad call, treat it as unconfirmed.',
      'After the match, write the observation with its context. “This route worked” is too broad. “In this mode and objective, the squad used this crossing in the recorded build” is a player example that can be checked later. The distinction helps both readers and future editors: a map profile stays official and durable, while a route note remains dated and conditional.',
      'This is also why the Battlefield category links to both rules and profiles. A terrain sentence without a win condition is incomplete, and a mode rule without map vocabulary can be hard for a new player to apply. Read both, then let the current match decide.',
    ]),
  ],
  roles: [
    section('Choose depth only after the role is confirmed', [
      'The quickest way to make a role or gear page unhelpful is to start with a ranking before confirming what the player can select. First identify the unit family and current role label. Next check faction, mode and loadout in the live client. Only after that should you compare the relevant weapon or vehicle reference. If any layer is missing, label the result as pending or a player example.',
      'The named roster, weapon catalogue and vehicle hub are intentionally different kinds of pages. The roster gives names and unit grouping. The weapons page gives a research vocabulary and keeps planned, official and snapshot records separate. The vehicles page sets the official battlefield boundary and points to control verification. Combining them too early makes a search result look complete while hiding its evidence gaps.',
      'For a new player, return to Basics before taking command responsibility. For a returning player, attach every new observation to the build and patch that produced it. A role page earns trust when its limits are as easy to find as its names.',
    ]),
  ],
  systems: [
    section('A control answer needs a reproducible test', [
      'If you need an exact control, write down the platform, role or seat, build, current UI label and the action you tested. Test it in a low-risk context and note the result. If the binding differs from a public catalogue or creator profile, do not choose a favorite by confidence; use the current client for the current session and preserve the conflict for future review.',
      'If the issue is not the input, move one layer up. Confirm whether the feature is available to the role, whether the objective makes it relevant, and whether the squad understands the intended action. This avoids changing keybinds when the real problem is an unclear mode or a missing role permission. It also creates a clear handoff to Voice Chat, Movement & Teamplay or the technical pages.',
      'The systems category is deliberately practical rather than absolute. It gives a player a way to test the system and tells them when a source is only a demonstration. That is more durable than an exact-looking chart with no build boundary.',
    ]),
  ],
  access: [
    section('Finish an access decision with the source that owns it', [
      'Access questions often cross page boundaries, but they should finish at the source that can actually change the answer. Platform availability finishes at the current official store or publisher page. Hardware readiness finishes at the official requirements table. Friend access finishes with the current server label and crossplay context. A discount or regional price finishes at checkout. A crash report finishes with the latest official note or a support-ready reproduction.',
      'Do not substitute a static answer because it is easier to quote. A dated page can explain the route and the fields to compare, while the live source supplies the value. This is especially important for buyers who search from a different region or return after a storefront promotion ends. The page remains useful because its checklist survives the changing value.',
      'When a decision fails, record the exact boundary that failed and return to the corresponding guide. This keeps access troubleshooting finite: one question, one source, one reversible test or one documented handoff.',
    ]),
  ],
  updates: [
    section('Use dates to decide what to recheck next', [
      'A date on an update page is a sorting tool. Start with the newest official note that could affect your question, then work backward only when you need history. If the question is about a current control, role or crash, an old patch should not outrank a current UI or later official source. If the question is why two guides disagree, the historical page can explain the difference.',
      'Keep roadmap language separate from patch language. A planned item belongs on the watch list until a release note confirms it. When confirmation arrives, record the new source and preserve the original roadmap statement so readers can see what changed from plan to delivery. This is more useful than deleting the old plan and losing the timeline.',
      'A good update workflow ends with a dated note in the current page, a source link and a clear statement of what remains unknown. That is enough for a returning player to act without pretending the archive can predict every future build.',
    ]),
  ],
} as const;

export const categoryLastSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  roles: [
    section('A useful handoff for role research', [
      'If you are ready to go deeper, open the roster page with the exact role name in front of you. Use the current role screen to confirm faction and loadout, then use the weapon or vehicle page only for the part of the question it can support. If the item is planned, unresolved or present only in a community snapshot, keep that label in your note.',
      'If you are not ready to make that check, go back to the Beginner Guide and learn the squad objective first. Role knowledge has value when it helps a current team task; a long catalogue without a task can make the first match harder to read. The category is designed to support both paths without pretending that a pending roster is complete.',
      'Before sharing a role answer, include the role, unit, faction, mode, platform and build. That one sentence makes the advice much more useful than a ranking with no context.',
    ]),
  ],
  systems: [
    section('A useful handoff for control research', [
      'When the question is “what key does this use?”, do not stop at a search result. Open the current control screen, copy the visible label and test one input. When the question is “why should we use this?”, add the mode, objective and squad plan. When the question is “why did it fail?”, classify the missing layer: feature, role, input, device or tactics.',
      'This handoff turns the Systems category into a practical diagnostic. It also tells future editors what evidence a pending page needs before it can publish an exact table. A current client check with platform, build and role context can settle a conflict that a dozen undated videos cannot.',
      'If you only need a first teamplay habit, use Movement & Teamplay or Voice Chat. If you need a vehicle-specific experiment, keep Helicopter Controls in its current evidence boundary until the sources agree.',
    ]),
  ],
  updates: [
    section('A useful handoff for returning players', [
      'Returning players should begin with the newest official note that could affect their session. Compare its date with the page they intend to use, then recheck the relevant menu, role, weapon, vehicle or stability behavior in the current build. If nothing has changed, keep the current page and its source date. If something has changed, record the new boundary instead of rewriting the old history.',
      'When a search result mentions future content, use the roadmap page to classify it as planned and wait for an official release confirmation before treating it as current. When a community guide cites an old patch, use the historical page to understand its context and then test the present behavior. These two habits prevent update pages from becoming either stale manuals or unverified hype.',
      'The next action after every update check should be visible: use the new setting, verify the current role, compare the current mode rule or record the issue for support. If no action can be defined, the evidence is not yet strong enough for a current claim.',
    ]),
  ],
} as const;

export const entryFinalSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  'release-and-platforms': [
    section('A release answer for different player situations', [
      'For a new buyer, start with the platform you own and open its current official store. For a PC buyer, compare the requirements before purchasing. For a group player, confirm the platforms your friends use and then check the current crossplay and server label. For a delayed buyer, repeat the store check because price, promotion, edition presentation and regional terms may have changed. The release date remains useful context, but it does not replace any of these live checks.',
      'This page is also a useful correction to overly simple search answers. “Released” does not mean “every server is accessible from every platform,” “the same account features exist everywhere,” or “the current price is unchanged.” Those claims require separate evidence. The page keeps them separate so that a reader knows exactly which link to open next.',
      'When you share the answer, include the checked date and the device context. A platform statement without that context can be technically true and still misleading for the player making the purchase.',
    ]),
  ],
  'pc-requirements': [
    section('Turn the requirements table into a readiness report', [
      'A readiness report should state the official tier your machine matches and the fields that created the result. Include operating system, CPU, memory, GPU, DirectX and storage as shown by the official table. If one field is below the minimum, say so rather than averaging the parts into a vague “should run.” If the machine meets the recommended tier, still keep the build, display resolution and target experience visible.',
      'Next, decide whether your issue is launch readiness or in-game performance. A machine can pass a requirements comparison and still need a personal settings baseline. Conversely, a crash during launch should not be treated as a normal graphics preference. Use Best Settings for controlled visual changes and Crashing Fixes for a reproducible failure.',
      'Repeat the comparison after a hardware change or major official update. The value of this page is the current publisher boundary and the comparison method, not a permanent frame-rate promise.',
    ]),
  ],
  'patch-1-2': [
    section('A historical patch comparison worksheet', [
      'When Patch 1.2 is relevant, create three columns: what the official 1.2 note says, what a later official note says, and what the current client shows. Add the platform and build beside the observation. This worksheet prevents a historical fix from being repeated as current advice and makes it easier to explain why an older video has a different menu, control or behavior.',
      'If the topic is not mentioned in the later source, do not treat silence as confirmation or rejection. Check the current UI and keep the result bounded. If a workaround is unsafe or cannot be reversed, do not apply it merely because the old page lists it. A historical archive should reduce uncertainty, not create a new troubleshooting risk.',
      'Use Patch 1.3 and the current news feed as the normal next links. Return to Patch 1.2 when the question is specifically about the earlier state, the change timeline or the source of an old community recommendation.',
    ]),
  ],
  'editions-and-buying': [
    section('Make the final checkout decision auditable', [
      'Before paying, record the store, region, device, edition name and the live values that affected your choice. You do not need to publish a price snapshot on the Wiki; the record is for your own decision and for identifying whether a later disagreement is caused by region, tax, promotion or edition scope. Refresh the store before the final action.',
      'If the purchase is connected to a squad, verify the friend-access question independently. If the purchase is connected to a PC, verify the official requirements independently. A discount can be attractive while the device or platform choice is still wrong. Completing the checks in order avoids that costly mismatch.',
      'When a search result presents a permanent-looking price or edition ranking, follow the official storefront instead. The durable answer here is the checklist, the boundaries and the source route; the live store owns the changing checkout details.',
    ]),
  ],
} as const;

export const entryLastSections: Readonly<
  Record<string, readonly WikiSection[]>
> = {
  'crossplay-and-platforms': [
    section('A short answer you can verify with a friend', [
      'Send your friend the current server label, the two platform names and the exact point at which the join flow fails. Ask them to repeat the visibility and filter checks from their side. If the results differ, keep the asymmetry. It is evidence about this server and context, not proof of a general platform policy.',
      'If both players can see and enter the server but later disconnect, move the question to connection or stability troubleshooting. If the server is not visible, stay with filters and platform access. This small branching rule prevents a broad crossplay label from hiding the actual failure.',
      'Recheck after a major patch and keep the date because the live server UI is the final source for the session.',
    ]),
  ],
  'roadmap-2026': [
    section('A watch-list format for future confirmation', [
      'Keep each roadmap item in a simple watch list with four fields: planned name, official announcement date, later confirmation link and current-client result. Leave the confirmation and result empty until an official release or patch fills them. This makes it difficult to accidentally turn a plan into a live feature while still giving returning readers a reason to revisit the page.',
      'If a later source changes the name, scope or timing, retain the original wording and add the new source beside it. A changed plan is useful history. A deleted plan is difficult to audit, especially when search results and community videos continue to quote the older wording.',
      'Use the current patch pages for what players can do now. Use this roadmap page for what to watch next.',
    ]),
  ],
  'best-settings': [
    section('A settings note worth keeping', [
      'Save the baseline, the one change, the test scene and the result. Include the hardware and display context when the change affects performance or readability. If the change improves one scene but harms another, record the trade-off instead of labelling it best. A personal preset is valuable when its reason is clear.',
      'If the result changes after an update, keep the older note dated and create a new baseline. Do not pile a new community preset on top of an unknown state. If the game crashes, move to Crashing Fixes; if the microphone fails, move to Voice Chat. The fastest route is the one that matches the failure layer.',
      'This method gives readers something they can reproduce and gives future page updates a clean comparison point.',
    ]),
  ],
} as const;

export const guidesIndexDepthSections: readonly WikiSection[] = [
  section('A guide is complete when the result is observable', [
    'The directory’s guides should not compete to sound authoritative. Each one should help a player do something, see whether it worked and know what to do when it did not. That is why the pages use action steps, success signals and failure checks. A short sequence with a clear boundary is more valuable than a long list of tips that cannot be tested.',
    'For first-match questions, keep the sequence close to the player’s current moment: tutorial, squad, call, objective. For settings and crash questions, keep the changes reversible and the reproduction point visible. For voice questions, isolate input, channel and output. For server questions, separate discovery, compatibility, joining and post-join stability. This structure lets a player stop at the layer that failed instead of changing the whole system.',
    'Use the source list before sharing a guide tip. Official notes carry the mechanism or policy boundary; a community video can illustrate one workflow. When the source does not publish an exact key, role matrix or route, the guide should say so. That is not a gap in usefulness: it tells the reader where the current client must take over.',
  ]),
] as const;

export const guidesIndexLastSections: readonly WikiSection[] = [
  section('A guide should tell you when to stop', [
    'Stop after a step succeeds. If the microphone meter responds, do not change three more audio settings. If a squad call is acknowledged, move into the match instead of searching for a perfect voice preset. If a reversible crash test changes the same trigger, record the result before trying another workaround. Stopping at a measured success keeps the next action understandable.',
    'Stop and escalate when the documented checks do not explain the result. Preserve the build, platform, exact UI label and reproduction steps. A guide cannot responsibly invent a fix for an unverified failure, but it can help you produce a support-ready report and choose the correct official source.',
    'This is the standard the directory applies to every guide: a task, an observable result, a safe recovery path and a clear evidence boundary.',
  ]),
] as const;
