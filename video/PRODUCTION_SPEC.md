# AI Tools Lab — Professional Video System

_Status: APPROVED SYSTEM / FLAGSHIP BUILD PENDING_  
_Updated: 2026-09-14_

## Creative identity

AI Tools Lab is a faceless technical publication. Videos should feel like evidence-led editorial work, not an AI-generated advertisement.

- background: near-black `#07090c`
- accent: electric lime `#a8ff3e`
- text: warm white
- crisp editorial typography
- real interface and official-source evidence
- restrained, purposeful motion
- no personal identity, presenter, avatar, or stock host

Recurring opening device: one consequence or constraint appears immediately, followed by visible evidence.

## Production model

Build the long-form conversion asset first. Shorts are derived discovery assets, never the substitute for a useful master.

1. 5–7 minute 16:9 YouTube buyer tutorial.
2. Factual/rights/visual/audio review.
3. Human approval of the master.
4. Two genuinely adapted vertical shorts.

Campaign 01 source: `campaigns/elevenlabs-campaign-01.md`.

## Free production stack

1. **Remotion** — coded motion design and rendering.
2. **OBS Studio or deterministic browser capture** — real interface/public-page capture.
3. **Kokoro-82M v1.0** — optional local AI narration after timing lock.
   - Model SHA-256: `496dba118d1a58f5f3db2efc88dbdc216e0483fc89fe6e47ee1f2c53f18ad1e4`
   - Initial voice candidate: `af_heart`
4. **FFmpeg** — assembly, loudness measurement/normalization, and original procedural effects.
5. **DaVinci Resolve Free** — optional bounded manual correction when code changes are inefficient.

No credit-based video generator belongs in the core pipeline.

## Master specifications

### Long-form flagship

- 1920 × 1080
- 30 fps
- target duration: 5–7 minutes
- H.264 MP4
- AAC audio
- final integrated loudness near -14 LUFS
- true peak at or below -1 dBTP
- designed captions, maximum two lines
- source excerpts readable at 1080p
- visual change every 3–7 seconds, faster only for the hook

### Derived vertical shorts

- 1080 × 1920
- 30 fps
- 20–35 seconds
- H.264 MP4 + AAC
- critical text clear of top 180 px, bottom 320 px, and right 120 px
- full meaning preserved when muted

## Motion system

Use:

- cursor spotlight and evidence crop;
- lime boxes around exact source language;
- restrained 102–106% pushes on static evidence;
- 6–10 frame caption entrances;
- original low-volume clicks/whooshes;
- one consistent end card and one CTA.

Avoid:

- template slide transitions;
- decorative transcript dumps;
- AI avatars;
- stock footage;
- unrelated generated B-roll;
- fake interfaces;
- more than two font weights;
- unlicensed music;
- ElevenLabs free-plan audio.

## Narration rules

The project is fully AI-produced. Human narration is not part of the agreed system.

Generate a low-resolution visual/timing proof first. Only then generate one local Kokoro candidate. Record the exact model, package version, voice file hash, generation settings, command, output hash, and license source.

Never imply Kokoro narration is an ElevenLabs output sample. Use an explicit early disclosure.

If pronunciation fails, change the pronunciation map or affected script segment and regenerate only that segment. Do not consume cloud TTS credits.

## Evidence rules

Every factual frame must map to a source manifest containing:

- source URL;
- retrieval date;
- local asset path;
- file hash;
- license/use basis;
- claim supported;
- crop/redaction notes.

Public pages may be captured automatically. Logged-in interface assets must be supplied or already approved; otherwise use a clearly labeled placeholder in proofs only. A placeholder may never appear in a final candidate.

## Quality gate

A draft passes only when:

- the opening consequence is clear within six seconds;
- affiliate disclosure is spoken and visible before recommendation;
- AI narration is identified as local and not a product sample;
- every number and rights claim has dated evidence;
- region-specific terms are acknowledged;
- no personal identity appears;
- no free-plan ElevenLabs audio is included;
- source excerpts and captions pass phone/1080p review;
- no text overflows or unsafe crops exist;
- the muted version remains coherent;
- audio is not clipped;
- export has no watermark;
- final frame gives one action only.

## Codex definition of done for Flagship 01

1. Create a minimal Remotion project under `video/`.
2. Implement one 16:9 master composition from the canonical Brain brief.
3. Use source-driven scenes and reusable primitives, not a slideshow.
4. Render a low-resolution visual proof before narration.
5. Add automated checks for duration, resolution, missing assets, overflow, identity strings, disclosure presence, and audio streams.
6. Store a lightweight source manifest.
7. Do not render shorts until the long master passes review.
8. Do not publish, deploy, create accounts, accept terms, or spend money.
