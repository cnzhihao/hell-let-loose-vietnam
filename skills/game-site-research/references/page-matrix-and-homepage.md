# Page Matrix and Homepage Brief

## Page matrix schema

Build the matrix before writing page prose. Map one homepage plus one route per valid keyword unless a documented merge or exclusion is better.

Each row must contain:

| Field | Required value |
|---|---|
| Keyword | Exact search phrase |
| Route | Stable page path |
| Search intent | What the player wants to know or do |
| Cluster | Entry, knowledge, access, mechanics, updates or community |
| Page role | Hub, guide, CTA, news, reference or cautious placeholder |
| Priority | P0, P1 or P2 |
| Evidence status | One of the project evidence states |
| Internal links | Parent, siblings and official CTA targets |

For this repository, also record the fields that will be handed to the content layer:

| Template field | What to decide |
|---|---|
| slug | Stable URL-safe identifier |
| categorySlug | Existing or proposed Wiki category |
| path | Optional custom canonical path, for example a Guide route |
| pageType | entry, guide, access or update |
| indexable | false until the page is useful and source-backed |
| Sources | URLs and source types that support the page |
| relatedSlugs | Parent, sibling or next-action pages |

Common clusters:

- Entry: homepage and beginner guide;
- Knowledge: Wiki, map, systems and research;
- Access: Steam, Demo, release date, Game Pass and online status;
- Mechanics: water, lava, resources, logistics and endgame systems;
- Freshness/community: updates, cheats/debug mode, mods and player questions.

Filter unrelated autocomplete terms, same-name terms, competitor terms and terms without a distinct player task. Record the reason for filtering.

## Homepage development brief

When requested, prepare Markdown and, when useful, JSON containing:

- Meta title;
- Approximately 140–160 character meta description, or the project’s required range;
- Hero eyebrow, title, description, stats, CTAs and video label;
- Four Start Here cards with distinct intents;
- About-game paragraphs and label/value stats;
- Final CTA and footer links;
- Light and dark theme colors;
- Language priority based on official support and available sources;
- Self-check for title, description, pure-string stats, four cards, label/value stats, footer copy and code availability.

Use only verified figures. Omit dynamic or uncertain numbers, or mark them for recheck. In a fresh template clone, do not turn the starter examples into a game claim; use the brief as a schema and wait for actual research.

## Icon prompt

If the task includes an icon, write an English prompt for a 512×512 PNG favicon using verified official branding, palette, resources, terrain, factory or central mechanics. A prompt is not an image: do not claim the icon exists unless a real file is present in the project.
