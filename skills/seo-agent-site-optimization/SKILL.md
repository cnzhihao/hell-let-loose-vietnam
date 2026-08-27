---
name: seo-agent-site-optimization
description: Run a complete, evidence-driven Google Search Console → SEO Agent → website optimization loop for a live website. Use this skill whenever the user asks to download or export GSC Performance data, upload a GSC XLSX to 哥飞的 SEO Agent/seo.web.cafe, ask for today's SEO goal, keep communicating with the SEO Agent, implement the recommended site improvements, verify or deploy them, or optimize a new website from its search data. Trigger even when the user only says “看 GSC 数据”“做 SEO”“和 SEO Agent 沟通”“继续优化网站”“根据搜索表现改造网站”，or gives a new domain and asks the agent to handle SEO autonomously.
---

# GSC → SEO Agent → Website Optimization

Use this skill as a closed loop, not as a one-off SEO opinion. The goal is to turn a dated GSC snapshot into a traceable decision, implement every safe and relevant on-site improvement, verify the result, and ask the SEO Agent again until the remaining work is either observation-only or needs a new authorization.

## Operating contract

- Treat the user’s named domain and its local project as the only target. Resolve the exact GSC property before reading or uploading data; never infer a domain from a similarly named project.
- Start with read-only inspection. Read the project’s `AGENTS.md`, `README.md`, current SEO/content instructions, and relevant route/content files before editing. Preserve existing uncommitted work and secrets.
- Once the user has authorized the workflow, communicate with the SEO Agent autonomously across routine turns. Do not ask the user to approve every analytical follow-up.
- When the Agent gives several tasks, evaluate and handle all relevant safe on-site tasks, not just P0. Separate “execute”, “observe”, “defer”, and “needs authorization” items and record the reason for each.
- Use evidence from the current GSC period and the site itself. Low-confidence keyword-volume estimates are hypotheses, not traffic facts. Never claim that an indexing request, sitemap submission, or realtime test visit means a page is indexed or has durable search traffic.
- Use `apply_patch` for local edits. Do not write credentials, API keys, cookies, or private report contents into the repository.
- Sending the report to the SEO Agent and sending routine Agent prompts are in scope when the user asks for this workflow. Public posts, comments, directory submissions, outreach, account creation, paid links, or other representational external actions are not routine SEO implementation; pause before the final action unless the user has explicitly authorized the exact destination and content.

## Phase 0 — Establish scope and access

1. Identify:
   - target domain and canonical protocol;
   - local project root;
   - GSC property;
   - desired reporting period and timezone (default to Web search, past 24 hours, the user’s local timezone when they ask for “today”);
   - whether the user requested local changes only or public deployment.
2. Read `AGENTS.md` and `README.md`. Follow project-specific source, routing, deployment, and documentation rules. If the project has an SEO report directory or existing daily report, inspect it before creating a new one.
3. Inspect git status and the project’s package/deployment scripts. Do not overwrite unrelated user changes. If the domain, property, or project is ambiguous, ask one concise question before touching data.
4. For browser work, read and follow the available browser-control skill. Reuse the already signed-in browser tab/session when possible. If GSC or SEO Agent is not signed in and the user must authenticate, pause and tell the user exactly which page needs their login; do not request or record their password.

## Phase 1 — Download and verify the GSC report

1. Open the exact GSC property and Performance report. Set the agreed search type, date range, country/device filters, and timezone. Do not silently mix a 24-hour report with a 7-day report.
2. Export the report as `.xlsx`. Keep the original download intact; do not rename it in a way that loses the date or property identity.
3. Verify that the file exists locally and is a real XLSX before uploading. If analysis is needed, use the spreadsheet skill/runtime or an available workbook library rather than manually guessing from a filename.
4. Record the report path, export time, property, period, filters, and headline metrics. At minimum capture clicks, impressions, CTR, average position, top queries, top pages, and rows with non-zero values.
5. If the report has no data, do not manufacture recommendations from it. Perform only a technical/site-readiness check, ask the Agent what can be diagnosed without search data, and set a D+7/D+14 observation plan.

## Phase 2 — Upload to SEO Agent and establish the session

