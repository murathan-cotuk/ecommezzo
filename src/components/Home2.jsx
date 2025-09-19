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
          setTimeout(() => setIsAnimating(false), 700);
        } else if (deltaY < 0 && currentSlide > 0) {
          // Scroll up - previous slide
          setIsAnimating(true);
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => setIsAnimating(false), 700);
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
      className="w-full h-screen bg-green-600 relative overflow-hidden"
    >
      {/* Slide Container with Smooth Animation */}
      <div className="flex h-full transition-transform duration-700 ease-in-out" 
           style={{ 
             transform: `translateX(-${currentSlide * 100}%)`
           }}>
        
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="w-full h-full flex-shrink-0 flex items-center justify-center px-6"
          >
            <div className="max-w-7xl mx-auto flex items-center">
              {/* Sol Taraf - 600x600 Görsel */}
              <div className="w-[600px] h-[600px] flex-shrink-0 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border-4 border-white/30 relative overflow-hidden">
                <img 
                  src="/KinetiqPhysioMed/KinetiqPhysiomed.jpg" 
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center text-white relative z-10">
                  <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-xl opacity-90">{slide.subtitle}</p>
                </div>
              </div>

              {/* Sağ Taraf - Başlık, Metin, Buton */}
              <div className="flex-1 pl-16 max-w-lg">
                <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                  {slide.heading}
                  <span className={`block bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                    {slide.highlight}
                  </span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    {slide.button1}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1">
                    {slide.button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white/70 rounded-full transition-all duration-800 ease-in-out"
          style={{ width: `${((currentSlide + 1) / maxSlides) * 100}%` }}
        />
      </div>

      {/* Arka Plan Dekoratif Elementler */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-white/20 rounded-full"></div>
      </div>
    </section>
  );
}
