import { gameConfig } from '@/config/game';
import {
  categoryDepthSections,
  categoryEditorialSections,
  categoryFinalSections,
  categoryLastSections,
  entryDepthSections,
  entryEditorialSections,
  entryFinalSections,
  entryLastSections,
} from './editorial';
import { expansionEntries } from './entries/expansion';
import type { TopicTag, WikiCategory, WikiEntry, WikiTable } from './types';
import { officialVisuals } from './visuals';

const checked = '2026-08-30';

const official = {
  game: 'https://www.hellletloose.com/game/hll-vietnam',
  launch: 'https://www.hellletloose.com/blog/hllv-out-now',
  maps: 'https://steamcommunity.com/games/3079210/announcements/detail/690891687156777529',
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
    pageHeading: 'Hell Let Loose Vietnam Basics & Beginner Guide',
    description:
      'Hell Let Loose Vietnam basics for a safe first match: game shape, tutorials, squads, objectives and source-backed next steps.',
    metaTitle: 'Hell Let Loose Vietnam Basics | Beginner Guide',
    metaDescription:
      'Start Hell Let Loose Vietnam with the verified game basics, tutorial order, squad flow and first-match decisions.',
    keywords: [
      'hell let loose vietnam basics',
      'hell let loose vietnam beginner guide',
    ],
    indexable: true,
    entrySlugs: ['game-overview', 'beginner-guide', 'join-a-squad'],
  },
  {
    slug: 'battlefield',
    title: 'Battlefield',
    pageHeading: 'Hell Let Loose Vietnam Maps & Game Modes',
    description:
      'Hell Let Loose Vietnam maps and game modes: six launch battlefields, terrain cues, capture rules and current evidence limits.',
    metaTitle: 'Hell Let Loose Vietnam Maps | Modes & Terrain',
    metaDescription:
      'Browse Hell Let Loose Vietnam maps, terrain profiles and official Warfare, Offensive, Conquest and Domination rules.',
    keywords: [
      'hell let loose vietnam maps',
      'hell let loose vietnam game modes',
    ],
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
    pageHeading: 'Hell Let Loose Vietnam Roles & Classes',
    description:
      'Hell Let Loose Vietnam roles, classes, weapons and vehicles, with named roster evidence separated from player examples.',
    metaTitle: 'Hell Let Loose Vietnam Roles & Classes',
    metaDescription:
      'Understand Hell Let Loose Vietnam roles, classes, weapons and vehicles while keeping roster and loadout evidence separate.',
    keywords: [
      'hell let loose vietnam roles',
      'hell let loose vietnam classes',
    ],
    indexable: true,
    entrySlugs: ['roles-and-units', 'weapons', 'vehicles'],
  },
  {
    slug: 'systems',
    title: 'Systems & controls',
    pageHeading: 'Hell Let Loose Vietnam Gameplay Systems',
    description:
      'Hell Let Loose Vietnam gameplay systems: movement, teamplay, tunnels, aircraft, patrol boats and voice chat boundaries.',
    metaTitle: 'Hell Let Loose Vietnam Gameplay Systems',
    metaDescription:
      'Learn Hell Let Loose Vietnam gameplay systems, movement, teamplay, voice chat and aircraft controls with build boundaries.',
    keywords: [
      'hell let loose vietnam gameplay',
      'hell let loose vietnam controls',
    ],
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
    pageHeading: 'Hell Let Loose Vietnam Platforms & Fixes',
    description:
      'Hell Let Loose Vietnam platforms, crossplay, PC requirements, settings, buying checks and crash troubleshooting.',
    metaTitle: 'Hell Let Loose Vietnam Platforms & Fixes',
    metaDescription:
      'Check Hell Let Loose Vietnam release platforms, crossplay, PC requirements, settings, buying details and crash checks.',
    keywords: [
      'hell let loose vietnam platforms',
      'hell let loose vietnam pc requirements',
    ],
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
    pageHeading: 'Hell Let Loose Vietnam Updates & Roadmap',
    description:
      'Hell Let Loose Vietnam updates, patch notes and roadmap items with current, historical and planned content kept separate.',
    metaTitle: 'Hell Let Loose Vietnam Updates & Roadmap',
    metaDescription:
      'Track Hell Let Loose Vietnam patch notes and roadmap plans while separating current changes from historical and future claims.',
    keywords: [
      'hell let loose vietnam updates',
      'hell let loose vietnam roadmap',
    ],
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

const currentRoleLoadoutTable: WikiTable = {
  caption:
    '17 named roles cross-checked against 25 community-documented loadouts · snapshot 24623236 / current game 24741237',
  headers: [
    'Official role',
    'Unit',
    'Loadouts recorded',
    'Named loadout profiles',
  ],
  rows: [
    [
      'Commander (database: Army Commander)',
      'Command',
      '2',
      'NVA Standard Issue; US Standard Issue',
    ],
    [
      'Squad Leader',
      'Infantry',
      '0',
      'No complete loadout record in the snapshot',
    ],
    [
      'Rifleman',
      'Infantry',
      '4',
      'NVA Bayonet; NVA Standard Issue; US Bayonet; US Standard Issue',
    ],
    [
      'Grenadier',
      'Infantry',
      '0',
      'No complete loadout record in the snapshot',
    ],
    [
      'Engineer',
      'Infantry',
      '3',
      'NVA Combat Engineer; NVA Engineer; US Standard Issue',
    ],
    [
      'Medic',
      'Infantry',
      '3',
      'NVA K50M; NVA Standard Issue; US Standard Issue',
    ],
    [
      'Specialist',
      'Infantry',
      '0',
      'No complete loadout record in the snapshot',
    ],
    [
      'Machine Gunner',
      'Infantry',
      '3',
      'NVA Anti-Air; NVA Standard Issue; US Standard Issue',
    ],
    ['Spotter', 'Recon', '2', 'NVA Standard Issue; US Standard Issue'],
    ['Sniper', 'Recon', '2', 'NVA Standard Issue; US Standard Issue'],
    ['Tank Commander', 'Armour', '2', 'NVA Standard Issue; US Standard Issue'],
    ['Crewman', 'Armour', '2', 'NVA Standard Issue; US Standard Issue'],
    [
      'Logistics Officer',
      'Helicopter (US only)',
      '0',
      'No complete loadout record in the snapshot',
    ],
    [
      'Pilot',
      'Helicopter (US only)',
      '0',
      'No complete loadout record in the snapshot',
    ],
    [
      'Observer',
      'Mortar Squad',
      '0',
      'No complete loadout record in the snapshot',
    ],
    ['Support', 'Mortar Squad', '1', 'NVA Mortar Support'],
    ['Gunner', 'Mortar Squad', '1', 'NVA Mortar Gunner'],
  ],
};

const coreWikiEntries: readonly WikiEntry[] = [
  {
    slug: 'game-overview',
    categorySlug: 'basics',
    title: 'Hell Let Loose Vietnam Overview',
    pageType: 'entry',
    tags: ['beginner', 'gameplay', 'platforms'],
    summary:
      'The official shape of HLL: Vietnam: 50v50 battles, NVA versus US, six launch maps, a role count reported differently by two official storefront/product surfaces, and three launch platform families.',
    lead: 'Hell Let Loose: Vietnam is a 50v50 tactical multiplayer game set in the Vietnam War. The official game page reports 19 specialised roles and names infantry, recon, armour, mortar and helicopter units, while the current Steam About section reports 17. Steam lists cross-platform multiplayer and a 13 August 2026 release; those dynamic facts were rechecked on 30 August 2026.',
    metaTitle: 'Hell Let Loose Vietnam Overview | HLL Wiki',
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
    indexable: true,
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
    steps: [
      {
        title: 'Identify your first question',
        action:
          'Decide whether you need a first-match route, a mode rule, a platform answer or a current update before opening a deeper page.',
        successSignal:
          'You can name the decision you need to make next instead of browsing an unbounded wiki.',
      },
      {
        title: 'Use the official boundary',
        action:
          'Treat the match scale, factions, launch platforms and six-map roster as the stable orientation facts, while keeping the role-count discrepancy visible.',
        successSignal:
          'You know which facts are confirmed and which need a current source recheck.',
      },
      {
        title: 'Open the task page',
        action:
          'Follow the related link that matches your need: Beginner Guide for a first match, Game Modes for win conditions, or Crossplay for server access.',
        successSignal:
          'The next page gives you an action or a directly relevant rule.',
      },
      {
        title: 'Recheck version-sensitive details',
        action:
          'Before relying on a control, role roster or balance statement, check the latest official patch or news entry.',
        successSignal:
          'Your decision is tied to a dated source rather than an old general description.',
      },
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
    title: 'Hell Let Loose Vietnam Beginner Guide',
    pageType: 'guide',
    tags: ['beginner', 'gameplay', 'systems'],
    summary:
      'A low-risk first-match route: complete the official tutorial, join a squad, communicate and learn the active objective before taking command roles.',
    lead: 'Start with the official Getting Started tutorial, then join a squad and use communication to learn the active objective. The launch material says the Squad Leader and Commander tutorials are required before those roles, so leave command roles until you have completed their specific tutorials.',
    metaTitle: 'Hell Let Loose Vietnam Beginner Guide | HLL Wiki',
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
    indexable: true,
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
          'After one or two matches, compare the 17 named roles in the current Steam About section. The official game page separately reports 19 specialised roles without naming the extra two; use the named roster for navigation, then use the live role screen for availability, loadout and progression.',
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
    title: 'Hell Let Loose Vietnam Maps',
    pageType: 'entry',
    tags: ['maps', 'gameplay'],
    summary:
      'The six official launch maps, now paired with source-backed terrain cues so you can choose the right map brief before a match.',
    lead: 'The official Launch Maps announcement lists six battlefields and describes their environments: river crossings, jungle, villages, waterways, open ground, airfields and industrial docks. Use the linked map briefs to recognize the terrain problem in front of your squad; do not read an environment summary as a fixed route or guaranteed rotation.',
    metaTitle: 'Hell Let Loose Vietnam Maps | Launch Map Guide',
    metaDescription:
      'All six Hell Let Loose: Vietnam launch maps with official terrain profiles, first-match cues and clear limits around unverified sector tactics.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hell let loose vietnam maps',
      'hll vietnam launch maps',
      'hll vietnam map list',
    ],
    indexable: true,
    facts: [
      { label: 'Launch map count', value: '6' },
      { label: 'Profile source', value: 'Official Launch Maps announcement' },
      {
        label: 'Player use',
        value: 'Identify terrain, mode and objective before choosing a route',
      },
    ],
    steps: [
      {
        title: 'Choose a map from the roster',
        action:
          'Open the map-specific brief that matches the name shown in the server or deployment screen.',
        successSignal:
          'You are reading the correct battlefield profile instead of guessing from a similar map name.',
      },
      {
        title: 'Read the terrain cue',
        action:
          'Use the official environment summary to identify whether the next problem is a crossing, close terrain, open ground, an airfield or an industrial/water space.',
        successSignal:
          'You can ask the squad a concrete terrain question before moving.',
      },
      {
        title: 'Combine terrain with the mode',
        action:
          'Check Game Modes and the active objective before choosing a route; the same environment can demand a different decision in Warfare, Offensive, Conquest or Domination.',
        successSignal:
          'Your map choice and route question match the current win condition.',
      },
      {
        title: 'Record only reusable observations',
        action:
          'If you note a route, sightline or role example, save the build, mode, objective and timestamp before sharing it.',
        successSignal:
          'A later reader can distinguish a player example from an official map fact.',
      },
    ],
    sections: [
      {
        heading: 'Six official map profiles',
        paragraphs: [
          'Each linked page now starts with the terrain and historical context that the official Launch Maps brief supports. The cue is there to improve the first squad question, not to replace the live tactical map.',
        ],
        bullets: [
          'Thanh Hóa Bridge — Nam Ma River crossings, jungle and mountain terrain, villages and trainyards.',
          'Huế Outskirts — mountain terrain, terraced farms, dense jungle, waterways, bases and industrial areas.',
          'Vạn Tường — small villages, dense jungle, river network and bankside foliage.',
          'Quảng Ngãi — flooding, cliffs and caves, bamboo forests, open lowlands and cross-river spaces.',
          'Đắk Tô Airfield — a long airstrip, open surroundings, craters and nearby hilltop fortifications.',
          'Cam Ranh Port — military compounds, industrial docks, dunes, creek beds and a southern waterway.',
        ],
      },
      {
        heading: 'Choose the right map question',
        paragraphs: [
          'Start with the environment the official brief names, then combine it with the current mode and objective. Ask whether the next problem is a crossing, close terrain, open ground, a defended base or a dock/water route. This is more useful than choosing a class or route from the map name alone.',
        ],
        bullets: [
          'Open the map-specific page before the match if you need the historical and terrain context.',
          'Use the in-game tactical map and squad call to decide the actual route.',
          'Record build, mode and objective before treating a route or strongpoint observation as reusable.',
        ],
      },
      {
        heading: 'What remains unverified',
        paragraphs: [
          'The official map brief does not establish a universal sector order, best class, vehicle lane, cover pattern or capture route. Those claims need direct current-build evidence and must remain separate from the terrain profile.',
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
        label: 'Official Launch Maps announcement',
        href: official.maps,
        type: 'official',
        note: 'Checked 2026-08-30 for the six-map roster and the official terrain descriptions.',
      },
    ],
    relatedSlugs: ['game-modes', 'game-overview', 'beginner-guide'],
  },
  {
    slug: 'game-modes',
    categorySlug: 'battlefield',
    title: 'Hell Let Loose Vietnam Game Modes',
    pageType: 'entry',
    tags: ['gameplay', 'systems'],
    summary:
      'The four modes documented by the official launch material: Warfare, Offensive, Conquest and Domination.',
    lead: 'The official mode guide documents four launch modes. Warfare and Domination use Hard Cap and Soft Cap capture areas, Offensive limits capture contribution to the Hard Cap, and Conquest introduces a Morale resource. The current landing page’s separate six-mode marketing count is kept as a recheck note rather than treated as a launch roster.',
    metaTitle: 'Hell Let Loose Vietnam Game Modes | HLL Wiki',
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
    indexable: true,
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
    steps: [
      {
        title: 'Read the mode before moving',
        action:
          'Confirm Warfare, Offensive, Conquest or Domination from the current server or loading context before applying a mode rule.',
        successSignal: 'You know which win condition is active.',
      },
      {
        title: 'Name the immediate win condition',
        action:
          'Translate the rule into one squad question: which sector, central point, enemy HQ or Morale decision matters right now?',
        successSignal:
          'Your squad can explain what must be captured or protected next.',
      },
      {
        title: 'Use the correct capture rule',
        action:
          'Remember that Warfare and Domination use their documented cap structures, Offensive focuses contribution inside the Hard Cap, and Conquest adds Morale to the capture decision.',
        successSignal:
          'You are not carrying a Warfare capture assumption into another mode.',
      },
      {
        title: 'Check the version boundary',
        action:
          'Recheck the official mode guide if the UI or mode list changes; the landing page and launch article currently expose a count discrepancy.',
        successSignal:
          'Your mode note has a dated source and does not guess the missing labels.',
      },
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
    title: 'Roles & Units: Current 17-Role Roster',
    pageType: 'entry',
    tags: ['roles', 'beginner', 'gameplay'],
    summary:
      'The current Steam About section names 17 roles across six units, cross-checked against 25 community-documented loadout profiles; the official landing page separately advertises 19.',
    lead: 'The current Steam About section provides a named 17-role roster across Command, Infantry, Recon, Armour, Helicopter and Mortar Squad. A current-build community database cross-check records 25 named loadout profiles, while the official game landing page separately says 19 specialised roles without naming the additional two. This page publishes both boundaries without inventing a reconciliation.',
    metaTitle: 'Roles & Units: 17-Role Roster — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'The current named 17-role roster for Hell Let Loose: Vietnam, grouped by unit, with the official 19-versus-17 count discrepancy kept explicit.',
    status: gameConfig.status,
    evidenceState: 'community-lead',
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
        value: '17 named in the current Steam About section',
      },
      {
        label: 'Named units',
        value: 'Command, Infantry, Recon, Armour, Helicopter, Mortar Squad',
      },
      {
        label: 'Official landing-page count',
        value: '19 specialised roles; two additional names are not published',
      },
      {
        label: 'Loadout cross-check',
        value: '25 named profiles across the 17-role current-build snapshot',
      },
    ],
    steps: [
      {
        title: 'Choose a battlefield job',
        action:
          'Start with the unit group that matches the task you can explain to the squad: command, infantry, recon, armour, helicopter or mortar support.',
        successSignal:
          'You can identify the unit group and the named role you want to try.',
      },
      {
        title: 'Complete the relevant tutorial',
        action:
          'Finish Getting Started first, then complete the specific Squad Leader or Commander tutorial before selecting either command role.',
        successSignal:
          'The current game allows the role and you understand its basic responsibility.',
      },
      {
        title: 'Confirm the current role screen',
        action:
          'Use the current Barracks or deployment UI to verify the role name, faction, loadout and progression state for this build; this table is a name index, not a loadout promise.',
        successSignal:
          'Your selected role matches the current UI and the table is not being used to infer availability or equipment.',
      },
      {
        title: 'Record the role context',
        action:
          'When testing a role, record faction, mode, platform and build beside the observation so later patches do not silently rewrite the roster context.',
        successSignal:
          'A player observation can be checked against the same role and build.',
      },
      {
        title: 'Keep the count discrepancy visible',
        action:
          'If you share this roster, say that the 17 names come from the current Steam About section while the official landing page still advertises 19 without naming two more roles.',
        successSignal:
          'Readers can distinguish the named roster from the unresolved headline count.',
      },
    ],
    sections: [
      {
        heading: 'Current named roster',
        paragraphs: [
          'The following 17 names are transcribed from the current Steam About section and grouped exactly by its six unit headings. The list identifies roles; it does not by itself establish faction availability, unlock level, loadout or tactical responsibility.',
        ],
        tables: [
          {
            caption: '17 names in the current Steam About section',
            headers: ['Unit', 'Count', 'Named roles'],
            rows: [
              ['Command', '1', 'Commander'],
              [
                'Infantry',
                '7',
                'Squad Leader · Rifleman · Grenadier · Engineer · Medic · Specialist · Machine Gunner',
              ],
              ['Recon', '2', 'Spotter · Sniper'],
              ['Armour', '2', 'Tank Commander · Crewman'],
              ['Helicopter (US only)', '2', 'Logistics Officer · Pilot'],
              ['Mortar Squad', '3', 'Observer · Support · Gunner'],
            ],
          },
        ],
      },
      {
        heading: 'Current-build loadout cross-check',
        paragraphs: [
          'The table below cross-checks the 17 official role names against the public Hell Let Loose Vietnam Database snapshot. It records 25 named loadout profiles in total. A zero means that the database does not expose a complete loadout record for that role in this snapshot; it does not mean the role is unavailable or has no equipment in the live client.',
          'The database labels the official Commander role as Army Commander and expands the Mortar Squad roles as Mortar Observer, Mortar Support and Mortar Gunner. Those labels are mapped here for navigation only. Verify the current faction, loadout and progression screen in-game before treating any equipment as universal.',
        ],
        tables: [currentRoleLoadoutTable],
      },
      {
        heading: 'How to use the roster',
        paragraphs: [
          'Start with a non-command role that lets you stay with your squad and learn the active objective. Use the current role screen for availability and equipment, then record what the role actually exposed in your platform and build. The names above are a reliable navigation index, not a substitute for the in-game tutorial or loadout screen.',
        ],
        bullets: [
          'Leave Commander and Squad Leader until the required tutorials are complete.',
          'Use the unit heading to find a role family before comparing player advice.',
          'Record a role observation with faction, mode, platform and build.',
        ],
      },
      {
        heading: '19 versus 17: unresolved official count',
        paragraphs: [
          'The official game landing page currently advertises 19 specialised roles, while the current Steam About section names 17. The official page does not publish the two additional names. This page therefore treats the 17 named roles as complete for the source it quotes, but leaves the cross-source count reconciliation open.',
        ],
      },
      {
        heading: 'Evidence boundary',
        paragraphs: [
          'Role names and unit grouping are source-backed. The loadout table is a community-extracted current-build reference, not an official role matrix: its snapshot is version-bound, incomplete for six roles and uses database labels that do not always match the Steam headings. Per-role responsibilities, faction restrictions beyond the Steam heading, unlock paths and progression values still require a current client.',
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
        label: 'Official Steam store listing',
        href: official.steam,
        type: 'official',
        note: 'Current About section checked 2026-08-30; names 17 roles across six unit headings. It does not reconcile the official landing page headline of 19.',
      },
      {
        label: 'Official developer Q&A #2',
        href: official.qna2,
        type: 'official',
        note: 'Used only for broader asymmetry and combined-arms context; it is not used to invent additional role names.',
      },
      {
        label: 'Hell Let Loose Vietnam Database — roles',
        href: 'https://hellletloosevietnamdb.com/database/roles',
        type: 'reference',
        note: 'Community-extracted current-build role index checked 2026-08-30; use as a cross-check, not official roster proof.',
      },
      {
        label: 'Hell Let Loose Vietnam Database — loadouts',
        href: 'https://hellletloosevietnamdb.com/database/loadouts',
        type: 'reference',
        note: '25 named loadout profiles in a public snapshot checked 2026-08-30; missing records remain blank and official/in-client verification takes precedence.',
      },
      {
        label: 'Hell Let Loose Vietnam Database — data versions',
        href: 'https://hellletloosevietnamdb.com/database/versions',
        type: 'reference',
        note: 'Lists current game Build 24741237 and gameplay snapshot Build 24623236; checked 2026-08-30.',
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
    title: 'Hell Let Loose Vietnam Tunnels, Helicopters & Patrol Boats',
    pageType: 'entry',
    tags: ['systems', 'vehicles', 'gameplay'],
    summary:
      'The battlefield systems the official page highlights, plus the current NVA tunnel rule recorded in Patch 1.3.',
    lead: 'Official material confirms tunnel networks, helicopters, air support and supply drops, and patrol boats as part of the battlefield toolkit. Patch 1.3, rechecked on 30 August 2026, doubled the NVA tunnel-placement cooldown from five to ten minutes and blocks travel to a hot tunnel destination.',
    metaTitle: 'Hell Let Loose Vietnam Tunnels & Helicopters',
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
    indexable: true,
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
    steps: [
      {
        title: 'Identify the system in play',
        action:
          'Decide whether your immediate problem is a tunnel, helicopter, supply drop, air support or patrol boat before choosing a response.',
        successSignal:
          'The squad call names one system and one battlefield purpose.',
      },
      {
        title: 'Check tunnel heat',
        action:
          'After Patch 1.3, remember that NVA tunnel placement cooldown is ten minutes and travel to a hot destination is blocked.',
        successSignal:
          'You do not mistake a hot tunnel for a broken spawn or keep retrying the same blocked destination.',
        failureCheck:
          'If the behavior differs, record the patch and platform before assuming the rule changed again.',
      },
      {
        title: 'Coordinate the route',
        action:
          'For a helicopter, boat or supply move, agree on destination, objective and communication channel before leaving the current position.',
        successSignal:
          'The crew and squad share one destination and next action.',
      },
      {
        title: 'Recheck the latest patch',
        action:
          'Review current official notes before relying on a tunnel, vehicle or movement behavior as a stable rule.',
        successSignal:
          'Your system note has a visible date and build boundary.',
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
    title: 'Hell Let Loose Vietnam Movement & Teamplay',
    pageType: 'entry',
    tags: ['gameplay', 'systems', 'beginner'],
    summary:
      'A source-backed checklist for the movement features and communication habits that shape a first match.',
    lead: 'The official game page highlights swimming, climbing, fast crawling and dragging teammates. Official launch tips put communication, backup Garrisons, defense and hunting NVA tunnels at the centre of teamplay. Use those as habits, not as a substitute for a verified control guide.',
    metaTitle: 'Hell Let Loose Vietnam Movement & Teamplay',
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
    indexable: true,
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
    steps: [
      {
        title: 'Call before leaving the squad',
        action:
          'State your position, direction and intent before moving away from the group or objective.',
        successSignal:
          'A squad member can act on your call without asking for the whole situation again.',
      },
      {
        title: 'Use the terrain feature deliberately',
        action:
          'When the route requires swimming, climbing, fast crawling or dragging a teammate, confirm the current control prompt and the destination first.',
        successSignal:
          'The movement action solves a route or rescue problem instead of becoming a detour.',
      },
      {
        title: 'Protect the objective and spawns',
        action:
          'Keep the active objective, defense and the team’s Garrison network in view before chasing a distant fight.',
        successSignal:
          'Your movement supports the squad’s current win condition.',
      },
      {
        title: 'Verify controls in the current build',
        action:
          'Open the in-game settings when an exact keybind matters; do not turn a community control chart into a universal rule.',
        successSignal:
          'The action works on your platform and build, or the mismatch is recorded for troubleshooting.',
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
          'The Helicopter Controls guide now records one timestamped PC pilot profile from a current release-adjacent community video. It is useful as a starting point for that creator’s layout, not a universal default. Infantry, console and later-build controls still need confirmation in the current in-game settings before becoming exact instructions.',
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
    relatedSlugs: [
      'beginner-guide',
      'tunnels-helicopters',
      'helicopter-controls',
      'game-modes',
    ],
  },
  {
    slug: 'release-and-platforms',
    categorySlug: 'access',
    title: 'Hell Let Loose Vietnam Release Date & Platforms',
    pageType: 'access',
    tags: ['platforms', 'buying'],
    summary:
      'The official launch date and supported launch platform families for Hell Let Loose: Vietnam.',
    lead: 'The official launch article says Hell Let Loose: Vietnam is live on PC, PlayStation 5 and Xbox Series X|S. The official Steam listing gives 13 August 2026 as the release date. Prices, subscriptions and regional availability are intentionally excluded because they change by storefront and date.',
    metaTitle: 'Hell Let Loose Vietnam Release Date & Platforms',
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
    indexable: true,
    facts: [
      { label: 'Release date', value: '13 August 2026' },
      { label: 'PC', value: 'Available at launch' },
      { label: 'Console', value: 'PlayStation 5 and Xbox Series X|S' },
      {
        label: 'Price',
        value: 'Not recorded here; check the current official storefront',
      },
    ],
    steps: [
      {
        title: 'Start with the device',
        action:
          'Choose PC, PlayStation 5 or Xbox Series X|S before opening a storefront or comparing a friend’s setup.',
        successSignal:
          'The purchase question is tied to the device you will actually use.',
      },
      {
        title: 'Verify the live listing',
        action:
          'Use the official store or launch information to confirm the release and platform entry instead of relying on a third-party date.',
        successSignal:
          'The listing and launch platform agree on the current official pages.',
      },
      {
        title: 'Keep price questions live',
        action:
          'Check regional price, discount, subscription access and edition contents at the storefront because this page does not freeze dynamic values.',
        successSignal: 'The purchase decision uses a current regional value.',
      },
      {
        title: 'Move to the right follow-up',
        action:
          'Open Crossplay for server access, PC Requirements for hardware or Editions and Buying for the checkout checklist.',
        successSignal:
          'The next page answers the remaining purchase or access question.',
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
    title: 'Hell Let Loose Vietnam Crossplay & Platforms',
    pageType: 'access',
    tags: ['platforms', 'gameplay'],
    summary:
      'What the official sources confirm about cross-platform multiplayer and server platform labels.',
    lead: 'The official Steam listing labels HLL: Vietnam as Cross-Platform Multiplayer. The official crossplay announcement says servers are tagged cross-platform, PC-only or console-only, and server owners can control which platforms are allowed. This does not verify cross-progression, shared purchases or every party-invite path.',
    metaTitle: 'Hell Let Loose Vietnam Crossplay Guide',
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
    indexable: true,
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
    steps: [
      {
        title: 'Confirm both platforms',
        action:
          'Write down the platform you use and the platform your friend uses before checking server access.',
        successSignal:
          'You know whether the pair needs cross-platform or same-platform access.',
      },
      {
        title: 'Read the server label',
        action:
          'Use the current Server Browser label to distinguish cross-platform, PC-only and console-only servers.',
        successSignal:
          'You can explain a failed join as a platform filter or another issue.',
        failureCheck:
          'If the label or filter is missing, record the platform and build before assuming crossplay is unavailable.',
      },
      {
        title: 'Try the least ambiguous server',
        action:
          'When testing a friend connection, start with a server whose platform access is visible and whose available space is clear.',
        successSignal:
          'The test isolates platform access from capacity or invite problems.',
      },
      {
        title: 'Do not infer account sharing',
        action:
          'Treat cross-progression, cross-save and shared purchases as separate questions until an official source confirms them.',
        successSignal:
          'The answer covers crossplay only and does not promise unverified entitlements.',
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
    title: 'Hell Let Loose Vietnam PC Requirements',
    pageType: 'access',
    tags: ['platforms', 'technical'],
    summary:
      'The minimum and recommended PC specifications published on the official HLL: Vietnam requirements page.',
    lead: 'The official requirements page lists Windows 11 64-bit, DirectX 12, broadband internet and 52 GB of storage for both tiers. Minimum hardware is an i5-6600 or Ryzen 3 1300X with 12 GB RAM and a GTX 960 4 GB or R9 380 4 GB; recommended is an i5-8400 or Ryzen 5 2600X with 16 GB RAM and a GTX 1060 6 GB or RX 590 8 GB.',
    metaTitle: 'Hell Let Loose Vietnam PC Requirements',
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
    indexable: true,
    facts: [
      { label: 'Operating system', value: 'Windows 11 64-bit' },
      { label: 'API', value: 'DirectX 12' },
      { label: 'Storage', value: '52 GB available space' },
      { label: 'Internet', value: 'Broadband internet connection' },
    ],
    steps: [
      {
        title: 'Compare the minimum tier',
        action:
          'Check Windows 11 64-bit, DirectX 12, broadband internet, 52 GB storage, CPU, RAM and GPU against the official minimum list.',
        successSignal:
          'You know whether the machine meets the published minimum tier.',
      },
      {
        title: 'Compare the recommended tier',
        action:
          'Use the recommended CPU, 16 GB RAM and GPU tier when deciding whether the machine has more headroom for a stable starting point.',
        successSignal:
          'You have a minimum-versus-recommended comparison, not a vague “can it run” guess.',
      },
      {
        title: 'Test the actual scene',
        action:
          'After installation, use the Best Settings process to test a repeatable scene and record frame pacing, visibility and build.',
        successSignal:
          'The published requirement is supplemented by an observed result on your hardware.',
      },
      {
        title: 'Recheck before upgrading',
        action:
          'Read the current official requirements page again before buying hardware because requirements and optimization can change.',
        successSignal:
          'The purchase decision uses the latest available specification.',
      },
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
    title: 'Hell Let Loose Vietnam Patch 1.3 Notes',
    pageType: 'update',
    tags: ['updates', 'systems'],
    summary:
      'The 28 August 2026 Patch 1.3 highlights: tunnel changes, tank-driver handling and over 100 fixes across the six launch maps.',
    lead: 'Patch 1.3 is the current official update rechecked on 30 August 2026. Safe highlights include the NVA tunnel cooldown change from five to ten minutes, the hot-tunnel travel restriction, tank drivers changing gears without throttle, and more than 100 fixes across the six launch maps.',
    metaTitle: 'Hell Let Loose Vietnam Patch 1.3 Notes',
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
    indexable: true,
    facts: [
      { label: 'Live date', value: '28 August 2026' },
      { label: 'NVA tunnel cooldown', value: 'Doubled from 5 to 10 minutes' },
      {
        label: 'Hot tunnel',
        value: 'Cannot travel to its destination while hot',
      },
      { label: 'Map fixes', value: 'Over 100 fixes across six launch maps' },
    ],
    steps: [
      {
        title: 'Confirm the patch boundary',
        action:
          'Check that your installed build is on or after 28 August 2026 before comparing the tunnel, tank or map behavior below.',
        successSignal:
          'The current build matches the patch note you are using.',
      },
      {
        title: 'Apply the tunnel change',
        action:
          'For NVA tunnels, expect a ten-minute placement cooldown and no travel to a destination while the tunnel is hot.',
        successSignal:
          'A blocked hot destination or slower replacement is understood as the documented patch behavior.',
      },
      {
        title: 'Recheck vehicle and control inputs',
        action:
          'Tank drivers can change gears without throttle; controller users should recheck helicopter inversion, Layout B and the current displayed assignments.',
        successSignal:
          'The vehicle input matches the current settings and patch behavior on your platform.',
      },
      {
        title: 'Use the patch as a troubleshooting index',
        action:
          'If a problem concerns tunnels, audio, VOIP, tutorials, UI, servers or map placement, scan the official changelog before changing local settings.',
        successSignal:
          'You can tell whether the issue is listed, fixed or still outside the official changelog.',
      },
      {
        title: 'Recheck after the next update',
        action:
          'Move current mechanics into the newest patch entry when a later patch changes them; do not keep using a historical note as a universal rule.',
        successSignal: 'Your troubleshooting note has a current checked date.',
      },
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
    title: 'Hell Let Loose Vietnam Patch 1.2 Notes',
    pageType: 'update',
    tags: ['updates', 'systems'],
    summary:
      'The official 21 August 2026 patch record: 500+ fixes and improvements across stability, maps, audio, UI, vehicles and gameplay.',
    lead: 'Patch 1.2 went live on 21 August 2026 and the official notes describe more than 500 fixes and improvements. The update covered stability, maps, audio, UI, vehicles, gameplay and keybinds, including a fix for an NVA tunnel server crash.',
    metaTitle: 'Hell Let Loose Vietnam Patch 1.2 Notes',
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
    indexable: true,
    facts: [
      { label: 'Live date', value: '21 August 2026' },
      { label: 'Fix scope', value: '500+ fixes and improvements' },
      { label: 'Named tunnel fix', value: 'Fixed an NVA tunnel server crash' },
      {
        label: 'Areas touched',
        value: 'Stability, maps, audio, UI, vehicles, gameplay and keybinds',
      },
    ],
    steps: [
      {
        title: 'Treat Patch 1.2 as history',
        action:
          'Use the 21 August 2026 date to explain an older report, not to decide whether a current bug is fixed.',
        successSignal: 'The report is tied to the correct maintenance window.',
      },
      {
        title: 'Check Patch 1.3 next',
        action:
          'For a live tunnel, map, audio, control or stability issue, open the newer Patch 1.3 entry and the official news feed first.',
        successSignal:
          'You are consulting the newest available official correction.',
      },
      {
        title: 'Separate fixed from reported',
        action:
          'Read whether the official note says a problem was fixed, improved or merely under investigation before telling another player it is resolved.',
        successSignal:
          'Your advice uses the same status language as the source.',
      },
      {
        title: 'Keep the dated note',
        action:
          'Record the build and date whenever you compare a community observation with this historical patch record.',
        successSignal:
          'The old report cannot be mistaken for a current universal rule.',
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
    title: 'Hell Let Loose Vietnam 2026 Roadmap',
    pageType: 'update',
    tags: ['updates', 'maps', 'weapons'],
    summary:
      'A clearly labelled record of the official 2026 roadmap, kept separate from current launch features.',
    lead: 'The official 2026 roadmap is a plan, not a promise that the content is live. It lists a September Update 1.5 with the M14, SKS, a licensed Bell UH-1 Iroquois “Huey” and radio music; Update 2.0 is planned to add Khe Sanh, more weapons, US & Allies Force, the Stoner 63 and special forces themes.',
    metaTitle: 'Hell Let Loose Vietnam 2026 Roadmap',
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
    indexable: true,
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
    steps: [
      {
        title: 'Separate planned from live',
        action:
          'Treat every item on this page as planned until an official patch or release announcement confirms that it is playable.',
        successSignal: 'A roadmap item is not presented as a current feature.',
      },
      {
        title: 'Match the item to the update',
        action:
          'Use Update 1.5 for the M14, SKS, licensed Huey and radio plans; use Update 2.0 for Khe Sanh and the listed US & Allies additions.',
        successSignal: 'You know which roadmap window a question belongs to.',
      },
      {
        title: 'Check the newest release note',
        action:
          'Before writing a loadout, vehicle or map guide around a roadmap item, confirm whether the official live notes changed its status or scope.',
        successSignal:
          'Your guide does not build current advice on an unreleased item.',
      },
      {
        title: 'Keep future content visibly dated',
        action:
          'Retain the announcement date and the planned label until the publisher confirms a live build.',
        successSignal:
          'Readers can distinguish a promise, a target and a released feature.',
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

const allWikiEntries: readonly WikiEntry[] = [
  ...coreWikiEntries,
  ...expansionEntries,
];

export const wikiEntries: readonly WikiEntry[] = allWikiEntries.map(
  (entry) => ({
    ...entry,
    sections: [
      ...entry.sections,
      ...(entryEditorialSections[entry.slug] ?? []),
      ...(entryDepthSections[entry.slug] ?? []),
      ...(entryFinalSections[entry.slug] ?? []),
      ...(entryLastSections[entry.slug] ?? []),
    ],
  })
);

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

export function getCategoryEditorialSections(categorySlug: string) {
  return [
    ...(categoryEditorialSections[categorySlug] ?? []),
    ...(categoryDepthSections[categorySlug] ?? []),
    ...(categoryFinalSections[categorySlug] ?? []),
    ...(categoryLastSections[categorySlug] ?? []),
  ];
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