1. Open the SEO Agent site used by the user, normally `https://seo.web.cafe/mysite/`, and enter its site-report area.
2. Upload the exact XLSX from Phase 1.
3. Before confirming the upload, inspect the displayed domain/property and compare it character-for-character with the target domain. Stop if it is wrong; never upload a site’s report into another site’s record.
4. Confirm the upload, then open the chat area, normally `https://seo.web.cafe/chat/`. Use the existing session and click the top “加入会话”/join-session control when present.
5. If the upload or chat UI reports an error, record the error and retry only a bounded number of times. Do not create duplicate reports, duplicate sessions, or new accounts to work around an unclear state.

## Phase 3 — Use a deliberate multi-turn Agent conversation

Send the first prompt in the user’s language. Include the report period, domain, and request for evidence:

> 这是 `[domain]` 的 GSC Performance 报告，时间范围是 `[period/timezone]`。请先基于报告回答“今天最重要的 SEO 改造目标是什么”，然后把所有待办按 P0/P1/P2/P3 排序。每项请说明：证据、影响页面/查询词、是改代码、改内容、做站内链接、只观察，还是需要外部授权。不要把估算搜索量写成真实流量，也不要默认执行发帖、外链、付费或其他外部发布。

Then continue with focused follow-ups. Ask the Agent to:

1. Reconcile page-level and query-level data, including clicks, impressions, CTR, average position, cannibalization, and pages with impressions but no clicks.
2. Check keyword demand and difficulty, SERP/page intent, and whether any volume estimate is reliable enough to influence scope. Keep GSC observations separate from third-party estimates.
3. Inspect the actual site pages and propose precise changes to titles, descriptions, H1/H2 structure, internal links, canonical/robots/sitemap, structured data, redirects, and content gaps. Ask it to distinguish a metadata experiment from a risky body rewrite.
4. Search for missing but evidenced pages only when the current data and project sources support them. Do not generate thin pages merely to increase URL count.
5. Review all remaining recommendations after the first round. Ask: “完成上面安全的站内改造后，基于新状态还有哪些值得继续研究或执行的事项？请逐项说明证据、收益、风险和验证方式。”
6. If external links are discussed, request read-only research first. Ask for platform rules, relevance, whether a real contribution is possible, and whether the link would be natural. Do not let a generic directory, competitor site, or paid-link suggestion become an automatic action.

Keep a decision log as the conversation proceeds. For every Agent item, write one of:

| Decision | Meaning |
|---|---|
| Execute | Safe, evidence-backed, in-scope site or repository change |
| Observe | Needs time, more data, or a controlled experiment before changing |
| Defer | Relevant but blocked by missing source, access, or dependency |
| Ask | Materially changes scope, risks data/content integrity, or requires user choice |
| External-confirm | Post, edit, submit, contact, create account, buy, or otherwise communicate publicly |

## Phase 4 — Convert the plan into site changes

1. Inspect the relevant implementation before editing. Map each recommendation to exact routes, content objects, metadata functions, sitemap/robots logic, or deployment configuration.
2. Prefer small reversible changes with a clear measurement target:
   - direct internal links to important canonical pages;
   - evidence-backed title/description experiments;
   - canonical, redirect, robots, and sitemap hygiene;
   - useful page structure and source-supported content improvements;
   - valid structured data and social-card completeness.
3. Do not rewrite a page that is already winning merely because the Agent offered a generic rewrite. Preserve a strong page when the evidence supports observation; change one meaningful variable at a time when measuring CTR.
4. For new pages, require a distinct query/user intent, reliable sources, unique value, correct canonical URL, metadata, navigation entry, and a quality check. Record “暂无可靠公开资料” or defer instead of inventing mechanics, recipes, dates, links, or volume.
5. Make the edits with `apply_patch`, then inspect the diff. Do not alter unrelated files or copy another site’s brand, URLs, analytics IDs, or content.
6. If the Agent suggests resubmitting a sitemap or requesting indexing, check whether the current sitemap/request already succeeded. Avoid duplicate external operations; only submit a changed or explicitly requested target and record the actual result.

## Phase 5 — Validate, deploy when authorized, and re-check

Run the project’s prescribed checks. At minimum, use the available equivalents of:

