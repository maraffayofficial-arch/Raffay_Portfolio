// Hi-fi sections: About, Stack, Projects

const { HIFI_C: CC, HIFI_FONTS: FF } = window;
const { SectionLabel: SL, H2: HH2, Btn: BB, Brackets: BR, NeonBracket: NB } = window;

// ---------- About ----------
const About = () => {
  const { isMobile } = window.useViewport();
  return (
  <section id="about" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: CC.bg, overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 20% 50%, rgba(46,123,255,0.08), transparent 60%)` }} />
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 48 : 80, alignItems: 'center' }}>
      <div>
        <SL num="/ 01" label="who.am.i" />
        <HH2 style={{ maxWidth: 620 }}>
          Final-semester <span style={{ color: CC.red }}>BSCS</span> student running two stacks at once —
          <span style={{ color: CC.blue }}> MERN</span> by day, <span style={{ color: CC.blue }}>neural nets</span> by night.
        </HH2>
        <p style={{ fontFamily: FF.FONT_BODY, fontSize: 16, lineHeight: 1.7, color: CC.inkDim, marginTop: 28, maxWidth: 560 }}>
          I'm Abdul Raffay — currently in the 8th and final semester of my BSCS program. I build full-stack web
          applications with the MERN stack, and I train deep-learning models with PyTorch and TensorFlow in my
          research time.
        </p>
        <p style={{ fontFamily: FF.FONT_BODY, fontSize: 16, lineHeight: 1.7, color: CC.inkDim, marginTop: 16, maxWidth: 560 }}>
          My work sits at the intersection of product and research: shipping polished interfaces that wrap serious
          ML pipelines. I care about clean APIs, readable models, and interfaces that feel like they respect the
          user's attention.
        </p>
        <div style={{ display: 'flex', gap: 40, marginTop: 36, flexWrap: 'wrap' }}>
          {[
            { k: 'Based', v: 'Pakistan' },
            { k: 'Focus', v: 'MERN · ML/DL' },
            { k: 'Available', v: 'Q2 2026' },
          ].map(m => (
            <div key={m.k}>
              <div style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color: CC.inkMute, letterSpacing: '0.25em', textTransform: 'uppercase' }}>{m.k}</div>
              <div style={{ fontFamily: FF.FONT_DISPLAY, fontSize: 20, fontWeight: 600, color: CC.ink, marginTop: 4 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', justifySelf: 'end' }}>
        <div style={{ position: 'relative', width: 280, aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 16, border: `1.5px solid ${CC.line}` }}>
          <img src="assets/portrait.png" alt="Abdul Raffay" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 14 }} />
          <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 0 40px rgba(0,0,0,0.25)`, pointerEvents: 'none', borderRadius: 14 }} />
          <BR color={CC.red} size={14} />
        </div>
        {/* labels */}
        <div style={{ position: 'absolute', top: -10, right: -16, fontFamily: FF.FONT_MONO, fontSize: 9, color: CC.red, letterSpacing: '0.2em' }}>
          ● LIVE
        </div>
        <div style={{ position: 'absolute', bottom: -22, left: 0, fontFamily: FF.FONT_MONO, fontSize: 10, color: CC.inkMute, letterSpacing: '0.15em' }}>
          IMG_0412 · raffay.png · 1:1
        </div>
        {/* accent block */}
        <div style={{
          position: 'absolute',
          bottom: -12, right: -12,
          width: 64, height: 64,
          border: `1.5px solid ${CC.blue}`,
          boxShadow: `0 0 16px ${CC.blue}55`,
          zIndex: -1,
        }} />
      </div>
    </div>
  </section>
  );
};

// ---------- Stack ----------
const STACK = [
  {
    cat: 'FRONTEND', color: CC.red,
    items: [
      { n: 'React', lvl: 90 },
      { n: 'Tailwind', lvl: 85 },
      { n: 'HTML / CSS', lvl: 88 },
      { n: 'TypeScript', lvl: 70 },
    ],
  },
  {
    cat: 'BACKEND', color: CC.blue,
    items: [
      { n: 'Node.js', lvl: 85 }, { n: 'Express', lvl: 82 },
      { n: 'MongoDB', lvl: 80 }, { n: 'REST / JWT', lvl: 75 },
      { n: 'Socket.io', lvl: 68 },
    ],
  },
  {
    cat: 'ML / DL', color: CC.red,
    items: [
      { n: 'Python', lvl: 72 }, { n: 'PyTorch', lvl: 62 },
      { n: 'TensorFlow', lvl: 58 }, { n: 'scikit-learn', lvl: 65 },
      { n: 'pandas / numpy', lvl: 68 },
    ],
  },
];

