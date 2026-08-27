# Launch Audit

## Scope record

Record:

~~~text
Project / clone:
Audit date and timezone:
Mode: template | local pre-launch | authorized public check
Configured origin:
Expected launch origin:
Routes in scope:
Git commit:
~~~

## Route inventory

| Route | Intended role | Reachable link | Status | Indexable decision | Evidence |
|---|---|---:|---:|---:|---|
| / | Wiki entry point | yes/no | pass/fail | index/noindex | local URL or test |
| /wiki | directory | yes/no | pass/fail | index/noindex | local URL or test |
| /wiki/<category> | category | yes/no | pass/fail | index/noindex | local URL or test |
| /guides/<slug> | task guide | yes/no | pass/fail | index/noindex | local URL or test |

Add every real route; do not summarize a family of pages without checking representatives.

## Audit sequence

1. Run pnpm content:check and confirm duplicate paths/slugs are absent.
2. Run pnpm check and pnpm build.
3. Start the local server and inspect page HTML/head for home, index, category, entry and Guide.
4. Fetch robots.txt, sitemap.xml and manifest.webmanifest.
5. Test a missing category/entry, internal links and narrow viewport.
6. Run git diff --check and search for stale project residue.
7. Record blockers and whether the decision is “keep template mode”, “ready for authorized deployment” or “needs content work”.

## Evidence language

Use precise states:

- local route passes: reachable in the local build;
- metadata passes: expected tags match the source content;
- template-safe: no accidental crawling/indexable placeholders;
- ready for authorized deployment: local gates pass; no external action was performed;
- deployed: only after a real public deployment is observed;
- indexed: only after a search engine report proves it.
