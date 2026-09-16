import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
        padding: '2.5rem 0',
      }}
      role="contentinfo"
    >
      <div className="container-max">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {personal.name.toUpperCase()}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              {personal.positioning}
            </p>
          </div>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {[
              { href: personal.github, icon: <GithubIcon size={16} />, label: 'GitHub' },
              { href: personal.linkedin, icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: 'Email' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,255,159,0.4)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-tertiary)';
                }}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-tertiary)',
            }}
          >
            © {year} {personal.name} — Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
