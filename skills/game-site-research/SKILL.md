---
name: game-site-research
description: Research and plan a trustworthy game hot-word website from real search intent and traceable sources. Use when the user asks to research a game, keywords, page matrix, homepage brief, icon prompt, or Level 3-style materials. Do not use it to implement or deploy the website.
---

# Game Site Research

## Purpose

Turn one game topic and a keyword list into a source-bound content system:

```text
keyword → player intent → route/page role → source → safe fact → evidence state → internal links
```

This Skill researches and plans. It does not build, deploy or publish the site.

## Use when

- Researching a game Wiki, guide site or game SEO site;
- Collecting Google, YouTube, official site, Steam, official Wiki or platform evidence;
- Building a keyword/page matrix or keyword material pack;
- Preparing homepage development information or a favicon prompt;
- Completing a Level 3-style research task.

## Non-negotiable contract

- Read `README.md`, `AGENTS.md`, current keyword files and relevant Docs before editing;
- Keep all artifacts in the named project directory and preserve unrelated user changes;
- Google results reveal intent but are not final facts;
- Prefer official sources; label community evidence;
- Never invent a source, URL, transcript, mechanism, number, platform, recipe or code;
- Dynamic facts need a collection date and a recheck item;
- Use the evidence states defined in `references/source-and-evidence.md`;
- Use SimilarWeb only if the user asks for it; do not replace it with another source;
- Do not deploy, buy a domain or send external messages as part of research.

## Inputs

Confirm or infer the smallest reasonable set of:

- Game’s canonical name;
- Project directory;
- `Docs/keywords.json` or equivalent keyword notes;
- Page matrix, homepage brief, assignment notes and previous research;
- Requested source channels and desired output;
- Whether the user wants only research or also a later page/site implementation.

Ask one short question only if the game or project cannot be determined safely.

## Main workflow

1. **Establish the source of truth.** Inspect the project, count valid keywords, read current Docs and record conflicts between old and new materials.
2. **Build the page matrix.** Before prose, assign each valid keyword an intent, route, cluster, role, priority, evidence state and internal-link role. Read `references/page-matrix-and-homepage.md`.
3. **Prepare homepage/icon inputs when requested.** Use the homepage and icon schemas in that reference; verified facts only.
4. **Research each keyword.** Use Google for discovery, YouTube for practical context, official sources for facts, and community sources only as labeled supplements. Read `references/source-and-evidence.md`.
5. **Cross-check and classify.** Resolve high-risk claims, record collection dates and keep unsupported topics as pending.
6. **Write the material package.** Follow `references/research-material-and-validation.md` for the per-keyword structure and handoff fields.
7. **Validate and hand off.** Run the checks in that reference and state what is publishable, pending or needs rechecking.

## Output

Default output is the page matrix, project-local keyword material, homepage brief when requested, icon prompt when requested, and a completion/pending summary. The output must let a later Builder or Page Skill work without guessing.

## Read references by task

- Facts, source priority, community evidence or dynamic claims: `references/source-and-evidence.md`;
- Keyword routes, clusters, homepage or icon: `references/page-matrix-and-homepage.md`;
- Material file, validation or handoff: `references/research-material-and-validation.md`.

## Completion boundary

Research completion means the files, sources and evidence states exist and pass checks. It does not mean the website is implemented, deployed, indexed or receiving search traffic.
