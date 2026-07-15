// Hi-fi cyberpunk portfolio — Abdul Raffay
// Neon noir · red primary · blue secondary · dark base

const C = {
  bg: '#07070a',
  bgAlt: '#0c0c12',
  surface: '#111118',
  line: '#1e1e28',
  ink: '#ecedf2',
  inkDim: '#9a9aa8',
  inkMute: '#5c5c6a',
  red: 'var(--accent-red, #ff2e3e)',
  blue: 'var(--accent-blue, #2e7bff)',
};

const FONT_DISPLAY = "'Rajdhani', 'Orbitron', sans-serif";
const FONT_BODY = "'Inter', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
};

// ---------- primitives ----------

const NeonBracket = ({ size = 14, thickness = 2, color, pos, inset = 0 }) => {
  const c = color || C.red;
  const s = { position: 'absolute', width: size, height: size };
  const map = {
    tl: { top: inset, left: inset, borderTop: `${thickness}px solid ${c}`, borderLeft: `${thickness}px solid ${c}` },
    tr: { top: inset, right: inset, borderTop: `${thickness}px solid ${c}`, borderRight: `${thickness}px solid ${c}` },
    bl: { bottom: inset, left: inset, borderBottom: `${thickness}px solid ${c}`, borderLeft: `${thickness}px solid ${c}` },
    br: { bottom: inset, right: inset, borderBottom: `${thickness}px solid ${c}`, borderRight: `${thickness}px solid ${c}` },
  };
  return <div style={{ ...s, ...map[pos], boxShadow: `0 0 8px ${c}88` }} />;
};

const Brackets = ({ color, size = 14 }) => (
  <>
    <NeonBracket pos="tl" color={color} size={size} />
    <NeonBracket pos="tr" color={color} size={size} />
    <NeonBracket pos="bl" color={color} size={size} />
    <NeonBracket pos="br" color={color} size={size} />
  </>
);

const SectionLabel = ({ num, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
    <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.red, letterSpacing: '0.2em' }}>
      {num}
    </span>
    <span style={{ width: 40, height: 1, background: `linear-gradient(90deg, ${C.red}, transparent)` }} />
    <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.inkDim, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
      {label}
    </span>
  </div>
);

const H2 = ({ children, style }) => (
  <h2 style={{
    fontFamily: FONT_DISPLAY,
    fontSize: 56,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    margin: 0,
    color: C.ink,
    lineHeight: 1,
    ...style,
  }}>
    {children}
  </h2>
);

const Btn = ({ children, color = C.red, onClick, href, download, style }) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      download={download}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 20px',
        border: `1.5px solid ${color}`,
        color,
        background: 'transparent',
        fontFamily: FONT_MONO,
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.2s ease',
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${color}18`;
        e.currentTarget.style.boxShadow = `0 0 20px ${color}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </Tag>
  );
};

// ---------- background effects ----------

const GridBg = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(46,123,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(46,123,255,0.06) 1px, transparent 1px)
    `,
    backgroundSize: '56px 56px',
    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
    pointerEvents: 'none',
  }} />
);

const Rain = ({ intensity = 1 }) => {
  if (intensity === 0) return null;
  const count = intensity === 2 ? 60 : 30;
  const lines = React.useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 3,
      dur: 0.8 + Math.random() * 1.6,
      h: 30 + Math.random() * 60,
      c: Math.random() > 0.7 ? C.red : C.blue,
    }))
  , [count]);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', opacity: intensity === 2 ? 0.5 : 0.3 }}>
      {lines.map((l, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: -100,
          left: `${l.left}%`,
          width: 1,
          height: l.h,
          background: `linear-gradient(to bottom, transparent, ${l.c})`,
          animation: `hifi-rain ${l.dur}s linear ${l.delay}s infinite`,
        }} />
      ))}
    </div>
  );
};

// ---------- nav ----------

const Nav = ({ active }) => {
  const items = ['home', 'about', 'stack', 'projects', 'experience', 'certifications', 'blog', 'contact'];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isMobile } = useViewport();

  React.useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 64,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(7,7,10,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.line}`,
      }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 10, height: 10, background: C.red, boxShadow: `0 0 10px ${C.red}`, animation: 'hifi-pulse 1.8s ease-in-out infinite' }} />
          <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.ink, letterSpacing: '0.2em' }}>
            A.RAFFAY<span style={{ color: C.red }}>_</span>
          </span>
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {items.map(x => (
              <a key={x} href={`#${x}`} style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                letterSpacing: '0.15em',
                color: active === x ? C.red : C.inkDim,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = C.ink}
              onMouseLeave={(e) => e.currentTarget.style.color = active === x ? C.red : C.inkDim}
              >
                {x}
              </a>
            ))}
            <Btn color={C.blue} href="assets/RESUME_RAFFAY.pdf" download style={{ padding: '8px 14px', fontSize: 11 }}>
              Resume ↓
            </Btn>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'transparent',
              border: `1px solid ${menuOpen ? C.red : C.line}`,
              color: menuOpen ? C.red : C.inkDim,
              width: 40, height: 36,
              cursor: 'pointer',
              fontFamily: FONT_MONO,
              fontSize: 16,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(7,7,10,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${C.line}`,
          padding: '8px 24px 24px',
        }}>
          {items.map(x => (
            <a key={x} href={`#${x}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: FONT_MONO,
                fontSize: 13,
                letterSpacing: '0.2em',
                color: active === x ? C.red : C.inkDim,
                textDecoration: 'none',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: `1px solid ${C.line}`,
                transition: 'color 0.2s',
              }}
            >
              <span style={{ color: C.red }}>›</span>{x}
            </a>
          ))}
          <a
            href="assets/RESUME_RAFFAY.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 16,
              padding: '10px 18px',
              border: `1.5px solid ${C.blue}`,
              color: C.blue,
              fontFamily: FONT_MONO,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Resume ↓
          </a>
        </div>
      )}
    </>
  );
};

