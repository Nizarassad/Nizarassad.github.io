import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const C = {
  bg: '#07090c',
  panel: '#11151b',
  panel2: '#171d25',
  lime: '#a8ff3e',
  white: '#f7f4eb',
  muted: '#a8b0bb',
  red: '#ff6262',
};

type SceneProps = {
  eyebrow: string;
  title: string;
  body?: string;
  source?: string;
  accent?: string;
  step?: number;
};

const Grid: React.FC = () => {
  const f = useCurrentFrame();
  const drift = (f * 0.25) % 64;
  return (
    <AbsoluteFill
      style={{
        opacity: 0.12,
        backgroundImage:
          'linear-gradient(rgba(168,255,62,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(168,255,62,.16) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        backgroundPosition: `${drift}px ${drift}px`,
      }}
    />
  );
};

const Wave: React.FC<{danger?: boolean}> = ({danger}) => {
  const f = useCurrentFrame();
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 10, height: 155}}>
      {Array.from({length: 38}).map((_, i) => {
        const h = 28 + 105 * Math.abs(Math.sin(i * 0.77 + f * 0.08));
        return (
          <div
            key={i}
            style={{
              width: 9,
              height: h,
              borderRadius: 8,
              background: danger ? C.red : C.lime,
              boxShadow: `0 0 22px ${danger ? '#ff626255' : '#a8ff3e44'}`,
            }}
          />
        );
      })}
    </div>
  );
};

const Disclosure: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: 48,
      left: 56,
      padding: '13px 20px',
      border: '1px solid #a8ff3e66',
      borderRadius: 999,
      color: C.white,
      background: '#07090cdd',
      fontSize: 24,
      letterSpacing: 0.3,
      zIndex: 20,
    }}
  >
    Ad · ElevenLabs affiliate · #ElevenCreativePartner
  </div>
);

const Footer: React.FC<{source?: string}> = ({source}) => (
  <div
    style={{
      position: 'absolute',
      left: 58,
      right: 58,
      bottom: 36,
      display: 'flex',
      justifyContent: 'space-between',
      color: C.muted,
      fontSize: 20,
      letterSpacing: 0.2,
    }}
  >
    <span>AI TOOLS LAB · THE BUYER LAB</span>
    <span>{source ?? 'Evidence checked 2026-09-14'}</span>
  </div>
);

const Scene: React.FC<React.PropsWithChildren<SceneProps>> = ({
  eyebrow,
  title,
  body,
  source,
  accent = C.lime,
  children,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 18, stiffness: 110}});
  const y = interpolate(enter, [0, 1], [42, 0]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        color: C.white,
        fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
        padding: '130px 120px 90px',
        overflow: 'hidden',
      }}
    >
      <Grid />
      <div
        style={{
          position: 'absolute',
          width: 820,
          height: 820,
          borderRadius: '50%',
          right: -260,
          top: -330,
          background: `radial-gradient(circle, ${accent}22 0%, transparent 67%)`,
        }}
      />
      <Disclosure />
      <div style={{position: 'relative', opacity, transform: `translateY(${y}px)`}}>
        <div
          style={{
            color: accent,
            fontSize: 27,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 22,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 68 : 82,
            lineHeight: 1.03,
            fontWeight: 850,
            maxWidth: 1510,
            letterSpacing: -3.2,
          }}
        >
          {title}
        </div>
        {body ? (
          <div
            style={{
              color: C.muted,
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 1420,
              marginTop: 28,
            }}
          >
            {body}
          </div>
        ) : null}
      </div>
      <div style={{position: 'relative', marginTop: 58}}>{children}</div>
      <Footer source={source} />
    </AbsoluteFill>
  );
};

