import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { journey } from '../data/portfolioData';

const typeColors = {
  hardware: '#f97316',
  transition: '#a855f7',
  software: '#00ff9f',
};

const typeLabels = {
  hardware: 'HARDWARE',
  transition: 'TRANSITION',
  software: 'SOFTWARE',
};

export default function JourneySection() {
  return (
    <SectionWrapper
      id="journey"
      className="grid-bg"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="container-max">
        <SectionHeader
          num="05"
          label="JOURNEY"
          title="Engineering Journey"
          subtitle="The path from physical systems to software engineering — every step building on the last."
        />

        {/* Legend */}
        <FadeIn delay={0.05}>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 8px ${color}60`,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  {typeLabels[type]}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line — desktop */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, transparent, var(--color-border) 5%, var(--color-border) 95%, transparent)',
              transform: 'translateX(-50%)',
              display: 'none',
            }}
            className="timeline-center"
            aria-hidden="true"
          />

          {/* Left line — mobile */}
          <div
            style={{
              position: 'absolute',
              left: '1rem',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, transparent, var(--color-border) 5%, var(--color-border) 95%, transparent)',
            }}
            className="timeline-mobile"
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {journey.map((item, i) => {
              const color = typeColors[item.type];
              const isEven = i % 2 === 0;

              return (
                <FadeIn key={item.id} delay={i * 0.08} direction={isEven ? 'left' : 'right'}>
                  <div
                    className="journey-item"
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start',
                      paddingLeft: '2.5rem',
                      position: 'relative',
                    }}
                  >
                    {/* Node */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '0.625rem',
                        top: '1.1rem',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 12px ${color}60`,
                        border: '2px solid var(--color-bg-secondary)',
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        flex: 1,
                        padding: '1.1rem 1.25rem',
                        border: `1px solid ${color}25`,
                        borderRadius: '3px',
                        background: `rgba(${hexToRgb(color)},0.03)`,
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.4rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.12em',
                            color: color,
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.58rem',
                            letterSpacing: '0.12em',
                            color: 'var(--color-text-tertiary)',
                            padding: '0.1rem 0.4rem',
                            border: `1px solid ${color}25`,
                            borderRadius: '2px',
                          }}
                        >
                          {item.phase}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          marginBottom: '0.3rem',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--color-text-tertiary)',
                          lineHeight: 1.65,
                        }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Current status */}
        <FadeIn delay={0.5}>
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.25rem 1.5rem',
              border: '1px solid rgba(0,255,159,0.25)',
              borderRadius: '3px',
              background: 'rgba(0,255,159,0.04)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                animation: 'pulse-accent 2s infinite',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
              }}
            >
              CURRENT STATUS — B.E. INFORMATION TECHNOLOGY, 3RD YEAR · BUILDING PRODUCTION-READY PROJECTS · PREPARING FOR SOFTWARE DEVELOPMENT OPPORTUNITIES
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-center { display: block !important; }
          .timeline-mobile { display: none !important; }
          .journey-item {
            padding-left: 0 !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
