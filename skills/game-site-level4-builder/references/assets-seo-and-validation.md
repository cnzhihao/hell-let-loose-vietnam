# Assets, SEO and Local Validation

## Asset workflow

Prefer the official website, Steam, official Wiki, official YouTube and official platform storefronts. Reference sites are for structure research, not game-image downloads.

For every new image:

1. Put it in `public/assets/`;
2. Update `Docs/素材清单.md`;
3. Update `public/assets/asset-manifest.json` and keep it valid JSON;
4. Record file name, dimensions, use, source, attribution, collection date and release risk;
5. Add meaningful `alt` text;
6. Do not treat “official source” as proof of commercial redistribution rights.

Use a main visual first, then 1–2 high-priority entry icons, and only then consider large banners. A 16×16 icon is not a hero image.

## Page checks

For every implemented route check:

- accurate Title and Description;
- exactly one main H1;
- sensible H2/H3 order;
- clickable homepage/index/entry/Guide links;
- real official URLs with clear labels and safe `target`/`rel`;
- meaningful image `alt` text;
- clear Not found for an unknown slug;
- search results and category anchors work;
- no mobile overflow;
- no old game name, domain, sitemap, robots, analytics ID or CTA.

Measure title and description length with a script when the project specifies a range. Length alone does not prove usefulness or accuracy.

## Local validation

Run the project-equivalent checks, commonly:

```bash
jq empty Docs/keywords.json public/assets/asset-manifest.json
pnpm content:check
pnpm check
pnpm build
git diff --check
pnpm dev
```

Use curl or a local browser to inspect the homepage, Wiki, Guide, at least one real entry, all implemented routes and static assets. Record status codes, metadata, heading structure, navigation, official CTAs, Sources/Related pages, image loading and desktop/narrow-screen behavior.

## Handoff and completion

Update the project’s Level 4 change log when one exists. Record starting problem, references, structural/visual changes, implemented routes, assets and sources, SEO checks, build/local/browser results, screenshots, GitHub, deployment and the next step.

Separate three states:

| State | May claim | May not claim |
|---|---|---|
| Materials complete | Sources, facts, keywords and evidence are prepared | Website complete |
| Website implementation complete | Local homepage, index, entry, Guide and checks pass | Live, indexed or receiving traffic |
| Delivery loop complete | Screenshots, code version and assignment materials are organized/submitted | GSC/GA has search data |

In this starter, template mode should also be checked: robots must disallow crawling, sitemap should be empty and placeholder entries must be noindex. Do not deploy, buy a domain or configure GSC/GA unless the user explicitly asks.