const EvidenceCard: React.FC<{
  plan: string;
  price: string;
  credits: string;
  feature: string;
  active?: boolean;
}> = ({plan, price, credits, feature, active}) => {
  const frame = useCurrentFrame();
  const pulse = 0.45 + 0.25 * Math.sin(frame * 0.05);
  return (
    <div
      style={{
        flex: 1,
        minHeight: 320,
        padding: '36px 40px',
        borderRadius: 26,
        background: C.panel,
        border: `2px solid ${active ? C.lime : '#303844'}`,
        boxShadow: active ? `0 0 55px rgba(168,255,62,${pulse * 0.25})` : 'none',
      }}
    >
      <div style={{fontSize: 26, color: active ? C.lime : C.muted, fontWeight: 800}}>{plan}</div>
      <div style={{fontSize: 68, fontWeight: 900, marginTop: 12}}>{price}</div>
      <div style={{fontSize: 29, color: C.white, marginTop: 26}}>{credits}</div>
      <div
        style={{
          marginTop: 34,
          padding: '16px 18px',
          borderRadius: 14,
          background: active ? '#a8ff3e18' : C.panel2,
          color: active ? C.lime : C.muted,
          fontSize: 25,
          fontWeight: 750,
        }}
      >
        {feature}
      </div>
    </div>
  );
};

const TermsPanel: React.FC = () => {
  const f = useCurrentFrame();
  const x = interpolate(f, [20, 55], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        background: '#f7f4eb',
        color: '#16191d',
        padding: '34px 44px',
        borderRadius: 24,
        maxWidth: 1500,
        boxShadow: '0 28px 100px #0008',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div style={{fontSize: 24, fontWeight: 700, marginBottom: 24}}>ElevenLabs Terms of Service (non-EEA)</div>
      <div style={{fontSize: 31, lineHeight: 1.48}}>
        Free Users may use the Services only for
        <span
          style={{
            position: 'relative',
            margin: '0 9px',
            padding: '2px 7px',
            background: `linear-gradient(90deg, #a8ff3eaa ${x * 100}%, transparent ${x * 100}%)`,
            fontWeight: 800,
          }}
        >
          non-commercial purposes
        </span>
        . Paid Users may use the Services for
        <span
          style={{
            margin: '0 9px',
            padding: '2px 7px',
            background: `linear-gradient(90deg, #a8ff3eaa ${x * 100}%, transparent ${x * 100}%)`,
            fontWeight: 800,
          }}
        >
          commercial purposes
        </span>
        , subject to the Terms and Prohibited Use Policy.
      </div>
      <div style={{fontSize: 19, color: '#555', marginTop: 28}}>
        Editorial excerpt/paraphrase · verify the applicable regional terms
      </div>
    </div>
  );
};

const Steps: React.FC = () => {
  const f = useCurrentFrame();
  const items = ['LOCK SCRIPT', 'TEST HARD LINE', 'GENERATE SECTIONS', 'SAVE SETTINGS', 'ARCHIVE'];
  return (
    <div style={{display: 'flex', gap: 18, width: '100%'}}>
      {items.map((label, i) => {
        const p = spring({frame: f - i * 12, fps: 30, config: {damping: 18}});
        return (
          <div
            key={label}
            style={{
              flex: 1,
              minHeight: 190,
              borderRadius: 22,
              padding: '28px 22px',
              background: i === 0 ? '#a8ff3e18' : C.panel,
              border: `1px solid ${i === 0 ? C.lime : '#303844'}`,
              transform: `translateY(${(1 - p) * 35}px)`,
              opacity: p,
            }}
          >
            <div style={{color: C.lime, fontSize: 24, fontWeight: 900}}>0{i + 1}</div>
            <div style={{fontSize: 27, lineHeight: 1.15, fontWeight: 800, marginTop: 24}}>{label}</div>
          </div>
        );
      })}
    </div>
  );
};

const Scorecard: React.FC = () => {
  const items = [
    ['RIGHTS', 'Does the plan cover the intended use?'],
    ['CREDITS', 'Does the allowance cover revisions?'],
    ['REPEATABILITY', 'Can settings be reproduced?'],
    ['QUALITY', 'Did your own long-form test pass?'],
  ];
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
      {items.map(([k, v]) => (
        <div key={k} style={{background: C.panel, padding: '24px 30px', borderRadius: 20, borderLeft: `6px solid ${C.lime}`}}>
          <div style={{color: C.lime, fontSize: 24, fontWeight: 900}}>{k}</div>
          <div style={{fontSize: 27, marginTop: 8}}>{v}</div>
        </div>
      ))}
    </div>
  );
};

