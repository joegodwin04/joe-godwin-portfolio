import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { electronicsProject, academicElectronicsProject, electronicsExperience } from '../data/portfolioData';

// ── PCB Background SVG ─────────────────────────────────────────
function PCBPattern() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.04,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pcb" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 L20 40 L20 20 L60 20 L60 40 L80 40" stroke="#00ff9f" strokeWidth="0.8" fill="none" />
          <path d="M40 0 L40 20" stroke="#00ff9f" strokeWidth="0.8" fill="none" />
          <path d="M40 60 L40 80" stroke="#00ff9f" strokeWidth="0.8" fill="none" />
          <circle cx="20" cy="40" r="2.5" fill="none" stroke="#00ff9f" strokeWidth="0.8" />
          <circle cx="60" cy="20" r="2.5" fill="none" stroke="#00ff9f" strokeWidth="0.8" />
          <circle cx="40" cy="20" r="1.5" fill="#00ff9f" />
          <rect x="35" y="35" width="10" height="10" rx="1" fill="none" stroke="#00ff9f" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pcb)" />
    </svg>
  );
}

// ── Hardware to Software Flow ──────────────────────────────────
function HardwareSoftwareFlow() {
  const hardware = [
    'ELECTRONICS FOUNDATION',
    'HANDS-ON PROTOTYPING',
    'ENGINEERING PROJECTS',
  ];
  const software = [
    'INFORMATION TECHNOLOGY',
    'SOFTWARE ENGINEERING',
    'FULL-STACK DEV',
    'AI SYSTEMS',
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '2rem',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        background: 'rgba(7,7,9,0.5)',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <PCBPattern />

      {/* Hardware column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {hardware.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(249,115,22,0.25)',
              borderRadius: '2px',
              background: 'rgba(249,115,22,0.05)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: '#f97316',
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Arrow */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(249,115,22,0.5), rgba(0,255,159,0.5))',
          }}
        />
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}
        >
          →
        </motion.div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            color: 'var(--color-text-tertiary)',
          }}
        >
          TRANSITION
        </span>
      </div>

      {/* Software column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {software.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            style={{
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(0,255,159,0.25)',
              borderRadius: '2px',
              background: 'rgba(0,255,159,0.05)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Non-Contact Voltage Detector Card & Case Study ─────────────
function VoltageDetectorCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${isOpen ? 'rgba(0,255,159,0.45)' : 'rgba(0,255,159,0.2)'}`,
        borderRadius: '4px',
        background: 'rgba(17,17,22,0.65)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: isOpen ? '0 0 24px rgba(0,255,159,0.06)' : 'none',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ff9f, transparent)',
          opacity: isOpen ? 0.9 : 0.4,
        }}
        aria-hidden="true"
      />

      {/* Card Header / Summary Area */}
      <div
        style={{
          padding: '1.5rem 1.75rem',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: '260px' }}>
            {/* Badges & Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-accent)',
                  padding: '0.15rem 0.5rem',
                  border: '1px solid rgba(0,255,159,0.3)',
                  borderRadius: '2px',
                  background: 'rgba(0,255,159,0.06)',
                }}
              >
                {project.category.toUpperCase()}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-secondary)',
                  padding: '0.15rem 0.45rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '2px',
                }}
              >
                YEAR: {project.year}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00ff9f',
                    display: 'inline-block',
                    boxShadow: '0 0 6px #00ff9f',
                  }}
                />
                ACADEMIC PROTOTYPE
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '0.45rem',
                letterSpacing: '-0.01em',
              }}
            >
              {project.name}
            </h3>

            {/* Tagline / Description */}
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                maxWidth: '620px',
                marginBottom: '1rem',
              }}
            >
              {project.description}
            </p>

            {/* Skills Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.06em',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(0,255,159,0.18)',
                    background: 'rgba(0,255,159,0.03)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Bar / Toggle hint */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
                marginTop: '0.25rem',
              }}
            >
              <span>{isOpen ? 'HIDE CASE STUDY' : 'VIEW CASE STUDY & DETAILS'}</span>
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </div>

          {/* Compact Sensor / Voltage SVG Graphic */}
          <div
            style={{
              width: '90px',
              height: '80px',
              border: '1px solid rgba(0,255,159,0.2)',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,255,159,0.03)',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              {/* Sensing Probe */}
              <line x1="28" y1="36" x2="28" y2="48" stroke="#00ff9f" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="28" cy="48" r="2.5" fill="#00ff9f" />
              {/* Detector Tip Node */}
              <circle cx="28" cy="34" r="3" stroke="#00ff9f" strokeWidth="1.2" fill="rgba(0,255,159,0.2)" />
              {/* Radiating AC Field / Non-Contact Waves */}
              <path
                d="M18 26 C22 22, 34 22, 38 26"
                stroke="#00ff9f"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="2 2"
                opacity="0.9"
              />
              <path
                d="M13 20 C19 14, 37 14, 43 20"
                stroke="#00ff9f"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="2 2"
                opacity="0.6"
              />
              <path
                d="M8 14 C16 6, 40 6, 48 14"
                stroke="#00ff9f"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="2 2"
                opacity="0.35"
              />
              {/* AC symbol */}
              <path
                d="M24 10 C25 8, 27 8, 28 10 C29 12, 31 12, 32 10"
                stroke="#00ff9f"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Case-Study Panel (Expandable on click) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                borderTop: '1px solid rgba(0,255,159,0.18)',
                padding: '1.75rem',
                background: 'rgba(7,7,9,0.55)',
              }}
            >
              {/* Header inside case study */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-accent)',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    ACADEMIC CASE STUDY // DIPLOMA PROTOTYPE
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    PROJECT: <strong style={{ color: 'var(--color-text-primary)' }}>{project.name}</strong> · YEAR: <strong style={{ color: 'var(--color-text-primary)' }}>{project.year}</strong> · CATEGORY: <strong style={{ color: 'var(--color-text-primary)' }}>{project.category}</strong>
                  </div>
                </div>
              </div>

              {/* Case Study Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                {/* Overview */}
                <div
                  style={{
                    padding: '1.25rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '3px',
                    background: 'rgba(17,17,22,0.4)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-accent)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    OVERVIEW
                  </h4>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.overview}
                  </p>
                </div>

                {/* Skills Demonstrated */}
                <div
                  style={{
                    padding: '1.25rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '3px',
                    background: 'rgba(17,17,22,0.4)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-accent)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    SKILLS DEMONSTRATED
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                    }}
                  >
                    {project.skills.map((skill) => (
                      <li
                        key={skill}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.82rem',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Outcome */}
                <div
                  style={{
                    padding: '1.25rem',
                    border: '1px solid rgba(0,255,159,0.25)',
                    borderRadius: '3px',
                    background: 'rgba(0,255,159,0.03)',
                    gridColumn: '1 / -1',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-accent)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    PROJECT OUTCOME
                  </h4>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    padding: '0.4rem 0.8rem',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  CLOSE CASE STUDY <ChevronUp size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ElectronicsSection() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <SectionWrapper
      id="electronics"
      className="electronics-bg"
      style={{ background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="container-max">
        <SectionHeader
          num="04"
          label="ELECTRONICS"
          title="Electronics & Hardware Foundation"
          subtitle="Before building software systems, I learned how physical systems work."
        />

        {/* Hardware → Software Transition */}
        <FadeIn delay={0.1}>
          <HardwareSoftwareFlow />
        </FadeIn>

        {/* Electronics intro */}
        <FadeIn delay={0.15}>
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid rgba(249,115,22,0.15)',
              borderRadius: '3px',
              background: 'rgba(249,115,22,0.03)',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                maxWidth: '780px',
              }}
            >
              My Diploma in Electronics &amp; Telecommunications provided practical, hands-on exposure to physical engineering fundamentals —{' '}
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                circuit design, component soldering, breadboard prototyping, sensor testing
              </span>{' '}
              and hardware troubleshooting across multiple academic projects. Building physical prototypes like the{' '}
              <span style={{ color: '#00ff9f', fontWeight: 500 }}>Non-Contact Voltage Detector (2023)</span> and the{' '}
              <span style={{ color: '#f97316', fontWeight: 500 }}>Solar Grass Cutter Machine (2024)</span> established a disciplined understanding of systems at every layer — from discrete components to integrated architectures — that now directly informs my full-stack software development.
            </p>
          </div>
        </FadeIn>

        {/* Solar Grass Cutter — Featured Project */}
        <FadeIn delay={0.2}>
          <div style={{ marginBottom: '3rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#f97316', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
                01 // FEATURED PROJECT — FINAL-YEAR CAPSTONE (2024)
              </span>
              <div style={{ height: '1px', flex: 1, background: 'var(--color-border)' }} aria-hidden="true" />
            </div>

            <div
              style={{
                border: '1px solid rgba(249,115,22,0.25)',
                borderRadius: '4px',
                background: 'rgba(17,17,22,0.7)',
                overflow: 'hidden',
              }}
            >
              {/* Project Header */}
              <div
                style={{
                  padding: '1.75rem',
                  borderBottom: '1px solid var(--color-border)',
                  background: 'rgba(249,115,22,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          color: '#f97316',
                          padding: '0.15rem 0.5rem',
                          border: '1px solid rgba(249,115,22,0.3)',
                          borderRadius: '2px',
                          background: 'rgba(249,115,22,0.06)',
                        }}
                      >
                        {electronicsProject.category.toUpperCase()}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          color: 'var(--color-text-secondary)',
                          padding: '0.15rem 0.45rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: '2px',
                        }}
                      >
                        YEAR: {electronicsProject.year || '2024'}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        {electronicsProject.domain}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        fontWeight: 800,
                        color: 'var(--color-text-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {electronicsProject.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                        maxWidth: '560px',
                      }}
                    >
                      {electronicsProject.description}
                    </p>
                  </div>

                  {/* Solar panel icon */}
                  <div
                    style={{
                      width: '100px',
                      height: '80px',
                      border: '1px solid rgba(249,115,22,0.2)',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      {/* Solar panel */}
                      <rect x="5" y="5" width="40" height="28" rx="2" stroke="#f97316" strokeWidth="1" strokeOpacity="0.6" />
                      <line x1="5" y1="14.3" x2="45" y2="14.3" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.4" />
                      <line x1="5" y1="23.6" x2="45" y2="23.6" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.4" />
                      <line x1="18.3" y1="5" x2="18.3" y2="33" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.4" />
                      <line x1="31.6" y1="5" x2="31.6" y2="33" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.4" />
                      {/* Motor */}
                      <circle cx="25" cy="43" r="5" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" />
                      <circle cx="25" cy="43" r="2" fill="#f97316" fillOpacity="0.4" />
                      {/* Wire */}
                      <line x1="25" y1="33" x2="25" y2="38" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Case study sections */}
              <div style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {electronicsProject.sections.map((s, i) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => setActiveSection(activeSection === s.id ? null : s.id)}
                      style={{
                        padding: '1.1rem',
                        border: `1px solid ${activeSection === s.id ? 'rgba(249,115,22,0.4)' : 'var(--color-border)'}`,
                        borderRadius: '3px',
                        background: activeSection === s.id ? 'rgba(249,115,22,0.04)' : 'rgba(7,7,9,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={activeSection === s.id}
                      onKeyDown={(e) => e.key === 'Enter' && setActiveSection(activeSection === s.id ? null : s.id)}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.58rem',
                            color: '#f97316',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {s.index}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            color: activeSection === s.id ? '#f97316' : 'var(--color-text-primary)',
                            transition: 'color 0.2s',
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ height: activeSection === s.id ? 'auto' : 0, opacity: activeSection === s.id ? 1 : 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontSize: '0.82rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.65,
                            paddingTop: '0.5rem',
                          }}
                        >
                          {s.content}
                        </p>
                      </motion.div>
                      {activeSection !== s.id && (
                        <p
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--color-text-tertiary)',
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '0.06em',
                          }}
                        >
                          CLICK TO EXPAND →
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Academic Electronics Projects */}
        <FadeIn delay={0.25}>
          <div style={{ marginBottom: '3rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
                02 // ACADEMIC ELECTRONICS PROJECTS (2023)
              </span>
              <div style={{ height: '1px', flex: 1, background: 'var(--color-border)' }} aria-hidden="true" />
            </div>

            <VoltageDetectorCard project={academicElectronicsProject} />
          </div>
        </FadeIn>

        {/* Electronics Workbench */}
        <FadeIn delay={0.3}>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
                HARDWARE & ELECTRONICS EXPERIENCE
              </span>
              <div style={{ height: '1px', flex: 1, background: 'var(--color-border)' }} aria-hidden="true" />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {electronicsExperience.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    padding: '1.1rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '3px',
                    background: 'rgba(17,17,22,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h4
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 500,
                        color: 'var(--color-text-primary)',
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.08em',
                        color: '#f97316',
                        padding: '0.1rem 0.4rem',
                        border: '1px solid rgba(249,115,22,0.25)',
                        borderRadius: '2px',
                        background: 'rgba(249,115,22,0.05)',
                        flexShrink: 0,
                      }}
                    >
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-tertiary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
