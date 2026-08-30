import type { WikiEntry, WikiSource, WikiTable } from '../types';
import { officialVisuals } from '../visuals';

const checked = '2026-08-30';

const official = {
  game: 'https://www.hellletloose.com/game/hll-vietnam',
  launch: 'https://www.hellletloose.com/blog/hllv-out-now',
  maps: 'https://steamcommunity.com/games/3079210/announcements/detail/690891687156777529',
  crossplay: 'https://www.hellletloose.com/blog/beta-testing-and-crossplay',
  pcRequirements: 'https://www.hellletloose.com/pc-requirements',
  patch13: 'https://www.hellletloose.com/blog/hllv-patch-1-3',
  roadmap: 'https://www.hellletloose.com/blog/hllv-2026-roadmap',
  news: 'https://steamcommunity.com/app/3079210/allnews/',
  qna2: 'https://www.hellletloose.com/blog/dev-qna-2',
  steam: 'https://store.steampowered.com/app/3079210/Hell_Let_Loose_Vietnam/',
} as const;

const officialNote =
  'Official source checked 2026-08-30; recheck after a new patch or platform change.';

const launchNote =
  'Official launch material checked 2026-08-30; map-specific tactics are not inferred beyond the published terrain profile.';

const guideSteps = {
  join: [
    {
      title: 'Open the server browser',
      action:
        'Choose a live server and read its platform label before joining. Prefer a populated server where squad communication is active.',
      successSignal:
        'You can see the server name, current map or mode label and its platform access before joining.',
      failureCheck:
        'If the server does not appear, check filters and platform access before assuming the account or connection is broken.',
    },
    {
      title: 'Choose an open squad',
      action:
        'Select a squad with an open slot and a role you can understand. Leave Squad Leader and Commander until their specific tutorials are complete.',
      successSignal:
        'Your player is attached to a squad and the squad HUD identifies a leader or active members.',
      failureCheck:
        'If every squad is locked or full, refresh the list or join another server rather than creating a command role by default.',
    },
    {
      title: 'Say what you are doing',
      action:
        'Use the available squad voice channel or text channel to acknowledge the objective and state your first move.',
      successSignal:
        'A squad member can tell where you are headed and why without needing a private explanation.',
      failureCheck:
        'If nobody hears you, open the audio and input settings; do not assume a universal push-to-talk key.',
    },
    {
      title: 'Stay with the objective',
      action:
        'Follow the squad toward the active objective, check the tactical map when you lose the group and return to the objective when the fight shifts.',
      successSignal:
        'You remain connected to the squad and can identify the active objective at the end of the first engagement.',
    },
  ],
  voice: [
    {
      title: 'Select the correct input device',
      action:
        'Open the current audio settings and choose the microphone you actually use. Confirm the input meter reacts to your voice.',
      successSignal:
        'The selected microphone shows input activity without changing the device outside the game.',
      failureCheck:
        'If the meter is silent, check the operating-system permission and the input device before changing in-game keybinds.',
    },
    {
      title: 'Test the channel in a safe moment',
      action:
        'Join a squad and send a short test message before the first push. Keep the message about position, objective or request for help.',
      successSignal:
        'At least one squad member acknowledges the message or the voice indicator shows that the transmission is active.',
      failureCheck:
        'If squadmates cannot hear you, verify the selected channel and mute state in the current UI.',
    },
    {
      title: 'Use short battlefield calls',
      action:
        'Report location, direction and intent in that order. Avoid filling the channel with narration during an active engagement.',
      successSignal:
        'A squad member can act on the call without asking you to repeat the entire situation.',
    },
    {
      title: 'Recheck after a patch or device change',
      action:
        'Repeat the input test after a new patch, headset change or platform switch because exact audio labels and controls are build-sensitive.',
      successSignal:
        'Your microphone, channel and output device still work in the current build.',
    },
  ],
  helicopter: [
    {
      title: 'Complete the tutorial boundary first',
      action:
        'Use the current tutorial and settings screens to learn the aircraft controls before taking a live helicopter role.',
      successSignal:
        'You can identify the aircraft control section and explain which input changes altitude, direction or view in the current build.',
      failureCheck:
        'If a control is missing, check the platform-specific bindings rather than copying a keyboard chart from another build.',
    },
    {
      title: 'Read the landing area',
      action:
        'Before lifting off, confirm the squad request, destination and available landing space. Announce the route to the squad.',
      successSignal:
        'The squad knows the destination and you have a clear reason for the flight.',
    },
    {
      title: 'Keep the first flight simple',
      action:
        'Fly one short transport route and prioritize a safe arrival over speed or low-altitude stunts.',
      successSignal:
        'The squad reaches the requested area and the aircraft remains available for the next task.',
      failureCheck:
        'If the route becomes unclear, return to the last confirmed call instead of improvising a new landing point.',
    },
    {
      title: 'Review the current patch note',
      action:
        'Check the latest official patch notes for aircraft, movement or keybind changes before relying on an older guide.',
      successSignal:
        'Any aircraft advice you use has a visible build or checked-date boundary.',
    },
  ],
  settings: [
    {
      title: 'Start from the official requirements',
      action:
        'Compare your operating system, CPU, memory, GPU, DirectX version and storage with the official requirements page.',
      successSignal:
        'You know whether your machine meets the published minimum or recommended tier.',
      failureCheck:
        'If a requirement is unclear, use the official page as the current source instead of a community preset.',
    },
    {
      title: 'Change one setting group at a time',
      action:
        'Begin with display mode, resolution and frame limit, then make a small graphics change and test in the same type of scene.',
      successSignal:
        'You can identify which single change affected readability, frame pacing or input feel.',
    },
    {
      title: 'Prioritize visibility and stability',
      action:
        'Keep the image readable and the frame pacing stable before chasing a higher preset. Record the build and hardware when comparing results.',
      successSignal:
        'A repeatable test scene feels stable and important silhouettes remain readable at normal combat distance.',
    },
    {
      title: 'Recheck after updates',
      action:
        'Read the newest official update notes after a major patch because optimization and graphics behavior can move between builds.',
      successSignal:
        'Your settings note contains a date and does not present a personal preset as a universal best setting.',
    },
  ],
  crash: [
    {
      title: 'Record the failure boundary',
      action:
        'Write down whether the crash happens at launch, during loading, when joining a server or during a match, plus the current build.',
      successSignal:
        'You have a repeatable trigger and a timestamp instead of a generic “the game crashes” report.',
    },
    {
      title: 'Check official update notes',
      action:
        'Search the latest official patch and news entries for a matching stability, map, audio, UI or server issue.',
      successSignal:
        'You can tell whether the issue is already listed, fixed or still unconfirmed by the publisher.',
      failureCheck:
        'If the official notes do not mention it, keep the cause marked pending rather than assigning blame to one setting.',
    },
    {
      title: 'Try one documented AMD check',
      action:
        'If you use an AMD GPU, test one official temporary workaround at a time: Patch 1.3 notes say disabling gore may reduce crash frequency, while the launch guidance also lists the documented launch options, High graphics and disabling the AMD in-game overlay. Results vary by system.',
      successSignal:
        'You know whether one reversible change altered the same crash trigger.',
      failureCheck:
        'If the crash continues, restore the prior setting, keep the evidence and do not present the workaround as a universal fix.',
    },
    {
      title: 'Apply reversible local checks',
      action:
        'Verify files through the platform launcher, close overlays and return to a known-good display or graphics setting one change at a time.',
      successSignal:
        'The same trigger no longer reproduces or the changed variable is isolated.',
    },
    {
      title: 'Escalate with evidence',
      action:
        'Keep the build, hardware, reproduction steps and official patch references together before asking the community or support for help.',
      successSignal:
        'Another person can reproduce or evaluate the issue from your note without guessing the context.',
    },
  ],
} as const;

