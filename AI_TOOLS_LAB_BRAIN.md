# AI Tools Lab — Brain and Handoff

Last updated: September 14, 2026

This is the source of truth for continuing AI Tools Lab from another Codex or ChatGPT Work task. Read this file before changing the project.

## Goal

Build a faceless, evidence-led affiliate business that earns commissions by helping people choose AI tools. Optimize for paid customers, not empty traffic. Keep costs near zero until organic results justify spending.

## Proven funnel we are following

```text
Short proof-based video
        ↓
Focused guide / decision page
        ↓
Clearly disclosed affiliate link
        ↓
Vendor signup and paid conversion
```

The homepage builds trust, but social videos should send high-intent viewers directly to the relevant guide. Content must show a real task and a real result; do not publish generic AI-generated advertisements.

## Current public site

- Production URL: https://ai-tools-lab.netlify.app
- First conversion page: https://ai-tools-lab.netlify.app/ai-tools/elevenlabs-first-voiceover.html
- Existing Netlify site ID: `3856ed0c-9372-47cc-bb37-f5eddf3e8240`
- Latest production deploy at handoff: `6aa82d58273c37c01f1dc403`
- Never create a second Netlify site.

## What has been completed

- Rebuilt the homepage with a premium dark editorial design and clearer content hierarchy.
- Rebuilt the ElevenLabs page as a focused conversion page.
- Added a restrained, readable ElevenLabs CTA. Do not restore the earlier flashy/glowing button.
- Added clear affiliate disclosure near the offer.
- Added a brand favicon and original hero artwork.
- Improved shared article styling and responsive layouts.
- Fixed old `#tutorials` navigation links to use `#guides`.
- Added platform-specific tracking redirects for Campaign 01.
- Updated the Netlify build to copy the favicon and use production canonical URLs.
- Built and checked 17 public HTML pages with no broken internal links in the latest QA run.
- Verified the production build did not contain the four private identity strings used in the privacy check.

## ElevenLabs offer

- Affiliate destination already present in the conversion page: `https://try.elevenlabs.io/hf8t7vc305vb`
- Official program information used during research: 22% on Starter, Creator, Pro, and Scale for the first 12 months; 11% on Business. Recheck official terms before making future claims.
- Do not imply that free-plan generations have commercial-use rights.
- Do not claim that a later upgrade retroactively licenses free-plan audio.
- Current rights reference: https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform

## Real test already completed

- Voice: Roger
- Model: Eleven Multilingual v2
- Script: “The pipeline uses retrieval-augmented generation, vector embeddings, asynchronous workers, and a FastAPI service behind a reverse proxy.”
- Two takes were produced from one generation.
- The original editorial conclusion was that Generation 2 sounded better for this passage.
- This is a small first-use demonstration, not a universal benchmark.

Important operational note: do not regenerate this test. A mistaken extra generation on September 14 consumed 136 ElevenLabs credits, leaving an observed balance of 9,728. The two existing takes remain in the ElevenLabs interface. No local MP3 or screen recording was present at handoff. Downloading the existing takes requires Chrome permission to allow multiple downloads; downloading does not require regeneration.

## Campaign 01

The complete production package is in [`campaigns/elevenlabs-campaign-01.md`](campaigns/elevenlabs-campaign-01.md).

Tracking paths:

- TikTok: `https://ai-tools-lab.netlify.app/go/voice-01/tt`
- Instagram: `https://ai-tools-lab.netlify.app/go/voice-01/ig`
- YouTube: `https://ai-tools-lab.netlify.app/go/voice-01/yt`

All three return a 302 redirect to the focused ElevenLabs page with platform-specific UTM parameters.

## Metrics and decision rule

Primary metric: paid ElevenLabs customers per 1,000 video views.

Supporting metrics:

- Three-second hold rate
- Completed views
- Landing-page visits
- Affiliate clicks
- Free signups
- Paid conversions

Start organic. Do not buy ads yet. After at least 1,000 views per hook, keep the hook that produces the best combination of landing visits and paid customers—not simply the most views.

## Non-negotiable rules

- Faceless independent brand: no personal name, email, location, biography, or personal GitHub link on the public site.
- Never create a new Netlify site.
- Reuse existing evidence and media before spending credits or money.
- Ask immediately before any action that spends money, consumes paid credits, publishes publicly, creates an account, or changes permissions.
- Every work session must end closer to revenue: a finished asset, a deployed improvement, a measured result, or a clearly documented blocker.
- Do not invent product results or fabricate proof.
- Keep explanations simple, brief, and action-oriented.

## Exact next step

Produce the first 18-second vertical video from the existing two takes and interface footage. Do not run another ElevenLabs test.

1. Download the two existing takes without regenerating.
2. Record only the existing ElevenLabs interface and the live conversion page.
3. Assemble the video with captions and `Ad · ElevenLabs affiliate` visible at the opening.
4. Export TikTok, Instagram Reels, and YouTube Shorts versions.
5. Present the finished files for approval before publishing anything publicly.

## Build and deployment

```bash
python3 build_netlify.py
```

The build output is `dist/` and is intentionally ignored by Git. Deploy `dist/` only to the existing Netlify site above. Before every deploy, recursively scan `dist/` for the private identity strings defined for the project and stop if any match appears.

## Evidence behind the strategy

- Smart Passive Income historical report: https://www.smartpassiveincome.com/blog/my-july-2013-monthly-income-report/
- Smart Passive Income May 2012 report: https://www.smartpassiveincome.com/blog/my-may-2012-monthly-income-report/
- ElevenLabs affiliate guide: https://elevenlabs.io/affiliate-partner-guide
- ElevenLabs affiliate terms: https://elevenlabs.io/affiliates-terms
- Meta Reels guidance: https://www.facebook.com/business/ads/facebook-instagram-reels-ads
- FTC disclosure guidance: https://www.ftc.gov/node/60343
- YouTube link guidance: https://support.google.com/youtube/answer/13748639

