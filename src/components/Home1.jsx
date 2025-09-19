'use client';

import { useState, useEffect } from 'react';

export default function Home1() {
  const [activeAccordion, setActiveAccordion] = useState(-1);
  const [showGraph, setShowGraph] = useState(false);

  const webdesignComponents = [
    {
      title: "Responsive Design",
      icon: "📱",
      description: "Perfekte Darstellung auf allen Geräten",
      features: ["Mobile-First Ansatz", "Tablet Optimierung", "Desktop Perfektion", "Cross-Browser Kompatibilität"],
      color: "from-blue-500 to-cyan-500",
      link: "/webdesign#responsive"
    },
    {
      title: "Performance Optimierung",
      icon: "⚡",
      description: "Blitzschnelle Ladezeiten für bessere Conversion",
      features: ["Core Web Vitals", "Image Optimierung", "Code Splitting", "CDN Integration"],
      color: "from-yellow-500 to-orange-500",
      link: "/webdesign#performance"
    },
    {
      title: "SEO & Analytics",
      icon: "📊",
      description: "Sichtbarkeit in Suchmaschinen maximieren",
      features: ["Meta Tags Optimierung", "Schema Markup", "Google Analytics", "Search Console"],
      color: "from-green-500 to-teal-500",
      link: "/webdesign#seo"
    },
    {
      title: "E-Commerce Integration",
      icon: "🛒",
      description: "Shopify & WordPress nahtlos integriert",
      features: ["Shopify Store Setup", "WordPress WooCommerce", "Payment Gateway", "Inventory Management"],
      color: "from-purple-500 to-pink-500",
      link: "/webdesign#shopify"
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Benutzerfreundliche und ansprechende Designs",
      features: ["User Journey Mapping", "Wireframing", "Prototyping", "A/B Testing"],
      color: "from-indigo-500 to-purple-500",
      link: "/webdesign#wordpress"
    },
    {
      title: "Content Management",
      icon: "📝",
      description: "Einfache Verwaltung Ihrer Inhalte",
      features: ["CMS Integration", "Content Strategy", "Blog Management", "Media Library"],
      color: "from-red-500 to-pink-500",
      link: "/webdesign#content"
    }
  ];

  useEffect(() => {
    // 2 saniye sonra grafiği göster
    const timer = setTimeout(() => {
      setShowGraph(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Üst Kısım - 6 Akordiyon (3+3) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sol taraf - 3 Akordiyon */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              
            </h2>
            
            {webdesignComponents.slice(0, 3).map((component, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 overflow-hidden ${
                  activeAccordion === index 
                    ? 'border-cyan-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{component.title}</h3>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeAccordion === index ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  activeAccordion === index 
                    ? 'max-h-[400px] opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {component.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${component.color} rounded-full`}></div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mehr erfahren Button */}
                    <div className="flex justify-center">
                      <a 
                        href={component.link} 
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${component.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
                      >
                        Mehr erfahren
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sağ taraf - 3 Akordiyon */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              
            </h2>
            
            {webdesignComponents.slice(3, 6).map((component, index) => (
              <div
                key={index + 3}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 overflow-hidden ${
                  activeAccordion === (index + 3)
                    ? 'border-cyan-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === (index + 3) ? -1 : (index + 3))}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{component.title}</h3>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeAccordion === (index + 3) ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  activeAccordion === (index + 3)
                    ? 'max-h-[400px] opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {component.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${component.color} rounded-full`}></div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mehr erfahren Button */}
                    <div className="flex justify-center">
                      <a 
                        href={component.link} 
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${component.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
                      >
                        Mehr erfahren
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Kısım - Profesyonel Satış Grafiği */}
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Verkaufsentwicklung</h2>
            <p className="text-gray-600 text-lg">1 Jahr mit Ecommezzo - Durchschnittliche Steigerung</p>
            <div className="flex justify-center items-center mt-4 space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">+247% Umsatzsteigerung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">+156% Conversion Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">+89% Traffic Zuwachs</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[500px] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-gray-700 relative overflow-hidden">
            {/* Dekoratif Elementler */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative h-full">
              {/* Y Ekseni - Profesyonel */}
              <div className="absolute left-0 top-0 h-full w-20 flex flex-col justify-between text-gray-300 text-sm font-mono">
                <span className={`text-green-400 font-semibold transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1.5s'}}>€250K</span>
                <span className={`transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1.2s'}}>€200K</span>
                <span className={`transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.9s'}}>€150K</span>
                <span className={`transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.6s'}}>€100K</span>
                <span className={`transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.3s'}}>€50K</span>
                <span className={`text-gray-500 transition-all duration-2000 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0s'}}>€0</span>
              </div>
              
              {/* X Ekseni - Aylar */}
              <div className="absolute bottom-0 left-20 right-0 h-12 flex justify-between items-end text-gray-400 text-xs font-mono px-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mär</span>
                <span>Apr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Okt</span>
                <span>Nov</span>
                <span>Dez</span>
              </div>
              
              {/* Grid Çizgileri - Profesyonel */}
              <div className="absolute left-20 right-0 top-0 h-full pb-12">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="absolute w-full border-t border-gray-700/40" style={{top: `${i * 20}%`}}></div>
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                  <div key={i} className="absolute h-full border-l border-gray-700/30" style={{left: `${i * 8.33}%`}}></div>
                ))}
              </div>
              
              {/* Profesyonel Grafik */}
              <div className="absolute left-20 right-0 top-0 h-full pb-12">
                <svg className="w-full h-full" viewBox="0 0 1000 400">
                  {/* Ana satış çizgisi - Gerçekçi veri */}
                  <path
                    d="M 0 380 L 83 360 L 166 340 L 250 300 L 333 250 L 416 200 L 500 150 L 583 120 L 666 90 L 750 60 L 833 40 L 916 25 L 1000 15"
                    stroke="url(#professionalGradient)"
                    strokeWidth="4"
                    fill="none"
                    className={`animate-draw-line ${showGraph ? 'opacity-100' : 'opacity-0'}`}
                    filter="url(#glow)"
                    style={{opacity: showGraph ? 1 : 0}}
                  />
                  
                  {/* Alt alan doldurma */}
                  <path
                    d="M 0 380 L 83 360 L 166 340 L 250 300 L 333 250 L 416 200 L 500 150 L 583 120 L 666 90 L 750 60 L 833 40 L 916 25 L 1000 15 L 1000 380 L 0 380 Z"
                    fill="url(#areaGradient)"
                    opacity="0.4"
                    className={`animate-draw-area ${showGraph ? 'opacity-100' : 'opacity-0'}`}
                    style={{opacity: showGraph ? 0.4 : 0}}
                  />
                  
                  {/* Gradient ve Efekt Tanımları */}
                  <defs>
                    <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="20%" stopColor="#06b6d4" />
                      <stop offset="40%" stopColor="#8b5cf6" />
                      <stop offset="60%" stopColor="#f59e0b" />
                      <stop offset="80%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Profesyonel Noktalar */}
                  <circle cx="0" cy="380" r="4" fill="#10b981" className={`animate-pulse transition-opacity duration-500 ${showGraph ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '1.5s'}}>
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="250" cy="300" r="4" fill="#06b6d4" className={`animate-pulse transition-opacity duration-500 ${showGraph ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '0.3s', transitionDelay: '2s'}}>
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="500" cy="150" r="4" fill="#8b5cf6" className={`animate-pulse transition-opacity duration-500 ${showGraph ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '0.6s', transitionDelay: '2.5s'}}>
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="750" cy="60" r="4" fill="#f59e0b" className={`animate-pulse transition-opacity duration-500 ${showGraph ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '0.9s', transitionDelay: '3s'}}>
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="1000" cy="15" r="5" fill="#ef4444" className={`animate-pulse transition-opacity duration-500 ${showGraph ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '1.2s', transitionDelay: '3.5s'}}>
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
              {/* Profesyonel Başlık ve İstatistikler */}
              <div className="absolute top-6 left-24">
                <div className="text-white text-xl font-bold mb-2">Live Performance Dashboard</div>
                <div className="text-gray-400 text-sm">Real-time Verkaufsdaten</div>
              </div>
              
              {/* Sağ üst köşe istatistikleri */}
              <div className="absolute top-6 right-6 space-y-3">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                  <div className="text-green-400 text-sm font-semibold">+247%</div>
                  <div className="text-gray-300 text-xs">Umsatzsteigerung</div>
                </div>
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
                  <div className="text-blue-400 text-sm font-semibold">+156%</div>
                  <div className="text-gray-300 text-xs">Conversion Rate</div>
                </div>
                <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                  <div className="text-purple-400 text-sm font-semibold">+89%</div>
                  <div className="text-gray-300 text-xs">Traffic Zuwachs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes draw-line {
          0% {
            stroke-dasharray: 0 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 1000 0;
            opacity: 1;
          }
        }

        .animate-draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          opacity: 0;
          animation: draw-line 6s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes draw-area {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.4;
          }
        }

        .animate-draw-area {
          opacity: 0;
          animation: draw-area 4s ease-in-out forwards;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