const mapEntries = [
  {
    slug: 'thanh-hoa-bridge',
    title: 'Thanh Hóa Bridge',
    history: 'Operation Rolling Thunder (1965–1968)',
    terrain:
      'Nam Ma River crossings, jungle and mountain terrain, villages and trainyards',
    matchCue:
      'which crossing or cross-river movement your squad is attempting, especially before the fight tightens near villages and trainyards',
    keywords: [
      'hll vietnam thanh hoa bridge',
      'hell let loose vietnam thanh hoa bridge map',
    ],
  },
  {
    slug: 'hue-outskirts',
    title: 'Huế Outskirts',
    history: 'the Tet Offensive (January 1968)',
    terrain:
      'mountain terrain, terraced farms, dense jungle, connected waterways, defended bases and concrete industrial areas',
    matchCue:
      'whether your squad is moving through vertical close terrain or toward a defended base or industrial space',
    keywords: [
      'hll vietnam hue outskirts',
      'hell let loose vietnam hue outskirts map',
    ],
  },
  {
    slug: 'van-tuong',
    title: 'Vạn Tường',
    history: 'Operation Starlite (August 1965)',
    terrain:
      'small villages, dense jungle, a broad river network and bankside foliage',
    matchCue:
      'whether the current objective makes boats or water movement relevant; confirm availability from the live map and squad call',
    keywords: ['hll vietnam van tuong', 'hell let loose vietnam van tuong map'],
  },
  {
    slug: 'quang-ngai',
    title: 'Quảng Ngãi',
    history: 'Operation Piranha (September 1965)',
    terrain:
      'monsoon flooding, rocky cliffs and caves, bamboo forests, open lowlands and cross-river spaces',
    matchCue:
      'where the terrain switches from tight jungle to exposed lowland or vertical cliff before your squad crosses or changes pace',
    keywords: [
      'hll vietnam quang ngai',
      'hell let loose vietnam quang ngai map',
    ],
  },
  {
    slug: 'dak-to-airfield',
    title: 'Đắk Tô Airfield',
    history: 'the Battle of Đắk Tô (November 1967)',
    terrain:
      'a long airstrip, open surroundings, impact craters, destroyed vehicles and nearby hilltop fortifications',
    matchCue:
      'how much open ground separates your squad from the objective before asking for cover, vehicle or reconnaissance information',
    keywords: [
      'hll vietnam dak to airfield',
      'hell let loose vietnam dak to airfield map',
    ],
  },
  {
    slug: 'cam-ranh-port',
    title: 'Cam Ranh Port',
    history: 'the Cam Ranh Bay Logistics Facility (1969)',
    terrain:
      'militarised compounds, industrial docks, DeLong Piers, dry creek beds, rolling dunes and a southern waterway',
    matchCue:
      'whether the fight is in dense dock or compound space, or in the open dunes, creek beds and waterway',
    keywords: [
      'hll vietnam cam ranh port',
      'hell let loose vietnam cam ranh port map',
    ],
  },
] as const;

type MapFieldEvidence = {
  heading: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
  source: WikiSource;
};

const mapFieldEvidence: Record<string, MapFieldEvidence> = {
  'thanh-hoa-bridge': {
    heading: 'Reviewer field observation (not a fixed route)',
    paragraphs: [
      'A GamesRadar reviewer’s first match on Thanh Hóa Bridge describes the bridge as the central focal point. The same account says NVA jungle trails and tunnels support pushes from different sides, while US approaches benefit from cover toward the bridge and can use air support if NVA hold high ground.',
      'This is one reviewer’s match observation, not a guaranteed sector order, strongpoint rotation or “best route”. Confirm the current mode and objective on the tactical map before applying it.',
    ],
    bullets: [
      'Bridge: exposed focal crossing and an obvious place to ask where the objective is pulling the squad.',
      'NVA example: side approaches through jungle trails and tunnel-supported movement.',
      'US example: cover toward the bridge and possible air support when the opposing side holds high ground.',
      'Boundary: review context only; no fixed sector, strongpoint or universal route is claimed.',
    ],
    source: {
      label: 'GamesRadar+ Thanh Hóa Bridge field feature',
      href: 'https://www.gamesradar.com/games/fps/if-you-like-battlefield-at-its-most-chaotic-i-promise-youll-love-digging-tunnels-and-flying-choppers-in-hell-let-loose-vietnam/',
      type: 'reference',
      note: 'Pre-release GamesRadar match observation checked 2026-08-30; it is not current official sector data or a fixed route guide.',
    },
  },
  'hue-outskirts': {
    heading: 'Community match example (not a best route)',
    paragraphs: [
      'In a public release-day Huế Outskirts video, IronHeart Gaming’s transcript shows a player moving through a bridge and boat sequence, calling a dock near the factory, and capturing then losing an “Industrial” objective.',
      'Use it as route vocabulary only: bridge → PBR/boat → factory-side dock → Industrial was one match’s sequence. The mode, objective state, spawn state and exact build are not established as universal.',
    ],
    bullets: [
      '02:18 — bridge/boat movement is discussed.',
      '03:04 — a boat drops supplies.',
      '04:04 — the player calls the dock near the factory as a side approach.',
      '04:57–05:11 — “Industrial” is captured and then lost.',
      'Boundary: player example only; it does not define a fixed strongpoint order or best route.',
    ],
    source: {
      label: 'IronHeart Gaming — Huế Outskirts gameplay',
      href: 'https://www.youtube.com/watch?v=GDExGBEwy0w&t=138s',
      type: 'community',
      note: 'Published 2026-08-13; transcript checked 2026-08-30; exact build not stated; player example only.',
    },
  },
};

type MapObjective = readonly [label: string, grid: string];

type CurrentMapObjectiveData = {
  conquest: readonly MapObjective[];
  domination: readonly MapObjective[];
};

const mapDatabaseSource: WikiSource = {
  label: 'Hell Let Loose Vietnam Database — interactive map index',
  href: 'https://hellletloosevietnamdb.com/database/world/map',
  type: 'reference',
  note: 'Community-extracted map data checked 2026-08-30; objective labels and grid references are a current-build lookup, not official sector data or a fixed route.',
};

const mapDatabaseVersionSource: WikiSource = {
  label: 'Hell Let Loose Vietnam Database — data versions',
  href: 'https://hellletloosevietnamdb.com/database/versions',
  type: 'reference',
  note: 'The public data page lists current game Build 24741237 and gameplay snapshot Build 24623236; its own caveat says official updates and in-game verification take precedence.',
};

