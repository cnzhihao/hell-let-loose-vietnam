# Content Model and Site Implementation

## Data-first content model

Keep page content in `src/data/` or the project equivalent. Routes should find an entry and render it, not contain the whole article.

```ts
type WikiEntry = {
  slug: string
  title: string
  category: string
  kind: string
  summary: string
  status: string
  updated: string
  keywords: string[]
  sources: { label: string; href: string }[]
  related: string[]
  facts?: { label: string; value: string }[]
  lead?: string
  sections?: { heading: string; paragraphs: string[] }[]
}
```

Before writing each page, confirm:

- keyword and player intent;
- cluster: entry, beginner, knowledge, mechanism, platform, update or community;
- evidence state;
- parent, sibling, official CTA and Sources links.

The first screen should answer the question quickly with page type, one H1, summary, status/updated date and Short answer or Quick facts. Use 3–5 focused H2 sections. Do not expand thin source material mechanically to hit a word count.

## Minimum site routes

Adapt names to the existing project, but provide:

- `/`: search, popular/quick entries, categories and beginner Guide;
- `/wiki`: search, category groups, anchors/sidebar, official links and evidence hints;
- `/wiki/<slug>`: at least one real entry with reliable sources;
- `/guide` or the project’s Guides route: beginner guide with breadcrumb, summary, Short answer, steps, facts, Sources and Related pages.

Use the framework’s internal Link component for site navigation. Keep parent layouts, index routes and dynamic entry routes clear. Search results must land on real pages; missing slugs must render a clear Not found state.

## Content boundaries

Facts must come from the research materials. Official labels override player guesses. Dynamic facts carry collection dates. If subtitles are incomplete, describe only the title, description, chapters or visible content that was actually checked. Evidence gaps remain visible instead of becoming definitive copy.
