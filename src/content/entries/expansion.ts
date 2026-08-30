import type { WikiEntry } from '../types';
import { officialVisuals } from '../visuals';

const checked = '2026-08-30';

const official = {
  game: 'https://www.hellletloose.com/game/hll-vietnam',
  launch: 'https://www.hellletloose.com/blog/hllv-out-now',
  maps: 'https://steamcommunity.com/games/3079210/announcements/detail/690891687156777529',
  crossplay: 'https://www.hellletloose.com/blog/beta-testing-and-crossplay',
  pcRequirements: 'https://www.hellletloose.com/pc-requirements',
  patch13: 'https://www.hellletloose.com/blog/hllv-patch-1-3',
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

function makeMapEntry(map: (typeof mapEntries)[number]): WikiEntry {
  return {
    slug: map.slug,
    categorySlug: 'battlefield',
    title: map.title,
    pageType: 'entry',
    summary: `Official profile: ${map.terrain}. Use the terrain cue to ask a better first-match question without treating it as a fixed winning route.`,
    lead: `The official Launch Maps brief places ${map.title} in ${map.history} and describes ${map.terrain}. In a live match, use those visible cues to frame your first squad call; sector order, strongpoints and optimal routes still depend on mode, build and the current objective.`,
    metaTitle: `${map.title} — Hell Let Loose: Vietnam Map Wiki`,
    metaDescription: `${map.title} map guide for Hell Let Loose: Vietnam: official terrain profile, first-match cues and current limits around sector tactics.`,
    status: 'Official terrain profile; sector and route tactics pending',
    evidenceState: 'single-official-source',
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
          'Ask how the current objective changes the approach: crossing, close terrain, open ground, a defended base or a water route. Follow the live squad call over a generic map rule.',
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
          'The value of this page is orientation: identify the terrain problem, check the current mode and objective, then ask the squad for a concrete next move. That keeps the official profile useful without pretending that a historical description reveals every sector or spawn route.',
        ],
        bullets: [
          'Confirm the mode and active objective on the current tactical map.',
          'Name the terrain change your squad is about to cross or enter.',
          'Record any route or sightline with build, mode and timestamp before calling it a player example.',
        ],
      },
      {
        heading: 'What is still pending',
        paragraphs: [
          'No fixed sector order, best class, vehicle lane, cover pattern or capture route is published here without a direct current-build source. The official profile describes environments, while community footage can only illustrate one player’s match and cannot by itself prove a universal mechanic.',
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
      'A safe first-flight checklist that keeps exact helicopter keybinds inside the current in-game settings and tutorial.',
    lead: 'Helicopters are part of the official Vietnam battlefield toolkit, but a dependable control guide must match the current platform and build. Use this page to prepare, test one short transport route and keep any exact bindings tied to the current UI.',
    metaTitle: 'Helicopter Controls — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'A build-safe helicopter controls checklist for Hell Let Loose: Vietnam, with current UI verification and first-flight failure checks.',
    status: 'Controls guide; exact bindings pending current-build capture',
    evidenceState: 'single-official-source',
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
        label: 'Exact keybinds',
        value: 'Confirm in the current platform settings',
      },
      {
        label: 'First-flight goal',
        value: 'Deliver one squad safely and return with a clear next task',
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
          'A control label copied from a beta video, another platform or an older patch is a lead, not a current rule. Read the in-game binding screen first and record the build if you publish an exact control later.',
        ],
      },
      {
        heading: 'Transport before spectacle',
        paragraphs: [
          'For a first live flight, success means the squad reaches the requested area and the aircraft remains useful. Avoid turning one community gameplay clip into a recommendation for aggressive flying or a fixed route.',
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
    title: 'Weapons: Confirmed Scope and Pending Roster',
    pageType: 'entry',
    summary:
      'A source-bounded weapons hub: official material confirms historically accurate weapons and planned additions, while a complete launch roster remains pending.',
    lead: 'The official game page describes historically accurate weapons, and the official roadmap names planned M14, SKS and Stoner 63 additions. The sources used here do not provide a complete current weapon-by-weapon roster, so this page separates confirmed themes from pending detail.',
    metaTitle: 'Weapons — Hell Let Loose: Vietnam Wiki',
    metaDescription:
      'A source-bounded HLL: Vietnam weapons hub covering official weapon themes, planned additions and the boundary around an unverified full roster.',
    status: 'Roster hub; complete list pending direct verification',
    evidenceState: 'single-official-source',
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
        label: 'Planned examples',
        value: 'M14, SKS and Stoner 63 on the roadmap',
      },
      {
        label: 'Current full roster',
        value: 'Not established by the sources used here',
      },
    ],
    steps: [
      {
        title: 'Separate current from planned',
        action:
          'Check the latest official patch or release note before treating a roadmap weapon as available in the current build.',
        successSignal: 'Every weapon note has a current or planned label.',
      },
      {
        title: 'Record the role context',
        action:
          'When a weapon is observed in-game, record faction, role, mode and build instead of creating a universal class claim.',
        successSignal:
          'The observation can be tied to a concrete loadout context.',
      },
      {
        title: 'Use player examples carefully',
        action:
          'A community video may illustrate one player’s weapon handling or route, but label it as a community example and do not use it alone to prove a roster fact.',
        successSignal: 'The evidence label stays visible next to the example.',
      },
      {
        title: 'Recheck after updates',
        action:
          'Update the roster only from official current-build material or a documented in-game verification pass.',
        successSignal:
          'The page’s checked date matches the latest evidence pass.',
      },
    ],
    sections: [
      {
        heading: 'Confirmed by official material',
        paragraphs: [
          'The official game page uses historically accurate weapons as part of the game’s Vietnam setting. The roadmap separately names weapons planned for future updates. Those are different evidence classes and remain separated here.',
        ],
        visuals: [officialVisuals.sniperPosition],
      },
      {
        heading: 'Roster boundary',
        paragraphs: [
          'A complete weapon list, per-role unlock path, damage table or best-in-slot ranking needs direct current-build verification. Community spreadsheets and videos can be useful leads or examples, but they cannot independently establish official mechanics.',
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
        label: 'Official 2026 roadmap',
        href: 'https://www.hellletloose.com/blog/hllv-2026-roadmap',
        type: 'official',
        note: 'Planned weapons are not current features until a release note confirms them.',
      },
      {
        label: 'Official developer Q&A 2',
        href: official.qna2,
        type: 'official',
        note: 'Use as context for future weapon and role verification, not as a complete roster.',
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
