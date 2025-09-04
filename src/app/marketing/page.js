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
          <section className="w-full h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
            
            {/* 5 Eşit Parçalı Mobil Website Görselleri - Arka Plan */}
            <div className="absolute left-0 top-0 w-full h-full flex">
              
            

            </div>

            {/* Degrade Kaplama - Kayan Görsellerin Üstünde */}
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gray-950 via-gray-950/50 to-gray-400/40 z-20"></div>

            {/* Metin ve Buton - Sol Taraf */}
            <div className="w-1/2 pl-40 pt-20 z-20">
              <h1 className="text-7xl font-bold text-left pb-10 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Professionelles Webdesign für Ihren Erfolg
              </h1>
              <p className="text-lg mt-4 max-w-xl text-left pb-20 text-gray-300 leading-relaxed">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
              <a
                href="/kontakt"
                className="px-8 py-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3 text-lg"
              >
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Jetzt kostenloses Beratungsgespräch vereinbaren
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

          </section>
        </main>

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Amazon bis Shopify, von Meta bis Google - integrierte Lösungen, die Ihre Verkäufe auf allen Plattformen steigern
          </p>
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
              icon: "🤖",
              title: "Automatisierung & CRM",
              description: "Automatisieren Sie Ihre Verkaufsprozesse mit E-Mail-Marketing, Retargeting und Kundensegmentierung.",
              features: ["Email Marketing", "Retargeting", "Customer Segmentation", "Sales Funnel"],
              image: "/marketing-automation.jpg"
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
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Wir sind nicht nur eine Marketing-Agentur - wir sind Ihr strategischer Partner für nachhaltiges Wachstum
             </p>
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

       {/* 7. Ultimate CTA Section */}
       <section className="relative py-32 px-6 bg-white">

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
               className="text-2xl md:text-3xl mb-16 text-gray-800 max-w-4xl mx-auto leading-relaxed"
             >
               Verwandeln Sie Ihre E-Commerce-Träume in Realität. 
               <span className="text-orange-600 font-semibold"> Jetzt ist der Moment</span> für exponentielles Wachstum.
             </motion.p>

             {/* CTA Button */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
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
                 <span className="relative z-10">
                   Kostenlose Analyse
                 </span>
               </motion.button>
             </motion.div>
             
           </motion.div>
         </div>
       </section>
     </div>
   );
 }
