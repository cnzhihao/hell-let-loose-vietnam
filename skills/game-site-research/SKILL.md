---
name: game-site-research
description: Research and plan a trustworthy game hot-word website. Use this skill whenever the user asks to build a game wiki, game guide site, game SEO site, keyword material pack, page matrix, homepage development brief, favicon/icon prompt, or Level 3-style research using Google, YouTube, the official game website, Steam, official wikis, Xbox or other official storefronts. It turns a game topic and keyword list into a page matrix plus traceable, cross-checked content materials, and it must be used even when the user only says “查资料”“做关键词素材” or “按这些词生成网站内容”.
compatibility: Requires web search/page inspection when facts are current or niche, filesystem access for the project directory, and JSON/Markdown file editing. SimilarWeb is optional and must not be substituted with another source unless the user asks.
---

# Game Site Research

## Purpose

Turn a game topic and keyword list into a trustworthy website content system. The important output is not a fluent game description; it is a traceable mapping from search intent to page, source, fact, uncertainty, and internal-link role.

Use this skill for one game at a time. Keep every artifact inside the user-designated project folder and preserve unrelated files.

## Inputs

Collect or infer these inputs before researching:

- Game topic or canonical game name.
- Project directory. If the user names a project folder, use it; do not write research files in the workspace root.
- Existing Docs/keywords.json, keyword notes, assignment/manual notes, homepage brief, and previous research.
- Requested research scope: Google, YouTube, official site, Steam, Xbox, other official storefronts, official wiki, or community sources.
- Whether the user wants only a report, or also page briefs, homepage JSON, icon prompt, or site implementation.

If the game name or project directory is genuinely unavailable, ask one short question. Otherwise make the smallest reasonable assumption and record it in the output.

## Core principles

1. Google is a discovery channel, not the final authority. Use it to find search intent and candidate pages; confirm facts on the original page.
2. Prefer official sources in this order: official website, official storefront, official wiki, official news/community, then reputable secondary or player sources.
3. YouTube and community posts add practical context. They do not override an official store label or official wiki fact.
4. Never invent a source, transcript, game mode, release date, code, recipe, statistic, platform, or URL.
5. Never include a 404, redirected-to-nowhere, blocked-as-unopenable, suspicious SEO, third-party download, or competitor page merely to fill a source slot.
6. If evidence is incomplete, say so. “No reliable public source found” is a valid result.
7. Dynamic facts such as release status, updates, reviews, price, language support, and platform availability must include a collection date and be rechecked before publication.
8. Do not claim a complete YouTube transcript unless a transcript was actually obtained. If only the title, description, chapters, or visible page were inspected, say exactly that.
9. SimilarWeb is skipped when the user says to skip it. Do not present another tool as SimilarWeb data.
10. Separate research from implementation. Do not generate or deploy the website unless the user asks for that additional action.

## Workflow

### 1. Establish the project and source of truth

- Locate the project directory and list its files.
- Read Docs/keywords.json and count the keywords.
- Read any manual or assignment notes that define the required deliverables.
- Treat the latest verified research file as authoritative if older assignment notes contradict it, but record the mismatch so the assignment can be synchronized later.
- Keep machine-readable data in JSON and human-readable research in Markdown.

Expected project artifacts may include:

- Docs/keywords.json
- homepage development information in JSON and/or Markdown
- page matrix or assignment notes
- keyword research material in Markdown
- optional icon prompt or generated icon asset
- optional test cases under the skill directory

### 2. Build the page matrix before writing prose

Map one homepage plus one route per valid keyword unless there is a clear reason to merge or exclude a term.

For every keyword, record:

| Field | Meaning |
|---|---|
| Keyword | Exact search phrase |
| Route | Stable page path |
| Search intent | What the player wants to know or do |
| Cluster | Beginner, wiki, map, platform, resource, updates, community, or other |
| Page role | Hub, guide, transactional/CTA, news, reference, or cautious placeholder |
| Priority | P0, P1, or P2 |
| Evidence status | Cross-checked, single official source, community lead, or pending |
| Internal links | Parent hub, sibling pages, and official CTA targets |

Use the following common clusters:

- Entry: homepage and beginner guide.
- Knowledge: wiki, map, systems, research.
- Access: Steam, Demo, release date, Game Pass, online status.
- Mechanics: water, lava, resources, progression, endgame systems.
- Freshness/community: updates, cheats/debug mode, mods, player questions.

Do not create a page for an unrelated autocomplete term simply because it appears in Google. Mark it as filtered and explain why.

### 3. Prepare the homepage development brief

If the user asks for the website prompt or homepage information, create a structured brief containing:

- Home meta title and 140–160 character description.
- Hero eyebrow, title, description, stats, CTAs, and video label.
- Four start-here cards with distinct intents.
- About-game paragraphs and label/value stats.
- Final CTA and footer links.
- Theme colors for light and dark modes.
- Language priority based on official language support and source availability.
- A self-check for title length, description length, pure-string hero stats, four cards, label/value stats, footer copy, and code availability.

Use only verified figures. If a number is dynamic or uncertain, omit it or label it for recheck.

### 4. Prepare the icon prompt

When the workflow includes icon generation, write an English prompt suitable for a 512×512 PNG favicon. Base the visual direction on verified official branding or recognizable game motifs, such as the official logo, palette, resources, terrain, factory, or central mechanic.

