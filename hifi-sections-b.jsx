// Hi-fi sections: Experience, Blog, Contact/Footer

const { HIFI_C: C2, HIFI_FONTS: F2 } = window;
const { SectionLabel: SL2, H2: HH2B, Btn: BB2, Brackets: BR2, NeonBracket: NB2 } = window;

// ---------- Experience / Education ----------
const TIMELINE = [
  {
    period: '2022 — 2026', status: 'CURRENT',
    role: 'B.S. Computer Science', org: 'University Program',
    desc: 'Final-semester BSCS candidate. Focus: full-stack engineering, deep learning, applied ML systems.',
    highlights: ['Deep Learning', 'Algorithms', 'Systems', 'Web Engineering'],
    color: 'red',
  },
  {
    period: '2025 — Present',
    role: 'Independent MERN Developer', org: 'Freelance / Projects',
    desc: 'Shipping production-grade MERN applications — auth, payments, dashboards, realtime features.',
    highlights: ['React', 'Node.js', 'MongoDB', 'JWT'],
    color: 'blue',
  },
  {
    period: '2024 — Present',
    role: 'ML / DL Research Practice', org: 'Self-directed',
    desc: 'Training CNNs and NLP models; reading papers; open-source experiments with PyTorch and TensorFlow.',
    highlights: ['PyTorch', 'TensorFlow', 'NLP', 'CV'],
    color: 'red',
  },
];

const Experience = () => {
  const { isMobile } = window.useViewport();
  return (
  <section id="experience" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: C2.bgAlt, overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 80% 20%, rgba(255,46,62,0.07), transparent 60%)` }} />
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <div style={{ marginBottom: 56 }}>
        <SL2 num="/ 04" label="timeline" />
        <HH2B>Experience <span style={{ color: C2.blue }}>&amp;</span> education.</HH2B>
      </div>

      <div style={{ position: 'relative', paddingLeft: 40 }}>
        {/* spine */}
        <div style={{
          position: 'absolute', left: 12, top: 8, bottom: 8,
          width: 1,
          background: `linear-gradient(to bottom, ${C2.red}, ${C2.blue})`,
          boxShadow: `0 0 8px ${C2.red}66`,
        }} />

        {TIMELINE.map((t, i) => {
          const c = t.color === 'red' ? C2.red : C2.blue;
          return (
            <div key={i} style={{ position: 'relative', paddingBottom: 48 }}>
              {/* node */}
              <div style={{
                position: 'absolute', left: -34, top: 6,
                width: 16, height: 16,
                border: `2px solid ${c}`,
                background: C2.bgAlt,
                boxShadow: `0 0 14px ${c}88`,
                transform: 'rotate(45deg)',
              }} />
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '200px 1fr',
                gap: isMobile ? 16 : 40,
                alignItems: 'start',
              }}>
                <div>
                  <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: c, letterSpacing: '0.2em' }}>
                    {t.period}
                  </div>
                  {t.status && (
                    <div style={{
                      display: 'inline-block',
                      marginTop: 10,
                      fontFamily: F2.FONT_MONO,
                      fontSize: 9,
                      color: c,
                      border: `1px solid ${c}`,
                      padding: '2px 8px',
                      letterSpacing: '0.2em',
                    }}>
                      ● {t.status}
                    </div>
                  )}
                </div>
                <div style={{ background: C2.surface, border: `1px solid ${C2.line}`, padding: '24px 28px', position: 'relative' }}>
                  <NB2 pos="tl" color={c} size={12} />
                  <NB2 pos="br" color={c} size={12} />
                  <div style={{ fontFamily: F2.FONT_DISPLAY, fontSize: 26, fontWeight: 700, color: C2.ink, letterSpacing: '-0.01em' }}>
                    {t.role}
                  </div>
                  <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: c, marginTop: 4, letterSpacing: '0.15em' }}>
                    @ {t.org}
                  </div>
                  <p style={{ fontFamily: F2.FONT_BODY, fontSize: 14, color: C2.inkDim, lineHeight: 1.6, marginTop: 12, marginBottom: 16 }}>
                    {t.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.highlights.map(h => (
                      <span key={h} style={{
                        fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkDim,
                        border: `1px solid ${C2.line}`, padding: '3px 8px', letterSpacing: '0.08em',
                      }}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

// ---------- Certifications ----------
const CERTIFICATIONS = [
  {
    id: 'CERT_01',
    title: 'Artificial Intelligence Intern',
    org: 'Kaizen Hive (SMC-Private) Ltd.',
    duration: '3 MONTHS',
    issued: '01 Jul 2026',
    certId: '2ca02ad2db6a655440275760',
    verifyUrl: 'http://program.kaizenhive.com/verify-certificate?id=2ca02ad2db6a655440275760',
    image: 'assets/kaizenhive-certificate.png',
    file: 'assets/KAIZENHIVE_AI_CERTIFICATE.pdf',
    color: 'red',
  },
];

const CertCard = ({ c }) => {
  const [hover, setHover] = React.useState(false);
  const accent = c.color === 'red' ? C2.red : C2.blue;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: C2.surface,
        border: `1px solid ${hover ? accent : C2.line}`,
        transition: 'all 0.25s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? `0 10px 40px ${accent}22, 0 0 0 1px ${accent}` : 'none',
        overflow: 'hidden',
      }}
    >
      <NB2 pos="tl" color={accent} size={14} />
      <NB2 pos="br" color={accent} size={14} />

      <div style={{
        padding: '14px 20px',
        borderBottom: `1px solid ${C2.line}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: accent, letterSpacing: '0.2em' }}>
          ◉ {c.id}
        </span>
        <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute, letterSpacing: '0.15em' }}>
          {c.duration}
        </span>
      </div>

      <a href={c.file} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <img
          src={c.image}
          alt={`${c.title} certificate — ${c.org}`}
          style={{ display: 'block', width: '100%', height: 220, objectFit: 'cover', objectPosition: 'top', borderBottom: `1px solid ${C2.line}` }}
        />
      </a>

      <div style={{ padding: '22px 22px 24px' }}>
        <div style={{ fontFamily: F2.FONT_DISPLAY, fontSize: 24, fontWeight: 700, color: C2.ink, letterSpacing: '-0.01em' }}>
          {c.title}
        </div>
        <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: accent, marginTop: 4, letterSpacing: '0.1em' }}>
          @ {c.org}
        </div>
        <div style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute, marginTop: 10, letterSpacing: '0.05em', wordBreak: 'break-all' }}>
          ID: {c.certId}
        </div>

        <div style={{
          marginTop: 18,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 14,
          borderTop: `1px dashed ${C2.line}`,
          gap: 12,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute }}>
            issued · {c.issued}
          </span>
          <a
            href={c.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: F2.FONT_MONO,
              fontSize: 10,
              color: accent,
              textDecoration: 'none',
              border: `1px solid ${accent}`,
              padding: '4px 10px',
              letterSpacing: '0.1em',
              transition: 'all 0.25s',
              background: hover ? `${accent}15` : 'transparent',
            }}
          >
            VERIFY ↗
          </a>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const { isMobile, isTablet } = window.useViewport();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
  <section id="certifications" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: C2.bg, overflow: 'hidden' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <div style={{ marginBottom: 56 }}>
        <SL2 num="/ 05" label="credentials" />
        <HH2B>Certifications <span style={{ color: C2.red }}>&amp;</span> training.</HH2B>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
        {CERTIFICATIONS.map(c => <CertCard key={c.id} c={c} />)}
      </div>
    </div>
  </section>
  );
};

