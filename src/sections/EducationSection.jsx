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

        <div className="education-grid">
          {education.map((edu, i) => {
            const isActive = edu.id === 'be-it';
            const accentColor = isActive ? 'var(--color-accent)' : '#f97316';
            const accentRgb = isActive ? '0,255,159' : '249,115,22';

            return (
              <FadeIn key={edu.id} delay={i * 0.12} style={{ height: '100%' }}>
                <motion.div
                  whileHover={{ y: -3 }}
                  style={{
                    border: `1px solid rgba(${accentRgb},0.25)`,
                    borderRadius: '4px',
                    background: 'rgba(17,17,22,0.7)',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
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
                      {edu.percentage && (
                        <>
                          <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.6rem' }}>|</span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.6rem',
                              letterSpacing: '0.14em',
                              color: 'var(--color-text-secondary)',
                            }}
                          >
                            {edu.percentage.toUpperCase()}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Degree + Logo row */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Degree */}
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                            fontWeight: 800,
                            color: 'var(--color-text-primary)',
                            marginBottom: '0.5rem',
                            lineHeight: 1.2,
                            textWrap: 'balance',
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
                      </div>

                      {/* Institution Logo */}
                      {edu.logo && (
                        <div
                          style={{
                            flexShrink: 0,
                            width: '60px',
                            height: '60px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.06)',
                            border: `1px solid rgba(${accentRgb},0.18)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            overflow: 'hidden',
                          }}
                          aria-hidden="true"
                        >
                          <img
                            src={edu.logo}
                            alt={edu.logoAlt}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                        </div>
                      )}
                    </div>

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
                        marginBottom: edu.highlights && edu.highlights.length > 0 ? '1.25rem' : '0',
                      }}
                    >
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div style={{ marginTop: 'auto' }}>
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
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>


      </div>
    </SectionWrapper>
  );
}
