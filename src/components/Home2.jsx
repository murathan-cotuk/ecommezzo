'use client';

import { useState } from 'react';

export default function Home2() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const serviceCards = [
    {
      id: 1,
      title: "E-Commerce Entwicklung",
      description: "Professionelle Online-Shops mit Shopify, WooCommerce und Custom-Lösungen",
      icon: "🛒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "SEO, Google Ads, Social Media Marketing und Conversion-Optimierung",
      icon: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Webdesign & UX",
      description: "Moderne, responsive Websites mit Fokus auf Benutzerfreundlichkeit",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Marktplatz Integration",
      description: "Amazon, eBay, Etsy und andere Plattformen für maximale Reichweite",
      icon: "🏪",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Taraf - SEO Metni */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Warum Ecommezzo Ihre Erfolgsgeschichte schreibt
            </h2>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                In der dynamischen Welt des E-Commerce sind wir mehr als nur eine Agentur – wir sind Ihre strategischen Partner für nachhaltigen Online-Erfolg. Mit über 5 Jahren Erfahrung in der digitalen Transformation von Unternehmen haben wir uns darauf spezialisiert, komplexe E-Commerce-Herausforderungen in messbare Erfolge zu verwandeln.
              </p>
              
              <p className="mb-4">
                Unser Expertenteam kombiniert technische Exzellenz mit tiefgreifendem Marktverständnis, um maßgeschneiderte Lösungen zu entwickeln, die nicht nur Ihre Verkäufe steigern, sondern auch Ihre Markenidentität stärken. Von der initialen Strategieentwicklung bis zur kontinuierlichen Optimierung begleiten wir Sie durch jeden Schritt Ihrer digitalen Reise.
              </p>
              
              <p className="mb-4">
                Wir verstehen, dass jeder Online-Shop einzigartig ist. Deshalb setzen wir auf individuelle Ansätze, die speziell auf Ihre Zielgruppe, Ihr Produktportfolio und Ihre Geschäftsziele zugeschnitten sind. Unsere Shopify-Expertise, kombiniert mit modernsten Webdesign-Prinzipien und datengetriebenen Marketing-Strategien, sorgt dafür, dass Ihr Online-Shop nicht nur funktional, sondern auch konversionsoptimiert ist.
              </p>
              
              <p className="mb-4">
                Unser Erfolg misst sich an Ihrem Erfolg. Mit durchschnittlichen Conversion-Rate-Steigerungen von 40% und ROI-Verbesserungen von über 200% haben wir bereits über 150 Unternehmen dabei geholfen, ihre Online-Präsenz zu revolutionieren. Von Start-ups bis hin zu etablierten Marken – wir schaffen die technische Infrastruktur und das Marketing-Ökosystem, das Ihr Unternehmen braucht, um in der digitalen Landschaft zu dominieren.
              </p>
              
              <p>
                Vertrauen Sie auf unsere bewährten Methoden, innovative Technologien und unerschütterliche Hingabe an Qualität. Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen und Ihr Unternehmen an die Spitze des digitalen Handels führen.
              </p>
            </div>
          </div>

          {/* Sağ Taraf - Havada Uçan Kartlar */}
          <div className="relative h-96">
            <div className="grid grid-cols-2 gap-6 h-full">
              {serviceCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    hoveredCard === card.id 
                      ? 'scale-110 rotate-3 translate-y-[-20px] shadow-2xl' 
                      : 'hover:scale-105 hover:rotate-1 hover:translate-y-[-10px]'
                  }`}
                  style={{
                    transform: hoveredCard === card.id 
                      ? 'scale(1.1) rotate(3deg) translateY(-20px)' 
                      : hoveredCard === null 
                        ? `translateY(${index * 5}px) rotate(${index * 2}deg)` 
                        : 'scale(1.05) rotate(1deg) translateY(-10px)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: hoveredCard === card.id ? 20 : 10 - index
                  }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between text-white relative overflow-hidden`}>
                    
                    {/* Hover Efekti - Parçacık Animasyonu */}
                    {hoveredCard === card.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                        <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{card.description}</p>
                    </div>
                    
                    {/* Alt kısım - Ok işareti */}
                    <div className="relative z-10 flex justify-end">
                      <div className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === card.id ? 'bg-white/30 scale-110' : ''
                      }`}>
                        <span className="text-white text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Arka Plan Dekoratif Elementler */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
