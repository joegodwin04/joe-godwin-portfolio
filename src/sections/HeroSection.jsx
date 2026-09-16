import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, FileText } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { personal } from '../data/portfolioData';

// ── System Architecture Visual ─────────────────────────────────
function SystemVisual() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const nodes = [
    { id: 'user', label: 'USER', x: 0.5, y: 0.08, accent: true },
    { id: 'frontend', label: 'FRONTEND', x: 0.5, y: 0.28 },
    { id: 'api', label: 'API LAYER', x: 0.5, y: 0.48 },
    { id: 'backend', label: 'BACKEND', x: 0.28, y: 0.68 },
    { id: 'ai', label: 'AI ENGINE', x: 0.72, y: 0.68 },
    { id: 'db', label: 'DATABASE', x: 0.5, y: 0.88 },
  ];

  const edges = [
    ['user', 'frontend'],
    ['frontend', 'api'],
    ['api', 'backend'],
    ['api', 'ai'],
    ['backend', 'db'],
    ['ai', 'db'],
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const pos = {};
      nodes.forEach((n) => { pos[n.id] = { x: n.x * W, y: n.y * H }; });

      // Draw edges with animated signal
      edges.forEach(([a, b]) => {
        const pa = pos[a], pb = pos[b];
        const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad.addColorStop(0, 'rgba(0,255,159,0.06)');
        grad.addColorStop(0.5, 'rgba(0,255,159,0.14)');
        grad.addColorStop(1, 'rgba(0,255,159,0.06)');
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Signal dot
        const phase = ((t * 0.5 + edges.indexOf([a, b]) * 40) % 100) / 100;
        const sx = pa.x + (pb.x - pa.x) * ((Math.sin(t * 0.02 + edges.findIndex((e) => e[0] === a && e[1] === b)) + 1) / 2);
        const sy = pa.y + (pb.y - pa.y) * ((Math.sin(t * 0.02 + edges.findIndex((e) => e[0] === a && e[1] === b)) + 1) / 2);
        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,159,0.7)';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((n) => {
        const { x, y } = pos[n.id];
        const isAccent = n.accent;
        const r = isAccent ? 5 : 4;

        // Glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, isAccent ? 24 : 18);
        glow.addColorStop(0, isAccent ? 'rgba(0,255,159,0.2)' : 'rgba(0,255,159,0.08)');
        glow.addColorStop(1, 'rgba(0,255,159,0)');
        ctx.beginPath();
        ctx.arc(x, y, isAccent ? 24 : 18, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = isAccent ? '#00ff9f' : 'rgba(0,255,159,0.5)';
        ctx.fill();

        // Label
        ctx.fillStyle = isAccent ? 'rgba(240,240,240,0.9)' : 'rgba(240,240,240,0.45)';
        ctx.font = `500 9px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.letterSpacing = '0.08em';
        ctx.fillText(n.label, x, y + 18);
      });

      t++;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
}

// ── Hero Section ───────────────────────────────────────────────
export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'FULL-STACK DEVELOPER';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 65);
    return () => clearInterval(timer);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background grid */}
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top-right gradient accent */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(0,255,159,0.04) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Content */}
          <div style={{ maxWidth: '700px' }}>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                border: '1px solid rgba(0,255,159,0.25)',
                borderRadius: '2px',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  animation: 'pulse-accent 2s infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-accent)',
                }}
              >
                {personal.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 0.92,
                marginBottom: '1.5rem',
                color: 'var(--color-text-primary)',
              }}
            >
              {personal.firstName}
              <br />
              <span style={{ color: 'var(--color-text-secondary)' }}>{personal.lastName}</span>
            </motion.h1>

            {/* Animated title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ marginBottom: '0.75rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: 'var(--color-accent)',
                }}
              >
                {displayText}
                <span className="cursor-blink" style={{ color: 'var(--color-accent)' }}>_</span>
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--color-text-tertiary)',
                marginBottom: '1.5rem',
              }}
            >
              {personal.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                maxWidth: '520px',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              I build practical software systems, AI-powered applications, and real-world technical projects — grounded in a foundation of electronics and hardware engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button onClick={scrollToWork} className="btn btn-primary">
                VIEW MY WORK
                <ArrowDown size={14} />
              </button>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                VIEW RESUME
                <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '2.5rem',
                alignItems: 'center',
              }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  transition: 'color 0.2s',
                }}
                className="hover:text-accent"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
                aria-label="GitHub profile"
              >
                <GithubIcon size={14} />
                GITHUB
              </a>
              <span style={{ color: 'var(--color-border)', fontSize: '0.6rem' }}>|</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.08em',
                }}
              >
                📍 {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right: Real Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'none',
              position: 'relative',
              alignSelf: 'center',
            }}
            className="hero-visual"
          >
            {/* Outer technical ring — large */}
            <svg
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'visible',
              }}
              viewBox="0 0 400 500"
            >
              {/* Outer dashed orbit */}
              <ellipse cx="200" cy="250" rx="195" ry="245" stroke="rgba(0,255,159,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
              {/* Inner ring */}
              <ellipse cx="200" cy="250" rx="160" ry="200" stroke="rgba(0,255,159,0.07)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
              {/* Corner node dots */}
              <circle cx="200" cy="5" r="3" fill="rgba(0,255,159,0.5)" />
              <circle cx="395" cy="250" r="3" fill="rgba(0,255,159,0.35)" />
              <circle cx="200" cy="495" r="3" fill="rgba(0,255,159,0.35)" />
              <circle cx="5" cy="250" r="3" fill="rgba(0,255,159,0.35)" />
              {/* Short tick marks */}
              <line x1="192" y1="5" x2="208" y2="5" stroke="rgba(0,255,159,0.5)" strokeWidth="1" />
              <line x1="395" y1="242" x2="395" y2="258" stroke="rgba(0,255,159,0.4)" strokeWidth="1" />
              <line x1="5" y1="242" x2="5" y2="258" stroke="rgba(0,255,159,0.4)" strokeWidth="1" />
              {/* Technical labels */}
              <text x="210" y="2" fontFamily="monospace" fontSize="8" fill="rgba(0,255,159,0.5)" letterSpacing="2">JOE.GODWIN</text>
              <text x="210" y="498" fontFamily="monospace" fontSize="8" fill="rgba(0,255,159,0.4)" letterSpacing="2">DEV_STACK</text>
              {/* Corner bracket lines — top left */}
              <line x1="20" y1="20" x2="50" y2="20" stroke="rgba(0,255,159,0.35)" strokeWidth="1" />
              <line x1="20" y1="20" x2="20" y2="50" stroke="rgba(0,255,159,0.35)" strokeWidth="1" />
              {/* Corner bracket lines — top right */}
              <line x1="380" y1="20" x2="350" y2="20" stroke="rgba(0,255,159,0.35)" strokeWidth="1" />
              <line x1="380" y1="20" x2="380" y2="50" stroke="rgba(0,255,159,0.35)" strokeWidth="1" />
              {/* Corner bracket lines — bottom left */}
              <line x1="20" y1="480" x2="50" y2="480" stroke="rgba(0,255,159,0.3)" strokeWidth="1" />
              <line x1="20" y1="480" x2="20" y2="450" stroke="rgba(0,255,159,0.3)" strokeWidth="1" />
              {/* Corner bracket lines — bottom right */}
              <line x1="380" y1="480" x2="350" y2="480" stroke="rgba(0,255,159,0.3)" strokeWidth="1" />
              <line x1="380" y1="480" x2="380" y2="450" stroke="rgba(0,255,159,0.3)" strokeWidth="1" />
              {/* Grid dots top row */}
              <circle cx="100" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
              <circle cx="130" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
              <circle cx="160" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
              <circle cx="240" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
              <circle cx="270" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
              <circle cx="300" cy="30" r="1.5" fill="rgba(0,255,159,0.25)" />
            </svg>

            {/* Radial glow behind photo */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-20%',
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,159,0.07) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Photo container — transparent portrait, no box border */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '360px',
              }}
            >
              {/* Bottom fade — makes the portrait dissolve gently into the dark page */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '28%',
                  background: 'linear-gradient(to top, var(--color-bg, #07070f) 0%, transparent 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* Actual transparent photograph */}
              <img
                src="/images/joe-godwin-profile-transparent.png"
                alt="Joe Godwin — Full-Stack Developer"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'center top',
                  filter:
                    'drop-shadow(0 0 18px rgba(0,255,159,0.18)) ' +
                    'drop-shadow(0 0 6px rgba(0,255,159,0.10)) ' +
                    'drop-shadow(0 24px 48px rgba(0,0,0,0.7))',
                  position: 'relative',
                  zIndex: 1,
                }}
              />

              {/* HUD: bottom status bar — floats below/over photo */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '8%',
                  right: '8%',
                  zIndex: 3,
                  padding: '0.5rem 0.85rem',
                  background: 'rgba(7,7,9,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0,255,159,0.14)',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.12em',
                    color: 'rgba(0,255,159,0.7)',
                  }}
                >
                  JOE.GODWIN // DEVELOPER
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.52rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(0,255,159,0.55)',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#00ff9f',
                      boxShadow: '0 0 5px #00ff9f',
                      display: 'inline-block',
                      animation: 'pulse-accent 2s infinite',
                    }}
                  />
                  ACTIVE
                </span>
              </div>

              {/* HUD: top-left label */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '6%',
                  left: '8%',
                  zIndex: 3,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.14em',
                  color: 'rgba(0,255,159,0.55)',
                  background: 'rgba(7,7,9,0.5)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '2px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0,255,159,0.1)',
                }}
              >
                PROFILE // v1.0
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: 'var(--color-text-tertiary)',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} style={{ color: 'var(--color-text-tertiary)' }} />
        </motion.div>
      </motion.div>

      {/* Bottom label */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '1.5rem',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: 'var(--color-text-tertiary)',
          }}
        >
          00 // HOME
        </span>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 400px !important;
            align-items: center !important;
          }
          .hero-visual {
            display: flex !important;
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 899px) {
          .hero-visual {
            display: flex !important;
            justify-content: center !important;
            margin-top: 1.5rem !important;
          }
          .hero-visual > div {
            max-width: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-visual > div {
            max-width: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
