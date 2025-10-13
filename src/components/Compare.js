'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Compare() {
  const sliderRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0..100)

  const onDrag = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setSliderPos(Math.round((x / rect.width) * 100));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    onDrag(e.clientX);
    const onMove = (ev) => onDrag(ev.clientX);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    onDrag(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    onDrag(touch.clientX);
  };

  const atLeft = sliderPos <= 5;
  const atRight = sliderPos >= 95;

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background subtle shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Gepflegter Shop vs. Vernachlässigter Shop
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Der Unterschied in SEO, Conversion und User Experience – klar und sichtbar.
          </p>
        </div>

        {/* Interactive Two-Image Slider (one container) */}
        <div className="mb-10">
          <div
            ref={sliderRef}
            className="relative w-full max-w-5xl mx-auto h-72 md:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-sm select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Vorher/Nachher Vergleich: Vernachlässigt vs. Optimiert"
          >
            {/* Left side image (shows only left of the bar) */}
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img
                src="/KinetiqPhysioMed/Kinetiq2.jpg"
                alt="Vernachlässigter Shop"
                className="w-full h-full object-cover"
                style={{ transform: 'none', transition: 'none' }}
              />
              <div className="absolute inset-0 bg-gray-900/20" />
            </div>

            {/* Right side image (shows only right of the bar) */}
            <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - sliderPos}%` }}>
              <img
                src="/KinetiqPhysioMed/Kinetiq1.jpg"
                alt="Optimierter Shop"
                className="w-full h-full object-cover"
                style={{ transform: 'none', transition: 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10" />
            </div>

            {/* Divider Handle */}
            <div className="absolute top-0 bottom-0" style={{ left: `calc(${sliderPos}% - 12px)` }}>
              <div className="h-full w-0.5 bg-white/80 shadow" />
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-gray-700"
                aria-label="Vergleichsregler verschieben"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M8.53 4.47a.75.75 0 0 1 0 1.06L5.06 9h13.88l-3.47-3.47a.75.75 0 1 1 1.06-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 1 1-1.06-1.06L18.94 10.5H5.06l3.47 3.47a.75.75 0 1 1-1.06 1.06L2.72 10.28a.75.75 0 0 1 0-1.06l4.75-4.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Labels (only when fully to one side) */}
            {atRight && (
              <div className="absolute left-4 top-4">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-900/80 text-white backdrop-blur-sm">Basis</span>
              </div>
            )}
            {atLeft && (
              <div className="absolute right-4 top-4">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-700/80 text-white backdrop-blur-sm">Optimiert</span>
              </div>
            )}
          </div>
        </div>

        {/* Feature list below (appears when fully dragged; persists) */}
        {(atLeft || atRight) && (
          <div className={`max-w-5xl mx-auto transition-all duration-300 opacity-100 translate-y-0`}>
            <div className="grid md:grid-cols-3 gap-4">
              {(atRight
                ? [
                    { t: 'Basis: Langsame Ladezeiten', d: 'Unoptimierte Bilder, fehlendes Caching' },
                    { t: 'Basis: Schwache SEO', d: 'Meta & Schema fehlen' },
                    { t: 'Basis: Niedrige Conversion', d: 'Zerstreute CTAs, unklare Navigation' },
                  ]
                : [
                    { t: 'Optimiert: SEO', d: 'Saubere Struktur, Meta & Schema' },
                    { t: 'Optimiert: Conversion', d: 'Klarer Funnel, Trust-Elemente' },
                    { t: 'Optimiert: UX', d: 'Schnell, klar, mobil-perfekt' },
                  ]).map((i) => (
                <div key={i.t} className="p-4 rounded-xl border bg-white border-gray-200 shadow-sm">
                  <div className="text-sm font-semibold text-gray-800">{i.t}</div>
                  <div className="text-sm text-gray-500">{i.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Removed the old two-column comparison for a cleaner single-container interaction */}
      </div>
    </section>
  );
}


