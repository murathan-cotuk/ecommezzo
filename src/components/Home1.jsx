'use client';

import { useState, useEffect } from 'react';

export default function Home1() {
  const [activeAccordion, setActiveAccordion] = useState(0);
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

        {/* Alt Kısım - Yatay Satış Artış Grafik Animasyonu */}
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Verkaufsentwicklung</h2>
            <p className="text-gray-600">1 Jahr mit Ecommezzo - Durchschnittliche Steigerung</p>
          </div>
          
          <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="relative h-full">
              {/* Y Ekseni - Daha Profesyonel */}
              <div className="absolute left-0 top-0 h-full w-16 flex flex-col justify-between text-gray-400 text-sm font-mono">
                <span>€200K</span>
                <span>€150K</span>
                <span>€100K</span>
                <span>€50K</span>
                <span>€0</span>
              </div>
              
              {/* Grid Çizgileri - Daha İnce */}
              <div className="absolute left-16 right-0 h-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="absolute w-full border-t border-gray-700/50" style={{top: `${i * 25}%`}}></div>
                ))}
                {/* Dikey grid çizgileri */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div key={i} className="absolute h-full border-l border-gray-700/30" style={{left: `${i * 10}%`}}></div>
                ))}
              </div>
              
              {/* Profesyonel Borsa Grafiği */}
              <div className="absolute left-16 right-0 top-0 h-full">
                <svg className="w-full h-full" viewBox="0 0 1000 300">
                  {/* Ana satış çizgisi - 0'dan başlayan */}
                  <path
                    d="M 0 300 L 50 280 L 100 260 L 150 240 L 200 220 L 250 200 L 300 180 L 350 160 L 400 140 L 450 120 L 500 100 L 550 80 L 600 60 L 650 50 L 700 40 L 750 30 L 800 25 L 850 20 L 900 15 L 950 12 L 1000 10"
                    stroke="url(#stockGradient)"
                    strokeWidth="3"
                    fill="none"
                    className={`animate-draw-line ${showGraph ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Alt alan doldurma */}
                  <path
                    d="M 0 300 L 50 280 L 100 260 L 150 240 L 200 220 L 250 200 L 300 180 L 350 160 L 400 140 L 450 120 L 500 100 L 550 80 L 600 60 L 650 50 L 700 40 L 750 30 L 800 25 L 850 20 L 900 15 L 950 12 L 1000 10 L 1000 300 L 0 300 Z"
                    fill="url(#areaGradient)"
                    opacity="0.3"
                    className={`animate-draw-area ${showGraph ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Gradient tanımları */}
                  <defs>
                    <linearGradient id="stockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="25%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="75%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Profesyonel noktalar */}
                  {showGraph && (
                    <>
                      <circle cx="0" cy="300" r="3" fill="#10b981" className="animate-pulse">
                        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="250" cy="200" r="3" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.5s'}}>
                        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="500" cy="100" r="3" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '1s'}}>
                        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="750" cy="30" r="3" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '1.5s'}}>
                        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="1000" cy="10" r="4" fill="#ef4444" className="animate-pulse" style={{animationDelay: '2s'}}>
                        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
                      </circle>
                    </>
                  )}
                </svg>
              </div>
              
              {/* Profesyonel Başlık */}
              <div className="absolute top-4 left-20">
                <div className="text-white text-lg font-semibold">Verkaufsentwicklung</div>
                <div className="text-gray-400 text-sm">Live Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes draw-line {
          0% {
            stroke-dasharray: 0 1000;
          }
          100% {
            stroke-dasharray: 1000 0;
          }
        }

        .animate-draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 8s ease-in-out forwards;
        }

        @keyframes draw-area {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.3;
          }
        }

        .animate-draw-area {
          animation: draw-area 8s ease-in-out forwards;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
