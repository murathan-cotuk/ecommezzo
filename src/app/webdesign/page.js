'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ShopifySection from '@/components/WebdesignShopify';
import WordpressSection from '@/components/WebdesignWordpress';
import SeoSection from '@/components/WebdesignSeo';
import ResponsiveSection from '@/components/WebdesignResponsive';
import ReferenzSection from '@/components/WebdesignReferenz';
import CTASection from '@/components/WebdesignCTA';

export default function Webdesign() {
  const [activeDevice, setActiveDevice] = useState('mobile');
  const kundenLogos = [
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/Hero.png',
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-950">
             <style jsx global>{`
         html {
           scroll-behavior: smooth;
         }
         
         #shopify, #wordpress, #seo {
           scroll-margin-top: 100px;
         }
         
         .logo-marquee {
           width: 100vw;
           overflow: hidden;
           position: relative;
           margin-left: calc(-50vw + 50%);
         }
         .logo-track {
           display: flex;
           width: max-content;
           animation: scroll 60s linear infinite;
         }
         .logo-item {
           position: relative;
           width: 280px;
           height: 120px;
           margin: 0 40px;
           flex-shrink: 0;
         }
         @keyframes scroll {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         
         .device-view {
           transition: all 0.5s ease-in-out;
         }
         
         #device-display[data-active-device="mobile"] .mobile-view {
           opacity: 1 !important;
           transform: scale(1) !important;
         }
         
         #device-display[data-active-device="tablet"] .tablet-view {
           opacity: 1 !important;
           transform: scale(1) !important;
         }
         
         #device-display[data-active-device="laptop"] .laptop-view {
           opacity: 1 !important;
           transform: scale(1) !important;
         }
         
                    #device-display[data-active-device="mobile"] .tablet-view,
           #device-display[data-active-device="mobile"] .laptop-view,
           #device-display[data-active-device="tablet"] .mobile-view,
           #device-display[data-active-device="tablet"] .laptop-view,
           #device-display[data-active-device="laptop"] .mobile-view,
           #device-display[data-active-device="laptop"] .tablet-view {
             opacity: 0 !important;
             transform: scale(0.75) !important;
           }
        `}</style>

        {/* 1. Hero */}
        <main className="relative z-10">
          <section className="w-full h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
            <div className="w-1/2 pl-40 pt-20 z-10">
              <h1 className="text-7xl font-bold text-left pb-10">Professionelles Webdesign für Ihren Erfolg</h1>
              <p className="text-lg mt-4 max-w-xl text-left pb-20">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
               <a
                  href="/termin-buchen"
                  className="px-6 py-5 border-2 border-teal-400 bg-teal-500 text-cyan-950 hover:bg-teal-600 transition-all duration-300 rounded-md font-bold mr-5"
                >
                  Jetzt kostenloses Beratungsgespräch vereinbaren
                </a>
                    </div>

            <div className="absolute right-0 bottom-0 w-1/2 h-auto">
              <img src="/Hero.png" alt="Hero" className="w-[800px] h-auto" />
            </div>
          </section>
        </main>

      {/* 2. Einführung (Gelişmiş Versiyon) */}

      <section className="py-24 px-6 bg-gradient-to-br from-white via-teal-50 to-indigo-50 relative overflow-hidden">
        {/* Arka plan soyut şekil animasyonu */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 0.95, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <circle cx="200" cy="200" r="150" stroke="url(#grad1)" strokeWidth="3" />
            <circle cx="200" cy="200" r="120" stroke="url(#grad2)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
              <linearGradient id="grad2" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
          >
            Unsere Leistungen im Überblick{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-block text-teal-500 origin-center"
            >
              🚀
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20 text-gray-700 text-xl font-semibold"
          >
            Alles, was Ihr Online-Business braucht – maßgeschneiderte Shops, leistungsstarke Websites, unschlagbare SEO und Full-Service Betreuung.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: ShoppingBagIcon,
                title: "Shopify",
                desc: "Individuelle Online-Shops mit allen wichtigen Funktionen und moderner UX/UI.",
                points: ["Maßgeschneiderte Templates", "Schnelle Ladezeiten", "Skalierbar & sicher"],
                hoverBg: "bg-teal-50",
                hoverText: "Ihr Shop, perfekt auf Ihr Business abgestimmt – von Experten entwickelt.",
                iconColor: "text-teal-500",
                buttonLink: "#shopify",
              },
              {
                icon: GlobeAltIcon,
                title: "WordPress",
                desc: "Flexible Unternehmenswebsites, Blogs und Portfolio-Seiten mit SEO-Power.",
                points: ["Anpassbare Themes", "SEO-optimiert", "Einfache Content-Pflege"],
                hoverBg: "bg-indigo-50",
                hoverText: "Ihr digitaler Auftritt mit maximaler Flexibilität und Performance.",
                iconColor: "text-indigo-500",
                buttonLink: "#wordpress",
              },
              {
                icon: ChartBarIcon,
                title: "SEO & Responsive",
                desc: "Optimale Sichtbarkeit und perfekte Darstellung auf allen Geräten.",
                points: ["Top-Rankings bei Google", "Mobile & Desktop perfekt angepasst", "Kontinuierliche Analyse & Optimierung"],
                hoverBg: "bg-pink-50",
                hoverText: "Mehr Traffic, bessere Conversion – Ihr Erfolg ist unser Ziel.",
                iconColor: "text-pink-500",
                buttonLink: "#seo",
              },
            ].map(({ icon: Icon, title, desc, points, hoverBg, hoverText, iconColor, buttonLink }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 shadow-lg p-10 rounded-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-400 group relative cursor-pointer"
              >
                <div className="flex justify-center mb-7">
                  <Icon className={`h-20 w-20 ${iconColor} group-hover:scale-125 group-hover:rotate-12 transition-transform duration-400`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center rounded-2xl pointer-events-none">
                  <p className="text-center text-gray-700 px-6">{hoverText}</p>
                </div>
                <button
                  onClick={() => scrollToSection(buttonLink?.replace('#', '') || '')}
                  className="mt-6 bg-teal-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-teal-600 active:scale-95 transition-transform duration-200 relative z-10"
                >
                  Mehr erfahren
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ShopifySection />
      <WordpressSection />
      <SeoSection />
      <ResponsiveSection />
      <ReferenzSection />
      <CTASection />      

      
    </div>
  );
}

