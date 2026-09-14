# AI Tools Lab — Project Handoff

_Non-canonical repository note · updated 2026-09-14_

The canonical business state and decisions live in:
`Nizarassad/career-hq/revenue/affiliate-ai-content/`

Read its `README.md`, `control-board.md`, and `affiliate-programs.md` before consequential work.

## Website

- Production: https://ai-tools-lab.netlify.app
- Existing Netlify site ID: `3856ed0c-9372-47cc-bb37-f5eddf3e8240`
- Verified redesign deploy: `6aa82d58273c37c01f1dc403`
- Do not create a second Netlify site.
- Build: `python3 build_netlify.py`
- Output: `dist/`

## Current campaign

Production package: `campaigns/elevenlabs-campaign-01.md`

Concept: **The Free AI Voice Trap**. This is a faceless, caption-led buyer warning about commercial rights. It uses existing interface evidence and does not publish the existing free-plan generated audio.

No new ElevenLabs generation is required.

## Public-brand rule

AI Tools Lab is faceless. Public pages must not expose the operator's personal name, email, location, biography, or personal GitHub link.

## Deployment check

Before deployment, scan `dist/` for the private identity strings defined in the canonical Brain. Verify the homepage, ElevenLabs guide, About, Contact, tracking redirects, and internal links after deployment.
