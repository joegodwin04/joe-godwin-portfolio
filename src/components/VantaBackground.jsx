import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let vantaEffectInstance = null;
    let isMounted = true;

    const initVanta = async () => {
      try {
        if (!vantaEffect && vantaRef.current) {
          // 1. MUST set THREE globally BEFORE Vanta evaluates
          if (!window.THREE) {
            window.THREE = THREE;
          }

          // 2. Dynamically import Vanta so it sees window.THREE during evaluation
          const vantaModule = await import('vanta/dist/vanta.net.min');
          const NET = vantaModule.default || window?.VANTA?.NET;
          
          if (typeof NET === 'function' && isMounted) {
            vantaEffectInstance = NET({
              el: vantaRef.current,
              THREE: THREE,
              color: 0x00ff66,
              backgroundColor: 0x05070a,
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
              scaleMobile: 1
            });
            setVantaEffect(vantaEffectInstance);
          }
        }
      } catch (error) {
        console.error("Vanta runtime error:", error);
      }
    };

    initVanta();

    return () => {
      isMounted = false;
      if (vantaEffectInstance) {
        try {
          vantaEffectInstance.destroy();
        } catch (e) {
          console.error("Error destroying Vanta:", e);
        }
      } else if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (e) {
          console.error("Error destroying Vanta:", e);
        }
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="vanta-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#05070a' // Fallback if Vanta fails
      }}
    />
  );
};

export default VantaBackground;