// ---------- hero ----------

const Hero = ({ intensity }) => {
  const [typed, setTyped] = React.useState('');
  const { isMobile } = useViewport();
  const fullText = '> building web apps and neural nets from 8th-semester computer science.';
  React.useEffect(() => {
    if (intensity === 0) { setTyped(fullText); return; }
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [intensity]);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: C.bg }}>
      <img src="assets/hero.jpg" alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', opacity: 0.65,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(180deg, rgba(7,7,10,0.4) 0%, rgba(7,7,10,0.6) 50%, rgba(7,7,10,0.95) 100%),
          linear-gradient(90deg, rgba(7,7,10,0.85) 0%, rgba(7,7,10,0.2) 55%, rgba(7,7,10,0) 100%)
        `,
      }} />
      <Rain intensity={intensity} />
      {intensity === 2 && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 3px)',
          pointerEvents: 'none',
        }} />
      )}

      <div style={{
        position: 'relative',
        maxWidth: 1280,
        margin: '0 auto',
        padding: isMobile ? '120px 20px 60px' : '180px 40px 80px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
        gap: 40,
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: C.red, boxShadow: `0 0 6px ${C.red}` }} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.red, letterSpacing: '0.3em' }}>
              SYS.INIT :: 2026 · NIGHT_CITY
            </span>
          </div>

          <h1 style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(72px, 11vw, 148px)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            margin: 0,
            color: C.ink,
          }}>
            <span style={{ display: 'block', color: C.ink, textShadow: `0 0 30px rgba(46,123,255,0.4)` }}>
              ABDUL
            </span>
            <span style={{
              display: 'block',
              color: C.red,
              textShadow: `0 0 30px rgba(255,46,62,0.5), 2px 0 ${C.blue}`,
              position: 'relative',
            }}>
              RAFFAY<span style={{ color: C.blue }}>.</span>
            </span>
          </h1>

          <div style={{
            fontFamily: FONT_MONO,
            fontSize: 15,
            color: C.inkDim,
            marginTop: 32,
            minHeight: 50,
            maxWidth: 620,
          }}>
            {typed}
            <span style={{
              display: 'inline-block',
              width: 8, height: 16,
              background: C.red,
              marginLeft: 4,
              verticalAlign: 'middle',
              animation: intensity > 0 ? 'hifi-blink 1s steps(2) infinite' : 'none',
            }} />
          </div>

          <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
            <Btn href="#projects" color={C.red}>◉ View Projects</Btn>
            <Btn href="#contact" color={C.blue}>Initiate Contact ↗</Btn>
          </div>

          <div style={{ display: 'flex', gap: 40, marginTop: 64, flexWrap: 'wrap' }}>
            {[
              { k: 'SEMESTER', v: '08 / 08' },
              { k: 'STACK', v: 'MERN + ML/DL' },
              { k: 'STATUS', v: 'open.to.work', hl: true },
            ].map(s => (
              <div key={s.k}>
                <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.inkMute, letterSpacing: '0.25em' }}>
                  {s.k}
                </div>
                <div style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 22,
                  fontWeight: 600,
                  color: s.hl ? C.red : C.ink,
                  marginTop: 4,
                  letterSpacing: '0.02em',
                }}>
                  {s.hl && <span style={{ display: 'inline-block', width: 8, height: 8, background: C.red, borderRadius: 4, marginRight: 8, boxShadow: `0 0 8px ${C.red}`, animation: 'hifi-pulse 1.5s ease-in-out infinite' }} />}
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator (right column is left empty for image dominance) */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 10,
        }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.inkMute, letterSpacing: '0.25em', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            SCROLL_DOWN
          </div>
          <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom, transparent, ${C.red})`, animation: 'hifi-scroll-line 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  HIFI_C: C, HIFI_FONTS: { FONT_DISPLAY, FONT_BODY, FONT_MONO },
  Brackets, NeonBracket, SectionLabel, H2, Btn, GridBg, Rain, Nav, Hero, useViewport,
});
