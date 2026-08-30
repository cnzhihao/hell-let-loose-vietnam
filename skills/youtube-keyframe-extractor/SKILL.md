---
name: youtube-keyframe-extractor
description: Extract traceable gameplay screenshots from YouTube videos for game Wiki and Guide pages. Use for video source inspection, subtitles, timestamps, keyframes, arrows, attribution or page placement in the reusable site template. Do not use video frames as a substitute for verified mechanics or a full article.
---

# YouTube Keyframe Extractor

## Purpose

Turn a YouTube video into useful, timestamped and attributable visual evidence:

```text
video → subtitle/action location → player verification → timestamp map → frame → asset record → page placement
```

It handles source inspection, frame extraction, asset registration, page integration and validation. It does not rewrite the whole video into an article or present community gameplay as official instruction.

## Use when

- A user provides a YouTube URL;
- They ask for subtitles, a phrase, a timestamp or a frame from inside the video;
- They explicitly do not want the thumbnail;
- A Wiki/Guide needs gameplay, route, layout, Mod, Map or UI evidence;
- A screenshot needs an arrow and a timestamped source link.

If the task only needs an article, use `wiki-page-builder`. If it needs both video evidence and an article, run this Skill before or alongside the Page Skill.

## Non-negotiable contract

- Read `README.md`, `AGENTS.md`, the page-production plan, target page and asset records before analysis;
- Define the visual task before downloading or parsing anything;
- Keep signed `googlevideo.com` URLs, raw videos and raw audio out of code, Git, `public/assets/` and deployment;
- Prefer captions/transcript for location, but always return to the player and verify the visible frame;
- Never claim a complete transcript from a title, description, chapters or partial inspection;
- Official frames support visible UI/mechanics; player frames support that player’s example only;
- Community frames must be labeled and cannot prove fixed coordinates, recipes, universal Seeds or official rules;
- New frames require inventory and manifest records with source, timestamp and credit; in this starter use `Docs/素材清单.md` and `public/assets/asset-manifest.json`;
- Preserve user changes, use `apply_patch` for edits and do not publish externally unless authorized.

## Human verification handoff

If source access reaches a login screen, CAPTCHA, bot check, Cloudflare challenge, age gate, cookie/consent prompt or any other step that requires the user's browser interaction, stop the extraction workflow immediately. Use the available in-app browser-control capability to bring the relevant page or tab to the foreground, tell the user exactly what needs to be completed, and wait for the user to confirm before continuing.

Do not bypass, automate or repeatedly retry the challenge. Do not read, request, copy or store passwords, one-time codes, cookies, session tokens or other credentials. A blocked or partially verified page is not evidence; after the user finishes, re-open or refresh the source and re-check the public URL, video identity, timestamp and visible frame. If the user cannot complete the verification, mark the source as blocked/pending and continue without using its media.

## Main workflow

1. **Define the visual task.** Read `references/source-access-and-evidence.md` and specify page, section, player action, expected visual, success signal and evidence role.
2. **Normalize and access the source.** Use a public watch URL; keep temporary media private and disposable.
3. **Locate candidate moments.** Read `references/subtitle-timestamp-and-frame.md`; use captions or labeled automatic speech recognition, then verify speech and frame alignment in the player.
4. **Build the timestamp map.** Record phrase, time, visible content, page use and evidence boundary before extracting.
5. **Extract and inspect frames.** Compare nearby frames when needed and select the one that explains the action, not a thumbnail.
6. **Register and integrate.** Read `references/asset-registration-and-page-integration.md`; update inventory/manifest, bind image metadata and place it beside the relevant H2 or step.
7. **Annotate when useful.** Use the shared SVG overlay with restrained, responsive arrows; do not burn long text into the original.
8. **Validate and hand off.** Confirm source/timestamp, frame usefulness, attribution, image loading, page links, build and mobile behavior.

## Required references

- Source access, evidence roles and temporary-file boundary: `references/source-access-and-evidence.md`;
- Subtitle search, timestamp map and ffmpeg extraction: `references/subtitle-timestamp-and-frame.md`;
- Asset records, page integration, SVG and fixed handoff: `references/asset-registration-and-page-integration.md`.

Read the first reference before source access, the second before frame extraction and the third before adding a frame to the project.

## Completion boundary

Complete output includes a source record, timestamp map, selected asset, page placement, attribution and validation results. It does not mean the video was fully transcribed, the page was deployed or an external post was published.