const SkillBar = ({ name, lvl, color }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
      <span style={{ fontFamily: FF.FONT_BODY, fontSize: 13, color: CC.ink, fontWeight: 500 }}>{name}</span>
      <span style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color, letterSpacing: '0.1em' }}>{lvl}%</span>
    </div>
    <div style={{ height: 4, background: '#14141c', border: `1px solid ${CC.line}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: `${lvl}%`,
        background: `linear-gradient(90deg, ${color}, ${color === CC.red ? CC.blue : CC.red})`,
        boxShadow: `0 0 10px ${color}88`,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0 1px, transparent 1px 8px)',
        pointerEvents: 'none',
      }} />
    </div>
  </div>
);

const Stack = () => {
  const { isMobile, isTablet } = window.useViewport();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
  <section id="stack" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: CC.bgAlt, overflow: 'hidden' }}>
    <GridBg />
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <SL num="/ 02" label="the.toolkit" />
          <HH2>Stack <span style={{ color: CC.blue }}>proficiency</span>.</HH2>
        </div>
        <div style={{ fontFamily: FF.FONT_MONO, fontSize: 11, color: CC.inkDim, letterSpacing: '0.15em' }}>
          self-rated · updated 2026·04
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 28 }}>
        {STACK.map(col => (
          <div key={col.cat} style={{
            position: 'relative',
            background: CC.surface,
            border: `1px solid ${CC.line}`,
            padding: '28px 24px',
          }}>
            <NB pos="tl" color={col.color} size={16} />
            <NB pos="br" color={col.color} size={16} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
              <span style={{ fontFamily: FF.FONT_MONO, fontSize: 11, color: col.color, letterSpacing: '0.25em' }}>
                / {col.cat}
              </span>
              <span style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color: CC.inkMute }}>
                [{col.items.length}]
              </span>
            </div>
            {col.items.map(it => <SkillBar key={it.n} name={it.n} lvl={it.lvl} color={col.color} />)}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

// ---------- Projects ----------
const PROJECTS = [
  {
    id: 'PRJ_01', name: 'loop.chat', kind: 'Realtime · WebSockets',
    desc: 'Full-duplex real-time messaging app using WebSockets via Socket.IO. Room-based chat, user join/leave events, and live message broadcasting.',
    tags: ['Node.js', 'Express', 'Socket.IO'],
    repo: 'https://github.com/maraffayofficial-arch/Real-time-Cricket-app',
    accent: CC.red,
  },
  {
    id: 'PRJ_02', name: 'attend.ai', kind: 'ML · Time-Series',
    desc: 'End-to-end time-series ML pipeline using Facebook Prophet integrated with a Flask REST API and MySQL. Achieved 0.93 prediction accuracy.',
    tags: ['Python', 'Prophet', 'Flask', 'MySQL'],
    repo: 'https://github.com/maraffayofficial-arch/Student_Performance_Evaluation-Multiple-Linear-Regression-ML',
    accent: CC.blue,
  },
  {
    id: 'PRJ_03', name: 'sub.track', kind: 'Backend · API',
    desc: 'Secure Node.js REST API to manage and track user subscriptions with protected endpoints, JWT authentication, and role-based access control.',
    tags: ['Node.js', 'JWT', 'REST API'],
    repo: 'https://github.com/maraffayofficial-arch/Resturant-s-foodplan-API-with-Node.js-Express-Mongo-DB',
    accent: CC.red,
  },
  {
    id: 'PRJ_04', name: 'cart.exe', kind: 'MERN · E-commerce',
    desc: 'Full-stack e-commerce solution for a real client — UI, API, database design, and cloud deployment. Maintained actively for over 1 year.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/maraffayofficial-arch/Ecommerce-Store',
    accent: CC.blue,
  },
  {
    id: 'PRJ_05', name: 'floor.ai', kind: 'DL · Computer Vision',
    desc: 'Novel deep learning model for automated floor plan generation using PyTorch and OpenCV, exposed via Flask. Currently in active development.',
    tags: ['PyTorch', 'OpenCV', 'Flask', 'Python'],
    live: 'https://www.linkedin.com/feed/update/urn:li:activity:7487126123294904321/',
    repo: 'https://github.com/maraffayofficial-arch',
    accent: CC.red,
  },
  {
    id: 'PRJ_06', name: 'movie.rec', kind: 'ML · Recommendation',
    desc: 'Content-based movie recommendation system using cosine similarity and NLP. Built with Streamlit for interactive movie discovery and personalized suggestions.',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'NLP'],
    live: 'https://maraffayofficial-arch-movie-recommender-app-zmvrsz.streamlit.app/',
    repo: 'https://github.com/maraffayofficial-arch/movie_recommender',
    accent: CC.blue,
  },
  {
    id: 'PRJ_07', name: 'attend.predict', kind: 'ML · Time-Series',
    desc: 'Real-time attendance prediction system with ML pipeline using XGBoost, Prophet, and Isolation Forest. Features automated analysis, anomaly detection, and 7-day forecasts.',
    tags: ['React.js', 'Flask', 'MongoDB', 'XGBoost', 'Prophet'],
    live: 'https://automated-attendance-predictior.vercel.app',
    repo: 'https://github.com/maraffayofficial-arch/automated_attendance_predictior',
    accent: CC.red,
  },
];

const ProjectCard = ({ p, i }) => {
  const [hover, setHover] = React.useState(false);
  const mainLink = p.live || p.repo;
  return (
    <a
      href={mainLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        position: 'relative',
        background: CC.surface,
        border: `1px solid ${hover ? p.accent : CC.line}`,
        padding: 0,
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.25s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? `0 10px 40px ${p.accent}22, 0 0 0 1px ${p.accent}` : 'none',
        overflow: 'hidden',
      }}
    >
      <NB pos="tl" color={p.accent} size={14} />
      <NB pos="br" color={p.accent} size={14} />

      {/* header strip */}
      <div style={{
        padding: '14px 20px',
        borderBottom: `1px solid ${CC.line}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color: p.accent, letterSpacing: '0.2em' }}>
          ◉ {p.id}
        </span>
        <span style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color: CC.inkMute, letterSpacing: '0.15em' }}>
          {p.kind}
        </span>
      </div>

      {/* preview panel */}
      <div style={{
        height: 170,
        position: 'relative',
        background: `linear-gradient(135deg, ${p.accent}15, transparent 70%), ${CC.bg}`,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(${p.accent}0f 1px, transparent 1px),
            linear-gradient(90deg, ${p.accent}0f 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }} />
        {/* big glyph */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FF.FONT_DISPLAY,
          fontSize: 96,
          fontWeight: 700,
          color: p.accent,
          opacity: 0.15,
          letterSpacing: '-0.04em',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}>
          {p.id.slice(-2)}
        </div>
        {/* scan */}
        <div style={{
          position: 'absolute',
          top: hover ? '100%' : '-20%',
          left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
          boxShadow: `0 0 20px ${p.accent}`,
          transition: 'top 1.5s linear',
        }} />
      </div>

      <div style={{ padding: '22px 22px 24px' }}>
        <div style={{ fontFamily: FF.FONT_DISPLAY, fontSize: 28, fontWeight: 700, color: CC.ink, letterSpacing: '-0.01em' }}>
          {p.name}
        </div>
        <div style={{ fontFamily: FF.FONT_BODY, fontSize: 13, color: CC.inkDim, lineHeight: 1.55, marginTop: 8, minHeight: 60 }}>
          {p.desc}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontFamily: FF.FONT_MONO,
              fontSize: 10,
              color: CC.inkDim,
              border: `1px solid ${CC.line}`,
              padding: '3px 8px',
              letterSpacing: '0.08em',
            }}>{t}</span>
          ))}
        </div>
        <div style={{
          marginTop: 18,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 14,
          borderTop: `1px dashed ${CC.line}`,
          gap: 12,
        }}>
          <span style={{ fontFamily: FF.FONT_MONO, fontSize: 10, color: CC.inkMute }}>
            {p.live ? 'view.demo ↗' : 'view.repo ↗'}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {p.live && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: FF.FONT_MONO,
                  fontSize: 10,
                  color: p.accent,
                  textDecoration: 'none',
                  border: `1px solid ${p.accent}`,
                  padding: '4px 10px',
                  letterSpacing: '0.1em',
                  transition: 'all 0.25s',
                  background: hover ? `${p.accent}15` : 'transparent',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = `${p.accent}25`}
                onMouseLeave={(e) => e.currentTarget.style.background = hover ? `${p.accent}15` : 'transparent'}
              >
                &lt;/&gt; CODE
              </a>
            )}
            <span style={{
              fontFamily: FF.FONT_MONO,
              fontSize: 11,
              color: p.accent,
              letterSpacing: '0.15em',
              transform: hover ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.25s',
            }}>
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const { isMobile, isTablet } = window.useViewport();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
  <section id="projects" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: CC.bg, overflow: 'hidden' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <SL num="/ 03" label="field.work" />
          <HH2>Selected <span style={{ color: CC.red }}>projects</span>.</HH2>
        </div>
        <a href="https://github.com/maraffayofficial-arch?tab=repositories" target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: FF.FONT_MONO, fontSize: 12, color: CC.blue, letterSpacing: '0.15em',
            textDecoration: 'none', borderBottom: `1px solid ${CC.blue}`, paddingBottom: 4,
          }}>
          all on github ↗
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </div>
  </section>
  );
};

Object.assign(window, { About, Stack, Projects, SkillBar, ProjectCard });
