'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function ResponsiveSection() {
  const [activeDevice, setActiveDevice] = useState('mobile');

  return (
    <section id="responsive" className="responsive-section py-16 px-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="hero-section text-center mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="hero-icon inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-3xl">📱</span>
            </div>
          </motion.div>
          <h2 className="hero-title text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent bg-[length:100%_200%] bg-bottom leading-[1.3] relative z-20">
            Responsive Design Revolution
          </h2>
          <p className="hero-subtitle text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            Eine <span className="font-bold text-purple-400">3D-Interaktive Erfahrung</span> für alle Geräte. 
            Unsere Designs passen sich <span className="font-bold text-pink-400">intelligent an</span> und 
            bieten eine <span className="font-bold text-indigo-400">revolutionäre User Experience</span>.
          </p>
        </motion.div>

        {/* 4-Button Responsive Design Showcase - YENİ TASARIM */}
        <motion.div 
          className="device-showcase relative w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ 
            height: 'calc(100vh - 35px)', 
            marginTop: '30px',
            marginBottom: '5px'
          }}
        >
          <div className="w-full h-[92%] flex px-0">
            {/* Device Buttons - 4 Equal Parts */}
            <div className="device-buttons w-full flex">
              {[
                {
                  id: 'mobile',
                  count: '01',
                  title: 'Mobile',
                  subtitle: 'Touch-Optimized Experience',
                  description: 'Perfecte Darstellung auf Smartphones mit touch-optimierten Interfaces, intuitiver Navigation und optimierten Ladezeiten für eine erstklassige mobile Erfahrung.',
                  features: ['Touch-Optimiert', 'Schnelle Ladezeiten', 'Intuitive Navigation'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  id: 'tablet',
                  count: '02',
                  title: 'Tablet',
                  subtitle: 'Adaptive Layout Design',
                  description: 'Intelligente Anpassung für Tablet-Geräte mit optimierten Breakpoints, flexiblen Layouts und perfekter Darstellung auf mittleren Bildschirmgrößen.',
                  features: ['Adaptive Breakpoints', 'Flexible Layouts', 'Optimale Darstellung'],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  id: 'laptop',
                  count: '03',
                  title: 'Laptop',
                  subtitle: 'Full-Featured Experience',
                  description: 'Vollständige Laptop-Erfahrung mit erweiterten Funktionen, größeren Bildschirmen und optimierter Performance für professionelle Nutzung.',
                  features: ['Erweiterte Funktionen', 'Große Bildschirme', 'Professionelle Nutzung'],
                  color: 'from-orange-500 to-red-500'
                },
                {
                  id: 'desktop',
                  count: '04',
                  title: 'Computer',
                  subtitle: 'Ultimate Experience',
                  description: 'Optimale Darstellung auf großen Desktop-Bildschirmen mit erweiterten Funktionen, mehrspaltigen Layouts und maximaler Content-Präsentation.',
                  features: ['Große Bildschirme', 'Mehrspaltige Layouts', 'Maximale Content-Präsentation'],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`relative h-full transition-all duration-700 ease-in-out ${
                    activeDevice === item.id 
                      ? 'w-[100%]' 
                      : 'w-[8.90%]'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Button */}
                  <motion.div 
                    className={`device-button h-full cursor-pointer transition-all duration-400 ease-in-out ${
                      activeDevice === item.id 
                        ? 'active bg-gradient-to-b from-purple-800/80 to-indigo-800/80 border-2 border-purple-400/50' 
                        : 'bg-gradient-to-b from-purple-900/40 to-indigo-900/40 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/60'
                    } rounded-2xl p-6 flex flex-col justify-end`}
                    onClick={() => setActiveDevice(item.id)}
                    whileHover={{ 
                      scale: activeDevice === item.id ? 1 : 1.01,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Button Content - Vertical Text from Bottom - Fixed Position */}
                    <div className="device-button-content flex flex-col h-full justify-end relative z-10 w-[8.90%]">
                      {/* Title and Number - Always Visible, Vertical from Bottom */}
                      <div className="flex-1 flex items-end justify-start mb-2">
                        <h2 className={`device-title text-5xl font-bold leading-tight transition-all duration-500 ${
                          activeDevice === item.id ? 'text-white' : 'text-gray-300'
                        }`} style={{ 
                          writingMode: 'vertical-rl', 
                          textOrientation: 'mixed',
                          fontFamily: 'Times New Roman, serif',
                          transform: 'rotate(180deg)'
                        }}>
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    {/* Button Content - Vertical Text from Bottom - Fixed Position */}
                    <div className="flex flex-col h-full justify-end relative z-10 w-[8.90%]">
                      {/* Title and Number - Always Visible, Vertical from Bottom */}
                      <div className="flex-1 flex items-end justify-start mb-8">
                        <h2 className={`device-number text-8xl font-bold leading-tight transition-all duration-500 ${
                          activeDevice === item.id ? 'text-white' : 'text-gray-300'
                        }`} style={{ 
                          writingMode: 'vertical-rl', 
                          textOrientation: 'mixed',
                          fontFamily: 'Times New Roman, serif',
                          transform: 'rotate(180deg)'
                        }}>
                         {item.count}
                        </h2>
                      </div>
                    </div>
                  </motion.div>

                  {/* Device Display - Only for Active Button */}
                  {activeDevice === item.id && (
                    <motion.div
                      className="device-display absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-lg rounded-2xl border-2 border-purple-400/50 p-8 flex items-center justify-center z-5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <div className="w-full h-full flex items-center">
                        {/* Device Mockup - Larger */}
                        <div className="device-mockup w-2/3 h-full flex items-center justify-center pr-8">
                          <motion.div 
                            className="w-full h-full flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            {/* iPhone Device Mockup - Ultra Gerçekçi */}
                            {item.id === 'mobile' && (
                              <div className="iphone-mockup relative">
                                {/* iPhone Frame */}
                                <div className="w-72 h-[36rem] bg-black rounded-[3.5rem] p-4 shadow-2xl relative">
                                  {/* Dynamic Island */}  
                                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 flex items-center justify-center">
                                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                                  </div>
                                  {/* Screen */}
                                  <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                                    {/* Status Bar */}
                                    <div className="h-12 bg-black text-white text-xs flex items-center justify-between px-6 pt-2">
                                      <span className="font-semibold">9:41</span>
                                      <div className="flex items-center space-x-1">
                                        <div className="w-6 h-3 border border-white rounded-sm">
                                          <div className="w-5 h-1.5 bg-white rounded-sm m-0.5"></div>
                                        </div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                      </div>
                                    </div>
                                    {/* Website Content */}
                                    <div className="h-12 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">Ecommezzo</span>
                                    </div>
                                    <div className="p-4">
                                      <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                      <div className="h-4 bg-gray-200 rounded mb-3 w-4/5"></div>
                                      <div className="h-4 bg-gray-200 rounded mb-4 w-3/5"></div>
                                      <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                                        <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                                      </div>
                                      <div className="h-8 bg-blue-500 rounded-lg text-white text-center flex items-center justify-center text-sm font-semibold">
                                        Shop Now
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* iPad Device Mockup - Ultra Gerçekçi */}
                            {item.id === 'tablet' && (
                              <div className="ipad-mockup relative">
                                {/* iPad Frame */}
                                <div className="w-96 h-[36rem] bg-black rounded-3xl p-4 shadow-2xl relative">
                                  {/* Camera */}
                                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full z-10"></div>
                                  {/* Screen */}
                                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                                    {/* Status Bar */}
                                    <div className="h-8 bg-black text-white text-xs flex items-center justify-between px-6">
                                      <span className="font-semibold">9:41</span>
                                      <div className="flex items-center space-x-1">
                                        <div className="w-8 h-2 border border-white rounded-sm">
                                          <div className="w-7 h-1 bg-white rounded-sm m-0.5"></div>
                                        </div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                      </div>
                                    </div>
                                    {/* Website Content */}
                                    <div className="h-16 bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                                      <span className="text-white font-bold text-lg">Ecommezzo</span>
                                    </div>
                                    <div className="p-6">
                                      <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                                        <div className="h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg"></div>
                                        <div className="h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg"></div>
                                        <div className="h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg"></div>
                                      </div>
                                      <div className="h-5 bg-gray-200 rounded mb-3"></div>
                                      <div className="h-5 bg-gray-200 rounded mb-4 w-3/4"></div>
                                      <div className="h-10 bg-green-500 rounded-lg text-white text-center flex items-center justify-center text-base font-semibold">
                                        Explore Products
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* MacBook Device Mockup - Ultra Gerçekçi */}
                            {item.id === 'laptop' && (
                              <div className="macbook-mockup relative">
                                {/* MacBook Base */}
                                <div className="w-[28rem] h-3 bg-gray-800 rounded-b-2xl shadow-xl relative">
                                  <div className="w-32 h-1 bg-gray-600 rounded-full mx-auto mt-1"></div>
                                </div>
                                {/* MacBook Screen */}
                                <div className="w-[28rem] h-80 bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
                                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                                    {/* Browser Bar */}
                                    <div className="h-10 bg-gray-100 flex items-center justify-between px-4 border-b">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                      </div>
                                      <div className="flex-1 mx-6">
                                        <div className="h-5 bg-white rounded-lg border text-sm flex items-center px-3 text-gray-600 font-medium">
                                          ecommezzo.com
                                        </div>
                                      </div>
                                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                    </div>
                                    {/* Website Content */}
                                    <div className="h-12 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                                      <span className="text-white font-bold text-lg">Ecommezzo</span>
                                    </div>
                                    <div className="p-6">
                                      <div className="grid grid-cols-6 gap-3 mb-4">
                                        <div className="h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                                        <div className="h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg"></div>
                                        <div className="h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg"></div>
                                        <div className="h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg"></div>
                                        <div className="h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg"></div>
                                        <div className="h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-lg"></div>
                                      </div>
                                      <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                      <div className="h-4 bg-gray-200 rounded mb-4 w-4/5"></div>
                                      <div className="h-8 bg-orange-500 rounded-lg text-white text-center flex items-center justify-center text-sm font-semibold">
                                        View Details
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* 27" Monitor Device Mockup - Ultra Gerçekçi */}
                            {item.id === 'desktop' && (
                              <div className="desktop-mockup relative">
                                {/* Monitor Stand */}
                                <div className="w-6 h-12 bg-gray-700 mx-auto rounded-b-lg"></div>
                                {/* Monitor Base */}
                                <div className="w-20 h-3 bg-gray-700 rounded-lg mx-auto mb-3"></div>
                                {/* Monitor */}
                                <div className="w-[32rem] h-80 bg-gray-800 rounded-2xl p-3 shadow-2xl">
                                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                                    {/* Browser Bar */}
                                    <div className="h-12 bg-gray-100 flex items-center justify-between px-4 border-b">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                      </div>
                                      <div className="flex-1 mx-8">
                                        <div className="h-6 bg-white rounded-lg border text-base flex items-center px-4 text-gray-600 font-medium">
                                          ecommezzo.com
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                      </div>
                                    </div>
                                    {/* Website Content */}
                                    <div className="h-16 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                                      <span className="text-white font-bold text-2xl">Ecommezzo</span>
                                    </div>
                                    <div className="p-8">
                                      <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl"></div>
                                        <div className="h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl"></div>
                                        <div className="h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl"></div>
                                      </div>
                                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                      <div className="h-6 bg-gray-200 rounded mb-6 w-3/4"></div>
                                      <div className="h-12 bg-purple-500 rounded-xl text-white text-center flex items-center justify-center text-lg font-semibold">
                                        Get Started
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </div>

                        {/* Content - Side by Side */}
                        <div className="device-content w-1/3 h-full flex flex-col justify-center">
                          <div className="text-left">
                            <h2 className="text-3xl font-bold mb-4 text-white">
                              {item.subtitle}
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                              {item.description}
                            </p>
                            
                            {/* Features */}
                            <div className="device-features flex flex-wrap gap-3">
                              {item.features.map((feature, i) => (
                                <motion.span 
                                  key={feature}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="device-feature text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                                >
                                  {feature}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOBILE DEVICE SHOWCASE - ACCORDION VERSION */}
        <div className="mobile-device-showcase" style={{ display: 'none' }}>
          {[
            {
              id: 'mobile',
              icon: '📱',
              title: 'Mobile',
              number: '01',
              subtitle: 'Touch-Optimized Experience',
              description: 'Perfecte Darstellung auf Smartphones mit touch-optimierten Interfaces, intuitiver Navigation und optimierten Ladezeiten für eine erstklassige mobile Erfahrung.',
              features: ['Touch-Optimiert', 'Schnelle Ladezeiten', 'Intuitive Navigation']
            },
            {
              id: 'tablet',
              icon: '📱',
              title: 'Tablet',
              number: '02',
              subtitle: 'Adaptive Layout Design',
              description: 'Intelligente Anpassung für Tablet-Geräte mit optimierten Breakpoints, flexiblen Layouts und perfekter Darstellung auf mittleren Bildschirmgrößen.',
              features: ['Adaptive Breakpoints', 'Flexible Layouts', 'Optimale Darstellung']
            },
            {
              id: 'laptop',
              icon: '💻',
              title: 'Laptop',
              number: '03',
              subtitle: 'Full-Featured Experience',
              description: 'Vollständige Laptop-Erfahrung mit erweiterten Funktionen, größeren Bildschirmen und optimierter Performance für professionelle Nutzung.',
              features: ['Erweiterte Funktionen', 'Große Bildschirme', 'Professionelle Nutzung']
            },
            {
              id: 'desktop',
              icon: '🖥️',
              title: 'Computer',
              number: '04',
              subtitle: 'Ultimate Experience',
              description: 'Optimale Darstellung auf großen Desktop-Bildschirmen mit erweiterten Funktionen, mehrspaltigen Layouts und maximaler Content-Präsentation.',
              features: ['Große Bildschirme', 'Mehrspaltige Layouts', 'Maximale Content-Präsentation']
            }
          ].map((item) => (
            <div key={item.id} className="mobile-device-accordion">
              {/* Accordion Header */}
              <div 
                className={`mobile-device-header ${activeDevice === item.id ? 'active' : ''}`}
                onClick={() => setActiveDevice(activeDevice === item.id ? null : item.id)}
              >
                <div className="mobile-device-header-content">
                  <div className="mobile-device-icon">{item.icon}</div>
                  <div className="mobile-device-info">
                    <div className="mobile-device-title">{item.title}</div>
                    <div className="mobile-device-number">{item.number}</div>
                  </div>
                </div>
                <div className="mobile-device-arrow">
                  {activeDevice === item.id ? '▼' : '▶'}
                </div>
              </div>

              {/* Accordion Content */}
              {activeDevice === item.id && (
                <motion.div 
                  className="mobile-device-content"
                  initial={{ opacity: 0, height: 0, scaleY: 0 }}
                  animate={{ opacity: 1, height: "auto", scaleY: 1 }}
                  exit={{ opacity: 0, height: 0, scaleY: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.3 },
                    height: { duration: 0.4 },
                    scaleY: { duration: 0.4 }
                  }}
                  style={{ transformOrigin: "top" }}
                >
                  <div className="mobile-device-mockup">
                    {/* iPhone Device Mockup */}
                    {item.id === 'mobile' && (
                      <div className="mobile-iphone-mockup">
                        <div className="mobile-iphone-frame">
                          <div className="mobile-iphone-screen">
                            <div className="mobile-iphone-status-bar">
                              <span>9:41</span>
                              <div className="mobile-iphone-battery"></div>
                            </div>
                            <div className="mobile-iphone-header">
                              <span>Ecommezzo</span>
                            </div>
                            <div className="mobile-iphone-content">
                              <div className="mobile-iphone-placeholder"></div>
                              <div className="mobile-iphone-placeholder short"></div>
                              <div className="mobile-iphone-grid">
                                <div className="mobile-iphone-card blue"></div>
                                <div className="mobile-iphone-card purple"></div>
                              </div>
                              <div className="mobile-iphone-button">Shop Now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* iPad Device Mockup */}
                    {item.id === 'tablet' && (
                      <div className="mobile-ipad-mockup">
                        <div className="mobile-ipad-frame">
                          <div className="mobile-ipad-screen">
                            <div className="mobile-ipad-status-bar">
                              <span>9:41</span>
                              <div className="mobile-ipad-battery"></div>
                            </div>
                            <div className="mobile-ipad-header">
                              <span>Ecommezzo</span>
                            </div>
                            <div className="mobile-ipad-content">
                              <div className="mobile-ipad-grid">
                                <div className="mobile-ipad-card green"></div>
                                <div className="mobile-ipad-card emerald"></div>
                                <div className="mobile-ipad-card teal"></div>
                                <div className="mobile-ipad-card cyan"></div>
                              </div>
                              <div className="mobile-ipad-placeholder"></div>
                              <div className="mobile-ipad-placeholder short"></div>
                              <div className="mobile-ipad-button">Explore Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MacBook Device Mockup */}
                    {item.id === 'laptop' && (
                      <div className="mobile-macbook-mockup">
                        <div className="mobile-macbook-base"></div>
                        <div className="mobile-macbook-screen">
                          <div className="mobile-macbook-browser">
                            <div className="mobile-macbook-dots">
                              <div className="dot red"></div>
                              <div className="dot yellow"></div>
                              <div className="dot green"></div>
                            </div>
                            <div className="mobile-macbook-url">ecommezzo.com</div>
                          </div>
                          <div className="mobile-macbook-content">
                            <div className="mobile-macbook-header">
                              <span>Ecommezzo</span>
                            </div>
                            <div className="mobile-macbook-grid">
                              <div className="mobile-macbook-card orange"></div>
                              <div className="mobile-macbook-card red"></div>
                              <div className="mobile-macbook-card pink"></div>
                              <div className="mobile-macbook-card rose"></div>
                              <div className="mobile-macbook-card orange-light"></div>
                              <div className="mobile-macbook-card red-light"></div>
                            </div>
                            <div className="mobile-macbook-placeholder"></div>
                            <div className="mobile-macbook-placeholder short"></div>
                            <div className="mobile-macbook-button">View Details</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Desktop Device Mockup */}
                    {item.id === 'desktop' && (
                      <div className="mobile-desktop-mockup">
                        <div className="mobile-desktop-stand"></div>
                        <div className="mobile-desktop-base"></div>
                        <div className="mobile-desktop-screen">
                          <div className="mobile-desktop-browser">
                            <div className="mobile-desktop-dots">
                              <div className="dot red"></div>
                              <div className="dot yellow"></div>
                              <div className="dot green"></div>
                            </div>
                            <div className="mobile-desktop-url">ecommezzo.com</div>
                            <div className="mobile-desktop-controls">
                              <div className="control"></div>
                              <div className="control"></div>
                            </div>
                          </div>
                          <div className="mobile-desktop-content">
                            <div className="mobile-desktop-header">
                              <span>Ecommezzo</span>
                            </div>
                            <div className="mobile-desktop-grid">
                              <div className="mobile-desktop-card purple"></div>
                              <div className="mobile-desktop-card pink"></div>
                              <div className="mobile-desktop-card indigo"></div>
                            </div>
                            <div className="mobile-desktop-placeholder"></div>
                            <div className="mobile-desktop-placeholder short"></div>
                            <div className="mobile-desktop-button">Get Started</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mobile-device-text">
                    <h3>{item.subtitle}</h3>
                    <p>{item.description}</p>
                    <div className="mobile-device-features">
                      {item.features.map((feature, i) => (
                        <span key={i} className="mobile-device-feature">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Accordion Experience */}
        <motion.div 
          className="accordion-section bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="accordion-title text-4xl font-bold text-center mb-12 text-white">Responsive Design Features</h3>
          
          <div className="space-y-6">
            {[
              {
                title: "Mobile-First Approach",
                content: "Wir entwickeln zuerst für mobile Geräte und skalieren dann nach oben. Touch-optimierte Interfaces, optimierte Ladezeiten und intuitive Navigation sorgen für eine perfekte mobile Erfahrung.",
                icon: "📱",
                color: "from-blue-500 to-cyan-500",
                features: ["Touch-Optimiert", "Schnelle Ladezeiten", "Intuitive Navigation"],
                details: [
                  "Responsive Navigation mit Hamburger Menu",
                  "Touch-freundliche Buttons und Links",
                  "Optimierte Schriftgrößen für mobile Lesbarkeit",
                  "Gesture-basierte Interaktionen"
                ]
              },
              {
                title: "Adaptive Breakpoints",
                content: "Intelligente Breakpoints passen sich automatisch an verschiedene Bildschirmgrößen an. Von Smartphones über Tablets bis zu großen Desktop-Bildschirmen - perfekte Darstellung auf allen Geräten.",
                icon: "🔄",
                color: "from-green-500 to-emerald-500",
                features: ["Automatische Anpassung", "Flexible Layouts", "Optimale Darstellung"],
                details: [
                  "CSS Grid und Flexbox für flexible Layouts",
                  "Fluid Typography für alle Bildschirmgrößen",
                  "Adaptive Images mit srcset",
                  "Container Queries für moderne Browser"
                ]
              },
              {
                title: "Performance Optimized",
                content: "Optimierte Performance für alle Geräte. Komprimierte Bilder, minimierte CSS/JS und CDN-Integration sorgen für blitzschnelle Ladezeiten auf jedem Gerät.",
                icon: "⚡",
                color: "from-orange-500 to-red-500",
                features: ["Komprimierte Assets", "Minimierte Dateien", "CDN Integration"],
                details: [
                  "WebP und AVIF Bildformate für kleinere Dateien",
                  "Lazy Loading für Bilder und Komponenten",
                  "Critical CSS Inlining",
                  "Service Worker für Offline-Funktionalität"
                ]
              }
            ].map(({ title, content, icon, color, features, details }, index) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="accordion-item group"
              >
                <motion.div 
                  className="accordion-header flex items-center justify-between p-6 bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.nextElementSibling;
                    const isOpen = contentDiv.style.height !== '0px' && contentDiv.style.height !== '';
                    
                    if (isOpen) {
                      contentDiv.style.height = '0px';
                      contentDiv.style.opacity = '0';
                    } else {
                      contentDiv.style.height = 'auto';
                      contentDiv.style.opacity = '1';
                    }
                  }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className={`accordion-icon w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-xl">{icon}</span>
                    </motion.div>
                    <h4 className="accordion-item-title font-bold text-white group-hover:text-purple-300 transition-colors duration-200">{title}</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200"
                  >
                    ➤
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="accordion-content overflow-hidden"
                  style={{ height: '0px', opacity: 0 }}
                >
                  <div className="p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">{content}</p>
                    
                    {/* Feature Tags */}
                    <div className="accordion-features flex flex-wrap gap-2 mb-6">
                      {features.map((feature, i) => (
                        <motion.span 
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="accordion-feature text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Detailed Features */}
                    <div className="accordion-details grid md:grid-cols-2 gap-4">
                      {details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="accordion-detail flex items-start p-3 bg-purple-800/20 rounded-lg border border-purple-500/20"
                        >
                          <motion.div
                            className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                          />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// MOBILE-FIRST RESPONSIVE DESIGN - COMPLETELY NEW APPROACH
const mobileStyles = `
  /* Mobile First - Hide complex desktop layout on mobile */
  @media (max-width: 768px) {
    /* Hide the complex desktop showcase */
    .device-showcase {
      display: none !important;
    }
    
    /* Show simple mobile version */
    .mobile-device-showcase {
      display: block !important;
    }
    
    /* Mobile Hero */
    .responsive-section {
      padding: 1rem 0 !important;
    }
    
    .hero-section {
      margin-bottom: 1rem !important;
      padding: 0 1rem !important;
    }
    
    .hero-title {
      font-size: 1.8rem !important;
      line-height: 1.2 !important;
      margin-bottom: 0.5rem !important;
    }
    
    .hero-subtitle {
      font-size: 0.9rem !important;
      line-height: 1.4 !important;
      padding: 0 0.5rem !important;
    }
    
    .hero-icon {
      width: 4rem !important;
      height: 4rem !important;
      margin-bottom: 1rem !important;
    }
    
    .hero-icon .w-24 {
      width: 4rem !important;
      height: 4rem !important;
    }
    
    .hero-icon .text-3xl {
      font-size: 2rem !important;
    }
    
    /* Mobile Device Accordion */
    .mobile-device-accordion {
      margin-bottom: 0.5rem !important;
      border-radius: 1rem !important;
      overflow: hidden !important;
    }
    
    .mobile-device-header {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)) !important;
      border: 1px solid rgba(139, 92, 246, 0.3) !important;
      padding: 1rem !important;
      cursor: pointer !important;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      position: relative !important;
      overflow: hidden !important;
    }
    
    .mobile-device-header::before {
      content: '' !important;
      position: absolute !important;
      top: 0 !important;
      left: -100% !important;
      width: 100% !important;
      height: 100% !important;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent) !important;
      transition: left 0.6s ease !important;
    }
    
    .mobile-device-header:hover::before {
      left: 100% !important;
    }
    
    .mobile-device-header:hover {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2)) !important;
      border-color: rgba(139, 92, 246, 0.5) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2) !important;
    }
    
    .mobile-device-header.active {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3)) !important;
      border-color: rgba(139, 92, 246, 0.7) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3) !important;
    }
    
    .mobile-device-header-content {
      display: flex !important;
      align-items: center !important;
      gap: 1rem !important;
    }
    
    .mobile-device-icon {
      font-size: 2rem !important;
    }
    
    .mobile-device-info {
      display: flex !important;
      flex-direction: column !important;
    }
    
    .mobile-device-title {
      font-size: 1.1rem !important;
      font-weight: bold !important;
      color: white !important;
      margin-bottom: 0.25rem !important;
    }
    
    .mobile-device-number {
      font-size: 0.9rem !important;
      color: rgba(255, 255, 255, 0.7) !important;
    }
    
    .mobile-device-arrow {
      font-size: 1.2rem !important;
      color: rgba(255, 255, 255, 0.8) !important;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
      transform-origin: center !important;
    }
    
    .mobile-device-header.active .mobile-device-arrow {
      transform: rotate(90deg) scale(1.1) !important;
      color: rgba(255, 255, 255, 1) !important;
    }
    
    /* Mobile Device Content */
    .mobile-device-content {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05)) !important;
      border: 1px solid rgba(139, 92, 246, 0.2) !important;
      border-top: none !important;
      padding: 1rem !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 1rem !important;
      overflow: hidden !important;
    }
    
    .mobile-device-mockup {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    
    /* iPhone Mockup */
    .mobile-iphone-mockup {
      width: 80px !important;
      height: 140px !important;
    }
    
    .mobile-iphone-frame {
      width: 100% !important;
      height: 100% !important;
      background: linear-gradient(135deg, #374151, #4b5563) !important;
      border-radius: 1.5rem !important;
      padding: 0.3rem !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    .mobile-iphone-screen {
      width: 100% !important;
      height: 100% !important;
      background: white !important;
      border-radius: 1.2rem !important;
      overflow: hidden !important;
    }
    
    .mobile-iphone-status-bar {
      height: 1.5rem !important;
      background: linear-gradient(135deg, #1f2937, #374151) !important;
      color: white !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      padding: 0 0.5rem !important;
      font-size: 0.6rem !important;
    }
    
    .mobile-iphone-battery {
      width: 1rem !important;
      height: 0.5rem !important;
      border: 1px solid white !important;
      border-radius: 0.1rem !important;
    }
    
    .mobile-iphone-header {
      height: 2rem !important;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.6rem !important;
      font-weight: bold !important;
    }
    
    .mobile-iphone-content {
      padding: 0.2rem !important;
    }
    
    .mobile-iphone-placeholder {
      height: 0.2rem !important;
      background: #e5e7eb !important;
      border-radius: 0.1rem !important;
      margin-bottom: 0.15rem !important;
    }
    
    .mobile-iphone-placeholder.short {
      width: 60% !important;
    }
    
    .mobile-iphone-grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 0.1rem !important;
      margin: 0.2rem 0 !important;
    }
    
    .mobile-iphone-card {
      height: 0.7rem !important;
      border-radius: 0.1rem !important;
    }
    
    .mobile-iphone-card.blue {
      background: linear-gradient(135deg, #dbeafe, #bfdbfe) !important;
    }
    
    .mobile-iphone-card.purple {
      background: linear-gradient(135deg, #e9d5ff, #ddd6fe) !important;
    }
    
    .mobile-iphone-button {
      height: 0.6rem !important;
      background: #3b82f6 !important;
      border-radius: 0.1rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.3rem !important;
      font-weight: bold !important;
    }
    
    /* iPad Mockup */
    .mobile-ipad-mockup {
      width: 100px !important;
      height: 130px !important;
    }
    
    .mobile-ipad-frame {
      width: 100% !important;
      height: 100% !important;
      background: linear-gradient(135deg, #374151, #4b5563) !important;
      border-radius: 1rem !important;
      padding: 0.3rem !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    .mobile-ipad-screen {
      width: 100% !important;
      height: 100% !important;
      background: white !important;
      border-radius: 0.7rem !important;
      overflow: hidden !important;
    }
    
    .mobile-ipad-status-bar {
      height: 1.2rem !important;
      background: linear-gradient(135deg, #1f2937, #374151) !important;
      color: white !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      padding: 0 0.5rem !important;
      font-size: 0.5rem !important;
    }
    
    .mobile-ipad-battery {
      width: 1.2rem !important;
      height: 0.4rem !important;
      border: 1px solid white !important;
      border-radius: 0.1rem !important;
    }
    
    .mobile-ipad-header {
      height: 1.5rem !important;
      background: linear-gradient(135deg, #10b981, #059669) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.6rem !important;
      font-weight: bold !important;
    }
    
    .mobile-ipad-content {
      padding: 0.2rem !important;
    }
    
    .mobile-ipad-grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 0.1rem !important;
      margin: 0.15rem 0 !important;
    }
    
    .mobile-ipad-card {
      height: 0.6rem !important;
      border-radius: 0.1rem !important;
    }
    
    .mobile-ipad-card.green {
      background: linear-gradient(135deg, #dcfce7, #bbf7d0) !important;
    }
    
    .mobile-ipad-card.emerald {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0) !important;
    }
    
    .mobile-ipad-card.teal {
      background: linear-gradient(135deg, #ccfbf1, #99f6e4) !important;
    }
    
    .mobile-ipad-card.cyan {
      background: linear-gradient(135deg, #cffafe, #a5f3fc) !important;
    }
    
    .mobile-ipad-placeholder {
      height: 0.2rem !important;
      background: #e5e7eb !important;
      border-radius: 0.1rem !important;
      margin-bottom: 0.1rem !important;
    }
    
    .mobile-ipad-placeholder.short {
      width: 60% !important;
    }
    
    .mobile-ipad-button {
      height: 0.6rem !important;
      background: #10b981 !important;
      border-radius: 0.1rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.3rem !important;
      font-weight: bold !important;
    }
    
    /* MacBook Mockup */
    .mobile-macbook-mockup {
      width: 120px !important;
      height: 80px !important;
      position: relative !important;
    }
    
    .mobile-macbook-base {
      width: 100% !important;
      height: 0.5rem !important;
      background: linear-gradient(135deg, #374151, #4b5563) !important;
      border-radius: 0 0 0.5rem 0.5rem !important;
      margin-bottom: 0.2rem !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
    }
    
    .mobile-macbook-screen {
      width: 100% !important;
      height: calc(100% - 0.7rem) !important;
      background: linear-gradient(135deg, #374151, #4b5563) !important;
      border-radius: 0.5rem 0.5rem 0 0 !important;
      padding: 0.2rem !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    .mobile-macbook-browser {
      height: 0.8rem !important;
      background: #f3f4f6 !important;
      border-radius: 0.2rem 0.2rem 0 0 !important;
      display: flex !important;
      align-items: center !important;
      padding: 0 0.2rem !important;
      gap: 0.2rem !important;
    }
    
    .mobile-macbook-dots {
      display: flex !important;
      gap: 0.05rem !important;
    }
    
    .dot {
      width: 0.2rem !important;
      height: 0.2rem !important;
      border-radius: 50% !important;
    }
    
    .dot.red {
      background: #ef4444 !important;
    }
    
    .dot.yellow {
      background: #eab308 !important;
    }
    
    .dot.green {
      background: #22c55e !important;
    }
    
    .mobile-macbook-url {
      flex: 1 !important;
      height: 0.3rem !important;
      background: white !important;
      border-radius: 0.05rem !important;
      border: 1px solid #d1d5db !important;
    }
    
    .mobile-macbook-content {
      height: calc(100% - 1rem) !important;
      background: white !important;
      border-radius: 0 0 0.3rem 0.3rem !important;
      padding: 0.15rem !important;
    }
    
    .mobile-macbook-header {
      height: 0.6rem !important;
      background: linear-gradient(135deg, #f97316, #dc2626) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.3rem !important;
      font-weight: bold !important;
      border-radius: 0.1rem !important;
      margin-bottom: 0.15rem !important;
    }
    
    .mobile-macbook-grid {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 0.05rem !important;
      margin: 0.1rem 0 !important;
    }
    
    .mobile-macbook-card {
      height: 0.4rem !important;
      border-radius: 0.05rem !important;
    }
    
    .mobile-macbook-card.orange {
      background: linear-gradient(135deg, #fed7aa, #fdba74) !important;
    }
    
    .mobile-macbook-card.red {
      background: linear-gradient(135deg, #fecaca, #fca5a5) !important;
    }
    
    .mobile-macbook-card.pink {
      background: linear-gradient(135deg, #fce7f3, #fbcfe8) !important;
    }
    
    .mobile-macbook-card.rose {
      background: linear-gradient(135deg, #ffe4e6, #fecdd3) !important;
    }
    
    .mobile-macbook-card.orange-light {
      background: linear-gradient(135deg, #fff7ed, #fed7aa) !important;
    }
    
    .mobile-macbook-card.red-light {
      background: linear-gradient(135deg, #fff1f2, #fecaca) !important;
    }
    
    .mobile-macbook-placeholder {
      height: 0.15rem !important;
      background: #e5e7eb !important;
      border-radius: 0.05rem !important;
      margin-bottom: 0.1rem !important;
    }
    
    .mobile-macbook-placeholder.short {
      width: 60% !important;
    }
    
    .mobile-macbook-button {
      height: 0.4rem !important;
      background: #f97316 !important;
      border-radius: 0.05rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.25rem !important;
      font-weight: bold !important;
    }
    
    /* Desktop Mockup */
    .mobile-desktop-mockup {
      width: 140px !important;
      height: 80px !important;
      position: relative !important;
    }
    
    .mobile-desktop-stand {
      width: 0.5rem !important;
      height: 1rem !important;
      background: linear-gradient(135deg, #4b5563, #6b7280) !important;
      margin: 0 auto !important;
      border-radius: 0 0 0.2rem 0.2rem !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
    }
    
    .mobile-desktop-base {
      width: 2rem !important;
      height: 0.3rem !important;
      background: linear-gradient(135deg, #4b5563, #6b7280) !important;
      margin: 0 auto 0.3rem auto !important;
      border-radius: 0.2rem !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
    }
    
    .mobile-desktop-screen {
      width: 100% !important;
      height: calc(100% - 1.6rem) !important;
      background: linear-gradient(135deg, #374151, #4b5563) !important;
      border-radius: 0.5rem !important;
      padding: 0.3rem !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    .mobile-desktop-browser {
      height: 1rem !important;
      background: #f3f4f6 !important;
      border-radius: 0.2rem 0.2rem 0 0 !important;
      display: flex !important;
      align-items: center !important;
      padding: 0 0.2rem !important;
      gap: 0.2rem !important;
    }
    
    .mobile-desktop-dots {
      display: flex !important;
      gap: 0.05rem !important;
    }
    
    .mobile-desktop-url {
      flex: 1 !important;
      height: 0.4rem !important;
      background: white !important;
      border-radius: 0.05rem !important;
      border: 1px solid #d1d5db !important;
    }
    
    .mobile-desktop-controls {
      display: flex !important;
      gap: 0.05rem !important;
    }
    
    .control {
      width: 0.3rem !important;
      height: 0.3rem !important;
      background: #d1d5db !important;
      border-radius: 0.05rem !important;
    }
    
    .mobile-desktop-content {
      height: calc(100% - 1.2rem) !important;
      background: white !important;
      border-radius: 0 0 0.3rem 0.3rem !important;
      padding: 0.15rem !important;
    }
    
    .mobile-desktop-header {
      height: 0.8rem !important;
      background: linear-gradient(135deg, #8b5cf6, #ec4899) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.4rem !important;
      font-weight: bold !important;
      border-radius: 0.1rem !important;
      margin-bottom: 0.15rem !important;
    }
    
    .mobile-desktop-grid {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 0.1rem !important;
      margin: 0.15rem 0 !important;
    }
    
    .mobile-desktop-card {
      height: 0.6rem !important;
      border-radius: 0.1rem !important;
    }
    
    .mobile-desktop-card.purple {
      background: linear-gradient(135deg, #e9d5ff, #ddd6fe) !important;
    }
    
    .mobile-desktop-card.pink {
      background: linear-gradient(135deg, #fce7f3, #fbcfe8) !important;
    }
    
    .mobile-desktop-card.indigo {
      background: linear-gradient(135deg, #e0e7ff, #c7d2fe) !important;
    }
    
    .mobile-desktop-placeholder {
      height: 0.2rem !important;
      background: #e5e7eb !important;
      border-radius: 0.1rem !important;
      margin-bottom: 0.1rem !important;
    }
    
    .mobile-desktop-placeholder.short {
      width: 60% !important;
    }
    
    .mobile-desktop-button {
      height: 0.6rem !important;
      background: #8b5cf6 !important;
      border-radius: 0.1rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: white !important;
      font-size: 0.3rem !important;
      font-weight: bold !important;
    }
    
    /* Mobile Device Text */
    .mobile-device-text {
      text-align: center !important;
    }
    
    .mobile-device-text h3 {
      font-size: 1.2rem !important;
      font-weight: bold !important;
      color: white !important;
      margin-bottom: 0.5rem !important;
    }
    
    .mobile-device-text p {
      font-size: 0.8rem !important;
      color: rgba(255, 255, 255, 0.8) !important;
      line-height: 1.4 !important;
      margin-bottom: 1rem !important;
    }
    
    .mobile-device-features {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 0.5rem !important;
      justify-content: center !important;
    }
    
    .mobile-device-feature {
      background: rgba(139, 92, 246, 0.2) !important;
      color: rgba(255, 255, 255, 0.9) !important;
      padding: 0.25rem 0.5rem !important;
      border-radius: 0.5rem !important;
      font-size: 0.7rem !important;
      border: 1px solid rgba(139, 92, 246, 0.3) !important;
    }
    
    /* Mobile Accordion */
    .accordion-section {
      padding: 1rem !important;
      margin: 1rem 0 !important;
    }
    
    .accordion-title {
      font-size: 1.5rem !important;
      margin-bottom: 1rem !important;
    }
    
    .accordion-item {
      margin-bottom: 0.75rem !important;
    }
    
    .accordion-header {
      padding: 0.75rem !important;
    }
    
    .accordion-icon {
      width: 2rem !important;
      height: 2rem !important;
      margin-right: 0.5rem !important;
    }
    
    .accordion-icon .text-xl {
      font-size: 1.2rem !important;
    }
    
    .accordion-item-title {
      font-size: 1rem !important;
    }
    
    .accordion-content {
      padding: 0.75rem !important;
    }
    
    .accordion-content p {
      font-size: 0.85rem !important;
      line-height: 1.4 !important;
      margin-bottom: 0.75rem !important;
    }
    
    .accordion-features {
      flex-direction: column !important;
      gap: 0.5rem !important;
      margin-bottom: 0.75rem !important;
    }
    
    .accordion-feature {
      font-size: 0.75rem !important;
      padding: 0.5rem !important;
    }
    
    .accordion-details {
      grid-template-columns: 1fr !important;
      gap: 0.5rem !important;
    }
    
    .accordion-detail {
      padding: 0.5rem !important;
      font-size: 0.8rem !important;
    }
  }
  
  /* Hide mobile version on desktop */
  @media (min-width: 769px) {
    .mobile-device-showcase {
      display: none !important;
    }
  }
`;

// CSS'i head'e ekle
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
}