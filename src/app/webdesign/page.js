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
import Portfolio from '@/components/Portfolio';
import ShopRelaunch from '@/components/ShopRelaunch';



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
         
         #shopify, #wordpress, #seo, #responsive {
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
           animation: scroll 90s linear infinite;
         }
         .logo-item {
           position: relative;
           width: 280px;
           height: 120px;
           margin: 0 40px;
           flex-shrink: 0;
         }
        /* Mobile hero adjustments to mirror homepage behavior */
        @media (max-width: 1024px) {
          main > section:first-of-type {
            min-height: clamp(200px, 50vw, 450px); /* match visual height exactly */
            height: auto;
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none !important; /* disable inline cover bg */
            position: relative;
          }

          /* Ensure text/button sits above overlays */
          main > section:first-of-type > div:nth-of-type(1) {
            position: relative;
            z-index: 2;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            max-width: 680px;
          }
          /* Right-half background on tablets as well */
          main > section:first-of-type::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url('/WebdesignHero.png');
            background-repeat: no-repeat;
            background-position: right center; /* anchor to right */
            background-size: 200% auto; /* show right 50% */
            z-index: 0;
            pointer-events: none;
          }
          main > section:first-of-type::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(19, 27, 32, 0.42);
            z-index: 1;
            pointer-events: none;
          }
        }

        @media (max-width: 640px) {
          /* Remove inline BG (cover) and replace with center-fit image layer */
          main > section:first-of-type {
            background: none !important;
            position: relative;
          }
          main > section:first-of-type::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url('/WebdesignHero.png');
            background-repeat: no-repeat;
            background-position: right 60%;
            background-size: 200% auto; /* show right half */
            z-index: 0;
            pointer-events: none;
          }
          main > section:first-of-type::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(19, 27, 32, 0.42);
            z-index: 1;
            pointer-events: none;
          }
          /* Text starts a bit below navbar */
          main > section:first-of-type > div:nth-of-type(1) {
            transform: none;
            padding-top: 98px;
          }
        }
         @keyframes scroll {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         
         .device-view {
           transition: all 0.3s ease-in-out;
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
          <section className="w-full min-h-[100vh] sm:h-[900px] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden" style={{backgroundImage: 'url(/WebdesignHero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            
            {/* Metin ve Buton - Mobil Uyumlu */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-40 pt-20 pb-10 lg:pb-20 z-20 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pb-6 lg:pb-10 bg-gradient-to-r from-white via-[#c499ba] to-[#986f8e] bg-clip-text text-transparent">
                Professionelles Webdesign für Ihren Erfolg
              </h1>
              <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 pb-10 lg:pb-20 text-gray-300 leading-relaxed">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
              <a
                href="/kontakt"
                className="block w-fit mx-auto lg:mx-0"
              >
                <button className="px-4 sm:px-8 py-3 sm:py-6 bg-gradient-to-r from-[#c499ba] to-[#3e304c] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#726083] transition-shadow duration-300 inline-flex items-center gap-3 text-sm sm:text-lg">
                  Kontakt Aufnehmen
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </a>
            </div>

          </section>
        </main>

      {/* 2. Einführung (Gelişmiş Versiyon) */}

      <section className="py-24 px-6 bg-gradient-to-br from-white via-teal-50 to-indigo-50 relative overflow-hidden">
        {/* Arka plan soyut şekil animasyonu */}
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Unsere Leistungen im Überblick{" "}
            <span className="inline-block text-teal-500">
              🚀
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mb-20 text-gray-700 text-xl font-semibold">
            Alles, was Ihr Online-Business braucht – maßgeschneiderte Shops, leistungsstarke Websites, unschlagbare SEO und Full-Service Betreuung.
          </p>

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
              <div
                key={title}
                className="bg-white border border-gray-100 shadow-lg p-10 rounded-2xl hover:shadow-xl transition-shadow duration-300 group relative cursor-pointer"
              >
                <div className="flex justify-center mb-7">
                  <Icon className={`h-20 w-20 ${iconColor} group-hover:scale-105 transition-transform duration-300`} />
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
                <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center rounded-2xl pointer-events-none">
                  <p className="text-center text-gray-700 px-6">{hoverText}</p>
                </div>
                <button
                  onClick={() => scrollToSection(buttonLink?.replace('#', '') || '')}
                  className="mt-6 bg-teal-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-teal-600 transition-colors duration-300 relative z-10"
                >
                  Mehr erfahren
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShopifySection />
      <WordpressSection />
      <SeoSection />
      <ResponsiveSection />
      <ShopRelaunch />
      {/*<ReferenzSection />*/}
      {/*<Portfolio />*/}
      <CTASection />      

      
    </div>
  );
}

