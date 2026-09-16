import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import WorkSection from './sections/WorkSection';
import ElectronicsSection from './sections/ElectronicsSection';
import JourneySection from './sections/JourneySection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: 9999,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          padding: '0.5rem 1rem',
          background: 'var(--color-accent)',
          color: '#070709',
          textDecoration: 'none',
          borderRadius: '2px',
        }}
        onFocus={(e) => {
          e.target.style.left = '1rem';
          e.target.style.top = '1rem';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
          e.target.style.width = '1px';
          e.target.style.height = '1px';
        }}
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ElectronicsSection />
        <JourneySection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
