'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

export default function ScrollScene() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: typeof window !== 'undefined' ? undefined : null,
  });

  // Zoom-out effect for GTA background
  const gtaScale = useTransform(scrollYProgress, [0, 0.3], [2, 0.3]);
  const gtaZ = useTransform(scrollYProgress, [0, 0.3], [600, 0]);
  const gtaTransform = useMotionTemplate`translateZ(${gtaZ}px) scale(${gtaScale})`;

  // GTA logo slide and scale
  const gtalogoX = useTransform(scrollYProgress, [0.1, 0.4], [300, 0]);
  const gtalogoScale = useTransform(scrollYProgress, [0.1, 0.85], [6, 1]);
  const gtalogoTransform = useMotionTemplate`translateX(${gtalogoX}px) scale(${gtalogoScale})`;

  const gtalogoMaskOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
  const gtalogoFillOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const gtalogoFilter = useTransform(scrollYProgress, [0.95, 1], ['none', 'brightness(1000%)']);
  const gtaRawOpacity = useTransform(scrollYProgress, [0, 0.36], [1, 0]);
  const lineScale = useTransform(scrollYProgress, [0.4, 1], [-20, 1]);

  return (
    <div ref={containerRef} style={{ height: '300vh', backgroundColor: '#000' }}>
      {/* Sticky Container */}
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          perspective: 1000,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
        }}
      >
        {/* GTA Background */}
        <motion.img
          src="/gta.png"
          alt="GTA Background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: gtaTransform,
            transformStyle: 'preserve-3d',
            opacity: gtaRawOpacity,
            zIndex: 1,
          }}
          draggable={false}
        />

        {/* Masked Logo */}
        <motion.div
          style={{
            position: 'absolute',
            width: '20vw',
            height: '20vw',
            top: '50%',
            right: '2vw',
            transform: 'translateY(-50%)',
            overflow: 'hidden',
            zIndex: 10,
            maskImage: 'url(/gtalogo.png)',
            WebkitMaskImage: 'url(/gtalogo.png)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            opacity: gtalogoMaskOpacity,
            transform: gtalogoTransform,
          }}
        >
          <motion.img
            src="/gta.png"
            alt="GTA Background Masked"
            style={{
              width: '100%',
              height: '100%',
              transform: gtaTransform,
            }}
            draggable={false}
          />
        </motion.div>

        {/* Solid gtalogo */}
        <motion.img
          src="/gtalogo.png"
          alt="gtalogo"
          style={{
            position: 'absolute',
            width: '20vw',
            height: '20vw',
            top: '50%',
            right: '2vw',
            transform: 'translateY(-50%)',
            zIndex: 11,
            opacity: gtalogoFillOpacity,
            filter: gtalogoFilter,
            transform: gtalogoTransform,
          }}
          draggable={false}
        />

        {/* Bottom Line */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            height: '4px',
            width: '100%',
            background: 'linear-gradient(to right, #facc15, #f97316)',
            transformOrigin: 'left',
            scaleX: lineScale,
            zIndex: 10,
          }}
        />
      </motion.div>

      {/* Final Content */}
      <div style={{ height: '100vh', padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
        <h2 className="text-2xl font-bold">Scroll tamamlandı</h2>
        <p>gtalogo animasyonu başarıyla tamamlandı. Şimdi diğer içerikler görünüyor.</p>
      </div>
    </div>
  );
}