Do not claim that an icon file was generated unless a real image asset exists in the project folder. A prompt and an image are separate deliverables.

### 5. Research each keyword through four channels

For each route, do the following:

#### Google

- Create a clean search URL for the exact keyword.
- Record useful original results and the question they reveal.
- Do not copy a search snippet as fact.
- Do not treat ranking position as permanent unless a dated observation is explicitly needed.

#### YouTube

- Find up to two relevant videos with real watch URLs.
- Record title, channel, date if visible, and the practical question the video helps answer.
- Prefer official videos for announcements and player videos for demonstrations.
- If two dedicated videos do not exist, record the shortage and do not pad the section with unrelated videos.
- Distinguish direct evidence from adjacent context.

#### Official website and storefronts

- Confirm the game identity, developer, publisher, platforms, release state, Demo, official communities, and official media.
- Use Steam for Steam status, Early Access, features, languages, and store links when applicable.
- Use Xbox, PlayStation, Epic, GOG, or another official storefront only for that platform’s current listing.
- Use the official wiki for mechanics and named resources.
- Open each final source page, or use an equivalent reliable page inspection method, before citing it.

#### Community and secondary sources

- Use Reddit, Steam discussions, community guides, and reputable media only to add player language, practical examples, or leads for further checking.
- Label them as community evidence.
- Never use a community workaround as an official feature.

### 6. Cross-check and classify facts

For every fact that will appear on a public page:

- Prefer two independent sources when possible.
- Mark the source type: official, official wiki, official community/news, reputable secondary, or player community.
- Record the collection date for dynamic facts.
- Separate “confirmed” from “current inference”.
- Write a pending note when the source is missing.

Use these evidence labels:

- 已交叉验证：at least two reliable sources agree, or one authoritative official source is sufficient for the fact.
- 单一官方来源：one official page supports the claim; suitable with a source link and recheck note.
- 社区线索待复核：useful lead, not ready for a definitive public claim.
- 暂缓发布：evidence is too weak or the page could cause misleading content.

Typical high-risk claims requiring extra care:

- online multiplayer or co-op;
- Game Pass or console availability;
- active codes, cheats, debug mode, or downloads;
- exact recipes, costs, drop rates, caps, or progression numbers;
- release dates and current update details;
- claims that a video is official or that a video contains a complete transcript.

### 7. Write the keyword material file

Create or update Docs/关键词素材.md in the project folder. Use this structure for each keyword:

### N. Keyword

User intent: one sentence.

- Google: search link and useful result links.
- YouTube: one or two real videos, with what each contributes.
- Official/Steam/Wiki: authoritative links.
- Verified facts: concise, source-bound statements.
- Reusable page material: what the page can safely say and how to structure it.
- Status: one evidence label plus the next recheck action.

Start the file with:

- collection date;
- project and keyword file;
- source priority;
- transcript limitations;
- rules for excluding broken or suspicious links.

End the file with:

- a cross-validation matrix;
- pages that can publish now;
- pages that need more evidence;
- a final recheck checklist.

### 8. Validate the deliverables

Check all of the following before handing off:

- The project directory contains the expected files and no new research file was written at the workspace root.
- Docs/keywords.json parses as valid JSON.
- The number of keyword sections matches the valid keyword count.
- Every final URL is a real, readable source; remove 404 and dead links.
- No competitor, fake SEO, third-party download, or unverified source is included.
- Official facts are not attributed to player videos.
- YouTube summaries do not pretend to be full transcripts.
- Dynamic claims carry a collection date.
- Florin-like evidence gaps, cheats, and platform uncertainty remain visible.
- Page matrix routes and keyword names agree.
- If an older assignment file contradicts newer evidence, report it for synchronization.

## Output package

Unless the user asks for a smaller result, deliver:

1. A page matrix with route, keyword, intent, cluster, priority, evidence status, and internal links.
2. A homepage development brief in Markdown and, when useful, JSON.
3. A project-local Docs/关键词素材.md with source links and reusable content.
4. An icon prompt if the workflow includes icon generation.
5. A short handoff summary stating what is complete, what is pending, and what must be rechecked before publication.

## Quality standard

The finished work should let another agent generate pages without guessing:

- It knows which source supports each claim.
- It knows which pages link to each other.
- It knows which facts are dynamic.
- It knows where evidence is insufficient.
- It can distinguish a valid source from a search result, community tip, or SEO filler site.

## Basic eval prompts

Store test prompts under evals/evals.json. Use them to check whether the skill produces a page matrix, evidence boundaries, and project-local files.

- Given a game name and a Docs/keywords.json, research Google, YouTube, official site, Steam, and official Wiki, then create a page matrix and Docs/关键词素材.md without inventing facts.
- Given an existing research file containing a broken wiki URL and an outdated Game Pass conclusion, recheck the sources, remove the broken URL, and mark the platform claim with the correct scope and date.
- Given three resource keywords where one has no reliable public article, produce two verified resource pages and a pending evidence note instead of fabricating a recipe.

## Limits

This skill does not authorize:

- bypassing login walls, paywalls, bot protection, or access controls;
- downloading suspicious files or cheat tools;
- publishing claims that have not been sourced;
- deploying a site, buying a domain, or sending external messages;
- overwriting unrelated project files.
