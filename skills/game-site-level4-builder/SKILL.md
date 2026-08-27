---
name: game-site-level4-builder
description: Build or review a player-first game Wiki or game hot-word site from verified keyword materials. Use for Level 4 site implementation, reference-object study, homepage/Wiki/Guide routes, real game assets, local SEO checks or Level 4 handoff. Do not treat local implementation as deployment.
---

# Game Site Level 4 Builder

## Purpose

Turn verified keywords, page matrices, materials and assets into a player-first Wiki site that can be visited locally. This Skill owns Level 4 content generation, frontend implementation and local delivery; deployment, domain, GSC/GA and data review are later scopes unless explicitly requested.

## Use when

- Entering or completing Shengcai Level 4;
- Turning `keywords.json` or keyword materials into a site;
- Building or redesigning a game Wiki, guide site or game SEO site;
- Studying reference sites and mapping their information architecture;
- Implementing homepage, Wiki index, categories, real entries or beginner Guides;
- Adding traceable game assets or checking page SEO, navigation and mobile layout.

If the request is only research, use `game-site-research`. If it is one inner page, use `wiki-page-builder`. If it is a YouTube frame, use `youtube-keyframe-extractor`.

## Non-negotiable contract

- Read `README.md`, `AGENTS.md`, current Level 4 materials and Git status before editing;
- Facts must come from verified materials; never invent mechanisms, recipes, dates, platforms, codes, URLs or transcripts;
- Reference sites are for structure study, not copied content, code, branding, images or links;
- Keep content in a data layer and routes in a route layer;
- New assets require an inventory entry and valid `asset-manifest.json`;
- Use `apply_patch`, preserve user changes and do not write secrets;
- Keep local implementation, GitHub, deployment, indexing and traffic as separate states;
- Do not deploy, buy a domain or configure GSC/GA unless explicitly authorized.

## Inputs and preflight

Read the required files and inspect the existing routes, components, data, styles, package/deployment scripts and assets. Record what is complete for research, code, local validation, screenshots, GitHub, deployment and analytics. The exact file list and reference-object procedure are in `references/project-read-and-reference-study.md`.

## Main workflow

1. **Read the project and establish scope.** Use the preflight reference; do not immediately edit.
2. **Study reference objects.** Compare official Wiki, database Wiki, beginner guide and one supplemental reference. Record structure mapping in project Docs.
3. **Model content.** Map each page to keyword, intent, cluster, evidence state, sources and internal links. Use `references/content-model-and-site-implementation.md`.
4. **Implement the minimum site.** Provide homepage search/quick entries/categories, Wiki index, at least one real entry and a beginner Guide. Adapt route names to the project.
5. **Collect and integrate assets.** Use official sources first and register every new asset according to `references/assets-seo-and-validation.md`.
6. **Check SEO and accessibility.** Verify metadata, one H1, heading hierarchy, links, images, Not found behavior, mobile layout and old-project residue.
7. **Validate locally.** Run project-equivalent JSON, typecheck, build, diff, route, asset and browser checks.
8. **Update the Level 4 record and hand off.** Report files, completed state, unfinished work, actual checks and the next minimum action.

## Required references

- Preflight and reference-object study: `references/project-read-and-reference-study.md`;
- Content model and minimum routes: `references/content-model-and-site-implementation.md`;
- Assets, SEO, local validation and handoff: `references/assets-seo-and-validation.md`.

Read only the references relevant to the current subtask, but do not skip the asset reference when adding images or the validation reference before handoff.

## Completion boundary

Level 4 website implementation is complete only when local homepage, Wiki/index, real entry, Guide and structural checks pass, and the actual state is recorded. It does not mean the site is live, indexed or receiving search traffic.