// ---------- Blog ----------
const POSTS = [
  { date: '2026·03·01', title: 'Training on-device: a notebook', read: '8 min', tag: 'ML' },
  { date: '2026·02·14', title: 'Why my MERN stack grew teeth', read: '6 min', tag: 'WEB' },
  { date: '2026·01·22', title: 'Rain, JWT, and stateful sockets', read: '5 min', tag: 'BACKEND' },
];

const Blog = () => {
  const { isMobile, isTablet } = window.useViewport();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
  <section id="blog" style={{ position: 'relative', padding: isMobile ? '80px 20px' : '140px 40px', background: C2.bg, overflow: 'hidden' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <SL2 num="/ 06" label="transmissions" />
          <HH2B>Recent <span style={{ color: C2.red }}>writing</span>.</HH2B>
        </div>
        <span style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.inkDim, letterSpacing: '0.15em' }}>
          more.soon →
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
        {POSTS.map((p, i) => {
          const c = i % 2 === 0 ? C2.red : C2.blue;
          return (
            <a key={i} href="#" style={{
              display: 'block',
              background: C2.surface,
              border: `1px solid ${C2.line}`,
              padding: '28px 24px',
              textDecoration: 'none',
              position: 'relative',
              transition: 'all 0.25s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = c; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C2.line; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <NB2 pos="tl" color={c} size={12} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: c, letterSpacing: '0.2em' }}>
                  / {p.tag}
                </span>
                <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute }}>{p.date}</span>
              </div>
              <div style={{ fontFamily: F2.FONT_DISPLAY, fontSize: 22, fontWeight: 600, color: C2.ink, letterSpacing: '-0.005em', lineHeight: 1.2 }}>
                {p.title}
              </div>
              <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: `1px dashed ${C2.line}` }}>
                <span style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute }}>{p.read} read</span>
                <span style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: c, letterSpacing: '0.15em' }}>read →</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
  );
};

// ---------- Contact / Footer ----------
const WEB3FORMS_ACCESS_KEY = 'c0803edc-22bf-4acd-a3b7-5180b8869fb5';

