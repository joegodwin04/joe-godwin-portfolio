import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SectionWrapper, SectionHeader, FadeIn } from '../components/SectionWrapper';
import { personal } from '../data/portfolioData';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Mailto fallback — replace with email service (Resend, Formspree, etc.)
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank');

    // Simulate brief "sending" state
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
    }, 800);
  };

  const contactLinks = [
    {
      id: 'email-link',
      icon: <Mail size={18} />,
      label: 'EMAIL',
      value: personal.email,
      href: `mailto:${personal.email}`,
      desc: 'Best way to reach me',
    },
    {
      id: 'github-link',
      icon: <GithubIcon size={18} />,
      label: 'GITHUB',
      value: 'github.com/joegodwin',
      href: personal.github,
      desc: 'Projects and code',
    },
    {
      id: 'linkedin-link',
      icon: <LinkedinIcon size={18} />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/joegodwin',
      href: personal.linkedin,
      desc: 'Professional profile',
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      className="dot-grid"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="container-max">
        <SectionHeader
          num="07"
          label="CONTACT"
          title="Let's Build Something."
          center={true}
        />

        <FadeIn delay={0.1}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 3.5rem',
              lineHeight: 1.75,
            }}
          >
            Open to software development internships, full-stack opportunities, collaborative projects, hackathons and interesting technical problems.
          </p>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Contact Links */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.1rem 1.25rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '3px',
                    background: 'rgba(17,17,22,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,159,0.35)';
                    e.currentTarget.style.background = 'rgba(0,255,159,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'rgba(17,17,22,0.6)';
                  }}
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {link.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.14em',
                        color: 'var(--color-text-tertiary)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-text-primary)',
                        fontWeight: 500,
                      }}
                    >
                      {link.value}
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      {link.desc}
                    </p>
                  </div>
                  <span style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }} aria-hidden="true">→</span>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                background: 'rgba(17,17,22,0.6)',
                padding: '1.75rem',
              }}
              noValidate
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '1.5rem',
                }}
              >
                SEND A MESSAGE — Opens your email client
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      background: 'rgba(7,7,9,0.6)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,159,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      background: 'rgba(7,7,9,0.6)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,159,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-text-tertiary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      background: 'rgba(7,7,9,0.6)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '120px',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,159,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  id="contact-submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', gap: '0.5rem' }}
                  disabled={status === 'sending'}
                  aria-label="Send message"
                >
                  {status === 'sending' ? (
                    <>OPENING EMAIL...</>
                  ) : status === 'sent' ? (
                    <>
                      <CheckCircle size={14} />
                      EMAIL OPENED
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={13} />
                    </>
                  )}
                </motion.button>

                {status === 'sent' && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-accent)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    ✓ Your email client should have opened with the message pre-filled.
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (min-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--color-text-tertiary);
          opacity: 1;
        }
      `}</style>
    </SectionWrapper>
  );
}
