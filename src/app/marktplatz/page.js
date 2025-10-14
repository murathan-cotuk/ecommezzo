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
      numericValue = parseFloat(value.replace(/[€M]/g, ''));
    } else {
      numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    }
    
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
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

export default function Marktplatz() {
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
          <section className="w-full min-h-[100vh] sm:h-[900px] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden" style={{backgroundImage: 'url(/MarktplatzHero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          
            {/* Metin ve Buton - Mobil Uyumlu */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-40 pt-20 pb-10 lg:pb-20 z-20 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pb-6 lg:pb-10 bg-gradient-to-r from-white via-[#0dc7ee] to-[#2cbdef] bg-clip-text text-transparent">
              Marktplatz Verwaltung das Ihre Verkäufe steigert
              </h1>
              <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 pb-10 lg:pb-20 text-gray-300 leading-relaxed">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
              <a
                href="/kontakt"
                className="block w-fit mx-auto lg:mx-0"
              >
                <button className="px-4 sm:px-8 py-3 sm:py-6 bg-gradient-to-r from-[#83c5dc] to-[#2998be] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#476b78] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3 text-sm sm:text-lg">
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
            /* Right-half background on tablets */
            main > section:first-of-type::before {
              content: "";
              position: absolute;
              inset: 0;
              background-image: url('/MarktplatzHero.png');
              background-repeat: no-repeat;
              background-position: right center;
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
              background-image: url('/MarktplatzHero.png');
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
            Unsere Marktplatz Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Von Amazon bis Zalando - professionelle Betreuung auf allen wichtigen Marktplätzen
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Marktplatz-Experten</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Als spezialisierte Marktplatz Marketing Agentur verstehen wir die einzigartigen Herausforderungen 
                  von Amazon, eBay, Otto und Zalando.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">3,8x ROAS</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mit über 5 Jahren Erfahrung im Marktplatz Marketing steigern wir die Verkäufe unserer Kunden 
                  durchschnittlich um das 3,8-fache.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Internationale Expansion</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Von Deutschland bis USA - wir helfen Ihnen dabei, neue Märkte zu erschließen und 
                  Ihr Geschäft global zu skalieren.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-orange-50 p-8 rounded-2xl border border-gray-200"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Marktplatz Marketing ist mehr als nur Listing-Optimierung</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Es geht darum, die richtige Plattform zur richtigen Zeit mit der richtigen Strategie zu erreichen. 
                    Wir verstehen die Komplexität jedes Marktplatzes und entwickeln maßgeschneiderte Lösungen für maximale Sichtbarkeit.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Amazon PPC</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">eBay Marketing</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Otto Partner</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Zalando Partner</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🛒",
              title: "Amazon Management",
              description: "Vollständige Betreuung Ihrer Amazon-Präsenz. Von Listing-Optimierung bis PPC-Kampagnen.",
              features: ["Amazon PPC", "Listing-Optimierung", "Review Management", "FBA-Beratung"],
              platforms: ["Amazon.de", "Amazon.com", "Amazon EU"]
            },
            {
              icon: "🏪",
              title: "Otto & Zalando",
              description: "Premium-Marktplätze für Mode und Lifestyle. Spezialisiert auf Fashion- und Beauty-Branche.",
              features: ["Otto Partner", "Zalando Partner", "Fashion SEO", "Brand Management"],
              platforms: ["Otto.de", "Zalando.de", "Zalando EU"]
            },
            {
              icon: "💼",
              title: "eBay",
              description: "Maximieren Sie Ihre Reichweite auf eBay und eBay Kleinanzeigen mit strategischem Management.",
              features: ["eBay Stores", "Auktionen", "Kleinanzeigen", "B2B-Verkäufe"],
              platforms: ["eBay.de", "eBay.com", "eBay Kleinanzeigen"]
            },
            {
              icon: "🌍",
              title: "Internationale Märkte",
              description: "Erweitern Sie Ihren Horizont. Betreuung auf internationalen Marktplätzen weltweit.",
              features: ["Global Expansion", "Multi-Market", "Lokalisierung", "Compliance"],
              platforms: ["Amazon Global", "eBay International", "Alibaba"]
            },
            {
              icon: "📊",
              title: "Analytics & Reporting",
              description: "Detaillierte Einblicke in Ihre Marktplatz-Performance mit umfassenden Reports.",
              features: ["Performance Tracking", "ROAS-Analyse", "Konkurrenzanalyse", "Trend-Monitoring"],
              platforms: ["Alle Plattformen"]
            },
            {
              icon: "🚀",
              title: "Launch & Growth",
              description: "Neue Produkte erfolgreich auf Marktplätzen launchen und nachhaltig wachsen.",
              features: ["Product Launch", "Market Entry", "Scaling", "Optimierung"],
              platforms: ["Alle Plattformen"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Unterstützte Plattformen:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
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
            <h2 className="text-5xl font-bold mb-6">Unsere Marktplatz-Performance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mit unserem datengetriebenen Ansatz steigern wir die Marktplatz-Verkäufe unserer Kunden durchschnittlich um das 3,8-fache
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "3.8x", label: "Durchschnittlicher ROAS", description: "3,8€ Verkauf für jeden 1€ Werbeausgabe" },
              { number: "280%", label: "Conversion-Steigerung", description: "Durchschnittliche Conversion-Rate-Steigerung" },
              { number: "€1.8M", label: "Marktplatz-Umsatz", description: "Gesamtumsatz auf allen Marktplätzen" },
              { number: "92%", label: "Kundenzufriedenheit", description: "Anteil unserer fortlaufenden Kunden" }
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
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Warum Ecommezzo für Marktplätze?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wir sind nicht nur eine Marketing-Agentur - wir sind Ihr strategischer Partner für nachhaltiges Marktplatz-Wachstum
            </p>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Marktplatz-Spezialisten</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Unser Team aus zertifizierten Amazon, eBay, Otto und Zalando Experten arbeitet täglich daran, 
                    Ihre Marktplatz-Präsenz zu optimieren und Ihre Verkäufe zu maximieren.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Amazon PPC</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">eBay Marketing</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Otto Partner</span>
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
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">92% Langzeitpartner</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Wir messen unseren Erfolg an Ihrem Marktplatz-Wachstum - deshalb sind 92% unserer Kunden langfristige Partner. 
                    Datengetriebene Entscheidungen und kontinuierliche Optimierung sind unser Erfolgsrezept.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-15 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">92% Kundenzufriedenheit</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Internationale Marktplatz-Expansion</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Von Amazon Deutschland bis Amazon USA, von eBay bis Alibaba - wir kennen alle wichtigen Marktplätze 
                      und deren spezifischen Anforderungen. Unser ganzheitlicher Ansatz sorgt für konsistente Ergebnisse auf allen Plattformen.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                        <div className="text-2xl mb-2">🛒</div>
                        <div className="text-sm font-medium text-gray-700">Amazon</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                        <div className="text-2xl mb-2">🏪</div>
                        <div className="text-sm font-medium text-gray-700">eBay</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                        <div className="text-2xl mb-2">👔</div>
                        <div className="text-sm font-medium text-gray-700">Otto</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                        <div className="text-2xl mb-2">👗</div>
                        <div className="text-sm font-medium text-gray-700">Zalando</div>
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
                title: "Marktplatz-Experten",
                description: "Unser Team kennt jeden Marktplatz von innen. Von Amazon bis Zalando - wir sprechen die Sprache der Plattformen.",
                color: "from-green-400 to-emerald-600"
              },
              {
                icon: "📊",
                title: "Datengetrieben",
                description: "Entscheidungen basieren auf echten Marktplatz-Daten, nicht auf Vermutungen. Kontinuierliche Analyse für beste Ergebnisse.",
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
          <h2 className="text-5xl font-bold mb-6 text-gray-800">Unser Marktplatz-Prozess</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 4 Schritten steigern wir Ihre Marktplatz-Verkäufe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Marktplatz-Analyse",
              description: "Wir analysieren Ihre aktuelle Marktplatz-Präsenz und identifizieren Optimierungspotenziale.",
              icon: "🔍"
            },
            {
              step: "02", 
              title: "Strategie-Entwicklung",
              description: "Wir erstellen eine maßgeschneiderte Marktplatz-Strategie für Ihre Ziele und Zielgruppen.",
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

      {/* 6. Ultimate CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 overflow-hidden">
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
              Bereit für Marktplatz-Erfolg?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl mb-12 text-gray-800 max-w-4xl mx-auto leading-relaxed"
            >
              Verwandeln Sie Ihre Marktplatz-Träume in Realität. 
              <span className="text-orange-600 font-semibold"> Jetzt ist der Moment</span> für exponentielles Marktplatz-Wachstum.
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
                <p className="text-gray-600 text-sm">Von der Marktplatz-Strategie bis zur Kampagne in nur 48 Stunden</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Messbare Ergebnisse</h3>
                <p className="text-gray-600 text-sm">Durchschnittlich 3,8x ROAS und 280% Conversion-Steigerung</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-100 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Langfristige Partnerschaft</h3>
                <p className="text-gray-600 text-sm">92% unserer Kunden bleiben langfristig bei uns</p>
              </div>
            </motion.div>

            {/* SEO Benefits Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-white/90 to-orange-50/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl mb-12 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Warum jetzt auf Marktplätzen handeln?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 text-sm">1</span>
                    Marktplatz-Boom nutzen
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Über 60% aller Online-Käufe finden auf Marktplätzen statt. Jeder Tag ohne professionelles Marktplatz-Marketing 
                    kostet Sie potenzielle Kunden und Marktanteile.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 text-sm">2</span>
                    Konkurrenzvorteil sichern
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Während andere noch planen, starten Sie durch. Mit unseren bewährten Marktplatz-Strategien 
                    überholen Sie die Konkurrenz in kürzester Zeit.
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
                <span className="text-sm">Kostenlose Marktplatz-Analyse</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Keine langfristigen Verträge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Messbare Marktplatz-Ergebnisse</span>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}
