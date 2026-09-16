import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function SectionWrapper({ id, children, className = '', style = {} }) {
  return (
    <section
      id={id}
      className={`section-wrapper-padding ${className}`}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ num, label, title, subtitle, center = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="section-header-margin"
      style={{
        textAlign: center ? 'center' : 'left',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
          justifyContent: center ? 'center' : 'flex-start',
        }}
      >
        <span className="section-num">{num} //</span>
        <span className="section-label">{label}</span>
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--color-text-primary)',
          marginBottom: subtitle ? '1rem' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.7,
            margin: center ? '0 auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const variants = {
    up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };
  const v = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={inView ? v.animate : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
