// Cyberpunk portfolio wireframes — low-fi, sketchy, one neon accent
// Four structurally different directions for Abdul Raffay's portfolio

const ACCENT = 'var(--wf-accent, #ff2e3e)';
const ACCENT2 = 'var(--wf-accent-2, #2e7bff)';
const INK = '#111';
const PAPER = '#fafaf7';
const MUTED = '#888';
const LINE = '#222';

// ---------- shared primitives ----------

const Stripe = ({ w = '100%', h = 80, label, style }) => (
  <div
    style={{
      width: w,
      height: h,
      background:
        'repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 6px, transparent 6px 14px)',
      border: `1.5px dashed ${INK}`,
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      color: '#555',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {label}
  </div>
);

const Scribble = ({ children, size = 16, style }) => (
  <span
    style={{
      fontFamily: 'Caveat, cursive',
      fontSize: size,
      color: INK,
      lineHeight: 1.1,
      ...style,
    }}
  >
    {children}
  </span>
);

const Mono = ({ children, size = 11, style }) => (
  <span
    style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: size,
      color: INK,
      letterSpacing: '0.04em',
      ...style,
    }}
  >
    {children}
  </span>
);

const TextLine = ({ w = '100%', h = 8, opacity = 0.55 }) => (
  <div
    style={{
      width: w,
      height: h,
      background: INK,
      opacity,
      borderRadius: 2,
      margin: '4px 0',
    }}
  />
);

const Tag = ({ children, accent = false }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '3px 8px',
      border: `1.2px solid ${accent ? ACCENT : INK}`,
      color: accent ? ACCENT : INK,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 2,
      marginRight: 6,
      marginBottom: 6,
    }}
  >
    {children}
  </span>
);

const Corner = ({ pos = 'tl', color = ACCENT, size = 10 }) => {
  const base = { position: 'absolute', width: size, height: size };
  const styles = {
    tl: { top: -1, left: -1, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` },
    tr: { top: -1, right: -1, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` },
    bl: { bottom: -1, left: -1, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` },
    br: { bottom: -1, right: -1, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` },
  };
  return <div style={{ ...base, ...styles[pos] }} />;
};

const Box = ({ children, style, bracket = false }) => (
  <div
    style={{
      position: 'relative',
      border: `1.5px solid ${INK}`,
      background: PAPER,
      padding: 14,
      borderRadius: 2,
      ...style,
    }}
  >
    {bracket && (
      <>
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
        <Corner pos="br" />
      </>
    )}
    {children}
  </div>
);

const Annotation = ({ children, style }) => (
  <div
    style={{
      fontFamily: 'Caveat, cursive',
      fontSize: 18,
      color: ACCENT,
      transform: 'rotate(-2deg)',
      ...style,
    }}
  >
    {children}
  </div>
);

// Skill proficiency data — shared across wireframes
const SKILLS = {
  FRONTEND: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 78 },
    { name: 'Tailwind', level: 85 },
    { name: 'Redux', level: 72 },
  ],
  BACKEND: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST / JWT', level: 75 },
  ],
  'ML / DL': [
    { name: 'Python', level: 88 },
    { name: 'PyTorch', level: 75 },
    { name: 'TensorFlow', level: 70 },
    { name: 'scikit-learn', level: 78 },
    { name: 'pandas / numpy', level: 85 },
  ],
};

