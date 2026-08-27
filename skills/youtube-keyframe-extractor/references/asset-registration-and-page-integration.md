# Asset Registration and Page Integration

## Required asset record

For every selected frame, update `Docs/素材清单.md` and `public/assets/asset-manifest.json`. Record at least:

```text
sourcePage: https://www.youtube.com/watch?v=VIDEO_ID
sourceAsset: https://www.youtube.com/watch?v=VIDEO_ID&t=225s
timestamp: 00:03:45
sourcePhrase: Real short phrase
plannedUse: Target page section
credit: CHANNEL / YouTube community gameplay
```

The image caption should expose a clickable timestamp, for example `Open YouTube at 03:45 ↗`, rather than only the video home URL.

## Page integration

Bind the image in the content layer with:

- `src`/path;
- meaningful `alt`;
- caption;
- credit;
- `sourceHref` and `sourceLabel`;
- variant when supported;
- target H2 or step card.

Place the frame next to the action it explains. Put channel, timestamp and evidence boundary in the caption and `Sources & Attribution`; let the body tell the player what to do next.

## SVG annotations

Official screenshots showing Research, Map or Minimap buttons may use the shared `WikiVisual.annotations` SVG overlay:

```ts
annotations: [
  { label: 'Expand map', labelX: 18, labelY: 15, targetX: 78, targetY: 14 },
]
```

Use 0–100 image-relative coordinates, at most 1–3 arrows per image, short labels and no overlap with buttons, subtitles, numbers or targets. Community frames are mainly route/layout/Mod examples and should not be forced into mechanism annotations.

## Validation and fixed output

Check that each frame is actual gameplay rather than a thumbnail, the visual matches the timestamp, source is clickable, community evidence is labeled, the body gives the next action and mobile width has no overflow.

When handing off, use:

```markdown
## Source
- Title / channel / URL / access status

## Timestamp map
| phrase | time | frame | page placement | evidence boundary |

## Assets
- Files, dimensions and local paths
- Manifest / inventory synchronized?

## Page integration
- Page, H2, caption and source link
- Arrow or flow diagram used?

## Validation
- Captions and visuals reviewed?
- Image loaded and source clickable?
- Build, JSON and browser checks?

## Unresolved
- Caption, timestamp, version or rights limits
```

For record-only work run `jq empty public/assets/asset-manifest.json` and `git diff --check`; when connected to a page in this starter also run `pnpm content:check`, `pnpm check`, `pnpm build` and local browser checks.
