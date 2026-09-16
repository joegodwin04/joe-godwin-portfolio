import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { skills } from '../data/portfolioData';

const categoryColors = {
  languages: '#00ff9f',
  frontend: '#3b82f6',
  backend: '#8b5cf6',
  databases: '#f59e0b',
  tools: '#6b7280',
  engineering: '#10b981',
  ai: '#ec4899',
  electronics: '#f97316',
};

const categoryIcons = {
  languages: '{ }',
  frontend: '◈',
  backend: '⬡',
  databases: '⊞',
  tools: '⚙',
  engineering: '⚒',
  ai: '◎',
  electronics: '⚡',
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <SectionWrapper id="skills" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          num="02"
          label="SKILLS"
          title="Technical Capabilities"
          subtitle="The tools, languages and disciplines I work with — from frontend interfaces to backend systems and hardware foundations."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1rem',
          }}
        >
          {Object.entries(skills).map(([key, category], i) => {
            const color = categoryColors[key] || '#00ff9f';
            const icon = categoryIcons[key] || '●';
            const isActive = activeCategory === key;

            return (
              <FadeIn key={key} delay={i * 0.06}>
                <motion.div
                  onClick={() => setActiveCategory(isActive ? null : key)}
                  whileHover={{ y: -2 }}
                  style={{
                    padding: '1.25rem',
                    border: `1px solid ${isActive ? color : 'var(--color-border)'}`,
                    borderRadius: '3px',
                    background: isActive
                      ? `rgba(${hexToRgb(color)}, 0.05)`
                      : 'rgba(17,17,22,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(4px)',
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${category.label} skills category`}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCategory(isActive ? null : key)}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.9rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        color: color,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        color: 'var(--color-text-primary)',
                        flex: 1,
                      }}
                    >
                      {category.label.toUpperCase()}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--color-text-tertiary)',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '2px',
                      }}
                    >
                      {category.items.length}
                    </span>
                  </div>

                  {/* Items */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                    }}
                  >
                    {category.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.04 }}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.04em',
                          padding: '0.2rem 0.55rem',
                          background: isActive
                            ? `rgba(${hexToRgb(color)}, 0.12)`
                            : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${isActive ? `rgba(${hexToRgb(color)},0.25)` : 'rgba(255,255,255,0.06)'}`,
                          borderRadius: '2px',
                          color: isActive ? color : 'var(--color-text-secondary)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.4}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              color: 'var(--color-text-tertiary)',
              textAlign: 'center',
              marginTop: '2.5rem',
              lineHeight: 1.7,
            }}
          >
            CLICK ANY CATEGORY TO HIGHLIGHT // SKILLS REFLECT ACTUAL PROJECT EXPERIENCE
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