const currentMapObjectiveData: Record<string, CurrentMapObjectiveData> = {
  'cam-ranh-port': {
    conquest: [
      ['DRY CREEK BED', 'H6'],
      ['BASE HEADQUARTERS', 'F6'],
      ['DELONG PIERS', 'E7'],
      ['CHECKPOINT', 'C6'],
      ['CANTONMENT OUTSKIRTS', 'F4'],
    ],
    domination: [
      ['POL STORAGE', 'B3'],
      ['ROADSIDE CAMP', 'D4'],
      ['CANTONMENT OUTSKIRTS', 'E4'],
      ['DESERT/JUNGLE CROSSING', 'H3'],
      ['JUNGLE HILL', 'I3'],
      ['SIGNAL SITE', 'B5'],
      ['CHECKPOINT', 'D6'],
      ['BASE CAMP', 'E6'],
      ['DRY CREEK BED', 'H6'],
      ['MAINTENANCE MARKET', 'I5'],
      ['POL JETTY', 'B7'],
      ['AMMO PIER', 'D7'],
      ['DELONG PIERS', 'E7'],
      ['STORAGE YARD', 'G7'],
      ['COMMUNICATIONS CENTRE', 'I7'],
    ],
  },
  'dak-to-airfield': {
    conquest: [
      ['MED EVAC STATION', 'C5'],
      ['SPECIAL FORCES CAMP', 'F6'],
      ['AMMO DUMP', 'H5'],
      ['PATROL BOAT DOCKS', 'F7'],
      ['SHOOTING RANGE', 'F3'],
    ],
    domination: [
      ['ROUTE TO ARVN BASE', 'B4'],
      ['AIRBORNE CAMP', 'C3'],
      ['FORTIFIED BRIDGE', 'B7'],
      ['DESERTED FARMLAND', 'D7'],
      ['PATROL BOAT DOCKS', 'F7'],
      ['RIVER LOOKOUT', 'H7'],
      ['NVA BOAT LANDING', 'I7'],
      ['SHOOTING RANGE', 'E3'],
      ['C130 WRECKAGE', 'H4'],
      ['TERMINAL', 'I4'],
      ['US RADIO RELAY', 'B5'],
      ['MED EVAC STATION', 'C5'],
      ['SPECIAL FORCES CAMP', 'F5'],
      ['AMMO DUMP', 'H5'],
      ['ABANDONED DWELLING', 'I5'],
    ],
  },
  'hue-outskirts': {
    conquest: [
      ['FACTORY CHECKPOINT', 'F4'],
      ['INDUSTRIAL ZONE', 'F5'],
      ['ARMOURED CHECKPOINT', 'E7'],
      ['US OVERLOOK', 'D6'],
      ['HILLTOP PASS', 'H5'],
    ],
    domination: [
      ['MARKET TOWN', 'C2'],
      ['RIVERSIDE PLANTATION', 'F2'],
      ['ARMOURED CHECKPOINT', 'F7'],
      ['US CHECKPOINT', 'H8'],
      ['SOUTHERN HAMLET', 'D9'],
      ['RANSACKED FARM', 'E9'],
      ['US TOB', 'H9'],
      ['HIDDEN ENCAMPMENT', 'H2'],
      ['LOST CONVOY', 'C4'],
      ['FACTORY CHECKPOINT', 'F4'],
      ['SOUTHERN CLIMB', 'H4'],
      ['US OVERLOOK', 'C6'],
      ['INDUSTRIAL ZONE', 'F5'],
      ['HILLTOP PASS', 'H5'],
      ['MOUNTAIN BASE CAMP', 'D7'],
    ],
  },
  'quang-ngai': {
    conquest: [
      ['LIMESTONE CAVE', 'F3'],
      ['FISHING VILLAGE', 'C6'],
      ['JUNGLE FARMSTEAD', 'H6'],
      ['FLOODED VILLAGE', 'F6'],
      ['SCISSOR CROSSING', 'E8'],
    ],
    domination: [
      ['LZ OAK', 'B4'],
      ['JUNGLE HILLSIDE', 'D4'],
      ['LIMESTONE CAVE', 'F3'],
      ['HIDDEN NVA CAMP', 'G4'],
      ['NVA SUPPLY CACHE', 'I3'],
      ['US RECON CAMP', 'B6'],
      ['FISHING VILLAGE', 'C6'],
      ['FLOODED VILLAGE', 'F6'],
      ['JUNGLE FARMSTEAD', 'H5'],
      ['EASTERN BANK', 'I6'],
      ['RIVERSIDE FARM', 'B8'],
      ['JUNGLE CROSSROADS', 'D7'],
      ['SCISSOR CROSSING', 'F8'],
      ['ABANDONED HAMLET', 'G8'],
      ['TWIN ISLANDS', 'I8'],
    ],
  },
  'thanh-hoa-bridge': {
    conquest: [
      ['TRAINYARD', 'H6'],
      ['FORTIFIED TRAIN STATION', 'C6'],
      ['Unresolved objective · 8278E47A', 'F4'],
      ['DRAGONS JAW', 'E6'],
      ['NVA RIVER CHECKPOINT', 'F7'],
    ],
    domination: [
      ['BOATYARD', 'D2'],
      ['RAILWAY CHECKPOINT', 'F2'],
      ['NVA RIVER CHECKPOINT', 'F7'],
      ['Unresolved objective · THA_L_1965_CP_Sector11', 'G7'],
      ['US ENCAMPMENT', 'C9'],
      ['US PBR CAMP', 'E9'],
      ['Unresolved objective · THA_L_1965_CP_Sector14', 'H9'],
      ['Unresolved objective · THA_L_1965_CP_Sector2', 'H2'],
      ['Unresolved objective · THA_L_1965_CP_Sector3', 'D4'],
      ['Unresolved objective · THA_L_1965_CP_Sector4', 'F4'],
      ['Unresolved objective · THA_L_1965_CP_Sector5', 'H3'],
      ['FORTIFIED TRAIN STATION', 'D5'],
      ['DRAGONS JAW', 'E6'],
      ['TRAINYARD', 'H5'],
      ['RAILWAY VILLAGE', 'D8'],
    ],
  },
  'van-tuong': {
    conquest: [
      ['JUNGLE OUTPOST', 'F4'],
      ['LAGOON OVERLOOK', 'C6'],
      ['NVA RELAY STATION', 'G6'],
      ['RIVERSIDE VILLAGE', 'E7'],
      ['Unresolved objective · C09803AE', 'F6'],
    ],
    domination: [
      ['Unresolved objective · VAN_L_1965_CP_Sector0', 'B3'],
      ['RIVER CHECKPOINT', 'C3'],
      ['Unresolved objective · VAN_L_1965_CP_Sector10', 'B7'],
      ['JUNGLE CLEARING CAMP', 'C7'],
      ['RIVERSIDE VILLAGE', 'E7'],
      ['Unresolved objective · VAN_L_1965_CP_Sector13', 'G7'],
      ["RIVER'S END", 'I8'],
      ['JUNGLE OUTPOST', 'F4'],
      ['Unresolved objective · VAN_L_1965_CP_Sector3', 'H3'],
      ['PHASE LINE APPLE', 'I3'],
      ['LZ BLUE PERIMETER', 'B5'],
      ['LAGOON OVERLOOK', 'C6'],
      ['Unresolved objective · VAN_L_1965_CP_Sector7', 'E6'],
      ['NVA RELAY STATION', 'G6'],
      ['Unresolved objective · VAN_L_1965_CP_Sector9', 'I6'],
    ],
  },
};

const currentWeaponCrossCheckTable: WikiTable = {
  caption:
    '20 weapon-like records in the public snapshot · 18 named display labels + 2 unresolved records',
  headers: [
    'Snapshot record',
    'Classification shown',
    'Loadout references',
    'Boundary',
  ],
  rows: [
    [
      'M16A1',
      'Primary · rifle',
      '6',
      'Named record; verify role and faction in-client',
    ],
    [
      'M16A1 Bayonet',
      'Primary · rifle',
      '1',
      'Named record; verify variant availability in-client',
    ],
    [
      'M16A1-M203',
      'Primary · rifle / grenade launcher',
      '1',
      'Named record; verify role and ammunition in-client',
    ],
    [
      'M1911A1',
      'Secondary · pistol',
      '7',
      'Named record; Patch 1.3 also names it',
    ],
    [
      'M3 Knife',
      'Melee',
      '12',
      'Named record; sidearm/equipment context varies',
    ],
    [
      'M40',
      'Primary · sniper rifle',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'M60',
      'Primary · machine gun',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'M79',
      'Secondary · grenade launcher',
      '1',
      'Named record; Patch 1.3 also names it',
    ],
    [
      'Model 77E',
      'Primary · shotgun',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'Knife',
      'Melee',
      '18',
      'Named record; faction-specific label context varies',
    ],
    [
      'IZH 58',
      'Primary · shotgun',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'K50M',
      'Primary · submachine gun',
      '4',
      'Named record; verify role and faction in-client',
    ],
    [
      'K50M Drum',
      'Primary · submachine gun',
      '1',
      'Named record; verify variant availability in-client',
    ],
    [
      'RPD',
      'Primary · machine gun',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'Type 53 N4 Rifle Launcher',
      'Primary · rifle / grenade launcher',
      '1',
      'Named record; verify role and ammunition in-client',
    ],
    [
      'Type 53 PU',
      'Primary · sniper rifle',
      '1',
      'Named record; verify role and faction in-client',
    ],
    [
      'Type 54',
      'Secondary · pistol',
      '6',
      'Named record; verify role and faction in-client',
    ],
    [
      'Type 56 Bayonet',
      'Primary · rifle',
      '1',
      'Named record; verify variant availability in-client',
    ],
    [
      'arsenal-nva-type56-ak',
      'No display label',
      '1',
      'Unresolved record ID; no weapon name invented',
    ],
    [
      'arsenal-nva-type53-mosin',
      'No display label',
      '1',
      'Unresolved record ID; no weapon name invented',
    ],
  ],
};

const helicopterBindingCrossCheckTable: WikiTable = {
  caption:
    'Two published PC catalogues compared with one creator profile · not a universal default chart',
  headers: [
    'Action',
    'Cross-published PC catalogue',
    'KAISER profile',
    'Decision rule',
  ],
  rows: [
    [
      'Pitch forward / backward',
      'W / S',
      'Mouse',
      'Sources conflict; read the current Controls screen',
    ],
    [
      'Roll left / right',
      'A / D',
      'Mouse',
      'Sources conflict; test direction in Practice Range',
    ],
    [
      'Yaw left / right',
      'Left / right mouse button',
      'A / D described as left/right aircraft input; axis is ambiguous',
      'Do not infer the axis from the label alone',
    ],
    [
      'Collective increase / reduce',
      'Space / Left Ctrl',
      'W / S',
      'Sources conflict; test altitude input before takeoff',
    ],
    [
      'Auto-level',
      'Left Shift',
      'Space',
      'Sources conflict; use the displayed binding',
    ],
    [
      'Helicopter supply drop',
      'E',
      'E',
      'The only converging binding; verify seat and role context',
    ],
    [
      'Control helicopter with mouse',
      'Settings workflow recommends checking this toggle',
      'On at about 02:05',
      'Visible creator setting; not a universal default',
    ],
    [
      'Recon flare (co-pilot)',
      'Not recorded',
      'Space',
      'Role-gated player example; current UI wins',
    ],
  ],
};

