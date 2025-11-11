'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CTASection from '../../../components/WebdesignCTA';
import NewsletterSignup from '../../../components/NewsletterSignup';

// Format time function
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function MegamanFashion() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full min-h-[600px] md:h-[800px] bg-gradient-to-br from-[#646967] via-[#2a2d2c] to-[#050505] flex flex-col md:flex-row items-center relative px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        
        {/* Mobilde Arka Plan Görsel */}
        <div className="absolute inset-0 md:hidden z-0 opacity-40">
          <img
            src="/Megaman/MegamanStore3.png"
            alt="Megaman Jeans Streetwear Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#646967]/80 via-[#2a2d2c]/60 to-[#050505]/80"></div>
        </div>
        
        {/* Sol Taraf - Metin */}
        <div className="w-full md:w-2/3 pl-0 md:pl-8 lg:pl-32 pr-0 md:pr-8 lg:pr-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-block mb-8 md:mb-16">
              
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent leading-tight">
              Megaman Jeans: Professioneller Shopify Online Shop für Streetwear & Fashion
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 md:mb-8">
              Dank der Zusammenarbeit mit Ecommezzo präsentiert sich Megaman Jeans mit einem modernen Shopify E-Commerce Shop, 
              der exakt auf die Identität der Streetwear-Marke zugeschnitten ist. Das individuelle Setup mit optimiertem 
              Design, schnellen Ladezeiten und benutzerfreundlicher Navigation steigert den Online-Umsatz und die Conversion-Rate 
              für Denim, Hoodies, Holzfäller Hemden und Streetwear-Produkte erheblich.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 relative z-20">
              {[
                { value: "+150%", label: "Online Umsatz", color: "from-[#cd5729] to-[#cd5729]" },
                { value: "+95%", label: "Conversion Rate", color: "from-[#cd5729] to-[#cd5729]" },
                { value: "+180%", label: "Shop Traffic", color: "from-[#cd5729] to-[#cd5729]" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sağ Taraf - Ekranın Sağına Tamamen Yapışık Görsel */}
        <div className="hidden md:block absolute right-0 top-0 md:top-auto md:mt-40 w-full md:w-1/3 h-1/3 md:h-full mt-auto md:mt-40 z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            {/* Banner Uzunluğunda Görsel - Ekranın Sağına Tamamen Yapışık */}
            <div className="h-full w-full rounded-l-3xl flex items-center justify-center overflow-hidden">
              <img
                src="/Megaman/MegamanStore3.png"
                alt="Megaman Jeans Streetwear Shop"
                className="h-auto w-full object-cover rounded-l-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mobile Video Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Sol Taraf - Mobile Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-[#cd5729] rounded-3xl p-2 shadow-2xl">
                <div className="aspect-[432/750] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover rounded-2xl [&::-webkit-media-controls-play-button]:block [&::-webkit-media-controls-pause-button]:block [&::-webkit-media-controls-timeline]:block [&::-webkit-media-controls-current-time-display]:block [&::-webkit-media-controls-time-remaining-display]:block [&::-webkit-media-controls-mute-button]:hidden [&::-webkit-media-controls-volume-slider]:hidden [&::-webkit-media-controls-fullscreen-button]:hidden [&::-webkit-media-controls-overflow-button]:hidden [&::-webkit-media-controls-overflow-menu]:hidden"
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src="/Megaman/MegamanMobile.mp4" type="video/mp4" />
                    Download the
                    <a href="/Megaman/MegamanMobile.mp4">MP4</a>
                    video.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Sağ Taraf - Metin */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
                Mobile-First E-Commerce Design für maximale Conversion
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                Der Megaman Jeans Online Shop wurde mit einem Mobile-First Ansatz entwickelt, um die wachsende Zahl 
                mobiler Käufer optimal zu bedienen. Mit responsivem Design, schnellen Ladezeiten und intuitiver 
                Produktnavigation sorgt der Shopify Shop für eine nahtlose Shopping-Erfahrung auf Smartphones und Tablets, 
                was die Conversion-Rate bei Streetwear- und Fashion-Käufen deutlich steigert.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Optimierte Produktseiten für mobile Geräte</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Schneller Checkout-Prozess mit Apple Pay & PayPal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Touch-optimierte Warenkorb- und Produktnavigation</span>
                </div>
              </div>
              <a
                href="https://megamanjeans.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#cd5729] to-[#cd5729] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
              >
                <span>Zur Website</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mobile Screenshots Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-[#646967] via-[#2a2d2c] to-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4 md:mb-2">
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: " ",
                description: " ",
                image: "/Megaman/Megaman2.png"
              },
              {
                title: " ",
                description: " ",
                image: "/Megaman/Megaman3.png"
              },
              {
                title: " ",
                description: " ",
                image: "/Megaman/Megaman1.png"
              }
            ].map((screen, index) => (
              <motion.div
                key={screen.image || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Sadece Görsel */}
                <div className="relative mx-auto w-full max-w-[320px] h-[500px] sm:h-[550px] md:h-[650px] mb-2 mt-2">
                  <img
                    src={screen.image}
                    alt={`Megaman Jeans ${screen.title} - ${screen.description}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{screen.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
              E-Commerce Features & Shopify Funktionen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Shopify-Integration mit modernen Payment-Lösungen und optimierter Produktpräsentation für Streetwear & Fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🛒",
                title: "Shopify E-Commerce",
                description: "Professioneller Online Shop mit Warenkorb, Checkout und Bestellverwaltung"
              },
              {
                icon: "💳",
                title: "Multiple Payment-Methoden",
                description: "Klarna, PayPal, Apple Pay, Google Pay und alle gängigen Zahlungsarten"
              },
              {
                icon: "🔍",
                title: "SEO-Optimierung",
                description: "Optimierte Produktseiten für bessere Sichtbarkeit bei Streetwear & Fashion"
              },
              {
                icon: "⚡",
                title: "Schnelle Ladezeiten",
                description: "Optimierte Performance für bessere Conversion-Rate und User Experience"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <NewsletterSignup />
    </div>
  );
}