- typecheck/lint;
- production build;
- `git diff --check`;
- local route checks for every changed route;
- one-H1, title, description, canonical, robots, sitemap, redirect, and internal-link checks;
- mobile/basic layout checks when UI changed.

If the user explicitly asked to deploy or to complete the live-site optimization, deploy through the project’s documented path. Otherwise stop at a locally verified patch and ask before production deployment. After deployment, check the public canonical domain, changed pages, assets, `robots.txt`, and `sitemap.xml` with the project’s normal public verification method.

Record the deployment/version identifier and distinguish:

- code is changed;
- deployment succeeded;
- sitemap/request was submitted;
- a URL is actually indexed.

These are different states.

## Phase 6 — Continue the loop instead of stopping at the first patch

After the first safe changes are verified, return the result to the SEO Agent:

> 已完成以下站内改造：`[summary/files/routes]`。验证结果：`[tests/public checks/deployment]`。没有执行：`[observed/deferred/external items]`。请基于这个新状态再次检查：是否还有值得执行的站内优化？请把剩余事项按收益、风险、证据强度和验证方式排序，并指出哪些应该等待数据。

Implement the next safe and relevant on-site batch, verify again, and repeat. Normally stop after 2–4 meaningful rounds or when the Agent’s remaining suggestions are repetitive, observation-only, unsupported, or external-confirm items. Do not loop forever just to produce more changes.

Before stopping, explicitly ask the Agent whether any recommendation was missed. If it proposes a new page, large content rewrite, migration, paid campaign, backlink placement, public post, or account action, classify it and pause at the authorization boundary rather than silently executing it.

## External-action boundary

The user’s request for autonomous Agent conversation does not by itself authorize public communication. Keep these actions read-only or draft-only until the exact action is confirmed:

- Reddit, Steam, Discord, forums, comments, social posts, or community edits;
- directory/profile submissions or editing third-party game databases;
- contacting developers, creators, site owners, or media;
- paid links, ads, sponsorships, or purchases;
- creating accounts or changing public account/profile information;
- GSC/Bing indexing requests or submissions when the user did not explicitly request them.

When the user has explicitly authorized one, show the exact destination, content, URL, and account context immediately before the final publish/submit/send click. Respect any standing exclusion such as “do not post Reddit links.”

## Project report and handoff

Create or update a dated Markdown report under the project’s documented SEO/report directory. Use a structure close to this:

```markdown
# [date] GSC + SEO Agent 网站优化报告

## 1. Scope and access
- Domain/property:
- Report path:
- Period/timezone/filters:
- Agent upload/session status:

## 2. GSC snapshot
- Clicks / impressions / CTR / average position:
- Top queries:
- Top pages:
- Data limitations:

## 3. Agent conversation
- Today’s goal:
- Evidence and confidence:
- P0/P1/P2/P3 recommendations:

## 4. Decisions
| Item | Decision | Reason | Validation |
|---|---|---|---|

## 5. Implemented changes
- Files/routes:
- Content/metadata/internal-link changes:
- Index hygiene or structured-data changes:

## 6. Verification and deployment
- Local checks:
- Public checks:
- Deployment/version:
- What is not yet proven:

## 7. External actions
- Posted/submitted/contacted/purchased: none, or exact confirmed actions
- Drafts prepared but not published:

## 8. Observation and next Agent round
- 48–72 hour checks:
- D+7/D+14 checks:
- 2–4 week checks:
- Next minimum action:
```

Update `README.md` or `AGENTS.md` only when the project convention expects a current-state record. In the final response, report the changed files, completed phase, unfinished items and why, validation performed, deployment status, external actions (or explicitly none), and the next smallest action. Link the local report and downloaded XLSX when useful.

## Completion criteria

Consider the workflow complete only when all of the following are true:

1. The exact GSC report was exported, verified, and uploaded to the matching SEO Agent site.
2. The Agent’s goal and all relevant follow-up recommendations were investigated.
3. Every safe, evidence-backed, in-scope on-site task was implemented or deliberately classified as observe/defer.
4. Local and, when authorized, public validation passed.
5. A dated report records evidence, decisions, changes, limitations, external-action boundaries, and follow-up dates.
6. The Agent’s remaining suggestions are either handled, waiting for data, blocked by a stated authorization, or not supported by reliable evidence.
