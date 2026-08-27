---
name: game-site-seo-readiness
description: Audit a new game Wiki template before authorized deployment. Use for route-level SEO, metadata, canonical, robots, sitemap, structured data, crawlability, content indexability and launch-readiness checks. Do not use it for live GSC performance analysis or external link outreach.
---

# Game Site SEO Readiness

## Purpose

Turn a locally implemented game Wiki into an evidence-backed launch decision:

~~~text
routes/content → metadata/canonical → crawl controls → sitemap/schema
→ internal links/accessibility → local audit → launch blockers
~~~

This is a pre-deployment technical and content-readiness audit. It does not submit URLs, deploy, promise rankings or replace the live-data workflow in seo-agent-site-optimization.

## Use when

- A new clone has finished its first Wiki/Guide implementation;
- The user asks whether the site is technically ready for search crawling;
- A route, title, description, canonical, robots, sitemap or JSON-LD needs auditing;
- Template mode is being switched to a real-site mode;
- A pre-launch checklist is needed before authorized deployment.

Use game-site-template-builder for identity/content initialization, game-site-level4-builder for page implementation and seo-agent-site-optimization only after a live property has usable GSC data.

## Hard boundaries

- Read and audit first; do not silently deploy or submit a sitemap/indexing request;
- Never mark a page indexable without a real player intent, useful content and reliable source;
- Do not use source count, word count or URL count as a quality substitute;
- Keep template mode safe: no stale domain, no fake links, no indexable placeholders;
- Distinguish local canonical output from a publicly deployed canonical;
- Use apply_patch for requested local changes and preserve existing work;
- Report blockers and observations separately from recommendations.

## Required references

Read progressively:

1. references/launch-audit.md for the audit sequence and evidence table;
2. references/metadata-and-crawl-contract.md when checking head tags, robots, sitemap or structured data;
3. references/content-indexability.md when deciding whether pages can leave noindex.

## Main workflow

### 1. Establish scope

Read README.md, AGENTS.md, src/config/, src/content/, route files, Docs page matrix, build scripts and Git status. Confirm whether this is template-only, local pre-launch or an authorized public deployment. The default action is local-only.

### 2. Inventory reachable pages

List home, Wiki index, categories, entries, Guides, custom paths and machine-readable endpoints. Check that every intended page is reachable from a crawlable internal link and that invalid paths return a clear 404/noindex response.

### 3. Audit page-level SEO

For each intended indexable page, check one H1, useful title/description, stable canonical, matching Open Graph fields, correct language and structured data. Compare the output against the content source; do not approve metadata that describes a different page.

### 4. Audit crawl controls

In template mode, require noindex, Disallow: / and an empty sitemap. In launch mode, require a real configured origin, isTemplate: false, only source-backed indexable entries and a sitemap containing only those routes. Check that no old game/domain/analytics residue remains.

### 5. Audit quality and links

Check the page matrix, source status, dynamic fact dates, related links, official CTA destinations, image alt text, mobile overflow, headings and missing content. A pending page can remain useful in the local directory but should not enter the public sitemap.

### 6. Validate and hand off

Run the project checks, inspect rendered local HTML/endpoints and record each pass, fail, pending item and evidence. Give one launch blocker list and one next minimum action. Only continue to deployment if the user authorizes it separately.

## Completion boundary

SEO readiness is complete when the audit has a dated scope, route inventory, page-level results, crawl-control results, source/indexability decisions, command/browser evidence and an explicit launch decision. It does not mean the site is deployed, indexed or receiving traffic.