const SkillBar = ({ name, level, dark = false, color = ACCENT }) => (
  <div style={{ marginBottom: 10 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: dark ? '#eee' : INK, letterSpacing: '0.03em' }}>{name}</span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color, letterSpacing: '0.05em' }}>{level}%</span>
    </div>
    <div style={{ height: 6, background: dark ? '#1c1c1c' : 'rgba(0,0,0,0.08)', border: dark ? '1px solid #2a2a2a' : `1px solid rgba(0,0,0,0.15)`, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${ACCENT2})`, boxShadow: `0 0 8px ${color}55` }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 10%)', pointerEvents: 'none' }} />
    </div>
  </div>
);

// Rain lines (animation intensity 1/2)
const Rain = ({ intensity = 1 }) => {
  if (intensity === 0) return null;
  const count = intensity === 2 ? 24 : 10;
  const lines = Array.from({ length: count }, (_, i) => i);
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: intensity === 2 ? 0.35 : 0.18,
      }}
    >
      {lines.map(i => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: -40,
            left: `${(i * 97) % 100}%`,
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, transparent, ${ACCENT})`,
            animation: `wf-rain ${1.2 + (i % 5) * 0.3}s linear ${i * 0.08}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// ======================================================
// WF1: Classic vertical scroll
// ======================================================
const WF1 = ({ intensity = 1 }) => (
  <div
    style={{
      width: '100%',
      minHeight: 1800,
      background: PAPER,
      color: INK,
      padding: 0,
      position: 'relative',
      fontFamily: 'Caveat, cursive',
    }}
  >
    {/* Nav */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 40px',
        borderBottom: `1.5px solid ${INK}`,
      }}
    >
      <Mono size={13} style={{ fontWeight: 700 }}>A.RAFFAY // PORTFOLIO</Mono>
      <div style={{ display: 'flex', gap: 18 }}>
        {['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'BLOG', 'CONTACT'].map(x => (
          <Mono key={x} size={11}>{x}</Mono>
        ))}
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: ACCENT,
            border: `1px solid ${ACCENT}`,
            padding: '2px 8px',
          }}
        >
          RESUME ↓
        </span>
      </div>
    </div>

    {/* Hero */}
    <section style={{ position: 'relative', padding: 0, borderBottom: `1px dashed ${MUTED}`, background: '#0a0a0a', overflow: 'hidden' }}>
      <img src="assets/hero.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.85) 100%), linear-gradient(90deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0) 100%)` }} />
      <Rain intensity={intensity} />
      <div style={{ position: 'relative', padding: '110px 40px 90px', minHeight: 520, color: '#f2f2f2' }}>
        <Mono size={11} style={{ color: ACCENT }}>[ sys.init :: 2026 · night_city ]</Mono>
        <div style={{ fontFamily: 'Caveat, cursive', fontSize: 108, lineHeight: 0.92, marginTop: 8, textShadow: `0 0 24px rgba(0,0,0,0.6)` }}>
          <span style={{ color: ACCENT2 }}>Abdul</span> <span style={{ color: ACCENT }}>Raffay.</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, marginTop: 14, maxWidth: 520, color: '#ddd' }}>
          BSCS · 8th semester · building with MERN + deep learning.
          <br />
          <span style={{ opacity: 0.6 }}>↳ chasing signals in the noise.</span>
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
          <span style={{ display: 'inline-block', padding: '6px 12px', border: `1.5px solid ${ACCENT}`, color: ACCENT, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.08em' }}>◉ VIEW PROJECTS</span>
          <span style={{ display: 'inline-block', padding: '6px 12px', border: `1.5px solid ${ACCENT2}`, color: ACCENT2, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.08em' }}>DOWNLOAD CV ↓</span>
        </div>
      </div>
    </section>

    {/* About */}
    <section style={{ padding: '60px 40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'start' }}>
      <div>
        <Mono size={11} style={{ color: ACCENT }}>// 01 — ABOUT</Mono>
        <Scribble size={42} style={{ display: 'block', margin: '8px 0 18px' }}>who.am.i</Scribble>
        <TextLine w="95%" />
        <TextLine w="88%" />
        <TextLine w="92%" />
        <TextLine w="70%" />
        <TextLine w="85%" />
        <TextLine w="60%" />
      </div>
      <div style={{ position: 'relative', aspectRatio: '1 / 1', maxWidth: 200, justifySelf: 'end', width: '100%', border: `1.5px solid ${INK}`, background: '#0a0a0a', overflow: 'hidden', borderRadius: 14 }}>
        <img src="assets/portrait.png" alt="Abdul Raffay portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: `inset 0 0 0 3px rgba(0,0,0,0), inset 0 0 60px rgba(0,0,0,0.2)` }} />
        <Corner pos="tl" color={ACCENT} />
        <Corner pos="tr" color={ACCENT2} />
        <Corner pos="bl" color={ACCENT2} />
        <Corner pos="br" color={ACCENT} />
        <div style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#fff', letterSpacing: '0.08em', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
          <span style={{ color: ACCENT }}>●</span> IMG_0412 · raffay.png
        </div>
      </div>
    </section>

    {/* Skills */}
    <section style={{ padding: '60px 40px', background: '#f0efe8' }}>
      <Mono size={11} style={{ color: ACCENT }}>// 02 — STACK</Mono>
      <Scribble size={42} style={{ display: 'block', margin: '8px 0 22px' }}>the toolkit</Scribble>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {Object.entries(SKILLS).map(([h, items]) => (
          <Box key={h} bracket>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <Mono size={10} style={{ color: ACCENT }}>{h}</Mono>
              <Mono size={9} style={{ opacity: 0.5 }}>{items.length} pkg</Mono>
            </div>
            {items.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </Box>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section style={{ padding: '60px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <Mono size={11} style={{ color: ACCENT }}>// 03 — FIELD WORK</Mono>
          <Scribble size={42} style={{ display: 'block', margin: '8px 0 0' }}>projects</Scribble>
        </div>
        <Mono size={11}>github.com/maraffayofficial-arch ↗</Mono>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 24 }}>
        {[1, 2, 3, 4].map(i => (
          <Box key={i} bracket style={{ padding: 0 }}>
            <Stripe h={140} label={`project ${i} — screenshot`} style={{ borderRadius: 0, border: 'none', borderBottom: `1.5px dashed ${INK}` }} />
            <div style={{ padding: 16 }}>
              <Mono size={10} style={{ color: ACCENT }}>{`PRJ_0${i}`}</Mono>
              <Scribble size={26} style={{ display: 'block', margin: '4px 0 8px' }}>{['neural.sight', 'cart.exe', 'loop.chat', 'sense.ai'][i-1]}</Scribble>
              <TextLine w="90%" />
              <TextLine w="70%" />
              <div style={{ marginTop: 10 }}>
                <Tag>React</Tag><Tag>Mongo</Tag><Tag accent>↗ repo</Tag>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </section>

    {/* Experience + Blog */}
    <section style={{ padding: '60px 40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, background: '#f0efe8' }}>
      <div>
        <Mono size={11} style={{ color: ACCENT }}>// 04 — TIMELINE</Mono>
        <Scribble size={42} style={{ display: 'block', margin: '8px 0 18px' }}>experience</Scribble>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, borderLeft: `2px solid ${INK}`, paddingLeft: 14 }}>
            <Mono size={10}>2024—NOW</Mono>
            <div style={{ flex: 1 }}>
              <Scribble size={22}>Role / Program</Scribble>
              <TextLine w="80%" />
              <TextLine w="60%" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Mono size={11} style={{ color: ACCENT }}>// 05 — TRANSMISSIONS</Mono>
        <Scribble size={42} style={{ display: 'block', margin: '8px 0 18px' }}>writing</Scribble>
        {[0, 1, 2].map(i => (
          <Box key={i} style={{ marginBottom: 10, padding: 12 }}>
            <Mono size={10}>2026·0{i + 1}·12</Mono>
            <Scribble size={20} style={{ display: 'block' }}>post title goes here</Scribble>
            <TextLine w="70%" />
          </Box>
        ))}
      </div>
    </section>

    {/* Contact / Footer */}
    <footer style={{ background: '#0a0a0a', color: '#eee', padding: '60px 40px 28px', position: 'relative', borderTop: `2px solid ${ACCENT}` }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})` }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 36 }}>
        <div>
          <Mono size={11} style={{ color: ACCENT }}>// END OF LINE</Mono>
          <div style={{ fontFamily: 'Caveat, cursive', fontSize: 56, lineHeight: 0.95, marginTop: 6 }}>
            let's <span style={{ color: ACCENT }}>talk.</span>
          </div>
          <Mono size={10} style={{ display: 'block', marginTop: 10, opacity: 0.55, maxWidth: 280, lineHeight: 1.5 }}>
            open to internships, collaborations, and late-night MERN builds.
          </Mono>
        </div>

        <div>
          <Mono size={10} style={{ color: ACCENT2, display: 'block', marginBottom: 10 }}>/ CONTACT</Mono>
          <a href="mailto:m.a.raffay.official@gmail.com" style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#eee', textDecoration: 'none', marginBottom: 6 }}>▸ m.a.raffay.official@gmail.com</a>
          <a href="https://www.linkedin.com/in/muhammad-abdul-raffay-31bb90385" style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#eee', textDecoration: 'none', marginBottom: 6 }}>▸ linkedin.com/in/muhammad-abdul-raffay</a>
          <a href="https://github.com/maraffayofficial-arch" style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#eee', textDecoration: 'none' }}>▸ github.com/maraffayofficial-arch</a>
        </div>

        <div>
          <Mono size={10} style={{ color: ACCENT2, display: 'block', marginBottom: 10 }}>/ NAVIGATE</Mono>
          {['about', 'stack', 'projects', 'experience', 'blog'].map(l => (
            <Mono key={l} size={11} style={{ display: 'block', opacity: 0.75, marginBottom: 6 }}>› {l}</Mono>
          ))}
        </div>

        <div>
          <Mono size={10} style={{ color: ACCENT2, display: 'block', marginBottom: 10 }}>/ STATUS</Mono>
          <Mono size={11} style={{ display: 'block', marginBottom: 6 }}><span style={{ color: ACCENT }}>●</span> open to work</Mono>
          <Mono size={11} style={{ display: 'block', marginBottom: 6, opacity: 0.7 }}>location :: PK / remote</Mono>
          <Mono size={11} style={{ display: 'block', opacity: 0.7 }}>local_time :: 02:47</Mono>
          <span style={{ display: 'inline-block', marginTop: 12, padding: '6px 10px', border: `1.5px solid ${ACCENT}`, color: ACCENT, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em' }}>DOWNLOAD RESUME ↓</span>
        </div>
      </div>

      <div style={{ marginTop: 44, paddingTop: 16, borderTop: `1px dashed #333`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, opacity: 0.55 }}>
        <span>© 2026 abdul.raffay · built with MERN + caffeine</span>
        <span>v2.6.0 // last_push: 2d ago</span>
        <span>[ signal_strong • online ]</span>
      </div>
    </footer>
  </div>
);

// ======================================================
// WF2: Terminal / CLI single-screen
// ======================================================
const WF2 = ({ intensity = 1 }) => (
  <div
    style={{
      width: '100%',
      minHeight: 900,
      background: '#0d0d0d',
      padding: 28,
      fontFamily: 'JetBrains Mono, monospace',
      color: '#e8e8e8',
      position: 'relative',
      backgroundImage: `radial-gradient(ellipse at 20% 0%, rgba(46,123,255,0.2), transparent 60%), radial-gradient(ellipse at 90% 100%, rgba(255,46,62,0.16), transparent 55%)`,
    }}
  >
    {/* window chrome */}
    <div
      style={{
        border: `1px solid #333`,
        background: '#111',
        borderRadius: 4,
        overflow: 'hidden',
        minHeight: 820,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          background: '#1a1a1a',
          borderBottom: '1px solid #333',
          fontSize: 11,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: ACCENT }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: ACCENT2 }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: '#444' }} />
        </div>
        <span style={{ opacity: 0.6 }}>raffay@nightcity:~$ ./portfolio.sh</span>
        <span style={{ color: ACCENT }}>● LIVE</span>
      </div>

      <div style={{ padding: '24px 32px', fontSize: 13, lineHeight: 1.7 }}>
        <div style={{ color: ACCENT, marginTop: 0, marginBottom: 18, display: 'flex', gap: 14, alignItems: 'stretch' }}>
          <div style={{ width: 220, height: 110, flexShrink: 0, backgroundImage: `url(assets/hero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'right center', border: `1px solid ${ACCENT}`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(10,10,10,0.5), rgba(10,10,10,0))` }} />
            <span style={{ position: 'absolute', top: 6, left: 8, fontSize: 9, color: ACCENT, fontFamily: 'JetBrains Mono, monospace' }}>// cam_08</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: ACCENT }}>$ whoami</div>
            <div style={{ paddingLeft: 14, opacity: 0.9 }}>
              abdul_raffay — bscs[8] · mern + ml/dl engineer
            </div>
          </div>
        </div>

        <div style={{ color: ACCENT, marginTop: 18 }}>$ cat about.txt</div>
        <div style={{ paddingLeft: 14, opacity: 0.8, maxWidth: 640 }}>
          ▮ 8th-semester computer science student routing between full-stack and deep-learning.
          <br />▮ currently shipping MERN apps and training models.
          <br />▮ somewhere between a neural net and a nightshift.
        </div>

        <div style={{ color: ACCENT, marginTop: 18 }}>$ ls ./stack/ --proficiency</div>
        <div style={{ paddingLeft: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 24px', marginTop: 6 }}>
          {Object.entries(SKILLS).flatMap(([h, items]) => items).map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
              <span style={{ width: 92, opacity: 0.85 }}>{s.name.toLowerCase()}</span>
              <span style={{ flex: 1, height: 4, background: '#222', position: 'relative', border: '1px solid #2a2a2a' }}>
                <span style={{ position: 'absolute', inset: 0, width: `${s.level}%`, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})` }} />
              </span>
              <span style={{ width: 32, textAlign: 'right', color: ACCENT2, fontSize: 10 }}>{s.level}%</span>
            </div>
          ))}
        </div>

        <div style={{ color: ACCENT, marginTop: 18 }}>$ git log --projects --limit 4</div>
        <div style={{ paddingLeft: 14, display: 'grid', gap: 10, marginTop: 6 }}>
          {[
            { h: 'PRJ_01', t: 'neural.sight', d: 'CNN image classifier · React dashboard' },
            { h: 'PRJ_02', t: 'cart.exe', d: 'full MERN e-commerce · stripe · redux' },
            { h: 'PRJ_03', t: 'loop.chat', d: 'realtime socket.io chat · jwt auth' },
            { h: 'PRJ_04', t: 'sense.ai', d: 'NLP sentiment pipeline · fastapi + next' },
          ].map(p => (
            <div key={p.h} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 12, fontSize: 12 }}>
              <span style={{ color: ACCENT }}>▸ {p.h}</span> &nbsp;<b>{p.t}</b>
              <div style={{ opacity: 0.6, fontSize: 11 }}>{p.d} &nbsp;·&nbsp; [repo ↗] [demo ↗]</div>
            </div>
          ))}
        </div>

        <div style={{ color: ACCENT2, marginTop: 18 }}>$ cat ./posts/*.md | head</div>
        <div style={{ paddingLeft: 14, opacity: 0.75, fontSize: 12 }}>
          <div>— 2026·03·01 · training on-device: a notebook</div>
          <div>— 2026·02·14 · why my mern stack grew teeth</div>
          <div>— 2026·01·22 · rain, jwt, and stateful sockets</div>
        </div>

        <div style={{ color: ACCENT2, marginTop: 18 }}>$ curl -X GET /contact</div>
        <div style={{ paddingLeft: 14, opacity: 0.9 }}>
          email   → m.a.raffay.official@gmail.com
          <br />
          linked  → /in/muhammad-abdul-raffay-31bb90385
          <br />
          github  → /maraffayofficial-arch
          <br />
          resume  → [download.pdf ↓]
        </div>

        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center' }}>
          <span style={{ color: ACCENT }}>$ _</span>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 14,
              background: ACCENT,
              marginLeft: 6,
              animation: intensity > 0 ? 'wf-blink 1s steps(2) infinite' : 'none',
            }}
          />
        </div>
      </div>

      {/* scanlines overlay */}
      {intensity === 2 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)',
          }}
        />
      )}
    </div>

    <div
      style={{
        position: 'absolute',
        top: 50,
        right: 54,
        fontFamily: 'Caveat, cursive',
        fontSize: 18,
        color: ACCENT,
        transform: 'rotate(3deg)',
      }}
    >
      ← whole site is one terminal
    </div>
  </div>
);

// ======================================================
// WF3: Split HUD — fixed left profile, right feed
// ======================================================
const WF3 = ({ intensity = 1 }) => (
  <div style={{ width: '100%', minHeight: 1100, background: PAPER, color: INK, display: 'grid', gridTemplateColumns: '340px 1fr', position: 'relative' }}>
    {/* LEFT: fixed profile column */}
    <aside
      style={{
        background: '#111',
        color: '#eee',
        padding: 28,
        borderRight: `2px solid ${ACCENT}`,
        position: 'relative',
      }}
    >
      <Rain intensity={intensity} />
      <Mono size={10} style={{ color: ACCENT }}>[ PROFILE.DAT ]</Mono>
      <div style={{ width: '100%', height: 220, backgroundImage: `url(assets/hero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center right', border: `1px solid ${ACCENT}`, marginTop: 16, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,0.75))` }} />
        <Corner pos="tl" color={ACCENT} />
        <Corner pos="tr" color={ACCENT} />
        <Corner pos="bl" color={ACCENT} />
        <Corner pos="br" color={ACCENT} />
        <div style={{ position: 'absolute', bottom: 8, left: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#ccc' }}>avatar_still_frame</div>
      </div>

      <div style={{ fontFamily: 'Caveat, cursive', fontSize: 44, lineHeight: 1, marginTop: 18 }}>
        <span style={{ color: ACCENT2 }}>Abdul</span> <span style={{ color: ACCENT }}>Raffay</span>
      </div>
      <Mono size={11} style={{ display: 'block', opacity: 0.7, marginTop: 4 }}>BSCS · SEM 08 · MERN + ML/DL</Mono>

      <div style={{ marginTop: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, lineHeight: 1.9 }}>
        <div style={{ opacity: 0.5 }}>STATUS</div>
        <div>● open to work</div>
        <div style={{ opacity: 0.5, marginTop: 8 }}>LOCATION</div>
        <div>Pakistan / remote</div>
        <div style={{ opacity: 0.5, marginTop: 8 }}>FOCUS</div>
        <div>React · Node · Mongo</div>
        <div>PyTorch · TensorFlow</div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
        <Mono size={10} style={{ color: ACCENT }}>[ COMMS ]</Mono>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, marginTop: 6, opacity: 0.8 }}>
          email ↗<br />linkedin ↗<br />github ↗<br />resume.pdf ↓
        </div>
      </div>
    </aside>

    {/* RIGHT: scrollable feed */}
    <main style={{ padding: 36 }}>
      {/* tabs */}
      <div style={{ display: 'flex', gap: 22, borderBottom: `1.5px solid ${INK}`, paddingBottom: 10 }}>
        {['/feed', '/stack', '/work', '/education', '/blog'].map((t, i) => (
          <Mono key={t} size={12} style={{ color: i === 0 ? ACCENT : INK, borderBottom: i === 0 ? `2px solid ${ACCENT}` : 'none', paddingBottom: 6 }}>
            {t}
          </Mono>
        ))}
      </div>

      {/* feed cards */}
      <div style={{ marginTop: 22, display: 'grid', gap: 16 }}>
        <Box bracket>
          <Mono size={10} style={{ color: ACCENT }}>◉ NOW_PLAYING · PRJ_01</Mono>
          <Scribble size={32} style={{ display: 'block', margin: '4px 0' }}>neural.sight — CNN classifier</Scribble>
          <Stripe h={160} label="project hero / graph" style={{ marginTop: 8 }} />
          <TextLine w="92%" /><TextLine w="78%" />
          <div style={{ marginTop: 8 }}>
            <Tag>PyTorch</Tag><Tag>React</Tag><Tag>FastAPI</Tag><Tag accent>↗ repo</Tag>
          </div>
        </Box>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[1, 2].map(i => (
            <Box key={i}>
              <Mono size={10} style={{ color: ACCENT }}>PRJ_0{i + 1}</Mono>
              <Scribble size={22} style={{ display: 'block', margin: '2px 0 6px' }}>{['cart.exe', 'loop.chat'][i - 1]}</Scribble>
              <Stripe h={90} label="screenshot" />
              <TextLine w="80%" />
            </Box>
          ))}
        </div>

        <Box>
          <Mono size={10} style={{ color: ACCENT }}>/stack · PROFICIENCY</Mono>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 12 }}>
            {Object.entries(SKILLS).map(([h, items]) => (
              <div key={h}>
                <Mono size={9} style={{ color: ACCENT2, display: 'block', marginBottom: 6 }}>{h}</Mono>
                {items.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
              </div>
            ))}
          </div>
        </Box>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 16 }}>
          <Box>
            <Mono size={10} style={{ color: ACCENT }}>/education</Mono>
            <Scribble size={22} style={{ display: 'block', margin: '2px 0 6px' }}>BSCS · 2022 — 2026</Scribble>
            <TextLine w="85%" /><TextLine w="60%" />
          </Box>
          <Box>
            <Mono size={10} style={{ color: ACCENT }}>/blog · latest</Mono>
            <TextLine w="90%" /><TextLine w="72%" /><TextLine w="80%" />
          </Box>
        </div>
      </div>
    </main>

    <Annotation style={{ position: 'absolute', top: 20, left: 360, transform: 'rotate(-2deg)' }}>
      fixed profile · scrollable feed →
    </Annotation>
  </div>
);

// ======================================================
// WF4: City-map / billboard grid
// ======================================================
const WF4 = ({ intensity = 1 }) => {
  const tiles = [
    { x: 1, y: 1, w: 3, h: 2, label: 'HERO', big: true },
    { x: 4, y: 1, w: 2, h: 2, label: 'ABOUT' },
    { x: 6, y: 1, w: 2, h: 1, label: 'STATUS' },
    { x: 6, y: 2, w: 2, h: 1, label: 'CONTACT' },
    { x: 1, y: 3, w: 2, h: 2, label: 'PRJ_01' },
    { x: 3, y: 3, w: 2, h: 1, label: 'PRJ_02' },
    { x: 5, y: 3, w: 1, h: 2, label: 'PRJ_03' },
    { x: 6, y: 3, w: 2, h: 2, label: 'PRJ_04' },
    { x: 3, y: 4, w: 2, h: 1, label: 'STACK' },
    { x: 1, y: 5, w: 4, h: 1, label: 'TIMELINE / EDUCATION' },
    { x: 5, y: 5, w: 3, h: 1, label: 'BLOG' },
  ];
  const cell = 110;
  const gap = 8;
  const cols = 7;
  const rows = 5;

  return (
    <div style={{ width: '100%', minHeight: 900, background: '#0a0a0a', backgroundImage: `radial-gradient(ellipse at 15% 20%, rgba(46,123,255,0.26), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(255,46,62,0.2), transparent 55%)`, padding: 36, position: 'relative', color: '#eee' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <Mono size={11} style={{ color: ACCENT }}>[ NIGHT_CITY / SECTOR 08 ]</Mono>
          <div style={{ fontFamily: 'Caveat, cursive', fontSize: 52, color: '#eee' }}>
            <span style={{ color: ACCENT2 }}>raffay</span><span style={{ color: ACCENT }}>.</span>grid
          </div>
          <Mono size={10} style={{ opacity: 0.6, display: 'block', marginTop: 4 }}>click any block · focus ↗</Mono>
        </div>
        <div style={{ width: 320, height: 120, backgroundImage: `url(assets/hero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'right center', border: `1px solid ${ACCENT}`, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(10,10,10,0.6), rgba(10,10,10,0))` }} />
          <Corner pos="tl" color={ACCENT} />
          <Corner pos="br" color={ACCENT2} />
          <Mono size={9} style={{ position: 'absolute', bottom: 6, left: 8, color: '#ddd' }}>// live_feed</Mono>
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
          gridAutoRows: `${cell}px`,
          gap,
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <Rain intensity={intensity} />
        {tiles.map((t, i) => (
          <div
            key={i}
            style={{
              gridColumn: `${t.x} / span ${t.w}`,
              gridRow: `${t.y} / span ${t.h}`,
              border: `1px solid ${t.big ? ACCENT : (i % 3 === 0 ? ACCENT2 : '#333')}`,
              background: t.big
                ? `linear-gradient(135deg, rgba(255,46,62,0.18), rgba(46,123,255,0.14))`
                : '#0f0f0f',
              padding: 12,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Corner pos="tl" color={t.big ? ACCENT : '#555'} />
            <Corner pos="br" color={t.big ? ACCENT : '#555'} />

            {t.big ? (
              <>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(assets/hero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'right center', opacity: 0.55 }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.35) 65%, rgba(10,10,10,0) 100%)` }} />
                <div style={{ position: 'relative' }}>
                  <Mono size={10} style={{ color: ACCENT }}>◉ {t.label}</Mono>
                </div>
                <div style={{ position: 'relative', fontFamily: 'Caveat, cursive', fontSize: 54, lineHeight: 1, color: '#eee' }}>
                  <span style={{ color: ACCENT2 }}>Abdul</span><br /><span style={{ color: ACCENT }}>Raffay</span>
                </div>
                <Mono size={10} style={{ position: 'relative', opacity: 0.85 }}>bscs_08 · mern + ml/dl</Mono>
              </>
            ) : (
              <>
                <Mono size={10} style={{ color: ACCENT }}>{t.label}</Mono>
                <div style={{ opacity: 0.55, fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
                  {t.label.startsWith('PRJ') ? 'screenshot / tags' : 'content block'}
                </div>
                <Mono size={9} style={{ opacity: 0.4 }}>↗ open</Mono>
              </>
            )}

            {/* faint scan */}
            {intensity === 2 && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)',
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>
        ))}
      </div>

      <Annotation style={{ position: 'absolute', bottom: 36, left: 40, color: ACCENT, transform: 'rotate(-1deg)' }}>
        each block = a section · navigate like a city map
      </Annotation>
    </div>
  );
};

Object.assign(window, { WF1, WF2, WF3, WF4 });
