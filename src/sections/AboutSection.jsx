import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';

const transitionSteps = [
  { icon: '⚡', label: 'ELECTRONICS', desc: 'Where the journey began — circuits, components, and physical systems.' },
  { icon: '🔧', label: 'HARDWARE', desc: 'Hands-on experience with real components, prototyping and troubleshooting.' },
  { icon: '🧠', label: 'SYSTEMS THINKING', desc: 'Understanding how physical layers communicate upward into software.' },
  { icon: '💻', label: 'PROGRAMMING', desc: 'Java and JavaScript — first programs, first logic structures.' },
  { icon: '🏗️', label: 'SOFTWARE ENG.', desc: 'APIs, databases, authentication — building structured software systems.' },
  { icon: '🌐', label: 'FULL-STACK DEV', desc: 'React, Node.js, Express, PostgreSQL — complete application architecture.' },
  { icon: '🤖', label: 'AI-POWERED APPS', desc: 'Integrating AI APIs to build intelligent, practical applications.' },
];

function TransitionArrow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0.25rem 0' }}>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
        <path d="M7 0 L7 16 M1 10 L7 16 L13 10" stroke="rgba(0,255,159,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="dot-grid" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          num="01"
          label="ABOUT"
          title="From Circuits to Software Systems"
          subtitle="An engineer's transition from physical hardware to full-stack development."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'flex-start',
          }}
          className="about-grid gap-8 md:gap-12"
        >
          {/* Left: Story */}
          <div>
            <FadeIn delay={0.1}>
              <div
                style={{
                  borderLeft: '2px solid var(--color-accent)',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.85,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  I started my technical journey with a{' '}
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    Diploma in Electronics &amp; Telecommunications
                  </span>
                  . Before writing a single line of code, I was learning how physical systems work — tracing circuits on a breadboard, understanding how electrons flow through components, and building a mental model of how hardware communicates.
                </p>
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.85,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  That foundation — understanding systems from the{' '}
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    physical layer upward
                  </span>{' '}
                  — turned out to be one of the most valuable things I could bring into software engineering.
                  When I transitioned into{' '}
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    Information Technology
                  </span>
                  , I didn't just see web apps — I saw the same architecture problems I'd already encountered in hardware, now expressed in code.
                </p>
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.85,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Today I'm a{' '}
                  <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                    3rd-year B.E. Information Technology student
                  </span>{' '}
                  building full-stack web applications, REST APIs, authenticated backend systems, and AI-powered platforms.
                  I think about how systems connect, how data flows, and how to build things that actually work.
                </p>
              </div>
            </FadeIn>

            {/* Quick facts */}
            <FadeIn delay={0.2}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: '1rem',
                }}
              >
                {[
                  { label: 'BACKGROUND', value: 'Electronics → IT' },
                  { label: 'YEAR', value: 'B.E. — 3rd Year' },
                  { label: 'LOCATION', value: 'Mumbai, India' },
                  { label: 'FOCUS', value: 'Full-Stack + AI' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: '3px',
                      background: 'rgba(17,17,22,0.5)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.14em',
                        color: 'var(--color-text-tertiary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Transition Diagram */}
          <FadeIn delay={0.15} direction="right">
            <div
              className="p-5 md:p-6"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                background: 'rgba(7,7,9,0.5)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '1.25rem',
                }}
              >
                ENGINEERING EVOLUTION
              </p>
              <div>
                {transitionSteps.map((step, i) => (
                  <div key={step.label}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.6rem 0.75rem',
                        borderRadius: '2px',
                        transition: 'background 0.2s',
                        cursor: 'default',
                      }}
                      whileHover={{ background: 'rgba(0,255,159,0.04)' }}
                    >
                      <span style={{ fontSize: '0.9rem', flexShrink: 0, marginTop: '1px' }}>{step.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            color: 'var(--color-accent)',
                            marginBottom: '0.2rem',
                          }}
                        >
                          {step.label}
                        </p>
                        <p
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--color-text-tertiary)',
                            lineHeight: 1.5,
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                    {i < transitionSteps.length - 1 && <TransitionArrow />}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
