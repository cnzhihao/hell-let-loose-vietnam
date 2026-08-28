# Query-to-Page Intent Splitting and Internal Links

Use this reference when GSC or an SEO Agent report shows that one page is receiving several search tasks, or when a new page is being proposed from query data. The goal is to improve answer coverage without turning every keyword variation into a thin URL.

## 1. Build the evidence matrix

Keep GSC observations separate from third-party estimates and SERP hypotheses. For each meaningful query/page signal, record:

| Field | What to record |
|---|---|
| Query | The exact query or a clearly labeled query group |
| GSC signal | Clicks, impressions, CTR, average position, period and filters |
| Current landing page | The URL receiving the signal, including redirects/canonical when relevant |
| Player task | The concrete question the player is trying to complete |
| Evidence | Reliable source, source gap or community lead |
| Proposed page | Existing page, new page, Hub page or no page |
| Action | Split, strengthen, consolidate, observe or defer |
| Measurement | The expected query/page signal and D+7/D+14 check |

Do not call an estimated monthly volume, difficulty or referring-domain count a GSC result. If the report is based on a user-transcribed Agent summary rather than the original export, record that limitation and lower confidence accordingly.

## 2. Decide whether the intent is genuinely different

One page receiving several queries is not automatically a problem. Split only when all of the following are reasonably true:

- The queries represent different player tasks, not only singular/plural, spelling or modifier variants;
- The current page cannot answer those tasks clearly without becoming a long, unfocused index;
- The new page can provide distinct useful content, not a title-swapped copy;
- Reliable sources or clearly labeled evidence exist for the proposed answer;
- A stable URL, canonical, parent Hub and related-page path can be defined.

Use these patterns as a guardrail:

| Pattern | Default action | Reason |
|---|---|---|
| One Hub receives several distinct tasks | Split into intent pages and keep the Hub as the overview | A category page should route players, not absorb every answer |
| Two queries ask the same task with different wording | Keep one canonical page and cover the wording in title/description/body or internal anchors | Avoid self-competition and duplicate thin pages |
| A mechanism query belongs to another category | Keep the mechanism in its canonical category and cross-link from the Hub | Taxonomy and canonical should agree |
| A page already performs well and the new evidence is weak | Observe or make one small experiment | Do not replace useful coverage on a generic Agent suggestion |
| A proposed page lacks reliable evidence or unique value | Defer | A query alone is not permission to publish a fact page |

Typical intent distinctions include an overview/category task, a task-specific guide, a named entity comparison and a building/mechanism lookup. The exact labels depend on the game; the decision must follow the player task rather than the keyword string.

## 3. Use a Hub-and-Spoke structure

For a split cluster, define the link graph before editing:

```text
Homepage or Wiki index
        ↓
Category Hub / overview page
   ↙        ↓        ↘
Intent page  Intent page  Canonical mechanism page
   ↘        ↓        ↙
      related next steps
```

Implement the graph with:

- A Hub that explains the category and links directly to each validated intent page;
- Each intent page linking back to the Hub and to the next useful page;
- Cross-category links pointing to the mechanism’s existing canonical page instead of creating a second alias;
- Clear, descriptive anchors that name the destination and its player task;
- Visible breadcrumbs that match the information architecture;
- JSON-LD breadcrumbs that use the same hierarchy and canonical paths;
- Homepage links only for the most useful search-led entries, not a keyword dump.

Do not use repeated exact-match anchors, sitewide keyword blocks or a Hub that contains no useful overview. The purpose of internal links is to help players and crawlers understand the relationship among pages.

## 4. Requirements for a new intent page

Before changing `indexable` to `true`, the page must have:

- A documented query/player task and page-matrix entry;
- A unique title, description, H1 and lead that answer that task;
- Source-backed facts with evidence state and dates for dynamic claims;
- A stable path and one canonical URL;
- A parent Hub link, at least one useful related link and a reachable route from the site navigation or index;
- No duplicate page already serving the same task;
- A place in the sitemap only when the page is actually publishable.

Use the page-production Skill for the body, sources and visuals. The SEO Skill decides the query/page architecture and validates the link/canonical consequences; it should not invent the article’s facts.

## 5. Validation checklist

### Local

- The decision matrix maps each new page to a query, task, source and action;
- The Hub, new pages and supporting mechanism pages are reachable through normal links;
- Each page has one H1, useful metadata, the intended canonical and matching breadcrumbs;
- The new page is included or excluded from `robots` and `sitemap` according to its indexability;
- Old aliases redirect or canonicalize to the chosen page, with no duplicate route;
- Related links do not produce 404s or point to a stale slug;
- The relevant typecheck, build, content, route, mobile and diff checks pass.

### Public, only when authorized

- Verify the deployed version, canonical domain, changed pages, `robots.txt` and `sitemap.xml`;
- Record sitemap or indexing submission as a separate external action;
- Do not call a page indexed because it is in the sitemap or because submission succeeded;
- Set D+7 and D+14 checks for query/page impressions, clicks, CTR, average position and discovery state.

## 6. Handoff format

Return:

1. The query-to-page decision matrix;
2. The chosen Hub, intent pages, canonical pages and link graph;
3. Files/routes/metadata/content changes and their evidence state;
4. Local and, if authorized, public validation;
5. Observe, defer and external-confirm items;
6. The next minimum D+7/D+14 measurement action.

Keep these states separate:

```text
query signal → page decision → code/content change → local validation
→ deployment → sitemap submission → discovery/indexing → durable traffic
```