function makeMapEntry(map: (typeof mapEntries)[number]): WikiEntry {
  const fieldEvidence = mapFieldEvidence[map.slug];
  const currentData = currentMapObjectiveData[map.slug];

  return {
    slug: map.slug,
    categorySlug: 'battlefield',
    title: map.title,
    pageType: 'entry',
    summary: `Official profile plus a current-build community objective index: ${map.terrain}. Use the labels as a live-map lookup, not as a fixed winning route.`,
    lead: `The official Launch Maps brief places ${map.title} in ${map.history} and describes ${map.terrain}. A current-build community extraction adds five Conquest strongpoints and fifteen Domination control-point labels with derived grid references. Use them to locate the active objective; capture order, vehicle lanes and optimal routes still depend on mode, build and the live match.`,
    metaTitle: `${map.title} — Hell Let Loose: Vietnam Map Wiki`,
    metaDescription: `${map.title} map guide for Hell Let Loose: Vietnam: official terrain profile, first-match cues and current limits around sector tactics.`,
    status: fieldEvidence
      ? 'Objective index + field observation; route tactics remain contextual'
      : 'Current objective index; route tactics remain contextual',
    evidenceState: 'community-lead',
    updated: checked,
    keywords: map.keywords,
    tags: ['maps', 'gameplay'],
    indexable: false,
    facts: [
      { label: 'Historical setting', value: map.history },
      { label: 'Official terrain', value: map.terrain },
      {
        label: 'First-match cue',
        value: map.matchCue,
      },
      {
        label: 'Current objective index',
        value: '5 Conquest strongpoints + 15 Domination control points',
      },
      {
        label: 'Data boundary',
        value: 'Community snapshot; grid references need live-map confirmation',
      },
    ],
    steps: [
      {
        title: 'Confirm the match context',
        action:
          'Record the map name together with the current mode, server platform label and build before comparing advice.',
        successSignal:
          'A later player observation can be tied to a specific match context.',
      },
      {
        title: 'Locate the official terrain cue',
        action: `At deployment, identify ${map.matchCue}. Use the live tactical map and what you can see; this profile is an orientation aid, not a sector route.`,
        successSignal:
          'You can describe the next terrain problem before the squad starts moving.',
      },
      {
        title: 'Turn the cue into a squad call',
        action:
          'Match the active objective to the current-build index below, then ask how the mode changes the approach: crossing, close terrain, open ground, a defended base or a water route. Follow the live squad call over a generic map rule.',
        successSignal:
          'The squad has a shared next move and knows what terrain to watch.',
        failureCheck:
          'Do not turn one match observation into a universal map rule or “best route”.',
      },
      {
        title: 'Capture a player observation',
        action:
          'If you record a route, sightline or role example, save the build, mode, objective and timestamp so it can be labelled as a community example.',
        successSignal:
          'The observation has enough context to be checked or disputed later.',
      },
      {
        title: 'Check the latest patch',
        action:
          'Review the newest official update before carrying a map or objective note into another session.',
        successSignal:
          'The map note has a visible checked date and version boundary.',
      },
    ],
    sections: [
      {
        heading: 'Official field profile',
        paragraphs: [
          `The official Launch Maps brief names ${map.title} as one of the six launch maps and places it in ${map.history}. It describes the battlefield through ${map.terrain}.`,
        ],
        bullets: [
          `Historical context: ${map.history}.`,
          `Terrain cue: ${map.terrain}.`,
          `Player-use cue: ${map.matchCue}.`,
        ],
      },
      {
        heading: 'Use the profile in a live match',
        paragraphs: [
          'The value of this page is orientation: identify the terrain problem, check the current mode and objective, then ask the squad for a concrete next move. The objective index below helps you recognize names and grid areas, but it does not reveal every spawn route or determine a winning sequence.',
        ],
        bullets: [
          'Confirm the mode and active objective on the current tactical map.',
          'Name the terrain change your squad is about to cross or enter.',
          'Use the grid as a lookup only; verify the label and location in the live client.',
          'Record any route or sightline with build, mode and timestamp before calling it a player example.',
        ],
      },
      {
        heading: 'Current-build objective index (community extraction)',
        paragraphs: [
          'The public Hell Let Loose Vietnam Database map data records five Conquest objectives and fifteen Domination points for each launch map. Its public version page lists current game Build 24741237 while the gameplay records use a Build 24623236 snapshot; it says official updates and in-game verification take precedence.',
          'The grid references below are derived from the dataset’s native 10×10 A1–J10 map grid. They are a lookup aid, not a capture order, route recommendation or proof that every label is a strongpoint in every mode. “Unresolved objective” means the public data record has no display label; the identifier is preserved rather than guessed.',
        ],
        tables: [
          {
            caption: 'Conquest strongpoints · 5 current snapshot labels',
            headers: ['Objective label', 'Derived grid', 'Use in match'],
            rows: currentData.conquest.map(([label, grid]) => [
              label,
              grid,
              'Verify name and position in the live tactical map',
            ]),
          },
          {
            caption: 'Domination control points · 15 current snapshot labels',
            headers: ['Control-point label', 'Derived grid', 'Use in match'],
            rows: currentData.domination.map(([label, grid]) => [
              label,
              grid,
              'Verify name and position in the live tactical map',
            ]),
          },
        ],
      },
      ...(fieldEvidence
        ? [
            {
              heading: fieldEvidence.heading,
              paragraphs: fieldEvidence.paragraphs,
              bullets: fieldEvidence.bullets,
            },
          ]
        : []),
      {
        heading: 'What is still not established',
        paragraphs: [
          'The current snapshot records objective labels and map-grid lookup points, but it does not establish a fixed sector order, best class, vehicle lane, cover pattern or capture route. Conquest and Domination use different objective structures, and a public label is not proof of a universal tactical instruction. The field note above is useful because it records concrete vocabulary and context, not because it proves a winning tactic.',
        ],
      },
      {
        heading: 'How to build a useful field note',
        paragraphs: [
          'Pair the map name with mode, build, objective and timestamp. Separate what the game UI shows from what a player recommends, then link the observation to its source if it is added later.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Launch Maps announcement',
        href: official.maps,
        type: 'official',
        note: `${launchNote} The dedicated map announcement supports the historical setting and terrain profile; current sectors and routes remain build- and mode-sensitive.`,
      },
      mapDatabaseSource,
      mapDatabaseVersionSource,
      ...(fieldEvidence ? [fieldEvidence.source] : []),
    ],
    relatedSlugs: ['launch-maps', 'game-modes', 'beginner-guide'],
  };
}

export const expansionEntries: readonly WikiEntry[] = [
  {
    slug: 'join-a-squad',
    categorySlug: 'basics',
    path: '/guides/join-a-squad',
    title: 'How to Join a Squad',
    pageType: 'guide',
    summary:
      'A first-match route for finding an open squad, choosing a low-risk role and staying connected to the active objective.',
    lead: 'Joining a squad is the safest first live-server action: use the current server browser, choose an open squad, communicate your first move and stay tied to the objective. Exact menu labels and voice controls remain build-sensitive.',
    metaTitle: 'How to Join a Squad — HLL Vietnam Wiki',
    metaDescription:
      'A practical, source-bounded first-match guide for joining a squad and communicating in Hell Let Loose: Vietnam.',
    status: 'First-match guide',
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hll vietnam join a squad',
      'hell let loose vietnam squads',
      'hll vietnam first match squad',
    ],
    tags: ['beginner', 'gameplay', 'systems'],
    indexable: false,
    facts: [
      { label: 'Best first role', value: 'A non-command role you understand' },
      {
        label: 'First communication',
        value: 'State position, objective and intent',
      },
      {
        label: 'Boundary',
        value: 'Exact UI labels and keybinds can change by build',
      },
    ],
    steps: guideSteps.join,
    sections: [
      {
        heading: 'Why squad context matters',
        paragraphs: [
          'The official launch material puts communication and the active objective at the centre of a first match. A squad gives those instructions a practical channel without requiring a new player to lead the entire team.',
        ],
        visuals: [officialVisuals.squadMovement],
      },
      {
        heading: 'Choose a low-risk first role',
        paragraphs: [
          'Start with a role whose task you can explain in one sentence. Leave Squad Leader and Commander for after the corresponding tutorials; this page does not turn a community role recommendation into an official class ranking.',
        ],
      },
      {
        heading: 'If the server list looks full',
        paragraphs: [
          'The official launch updates say the Server Browser refreshes more often, hides full servers by default and can be adjusted with filters. If a server disappears or refuses the join, try another server with visible capacity before treating it as an account or network failure.',
        ],
        bullets: [
          'Check the current platform label and the available-space filter.',
          'Try an Official Server or another Community Server when a specific server is full or reserved.',
          'Record the server name, platform label and visible error if the same failure repeats.',
        ],
      },
      {
        heading: 'Failure check',
        paragraphs: [
          'If the server browser, squad list or voice channel behaves differently, record the platform and build, then check the latest official notes. Do not use a screenshot from another build as a universal UI reference.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official Steam news feed',
        href: official.news,
        type: 'official',
        note: 'Checked 2026-08-30 for Server Browser capacity and filtering guidance.',
      },
    ],
    relatedSlugs: ['beginner-guide', 'voice-chat', 'roles-and-units'],
  },
  {
    slug: 'voice-chat',
    categorySlug: 'systems',
    path: '/guides/voice-chat',
    title: 'Voice Chat Setup and Calls',
    pageType: 'guide',
    summary:
      'A build-safe audio checklist for testing the microphone, choosing the squad channel and making short battlefield calls.',
    lead: 'Use the current audio settings to select and test your microphone, then make short calls about position, direction and intent. The guide avoids a universal push-to-talk key because bindings can differ by platform and build.',
    metaTitle: 'Voice Chat Setup and Calls — HLL Vietnam Wiki',
    metaDescription:
      'Test voice chat, choose the right channel and communicate clearly in Hell Let Loose: Vietnam without relying on outdated keybind charts.',
    status: 'First-match systems guide',
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hll vietnam voice chat',
      'hell let loose vietnam microphone',
      'hll vietnam push to talk',
    ],
    tags: ['gameplay', 'systems', 'beginner', 'technical'],
    indexable: false,
    facts: [
      {
        label: 'Recommended call format',
        value: 'Position → direction → intent',
      },
      {
        label: 'Keybind policy',
        value: 'Confirm the current platform binding in-game',
      },
      {
        label: 'Official boundary',
        value:
          'Communication is a launch tip; exact audio UI is build-sensitive',
      },
      {
        label: 'Party Voice Chat',
        value: 'Lobby only; in-match channels are Proximity, Unit and Command',
      },
    ],
    steps: guideSteps.voice,
    sections: [
      {
        heading: 'Keep calls actionable',
        paragraphs: [
          'A useful call lets a squad member decide what to do next. “North side, moving to the objective” is more useful than a long description that arrives after the situation has changed.',
        ],
      },
      {
        heading: 'Audio failure check',
        paragraphs: [
          'Separate microphone input, channel selection, mute state and output volume. Test one variable at a time and keep the platform/build in the note. A community clip can show one working setup, but it does not establish the default keybind for every player.',
        ],
      },
      {
        heading: 'Lobby versus match channels',
        paragraphs: [
          'The official Community Update says Party Voice Chat is currently available in the lobby only. Once a match starts, use the current Proximity, Unit or Command channel shown by the game instead of waiting for a party channel to carry the call.',
        ],
        bullets: [
          'Test the microphone and mute state in the current audio settings first.',
          'Use Unit chat for the squad-level call and Command chat only when your role and channel access require it.',
          'If a channel is missing or distorted, record platform, build and channel before reporting the issue.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: 'Communication is part of the official launch tips; exact controls need current-build confirmation.',
      },
      {
        label: 'Official Steam news feed',
        href: official.news,
        type: 'official',
        note: 'Checked 2026-08-30 for the current Party Voice Chat boundary and later VOIP fixes.',
      },
    ],
    relatedSlugs: ['join-a-squad', 'movement-and-teamplay', 'crashing-fixes'],
  },
  {
    slug: 'helicopter-controls',
    categorySlug: 'systems',
    path: '/guides/helicopter-controls',
    title: 'Helicopter Controls: Safe First Flight',
    pageType: 'guide',
    summary:
      'A safe first-flight checklist plus a timestamped PC profile and a cross-published catalogue comparison; treat every binding as a build-sensitive starting point, not a universal default.',
    lead: 'Helicopters are part of the official Vietnam battlefield toolkit. Two recent third-party control guides publish one PC catalogue, while KAISER Mtbb’s public video records a different creator profile and visibly shows mouse helicopter control enabled at about 02:05. Because the sources conflict, the current in-game Controls screen is the only safe authority for exact bindings.',
    metaTitle: 'Helicopter Controls — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'A build-safe HLL: Vietnam helicopter guide with an observed PC pilot keybind profile, Patch 1.3 checks and first-flight failure handling.',
    status:
      'PC binding sources cross-checked; current client remains authoritative',
    evidenceState: 'community-lead',
    updated: checked,
    keywords: [
      'hll vietnam helicopter controls',
      'hell let loose vietnam helicopter keybinds',
      'hll vietnam huey controls',
    ],
    tags: ['vehicles', 'gameplay', 'systems', 'beginner'],
    indexable: false,
    facts: [
      {
        label: 'Official feature',
        value: 'Helicopter units are named on the official game page',
      },
      {
        label: 'Observed PC profile',
        value: 'W/S · A/D · mouse · E · Space',
      },
      {
        label: 'Published catalogue',
        value: 'W/S · A/D · mouse buttons · Space/Ctrl · Shift · E',
      },
      {
        label: 'Visible settings check',
        value: 'Control helicopter with mouse: On at about 02:05',
      },
      {
        label: 'Binding boundary',
        value: 'Creator profile only; verify current platform and build',
      },
      {
        label: 'Patch 1.3 control note',
        value:
          'Helicopter inversion and controller Layout B behavior were corrected',
      },
    ],
    steps: guideSteps.helicopter,
    sections: [
      {
        heading: 'Do not freeze an old keybind chart',
        paragraphs: [
          'The profile below comes from KAISER Mtbb’s public video published on 2026-08-22. The captions locate the binding discussion and the player view was checked at about 02:05, where “Control helicopter with mouse” is visibly enabled. The video does not state an exact build, and the creator says they changed defaults, so reproduce it only after opening the current binding screen.',
        ],
      },
      {
        heading: 'Recorded PC pilot profile (community example)',
        paragraphs: [
          'This is the exact set of inputs described in the video, not an official cross-platform keybind chart. “Not recorded” is intentional: the source does not establish every aircraft action, free-look key or default value.',
        ],
        tables: [
          {
            caption:
              'KAISER Mtbb profile · published 2026-08-22 · checked 2026-08-30',
            headers: ['Action', 'Observed binding', 'Evidence boundary'],
            rows: [
              [
                'Control helicopter with mouse',
                'On',
                'Visible in the player settings screen at about 02:05; creator setting, not a default claim',
              ],
              [
                'Collective increase',
                'W',
                'Creator’s PC profile; verify in the current UI',
              ],
              [
                'Collective reduce',
                'S',
                'Creator’s PC profile; verify in the current UI',
              ],
              [
                'Left / right aircraft input',
                'A / D',
                'Transcript describes A/D as standard left/right; exact axis wording is ambiguous',
              ],
              [
                'Pitch forward / backward',
                'Mouse',
                'Creator’s profile; mouse direction must be tested locally',
              ],
              [
                'Roll left / right',
                'Mouse',
                'Creator’s profile; mouse direction must be tested locally',
              ],
              [
                'Helicopter supply drop',
                'E',
                'Creator’s profile; seat and role context still matter',
              ],
              [
                'Auto-level',
                'Space',
                'Creator’s profile; not a universal default claim',
              ],
              [
                'Recon flare (co-pilot)',
                'Space',
                'Role-gated example in the video; not a universal default claim',
              ],
              [
                'Free look',
                'Not recorded',
                'The source does not establish a key; do not infer one',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Cross-published PC catalogue (not a default)',
        paragraphs: [
          'Two independent third-party guides publish the same launch-era PC catalogue: W/S for pitch, A/D for roll, left/right mouse button for yaw, Space/Left Ctrl for collective, Left Shift for auto-level and E for supply drop. This agreement makes the rows useful as a search and testing checklist, but neither page is an official control manual and neither replaces the current client.',
          'The comparison below keeps the disagreement with the KAISER profile visible. It is more useful than choosing one chart by popularity: test each conflicting action in Practice Range, then record platform, build and the exact displayed label.',
        ],
        tables: [helicopterBindingCrossCheckTable],
      },
      {
        heading: 'Transport before spectacle',
        paragraphs: [
          'For a first live flight, success means the squad reaches the requested area and the aircraft remains useful. Test the observed profile in a tutorial or practice context, then avoid turning one community gameplay clip into a recommendation for aggressive flying or a fixed route.',
        ],
        visuals: [officialVisuals.lzApproach, officialVisuals.helicopterField],
      },
      {
        heading: 'Patch 1.3 control checks',
        paragraphs: [
          'Patch 1.3 says the Helicopter Inversion setting now applies correctly: pushing forward on the analogue pitches down by default, while invert changes that behavior. It also records a fix for helicopter pitch inversion with Controller Layout B and a fix that keeps a co-pilot’s control after the pilot dies.',
        ],
        bullets: [
          'Open the current controller layout and confirm the displayed button assignments before takeoff.',
          'Test the direction of pitch in a safe tutorial or practice context before a live transport run.',
          'If the behavior differs, record platform, layout, inversion setting and build; do not copy a keyboard chart from another version.',
        ],
      },
      {
        heading: 'What remains platform-sensitive',
        paragraphs: [
          'The official Patch 1.3 notes confirm fixes for helicopter inversion and Controller Layout B, but they do not publish a universal keyboard table. The current client must win over the conflicting PC sources above. Infantry controls, console controls, free look and any changed defaults remain current-client verification work.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: 'Confirms helicopter units as part of the battlefield toolkit; exact controls are not supplied.',
      },
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official Patch 1.3 notes',
        href: official.patch13,
        type: 'official',
        note: 'Checked 2026-08-30 for helicopter inversion, Layout B and co-pilot control fixes.',
      },
      {
        label: 'KAISER Mtbb — How to be a Pilot',
        href: 'https://www.youtube.com/watch?v=Q5TLVet5lgg&t=123s',
        type: 'community',
        note: 'Published 2026-08-22; transcript and visible settings frame checked 2026-08-30. The exact build is not stated and the creator describes a changed PC profile; use as a player example only.',
      },
      {
        label: 'Hell Let Loose Vietnam — Helicopter Controls',
        href: 'https://hellletloosevietnam.org/guides/helicopter-controls/',
        type: 'reference',
        note: 'Third-party launch-era PC catalogue checked 2026-08-30; useful for cross-checking names, not an official default or current-client proof.',
      },
      {
        label: 'All Things How — HLL Vietnam keybinds',
        href: 'https://allthings.how/hell-let-loose-vietnam-keybinds-and-best-keyboard-and-mouse-settings/',
        type: 'reference',
        note: 'Third-party PC controls catalogue checked 2026-08-30; it agrees with the rows above but remains a reference, not an official control manual.',
      },
      {
        label: 'Hell Let Loose Vietnam — Helicopter Controls',
        href: 'https://hellletloosevietnam.org/guides/helicopter-controls/',
        type: 'reference',
        note: 'Third-party launch-era PC catalogue checked 2026-08-30; useful for cross-checking names, not an official default or current-client proof.',
      },
      {
        label: 'All Things How — HLL Vietnam keybinds',
        href: 'https://allthings.how/hell-let-loose-vietnam-keybinds-and-best-keyboard-and-mouse-settings/',
        type: 'reference',
        note: 'Third-party PC controls catalogue checked 2026-08-30; it agrees with the rows above but remains a reference, not an official control manual.',
      },
    ],
    relatedSlugs: ['tunnels-helicopters', 'best-settings', 'beginner-guide'],
  },
  {
    slug: 'best-settings',
    categorySlug: 'access',
    path: '/guides/best-settings',
    title: 'Best Settings: A Repeatable Starting Point',
    pageType: 'guide',
    summary:
      'A repeatable way to tune visibility and stability without presenting one player’s graphics preset as the universal best setting.',
    lead: 'There is no single best settings preset for every PC. Start with the official requirements, change one group at a time, prioritize readable silhouettes and stable frame pacing, and record the build and hardware beside any result.',
    metaTitle: 'Best Settings — Hell Let Loose: Vietnam PC Guide',
    metaDescription:
      'A repeatable PC settings process for HLL: Vietnam: requirements, one-change testing, visibility, stability and patch rechecks.',
    status: 'PC settings guide',
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hll vietnam best settings',
      'hell let loose vietnam graphics settings',
      'hll vietnam fps settings',
    ],
    tags: ['technical', 'platforms', 'beginner', 'gameplay'],
    indexable: false,
    facts: [
      {
        label: 'Baseline',
        value: 'Official minimum or recommended requirements',
      },
      { label: 'Test rule', value: 'Change one setting group at a time' },
      {
        label: 'Success signal',
        value: 'Readable image and stable frame pacing in a repeatable scene',
      },
    ],
    steps: guideSteps.settings,
    sections: [
      {
        heading: 'What “best” means here',
        paragraphs: [
          'This page treats best as a repeatable personal baseline: clear enough to read the battlefield and stable enough to make decisions. It does not claim a benchmark result or a universal competitive preset.',
        ],
      },
      {
        heading: 'Keep the test honest',
        paragraphs: [
          'Compare the same type of scene, keep the resolution and frame limit visible, and note the build. A community settings video is a useful example of one player’s setup only; it cannot prove the same result on another machine.',
        ],
      },
      {
        heading: 'Stability comes before a preset',
        paragraphs: [
          'If the failure is an AMD-related crash rather than low frame rate, switch to the Crashing and Connection Checks guide. The official launch notes list temporary AMD workarounds, while the later official update says results vary and the underlying investigation is still version-sensitive.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official PC requirements page',
        href: official.pcRequirements,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: 'Used for the current game/platform boundary.',
      },
    ],
    relatedSlugs: [
      'pc-requirements',
      'crashing-fixes',
      'movement-and-teamplay',
    ],
  },
  {
    slug: 'crashing-fixes',
    categorySlug: 'access',
    path: '/guides/crashing-fixes',
    title: 'Crashing and Connection Checks',
    pageType: 'guide',
    summary:
      'A reversible troubleshooting route for launch, loading, server-join and in-match crashes, with an evidence-first escalation note.',
    lead: 'Troubleshoot a crash by identifying when it happens, checking the newest official patch notes and applying one reversible local change at a time. Keep causes marked pending when the official sources do not identify them.',
    metaTitle: 'Crashing Fixes — Hell Let Loose: Vietnam Troubleshooting',
    metaDescription:
      'Evidence-first crash and connection checks for Hell Let Loose: Vietnam, including build capture, official patch review and reversible tests.',
    status: 'Troubleshooting guide',
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hll vietnam crashing',
      'hell let loose vietnam crash fix',
      'hll vietnam connection issues',
    ],
    tags: ['technical', 'platforms', 'updates', 'beginner'],
    indexable: false,
    facts: [
      {
        label: 'First question',
        value: 'At what exact stage does the failure happen?',
      },
      { label: 'Safe method', value: 'One reversible change at a time' },
      { label: 'Evidence rule', value: 'Unconfirmed causes stay pending' },
      {
        label: 'AMD note',
        value: 'Official workaround may reduce crashes; results vary by system',
      },
    ],
    steps: guideSteps.crash,
    sections: [
      {
        heading: 'Separate a crash from a server or platform mismatch',
        paragraphs: [
          'A missing server, failed join and client crash can look similar from the player’s point of view. Record the stage, server platform label and visible error before changing settings so the next check has a defined target.',
        ],
      },
      {
        heading: 'What not to promise',
        paragraphs: [
          'The official patch notes can confirm listed fixes, but they do not prove that every unlisted crash has one cause. Avoid claiming that one driver, overlay or graphics option fixes all systems without a reproducible evidence set.',
        ],
      },
      {
        heading: 'AMD-specific temporary branch',
        paragraphs: [
          'The official launch guidance lists two temporary Steam launch-option combinations: -dx12 -USEALLAVAILABLECORES -malloc=system, or -dx11 -USEALLAVAILABLECORES -malloc=system. It also lists High in-game graphics and disabling the AMD Software: Adrenalin Edition in-game overlay. Patch 1.3 adds that disabling gore may reduce AMD crash frequency. Test one change at a time, keep the change reversible and expect results to vary.',
        ],
        bullets: [
          'Use the branch only when the machine has an AMD GPU and the failure is a crash or stability problem.',
          'If it does not help, restore the previous value before testing the next change.',
          'Escalate with build, GPU, driver, trigger and the exact change that was tested.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Patch 1.3 article',
        href: 'https://www.hellletloose.com/blog/hllv-patch-1-3',
        type: 'official',
        note: 'Use for current listed stability and gameplay changes; recheck later patches.',
      },
      {
        label: 'Official Patch 1.2 article',
        href: 'https://www.hellletloose.com/blog/hllv-patch-1-2',
        type: 'official',
        note: 'Historical launch-fix context, not a current universal bug list.',
      },
      {
        label: 'Official Steam news feed',
        href: 'https://steamcommunity.com/app/3079210/allnews/',
        type: 'official',
        note: 'Use for later publisher/developer fixes and status notices.',
      },
    ],
    relatedSlugs: ['best-settings', 'pc-requirements', 'patch-1-3'],
  },
  ...mapEntries.map(makeMapEntry),
  {
    slug: 'weapons',
    categorySlug: 'roles',
    title: 'Weapons: Current Reference Catalogue',
    pageType: 'entry',
    summary:
      'A 22-name reference union cross-checked against a current-build snapshot with 18 named weapon-like records and two unresolved record IDs.',
    lead: 'The official game page confirms historically accurate weapons, and current official patch notes name several weapons and equipment items. A public current-build database adds a useful weapon-like record cross-check, but its own data boundary is not an official role/loadout matrix; verify availability, faction, ammunition and progression in the current client.',
    metaTitle: 'Weapons — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'HLL: Vietnam weapon reference catalogue with 22 named entries, official Patch 1.3 names, current examples and clear loadout-verification boundaries.',
    status:
      '22-name reference union + current snapshot cross-check; official matrix pending',
    evidenceState: 'community-lead',
    updated: checked,
    keywords: [
      'hll vietnam weapons',
      'hell let loose vietnam weapon list',
      'hll vietnam m14 sks stoner 63',
    ],
    tags: ['weapons', 'roles', 'updates', 'community'],
    indexable: false,
    facts: [
      { label: 'Official theme', value: 'Historically accurate weapons' },
      {
        label: 'Reference catalogue',
        value: '22 named weapons and variants; reference union only',
      },
      {
        label: 'Current snapshot cross-check',
        value:
          '66 weapons/equipment records; 18 named weapon-like labels + 2 unresolved IDs',
      },
      {
        label: 'Official Patch 1.3 names',
        value:
          'M79, M1911A1, M183 Demolition Charge, M21 AT Mine, N4 Rifle Grenades',
      },
      {
        label: 'Planned, not current',
        value: 'M14, Type 56 SKS and Stoner 63 on the roadmap',
      },
    ],
    steps: [
      {
        title: 'Separate current from planned',
        action:
          'Check the latest official patch or release note before treating a roadmap weapon—such as M14, Type 56 SKS or Stoner 63—as available in the current build.',
        successSignal: 'Every weapon note has a current or planned label.',
      },
      {
        title: 'Start with the reference names',
        action:
          'Use the 22-name catalogue to identify a weapon name, then confirm the faction, role, mode and build in the current client.',
        successSignal:
          'A weapon name is tied to a concrete loadout context instead of a search result alone.',
      },
      {
        title: 'Record the role context',
        action:
          'When a weapon is observed in-game, record faction, role, mode, platform and build instead of creating a universal class claim.',
        successSignal:
          'The observation can be tied to a concrete loadout context.',
      },
      {
        title: 'Recheck after updates',
        action:
          'Update the catalogue only from official current-build material or a documented in-game verification pass; keep third-party names labelled as leads.',
        successSignal:
          'The page’s checked date matches the latest evidence pass.',
      },
    ],
    sections: [
      {
        heading: 'Reference catalogue: 22 names to verify',
        paragraphs: [
          'The two tables below reproduce a 22-name third-party reference catalogue checked against a second in-progress list on 2026-08-30. It is a vocabulary and research lead, not an official statement that every item is available to every role. One cross-check visibly omits base Type 53, so counts should not be inferred from a single third-party page.',
        ],
        tables: [
          {
            caption: 'US reference entries · 10 names',
            headers: ['Weapon / variant', 'Faction', 'Evidence boundary'],
            rows: [
              [
                'M16A1',
                'US',
                'Reference name; confirm role and current availability',
              ],
              [
                'M16A1 With Bayonet',
                'US',
                'Reference name; variant/loadout needs client check',
              ],
              [
                'M16A1-M203',
                'US',
                'Reference name; variant/loadout needs client check',
              ],
              ['M1911A1', 'US', 'Also named in official Patch 1.3 notes'],
              [
                'M2A1-7',
                'US',
                'Reference name; confirm role and current availability',
              ],
              [
                'M40',
                'US',
                'Reference name; confirm role and current availability',
              ],
              [
                'M60',
                'US',
                'Also named in current gameplay examples; confirm loadout',
              ],
              [
                'M72',
                'US',
                'Reference name; confirm role and current availability',
              ],
              ['M79', 'US', 'Also named in official Patch 1.3 notes'],
              [
                'Model 77E',
                'US',
                'Reference name; confirm role and current availability',
              ],
            ],
          },
          {
            caption: 'NVA reference entries · 12 names',
            headers: ['Weapon / variant', 'Faction', 'Evidence boundary'],
            rows: [
              [
                'IZH 58',
                'NVA',
                'Reference name; confirm role and current availability',
              ],
              [
                'K50M',
                'NVA',
                'Reference name; confirm role and current availability',
              ],
              [
                'K50M Drum',
                'NVA',
                'Reference variant; confirm current availability',
              ],
              [
                'LPO-50',
                'NVA',
                'Reference name; confirm role and current availability',
              ],
              [
                'RPD',
                'NVA',
                'Also named in current gameplay examples; confirm loadout',
              ],
              [
                'RPG-02',
                'NVA',
                'Named in a current review image caption; confirm loadout',
              ],
              [
                'Type 53',
                'NVA',
                'Reference name; one cross-check omits it, so count is flagged',
              ],
              [
                'Type 53 PU',
                'NVA',
                'Reference variant; confirm current availability',
              ],
              [
                'Type 53 W/ N4 Rifle Launcher',
                'NVA',
                'Reference variant; confirm current availability',
              ],
              [
                'Type 53 w/Bayonet',
                'NVA',
                'Reference variant; confirm current availability',
              ],
              [
                'Type 54',
                'NVA',
                'Reference name; confirm role and current availability',
              ],
              [
                'Type 56 W/ Bayonet',
                'NVA',
                'Reference variant; confirm current availability',
              ],
            ],
          },
        ],
      },
      {
        heading: 'What is confirmed separately',
        paragraphs: [
          'The official game page supplies the historically accurate weapon theme. Patch 1.3 directly names the M79, M1911A1, M183 Demolition Charge, M21 AT Mine and N4 Rifle Grenades. Current review and gameplay coverage also names examples such as M16, Type 56, M60, RPD, M79 and RPG-02. These independent mentions do not replace a role-by-role loadout matrix.',
        ],
        visuals: [officialVisuals.sniperPosition],
      },
      {
        heading: 'Current-build weapon-like records',
        paragraphs: [
          'The public database currently exposes 66 weapons/equipment records. The table below isolates the 20 weapon-like records that can be represented without guessing: 18 have a display label and two retain their unresolved record IDs because the source provides no display name. “Loadout references” is the source’s count of named loadout appearances, not a promise that the item is available to every role or faction.',
          'This table is stronger than a search-only catalogue because it is tied to a public build snapshot, but it is still a reference cross-check. The database records current game Build 24741237 while the gameplay snapshot is Build 24623236; use the in-game loadout screen and official patch notes as the final authority.',
        ],
        tables: [currentWeaponCrossCheckTable],
      },
      {
        heading: 'Planned and still unverified',
        paragraphs: [
          'The official roadmap lists M14, Type 56 SKS and Stoner 63 as planned additions; they are not treated as current launch weapons here. The current snapshot’s unresolved records are not renamed as Type 56 or Type 53 without a display label. Exact role access, unlock path, ammunition, weight, damage, recoil and best-in-slot rankings still require a current client or official matrix.',
        ],
      },
      {
        heading: 'Evidence boundary',
        paragraphs: [
          'Third-party catalogues, community database records and player videos can identify names and show one player’s equipment. They cannot independently prove universal role access or mechanics. Keep every future row attached to a faction, role, platform, build and source before promoting it beyond reference status; never fill an unresolved record from a similar-looking name.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official Patch 1.3 notes',
        href: official.patch13,
        type: 'official',
        note: 'Checked 2026-08-30 for M79, M1911A1, M183 Demolition Charge, M21 AT Mine and N4 Rifle Grenades.',
      },
      {
        label: 'Official 2026 roadmap',
        href: official.roadmap,
        type: 'official',
        note: 'Planned weapons are not current features until a release note confirms them.',
      },
      {
        label: 'Inside the Armoury Episode 1 — M16A1 + M203',
        href: 'https://www.youtube.com/watch?v=9iYw00GDqXM',
        type: 'official',
        note: 'Official Hell Let Loose and Royal Armouries collaboration; weapon context only, not a role/loadout matrix.',
      },
      {
        label: 'Inside the Armoury Episode 2 — AK47 + Dillon AK',
        href: 'https://www.youtube.com/watch?v=sg04IpE6Mx4',
        type: 'official',
        note: 'Official collaboration title checked 2026-08-30; weapon context only, not a role/loadout matrix.',
      },
      {
        label: 'GamesRadar+ launch review',
        href: 'https://www.gamesradar.com/games/fps/hell-let-loose-vietnam-review/',
        type: 'reference',
        note: 'Current review names M16, Type 56, M60, RPD, M79 and an RPG-02 image caption; it is supplemental reference, not official roster proof.',
      },
      {
        label: 'Dexerto weapons catalogue',
        href: 'https://www.dexerto.com/wikis/hell-let-loose-vietnam/weapons/',
        type: 'reference',
        note: '22-name third-party catalogue checked 2026-08-30; research lead only, not official mechanism proof.',
      },
      {
        label: 'GameWatcher in-progress weapons list',
        href: 'https://www.gamewatcher.com/hell-let-loose-vietnam/weapons',
        type: 'reference',
        note: 'Cross-check checked 2026-08-30; visible list omits base Type 53, so its count is not treated as authoritative.',
      },
      {
        label: 'Hell Let Loose Vietnam Database — arsenal',
        href: 'https://hellletloosevietnamdb.com/database/arsenal',
        type: 'reference',
        note: 'Public current-build snapshot checked 2026-08-30; 66 weapons/equipment records, with display labels and unresolved records preserved as published.',
      },
      {
        label: 'Hell Let Loose Vietnam Database — data versions',
        href: 'https://hellletloosevietnamdb.com/database/versions',
        type: 'reference',
        note: 'Lists current game Build 24741237 and gameplay snapshot Build 24623236; official updates and in-game verification take precedence.',
      },
    ],
    relatedSlugs: ['roles-and-units', 'vehicles', 'roadmap-2026'],
  },
  {
    slug: 'vehicles',
    categorySlug: 'roles',
    title: 'Vehicles: Helicopters, Armour and Boats',
    pageType: 'entry',
    summary:
      'A vehicle systems hub covering the official categories and the boundary around exact models, controls and performance data.',
    lead: 'Official material names infantry, recon, armour, mortar and helicopter units, and highlights helicopters and patrol boats in the Vietnam battlefield toolkit. This page records those confirmed categories without inventing a complete vehicle roster or performance table.',
    metaTitle: 'Vehicles — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'Officially bounded HLL: Vietnam vehicle hub covering helicopters, armour and patrol boats, with exact model and control claims kept pending.',
    status:
      'Vehicle hub; model and control details pending current-build verification',
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'hll vietnam vehicles',
      'hell let loose vietnam helicopters',
      'hll vietnam tanks patrol boats',
    ],
    tags: ['vehicles', 'roles', 'gameplay', 'systems'],
    indexable: false,
    facts: [
      {
        label: 'Official unit families',
        value: 'Armour, mortar and helicopter units',
      },
      {
        label: 'Battlefield elements',
        value: 'Helicopters and patrol boats are highlighted',
      },
      { label: 'Exact roster', value: 'Pending a current-build vehicle pass' },
    ],
    steps: [
      {
        title: 'Identify the vehicle family',
        action:
          'Use the current role or vehicle UI to identify whether the task is transport, armour, mortar support or another unit function.',
        successSignal:
          'The request names a vehicle family and battlefield purpose.',
      },
      {
        title: 'Confirm the crew task',
        action:
          'Before moving, agree on destination, objective and communication channel with the squad or crew.',
        successSignal:
          'Crew members share one destination and a clear next action.',
      },
      {
        title: 'Record build-specific behaviour',
        action:
          'If you test a control, interaction or performance detail, record platform, build, mode and the exact in-game label.',
        successSignal:
          'A future reader can distinguish a verified mechanic from a player observation.',
      },
      {
        title: 'Check patch notes',
        action:
          'Review the latest official update before treating vehicle handling or availability as stable.',
        successSignal:
          'The note is current enough to be useful for the session being planned.',
      },
    ],
    sections: [
      {
        heading: 'Confirmed vehicle boundary',
        paragraphs: [
          'The official game page names armour, mortar and helicopter units and highlights helicopters and patrol boats. It does not supply the complete model list, control table or balance values needed for a detailed vehicle database.',
        ],
        visuals: [officialVisuals.armourHelicopter, officialVisuals.armourPush],
      },
      {
        heading: 'Community evidence rule',
        paragraphs: [
          'A community gameplay frame can show what one player did in one build. It can illustrate a route or interface, but it cannot alone prove that every player has the same control, vehicle model or performance.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official crossplay announcement',
        href: official.crossplay,
        type: 'official',
        note: 'Platform/server context only; not a vehicle roster source.',
      },
    ],
    relatedSlugs: ['tunnels-helicopters', 'helicopter-controls', 'weapons'],
  },
  {
    slug: 'editions-and-buying',
    categorySlug: 'access',
    title: 'Editions and Buying',
    pageType: 'access',
    summary:
      'Where to verify the current PC listing and launch platform availability without freezing a regional price or discount snapshot.',
    lead: 'Use the official Steam listing and the publisher’s launch information to verify availability, platform and current purchase options. Prices, discounts, subscriptions and regional editions are intentionally treated as live storefront facts rather than copied into a static Wiki entry.',
    metaTitle: 'Editions and Buying — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'Official purchase and platform verification for Hell Let Loose: Vietnam, with dynamic prices and regional storefront details left to the live store.',
    status: 'Buying guide; storefront values require live recheck',
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hll vietnam editions',
      'hell let loose vietnam buy',
      'hll vietnam steam edition',
      'hll vietnam price',
    ],
    tags: ['buying', 'platforms', 'technical'],
    indexable: false,
    facts: [
      { label: 'PC storefront', value: 'Official Steam listing' },
      {
        label: 'Launch platforms',
        value: 'PC, PlayStation 5 and Xbox Series X|S',
      },
      {
        label: 'Price policy',
        value:
          'Check the current official storefront; no static price snapshot',
      },
    ],
    steps: [
      {
        title: 'Choose the platform first',
        action:
          'Confirm whether you are buying for PC, PlayStation 5 or Xbox Series X|S before comparing the store entry.',
        successSignal:
          'The storefront and platform match the device you intend to use.',
      },
      {
        title: 'Open the official listing',
        action:
          'Read the live official store page for edition name, price, regional currency, refund terms and current promotion.',
        successSignal:
          'You have a current storefront value and know which region it applies to.',
        failureCheck:
          'Do not rely on an old article or screenshot for price or discount information.',
      },
      {
        title: 'Check platform access',
        action:
          'Compare the listing with the publisher’s launch platform information and verify any subscription or account requirement on the platform store.',
        successSignal:
          'Purchase access and platform availability agree across the current official pages.',
      },
      {
        title: 'Recheck before checkout',
        action:
          'Refresh the store page before paying because edition contents, tax, discounts and regional availability can change.',
        successSignal:
          'The final choice is based on the live official store, not a frozen Wiki value.',
      },
    ],
    sections: [
      {
        heading: 'What this page records',
        paragraphs: [
          'The official launch material names the supported launch platform families, and Steam provides the live PC storefront. This page helps you reach those sources without copying a price that will expire.',
        ],
      },
      {
        heading: 'What this page deliberately avoids',
        paragraphs: [
          'No regional price table, discount alert, subscription comparison or edition ranking is stored here. Those values are useful only when checked at the moment of purchase.',
        ],
      },
    ],
    sources: [
      {
        label: 'Official Steam store listing',
        href: official.steam,
        type: 'official',
        note: 'Live storefront; recheck price, region and edition details at checkout.',
      },
      {
        label: 'Official HLL: Vietnam launch article',
        href: official.launch,
        type: 'official',
        note: officialNote,
      },
      {
        label: 'Official HLL: Vietnam game page',
        href: official.game,
        type: 'official',
        note: officialNote,
      },
    ],
    relatedSlugs: [
      'release-and-platforms',
      'crossplay-and-platforms',
      'pc-requirements',
    ],
  },
] as const;
