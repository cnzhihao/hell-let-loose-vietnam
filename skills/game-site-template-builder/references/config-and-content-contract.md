# Configuration and Content Contract

## Configuration

`src/config/game.ts` contains game-facing identity:

```ts
{
  name: string
  shortName: string
  description: string
  status: string
  defaultLocale: AppLocale
  officialLinks: { label: string; href: string }[]
}
```

`src/config/website.ts` contains site-facing identity and behavior:

```ts
{
  name: string
  description: string
  url: string | null
  repository: string
  isTemplate: boolean
  navigation: { href: string; labelKey: string }[]
  colors: { background: string; theme: string }
}
```

Use real HTTPS URLs only after opening and verifying them. A missing URL is safer than an invented URL. Do not place API keys, measurement IDs or tokens in either config file.

## Wiki entry contract

The current starter type is the source of truth. Keep these fields meaningful:

```ts
{
  slug: string
  categorySlug: string
  path?: string
  title: string
  pageType: 'entry' | 'guide' | 'access' | 'update'
  summary: string
  lead: string
  status: string
  evidenceState: 'verified' | 'single-official-source' | 'community-lead' | 'pending'
  updated: string
  keywords: string[]
  indexable: boolean
  facts: { label: string; value: string }[]
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  sources: { label: string; href: string; type: string; note?: string }[]
  relatedSlugs: string[]
}
```

An indexable entry needs at least one reliable source. A community lead can be useful for research but must remain non-indexable or visibly pending until verified. `updated` should reflect the latest source review, especially for prices, release status, versions and platforms.

## Split threshold

Keep a small prototype in `src/content/site.ts`. Split to `src/content/entries/<slug>.ts` or another documented content loader when entries become difficult to review in one file, but retain one shared type, one validation path and deterministic route generation. Do not move article prose into route components.
