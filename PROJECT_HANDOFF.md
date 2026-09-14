# AI Tools Lab — Project Handoff

_Non-canonical repository note · updated 2026-09-14_

The canonical business state and decisions live in:
`Nizarassad/career-hq/revenue/affiliate-ai-content/`

Before consequential work, read:

- `README.md`
- `control-board.md`
- `affiliate-programs.md`
- `flagship-01-production-brief.md`

## Website

- Production: https://ai-tools-lab.netlify.app
- Existing Netlify site ID: `3856ed0c-9372-47cc-bb37-f5eddf3e8240`
- Verified redesign deploy: `6aa82d58273c37c01f1dc403`
- Do not create a second Netlify site.
- Build: `python3 build_netlify.py`
- Output: `dist/`

## Current campaign

Implementation pointer: `campaigns/elevenlabs-campaign-01.md`

The launch centerpiece is the 5–7 minute, 16:9 Buyer Lab tutorial:

> **ElevenLabs for Faceless Videos: What the Free Plan Doesn't Cover**

It is fully AI-produced: real official-source and interface evidence, local auditable AI narration, custom Remotion motion design, and designed captions. The earlier silent 20-second vertical is only a motion-system prototype. Do not lead with it.

No new ElevenLabs generation is required or authorized. Do not use the existing free-plan audio commercially. Build a low-resolution visual-only proof first and stop for review before narration, shorts, or publication.

## Public-brand rule

AI Tools Lab is faceless. Public pages and media must not expose the operator's personal name, email, location, biography, personal GitHub link, face, or human narration.

## Authority limits

Draft builds and non-destructive tests are authorized. Do not:

- publish or create social channels;
- deploy without a specific instruction;
- accept legal terms;
- enter tax, ID, bank, PayPal, or payout data;
- buy a plan or consume paid/cloud-generation credits;
- invent product evidence, testimonials, audience, or results.

## Deployment check

Before any deployment, scan `dist/` for the private identity strings defined in the canonical Brain. Verify the homepage, ElevenLabs guide, About, Contact, tracking redirects, and internal links after deployment.
