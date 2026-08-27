# Content Model and Site Implementation

## Data-first content model

Keep page content in `src/content/` or the project equivalent. In this starter, `src/content/types.ts` is the contract and `src/content/site.ts` is the initial data source. Routes should find an entry and render it, not contain the whole article.

```ts
type WikiEntry = {
  slug: string
  title: string
  categorySlug: string
  path?: string
  pageType: 'entry' | 'guide' | 'access' | 'update'
  summary: string
  lead: string
  status: string
  evidenceState: 'verified' | 'single-official-source' | 'community-lead' | 'pending'
  updated: string
  keywords: string[]
  indexable: boolean
  sources: { label: string; href: string }[]
  relatedSlugs: string[]
  facts: { label: string; value: string }[]
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
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
- `/wiki/<category>/<entry>`: at least one real entry with reliable sources;
- `/guides` or the project’s Guides route: beginner guide with breadcrumb, summary, Short answer, steps, facts, Sources and Related pages.

Use the framework’s internal Link component when the project has one; otherwise keep ordinary crawlable anchors with stable hrefs. Keep parent layouts, index routes and dynamic entry routes clear. Search results must land on real pages; missing slugs must render a clear Not found state.

## Content boundaries

Facts must come from the research materials. Official labels override player guesses. Dynamic facts carry collection dates. If subtitles are incomplete, describe only the title, description, chapters or visible content that was actually checked. Evidence gaps remain visible instead of becoming definitive copy.
