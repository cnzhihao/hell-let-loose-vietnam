# Template Ready Check

## Local route checklist

- [ ] `/` renders a player-first Wiki entrance;
- [ ] `/wiki` lists categories and starter/real entries;
- [ ] `/wiki/<category>` validates the category and exposes its entries;
- [ ] `/wiki/<category>/<entry>` renders or returns a clear 404;
- [ ] custom Guide paths have one canonical route and old paths redirect if needed;
- [ ] `/guides` and at least one Guide work;
- [ ] `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest` return the right content type.

## SEO safety checklist

Template mode:

```text
robots: Disallow: /
sitemap: zero URLs
pages: noindex
```

Ready-to-publish mode:

```text
real websiteConfig.url
isTemplate: false
only source-backed entries indexable
sitemap: only indexable routes
```

Do not mark the second state complete until every indexable entry has a source, title, description, canonical path, one H1 and a useful internal-link path.

## Commands

```bash
pnpm content:check
pnpm locale:check
pnpm check
pnpm build
pnpm e2e
git diff --check
```

Do not claim deployment, indexing or traffic from these local checks.
