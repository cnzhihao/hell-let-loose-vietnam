# YouTube Source Access and Evidence

## Preflight

Read `README.md`, `AGENTS.md`, the project’s Wiki-page production plan when it exists, `Docs/素材清单.md`, `public/assets/asset-manifest.json`, target page data, shared visual components and Git status. Confirm the target page, target section, existing assets and user changes.

## Visual task brief

Write before parsing a video:

```text
Page / route:
Target section:
What the player is doing:
What the image must show:
Success signal:
Need an arrow:
Evidence role: official mechanism / official demonstration / community example
```

Do not start video analysis for a decorative image.

## Normalize the source

Record a public `https://www.youtube.com/watch?v=VIDEO_ID` URL, video ID, title, channel, duration and access status.

- A signed `googlevideo.com` URL is temporary analysis input only; never write it to code, Markdown, the asset manifest or page links;
- If login is needed, use the user’s existing logged-in browser session without reading or saving credentials;
- If blocked by permission, region or anti-bot controls, use an accessible verified source; do not use suspicious download sites, pirated mirrors or access-control bypasses.

## Evidence roles

| Evidence | May support | May not support |
|---|---|---|
| Official Steam/Wiki screenshot | Buttons, names, public mechanics and UI relationships | A player’s route or optimal layout |
| Official video keyframe | Visible operation in an official demonstration | A recipe, fixed number or universal rule not shown |
| Player video keyframe | That player’s route, layout, Mod or save example | Official mechanics, fixed coordinates, universal Seeds or permanent values |

Label player footage `YouTube community gameplay`, `player example` or equivalent. Captions locate candidates; visible frames and official sources verify terms and mechanics.

## Temporary copy boundary

Download a temporary video/audio copy only when precise subtitle or frame analysis requires it. Use an auditable tool or a legally provided local file. Temporary media is for analysis and a few selected frames only; never put the full video/audio in `public/assets/`, Git or the deployment bundle. The final project keeps selected JPG/PNG, public watch URL and timestamp link.
