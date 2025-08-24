'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function ResponsiveSection() {
  const [activeDevice, setActiveDevice] = useState('mobile');

  return (
    <section className="py-32 px-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-0"
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
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-3xl">📱</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent bg-[length:100%_200%] bg-bottom leading-[1.3] relative z-20">
            Responsive Design Revolution
          </h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            Eine <span className="font-bold text-purple-400">3D-Interaktive Erfahrung</span> für alle Geräte. 
            Unsere Designs passen sich <span className="font-bold text-pink-400">intelligent an</span> und 
            bieten eine <span className="font-bold text-indigo-400">revolutionäre User Experience</span>.
          </p>
        </motion.div>

        {/* 4-Button Responsive Design Showcase - YENİ TASARIM */}
        <motion.div 
          className="relative w-full"
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
            <div className="w-full flex">
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
                    className={`h-full cursor-pointer transition-all duration-400 ease-in-out ${
                      activeDevice === item.id 
                        ? 'bg-gradient-to-b from-purple-800/80 to-indigo-800/80 border-2 border-purple-400/50' 
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
                    <div className="flex flex-col h-full justify-end relative z-10 w-[8.90%]">
                      {/* Title and Number - Always Visible, Vertical from Bottom */}
                      <div className="flex-1 flex items-end justify-start mb-2">
                        <h2 className={`text-5xl font-bold leading-tight transition-all duration-500 ${
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
                        <h2 className={`text-8xl font-bold leading-tight transition-all duration-500 ${
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
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-lg rounded-2xl border-2 border-purple-400/50 p-8 flex items-center justify-center z-5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <div className="w-full h-full flex items-center">
                        {/* Device Mockup - Larger */}
                        <div className="w-2/3 h-full flex items-center justify-center pr-8">
                          <motion.div 
                            className="w-full h-full flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            {/* iPhone Device Mockup - Ultra Gerçekçi */}
                            {item.id === 'mobile' && (
                              <div className="relative">
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
                              <div className="relative">
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
                              <div className="relative">
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
                              <div className="relative">
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
                        <div className="w-1/3 h-full flex flex-col justify-center">
                          <div className="text-left">
                            <h2 className="text-3xl font-bold mb-4 text-white">
                              {item.subtitle}
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                              {item.description}
                            </p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-3">
                              {item.features.map((feature, i) => (
                                <motion.span 
                                  key={feature}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
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

        {/* Interactive Accordion Experience */}
        <motion.div 
          className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Responsive Design Features</h3>
          
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
                className="group"
              >
                <motion.div 
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
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
                      className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-xl">{icon}</span>
                    </motion.div>
                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors duration-200">{title}</h4>
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
                  className="overflow-hidden"
                  style={{ height: '0px', opacity: 0 }}
                >
                  <div className="p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">{content}</p>
                    
                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {features.map((feature, i) => (
                        <motion.span 
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Detailed Features */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start p-3 bg-purple-800/20 rounded-lg border border-purple-500/20"
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
