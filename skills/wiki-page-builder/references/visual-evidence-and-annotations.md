# Wiki Visual Evidence and Annotations

## Choose visuals by player action

Before publishing an image answer: “After seeing this, does the player know what to click, where to look or what to do next?”

Use this order:

1. Official game screenshot or icon;
2. Official video keyframe;
3. Community gameplay keyframe;
4. CSS/SVG flow or mechanism diagram;
5. Decorative cover only as atmosphere.

| Player action | Suitable visual |
|---|---|
| Unlock / obtain | Research tree or purchase panel with an arrow |
| Find entry / read HUD | Full HUD plus one local annotation |
| Use the object | Gameplay frame showing the operation |
| Confirm success | Before/after state or result area |
| Advanced layout | Factory, route or reserved-space example |
| Mod / Seed | Community example with explicit boundary |

Images must sit next to the step they explain. Do not use unrelated covers, statistics or video thumbnails as tutorial evidence.

## Scalable annotation model

Keep the original image intact. Use the project’s shared `WikiVisual` component or equivalent SVG overlay:

```ts
type WikiVisualAnnotation = {
  label: string
  labelX: number
  labelY: number
  targetX: number
  targetY: number
}

type WikiVisual = {
  src: string
  alt: string
  caption: string
  credit: string
  sourceHref?: string
  sourceLabel?: string
  annotations?: readonly WikiVisualAnnotation[]
}
```

Coordinates use 0–100 percentages inside the image:

```ts
annotations: [
  { label: 'Click Research', labelX: 78, labelY: 14, targetX: 58, targetY: 68 },
]
```

Rules:

- 1–3 arrows per image;
- short action labels or area names;
- visible stroke and theme color on light/dark screenshots;
- no overlap with buttons, subtitles, numbers or targets;
- image, flow card and body use the same content width;
- check desktop and narrow-screen positions and overflow.

## Attribution block

Every visual should expose:

```text
Caption: what the player should confirm
Credit: Official Steam screenshot / Official Wiki / YouTube community gameplay
Source: real page or timestamped video link
Boundary: official mechanism / community example / pending lead
```

Add a `Sources & Attribution` area that explains which links support mechanism facts and which only show a player route, layout or Mod case.
