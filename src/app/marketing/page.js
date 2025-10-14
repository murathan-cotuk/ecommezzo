'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Animated Number Component
function AnimatedNumber({ value, duration = 2, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let numericValue;
    if (value.includes('€') && value.includes('M')) {
      // €2.3M formatı için
      numericValue = parseFloat(value.replace(/[€M]/g, ''));
    } else {
      // Diğer formatlar için
      numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    }
    
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = numericValue * easeOutQuart;
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatValue = (val) => {
    if (value.includes('€') && value.includes('M')) {
      return '€' + val.toFixed(1) + 'M';
    } else if (value.includes('M')) {
      return (val / 1000000).toFixed(1) + 'M';
    } else if (value.includes('K')) {
      return (val / 1000).toFixed(0) + 'K';
    } else if (value.includes('%')) {
      return Math.round(val) + '%';
    } else if (value.includes('x')) {
      return val.toFixed(1) + 'x';
    } else if (value.includes('+')) {
      return Math.round(val) + '+';
    }
    return Math.round(val);
  };

  return (
    <span ref={ref} className="text-4xl font-bold text-orange-500 mb-2">
      {formatValue(displayValue)}{suffix}
    </span>
  );
}

export default function Marketing() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { value: "4.2x", label: "Durchschnittlicher ROAS", color: "from-green-400 to-emerald-600" },
    { value: "340%", label: "Conversion-Steigerung", color: "from-blue-400 to-cyan-600" },
    { value: "€2.3M", label: "Gesamtumsatz", color: "from-purple-400 to-pink-600" },
    { value: "89%", label: "Kundenzufriedenheit", color: "from-orange-400 to-red-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <style jsx global>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
      `}</style>
      {/* 1. Hero */}
      <main className="relative z-10">
          <section className="w-full min-h-[100vh] sm:h-[900px] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden" style={{backgroundImage: 'url(/MarketingHero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          
            {/* Metin ve Buton - Mobil Uyumlu */}
            <div className="w-full lg:w-1/2 lg:ml-auto pr-0 lg:pr-10 pt-20 pb-10 lg:pb-20 z-20 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pb-6 lg:pb-10 bg-gradient-to-r from-white via-[#beceaf] to-[#c3dcb1] bg-clip-text text-transparent">
              E-Commerce Marketing das Ihre Verkäufe steigert
              </h1>
              <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 pb-10 lg:pb-20 text-gray-300 leading-relaxed">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
              <a
                href="/kontakt"
                className="block w-fit mx-auto lg:mx-0"
              >
                <button className="px-4 sm:px-8 py-3 sm:py-6 bg-gradient-to-r from-[#c3dcb1] to-[#6f935f] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#708163] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3 text-sm sm:text-lg">
                Kontakt Aufnehmen
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </a>
            </div>

          </section>
        </main>
        <style jsx global>{`
          /* Mobile hero adjustments to mirror homepage behavior */
          @media (max-width: 1024px) {
            main > section:first-of-type {
              min-height: clamp(260px, 62vw, 560px);
              height: auto;
              padding-top: 0;
              padding-bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: none !important; /* disable inline cover bg */
              position: relative;
            }

            main > section:first-of-type > div:nth-of-type(1) {
              position: relative;
              z-index: 2;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
              max-width: 680px;
            }

            /* Left-half background on tablets */
            main > section:first-of-type::before {
              content: "";
              position: absolute;
              inset: 0;
              background-image: url('/MarketingHero.png');
              background-repeat: no-repeat;
              background-position: left center;
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
          }

          @media (max-width: 640px) {
            main > section:first-of-type {
              background: none !important;
              position: relative;
            }
            main > section:first-of-type::before {
              content: "";
              position: absolute;
              inset: 0;
              background-image: url('/MarketingHero.png');
              background-repeat: no-repeat;
              background-position: left 60%;
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
            main > section:first-of-type > div:nth-of-type(1) {
              transform: none;
              padding-top: 98px; /* start text a bit below navbar */
            }
          }
        `}</style>

      {/* 2. Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Unsere E-Commerce Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Von Amazon bis Shopify, von Meta bis Google - integrierte Lösungen, die Ihre Verkäufe auf allen Plattformen steigern
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Führende Agentur</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Als führende E-Commerce Marketing Agentur in Deutschland helfen wir Unternehmen dabei, ihre Online-Verkäufe zu maximieren.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ganzheitlicher Ansatz</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Unser ganzheitlicher Ansatz kombiniert bewährte Marketing-Strategien mit modernster Technologie für messbare Ergebnisse.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">5+ Jahre Erfahrung</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mit über 5 Jahren Erfahrung haben wir bereits Hunderten von Unternehmen geholfen, ihre Verkäufe zu steigern.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">E-Commerce Marketing ist mehr als nur Werbung</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Es geht darum, die richtige Zielgruppe zur richtigen Zeit mit der richtigen Botschaft zu erreichen. 
                    Wir verstehen die Komplexität des digitalen Marktes und entwickeln maßgeschneiderte Strategien, die Ihre Marke von der Konkurrenz abheben.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Zielgruppen-Analyse</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Timing-Optimierung</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Botschafts-Strategie</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Marken-Differenzierung</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🔍",
              title: "SEO & Organischer Traffic",
              description: "Erreichen Sie die Top-Positionen bei Google. Gewinnen Sie organischen Traffic durch Keyword-Strategien, technisches SEO und Content-Marketing.",
              features: ["Keyword-Analyse", "Technisches SEO", "Content-Strategie", "Link Building"],
              image: "/marketing-seo.jpg"
            },
            {
              icon: "📱",
              title: "Meta & Social Media",
              description: "Erreichen Sie Ihre Zielgruppe mit Facebook, Instagram und TikTok-Werbung. Optimieren Sie die Performance mit kreativen Kampagnen und A/B-Tests.",
              features: ["Facebook Ads", "Instagram Ads", "TikTok Marketing", "Social Commerce"],
              image: "/marketing-social.jpg"
            },
            {
              icon: "🛒",
              title: "Marketplace Marketing",
              description: "Heben Sie Ihre Produkte auf Plattformen wie Amazon, eBay und Trendyol hervor. PPC-Kampagnen und Listing-Optimierung.",
              features: ["Amazon PPC", "Marketplace SEO", "Product Listing", "Review Management"],
              image: "/marketing-marketplace.jpg"
            },
            {
              icon: "🎯",
              title: "Google Ads & Shopping",
              description: "Werden Sie bei Google sichtbar. Conversion-fokussierte Kampagnen mit Search, Shopping und Display-Werbung.",
              features: ["Google Shopping", "Search Ads", "Display Network", "YouTube Ads"],
              image: "/marketing-google.jpg"
            },
            {
              icon: "📊",
              title: "Analytics & Reporting",
              description: "Verfolgen Sie jeden Schritt. Steigern Sie die Performance durch detailliertes Reporting, ROAS-Analyse und kontinuierliche Optimierung.",
              features: ["ROAS Tracking", "Conversion Analytics", "A/B Testing", "Performance Reports"],
              image: "/marketing-analytics.jpg"
            },
            
            {
              icon: "🎯",
              title: "Zielgruppenanalyse & Targeting",
              description: "Identifizieren Sie Ihre perfekte Zielgruppe. Erstellen Sie präzise Buyer Personas und optimieren Sie Ihre Marketing-Strategien für maximale Conversion.",
              features: ["Buyer Personas", "Marktanalyse", "Zielgruppen-Segmentierung", "Customer Journey Mapping"],
              image: "/marketing-targeting.jpg"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              id={
                index === 0 ? "seo" : 
                index === 1 ? "social-media" : 
                index === 2 ? "amazon-ppc" : 
                index === 5 ? "target-audience" : 
                undefined
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">{service.icon}</div>
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ROAS & Performance Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Unsere Performance-Zahlen</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mit unserem datengetriebenen Ansatz steigern wir die Verkäufe unserer Kunden durchschnittlich um das 4,2-fache
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "4.2x", label: "Durchschnittlicher ROAS", description: "4,2€ Verkauf für jeden 1€ Werbeausgabe" },
              { number: "340%", label: "Conversion-Steigerung", description: "Durchschnittliche Conversion-Rate-Steigerung" },
              { number: "€2.3M", label: "Gesamtumsatz", description: "Gesamtumsatz, den wir für unsere Kunden generiert haben" },
              { number: "89%", label: "Kundenzufriedenheit", description: "Anteil unserer fortlaufenden Kunden" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
              >
                <AnimatedNumber value={stat.number} duration={2.5} />
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. Detailed E-Commerce Marketing Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              E-Commerce Marketing Strategien die funktionieren
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie wir Ihren Online-Shop zum Verkaufsschlager machen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Amazon Marketing & PPC Optimierung
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Amazon ist der größte Online-Marktplatz der Welt. Mit über 300 Millionen aktiven Kunden bietet Amazon 
                  unvergleichliche Möglichkeiten für E-Commerce Marketing. Unsere Amazon PPC Spezialisten optimieren Ihre 
                  Produktanzeigen für maximale Sichtbarkeit und Conversion-Raten.
                </p>
                <p>
                  <strong>Unsere Amazon Marketing Services:</strong> Sponsored Products, Sponsored Brands, Sponsored Display, 
                  Amazon DSP und automatische Kampagnen-Optimierung. Wir steigern Ihren Amazon ROAS durchschnittlich um 340%.
                </p>
                <p>
                  <strong>Warum Amazon Marketing wichtig ist:</strong> 89% der Käufer beginnen ihre Produktsuche auf Amazon. 
                  Ohne optimierte Amazon-Präsenz verpassen Sie Millionen potenzieller Kunden.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Amazon Marketing Erfolge</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  Durchschnittlich 4,2x ROAS auf Amazon
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  340% Steigerung der Conversion-Rate
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  €2,3M Gesamtumsatz für Kunden generiert
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  89% Kundenzufriedenheit
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl order-2 lg:order-1">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Google Ads & Shopping</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Google Shopping Kampagnen
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Search Ads Optimierung
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Display Network Targeting
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  YouTube Video Marketing
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Google Ads & Shopping Marketing
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Google Ads ist das Herzstück des E-Commerce Marketings. Mit über 8,5 Milliarden Suchanfragen täglich 
                  bietet Google unvergleichliche Reichweite für Ihre Produkte. Unsere Google Ads Experten entwickeln 
                  maßgeschneiderte Kampagnen für maximale Conversion-Raten.
                </p>
                <p>
                  <strong>Google Shopping Optimierung:</strong> Produktdaten-Feeds, negative Keywords, Gebotsstrategien 
                  und automatische Optimierungen. Wir steigern Ihren Google Ads ROAS durchschnittlich um das 4,2-fache.
                </p>
                <p>
                  <strong>Conversion-Optimierung:</strong> Landing Page Tests, A/B-Tests und kontinuierliche 
                  Performance-Analyse sorgen für nachhaltiges Wachstum Ihrer Online-Verkäufe.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Facebook & Instagram Marketing
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meta-Plattformen (Facebook & Instagram) sind unverzichtbar für modernes E-Commerce Marketing. 
                  Mit über 3 Milliarden aktiven Nutzern bieten diese Plattformen unvergleichliche Targeting-Möglichkeiten 
                  für Ihre Zielgruppe.
                </p>
                <p>
                  <strong>Social Media Marketing Strategien:</strong> Lookalike Audiences, Retargeting, 
                  Video-Marketing und Influencer-Kooperationen. Wir optimieren Ihre Social Media Kampagnen 
                  für maximale Engagement-Raten und Conversions.
                </p>
                <p>
                  <strong>E-Commerce Integration:</strong> Facebook Shop, Instagram Shopping und Social Commerce 
                  Lösungen für nahtlose Kaufprozesse direkt in den sozialen Medien.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Meta Marketing Vorteile</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Präzise Zielgruppenansprache
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Visuelles Produktmarketing
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Social Proof Integration
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Mobile-First Optimierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

             {/* 4. Why Choose Us Section */}
       <section className="py-20 px-6 bg-gray-50">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-5xl font-bold mb-6 text-gray-800">Warum Ecommezzo?</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
               Wir sind nicht nur eine Marketing-Agentur - wir sind Ihr strategischer Partner für nachhaltiges Wachstum
             </p>
             <div className="max-w-6xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-8 mb-12">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.1 }}
                   viewport={{ once: true }}
                   className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
                 >
                   <div className="flex items-center mb-6">
                     <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                       <span className="text-2xl">🎓</span>
                     </div>
                     <h3 className="text-2xl font-bold text-gray-800">Zertifizierte Experten</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed mb-4">
                     Unser Team aus zertifizierten Google Ads, Facebook Marketing und Amazon PPC Experten arbeitet täglich daran, 
                     Ihre Verkäufe zu maximieren und Ihre Marke auf allen relevanten Plattformen zu positionieren.
                   </p>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Google Ads</span>
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Facebook Marketing</span>
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Amazon PPC</span>
                   </div>
                 </motion.div>

                 <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
                 >
                   <div className="flex items-center mb-6">
                     <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                       <span className="text-2xl">📈</span>
                     </div>
                     <h3 className="text-2xl font-bold text-gray-800">89% Langzeitpartner</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed mb-4">
                     Wir messen unseren Erfolg an Ihrem Wachstum - deshalb sind 89% unserer Kunden langfristige Partner. 
                     Datengetriebene Entscheidungen und kontinuierliche Optimierung sind unser Erfolgsrezept.
                   </p>
                   <div className="flex items-center">
                     <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                       <div className="w-14 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                     </div>
                     <span className="text-sm font-medium text-green-600">89% Kundenzufriedenheit</span>
                   </div>
                 </motion.div>
               </div>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 viewport={{ once: true }}
                 className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
               >
                 <div className="flex items-start">
                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                     <span className="text-3xl">🛍️</span>
                   </div>
                   <div className="flex-1">
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">E-Commerce Marketing Expertise</h3>
                     <p className="text-lg text-gray-600 leading-relaxed mb-6">
                       Von Shopify über WooCommerce bis hin zu Amazon Seller Central - wir kennen alle wichtigen Plattformen 
                       und deren spezifischen Anforderungen. Unser ganzheitlicher Ansatz sorgt für konsistente Ergebnisse auf allen Kanälen.
                     </p>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       <div className="text-center p-4 bg-white rounded-xl border border-purple-100">
                         <div className="text-2xl mb-2">🛒</div>
                         <div className="text-sm font-medium text-gray-700">Shopify</div>
                       </div>
                       <div className="text-center p-4 bg-white rounded-xl border border-purple-100">
                         <div className="text-2xl mb-2">🌐</div>
                         <div className="text-sm font-medium text-gray-700">WooCommerce</div>
                       </div>
                       <div className="text-center p-4 bg-white rounded-xl border border-purple-100">
                         <div className="text-2xl mb-2">📦</div>
                         <div className="text-sm font-medium text-gray-700">Amazon</div>
                       </div>
                       <div className="text-center p-4 bg-white rounded-xl border border-purple-100">
                         <div className="text-2xl mb-2">🔗</div>
                         <div className="text-sm font-medium text-gray-700">Alle Kanäle</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             </div>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 icon: "🎯",
                 title: "ROAS-Fokussiert",
                 description: "Jede Kampagne ist darauf ausgelegt, Ihren Return on Ad Spend zu maximieren. Wir messen Erfolg in Zahlen, nicht in Likes.",
                 color: "from-green-400 to-emerald-600"
               },
               {
                 icon: "📊",
                 title: "Datengetrieben",
                 description: "Entscheidungen basieren auf echten Daten, nicht auf Vermutungen. Kontinuierliche Analyse und Optimierung für beste Ergebnisse.",
                 color: "from-blue-400 to-cyan-600"
               },
               {
                 icon: "🚀",
                 title: "Schnelle Umsetzung",
                 description: "Von der Strategie bis zur Kampagne in 48 Stunden. Wir handeln schnell, um Ihre Konkurrenz zu überholen.",
                 color: "from-purple-400 to-pink-600"
               },
               {
                 icon: "🤝",
                 title: "Langfristige Partnerschaft",
                 description: "Wir bauen langfristige Beziehungen auf. Ihr Erfolg ist unser Erfolg - wir wachsen gemeinsam mit Ihnen.",
                 color: "from-orange-400 to-red-600"
               }
             ].map((feature, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
               >
                 <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6`}>
                   {feature.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                 <p className="text-gray-600">{feature.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

      {/* 5. Process Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">Unser Arbeitsprozess</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 4 Schritten steigern wir Ihre E-Commerce-Verkäufe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Analyse & Strategie",
              description: "Wir analysieren Ihre aktuelle Situation und führen Zielgruppen- und Marktforschung durch.",
              icon: "🔍"
            },
            {
              step: "02", 
              title: "Kampagnen-Design",
              description: "Wir erstellen eine maßgeschneiderte Kampagnenstrategie und entwickeln kreative Inhalte.",
              icon: "🎨"
            },
            {
              step: "03",
              title: "Umsetzung & Optimierung",
              description: "Wir starten die Kampagnen und optimieren die Performance kontinuierlich mit A/B-Tests.",
              icon: "⚡"
            },
            {
              step: "04",
              title: "Reporting & Wachstum",
              description: "Wir liefern detaillierte Berichte und entwickeln neue Strategien für kontinuierliches Wachstum.",
              icon: "📈"
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <div className="text-4xl mb-4">{process.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. E-Commerce Marketing Benefits & FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Häufige Fragen zum E-Commerce Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles was Sie über professionelles E-Commerce Marketing wissen müssen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">❓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Warum ist E-Commerce Marketing wichtig?
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Steigende Online-Käufe</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Über 80% der Deutschen kaufen regelmäßig online ein. Ohne professionelles E-Commerce Marketing 
                      verpassen Sie diese riesige Zielgruppe und verlieren Marktanteile an die Konkurrenz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Wettbewerbsvorteil</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Der E-Commerce Markt wird immer wettbewerbsintensiver. Nur mit strategischem Marketing 
                      können Sie sich von der Masse abheben und Kunden gewinnen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Skalierbarkeit</h4>
                    <p className="text-gray-600 leading-relaxed">
                      E-Commerce Marketing ermöglicht es, Ihr Geschäft schnell und kosteneffizient zu skalieren. 
                      Mit den richtigen Strategien können Sie Ihr Umsatzvolumen exponentiell steigern.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Welche Kanäle sind am effektivsten?
                </h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg">🔍</span>
                    </div>
                    <h4 className="font-bold text-gray-800">Google Ads & Shopping</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Mit 8,5 Milliarden Suchanfragen täglich ist Google der wichtigste Kanal für Produktsuchen.
                  </p>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">4,2x ROAS</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg">📦</span>
                    </div>
                    <h4 className="font-bold text-gray-800">Amazon Marketing</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Als größter Online-Marktplatz ist Amazon unverzichtbar für E-Commerce Erfolg.
                  </p>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">340% Conversion</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg">📱</span>
                    </div>
                    <h4 className="font-bold text-gray-800">Facebook & Instagram</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Meta-Plattformen bieten unvergleichliche Targeting-Möglichkeiten für visuelle Produkte.
                  </p>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Brand Building</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">ROAS Optimierung</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wir optimieren jeden Werbe-Euro für maximale Rendite. Durch kontinuierliche A/B-Tests und 
                datengetriebene Optimierungen erreichen wir durchschnittlich 4,2x ROAS für unsere Kunden.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-lg">4.2x</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Durchschnittlicher</div>
                    <div className="text-sm font-medium text-gray-700">ROAS</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">€</div>
                  <div className="text-xs text-gray-500">Rendite</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">Conversion Optimierung</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Von Landing Pages bis Checkout-Prozess - wir optimieren jeden Schritt des Customer Journey 
                für maximale Conversion-Raten. Durchschnittlich 340% Steigerung der Conversion-Rate.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-lg">340%</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Conversion</div>
                    <div className="text-sm font-medium text-gray-700">Steigerung</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">↑</div>
                  <div className="text-xs text-gray-500">Wachstum</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">Omnichannel Marketing</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Integrierte Strategien über alle Kanäle hinweg. Von Amazon bis Shopify, von Google bis Facebook - 
                wir sorgen für konsistente Botschaften und maximale Reichweite.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold text-lg">∞</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Alle</div>
                    <div className="text-sm font-medium text-gray-700">Kanäle</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">🔗</div>
                  <div className="text-xs text-gray-500">Integration</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* 7. Ultimate CTA Section */}
       <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0">
           <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 animate-pulse"></div>
           <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
           <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
         </div>

         <div className="relative z-10 max-w-6xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             {/* Main Headline */}
             <motion.h2 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
             >
               Bereit für den Durchbruch?
             </motion.h2>

             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-2xl md:text-3xl mb-12 text-gray-800 max-w-4xl mx-auto leading-relaxed"
             >
               Verwandeln Sie Ihre E-Commerce-Träume in Realität. 
               <span className="text-orange-600 font-semibold"> Jetzt ist der Moment</span> für exponentielles Wachstum.
             </motion.p>

             {/* SEO Content Cards */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               viewport={{ once: true }}
               className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
             >
               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg">
                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">⚡</span>
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 mb-2">Schnelle Umsetzung</h3>
                 <p className="text-gray-600 text-sm">Von der Strategie bis zur Kampagne in nur 48 Stunden</p>
               </div>
               
               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-lg">
                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">📊</span>
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 mb-2">Messbare Ergebnisse</h3>
                 <p className="text-gray-600 text-sm">Durchschnittlich 4,2x ROAS und 340% Conversion-Steigerung</p>
               </div>
               
               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-100 shadow-lg">
                 <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl">🤝</span>
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 mb-2">Langfristige Partnerschaft</h3>
                 <p className="text-gray-600 text-sm">89% unserer Kunden bleiben langfristig bei uns</p>
               </div>
             </motion.div>

             {/* SEO Benefits Text */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               viewport={{ once: true }}
               className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl mb-12 max-w-4xl mx-auto"
             >
               <h3 className="text-2xl font-bold text-gray-800 mb-6">Warum jetzt handeln?</h3>
               <div className="grid md:grid-cols-2 gap-6 text-left">
                 <div>
                   <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                     <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 text-sm">1</span>
                     E-Commerce Boom nutzen
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     Der Online-Handel wächst jährlich um 15%. Jeder Tag ohne professionelles Marketing kostet Sie potenzielle Kunden und Marktanteile.
                   </p>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                     <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 text-sm">2</span>
                     Konkurrenzvorteil sichern
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     Während andere noch planen, starten Sie durch. Mit unseren bewährten Strategien überholen Sie die Konkurrenz in kürzester Zeit.
                   </p>
                 </div>
               </div>
             </motion.div>

             {/* CTA Button */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               viewport={{ once: true }}
               className="mb-1"
             >
               <motion.button
                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
                 whileTap={{ scale: 0.95 }}
                 className="group relative px-16 py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl rounded-2xl shadow-2xl overflow-hidden"
                 onClick={() => window.location.href = '/kontakt'}
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <span className="relative z-10 flex items-center gap-3">
                   
                   Jetzt kontaktieren
                   <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </span>
               </motion.button>
             </motion.div>

             {/* Trust Indicators */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               viewport={{ once: true }}
               className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500"
             >
               <div className="flex items-center gap-2">
                 <span className="text-green-500">✓</span>
                 <span className="text-sm">Kostenlose Erstberatung</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-green-500">✓</span>
                 <span className="text-sm">Keine langfristigen Verträge</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-green-500">✓</span>
                 <span className="text-sm">Messbare Ergebnisse garantiert</span>
               </div>
             </motion.div>
             
           </motion.div>
         </div>
       </section>
     </div>
   );
 }
