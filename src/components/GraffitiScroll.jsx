"use client";

import React, { useEffect, useRef } from 'react';

const GraffitiScroll = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const words = [
    "Shop Setup",
    "Datenanalyse", 
    "Programmierung",
    "A/B Testing",
    "Beratung",
    "Retention Marketing",
    "UX/UI Design",
    "Marketplace Verwaltung"
  ];

  const cardSuits = ["♦", "♦", "♦", "♦"];

  // Create multiple sets of words for seamless looping
  const createTextSet = () => {
    const textSet = [];
    for (let i = 0; i < 3; i++) {
      words.forEach((word, index) => {
        textSet.push(word);
        // Add random card suit between words
        textSet.push(cardSuits[Math.floor(Math.random() * cardSuits.length)]);
      });
    }
    return textSet;
  };

  const textElements = createTextSet();

  useEffect(() => {
    const animate = () => {
      if (containerRef.current) {
        positionRef.current -= 1; // 1px per frame
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
        
        // Reset position when we've scrolled one full set
        const containerWidth = containerRef.current.scrollWidth / 2;
        if (Math.abs(positionRef.current) >= containerWidth) {
          positionRef.current = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-950 via-cyan-950 to-gray-800 py-12">
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap items-center"
        style={{ width: '200%' }}
      >
        {/* First set */}
        {textElements.map((element, index) => (
          <span
            key={index}
            className={`inline-block mx-8 text-4xl font-bold ${
              cardSuits.includes(element)
                ? "text-yellow-400 text-5xl"
                : "text-white"
            }`}
            style={{
              fontFamily: cardSuits.includes(element) ? "serif" : "Arial Black, sans-serif",
              textShadow: cardSuits.includes(element) 
                ? "0 0 10px #fbbf24, 0 0 20px #f59e0b" 
                : "3px 3px 0px #ff6b6b, 6px 6px 0px #4ecdc4, 6px 6px 0px #45b7d1",
              transform: cardSuits.includes(element) 
                ? "rotate(0deg)" 
                : "rotate(0deg)",
              filter: cardSuits.includes(element)
                ? "drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))"
                : "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))"
            }}
          >
            {element}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {textElements.map((element, index) => (
          <span
            key={`duplicate-${index}`}
            className={`inline-block mx-8 text-4xl font-bold ${
              cardSuits.includes(element)
                ? "text-yellow-400 text-5xl"
                : "text-white"
            }`}
            style={{
              fontFamily: cardSuits.includes(element) ? "serif" : "Arial Black, sans-serif",
              textShadow: cardSuits.includes(element) 
                ? "0 0 10px #fbbf24, 0 0 20px #f59e0b" 
                : "3px 3px 0pxrgb(255, 225, 107), 6px 6px 0px #4ecdc4, 9px 9px 0px #45b7d1",
              transform: cardSuits.includes(element) 
                ? "rotate(0deg)" 
                : "rotate(0deg)",
              filter: cardSuits.includes(element)
                ? "drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))"
                : "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))"
            }}
          >
            {element}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GraffitiScroll;
