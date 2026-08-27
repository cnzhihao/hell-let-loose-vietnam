# SEO Site Changes and Validation

## Phase 4: convert recommendations into changes

Map each approved item to exact routes, data objects, metadata functions, sitemap/robots logic, canonical/redirect, components or deployment configuration.

Prefer small, reversible changes with a measurement target:

- Direct internal links to important canonical pages;
- Evidence-backed title/description experiments;
- Canonical, robots and sitemap hygiene;
- Source-supported content structure improvements;
- Valid structured data and social-card completeness;
- New pages with distinct intent, reliable sources, unique value, metadata, canonical, navigation and quality checks.

Do not rewrite a page that is performing well just because the Agent offered a generic rewrite. Preserve strong pages when observation is better; change one meaningful variable at a time. If evidence is insufficient, defer or write “暂无可靠公开资料” instead of inventing content.

Avoid duplicate sitemap submissions or indexing requests. Check whether a previous request already succeeded before repeating an external operation.

## Phase 5: local and public validation

At minimum run the project equivalents of:

- Typecheck/lint;
- Production build;
- `git diff --check`;
- Changed-route status checks;
- One-H1, title, description, canonical, robots, sitemap, redirect and internal-link checks;
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
