---
name: seo-agent-site-optimization
description: Run an evidence-driven Google Search Console → SEO Agent → website optimization loop for a live game site after launch. Use for GSC exports, SEO Agent analysis, search-data-driven site changes, verification, authorized deployment and follow-up review; do not use it to initialize a fresh clone.
---

# GSC → SEO Agent → Website Optimization

## Purpose

Turn a dated GSC snapshot into a traceable optimization loop:

```text
GSC → SEO Agent → evidence/priority → safe site changes → validation → authorized deployment → recheck
```

This is a closed loop, not a one-off SEO opinion. It applies only to the user’s named live property and local project. For a fresh clone or pre-deployment audit, use `game-site-template-builder` and `game-site-seo-readiness` first.

## Use when

- Exporting or checking GSC Performance data;
- Uploading a GSC XLSX to the user’s SEO Agent;
- Asking for today’s SEO goal or continuing the Agent conversation;
- Optimizing titles, descriptions, headings, internal links, canonical, robots, sitemap, structured data or content gaps;
- Verifying, deploying and reviewing search-data-driven changes.

## Non-negotiable contract

- Resolve the exact GSC Property; never infer it from a similar project name;
- Start read-only and inspect `AGENTS.md`, `README.md`, current SEO reports, routes/data, scripts and Git status;
- Do not invent GSC history for a new clone; no-data sites use the technical/readiness workflow instead;
- Keep report period, search type, timezone and filters explicit;
- Separate GSC observations from third-party estimates and hypotheses;
- Evaluate all relevant safe on-site tasks, not only P0;
- Do not treat sitemap submission, indexing request or realtime testing as indexing or durable traffic;
- Use `apply_patch`, preserve user changes and do not write secrets;
- Do not publish posts, place links, contact people, create accounts, pay or submit externally without exact authorization;
- Deploy only when the user explicitly authorizes deployment.

## Main workflow

1. **Establish scope and access.** Confirm domain, Property, period, timezone, filters and whether work is local-only or may be deployed. Read `references/scope-and-gsc.md`.
2. **Export and verify GSC.** Keep the original XLSX, verify its identity/format and record clicks, impressions, CTR, average position, top queries, top pages and limitations.
3. **Upload to the matching SEO Agent session.** Check the displayed domain character-for-character before confirmation; avoid duplicate reports/sessions.
4. **Run a deliberate multi-turn analysis.** Use `references/agent-conversation-and-decisions.md` to reconcile query/page data, inspect intent, prioritize work and classify every recommendation.
5. **Implement safe site changes.** Map recommendations to exact routes/data/metadata/index files. Use `references/site-changes-and-validation.md`; use the project’s research/page Skill for source-backed new content.
6. **Validate and deploy only if authorized.** Check local and, when authorized, public pages, assets, robots and sitemap. Keep code, deployment, submission and indexing as separate facts.
7. **Send results back and continue.** Recheck the new state for 2–4 meaningful rounds, then stop when remaining work is observation-only, unsupported, repetitive or authorization-bound.
8. **Record the handoff.** Use `references/report-template.md` and report evidence, decisions, changes, validation, deployment, external actions and observation dates.

## Required references

- GSC scope, export, upload and no-data handling: `references/scope-and-gsc.md`;
- Agent prompts, follow-ups, decision classes and stop condition: `references/agent-conversation-and-decisions.md`;
- Site changes, validation, deployment and completion: `references/site-changes-and-validation.md`;
- External publishing boundary: `references/external-action-boundary.md`;
- Dated report structure: `references/report-template.md`.

Read the external-action reference before any public submission discussion and the site-change reference before editing or deploying.

## No-data rule

If GSC has no usable data, do not invent SEO recommendations. Perform technical/site-readiness checks and set a D+7/D+14 observation plan.

## Completion boundary

The loop is complete only when the exact report was verified/uploaded, relevant Agent recommendations were investigated, safe in-scope changes were implemented or classified, checks passed, a dated report exists and remaining work has an explicit state.
