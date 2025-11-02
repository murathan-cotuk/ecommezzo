"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function DeepVisionPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Übersicht' },
    { id: 'features', label: 'Funktionen' },
    { id: 'why-deepvision', label: 'Warum DeepVision?' },
    { id: 'how-it-works', label: 'Wie es funktioniert' },
    { id: 'benefits', label: 'Vorteile' },
    { id: 'pricing', label: 'Preise' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Full Screen Dark Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-gray-900 via-indigo-950 to-gray-900 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 md:pb-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(rgba(143, 24, 24, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 24, 24, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4 sm:py-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-flex items-center bg-[#8f1818]/20 backdrop-blur-sm border border-[#8f1818]/30 text-[#8f1818] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 md:mb-6"
            >
              <div className="w-2 h-2 bg-[#8f1818] rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              AI-Powered Analytics Platform
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6"
            >
              <div className="flex justify-center">
                <span className="bg-gradient-to-r from-white via-[#8f1818] to-white bg-clip-text text-transparent">
                  {"DeepVision".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block cursor-pointer"
                      whileHover={{
                        y: -8,
                        scale: 1.1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      whileTap={{
                        y: -4,
                        scale: 1.05,
                        transition: {
                          duration: 0.1
                        }
                      }}
                      style={{
                        display: 'inline-block',
                        marginRight: letter === ' ' ? '0.2em' : '0'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </div>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light">
                Analytics
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-3 sm:mb-4 md:mb-6 leading-relaxed px-2"
            >
              Revolutionäre KI-gestützte Kundenverhaltensanalyse für Shopify-Stores.  
              <span className="text-[#8f1818] font-semibold"> Echtzeit-Insights</span> die Ihr Business transformieren.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex justify-center items-center mb-2 sm:mb-3 md:mb-4"
            >
              <motion.a
                href="/deepvision-app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-[#8f1818] to-[#6b1212] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-[#8f1818]/25 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  Kostenlose Testversion starten
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-1 sm:mt-2 md:mt-3 max-w-4xl mx-auto px-2 sm:px-0"
            >
              <div className="text-center">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8f1818] mb-0.5 sm:mb-1 md:mb-2">99.9%</div>
                <div className="text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-400 leading-tight">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8f1818] mb-0.5 sm:mb-1 md:mb-2">10K+</div>
                <div className="text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-400 leading-tight">Aktive Stores</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8f1818] mb-0.5 sm:mb-1 md:mb-2">2.5x</div>
                <div className="text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-400 leading-tight break-words px-0.5">Conversion Boost</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#8f1818] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#8f1818] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-8 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-#8f1818500 text-#8f1818'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Verstehen Sie Ihre Kunden wie nie zuvor
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  DeepVision bietet umfassende Analysen, die Ihnen helfen zu verstehen, wie Kunden 
                  mit Ihrem Shopify-Store interagieren. Von Klick-Tracking bis zur Scroll-Tiefen-Analyse - 
                  erhalten Sie die Einblicke, die Sie zur Optimierung Ihrer Store-Performance benötigen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-#8f1818100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-#8f1818" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Echtzeit-Kundenverhaltens-Tracking</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-#8f1818100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-#8f1818" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Erweiterte Klick-Heatmaps und Analysen</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-#8f1818100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-#8f1818" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Sitzungszeit und Engagement-Metriken</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Live Analytics Dashboard</h3>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-#8f181850 rounded-lg p-4">
                      <div className="text-2xl font-bold text-#8f1818">1,247</div>
                      <div className="text-sm text-gray-600">Gesamte Klicks</div>
                    </div>
                    <div className="bg-wine-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-wine-600">3:42</div>
                      <div className="text-sm text-gray-600">Ø Sitzung</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Scroll-Tiefen-Verteilung</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">0-25%</span>
                        <span className="text-sm font-semibold">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-#8f1818500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Leistungsstarke Funktionen</h2>
                <p className="text-lg text-gray-600">Alles was Sie brauchen, um Ihre Kunden zu verstehen</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Klick-Tracking",
                    description: "Überwachen Sie jeden Klick und jede Interaktion in Ihrem Store",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    )
                  },
                  {
                    title: "Scroll-Analytik",
                    description: "Verstehen Sie, wie weit Kunden auf jeder Seite scrollen",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    )
                  },
                  {
                    title: "Sitzungszeit",
                    description: "Verfolgen Sie, wie lange Kunden in Ihrem Store verbringen",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Heatmaps",
                    description: "Visuelle Darstellung von Kundeninteraktionen",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    )
                  },
                  {
                    title: "Echtzeit-Dashboard",
                    description: "Überwachen Sie die Performance Ihres Stores in Echtzeit",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Datenexport",
                    description: "Exportieren Sie Ihre Analysedaten in verschiedenen Formaten",
                    icon: (
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

                 {activeTab === 'why-deepvision' && (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                   >
                     <div className="text-center mb-12">
                       <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum DeepVision?</h2>
                       <p className="text-lg text-gray-600">Die Zukunft des E-Commerce Analytics</p>
                     </div>
                     
                     <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                       <div>
                         <h3 className="text-3xl font-bold text-gray-900 mb-6">
                           Traditionelle Analytics vs. DeepVision
                         </h3>
                         <div className="space-y-6">
                           <div className="flex items-start">
                             <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                               <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                               </svg>
                             </div>
                             <div>
                               <h4 className="font-semibold text-gray-900 mb-2">Traditionelle Tools</h4>
                               <p className="text-gray-600">Oberflächliche Metriken, keine echten Einblicke in Kundenverhalten</p>
                             </div>
                           </div>
                           
                           <div className="flex items-start">
                             <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                               <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                             </div>
                             <div>
                               <h4 className="font-semibold text-gray-900 mb-2">DeepVision</h4>
                               <p className="text-gray-600">Tiefgreifende Verhaltensanalyse mit KI-gestützten Insights</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       
                       <div className="bg-gradient-to-br from-[#8f1818]/10 to-[#8f1818]/5 rounded-2xl p-8">
                         <h4 className="text-xl font-bold text-gray-900 mb-4">Der DeepVision Unterschied</h4>
                         <div className="space-y-4">
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-[#8f1818] rounded-full mr-3"></div>
                             <span className="text-gray-700">Echtzeit-Verhaltensanalyse</span>
                           </div>
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-[#8f1818] rounded-full mr-3"></div>
                             <span className="text-gray-700">KI-gestützte Vorhersagen</span>
                           </div>
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-[#8f1818] rounded-full mr-3"></div>
                             <span className="text-gray-700">Personalisierte Empfehlungen</span>
                           </div>
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-[#8f1818] rounded-full mr-3"></div>
                             <span className="text-gray-700">Automatisierte Optimierungen</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     
                     <div className="bg-gradient-to-r from-[#8f1818] to-[#6b1212] rounded-2xl p-12 text-white text-center">
                       <h3 className="text-3xl font-bold mb-4">Bereit für die Zukunft?</h3>
                       <p className="text-xl mb-8 opacity-90">
                         Schließen Sie sich über 10.000 Shopify-Stores an, die bereits mit DeepVision ihre Conversion-Rate um durchschnittlich 2.5x gesteigert haben.
                       </p>
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                         <div>
                           <div className="text-4xl font-bold mb-2">2.5x</div>
                           <div className="text-lg opacity-80">Conversion Boost</div>
                         </div>
                         <div>
                           <div className="text-4xl font-bold mb-2">99.9%</div>
                           <div className="text-lg opacity-80">Uptime</div>
                         </div>
                         <div>
                           <div className="text-4xl font-bold mb-2">10K+</div>
                           <div className="text-lg opacity-80">Zufriedene Kunden</div>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}

                 {activeTab === 'how-it-works' && (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                   >
                     <div className="text-center mb-12">
                       <h2 className="text-4xl font-bold text-gray-900 mb-4">Wie DeepVision funktioniert</h2>
                       <p className="text-lg text-gray-600">Einfache Integration, mächtige Ergebnisse</p>
                     </div>
                     
                     <div className="grid lg:grid-cols-3 gap-8 mb-16">
                       <div className="text-center">
                         <div className="w-16 h-16 bg-[#8f1818] rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-white">1</span>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
                         <p className="text-gray-600">
                           Einfache Installation über Shopify App Store. Nur ein Klick und DeepVision ist in Ihrem Store aktiv.
                         </p>
                       </div>
                       
                       <div className="text-center">
                         <div className="w-16 h-16 bg-[#8f1818] rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-white">2</span>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Datensammlung</h3>
                         <p className="text-gray-600">
                           DeepVision beginnt sofort mit der Sammlung von Kundenverhaltensdaten - vollständig DSGVO-konform.
                         </p>
                       </div>
                       
                       <div className="text-center">
                         <div className="w-16 h-16 bg-[#8f1818] rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-white">3</span>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Insights</h3>
                         <p className="text-gray-600">
                           Erhalten Sie sofortige, umsetzbare Insights in Ihrem DeepVision Dashboard.
                         </p>
                       </div>
                     </div>
                     
                     <div className="bg-gray-50 rounded-2xl p-8">
                       <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technische Integration</h3>
                       <div className="grid md:grid-cols-2 gap-8">
                         <div>
                           <h4 className="text-lg font-semibold text-gray-900 mb-4">Shopify Integration</h4>
                           <ul className="space-y-2 text-gray-600">
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               Nahtlose Shopify-Integration
                             </li>
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               Automatische Theme-Erkennung
                             </li>
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               Keine Code-Änderungen erforderlich
                             </li>
                           </ul>
                         </div>
                         <div>
                           <h4 className="text-lg font-semibold text-gray-900 mb-4">Datenschutz & Sicherheit</h4>
                           <ul className="space-y-2 text-gray-600">
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               DSGVO-konforme Datensammlung
                             </li>
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               Ende-zu-Ende-Verschlüsselung
                             </li>
                             <li className="flex items-center">
                               <svg className="w-5 h-5 text-[#8f1818] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               ISO 27001 zertifiziert
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}

                 {activeTab === 'benefits' && (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                   >
                     <div className="text-center mb-12">
                       <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihre Vorteile mit DeepVision</h2>
                       <p className="text-lg text-gray-600">Maximieren Sie den Erfolg Ihres Shopify Stores</p>
                     </div>
                     
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Höhere Conversion-Rate</h3>
                         <p className="text-gray-600">
                           Steigern Sie Ihre Conversion-Rate um durchschnittlich 2.5x durch datenbasierte Optimierungen.
                         </p>
                       </div>
                       
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Kosteneinsparungen</h3>
                         <p className="text-gray-600">
                           Reduzieren Sie Marketing-Kosten durch gezielte, datenbasierte Kampagnen.
                         </p>
                       </div>
                       
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Bessere Kundenbindung</h3>
                         <p className="text-gray-600">
                           Verstehen Sie Ihre Kunden besser und schaffen Sie personalisierte Shopping-Erlebnisse.
                         </p>
                       </div>
                       
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Zeitersparnis</h3>
                         <p className="text-gray-600">
                           Automatisierte Berichte und Insights sparen Ihnen wertvolle Zeit für andere wichtige Aufgaben.
                         </p>
                       </div>
                       
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Wettbewerbsvorteil</h3>
                         <p className="text-gray-600">
                           Bleiben Sie der Konkurrenz einen Schritt voraus mit fortschrittlichen Analytics.
                         </p>
                       </div>
                       
                       <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                         <div className="w-12 h-12 bg-[#8f1818]/10 rounded-lg flex items-center justify-center mb-4">
                           <svg className="w-6 h-6 text-[#8f1818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Schnelle Ergebnisse</h3>
                         <p className="text-gray-600">
                           Sehen Sie bereits nach 24 Stunden erste Verbesserungen in Ihren Store-Metriken.
                         </p>
                       </div>
                     </div>
                     
                     <div className="bg-gradient-to-r from-[#8f1818] to-[#6b1212] rounded-2xl p-12 text-white">
                       <div className="text-center">
                         <h3 className="text-3xl font-bold mb-4">Bereit für den nächsten Schritt?</h3>
                         <p className="text-xl mb-8 opacity-90">
                           Starten Sie noch heute Ihre kostenlose Testversion und erleben Sie den DeepVision-Unterschied.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                           <a href="/deepvision-app" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8f1818] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                             Kostenlose Testversion starten
                           </a>
                           
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}

                 {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Einfache, Transparente Preise</h2>
                <p className="text-lg text-gray-600">Wählen Sie den Plan, der zu Ihren Geschäftsanforderungen passt</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bis zu 10.000 Seitenaufrufe
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Grundlegendes Analytics-Dashboard
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      E-Mail-Support
                    </li>
                  </ul>
                  <a href="/deepvision-app" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors block text-center">
                    Jetzt starten
                  </a>
                </div>
                
                <div className="bg-teal-500 rounded-2xl p-8 shadow-xl text-white relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Beliebteste
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Professional</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="opacity-80">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bis zu 50.000 Seitenaufrufe
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Erweiterte Analytics & Heatmaps
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Prioritäts-Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Datenexport
                    </li>
                  </ul>
                  <a href="/deepvision-app" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-teal-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center">
                    Jetzt starten
                  </a>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unbegrenzte Seitenaufrufe
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Alle Funktionen enthalten
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Persönlicher Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Individuelle Integrationen
                    </li>
                  </ul>
                  <a href="/kontakt" className="bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full block text-center">
                    Vertrieb kontaktieren
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}