const contactInputStyle = {
  width: '100%',
  background: '#0c0c12',
  border: `1px solid ${C2.line}`,
  color: C2.ink,
  fontFamily: F2.FONT_BODY,
  fontSize: 14,
  padding: '12px 14px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const ContactForm = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFocus = (e) => {
    e.target.style.borderColor = C2.red;
    e.target.style.boxShadow = `0 0 0 2px ${C2.red}22`;
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = C2.line;
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong — try again or email me directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error — try again or email me directly.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        maxWidth: 520, margin: '44px auto 0', padding: '32px 28px',
        background: C2.surface, border: `1px solid ${C2.red}`, position: 'relative', textAlign: 'left',
      }}>
        <NB2 pos="tl" color={C2.red} size={14} />
        <NB2 pos="br" color={C2.red} size={14} />
        <div style={{ fontFamily: F2.FONT_MONO, fontSize: 12, color: C2.red, letterSpacing: '0.2em', marginBottom: 8 }}>
          ● SIGNAL_RECEIVED
        </div>
        <p style={{ fontFamily: F2.FONT_BODY, fontSize: 15, color: C2.ink, lineHeight: 1.6, margin: 0 }}>
          Thanks — your message is in my inbox. I usually reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: 20, background: 'transparent', border: `1px solid ${C2.line}`, color: C2.inkDim,
            fontFamily: F2.FONT_MONO, fontSize: 11, letterSpacing: '0.15em', padding: '8px 14px', cursor: 'pointer',
          }}
        >
          send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 520, margin: '44px auto 0', padding: '32px 28px',
        background: C2.surface, border: `1px solid ${C2.line}`, position: 'relative', textAlign: 'left',
      }}
    >
      <NB2 pos="tl" color={C2.blue} size={14} />
      <NB2 pos="br" color={C2.blue} size={14} />

      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkDim, letterSpacing: '0.2em', marginBottom: 8 }}>
          NAME
        </label>
        <input
          type="text" name="name" required value={form.name} onChange={handleChange}
          onFocus={handleFocus} onBlur={handleBlur}
          placeholder="Your name" style={contactInputStyle}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkDim, letterSpacing: '0.2em', marginBottom: 8 }}>
          EMAIL
        </label>
        <input
          type="email" name="email" required value={form.email} onChange={handleChange}
          onFocus={handleFocus} onBlur={handleBlur}
          placeholder="you@example.com" style={contactInputStyle}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkDim, letterSpacing: '0.2em', marginBottom: 8 }}>
          MESSAGE
        </label>
        <textarea
          name="message" required rows={5} value={form.message} onChange={handleChange}
          onFocus={handleFocus} onBlur={handleBlur}
          placeholder="What are you building?" style={{ ...contactInputStyle, resize: 'vertical', fontFamily: F2.FONT_BODY }}
        />
      </div>

      {status === 'error' && (
        <div style={{ fontFamily: F2.FONT_MONO, fontSize: 12, color: C2.red, marginBottom: 16 }}>
          ⚠ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '14px 20px', border: `1.5px solid ${C2.red}`, color: C2.red, background: 'transparent',
          fontFamily: F2.FONT_MONO, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.6 : 1,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => { if (status !== 'sending') { e.currentTarget.style.background = `${C2.red}18`; e.currentTarget.style.boxShadow = `0 0 20px ${C2.red}55`; } }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {status === 'sending' ? 'sending…' : '◉ Send Message'}
      </button>
    </form>
  );
};

