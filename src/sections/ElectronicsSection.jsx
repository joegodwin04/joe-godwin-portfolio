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
      className="p-5 md:p-8 mb-8 md:mb-12"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        background: 'rgba(7,7,9,0.5)',
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
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
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

            {/* Image Gallery */}
            {project.images && (
              <div className="flex flex-col gap-4 mb-4">
                {project.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="w-full overflow-hidden rounded-md border border-[#00ff9f]/20 bg-[#00ff9f]/5 cursor-pointer relative group shadow-lg"
                    onClick={() => window.open(img, '_blank')}
                    title="Click to view full size"
                  >
                    <img
                      src={img}
                      alt={`${project.name} Photo ${idx + 1}`}
                      className="w-full h-48 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ display: 'block' }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1.5 rounded pointer-events-none border border-[#00ff9f]/30">
                      <span className="text-[#00ff9f] text-[0.6rem] font-mono tracking-widest">VIEW</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
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

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 items-start">
          
          {/* Solar Grass Cutter — Featured Project */}
          <FadeIn delay={0.2} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
                className="px-5 py-6 md:px-7 md:py-6"
                style={{
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
                        marginBottom: '1.25rem',
                      }}
                    >
                      {electronicsProject.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                        marginBottom: '2rem',
                      }}
                    >
                      {electronicsProject.description}
                    </p>

                    {/* Image Gallery */}
                    {electronicsProject.images && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {/* Primary Image */}
                        <div 
                          className="w-full overflow-hidden rounded-md border border-[#f97316]/20 bg-[#f97316]/5 cursor-pointer relative group shadow-lg aspect-[4/3]"
                          onClick={() => window.open(electronicsProject.images[0], '_blank')}
                          title="Click to view full size"
                        >
                          <img
                            src={electronicsProject.images[0]}
                            alt={`${electronicsProject.name} Primary View`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ display: 'block' }}
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-2 rounded pointer-events-none border border-[#f97316]/30">
                            <span className="text-[#f97316] text-xs font-mono tracking-widest">VIEW</span>
                          </div>
                        </div>

                        {/* Secondary Image */}
                        {electronicsProject.images.length > 1 && (
                          <div 
                            className="w-full overflow-hidden rounded-md border border-[#f97316]/20 bg-[#f97316]/5 cursor-pointer relative group shadow-lg aspect-[4/3]"
                            onClick={() => window.open(electronicsProject.images[1], '_blank')}
                            title="Click to view full size"
                          >
                            <img
                              src={electronicsProject.images[1]}
                              alt={`${electronicsProject.name} Secondary View`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ display: 'block' }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-2 rounded pointer-events-none border border-[#f97316]/30">
                              <span className="text-[#f97316] text-xs font-mono tracking-widest">VIEW</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Case study sections */}
              <div style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
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
          </FadeIn>

          {/* Academic Electronics Projects */}
          <FadeIn delay={0.25} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <VoltageDetectorCard project={academicElectronicsProject} />
            </div>
          </FadeIn>
        </div>

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
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '0.8rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.08em',
                        color: '#f97316',
                        padding: '0.15rem 0.45rem',
                        border: '1px solid rgba(249,115,22,0.25)',
                        borderRadius: '2px',
                        background: 'rgba(249,115,22,0.05)',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {item.type.toUpperCase()}
                    </span>
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </h4>
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