const EndCard: React.FC = () => (
  <AbsoluteFill
    style={{
      background: C.bg,
      color: C.white,
      fontFamily: 'Inter, ui-sans-serif, sans-serif',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Grid />
    <Disclosure />
    <div style={{color: C.lime, fontSize: 25, fontWeight: 900, letterSpacing: 4}}>AI TOOLS LAB</div>
    <div style={{fontSize: 78, fontWeight: 900, marginTop: 24, maxWidth: 1350, lineHeight: 1.05}}>
      Check the rights. Lock the script. Generate once.
    </div>
    <div style={{fontSize: 34, color: C.muted, marginTop: 34}}>Free checklist and current guide linked below</div>
    <div style={{fontSize: 24, color: C.white, marginTop: 54, padding: '18px 28px', border: `2px solid ${C.lime}`, borderRadius: 999}}>
      ai-tools-lab.netlify.app
    </div>
  </AbsoluteFill>
);

export const Flagship01: React.FC = () => (
  <AbsoluteFill style={{background: C.bg}}>
    <Sequence from={0} durationInFrames={750}>
      <Scene eyebrow="The Buyer Lab" title="Sound ready does not mean publishing ready." body="The permission comes from the plan and terms—not from how polished the file sounds.">
        <Wave danger />
      </Scene>
    </Sequence>

    <Sequence from={750} durationInFrames={1200}>
      <Scene eyebrow="The exact decision" title="Private testing and commercial publishing are different stages." body="Current plan details shown as checked on 2026-09-14." source="Source: elevenlabs.io/pricing · checked 2026-09-14">
        <div style={{display: 'flex', gap: 28}}>
          <EvidenceCard plan="FREE" price="$0 / month" credits="10,000 credits / month" feature="Testing / non-commercial use" />
          <EvidenceCard plan="STARTER" price="$6 / month" credits="30,000 credits / month" feature="Commercial License listed" active />
        </div>
      </Scene>
    </Sequence>

    <Sequence from={1950} durationInFrames={1350}>
      <Scene eyebrow="What the current terms say" title="The rights distinction is explicit." body="Separate regional terms exist. Always check the version that applies to you." source="Source: ElevenLabs non-EEA Terms · updated 2026-03-31">
        <TermsPanel />
      </Scene>
    </Sequence>

    <Sequence from={3300} durationInFrames={1350}>
      <Scene eyebrow="Evidence boundary" title="One sentence. Two takes. Take two was preferred." body="That is a narrow interface observation—not a full benchmark. Existing free-plan outputs remain silent in this campaign.">
        <div style={{display: 'flex', gap: 24}}>
          {['GENERATION 1', 'GENERATION 2'].map((x, i) => (
            <div key={x} style={{flex: 1, background: C.panel, borderRadius: 24, padding: 34, border: `2px solid ${i === 1 ? C.lime : '#303844'}`}}>
              <div style={{fontSize: 25, color: i === 1 ? C.lime : C.muted, fontWeight: 850}}>{x}</div>
              <Wave />
              <div style={{fontSize: 22, color: C.muted}}>Silent interface evidence · not commercially used</div>
            </div>
          ))}
        </div>
      </Scene>
    </Sequence>

    <Sequence from={4650} durationInFrames={1950}>
      <Scene eyebrow="Credit-safe production" title="Do the expensive decision work before generation." body="Correct one section—not the entire narration.">
        <Steps />
      </Scene>
    </Sequence>

    <Sequence from={6600} durationInFrames={1500}>
      <Scene eyebrow="Choose the stage" title="Free for evaluation. Check paid rights for commercial output." body="Do not assume an upgrade changes the status of files generated earlier. The safer workflow is to regenerate the approved master while the suitable plan is active.">
        <div style={{display: 'flex', gap: 24}}>
          <EvidenceCard plan="PRIVATE TEST" price="Evaluate" credits="Interface · voice · pronunciation" feature="Do not publish commercially" />
          <EvidenceCard plan="COMMERCIAL PROJECT" price="Verify" credits="Rights · plan · regional terms" feature="Generate approved master under suitable plan" active />
        </div>
      </Scene>
    </Sequence>

    <Sequence from={8100} durationInFrames={1350}>
      <Scene eyebrow="The decision" title="Four checks before you generate the master." body="A useful review separates evidence from marketing.">
        <Scorecard />
      </Scene>
    </Sequence>

    <Sequence from={9450} durationInFrames={900}>
      <EndCard />
    </Sequence>
  </AbsoluteFill>
);
