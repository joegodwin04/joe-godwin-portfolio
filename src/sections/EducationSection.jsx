import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          num="06"
          label="EDUCATION"
          title="Academic Background"
          subtitle="Two programmes — one in hardware, one in software — that together define my engineering perspective."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {education.map((edu, i) => {
            const isActive = edu.id === 'be-it';
            const accentColor = isActive ? 'var(--color-accent)' : '#f97316';
            const accentRgb = isActive ? '0,255,159' : '249,115,22';

            return (
              <FadeIn key={edu.id} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -3 }}
                  style={{
                    border: `1px solid rgba(${accentRgb},0.25)`,
                    borderRadius: '4px',
                    background: 'rgba(17,17,22,0.7)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      height: '2px',
                      background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                    }}
                    aria-hidden="true"
                  />

                  <div style={{ padding: '1.5rem' }}>
                    {/* Status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      {isActive && (
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: accentColor,
                            animation: 'pulse-accent 2s infinite',
                          }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.14em',
                          color: accentColor,
                        }}
                      >
                        {edu.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                        fontWeight: 800,
                        color: 'var(--color-text-primary)',
                        marginBottom: '0.5rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {edu.institution}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '1rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--color-text-tertiary)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        📍 {edu.location}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--color-text-tertiary)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        📅 {edu.period}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-tertiary)',
                        lineHeight: 1.7,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.14em',
                          color: 'var(--color-text-tertiary)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        HIGHLIGHTS
                      </p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        {edu.highlights.map((h) => (
                          <li
                            key={h}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '0.8rem',
                              color: 'var(--color-text-secondary)',
                            }}
                          >
                            <span style={{ color: accentColor, flexShrink: 0, fontSize: '0.6rem', marginTop: '0.3rem' }}>▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Note */}
        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              background: 'rgba(17,17,22,0.4)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              NOTE — INSTITUTION NAMES AND DETAILS ARE PLACEHOLDERS. UPDATE portfolioData.js WITH ACTUAL INFORMATION.
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
