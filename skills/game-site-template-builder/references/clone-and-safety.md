# Clone and Safety

## Read-only preflight

From the requested new-site directory, inspect:

```bash
pwd
git remote -v
git status --short --branch
rg --files -g 'README.md' -g 'AGENTS.md' -g 'package.json' -g 'src/config/**' -g 'src/content/**'
```

Compare the path and remote with any existing site only as a read-only boundary check. Do not assume a similarly named folder is disposable or belongs to the template.

## Baseline contract

The new clone should contain:

- `src/config/website.ts` and `src/config/game.ts`;
- `src/content/types.ts` and the starter content source;
- Wiki, Guide, robots, sitemap and manifest routes;
- `scripts/check-content.ts`;
- `skills/` and a project-visible `.agents/skills` link or equivalent;
- no game-specific production data, secrets or deployment state.

Run `pnpm install` and the smallest useful checks only in the new clone. Keep dependency caches and generated output out of Git. Do not repair unrelated failures by rewriting the whole repository.

## Template-mode assertions

Before handoff, check:

- `websiteConfig.isTemplate === true` unless the user explicitly completed a real-site readiness decision;
- `websiteConfig.url` is not a stale production domain;
- `gameConfig.officialLinks` contains no invented placeholder destinations;
- starter entries are `indexable: false` and `evidenceState: 'pending'`;
- `/robots.txt` contains `Disallow: /`;
- `/sitemap.xml` contains no `<loc>` entries;
- page metadata is `noindex` while template mode is active;
- `rg` finds no old game name, old domain, analytics ID or credentials.

If any assertion fails, keep the site in template mode and report the exact blocker.
