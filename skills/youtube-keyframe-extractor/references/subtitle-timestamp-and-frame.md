# Subtitle, Timestamp and Frame Extraction

## Locate the moment

1. Prefer the YouTube page’s visible captions or transcript;
2. If absent, use local speech recognition and label it automatic text;
3. Search action/context words such as `water`, `route`, `factory`, `map`, `modded`, `research` and `minimap`;
4. Create candidate timestamps;
5. Return to the player and verify speech/visual sync, the actual target action and possible caption errors;
6. Never infer a frame from captions alone.

## Timestamp map

Create this intermediate table before extracting frames:

| Phrase | Time | Visible frame content | Page placement | Evidence boundary |
|---|---:|---|---|---|
| Real short phrase | 00:00 | What is visible | Target H2/step | Official/community/pending |

Every selected point needs a phrase, timestamp, visible content, intended page use and evidence role.

## Extract and inspect

After player verification, use a local tool such as:

```bash
ffmpeg -i input.mp4 -ss 00:03:45 -frames:v 1 -q:v 2 frame-0345.jpg
```

If captions and visuals are offset, compare several frames before and after the timestamp. Select the frame that actually explains the action. Cropping, scaling and compression are allowed; do not burn arrows or long article text into the original.

Use purpose-based names:

```text
[game]-map-video-water-route.jpg
[game]-map-video-factory-layout.jpg
[game]-map-video-modded-map.jpg
```

## Caption boundary

Unless a transcript was really obtained, write only what was visible from the title, description, chapters or frame. Do not claim “the creator said…” or “full subtitles were read” without a reviewable source and timestamp.
