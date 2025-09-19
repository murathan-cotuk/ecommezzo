'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const maxSlides = 3;
  const isInSection = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom > 0;
      
      if (isInView) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isAnimating) return;
        
        const deltaY = e.deltaY;
        
        if (deltaY > 0 && currentSlide < maxSlides - 1) {
          // Scroll down - next slide
          setIsAnimating(true);
          setCurrentSlide(prev => prev + 1);
          setTimeout(() => setIsAnimating(false), 800);
        } else if (deltaY < 0 && currentSlide > 0) {
          // Scroll up - previous slide
          setIsAnimating(true);
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => setIsAnimating(false), 800);
        } else if (deltaY > 0 && currentSlide === maxSlides - 1) {
          // Last slide, allow normal scroll
          isInSection.current = false;
          const nextSection = sectionRef.current.nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (deltaY < 0 && currentSlide === 0) {
          // First slide, allow normal scroll up
          isInSection.current = false;
          const prevSection = sectionRef.current.previousElementSibling;
          if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        
        return false;
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom > 0;
      
      if (isInView && !isInSection.current) {
        isInSection.current = true;
        setCurrentSlide(0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide, isAnimating, maxSlides]);

  const slides = [
    {
      id: 1,
      title: "E-Commerce",
      subtitle: "Wachstum & Erfolg",
      heading: "Ihr Erfolg ist",
      highlight: "unser Ziel",
      description: "Mit über 5 Jahren Erfahrung in der E-Commerce-Branche helfen wir Unternehmen dabei, ihre Online-Präsenz zu optimieren und nachhaltiges Wachstum zu erzielen. Von der Strategieentwicklung bis zur Umsetzung begleiten wir Sie durch jeden Schritt.",
      button1: "Jetzt starten",
      button2: "Mehr erfahren",
      gradient: "from-yellow-300 to-orange-300"
    },
    {
      id: 2,
      title: "Digital Marketing",
      subtitle: "Reichweite & Conversion",
      heading: "Maximale",
      highlight: "Reichweite",
      description: "Durch gezieltes Digital Marketing erreichen wir Ihre Zielgruppe effektiv. SEO, Social Media, Google Ads und Content Marketing sorgen für nachhaltiges Wachstum und messbare Ergebnisse in der digitalen Landschaft.",
      button1: "Marketing starten",
      button2: "Strategie ansehen",
      gradient: "from-cyan-300 to-blue-300"
    },
    {
      id: 3,
      title: "Web Design",
      subtitle: "Kreativität & Funktionalität",
      heading: "Einzigartige",
      highlight: "Websites",
      description: "Wir erstellen moderne, responsive Websites, die nicht nur gut aussehen, sondern auch Ihre Geschäftsziele erreichen. Von der Konzeption bis zur Umsetzung - wir machen Ihre Vision zur Realität.",
      button1: "Projekt starten",
      button2: "Portfolio ansehen",
      gradient: "from-purple-300 to-pink-300"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

      {/* Slide Container */}
      <div className="flex h-full transition-transform duration-800 ease-in-out" 
           style={{ 
             transform: `translateX(-${currentSlide * 100}%)`
           }}>
        
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="w-full h-full flex-shrink-0 flex items-center justify-center px-8"
          >
            <div className="max-w-8xl mx-auto flex items-center gap-16">
              {/* Sol Taraf - Büyük Görsel */}
              <div className="w-[700px] h-[700px] flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl backdrop-blur-sm border-2 border-white/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative w-full h-full bg-white/20 rounded-3xl overflow-hidden border-4 border-white/30">
                  <img 
                    src="/KinetiqPhysioMed/KinetiqPhysiomed.jpg" 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                      <h3 className="text-4xl font-bold mb-3">{slide.title}</h3>
                      <p className="text-xl opacity-90">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - İçerik */}
              <div className="flex-1 max-w-2xl">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-6xl font-black text-white mb-6 leading-tight">
                      {slide.heading}
                      <span className={`block bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                        {slide.highlight}
                      </span>
                    </h2>
                    <p className="text-2xl text-white/90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg">
                      {slide.button1}
                    </button>
                    <button className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                      {slide.button2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
            
      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-white/80 to-white rounded-full transition-all duration-800 ease-in-out shadow-lg"
          style={{ width: `${((currentSlide + 1) / maxSlides) * 100}%` }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border-2 border-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 border-2 border-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
}
