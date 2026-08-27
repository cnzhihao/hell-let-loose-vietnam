---
name: game-site-template-builder
description: Initialize a new game Wiki or game information site from the reusable TanStack starter. Use when cloning this repository, replacing site/game configuration, wiring the content contract, checking template-mode indexing safety, or preparing a new site for later research and local implementation. Do not use it to modify an existing production site.
---

# Game Site Template Builder

## Purpose

Turn a clean clone of this repository into an isolated, correctly configured new game-site workspace:

```
clean clone → baseline check → site/game config → content contract
→ route and indexing safety → local validation → handoff to research/build
```

This Skill owns initialization and readiness of the starter. It does not own game research, bulk writing, deployment, search-console submission or external outreach.

## Use when

- Starting a new game Wiki, guide site or game information site from this repository;
- Checking that a clone is still generic and cannot accidentally expose template pages to search engines;
- Replacing `src/config/website.ts`, `src/config/game.ts` and the starter content model;
- Deciding whether content should remain in the starter data file or be split into entry modules;
- Preparing the workspace for `game-site-research` and `game-site-level4-builder`.

If the task is choosing a game or keyword, use `game-site-research`. If it is implementing pages, use `game-site-level4-builder`. If it concerns a live site’s GSC data, use `seo-agent-site-optimization`.

## Hard boundaries

- Work only inside the new clone named by the user; never modify another site to make the template pass;
- Preserve the default template safety state until real game identity, sources and content are ready;
- Never invent official URLs, game facts, metrics, credentials, domains or analytics IDs;
- Do not copy a previous site’s content, `robots.txt`, sitemap, canonical, domain, analytics or brand into the new site;
- Do not deploy, change DNS, configure GSC/GA/Bing, request indexing or publish externally unless separately authorized;
- Use `apply_patch` for text/code edits and preserve unrelated user changes;
- Treat generated route, locale and Cloudflare files as outputs of their generators, not hand-edited source.

## Required references

Read progressively:

1. `references/clone-and-safety.md` for repository isolation and baseline checks;
2. `references/config-and-content-contract.md` when replacing configuration or starter entries;
3. `references/ready-check.md` before handing the workspace to research/build or changing template mode.

## Main workflow

### 1. Establish the clone boundary

Read the clone’s `README.md`, `AGENTS.md`, `package.json`, `src/config/`, `src/content/`, routes and `git status`. Confirm the current site path and the new clone path are different. Stop before editing if the requested path is an existing production site or a dirty repository whose ownership is unclear.

### 2. Verify the framework baseline

Confirm the starter still uses React + TanStack Start/Router + Vite + Tailwind and that the Cloudflare Worker configuration is present. Install dependencies only in the new clone and run the smallest baseline checks needed to identify pre-existing failures.

### 3. Replace identity through configuration

Put the verified game identity in `src/config/game.ts` and the site identity, production URL, navigation and theme in `src/config/website.ts`. Keep the configuration free of secrets. `isTemplate` remains `true` while starter content or source links are placeholders.

### 4. Replace the content contract

Use the types in `src/content/types.ts`. Build categories and entries from the research matrix; each entry needs a stable slug, category, page type, summary, lead, evidence state, update date, sources and related slugs. Use a custom `path` only when the URL is intentionally different from the default Wiki path.

### 5. Keep indexing safe

Before real content is ready, verify that template entries are not indexable, robots disallows crawling and sitemap has no URLs. When a real site is ready, make each indexable page source-backed, set a real canonical origin, change `isTemplate` to `false`, and rerun content, SEO and browser checks together.

### 6. Validate and hand off

Run content, locale, type, build and relevant browser checks. Inspect `/`, `/wiki`, a category, an entry, `/guides`, `/robots.txt` and `/sitemap.xml`. Report what is configured, what remains research-only, whether template mode is still active and the next Skill to use.

## Standard output

1. Clone path and repository boundary;
2. Framework baseline and command results;
3. Configuration files changed;
4. Content categories/entries and source readiness;
5. Template indexing state;
6. Validation results and unresolved blockers;
7. One next minimum action, normally `game-site-research`.

Initialization is complete only when the new clone is isolated, the content contract validates, the starter routes work locally and the indexing state is explicitly reported. It does not mean the site is ready to deploy or has search traffic.
