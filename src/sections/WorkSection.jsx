import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { projects } from '../data/portfolioData';

// ── Project Case Study Modal ───────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backdropFilter: 'blur(8px)',
        }}
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            width: '100%',
            maxWidth: '820px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: '1.5rem 1.75rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
              position: 'sticky',
              top: 0,
              background: 'var(--color-bg-secondary)',
              zIndex: 1,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: project.color,
                  }}
                >
                  {project.index} // {project.category.toUpperCase()}
                </span>
              </div>
              <h2
                id="modal-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                }}
              >
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                padding: '0.5rem',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close project details"
            >
              <X size={16} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body-padding">
            {/* Tagline */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
              className="modal-desc-padding"
            >
              {project.description}
            </p>

            {/* Case study sections */}
            <div className="modal-grid-1">
              {[
                { label: 'PROBLEM', content: project.problem },
                { label: 'SOLUTION', content: project.solution },
                { label: 'ARCHITECTURE', content: project.architecture },
              ].map((item) => (
                <div
                  key={item.label}
                  className="modal-item-padding"
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: '3px',
                    background: 'rgba(7,7,9,0.4)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.16em',
                      color: project.color,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.16em',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '0.75rem',
                }}
              >
                TECHNOLOGY STACK
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.16em',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '0.75rem',
                }}
              >
                KEY FEATURES
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <span style={{ color: project.color, marginTop: '0.25rem', flexShrink: 0 }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges + Outcome */}
            <div className="modal-grid-2">
              <div
                className="modal-item-padding"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '3px',
                  background: 'rgba(7,7,9,0.4)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.16em',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  CHALLENGES
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6,
                        paddingLeft: '0.75rem',
                        borderLeft: `1px solid rgba(${hexToRgb(project.color)},0.3)`,
                      }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="modal-item-padding"
                style={{
                  border: `1px solid rgba(${hexToRgb(project.color)},0.2)`,
                  borderRadius: '3px',
                  background: `rgba(${hexToRgb(project.color)},0.04)`,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.16em',
                    color: project.color,
                    marginBottom: '0.75rem',
                  }}
                >
                  OUTCOME
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <GithubIcon size={14} />
                  GITHUB REPO
                </a>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={14} />
                  LIVE DEMO
                </a>
              ) : (
                <span
                  className="btn btn-outline"
                  style={{ cursor: 'default', opacity: 0.5 }}
                >
                  LIVE DEMO — COMING SOON
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Project Card ───────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  const isFeatured = project.featured;

  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        onClick={() => onClick(project)}
        style={{
          border: `1px solid ${isFeatured ? `rgba(${hexToRgb(project.color)},0.3)` : 'var(--color-border)'}`,
          borderRadius: '4px',
          background: 'rgba(17,17,22,0.7)',
          padding: '1.5rem',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          gridColumn: isFeatured ? '1 / -1' : 'auto',
          transition: 'border-color 0.25s ease',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `rgba(${hexToRgb(project.color)},0.5)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isFeatured
            ? `rgba(${hexToRgb(project.color)},0.3)`
            : 'var(--color-border)';
        }}
        aria-label={`View ${project.name} project details`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      >
        {/* Featured glow */}
        {isFeatured && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
        )}

          <div className={isFeatured ? "project-card-layout featured" : "project-card-layout"}
               style={{ gap: '1rem', alignItems: 'flex-start' }}>
            <div>
            {/* Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                {project.index}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  padding: '0.15rem 0.5rem',
                  border: `1px solid rgba(${hexToRgb(project.color)},0.3)`,
                  borderRadius: '2px',
                  color: project.color,
                  background: `rgba(${hexToRgb(project.color)},0.06)`,
                }}
              >
                {project.label}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isFeatured ? 'clamp(1.4rem, 3vw, 2rem)' : '1.1rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.6rem',
              }}
            >
              {project.name}
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                maxWidth: isFeatured ? '600px' : 'none',
              }}
            >
              {project.tagline}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
              {project.technologies.slice(0, 5).map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
              {project.technologies.length > 5 && (
                <span className="tech-tag" style={{ opacity: 0.5 }}>
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: project.color,
              }}
            >
              VIEW CASE STUDY
              <ArrowRight size={13} />
            </div>
          </div>

          {/* Featured: placeholder visual */}
          {isFeatured && (
            <div
              style={{
                width: '140px',
                height: '100px',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                background: `rgba(${hexToRgb(project.color)},0.04)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="4" width="40" height="28" rx="2" stroke={project.color} strokeWidth="1" strokeOpacity="0.4" />
                <path d="M4 16 L44 16" stroke={project.color} strokeWidth="0.5" strokeOpacity="0.3" />
                <rect x="8" y="38" width="12" height="6" rx="1" fill={project.color} fillOpacity="0.2" />
                <rect x="24" y="38" width="12" height="6" rx="1" fill={project.color} fillOpacity="0.1" />
                <circle cx="10" cy="10" r="2" fill={project.color} fillOpacity="0.6" />
                <circle cx="16" cy="10" r="2" fill={project.color} fillOpacity="0.4" />
                <circle cx="22" cy="10" r="2" fill={project.color} fillOpacity="0.2" />
              </svg>
            </div>
          )}
        </div>
      </motion.article>
    </FadeIn>
  );
}

// ── Work Section ───────────────────────────────────────────────
export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionWrapper
        id="work"
        style={{ background: 'var(--color-bg-secondary)' }}
        className="dot-grid"
      >
        <div className="container-max">
          <SectionHeader
            num="03"
            label="WORK"
            title="Selected Projects"
            subtitle="Engineering case studies — full-stack applications, AI integrations, and real-world software systems."
          />

          <div className="work-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div
              style={{
                marginTop: '3rem',
                padding: '1rem 1.25rem',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                background: 'rgba(17,17,22,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>↗</span>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                CLICK ANY PROJECT TO VIEW FULL CASE STUDY — GITHUB LINKS AND LIVE DEMOS WHERE AVAILABLE
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
