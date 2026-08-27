# SEO Agent Conversation and Decisions

## First prompt

Send in the user’s language and include domain, report period and timezone. Ask for the most important SEO goal and a P0/P1/P2/P3 list. Require each item to state evidence, affected page/query, whether it is code, content, internal link, observation or external authorization. Explicitly prohibit treating estimated volume as traffic or defaulting to public posts, links or paid actions.

## Focused follow-ups

Ask the Agent to:

1. Reconcile query-level and page-level clicks, impressions, CTR and average position;
2. Identify cannibalization and pages with impressions but no clicks;
3. Separate GSC observations from third-party demand/difficulty estimates and SERP hypotheses;
4. Inspect actual pages for title, description, H1/H2, internal links, canonical, robots, sitemap, structured data, redirects and content gaps;
5. Distinguish a metadata experiment from a risky body rewrite;
6. Propose a new page only when a real query, source and unique value support it;
7. Review the remaining work after the first safe batch;
8. Treat external links as read-only research until separately authorized.

## Decision log

Classify every recommendation:

| Decision | Meaning |
|---|---|
| Execute | Safe, evidence-backed, in-scope site/repository change |
| Observe | Needs time, more data or a controlled experiment |
| Defer | Relevant but blocked by source, access or dependency |
| Ask | Changes scope or needs a material user choice |
| External-confirm | Post, edit, submit, contact, create, buy or public communication |

Record evidence, affected pages/queries, expected benefit, risk, validation and reason for the decision. Do not execute only P0 if safe and relevant P1/P2 work is also supported.

## Stop condition

After each safe batch, send the changed files/routes, validation, deployment state and unexecuted items back to the Agent. Continue for about 2–4 meaningful rounds, then stop when remaining suggestions are repetitive, observation-only, unsupported or waiting for authorization. Before stopping, ask whether any relevant recommendation was missed.
