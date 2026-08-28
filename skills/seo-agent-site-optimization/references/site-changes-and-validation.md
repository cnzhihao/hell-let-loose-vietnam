# SEO Site Changes and Validation

## Phase 4: convert recommendations into changes

Map each approved item to exact routes, data objects, metadata functions, sitemap/robots logic, canonical/redirect, components or deployment configuration. For query-driven page work, first build the query-to-page matrix and use `references/query-intent-split-and-internal-links.md` to decide whether the change is a split, strengthen, consolidation, observation or defer action.

Prefer small, reversible changes with a measurement target:

- Direct internal links to important canonical pages;
- Evidence-backed title/description experiments;
- Canonical, robots and sitemap hygiene;
- Source-supported content structure improvements;
- Valid structured data and social-card completeness;
- New pages with distinct intent, reliable sources, unique value, metadata, canonical, navigation and quality checks.

For a split cluster, implement the internal links as a Hub-and-Spoke graph:

- The category or overview Hub explains the topic and links directly to each validated intent page;
- Each intent page links back to the Hub and to the next useful page;
- A mechanism or building query remains under its existing canonical category and is cross-linked rather than duplicated under a second taxonomy;
- Visible breadcrumbs and JSON-LD breadcrumbs describe the same hierarchy;
- The homepage links to selected high-value entries, not every keyword variation.

Do not create a page just because a query string differs. Require a distinct player task, source coverage, unique value, stable canonical and an observation target. Keep close wording variants consolidated and use the page-production Skill for source-backed article content.

Do not rewrite a page that is performing well just because the Agent offered a generic rewrite. Preserve strong pages when observation is better; change one meaningful variable at a time. If evidence is insufficient, defer or write “暂无可靠公开资料” instead of inventing content.

Avoid duplicate sitemap submissions or indexing requests. Check whether a previous request already succeeded before repeating an external operation.

## Phase 5: local and public validation

At minimum run the project equivalents of:

- Typecheck/lint;
- Production build;
- `git diff --check`;
- Changed-route status checks;
- One-H1, title, description, canonical, robots, sitemap, redirect and internal-link checks;
- Query-to-page matrix, Hub/intent-page reachability, breadcrumb hierarchy and duplicate-canonical checks;
- Mobile/basic layout checks when UI changed.

Without explicit deployment authorization, stop at the locally verified patch. With authorization, check the canonical domain, changed pages, assets, `robots.txt`, `sitemap.xml` and deployment/version identifier.

Record these separately:

```text
code changed
deployment succeeded
sitemap/indexing request submitted
URL actually indexed
```

## Phase 6: close the loop

Return the local/public verification and all Observe/Defer/External-confirm items to the Agent. Implement the next safe, relevant batch and verify again until the stop condition in `agent-conversation-and-decisions.md` is met.

## Completion

The workflow is complete only when the exact report was exported/verified/uploaded, relevant Agent recommendations were investigated, safe on-site tasks were done or classified, validation passed, a dated report exists and remaining work has a clear state.
