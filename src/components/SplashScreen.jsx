'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SplashScreen() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transformations for scale, vertical movement, and opacity
  const scale = useTransform(scrollYProgress, [0, 1, 5], [1, 1.5, 0.1]); // Scale shrinks after two scrolls
  const y = useTransform(scrollYProgress, [0, 1, 2], [0, 0, -200]); // Moves down as you scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]); // Opacity decreases over scroll

  return (
    <motion.div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex items-center justify-center"
      style={{ scale, y, opacity }}
    >
      <motion.img
        src="/gta.png"
        alt="Hero Image"
        className="w-full h-full object-cover"
        style={{ scale }}
      />
    </motion.div>
  );
}
