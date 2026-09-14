# AI Tools Lab — Professional Vertical Video System

_Status: APPROVED PRODUCTION PLAN / TEMPLATE NOT YET BUILT_
_Date: 2026-09-14_

## Creative identity

AI Tools Lab videos should feel like a modern technical publication, not an AI-generated advertisement.

Visual language:
- background: near-black `#07090c`
- accent: electric lime `#a8ff3e`
- text: warm white
- crisp editorial typography
- real interface evidence
- restrained motion, fast pacing and no stock presenter

Recurring opening device: one large claim or warning appears within the first 0.7 seconds, followed immediately by visible evidence.

## Free production stack

1. **Remotion** — primary motion-design and rendering engine. Its current free license covers individuals and organizations of up to three people with unlimited commercial use.
   - https://www.remotion.dev/docs/license/pricing
2. **OBS Studio** — free, open-source interface capture on macOS.
   - https://obsproject.com/
3. **Kokoro-82M v1.0** — local optional brand narration. The official model card lists Apache-2.0 weights and production deployment. Record the exact model hash and voice used before publishing.
   - Model hash: `496dba118d1a58f5f3db2efc88dbdc216e0483fc89fe6e47ee1f2c53f18ad1e4`
   - Initial voice candidate: `af_heart`
   - https://huggingface.co/hexgrad/Kokoro-82M
4. **FFmpeg** — assembly, loudness normalization and original procedural clicks/whooshes.
5. **DaVinci Resolve Free** — optional final visual/audio QC when a specific defect cannot be fixed efficiently in the template.
   - https://www.blackmagicdesign.com/products/davinciresolve

No stock footage is needed. Use real product capture, official-source excerpts, AI Tools Lab artwork and original programmatic graphics.

## Master technical specification

- canvas: 1080 × 1920
- frame rate: 30 fps
- duration: 18–22 seconds
- format: H.264 MP4
- audio: AAC, normalized near -14 LUFS, true peak at or below -1 dBTP
- captions: burned in, maximum two short lines, phone-readable
- safe areas: keep critical text clear of top 180 px, bottom 320 px and right 120 px
- disclosure: `Ad · ElevenLabs affiliate` visible at opening
- muted test: the full message must remain understandable without audio

## Motion system

- 0.0–0.7s: hard visual interruption
- 0.7–3.0s: hook resolves into the product context
- 3–12s: evidence shown through screen crop, highlight and punch zoom
- 12–16s: three-part practical rule
- 16–20s: restrained CTA and brand lockup

Use:
- 6–10 frame text entrances
- 102–106% slow push on static evidence
- lime highlight boxes for the exact source line
- single-frame or two-frame white flash only between major sections
- original low-volume click/whoosh effects
- one consistent end card

Avoid:
- AI avatars
- generic generated B-roll
- excessive zooms
- template transitions
- more than two font weights
- decorative captions that obscure evidence
- unlicensed music or ElevenLabs free-plan audio

## Campaign 01

Use `campaigns/elevenlabs-campaign-01.md`: **The Free AI Voice Trap**.

Required shots:
1. ElevenLabs interface establishing the product.
2. Official commercial-rights guidance with the relevant line highlighted.
3. Existing Generation 1 and Generation 2 cards, shown without playing audio.
4. AI Tools Lab checklist.
5. AI Tools Lab end card.

Narration can use the locally rendered Kokoro candidate only after:
- exact version/voice/model hash are recorded;
- the output is reviewed for pronunciation and artifacts;
- no imitation or third-party voice cloning is involved.

The first draft may be caption-only if narration delays the render.

## Quality gate

A draft passes only when:
- the hook is legible within the first second;
- every claim maps to saved evidence;
- no free-plan ElevenLabs audio is included;
- disclosure is visible;
- text passes the phone-size review;
- audio is not clipped;
- no personal identity appears;
- the message remains clear when muted;
- the export contains no watermark;
- the final frame gives one action only.

## Codex definition of done

Create a small Remotion project under `video/`, reuse the brand palette and artwork, add Campaign 01 as the first composition, render a draft MP4, and store a lightweight source manifest. Keep dependencies minimal. Do not publish or create social accounts.
