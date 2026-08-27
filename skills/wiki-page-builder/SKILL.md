---
name: wiki-page-builder
description: Produce, rewrite, enrich or audit one player-first game Wiki, Guide or mechanism page from verified materials. Use for Map, Water, Lava, resource, building, research, Seed or Mod pages, actionable instructions, screenshots, keyframes, arrows and source attribution. Do not use it for whole-site architecture or deployment.
---

# Wiki Page Builder

## Purpose

Turn one keyword or player question into a page that lets a new player complete a minimum successful action and understand the next step. A route is only an address; the page must answer a concrete task.

## Use when

- Creating, rewriting, enriching or auditing one Wiki/Guide/mechanism page;
- Building Map, Water, Lava, Aura, resource, building, research, logistics, Seed or Mod content;
- Adding screenshots, YouTube keyframes, diagrams, arrows, captions, attribution or Sources;
- Reviewing whether a beginner can actually complete the described operation.

For keyword research use `game-site-research`; for site-wide routes use `game-site-level4-builder`; for video frame extraction use `youtube-keyframe-extractor`.

## Non-negotiable contract

- Read `README.md`, `AGENTS.md`, the page-production plan and target materials before editing;
- Start with a player task brief, not prose;
- Facts must come from reliable sources; label community cases and pending claims;
- Do not turn incomplete subtitles, player workarounds, exact recipes, keys, prices, Seeds or version assumptions into facts;
- Keep data, route, visuals and source layers separate;
- New images require inventory and manifest updates;
- Preserve user changes and use `apply_patch`;
- Review-only requests are read-only; do not deploy, change GSC/GA or publish externally unless explicitly asked.

## Main workflow

1. **Preflight.** Inspect current page, sources, assets, components and Git state. Read `references/page-brief-and-writing.md`.
2. **Write the page brief.** Define the player’s starting state, first click/key, expected result, failure check and next step.
3. **Verify facts.** Separate official mechanism, official demonstration, community example and pending lead.
4. **Build the action chain and article.** Use the task-first structure in the page-writing reference; each core H2 solves one action.
5. **Match visuals to actions.** Use `references/visual-evidence-and-annotations.md`; do not use unrelated covers as tutorial evidence.
6. **Integrate content and sources.** Put data in the content layer, add captions/credits/timestamped links and update asset records.
7. **Validate from player and engineering views.** Use `references/page-acceptance-and-handoff.md`.
8. **Hand off accurately.** Report files, completed page steps, pending evidence, checks and the next minimum action.

## Required references

- Page brief, evidence boundary, action chain and article structure: `references/page-brief-and-writing.md`;
- Visual selection, `WikiVisual` annotations and attribution: `references/visual-evidence-and-annotations.md`;
- Data/route separation, acceptance checklist and handoff: `references/page-acceptance-and-handoff.md`.

Read the visual reference only when visuals are involved, but always read the acceptance reference before handoff.

## Completion boundary

The page is complete when its player task, evidence boundary, content integration, visual/source records and local checks are complete. This does not mean the site is deployed, indexed or receiving search traffic.
