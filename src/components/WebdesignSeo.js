'use client';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function SeoSection() {
  return (
    <section id="seo" className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-32 px-6 relative overflow-hidden">
                 {/* Subtle Animated Background Elements */}
         <motion.div
           className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
           animate={{
             rotate: [0, 360],
             scale: [1, 1.02, 1],
           }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
         >
           <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full"></div>
           <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-100/25 rounded-full"></div>
           <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-100/20 rounded-full"></div>
         </motion.div>

                 {/* Floating Search Elements */}
         <motion.div
           className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
           animate={{
             y: [0, -20, 0],
             x: [0, 15, 0],
             rotate: [0, 5, -5, 0],
           }}
           transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
         >
           <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-200/40 rounded-full"></div>
           <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-blue-200/35 rounded-full"></div>
           <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-green-200/30 rounded-full"></div>
         </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
                     {/* Hero Section with 3D Banner Effect */}
           <motion.div 
             className="text-center mb-24 relative z-20"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
           >
            {/* 3D Banner Background */}
            <div className="relative mb-12">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl transform rotate-1 scale-105 opacity-20"
                animate={{ rotate: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl transform -rotate-1 scale-105 opacity-30"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
              ></motion.div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <motion.div
                  animate={{ 
                    rotate: [0, -3, 3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="inline-block mb-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <span className="text-3xl">🔍</span>
                  </div>
                </motion.div>
                <h2
                  className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:100%_200%] bg-bottom leading-[1.3] relative z-20"
                  style={{
                    backgroundSize: "100% 300%",
                    backgroundPosition: "0% 100%"
                  }}
                >
                  SEO & Google Experte
                </h2>
                <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
                  <span className="font-bold text-blue-600">Google Ranking Spezialist</span> für maximale Sichtbarkeit. 
                  Wir optimieren Ihre Website für <span className="font-bold text-purple-600">Google</span> und 
                  sorgen für <span className="font-bold text-indigo-600">mehr Traffic & Umsatz</span> durch bessere Rankings.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3-Section Banner with Overlapping Cards */}
          <div className="relative mb-24">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Keyword Research",
                  desc: "Professionelle Keyword-Analyse für Ihre Branche",
                  color: "from-blue-500 to-cyan-500",
                  features: ["Long-tail Keywords", "Search Volume", "Competition Analysis"],
                  delay: 0.2
                },
                {
                  icon: "📊",
                  title: "Technical SEO",
                  desc: "Technische Optimierung für beste Performance",
                  color: "from-purple-500 to-pink-500",
                  features: ["Page Speed", "Mobile Optimization", "Schema Markup"],
                  delay: 0.4
                },
                {
                  icon: "📝",
                  title: "Content SEO",
                  desc: "Content-Optimierung für bessere Rankings",
                  color: "from-indigo-500 to-blue-500",
                  features: ["On-Page SEO", "Meta Tags", "Content Strategy"],
                  delay: 0.6
                }
              ].map(({ icon, title, desc, color, features, delay }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 100, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 3,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-300 transition-all duration-200 transform perspective-1000 relative z-10"
                  style={{ zIndex: 10 - i }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-105 group-hover:rotate-3 transition-all duration-200`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">{icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{desc}</p>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + 0.1 * index }}
                        viewport={{ once: true }}
                                                 className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                      >
                                                 <motion.span 
                           className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-200"
                           whileHover={{ scale: 1.2 }}
                         ></motion.span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Accordion Section */}
          <motion.div 
            className="bg-white rounded-3xl p-8 mb-24 shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Google Tools & Analytics</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Analytics */}
              <div>
                <h4 className="text-xl font-semibold mb-8 text-blue-600 flex items-center">
                  <span className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center text-white text-lg font-bold">📈</span>
                  Analytics & Tracking
                </h4>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Google Analytics 4", 
                      desc: "Vollständige Website-Analyse und Tracking",
                      icon: "📊",
                      features: ["User Behavior", "Conversion Tracking", "Real-time Data"],
                      color: "blue"
                    },
                    { 
                      title: "Google Search Console", 
                      desc: "Überwachung der Google-Sichtbarkeit",
                      icon: "🔍",
                      features: ["Search Performance", "Indexing Status", "Core Web Vitals"],
                      color: "purple"
                    },
                    { 
                      title: "Google Ads Integration", 
                      desc: "PPC-Kampagnen und Conversion-Optimierung",
                      icon: "💰",
                      features: ["Ad Performance", "ROI Tracking", "Keyword Optimization"],
                      color: "green"
                    }
                  ].map(({ title, desc, icon, features, color }, index) => (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                                             <motion.div 
                         className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                         whileHover={{ 
                           x: 5,
                           transition: { duration: 0.15 }
                         }}
                       >
                         <span className="text-2xl mr-4 group-hover:scale-105 transition-transform duration-200">{icon}</span>
                        <div className="flex-1">
                                                     <h5 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {features.map((feature, i) => (
                              <span key={i} className={`text-xs bg-${color}-100 text-${color}-700 px-2 py-1 rounded-full`}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - SEO Tools */}
              <div>
                <h4 className="text-xl font-semibold mb-8 text-purple-600 flex items-center">
                  <span className="w-10 h-10 bg-purple-500 rounded-full mr-4 flex items-center justify-center text-white text-lg font-bold">⚡</span>
                  SEO Tools & Optimization
                </h4>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Technical SEO Audit", 
                      desc: "Umfassende technische Website-Analyse",
                      icon: "🔧",
                      features: ["Page Speed", "Mobile-First", "Core Web Vitals"],
                      color: "indigo"
                    },
                    { 
                      title: "Local SEO", 
                      desc: "Optimierung für lokale Suchergebnisse",
                      icon: "📍",
                      features: ["Google My Business", "Local Citations", "Review Management"],
                      color: "blue"
                    },
                    { 
                      title: "Content Optimization", 
                      desc: "SEO-optimierte Content-Erstellung",
                      icon: "✍️",
                      features: ["Keyword Integration", "Meta Descriptions", "Internal Linking"],
                      color: "purple"
                    }
                  ].map(({ title, desc, icon, features, color }, index) => (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                                             <motion.div 
                         className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 cursor-pointer"
                         whileHover={{ 
                           x: -5,
                           transition: { duration: 0.15 }
                         }}
                       >
                         <span className="text-2xl mr-4 group-hover:scale-105 transition-transform duration-200">{icon}</span>
                        <div className="flex-1">
                                                     <h5 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">{title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {features.map((feature, i) => (
                              <span key={i} className={`text-xs bg-${color}-100 text-${color}-700 px-2 py-1 rounded-full`}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
