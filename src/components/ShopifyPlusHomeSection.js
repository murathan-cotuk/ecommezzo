'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';

export default function ShopifyPlusHomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      id: 0,
      icon: RocketLaunchIcon,
      title: "Enterprise Performance",
      shortDesc: "99.99% Uptime",
      fullDesc: "Unvergleichliche Ladezeiten und maximale Verfügbarkeit für Ihre Kunden. Shopify Plus bietet Enterprise-Level Performance, die zu höheren Conversion-Raten führt.",
      features: ["99.99% Uptime-Garantie", "CDN-optimierte Geschwindigkeit", "Globale Server-Infrastruktur", "Unbegrenzte Bandbreite"],
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
    },
    {
      id: 1,
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      shortDesc: "24/7 Priority Support",
      fullDesc: "Dedizierter Account Manager, 24/7 Priority Support und Level 1 PCI DSS Compliance. Ihre Daten und die Ihrer Kunden sind optimal geschützt.",
      features: ["Dedizierter Account Manager", "24/7 Priority Support", "Level 1 PCI DSS Compliance", "Automatische Sicherheitsupdates"],
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
    },
    {
      id: 2,
      icon: ChartBarIcon,
      title: "36% Mehr Umsatz",
      shortDesc: "Höhere Conversion",
      fullDesc: "Shopify Plus-Shops generieren durchschnittlich 36% mehr Umsatz. Erweiterte Analytics, A/B Testing und personalisierte Checkouts optimieren jeden Aspekt.",
      features: ["36% höhere Conversion-Raten", "Erweiterte Analytics & Reports", "A/B Testing Tools", "Personalisierte Checkouts"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
    {
      id: 3,
      icon: SparklesIcon,
      title: "Unbegrenzte Skalierbarkeit",
      shortDesc: "Wachsen ohne Limits",
      fullDesc: "Von 100 zu 100.000 Produkten ohne Performance-Einbußen. Shopify Plus wächst mit Ihrem Business und bietet exklusive Features für Enterprise-Level.",
      features: ["Unbegrenzte Skalierbarkeit", "Exklusive Plus-Features", "Shopify Flow Automatisierung", "Multi-Store & Multi-Currency"],
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 4);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 4) % 4);
  };

  // Position mapping: 0=front, 1=left, 2=back, 3=right
  const getCardPosition = (cardIndex) => {
    // Calculate relative position from active card
    let position = (cardIndex - activeIndex + 4) % 4;
    
    // Position 0: Front (active)
    // Position 1: Left
    // Position 2: Back
    // Position 3: Right
    
    // Mobile positions (smaller, closer together)
    if (isMobile) {
      const mobilePositions = {
        0: { // Front - active
          x: 0,
          y: 0,
          z: 100,
          scale: 1,
          opacity: 1,
          blur: 0,
          showDescription: true,
          width: 260 // Smaller for mobile, fits content better
        },
        1: { // Left
          x: -90,
          y: -1,
          z: -30,
          scale: 0.4,
          opacity: 0.4,
          blur: 2,
          showDescription: false,
          width: 140
        },
        2: { // Back
          x: 0,
          y: -2,
          z: -100,
          scale: 0.3,
          opacity: 0.2,
          blur: 4,
          showDescription: false,
          width: 140
        },
        3: { // Right
          x: 90,
          y: -1,
          z: -30,
          scale: 0.4,
          opacity: 0.4,
          blur: 2,
          showDescription: false,
          width: 140
        }
      };
      return mobilePositions[position];
    }
    
    // Desktop positions (original)
    const positions = {
      0: { // Front - active
        x: 0,
        y: 0,
        z: 150,
        scale: 1,
        opacity: 1,
        blur: 0,
        showDescription: true,
        width: 500 // Wider for front card
      },
      1: { // Left
        x: -280,
        y: -1,
        z: -50,
        scale: 0.6,
        opacity: 0.5,
        blur: 2,
        showDescription: false,
        width: 280
      },
      2: { // Back
        x: 0,
        y: -2,
        z: -150,
        scale: 0.5,
        opacity: 0.3,
        blur: 4,
        showDescription: false,
        width: 280
      },
      3: { // Right
        x: 280,
        y: -1,
        z: -50,
        scale: 0.6,
        opacity: 0.5,
        blur: 2,
        showDescription: false,
        width: 280
      }
    };
    
    return positions[position];
  };


  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-12 md:py-5 px-4 sm:px-6 overflow-hidden">
      {/* Enhanced Animated Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars with pulsing animation */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Header - Centered */}
        <motion.div
          className="text-center mb-4 md:mb-8 w-full"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo - Centered */}
          <motion.div
            className="flex justify-center mb-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="relative w-72 h-36 md:w-96 md:h-48">
              <Image
                src="/ShopifyplusWhite.png"
                alt="Shopify Plus"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
          
          {/* Badge - Centered below logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-400/30">
              <StarIcon className="w-5 h-5 text-teal-300" />
              <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">Enterprise E-Commerce Exzellenz</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent px-4">
            Skalieren ohne Grenzen mit Shopify Plus
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Maximale Performance, unbegrenzte Skalierbarkeit und bis zu <span className="font-bold text-teal-300">36% höhere Conversion-Raten</span>
          </p>
        </motion.div>

        {/* 3D Planet System - Cards orbiting around logo */}
        <div className="relative w-full flex justify-center items-center my-8 md:my-2" style={{ perspective: isMobile ? '1500px' : '3500px', minHeight: isMobile ? '400px' : '500px', overflow: 'visible' }}>
          <div className="relative" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
            {/* Central Planet (Shopify Logo) - NO ROTATION */}
            <div className={`relative mx-auto z-10 ${isMobile ? 'w-32 h-16' : 'w-40 h-20 md:w-56 md:h-48'}`} style={{ transform: 'translateZ(0)' }}>
              <div className="relative w-full h-full">
                <Image
                  src="/ShopifyLogo.png"
                  alt="Shopify"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Navigation Buttons - Left and Right - Centered vertically */}
            <motion.button
              onClick={handlePrev}
              className={`absolute top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:border-white/60 flex items-center justify-center transition-all duration-300 hover:bg-white/20 ${
                isMobile 
                  ? 'left-2 w-10 h-10' 
                  : 'left-4 md:left-0 md:-left-20 w-12 h-12 md:w-16 md:h-16'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'}`} />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className={`absolute top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:border-white/60 flex items-center justify-center transition-all duration-300 hover:bg-white/20 ${
                isMobile 
                  ? 'right-2 w-10 h-10' 
                  : 'right-4 md:right-0 md:-right-20 w-12 h-12 md:w-16 md:h-16'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'}`} />
            </motion.button>

            {/* Orbiting Cards - Positioned around logo */}
            {cards.map((card, index) => {
              const Icon = card.icon;
              const position = getCardPosition(index);
              
              return (
                <motion.div
                  key={card.id}
                  className="absolute top-2 left-1/2"
                  style={{
                    x: position.x - (position.width / 2), // Center the card (half of card width)
                    y: position.y - 150, // Center vertically (half of card height)
                    z: position.z,
                    transformStyle: 'preserve-3d',
                    filter: `blur(${position.blur}px)`,
                  }}
                  animate={{
                    x: position.x - (position.width / 2),
                    y: position.y - 150,
                    z: position.z,
                    scale: position.scale,
                    opacity: position.opacity,
                    filter: `blur(${position.blur}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className={`relative cursor-pointer rounded-xl overflow-visible backdrop-blur-xl border-2 transition-all duration-500 ${
                      position.showDescription 
                        ? 'border-white/80 shadow-2xl' 
                        : 'border-white/30 hover:border-white/50'
                    }`}
                    style={{
                      width: `${position.width}px`,
                      minHeight: position.showDescription ? 'auto' : '200px',
                      background: position.showDescription 
                        ? `linear-gradient(135deg, rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.92))`
                        : 'rgba(0, 0, 0, 0.7)',
                      boxShadow: position.showDescription 
                        ? `0 0 40px ${card.gradient.includes('teal') ? 'rgba(20, 184, 166, 0.6)' : card.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.6)' : card.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.6)' : 'rgba(6, 182, 212, 0.6)'}, 0 20px 60px rgba(0, 0, 0, 0.5)`
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                    whileHover={!position.showDescription ? { scale: 1.05 } : {}}
                    onClick={() => {
                      const steps = (index - activeIndex + 4) % 4;
                      setActiveIndex(index);
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500 ${
                      position.showDescription ? 'opacity-20' : 'opacity-0'
                    }`} />

                    {/* Content */}
                    <div className={`relative ${isMobile ? 'p-3' : 'p-6'}`}>
                      {/* Icon */}
                      <motion.div
                        className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-lg bg-gradient-to-r ${card.gradient} flex items-center justify-center ${isMobile ? 'mb-2' : 'mb-4'} shadow-lg`}
                        animate={{
                          rotate: position.showDescription ? 360 : 0,
                          scale: position.showDescription ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} text-white`} />
                      </motion.div>

                      {/* Title & Short Desc */}
                      <h3 className={`${isMobile ? 'text-base' : 'text-xl'} font-bold text-white ${isMobile ? 'mb-1' : 'mb-2'}`}>{card.title}</h3>
                      <p className={`text-white/70 ${isMobile ? 'text-xs mb-2' : 'text-xs mb-4'}`}>{card.shortDesc}</p>

                      {/* Active Card Expanded Content - Full visible */}
                      <AnimatePresence>
                        {position.showDescription && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-visible"
                          >
                            <p className={`text-white/90 ${isMobile ? 'mb-2 text-xs leading-snug' : 'mb-4 leading-relaxed text-sm'}`}>{card.fullDesc}</p>
                            <ul className={`${isMobile ? 'space-y-1 mb-2' : 'space-y-2 mb-4'}`}>
                              {card.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  className={`flex items-center text-white/80 ${isMobile ? 'text-xs' : 'text-xs'}`}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <StarIcon className={`${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-teal-400 mr-2 flex-shrink-0`} />
                                  <span className={isMobile ? 'text-[10px] leading-tight' : ''}>{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                            <motion.a
                              href="/webdesign#shopify-plus"
                              className={`inline-flex items-center gap-2 ${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Mehr erfahren
                              <ArrowRightIcon className={isMobile ? 'w-3 h-3' : 'w-4 h-4'} />
                            </motion.a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}
