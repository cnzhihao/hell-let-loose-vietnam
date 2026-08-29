import { gameConfig } from '@/config/game';
import { expansionEntries } from './entries/expansion';
import type { TopicTag, WikiCategory, WikiEntry } from './types';
import { officialVisuals } from './visuals';

const checked = '2026-08-30';

const official = {
  game: 'https://www.hellletloose.com/game/hll-vietnam',
  launch: 'https://www.hellletloose.com/blog/hllv-out-now',
  modes: 'https://www.hellletloose.com/blog/hllv-game-modes',
  crossplay: 'https://www.hellletloose.com/blog/beta-testing-and-crossplay',
  pcRequirements: 'https://www.hellletloose.com/pc-requirements',
  patch13: 'https://www.hellletloose.com/blog/hllv-patch-1-3',
  patch12: 'https://www.hellletloose.com/blog/hllv-patch-1-2',
  roadmap: 'https://www.hellletloose.com/blog/hllv-2026-roadmap',
  qna2: 'https://www.hellletloose.com/blog/dev-qna-2',
  steam: 'https://store.steampowered.com/app/3079210/Hell_Let_Loose_Vietnam/',
  news: 'https://steamcommunity.com/app/3079210/allnews/',
} as const;

const sourceNotes = {
  checked: `Official source checked ${checked}; recheck after a new patch or platform change.`,
  launch: `Official launch material checked ${checked}.`,
  planned: `Official roadmap checked ${checked}; planned content is not current functionality.`,
} as const;

export const wikiCategories: readonly WikiCategory[] = [
  {
    slug: 'basics',
    title: 'Basics',
    description: 'The game’s verified shape and the safest first-match route.',
    indexable: true,
    entrySlugs: ['game-overview', 'beginner-guide', 'join-a-squad'],
  },
  {
    slug: 'battlefield',
    title: 'Battlefield',
    description: 'Launch maps, capture rules and the four documented modes.',
    indexable: true,
    entrySlugs: [
      'launch-maps',
      'game-modes',
      'thanh-hoa-bridge',
      'hue-outskirts',
      'van-tuong',
      'quang-ngai',
      'dak-to-airfield',
      'cam-ranh-port',
    ],
  },
  {
    slug: 'roles',
    title: 'Roles & classes',
    description:
      'Roles, classes, weapons and vehicles, with roster claims separated from player examples.',
    indexable: true,
    entrySlugs: ['roles-and-units', 'weapons', 'vehicles'],
  },
  {
    slug: 'systems',
    title: 'Systems & controls',
    description:
      'Tunnels, aircraft, voice chat, movement and teamplay systems confirmed by official material.',
    indexable: true,
    entrySlugs: [
      'tunnels-helicopters',
      'movement-and-teamplay',
      'voice-chat',
      'helicopter-controls',
    ],
  },
  {
    slug: 'access',
    title: 'Platforms, PC & fixes',
    description:
      'Release platforms, crossplay, PC requirements, settings and crash checks.',
    indexable: true,
    entrySlugs: [
      'release-and-platforms',
      'crossplay-and-platforms',
      'pc-requirements',
      'best-settings',
      'crashing-fixes',
      'editions-and-buying',
    ],
  },
  {
    slug: 'updates',
    title: 'Updates & roadmap',
    description:
      'Version-sensitive notes, current fixes and clearly labelled plans.',
    indexable: true,
    entrySlugs: ['patch-1-3', 'patch-1-2', 'roadmap-2026'],
  },
] as const;

export const homepageSearchShortcuts = [
  { label: 'Beginner guide', query: 'beginner guide' },
  { label: 'Maps', query: 'maps' },
  { label: 'Game modes', query: 'game modes' },
  { label: 'PC requirements', query: 'pc requirements' },
  { label: 'Crossplay', query: 'crossplay' },
  { label: 'Latest patch', query: 'patch 1.3' },
] as const;

export const homepageQuickAnswers = [
  {
    description:
      'Confirm the checked launch date and the PC, PlayStation 5 and Xbox Series X|S platforms.',
    href: '/wiki/access/release-and-platforms',
    label: 'Release date & platforms',
  },
  {
    description:
      'Understand cross-platform, PC-only and console-only server labels before joining a friend.',
    href: '/wiki/access/crossplay-and-platforms',
    label: 'Crossplay',
  },
  {
    description:
      'Compare the official minimum and recommended hardware before installing or buying.',
    href: '/wiki/access/pc-requirements',
    label: 'PC requirements',
  },
  {
    description:
      'Read the newest dated official changes before relying on an older tip or fix.',
    href: '/wiki/updates/patch-1-3',
    label: 'Latest patch',
  },
] as const;

