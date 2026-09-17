import { useEffect, useRef } from 'react';

/**
 * VantaBackground
 *
 * THREE.js (0.121.1) and vanta.net.min.js (0.5.24) are loaded as synchronous
 * <script> tags in index.html, BEFORE this React module evaluates.
 *
 * This guarantees window.THREE is set when vanta.net.min.js evaluates its
 * module-level `let p = window.THREE` capture.
 *
 * window.VANTA.NET is available synchronously here because of the script tags.
 */
const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    const el = vantaRef.current;
    if (!el) return;

    // Guard: don't double-initialise (handles React Strict Mode double-invoke)
    if (vantaInstance.current) return;

    const NET = window?.VANTA?.NET;

    if (typeof NET !== 'function') {
      console.warn('[VantaBackground] window.VANTA.NET is not a function. Check /vanta.net.min.js loaded.');
      return;
    }

    try {
      vantaInstance.current = NET({
        el,
        THREE: window.THREE,
        color: 0x00FF66,
        backgroundColor: 0x05070A,
        backgroundAlpha: 1,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
      });
      console.log('[VantaBackground] NET initialized:', vantaInstance.current);
    } catch (err) {
      console.error('[VantaBackground] NET() init error:', err);
    }

    return () => {
      if (vantaInstance.current) {
        try {
          vantaInstance.current.destroy();
        } catch (e) {
          console.error('[VantaBackground] destroy error:', e);
        }
        vantaInstance.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={vantaRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#05070a',
      }}
    />
  );
};

export default VantaBackground;
