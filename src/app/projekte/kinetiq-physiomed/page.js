'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Format time function
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function KinetiqPhysioMed() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full h-[800px] bg-gradient-to-br from-[#008080] via-[#008080] to-[#008080] flex items-center relative">
        
        {/* Sol Taraf - Metin */}
        <div className="w-2/3 pl-32 pr-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-16"
            >
              
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent leading-tight">
              Wie Kinetiq PhysioMed zu einem einzigartigen Shop mit uns erhalten
            </h1>
            
            <p className="text-xl text-white leading-relaxed mb-8">
              Dank der Zusammenarbeit mit Ecommezzo präsentiert sich Kinetiq PhysioMed in einem einzigartigen Physio Website, 
              der exakt auf Identität & Anforderungen der Unternehmen zugeschnitten ist. Das individuelle Setup fußt auf 
              modernsten Best Practises, verkörpert exakt das Design und hebt die traffic für patienten, pflegeheimen und 
              bewerbern effektiv auf ein neues Level.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "+120%", label: "Traffic Steigerung", color: "from-[#cd5729] to-[#cd5729]" },
                { value: "+85%", label: "Conversion Rate", color: "from-[#cd5729] to-[#cd5729]" },
                { value: "+200%", label: "Neue Leads", color: "from-[#cd5729] to-[#cd5729]" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sağ Taraf - Ekranın Sağına Tamamen Yapışık Görsel */}
        <div className="absolute right-0 top-50 w-1/3 mt-40">
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full"
          >
            {/* Banner Uzunluğunda Görsel - Ekranın Sağına Tamamen Yapışık */}
            <div className="h-full rounded-l-3xl shadow-2xl flex items-center justify-center">
              <img
                src="/KinetiqPhysioMed/Kinetiq2.jpg"
                alt="Kinetiq PhysioMed Website"
                className="h-full w-full object-cover rounded-l-3xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mobile Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Mobile Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#cd5729] rounded-3xl p-2 shadow-2xl">
                <div className="aspect-[9/11] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover rounded-2xl [&::-webkit-media-controls-play-button]:block [&::-webkit-media-controls-pause-button]:block [&::-webkit-media-controls-timeline]:block [&::-webkit-media-controls-current-time-display]:block [&::-webkit-media-controls-time-remaining-display]:block [&::-webkit-media-controls-mute-button]:hidden [&::-webkit-media-controls-volume-slider]:hidden [&::-webkit-media-controls-fullscreen-button]:hidden [&::-webkit-media-controls-overflow-button]:hidden [&::-webkit-media-controls-overflow-menu]:hidden"
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src="/KinetiqPhysioMed/KinetiqMobile.mp4" type="video/mp4" />
                    Download the
                    <a href="/KinetiqPhysioMed/KinetiqMobile.mp4">MP4</a>
                    video.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Sağ Taraf - Metin */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Mobile-First Design für optimale Benutzererfahrung
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Die mobile Version der Kinetiq PhysioMed Website wurde speziell für Smartphones und Tablets optimiert. 
                Mit einem responsiven Design sorgt sie für eine nahtlose Benutzererfahrung auf allen Geräten und 
                maximiert die Conversion-Rate bei mobilen Nutzern.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4"></div>
                  <span className="text-gray-700">Responsive Design für alle Bildschirmgrößen</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4"></div>
                  <span className="text-gray-700">Optimierte Ladezeiten für mobile Geräte</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#cd5729] rounded-full mr-4"></div>
                  <span className="text-gray-700">Touch-optimierte Navigation und Buttons</span>
                </div>
              </div>
              <a
                href="https://kinetiq-physiomed.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#cd5729] to-[#cd5729] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Zur Website</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mobile Screenshots Section */}
      <section className="py-10 px-6 bg-[#008080]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: " ",
                description: " ",
                image: "/KinetiqPhysioMed/KinetiqSS1.png"
              },
              {
                title: " ",
                description: " ",
                image: "/KinetiqPhysioMed/KinetiqSS1.png"
              },
              {
                title: " ",
                description: " ",
                image: "/KinetiqPhysioMed/KinetiqSS1.png"
              }
            ].map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Sadece Görsel */}
                <div className="relative mx-auto w-80 h-[650px] mb-2 mt-2">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{screen.title}</h3>
                <p className="text-white/80">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
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
              Website-Features & Funktionen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne Technologien und benutzerfreundliche Features für optimale Performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📅",
                title: "Online-Terminbuchung",
                description: "Einfache und intuitive Terminbuchung für Patienten"
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description: "Optimiert für alle Geräte und Bildschirmgrößen"
              },
              {
                icon: "🔍",
                title: "SEO-Optimierung",
                description: "Bessere Sichtbarkeit in Suchmaschinen"
              },
              {
                icon: "⚡",
                title: "Schnelle Ladezeiten",
                description: "Optimierte Performance für bessere User Experience"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
}