const coreWikiEntries: readonly WikiEntry[] = [
  {
    slug: 'game-overview',
    categorySlug: 'basics',
    title: 'Hell Let Loose: Vietnam Overview',
    pageType: 'entry',
    tags: ['beginner', 'gameplay', 'platforms'],
    summary:
      'The official shape of HLL: Vietnam: 50v50 battles, NVA versus US, six launch maps, a role count reported differently by two official storefront/product surfaces, and three launch platform families.',
    lead: 'Hell Let Loose: Vietnam is a 50v50 tactical multiplayer game set in the Vietnam War. The official game page reports 19 specialised roles and names infantry, recon, armour, mortar and helicopter units, while the current Steam About section reports 17. Steam lists cross-platform multiplayer and a 13 August 2026 release; those dynamic facts were rechecked on 30 August 2026.',
    metaTitle: 'Hell Let Loose: Vietnam Overview — HLL Vietnam Wiki',
    metaDescription:
      'A source-backed overview of Hell Let Loose: Vietnam: match scale, factions, launch maps, specialised roles, movement systems and platforms.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam',
      'hell let loose vietnam overview',
      'hll vietnam factions',
      'hll vietnam 50v50',
    ],
    indexable: false,
    facts: [
      { label: 'Match scale', value: '50v50 tactical multiplayer' },
      { label: 'Factions', value: 'NVA versus US' },
      { label: 'Launch maps', value: '6 large-scale maps' },
      {
        label: 'Specialised roles',
        value:
          '19 on the official game page; 17 in Steam About — reconcile before roster publication',
      },
      {
        label: 'Launch platforms',
        value: 'PC, PlayStation 5 and Xbox Series X|S',
      },
      { label: 'Release checked', value: '13 August 2026' },
    ],
    sections: [
      {
        heading: 'What the official game page confirms',
        paragraphs: [
          'The core match is built around large-scale team play rather than a small competitive arena. The official product page names NVA and US forces, reports 19 specialised roles, and lists infantry, recon, armour, mortar and helicopter units. Steam’s current About section reports 17 roles, so the total is kept as a source discrepancy rather than a completed roster fact.',
        ],
        bullets: [
          'Tunnel networks, helicopters and patrol boats are part of the Vietnam setting’s battlefield toolkit.',
          'The official page highlights historically accurate weapons and enhanced movement such as swimming, climbing and fast crawling.',
          'Dragging teammates is listed as a new movement interaction; the exact control mapping remains build-sensitive.',
        ],
      },
      {
        heading: 'Use the launch roster carefully',
        paragraphs: [
          'The official launch article enumerates four launch modes: Warfare, Offensive, Conquest and Domination. The current landing page separately says “6 distinct gameplay modes”; until those two official statements are reconciled, this Wiki uses the four-mode launch roster and keeps the count discrepancy visible.',
        ],
      },
      {
        heading: 'Best next page',
        paragraphs: [
          'New players should continue to the first-match guide. Players comparing match rules should open the game modes page; platform questions belong on the cross-platform page.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: sourceNotes.checked,
      },
      {
        label: 'Official launch article',
        href: official.launch,
        type: 'official',
        note: sourceNotes.launch,
      },
      {
        label: 'Steam store page',
        href: official.steam,
        type: 'official',
        note: 'Official store listing checked 2026-08-30 for release, platform and cross-platform labels.',
      },
    ],
    relatedSlugs: [
      'beginner-guide',
      'launch-maps',
      'game-modes',
      'crossplay-and-platforms',
    ],
  },
  {
    slug: 'beginner-guide',
    categorySlug: 'basics',
    path: '/guides/beginner',
    title: 'First Match Beginner Guide',
    pageType: 'guide',
    tags: ['beginner', 'gameplay', 'systems'],
    summary:
      'A low-risk first-match route: complete the official tutorial, join a squad, communicate and learn the active objective before taking command roles.',
    lead: 'Start with the official Getting Started tutorial, then join a squad and use communication to learn the active objective. The launch material says the Squad Leader and Commander tutorials are required before those roles, so leave command roles until you have completed their specific tutorials.',
    metaTitle: 'First Match Beginner Guide — Hell Let Loose: Vietnam',
    metaDescription:
      'A source-backed first-match checklist for HLL: Vietnam: Getting Started tutorial, squad communication and role-tutorial boundaries.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam beginner guide',
      'hll vietnam first match',
      'hll vietnam getting started tutorial',
      'hll vietnam squad leader tutorial',
    ],
    indexable: false,
    facts: [
      {
        label: 'Start state',
        value: 'A new player before the first public match',
      },
      { label: 'First action', value: 'Complete the Getting Started tutorial' },
      {
        label: 'Command-role gate',
        value: 'Squad Leader and Commander tutorials are required first',
      },
      {
        label: 'First-match success signal',
        value:
          'You can identify the active objective and stay connected to your squad',
      },
    ],
    steps: [
      {
        title: 'Complete Getting Started',
        action:
          'Open the official Getting Started tutorial before the first public match and keep the current in-game movement vocabulary visible.',
        successSignal:
          'You can identify the active objective, squad context and basic movement loop before queuing.',
        failureCheck:
          'If a tutorial label differs, follow the current build and record the platform rather than copying an older menu screenshot.',
        visual: officialVisuals.squadMovement,
      },
      {
        title: 'Join a squad',
        action:
          'Choose an open squad, take a non-command role you understand and ask what the squad is doing before moving out.',
        successSignal:
          'You are attached to a squad and have a clear first destination.',
      },
      {
        title: 'Communicate and follow the objective',
        action:
          'Use short calls about position, direction and intent, then keep the active objective on the map while you move.',
        successSignal:
          'You can tell where your squad is, why it is moving and when to return to the objective.',
      },
      {
        title: 'Leave command roles for later',
        action:
          'Complete the Squad Leader and Commander tutorials before taking those roles in a live match.',
        successSignal:
          'Your first match builds map and communication habits without making you responsible for the whole team.',
      },
    ],
    sections: [
      {
        heading: '1. Open Getting Started before queuing',
        paragraphs: [
          'The official launch information describes Getting Started as an optional tutorial and says Esc can skip it. For a first match, treat it as the required preparation step: learn the game’s vocabulary and movement loop before adding live-server pressure.',
        ],
        bullets: [
          'Choose Getting Started from the in-game tutorial list.',
          'Do not skip it on the first run; the official skip instruction is Esc if you need to leave it later.',
          'Do not select Squad Leader or Commander until the corresponding tutorial has been completed.',
        ],
      },
      {
        heading: '2. Join a squad and communicate',
        paragraphs: [
          'The official launch tips put communication first. In the first live match, join a squad, state what you are doing, and ask which objective is active before moving away from the group. This is a recommended play pattern, not a claim about a universal keybind.',
        ],
      },
      {
        heading: '3. Follow the active objective',
        paragraphs: [
          'Use the tactical map and squad communication to keep your position tied to the active fight. Your first success signal is not a kill count: it is knowing where your squad is going, why it is going there, and when to return to the objective.',
        ],
      },
      {
        heading: '4. Choose a specialist role later',
        paragraphs: [
          'After one or two matches, compare the role families on the Wiki. The official game page reports 19 specialised roles while Steam’s current About section reports 17; the full roster and role-by-role responsibilities need a reconciliation pass before this site turns them into a detailed class guide.',
        ],
      },
      {
        heading: 'Troubleshooting and version boundary',
        paragraphs: [
          'If a menu label or control differs, follow the current build and then check the latest official patch note. Do not rely on a community keybind chart as a universal rule; controls and tutorials can change between patches.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official launch information and tips',
        href: official.launch,
        type: 'official',
        note: sourceNotes.launch,
      },
      {
        label: 'Official Steam news feed',
        href: official.news,
        type: 'official',
        note: 'Publisher/developer news feed checked 2026-08-30 for tutorial and launch-tip context.',
      },
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: 'Used for the verified role, squad-scale and movement boundary.',
      },
    ],
    relatedSlugs: ['game-overview', 'game-modes', 'roles-and-units'],
  },
  {
    slug: 'launch-maps',
    categorySlug: 'battlefield',
    title: 'Launch Maps',
    pageType: 'entry',
    tags: ['maps', 'gameplay'],
    summary:
      'The six maps named by the official launch article, with tactical details kept out until each map has a direct source-backed page.',
    lead: 'The official launch article lists six launch maps: Thanh Hóa Bridge, Huế Outskirts, Vạn Tường, Quảng Ngãi, Đắk Tô Airfield and Cam Ranh Port. This page confirms the roster without inventing cover, route or strongpoint advice that has not been verified map by map.',
    metaTitle: 'Launch Maps — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'The official six-map launch roster for Hell Let Loose: Vietnam, plus a clear boundary around unverified map-by-map tactical claims.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam maps',
      'hll vietnam launch maps',
      'hll vietnam map list',
    ],
    indexable: false,
    facts: [
      { label: 'Launch map count', value: '6' },
      { label: 'Roster source', value: 'Official Out Now launch article' },
      {
        label: 'Map tactics',
        value: 'Map-by-map routes and strongpoints are not yet verified here',
      },
    ],
    sections: [
      {
        heading: 'Confirmed launch roster',
        paragraphs: [
          'These names are transcribed from the official launch article and kept as a directory until each map receives its own source-backed tactical brief.',
        ],
        bullets: [
          'Thanh Hóa Bridge',
          'Huế Outskirts',
          'Vạn Tường',
          'Quảng Ngãi',
          'Đắk Tô Airfield',
          'Cam Ranh Port',
        ],
      },
      {
        heading: 'What this page does not claim',
        paragraphs: [
          'The name of a map is not evidence for its best route, cover pattern, capture order, vehicle lane or role recommendation. Those details need direct inspection of official tactical materials or a clearly dated in-game verification pass.',
        ],
      },
      {
        heading: 'Choose the next useful page',
        paragraphs: [
          'If you are deciding how a match ends, open Game Modes. If you are trying to survive the first public match, use the Beginner Guide.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: sourceNotes.launch,
      },
    ],
    relatedSlugs: ['game-modes', 'game-overview', 'beginner-guide'],
  },
  {
    slug: 'game-modes',
    categorySlug: 'battlefield',
    title: 'Game Modes Explained',
    pageType: 'entry',
    tags: ['gameplay', 'systems'],
    summary:
      'The four modes documented by the official launch material: Warfare, Offensive, Conquest and Domination.',
    lead: 'The official mode guide documents four launch modes. Warfare and Domination use Hard Cap and Soft Cap capture areas, Offensive limits capture contribution to the Hard Cap, and Conquest introduces a Morale resource. The current landing page’s separate six-mode marketing count is kept as a recheck note rather than treated as a launch roster.',
    metaTitle: 'Game Modes Explained — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'Official rules for Warfare, Offensive, Conquest and Domination in Hell Let Loose: Vietnam, including capture areas, timers and Morale.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam game modes',
      'hll vietnam warfare mode',
      'hll vietnam offensive mode',
      'hll vietnam conquest domination',
    ],
    indexable: false,
    facts: [
      { label: 'Launch modes documented', value: '4' },
      { label: 'Warfare timer', value: 'Up to 90 minutes' },
      { label: 'Offensive timer', value: '30 minutes per active sector' },
      {
        label: 'Domination gate',
        value: 'Control 2 of 3 central points to unlock the enemy HQ',
      },
      { label: 'Conquest resource', value: 'Morale' },
    ],
    sections: [
      {
        heading: 'Warfare',
        paragraphs: [
          'Teams start on their own halves while the middle sector is neutral. Capture sectors toward the enemy HQ; victory comes from reaching the enemy HQ or holding the majority of sectors when the timer ends. The official guide says the mode can run up to 90 minutes.',
        ],
        bullets: [
          'A Soft Cap is the four-grid-square area around an objective; a Hard Cap is the circle around the capture point.',
          'Players in the Soft Cap contribute one capture power and players in the Hard Cap contribute three.',
          'A clean capture takes three minutes according to the official mode guide.',
        ],
      },
      {
        heading: 'Offensive',
        paragraphs: [
          'One team attacks and the other defends. Attackers push through five capture points toward the enemy HQ, with 30 minutes for each active sector. Defenders win by holding an active sector for 30 minutes; the official guide says defenders cannot recapture a lost sector.',
        ],
        bullets: [
          'Only players inside the Hard Cap contribute to the capture.',
          'The active sector determines where the attack and defense effort is concentrated.',
        ],
      },
      {
        heading: 'Conquest',
        paragraphs: [
          'Capture points use a cross-shaped layout and can be taken in any order. The mode uses Morale: redeploying and losing control of the majority affects the resource, while bleed is based on majority control. If the first team reaches zero, overtime and the remaining-Morale condition determine the finish.',
        ],
      },
      {
        heading: 'Domination',
        paragraphs: [
          'The HQs begin locked. A team must control two of the three central capture points to unlock the enemy HQ, then capture it; losing the majority relocks the HQ. If the timer expires, the team controlling the majority wins.',
        ],
      },
      {
        heading: 'Official count discrepancy',
        paragraphs: [
          'The launch article and detailed mode guide name four launch modes. The current game landing page says six distinct gameplay modes. This page publishes the four-mode launch set and marks the marketing-page count for recheck instead of guessing the two additional labels.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official game modes guide',
        href: official.modes,
        type: 'official',
        note: sourceNotes.checked,
      },
      {
        label: 'Official launch article',
        href: official.launch,
        type: 'official',
        note: 'Used to cross-check the launch roster on 2026-08-30.',
      },
    ],
    relatedSlugs: ['launch-maps', 'beginner-guide', 'game-overview'],
  },
  {
    slug: 'roles-and-units',
    categorySlug: 'roles',
    title: 'Roles and Units',
    pageType: 'entry',
    tags: ['roles', 'beginner', 'gameplay'],
    summary:
      'What the official game page confirms about the role count and unit families, without inventing a full roster.',
    lead: 'The official game page reports 19 specialised roles and names infantry, recon, armour, mortar and helicopter units. The current Steam About section reports 17, and neither source exposes a complete role-by-role roster, so this page deliberately stops at the source-qualified structure.',
    metaTitle: 'Roles and Units — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'The official role count and unit families in Hell Let Loose: Vietnam, with a clear boundary around the not-yet-verified full roster.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam roles',
      'hll vietnam classes',
      'hll vietnam units',
      'hll vietnam specialised roles',
    ],
    indexable: false,
    facts: [
      {
        label: 'Specialised roles',
        value: '19 on official game page; 17 in Steam About section',
      },
      {
        label: 'Named unit families',
        value: 'Infantry, recon, armour, mortar and helicopter',
      },
      {
        label: 'Full roster',
        value: 'Pending a separate source-backed roster pass',
      },
    ],
    sections: [
      {
        heading: 'Confirmed structure',
        paragraphs: [
          'The official page frames roles as part of a larger combined-arms structure. It names five unit families and reports 19 specialised roles, while Steam’s current About section reports 17. That discrepancy is enough reason to orient a new player without publishing every role name or responsibility as settled fact.',
        ],
        bullets: [
          'Infantry and recon cover ground-oriented team functions.',
          'Armour, mortar and helicopter units add vehicle and fire-support layers.',
          'The game page also points to dedicated role showcases, but a showcase is not treated as a complete roster table here.',
        ],
      },
      {
        heading: 'How to use this page',
        paragraphs: [
          'Start with a role that lets you stay with your squad and learn the active objective. Once the full roster is verified, this page can branch into role-specific guides with a clear start state, success signal and troubleshooting section.',
        ],
      },
      {
        heading: 'Evidence boundary',
        paragraphs: [
          'Do not turn community class lists, old Hell Let Loose guides or video titles into current HLL: Vietnam role facts without checking the official build and date. The count is verified; the complete list remains pending.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: sourceNotes.checked,
      },
      {
        label: 'Official developer Q&A #2',
        href: official.qna2,
        type: 'official',
        note: 'Used only for the broader asymmetry and combined-arms context; it does not supply a complete roster.',
      },
    ],
    relatedSlugs: [
      'beginner-guide',
      'tunnels-helicopters',
      'movement-and-teamplay',
    ],
  },
  {
    slug: 'tunnels-helicopters',
    categorySlug: 'systems',
    title: 'Tunnels, Helicopters and Patrol Boats',
    pageType: 'entry',
    tags: ['systems', 'vehicles', 'gameplay'],
    summary:
      'The battlefield systems the official page highlights, plus the current NVA tunnel rule recorded in Patch 1.3.',
    lead: 'Official material confirms tunnel networks, helicopters, air support and supply drops, and patrol boats as part of the battlefield toolkit. Patch 1.3, rechecked on 30 August 2026, doubled the NVA tunnel-placement cooldown from five to ten minutes and blocks travel to a hot tunnel destination.',
    metaTitle: 'Tunnels, Helicopters and Patrol Boats — HLL Vietnam Wiki',
    metaDescription:
      'Source-backed HLL: Vietnam notes on tunnel networks, helicopters, patrol boats and the current Patch 1.3 NVA tunnel cooldown.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam tunnels',
      'hll vietnam helicopters',
      'hll vietnam patrol boats',
      'hll vietnam nva tunnel cooldown',
    ],
    indexable: false,
    facts: [
      { label: 'Tunnel cooldown after Patch 1.3', value: '10 minutes' },
      {
        label: 'Hot tunnel rule',
        value: 'Travel to the destination is blocked while it is hot',
      },
      {
        label: 'Other systems named',
        value: 'Helicopters, air support, supply drops and patrol boats',
      },
    ],
    sections: [
      {
        heading: 'Systems confirmed by official material',
        paragraphs: [
          'The official game page presents tunnels, helicopters and patrol boats as defining battlefield features. It also describes helicopters as a source of air support and supply drops. This page records the system names and patch boundary without guessing their complete role economy or control scheme.',
        ],
      },
      {
        heading: 'Patch 1.3: current tunnel boundary',
        paragraphs: [
          'The 28 August 2026 Patch 1.3 notes doubled NVA tunnel placement cooldown from five to ten minutes. They also state that players cannot travel to a tunnel destination while that tunnel is hot, in the same broad safety pattern described for Garrisons.',
        ],
        bullets: [
          'Use ten minutes as the current patch value recorded here, not as an all-version rule.',
          'If a later patch changes tunnel heat or cooldown, update this page and the related patch entry together.',
        ],
      },
      {
        heading: 'Next useful page',
        paragraphs: [
          'For the broader movement and communication loop, open Movement and Teamplay. For mode-level win conditions, open Game Modes.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: 'Checked 2026-08-30 for tunnels, helicopters, supply drops and patrol boats.',
      },
      {
        label: 'Official Patch 1.3 notes',
        href: official.patch13,
        type: 'official',
        note: 'Live 28 August 2026; patch-sensitive values should be rechecked after the next update.',
      },
    ],
    relatedSlugs: ['movement-and-teamplay', 'roles-and-units', 'patch-1-3'],
  },
  {
    slug: 'movement-and-teamplay',
    categorySlug: 'systems',
    title: 'Movement and Teamplay',
    pageType: 'entry',
    tags: ['gameplay', 'systems', 'beginner'],
    summary:
      'A source-backed checklist for the movement features and communication habits that shape a first match.',
    lead: 'The official game page highlights swimming, climbing, fast crawling and dragging teammates. Official launch tips put communication, backup Garrisons, defense and hunting NVA tunnels at the centre of teamplay. Use those as habits, not as a substitute for a verified control guide.',
    metaTitle: 'Movement and Teamplay — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'Officially confirmed HLL: Vietnam movement features and first-match teamplay habits, with a clear control-keybind boundary.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam movement',
      'hll vietnam teamplay tips',
      'hll vietnam communication',
      'hll vietnam garrison tunnels',
    ],
    indexable: false,
    facts: [
      {
        label: 'Movement features named',
        value: 'Swimming, climbing and fast crawling',
      },
      { label: 'Teammate interaction', value: 'Dragging teammates' },
      {
        label: 'Official teamplay emphasis',
        value: 'Communication, defense, backup Garrisons and hunting tunnels',
      },
    ],
    sections: [
      {
        heading: 'Movement features',
        paragraphs: [
          'Swimming, climbing and fast crawling are explicitly highlighted on the official game page. Dragging teammates is also listed as an interaction. These are confirmed feature descriptions; the exact animation, stamina or keybind behaviour needs current-build verification.',
        ],
      },
      {
        heading: 'First-match teamplay loop',
        paragraphs: [
          'Use communication to announce your position and intention, stay linked to the squad, and keep the active objective in view. Official launch tips also call out backup Garrisons, defense first, a Garrison network, and hunting NVA tunnels. Treat this as the recommended order of attention when the match becomes noisy.',
        ],
        bullets: [
          'Communicate before moving away from the squad.',
          'Keep defense and the objective visible even when an attack looks tempting.',
          'If the team is losing spawn access, look for the Garrison network and the enemy tunnel problem before chasing a distant fight.',
        ],
      },
      {
        heading: 'Control-key boundary',
        paragraphs: [
          'This page intentionally does not publish a universal keybind table. Controls can vary by platform and build; confirm them in the current in-game settings before turning a tip into an exact instruction.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: sourceNotes.checked,
      },
      {
        label: 'Official launch article',
        href: official.launch,
        type: 'official',
        note: 'Checked 2026-08-30 for launch tips and teamplay framing.',
      },
    ],
    relatedSlugs: ['beginner-guide', 'tunnels-helicopters', 'game-modes'],
  },
  {
    slug: 'release-and-platforms',
    categorySlug: 'access',
    title: 'Release Date and Platforms',
    pageType: 'access',
    tags: ['platforms', 'buying'],
    summary:
      'The official launch date and supported launch platform families for Hell Let Loose: Vietnam.',
    lead: 'The official launch article says Hell Let Loose: Vietnam is live on PC, PlayStation 5 and Xbox Series X|S. The official Steam listing gives 13 August 2026 as the release date. Prices, subscriptions and regional availability are intentionally excluded because they change by storefront and date.',
    metaTitle: 'Release Date and Platforms — Hell Let Loose: Vietnam',
    metaDescription:
      'Official HLL: Vietnam release date and launch platforms: PC, PlayStation 5 and Xbox Series X|S.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam release date',
      'hll vietnam platforms',
      'hell let loose vietnam ps5 xbox pc',
    ],
    indexable: false,
    facts: [
      { label: 'Release date', value: '13 August 2026' },
      { label: 'PC', value: 'Available at launch' },
      { label: 'Console', value: 'PlayStation 5 and Xbox Series X|S' },
      {
        label: 'Price',
        value: 'Not recorded here; check the current official storefront',
      },
    ],
    sections: [
      {
        heading: 'Launch availability',
        paragraphs: [
          'The official Out Now article names PC, PlayStation 5 and Xbox Series X|S as the launch platforms. Steam’s official listing confirms the PC release date and labels the game as Cross-Platform Multiplayer.',
        ],
      },
      {
        heading: 'What still needs a storefront check',
        paragraphs: [
          'Price, discounts, subscription access, regional storefronts and platform-specific purchase links are dynamic. This page points to official destinations instead of freezing a value that can go stale.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official launch article',
        href: official.launch,
        type: 'official',
        note: sourceNotes.launch,
      },
      {
        label: 'Official Steam store listing',
        href: official.steam,
        type: 'official',
        note: 'Checked 2026-08-30 for the release date and PC listing.',
      },
    ],
    relatedSlugs: [
      'crossplay-and-platforms',
      'pc-requirements',
      'game-overview',
    ],
  },
  {
    slug: 'crossplay-and-platforms',
    categorySlug: 'access',
    title: 'Crossplay and Platform Servers',
    pageType: 'access',
    tags: ['platforms', 'gameplay'],
    summary:
      'What the official sources confirm about cross-platform multiplayer and server platform labels.',
    lead: 'The official Steam listing labels HLL: Vietnam as Cross-Platform Multiplayer. The official crossplay announcement says servers are tagged cross-platform, PC-only or console-only, and server owners can control which platforms are allowed. This does not verify cross-progression, shared purchases or every party-invite path.',
    metaTitle: 'Crossplay and Platform Servers — HLL Vietnam Wiki',
    metaDescription:
      'Officially confirmed HLL: Vietnam crossplay support, server platform labels and the boundary around unverified cross-progression claims.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hell let loose vietnam crossplay',
      'hll vietnam cross platform',
      'hll vietnam pc console crossplay',
      'hll vietnam server platform',
    ],
    indexable: false,
    facts: [
      {
        label: 'Cross-platform label',
        value: 'Supported on the official Steam listing',
      },
      {
        label: 'Server tags',
        value: 'Cross-platform, PC-only and console-only',
      },
      {
        label: 'Server control',
        value: 'Server owners can control allowed platforms',
      },
      {
        label: 'Cross-progression',
        value: 'Not verified in the sources used here',
      },
    ],
    sections: [
      {
        heading: 'What is confirmed',
        paragraphs: [
          'Cross-platform multiplayer is listed on the official Steam page. The official crossplay announcement adds a practical server-level distinction: servers can be identified as cross-platform, PC-only or console-only, with platform access controlled by the server owner.',
        ],
      },
      {
        heading: 'How to use that information',
        paragraphs: [
          'When a friend cannot see or join a server, check the server’s platform label before assuming the account, invite or network is broken. The exact browser wording can change, so use the current in-game label as the final UI source.',
        ],
      },
      {
        heading: 'Claims intentionally left out',
        paragraphs: [
          'The sources used here do not establish cross-progression, cross-save, shared entitlements, voice-chat parity or every party-invite flow. Those are separate questions and need separate official verification.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Steam store listing',
        href: official.steam,
        type: 'official',
        note: 'Checked 2026-08-30 for the Cross-Platform Multiplayer label.',
      },
      {
        label: 'Official crossplay announcement',
        href: official.crossplay,
        type: 'official',
        note: 'Launch crossplay policy; recheck against current server browser behaviour.',
      },
      {
        label: 'Official launch article',
        href: official.launch,
        type: 'official',
        note: 'Used to cross-check the supported launch platforms.',
      },
    ],
    relatedSlugs: [
      'release-and-platforms',
      'pc-requirements',
      'beginner-guide',
    ],
  },
  {
    slug: 'pc-requirements',
    categorySlug: 'access',
    title: 'Official PC Requirements',
    pageType: 'access',
    tags: ['platforms', 'technical'],
    summary:
      'The minimum and recommended PC specifications published on the official HLL: Vietnam requirements page.',
    lead: 'The official requirements page lists Windows 11 64-bit, DirectX 12, broadband internet and 52 GB of storage for both tiers. Minimum hardware is an i5-6600 or Ryzen 3 1300X with 12 GB RAM and a GTX 960 4 GB or R9 380 4 GB; recommended is an i5-8400 or Ryzen 5 2600X with 16 GB RAM and a GTX 1060 6 GB or RX 590 8 GB.',
    metaTitle: 'PC Requirements — Hell Let Loose: Vietnam',
    metaDescription:
      'Official minimum and recommended PC requirements for Hell Let Loose: Vietnam, including Windows 11, RAM, GPU and storage.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam pc requirements',
      'hll vietnam system requirements',
      'hll vietnam minimum specs',
      'hll vietnam recommended specs',
    ],
    indexable: false,
    facts: [
      { label: 'Operating system', value: 'Windows 11 64-bit' },
      { label: 'API', value: 'DirectX 12' },
      { label: 'Storage', value: '52 GB available space' },
      { label: 'Internet', value: 'Broadband internet connection' },
    ],
    sections: [
      {
        heading: 'Minimum',
        paragraphs: [
          'CPU: Intel i5-6600 or AMD Ryzen 3 1300X. Memory: 12 GB RAM. GPU: NVIDIA GTX 960 4 GB or AMD R9 380 4 GB. The official page lists Windows 11 64-bit, DirectX 12, broadband internet and 52 GB storage alongside these components.',
        ],
      },
      {
        heading: 'Recommended',
        paragraphs: [
          'CPU: Intel i5-8400 or AMD Ryzen 5 2600X. Memory: 16 GB RAM. GPU: NVIDIA GTX 1060 6 GB or AMD RX 590 8 GB. The same Windows 11 64-bit, DirectX 12, broadband and 52 GB requirements are listed for the recommended tier.',
        ],
      },
      {
        heading: 'Recheck before buying or upgrading',
        paragraphs: [
          'Hardware requirements can change with optimization patches and storefront updates. Check the official requirements page again before making a purchase or hardware decision; this record was collected on 30 August 2026.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official PC requirements page',
        href: official.pcRequirements,
        type: 'official',
        note: sourceNotes.checked,
      },
    ],
    relatedSlugs: [
      'release-and-platforms',
      'crossplay-and-platforms',
      'patch-1-3',
    ],
  },
  {
    slug: 'patch-1-3',
    categorySlug: 'updates',
    title: 'Patch 1.3 Notes',
    pageType: 'update',
    tags: ['updates', 'systems'],
    summary:
      'The 28 August 2026 Patch 1.3 highlights: tunnel changes, tank-driver handling and over 100 fixes across the six launch maps.',
    lead: 'Patch 1.3 is the current official update rechecked on 30 August 2026. Safe highlights include the NVA tunnel cooldown change from five to ten minutes, the hot-tunnel travel restriction, tank drivers changing gears without throttle, and more than 100 fixes across the six launch maps.',
    metaTitle: 'Patch 1.3 Notes — Hell Let Loose: Vietnam',
    metaDescription:
      'Official Patch 1.3 highlights for HLL: Vietnam: NVA tunnel cooldown, tank-driver gear changes and over 100 launch-map fixes.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam patch 1.3',
      'hll vietnam update 1.3',
      'hll vietnam tunnel cooldown patch',
    ],
    indexable: false,
    facts: [
      { label: 'Live date', value: '28 August 2026' },
      { label: 'NVA tunnel cooldown', value: 'Doubled from 5 to 10 minutes' },
      {
        label: 'Hot tunnel',
        value: 'Cannot travel to its destination while hot',
      },
      { label: 'Map fixes', value: 'Over 100 fixes across six launch maps' },
    ],
    sections: [
      {
        heading: 'Gameplay and vehicle highlights',
        paragraphs: [
          'Patch 1.3 lets tank drivers change gears without throttle and changes NVA tunnel placement and travel behaviour. These are version-specific notes, not timeless rules for every build.',
        ],
      },
      {
        heading: 'Scope of the patch',
        paragraphs: [
          'The official notes describe improvements across gameplay, vehicles, weapons, UI, audio, tutorials, VOIP and maps, including over 100 fixes across the six launch maps. AMD stability and console image-quality work are also called out in the update material.',
        ],
      },
      {
        heading: 'Recheck rule',
        paragraphs: [
          'When a later patch arrives, update this entry’s checked date and move current mechanics into the new update entry. Do not let a patch summary silently become the permanent description of a system.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Patch 1.3 article',
        href: official.patch13,
        type: 'official',
        note: 'Live 28 August 2026; checked 30 August 2026.',
      },
      {
        label: 'Official Steam news feed',
        href: official.news,
        type: 'official',
        note: 'Used as an official publication cross-check for the live patch notice.',
      },
    ],
    relatedSlugs: ['tunnels-helicopters', 'patch-1-2', 'roadmap-2026'],
  },
  {
    slug: 'patch-1-2',
    categorySlug: 'updates',
    title: 'Patch 1.2 Notes',
    pageType: 'update',
    tags: ['updates', 'systems'],
    summary:
      'The official 21 August 2026 patch record: 500+ fixes and improvements across stability, maps, audio, UI, vehicles and gameplay.',
    lead: 'Patch 1.2 went live on 21 August 2026 and the official notes describe more than 500 fixes and improvements. The update covered stability, maps, audio, UI, vehicles, gameplay and keybinds, including a fix for an NVA tunnel server crash.',
    metaTitle: 'Patch 1.2 Notes — Hell Let Loose: Vietnam',
    metaDescription:
      'Official Patch 1.2 summary for HLL: Vietnam: 500+ fixes, stability, map, audio, UI, vehicle and gameplay improvements.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam patch 1.2',
      'hll vietnam update 1.2',
      'hll vietnam launch fixes',
    ],
    indexable: false,
    facts: [
      { label: 'Live date', value: '21 August 2026' },
      { label: 'Fix scope', value: '500+ fixes and improvements' },
      { label: 'Named tunnel fix', value: 'Fixed an NVA tunnel server crash' },
      {
        label: 'Areas touched',
        value: 'Stability, maps, audio, UI, vehicles, gameplay and keybinds',
      },
    ],
    sections: [
      {
        heading: 'What Patch 1.2 covered',
        paragraphs: [
          'The official patch record groups improvements across stability, all maps, audio, UI, vehicles, gameplay and keybinds. It is a launch-era maintenance update rather than a complete feature guide.',
        ],
      },
      {
        heading: 'Why keep this page',
        paragraphs: [
          'Patch history helps explain why a community tip or launch report may no longer match the current build. Use Patch 1.3 for newer changes and the official news feed for later corrections.',
        ],
      },
      {
        heading: 'Version boundary',
        paragraphs: [
          'This page records the official 21 August 2026 update and should not be read as a current bug list. Recheck the newest official patch before troubleshooting a live issue.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Patch 1.2 article',
        href: official.patch12,
        type: 'official',
        note: 'Live 21 August 2026; checked 30 August 2026.',
      },
    ],
    relatedSlugs: ['patch-1-3', 'tunnels-helicopters', 'release-and-platforms'],
  },
  {
    slug: 'roadmap-2026',
    categorySlug: 'updates',
    title: '2026 Roadmap: Planned Content',
    pageType: 'update',
    tags: ['updates', 'maps', 'weapons'],
    summary:
      'A clearly labelled record of the official 2026 roadmap, kept separate from current launch features.',
    lead: 'The official 2026 roadmap is a plan, not a promise that the content is live. It lists a September Update 1.5 with the M14, SKS, a licensed Bell UH-1 Iroquois “Huey” and radio music; Update 2.0 is planned to add Khe Sanh, more weapons, US & Allies Force, the Stoner 63 and special forces themes.',
    metaTitle: '2026 Roadmap — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'Official HLL: Vietnam 2026 roadmap notes, with planned Update 1.5 and 2.0 content separated from current features.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam roadmap',
      'hll vietnam update 1.5',
      'hll vietnam update 2.0',
      'hll vietnam khe sanh',
    ],
    indexable: false,
    facts: [
      { label: 'Update 1.5', value: 'Planned for September 2026' },
      {
        label: 'Update 1.5 examples',
        value: 'M14, SKS, licensed Huey and radio music',
      },
      {
        label: 'Update 2.0 examples',
        value: 'Khe Sanh, more weapons, US & Allies Force and Stoner 63',
      },
      {
        label: 'Status',
        value: 'Planned; recheck against official release notes',
      },
    ],
    sections: [
      {
        heading: 'Planned in Update 1.5',
        paragraphs: [
          'The roadmap lists a September Update 1.5 with the M14 and SKS, a licensed Bell UH-1 Iroquois “Huey”, and radio music. The roadmap does not supply a guaranteed release day in the material used here.',
        ],
      },
      {
        heading: 'Planned in Update 2.0',
        paragraphs: [
          'The roadmap lists a new Khe Sanh map, more weapons, US & Allies Force, the Stoner 63, and Navy SEALs/Green Berets themes. Battalions are also described as planned work.',
        ],
      },
      {
        heading: 'What this page does not promise',
        paragraphs: [
          'Roadmap items can move, change scope or be replaced. Keep every item labelled planned until an official patch or release announcement confirms it, then move the fact into a current update entry.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official 2026 roadmap',
        href: official.roadmap,
        type: 'official',
        note: sourceNotes.planned,
      },
    ],
    relatedSlugs: ['patch-1-3', 'patch-1-2', 'game-overview'],
  },
] as const;