const ContactCTA = () => (
  <section id="contact" style={{ position: 'relative', padding: '160px 40px 100px', background: C2.bgAlt, overflow: 'hidden' }}>
    <GridBg />
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at center, rgba(255,46,62,0.1), transparent 60%)`,
    }} />
    <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
      <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.red, letterSpacing: '0.3em', marginBottom: 20 }}>
        / 07 · INITIATE.CONTACT
      </div>
      <h2 style={{
        fontFamily: F2.FONT_DISPLAY,
        fontSize: 'clamp(64px, 9vw, 120px)',
        fontWeight: 700,
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        margin: 0,
        color: C2.ink,
      }}>
        Let's <span style={{ color: C2.red, textShadow: `0 0 30px ${C2.red}66` }}>build</span>
        <br />
        <span style={{ color: C2.blue, textShadow: `0 0 30px ${C2.blue}66` }}>something</span> loud.
      </h2>
      <p style={{ fontFamily: F2.FONT_BODY, fontSize: 17, color: C2.inkDim, marginTop: 28, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
        Open to internship offers, collaborations, and late-night MERN builds. Send a signal — I usually reply within 24 hours.
      </p>

      <ContactForm />

      <div style={{ display: 'flex', gap: 14, marginTop: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
        <BB2 href="https://www.linkedin.com/in/muhammad-abdul-raffay-31bb90385" color={C2.blue}>LinkedIn ↗</BB2>
      </div>
      <p style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.inkMute, marginTop: 20, letterSpacing: '0.1em' }}>
        prefer email? <a href="mailto:m.a.raffay.official@gmail.com" style={{ color: C2.inkDim }}>m.a.raffay.official@gmail.com</a>
      </p>
    </div>
  </section>
);

const Footer = () => {
  const { isMobile, isTablet } = window.useViewport();
  const footerCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr';
  return (
  <footer style={{ background: '#050507', borderTop: `1px solid ${C2.line}`, position: 'relative' }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg, ${C2.red}, ${C2.blue})`,
      boxShadow: `0 0 10px ${C2.red}88`,
    }} />
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '48px 20px 24px' : '64px 40px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: footerCols, gap: isMobile ? 32 : 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ display: 'inline-block', width: 10, height: 10, background: C2.red, boxShadow: `0 0 10px ${C2.red}` }} />
            <span style={{ fontFamily: F2.FONT_MONO, fontSize: 12, color: C2.ink, letterSpacing: '0.2em' }}>
              A.RAFFAY<span style={{ color: C2.red }}>_</span>
            </span>
          </div>
          <p style={{ fontFamily: F2.FONT_BODY, fontSize: 13, color: C2.inkDim, lineHeight: 1.6, maxWidth: 280, margin: 0 }}>
            8th-semester BSCS student routing between full-stack engineering and deep learning.
            Open to internships and collaborations.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, background: C2.red, borderRadius: 4, boxShadow: `0 0 8px ${C2.red}`, animation: 'hifi-pulse 1.5s ease-in-out infinite' }} />
            <span style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.ink, letterSpacing: '0.15em' }}>OPEN TO WORK</span>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.blue, letterSpacing: '0.25em', marginBottom: 16 }}>/ CONTACT</div>
          {[
            { href: 'mailto:m.a.raffay.official@gmail.com', label: 'm.a.raffay.official@gmail.com' },
            { href: 'https://www.linkedin.com/in/muhammad-abdul-raffay-31bb90385', label: 'linkedin.com/in/muhammad-abdul-raffay' },
            { href: 'https://github.com/maraffayofficial-arch', label: 'github.com/maraffayofficial-arch' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              display: 'block',
              fontFamily: F2.FONT_MONO, fontSize: 12, color: C2.ink,
              textDecoration: 'none', marginBottom: 10, letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = C2.red}
              onMouseLeave={(e) => e.currentTarget.style.color = C2.ink}
            >
              ▸ {l.label}
            </a>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.blue, letterSpacing: '0.25em', marginBottom: 16 }}>/ NAVIGATE</div>
          {['home', 'about', 'stack', 'projects', 'experience', 'certifications', 'blog'].map(l => (
            <a key={l} href={`#${l}`} style={{
              display: 'block',
              fontFamily: F2.FONT_MONO, fontSize: 12, color: C2.inkDim,
              textDecoration: 'none', marginBottom: 10, letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = C2.red}
              onMouseLeave={(e) => e.currentTarget.style.color = C2.inkDim}
            >
              › {l}
            </a>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.blue, letterSpacing: '0.25em', marginBottom: 16 }}>/ TELEMETRY</div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.ink, marginBottom: 8 }}>
            <span style={{ color: C2.inkMute }}>location: </span>PK / remote
          </div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.ink, marginBottom: 8 }}>
            <span style={{ color: C2.inkMute }}>stack: </span>MERN · ML/DL
          </div>
          <div style={{ fontFamily: F2.FONT_MONO, fontSize: 11, color: C2.ink, marginBottom: 16 }}>
            <span style={{ color: C2.inkMute }}>avail: </span>Q2 2026
          </div>
          <a href="RESUME_RAFFAY.pdf" download style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 12px', border: `1.5px solid ${C2.red}`, color: C2.red,
            fontFamily: F2.FONT_MONO, fontSize: 10, letterSpacing: '0.15em',
            textDecoration: 'none',
          }}>
            DOWNLOAD RESUME ↓
          </a>
        </div>
      </div>

      <div style={{
        marginTop: 56,
        paddingTop: 20,
        borderTop: `1px solid ${C2.line}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: F2.FONT_MONO, fontSize: 10, color: C2.inkMute, letterSpacing: '0.15em',
      }}>
        <span>© 2026 ABDUL.RAFFAY · BUILT WITH MERN + CAFFEINE</span>
        <span>v2.6.0 // LAST_PUSH: 2D AGO</span>
        <span style={{ color: C2.red }}>[ SIGNAL_STRONG • ONLINE ]</span>
      </div>
    </div>
  </footer>
  );
};

Object.assign(window, { Experience, Certifications, CertCard, Blog, ContactCTA, Footer });
