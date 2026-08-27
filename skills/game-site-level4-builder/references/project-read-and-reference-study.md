# Project Read and Reference Study

## Preflight inputs

Before editing, read:

- `README.md` and `AGENTS.md`;
- `Docs/keyword-materials.md` or the project equivalent;
- `Docs/keywords.json` or the project equivalent;
- the README page matrix;
- `Docs/reference-objects.md` or the project equivalent;
- `Docs/素材清单.md` and `public/assets/asset-manifest.json` when present;
- `package.json`, Vite/Wrangler configuration, routes, components and data;
- `git status --short --branch`.

Record which parts are complete: research, code, local validation, screenshots, GitHub, deployment and analytics. Do not overwrite changes whose meaning is unknown.

This repository already uses `TanStack Start + React + TanStack Router` with Cloudflare Workers configuration. Preserve that baseline for a new clone; do not replace it with an unrelated stack during content implementation. If the Skill is reused in another project, inspect its actual `package.json` before making a framework claim.

## Reference-object study

Compare multiple reference types and record the observations in the project’s reference document:

- Official game Wiki: search, categories, dense entry lists;
- Database-style Wiki: tags, categories, status and related pages;
- Beginner guide: breadcrumb, summary, steps, callouts, contents, Sources and Related pages;
- Supplemental reference: facts, FAQ, page grouping or quick entries.

Map player tasks to the target structure rather than copying a site. Useful mappings include:

| Player task | Target structure |
|---|---|
| I know the keyword | Homepage search → `/wiki/<slug>` |
| I do not know the keyword | `/wiki` category → entry list |
| I am new to the game | Guides → beginner and related mechanism pages |
| I need platform or update status | Dedicated Steam, Demo, Game Pass, Online or Updates page |

The homepage’s first job is fast search, category browsing or entry into a beginner guide. Long project introductions, team stories, generic FAQs and SaaS-style CTAs must not displace those paths.

If a separate visual-design Skill is available, follow its plan → self-check → build → preview → critique loop before a visual overhaul. Otherwise derive color and a recognizable signature element from real game material.