export const wikiEntries: readonly WikiEntry[] = [
  ...coreWikiEntries,
  ...expansionEntries,
];

const homepageVerifiedPriority = new Map([
  ['patch-1-3', 0],
  ['release-and-platforms', 1],
  ['pc-requirements', 2],
  ['crossplay-and-platforms', 3],
  ['beginner-guide', 4],
  ['game-overview', 5],
  ['launch-maps', 6],
  ['game-modes', 7],
]);

export function findWikiCategory(slug: string) {
  return wikiCategories.find((category) => category.slug === slug);
}

export function findWikiEntry(slug: string) {
  return wikiEntries.find((entry) => entry.slug === slug);
}

export function findWikiEntryByPath(path: string) {
  return wikiEntries.find((entry) => getWikiEntryHref(entry) === path);
}

export function getWikiCategoryHref(category: WikiCategory) {
  return `/wiki/${category.slug}`;
}

export function getWikiEntryHref(entry: WikiEntry) {
  return entry.path ?? `/wiki/${entry.categorySlug}/${entry.slug}`;
}

export function getCategoryEntries(categorySlug: string) {
  const category = findWikiCategory(categorySlug);
  if (!category) return [];
  return category.entrySlugs
    .map((slug) => findWikiEntry(slug))
    .filter((entry): entry is WikiEntry => Boolean(entry));
}

