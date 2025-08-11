'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function Webdesign() {
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
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .logo-track {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        .logo-item {
          position: relative;
          width: 300px;
          height: 100px;
          margin: 0 36px;
          flex-shrink: 0;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
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


      {/* 3. Shopify - MUHTEŞEM BÖLÜM */}
      <section id="shopify" className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-32 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-200/25 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-60 h-60 bg-slate-200/20 rounded-full"></div>
        </motion.div>

        {/* Floating Elements with Different Animations */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        >
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-300/40 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-purple-300/35 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
        >
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-teal-300/30 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-blue-300/40 rounded-full"></div>
        </motion.div>

        {/* Pulsing Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 5 }}
        >
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-300/20 rounded-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <ShoppingBagIcon className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Shopify E-Commerce Experte
            </h2>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-white">
              <span className="font-bold text-indigo-300">Online-Shop Spezialist</span> für professionelle E-Commerce Lösungen. 
              Shopify ist die <span className="font-bold text-blue-200">beste Wahl für Online-Shops</span> - 
              von der Produktpräsentation bis zur Zahlungsabwicklung. Ihr Shop wird nicht nur schön aussehen, 
              sondern auch <span className="font-bold text-blue-300">maximale Umsätze</span> generieren.
            </p>
          </motion.div>

          {/* 3D Cards Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: ShoppingBagIcon,
                title: "E-Commerce Shop Design",
                desc: "Professionelle Online-Shops mit optimierter Produktpräsentation",
                features: ["Produktkataloge", "Shopping Cart", "Checkout Optimierung"],
                color: "from-teal-500 to-cyan-500",
                delay: 0.2
              },
              {
                icon: GlobeAltIcon,
                title: "Payment & Shipping",
                desc: "Sichere Zahlungsabwicklung und optimierte Versandlösungen",
                features: ["Payment Gateways", "Versandoptionen", "Steuerberechnung"],
                color: "from-blue-500 to-indigo-500",
                delay: 0.4
              },
              {
                icon: ChartBarIcon,
                title: "Shop Conversion & Sales",
                desc: "Datengetriebene Optimierung für maximale Umsätze",
                features: ["A/B Testing", "Analytics", "Umsatzsteigerung"],
                color: "from-purple-500 to-pink-500",
                delay: 0.6
              }
            ].map(({ icon: Icon, title, desc, features, color, delay }, i) => (
                             <motion.div
                 key={title}
                 initial={{ opacity: 0, y: 50, rotateY: -15 }}
                 whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                 transition={{ duration: 0.8, delay }}
                 viewport={{ once: true }}
                 whileHover={{ 
                   scale: 1.05, 
                   rotateY: 5,
                   y: -10,
                   transition: { duration: 0.3 }
                 }}
                 className="group bg-white border-2 border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-400/50 hover:border-blue-400 hover:scale-105 transition-all duration-500 transform perspective-1000 backdrop-blur-sm"
               >
                 <motion.div 
                   className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 transform rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 0.6 }}
                 >
                   <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                 </motion.div>
                 <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
                 <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-300">{desc}</p>
                 <ul className="space-y-2">
                   {features.map((feature, index) => (
                     <motion.li 
                       key={index}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: delay + 0.1 * index }}
                       viewport={{ once: true }}
                       whileHover={{ x: 5 }}
                       className="flex items-center text-sm text-black group-hover:text-blue-700 transition-colors duration-300"
                     >
                       <motion.span 
                         className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"
                         whileHover={{ scale: 1.5 }}
                       ></motion.span>
                       {feature}
                     </motion.li>
                   ))}
                 </ul>
               </motion.div>
            ))}
          </div>

                     {/* Shopify Interactive Features Section */}
           <motion.div 
             className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 mb-20 border-2 border-white/30 shadow-2xl"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h3 className="text-3xl font-bold text-center mb-8 text-black">Warum Shopify für E-Commerce?</h3>
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                   <span className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-sm font-bold text-white">🛒</span>
                   E-Commerce Vorteile
                 </h4>
                 <div className="space-y-4">
                   {[
                     { 
                       label: "Online-Shop Spezialist", 
                       desc: "Professionelle E-Commerce Lösungen mit Shopify",
                       icon: "🛒"
                     },
                     { 
                       label: "Payment & Shipping", 
                       desc: "Sichere Zahlungsabwicklung und Versandlösungen",
                       icon: "💳"
                     },
                     { 
                       label: "Shop Conversion", 
                       desc: "Optimierung für maximale Umsätze und Conversion",
                       icon: "📈"
                     },
                     { 
                       label: "E-Commerce Apps", 
                       desc: "Maßgeschneiderte Apps für Ihren Online-Shop",
                       icon: "🔧"
                     }
                   ].map(({ label, desc, icon }, index) => (
                     <motion.div 
                       key={label}
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: index * 0.1 }}
                       viewport={{ once: true }}
                       whileHover={{ 
                         scale: 1.02, 
                         x: 10,
                         transition: { duration: 0.2 }
                       }}
                       className="group p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                     >
                       <div className="flex items-start">
                         <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                         <div>
                           <h5 className="font-bold text-black group-hover:text-blue-700 transition-colors duration-300">{label}</h5>
                           <p className="text-sm text-gray-700 mt-1">{desc}</p>
                         </div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>
               <div>
                 <h4 className="text-xl font-semibold mb-6 text-indigo-700 flex items-center">
                   <span className="w-8 h-8 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-sm font-bold text-black">⚡</span>
                   Shopify Technologie
                 </h4>
                 <div className="space-y-3 text-gray-700">
                   {[
                     { skill: "Liquid Template Language", level: " ", icon: "🎨" },
                     { skill: "Shopify API Integration", level: " ", icon: "🔌" },
                     { skill: "E-Commerce Apps", level: " ", icon: "📱" },
                     { skill: "Shop Theme Design", level: " ", icon: "🛒" },
                     { skill: "Payment Integration", level: " ", icon: "💳" },
                     { skill: "Shop Analytics", level: " ", icon: "📊" }
                   ].map(({ skill, level, icon }, index) => (
                     <motion.div 
                       key={skill}
                       initial={{ opacity: 0, x: 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: index * 0.1 }}
                       viewport={{ once: true }}
                       whileHover={{ 
                         scale: 1.02, 
                         x: -10,
                         transition: { duration: 0.2 }
                       }}
                       className="group flex items-center justify-between p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/40 hover:bg-indigo-50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                     >
                       <div className="flex items-center">
                         <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                         <span className="text-sm">{skill}</span>
                       </div>
                       <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                         {level}
                       </span>
                     </motion.div>
                   ))}
                 </div>
               </div>
             </div>
           </motion.div>

          {/* Accordion Section - Pros & Cons */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">Shopify vs. Andere Plattformen</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center">✓</span>
                  Shopify Vorteile
                </h4>
                <div className="space-y-4">
                  {[
                    "Einfache Bedienung - auch für Anfänger",
                    "Sichere Hosting-Lösung mit 99.9% Uptime",
                    "Umfangreiche App-Integration (4000+ Apps)",
                    "24/7 Support von Shopify",
                    "Automatische Updates und Sicherheit",
                    "Mobile-First Design",
                    "Multi-Channel Verkauf (Social Media, Amazon, etc.)",
                    "Eingebaute Analytics und Reporting"
                  ].map((pro, index) => (
                    <motion.div 
                      key={pro}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{pro}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                  <span className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">✗</span>
                  Andere Plattformen Nachteile
                </h4>
                <div className="space-y-4">
                  {[
                    "Komplexe Einrichtung und Wartung",
                    "Unsicherere Hosting-Lösungen",
                    "Begrenzte App-Auswahl",
                    "Teurer Support und Wartung",
                    "Manuelle Updates und Sicherheitspatches",
                    "Schwierige Mobile-Optimierung",
                    "Eingeschränkte Multi-Channel Optionen",
                    "Zusätzliche Kosten für Analytics"
                  ].map((con, index) => (
                    <motion.div 
                      key={con}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                    >
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{con}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h3 className="text-4xl font-bold mb-6 text-white">Bereit für Ihren Online-Shop?</h3>
             <p className="text-xl mb-8 text-blue-200">
               Lassen Sie uns gemeinsam Ihren perfekten E-Commerce Shop mit Shopify erstellen
             </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                             className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-blue-400/50 hover:scale-110 transition-all duration-300"
            >
              Jetzt kostenlose Beratung buchen
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 4. WordPress - MUHTEŞEM BÖLÜM */}
      <section id="wordpress" className="bg-white py-32 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-300 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-100 rounded-full opacity-10"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <GlobeAltIcon className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              WordPress Website Experte
            </h2>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700">
              <span className="font-bold text-orange-600">Website & Blog Spezialist</span> für professionelle 
              <span className="font-bold text-red-600"> Unternehmenswebsites, Blogs und Portfolios</span>. 
              WordPress ist die <span className="font-bold text-orange-600">beste Wahl für Content-Websites</span> - 
              von der Unternehmenspräsentation bis zum Blog. Ihre Website wird nicht nur modern aussehen, 
              sondern auch <span className="font-bold text-red-600">maximale Flexibilität</span> bieten.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: "🌐",
                title: "HTML5 & CSS3",
                desc: "Semantic HTML, Flexbox, Grid, Animations",
                color: "from-blue-500 to-cyan-500",
                skills: ["Responsive Design", "CSS Grid", "Flexbox", "Animations"]
              },
              {
                icon: "⚡",
                title: "JavaScript ES6+",
                desc: "Modern JS, React, Vue.js Integration",
                color: "from-yellow-500 to-orange-500",
                skills: ["ES6+ Features", "DOM Manipulation", "AJAX", "React/Vue"]
              },
              {
                icon: "🐘",
                title: "PHP & MySQL",
                desc: "Custom Plugins, Database Optimization",
                color: "from-purple-500 to-pink-500",
                skills: ["Custom Plugins", "MySQL", "REST API", "Security"]
              },
              {
                icon: "🎨",
                title: "WordPress Core",
                desc: "Theme Development, Customization",
                color: "from-green-500 to-teal-500",
                skills: ["Theme Dev", "Plugin Dev", "Hooks", "Customization"]
              }
            ].map(({ icon, title, desc, color, skills }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-orange-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 transform perspective-1000"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{desc}</p>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-xs text-gray-600 group-hover:text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 group-hover:bg-orange-500 transition-colors duration-300"></span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WordPress Features Showcase */}
          <motion.div 
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 mb-20 border-2 border-orange-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">WordPress für Websites & Blogs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                                 <h4 className="text-xl font-semibold mb-6 text-orange-600 flex items-center">
                   <span className="w-8 h-8 bg-orange-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">🌐</span>
                   Website Development
                 </h4>
                <div className="space-y-4">
                                     {[
                     { 
                       title: "Unternehmenswebsites", 
                       desc: "Professionelle Websites für Unternehmen und Dienstleister",
                       icon: "🏢",
                       features: ["Responsive Design", "SEO-optimiert", "Content Management"]
                     },
                     { 
                       title: "Blog & Portfolio", 
                       desc: "Moderne Blogs und Portfolio-Websites",
                       icon: "📝",
                       features: ["Blog System", "Portfolio Gallery", "Social Media Integration"]
                     },
                     { 
                       title: "Custom Plugins", 
                       desc: "Maßgeschneiderte Plugins für spezifische Anforderungen",
                       icon: "🔌",
                       features: ["Custom Post Types", "Advanced Forms", "API Integration"]
                     }
                   ].map(({ title, desc, icon, features }, index) => (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      className="group p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {features.map((feature, i) => (
                              <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                                 <h4 className="text-xl font-semibold mb-6 text-red-600 flex items-center">
                   <span className="w-8 h-8 bg-red-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">🔒</span>
                   Content & Security
                 </h4>
                <div className="space-y-4">
                                     {[
                     { 
                       title: "Content Management", 
                       desc: "Einfache Content-Verwaltung und Updates",
                       icon: "📝",
                       features: ["User-friendly CMS", "Media Library", "Content Editor"]
                     },
                     { 
                       title: "Security & Updates", 
                       desc: "Maximale Sicherheit und regelmäßige Updates",
                       icon: "🔒",
                       features: ["SSL Setup", "Firewall", "Regular Updates"]
                     },
                     { 
                       title: "SEO & Analytics", 
                       desc: "Suchmaschinenoptimierung und detaillierte Analysen",
                       icon: "📊",
                       features: ["Schema Markup", "Google Analytics", "Search Console"]
                     }
                   ].map(({ title, desc, icon, features }, index) => (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        x: -10,
                        transition: { duration: 0.2 }
                      }}
                      className="group p-4 bg-white rounded-xl border border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">{title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {features.map((feature, i) => (
                              <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

                     {/* Technical Expertise Showcase */}
           <motion.div 
             className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 mb-20 border-2 border-orange-200"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Technische Expertise & Best Practices</h3>
             <div className="grid md:grid-cols-3 gap-6">
               <div className="text-center">
                 <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">💻</span>
                 </div>
                 <h4 className="text-xl font-bold mb-3 text-orange-600">Custom Development</h4>
                 <p className="text-gray-600 text-sm">
                   Maßgeschneiderte WordPress-Lösungen mit modernsten Technologien
                 </p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">🔒</span>
                 </div>
                 <h4 className="text-xl font-bold mb-3 text-red-600">Security First</h4>
                 <p className="text-gray-600 text-sm">
                   Maximale Sicherheit durch bewährte Best Practices
                 </p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">⚡</span>
                 </div>
                 <h4 className="text-xl font-bold mb-3 text-orange-700">Performance</h4>
                 <p className="text-gray-600 text-sm">
                   Optimierte Ladezeiten und beste User Experience
                 </p>
               </div>
             </div>
           </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h3 className="text-4xl font-bold mb-6 text-gray-800">Bereit für Ihre Website oder Blog?</h3>
             <p className="text-xl mb-8 text-gray-600">
               Lassen Sie uns gemeinsam Ihre perfekte Website oder Blog mit WordPress erstellen
             </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              Jetzt kostenlose Beratung buchen
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 5. SEO */}
      <section id="seo" className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">SEO-Optimierung</h2>
        <p>
          Wir analysieren Ihre Branche, recherchieren Keywords und optimieren Ihre Website technisch und inhaltlich. Ergebnis: bessere Google-Rankings, mehr Besucher, mehr Umsatz.
        </p>
      </section>

      {/* 6. Responsive */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Responsive & Mobile First Design</h2>
        <p>
          Wir entwickeln Designs, die auf allen Geräten perfekt aussehen, schnell laden und eine intuitive Benutzerführung bieten – für optimale User Experience.
        </p>
      </section>

      {/* 7. Pflege */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Website-Pflege & Updates</h2>
        <p>
          Regelmäßige Updates, Sicherheitsprüfungen und Content-Aktualisierungen halten Ihre Website sicher, modern und leistungsstark – rund um die Uhr.
        </p>
      </section>

      {/* 8. Referenzen + Sonsuz kayan logolar */}
      <section className="py-16 px-6 bg-white dark:bg-cyan-600 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-10">Referenzen & Beispiele</h2>
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee">
            <div className="logo-track">
              {[...kundenLogos, ...kundenLogos, ...kundenLogos].map((logo, i) => (
                <div key={i} className="logo-item">
                  <Image
                    src={logo}
                    alt={`Kunde ${i + 1}`}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Prozess */}
      <section className="bg-cyan-950 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Unser Arbeitsprozess</h2>
        <div className="grid md:grid-cols-6 gap-4 text-sm md:text-base">
          <div><strong>1. Beratung</strong><br />Bedarf & Ziele klären</div>
          <div><strong>2. Konzept</strong><br />Design & Funktionen planen</div>
          <div><strong>3. Entwicklung</strong><br />Website erstellen</div>
          <div><strong>4. Test</strong><br />Funktion & Performance prüfen</div>
          <div><strong>5. Launch</strong><br />Website live schalten</div>
          <div><strong>6. Support</strong><br />Laufende Betreuung</div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Starten Sie Ihr Projekt mit uns</h2>
        <p className="mb-6">
          Kontaktieren Sie uns für ein unverbindliches Gespräch und lassen Sie uns gemeinsam Ihre Online-Präsenz auf das nächste Level bringen.
        </p>
        <a
          href="/kontakt"
          className="bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold px-8 py-3 rounded"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </section>
    </div>
  );
}
