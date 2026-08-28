# Wiki Page Acceptance and Handoff

## Data, route and component separation

- Put copy, sections, visuals, sources and flow data in the existing content layer, commonly `src/content/site.ts` or split entry modules under `src/content/`;
- Keep `slug`, `categorySlug`, optional `path`, `pageType`, `indexable`, `evidenceState`, `sources` and `relatedSlugs` aligned with the shared content type;
- Let routes find a slug and render it, not contain the full article;
- Reuse shared visual, step-card, diagram and Sources components;
- For a GSC-driven intent page, carry the query/player task, parent Hub, canonical path, related-page targets and indexability decision into the page brief;
- Write `alt` text that describes the visible UI or action;
- Keep images and cards in one width container;
- Do not modify unrelated site navigation, SEO, deployment configuration or pages;
- A review-only request is read-only by default; edit only when asked.

## Acceptance checklist

### Player view

- [ ] A new player finds the first step above the fold;
- [ ] Every step says what to click, where to look and what happens;
- [ ] The page includes a minimum successful action;
- [ ] Failure troubleshooting identifies the first check;
- [ ] Main flow and Advanced content are separate;
- [ ] Research-process wording and marketing statistics are not used as body copy.

### Evidence and assets

- [ ] Each key fact has a reliable source or a visible pending label;
- [ ] Community videos are not presented as official mechanics;
- [ ] Keyframes are actual video frames with a public URL and timestamp;
- [ ] Image source is clickable below or beside the image;
- [ ] New assets are recorded in the inventory and manifest;
- [ ] SVG arrows point to real targets and do not cover important content.

### Engineering

- [ ] Page and route responsibilities are clear;
- [ ] Exactly one H1 and sensible H2/H3 hierarchy;
- [ ] All images load and `alt` text is meaningful;
- [ ] No horizontal overflow;
- [ ] Target and at least one adjacent page work locally;
- [ ] `pnpm check`, `pnpm build` and `git diff --check` pass;
- [ ] Changed JSON parses successfully;
- [ ] Local implementation, indexing request and realtime test are not called deployment, indexing or durable traffic.

## Handoff format

Report:

1. Files changed;
2. Page substeps completed;
3. Sources, visuals or user confirmations still pending;
4. Validation and results;
5. Next minimum action.

If not deployed, state explicitly: “本地页面已完成，未执行公网部署”。