export type WikiSearchFilters = {
  query?: string;
  topic?: TopicTag | '';
  pageType?: WikiEntry['pageType'] | '';
};

function entrySearchText(entry: WikiEntry) {
  const category = findWikiCategory(entry.categorySlug);
  return [
    entry.title,
    entry.summary,
    entry.lead,
    entry.slug,
    entry.keywords.join(' '),
    entry.tags.join(' '),
    category?.title ?? '',
    category?.description ?? '',
  ]
    .join(' ')
    .toLocaleLowerCase();
}

export function searchWikiEntries({
  query = '',
  topic = '',
  pageType = '',
}: WikiSearchFilters = {}) {
  const tokens = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);

  return wikiEntries.filter((entry) => {
    if (topic && !entry.tags.includes(topic)) return false;
    if (pageType && entry.pageType !== pageType) return false;
    if (tokens.length === 0) return true;
    const text = entrySearchText(entry);
    return tokens.every((token) => text.includes(token));
  });
}

export function getLatestEntries(limit = 4) {
  return wikiEntries
    .filter(
      (entry) =>
        entry.evidenceState === 'verified' ||
        entry.evidenceState === 'single-official-source'
    )
    .slice()
    .sort((a, b) => {
      const dateOrder = b.updated.localeCompare(a.updated);
      if (dateOrder !== 0) return dateOrder;

      return (
        (homepageVerifiedPriority.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
        (homepageVerifiedPriority.get(b.slug) ?? Number.MAX_SAFE_INTEGER)
      );
    })
    .slice(0, limit);
}
