import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navItems = [
  { num: '00', label: 'HOME', href: '#home' },
  { num: '01', label: 'ABOUT', href: '#about' },
  { num: '02', label: 'SKILLS', href: '#skills' },
  { num: '03', label: 'WORK', href: '#work' },
  { num: '04', label: 'ELECTRONICS', href: '#electronics' },
  { num: '05', label: 'JOURNEY', href: '#journey' },
  { num: '06', label: 'EDUCATION', href: '#education' },
  { num: '07', label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? 'rgba(7,7,9,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'all 0.35s ease',
        }}
        aria-label="Main navigation"
      >
        <div className="container-max">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              aria-label="Joe Godwin - Home"
            >
              <span style={{ color: 'var(--color-accent)' }}>JG</span>
              <span style={{ color: 'var(--color-border)', fontSize: '0.7rem' }}>|</span>
              <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>FULL-STACK DEV</span>
            </a>

            {/* Desktop Links */}
            <div
              style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
              className="hidden md:flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: activeSection === item.href.slice(1)
                        ? 'var(--color-accent)'
                        : 'var(--color-text-tertiary)',
                      letterSpacing: '0.1em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      color: activeSection === item.href.slice(1)
                        ? 'var(--color-text-primary)'
                        : 'var(--color-text-tertiary)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.label}
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '1px',
                        background: 'var(--color-accent)',
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                padding: '0.5rem',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '320px',
              background: 'var(--color-bg-secondary)',
              borderLeft: '1px solid var(--color-border)',
              zIndex: 49,
              display: 'flex',
              flexDirection: 'column',
              padding: '5rem 2rem 2rem',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-accent)',
                      minWidth: '24px',
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      color: activeSection === item.href.slice(1)
                        ? 'var(--color-text-primary)'
                        : 'var(--color-text-secondary)',
                    }}
                  >
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div style={{ marginTop: 'auto' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.1em',
                }}
              >
                {personal.name.toUpperCase()}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.08em',
                  marginTop: '0.25rem',
                }}
              >
                {personal.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 48,
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
