'use client';

import { useState, useEffect } from 'react';

export default function Home3() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Müller",
      company: "TechStart GmbH",
      role: "CEO",
      content: "Ecommezzo hat unseren Online-Shop komplett transformiert. Die Verkäufe sind um 340% gestiegen!",
      avatar: "/Ecommezzo-Logo.png",
      rating: 5
    },
    {
      name: "Michael Weber",
      company: "Fashion Forward",
      role: "Marketing Director",
      content: "Professionelle Betreuung von Anfang bis Ende. Unser Shopify Shop läuft perfekt!",
      avatar: "/Ecommezzo-Logo.png",
      rating: 5
    },
    {
      name: "Anna Schmidt",
      company: "Digital Solutions",
      role: "Founder",
      content: "Die beste E-Commerce Agentur, mit der wir je gearbeitet haben. Absolute Empfehlung!",
      avatar: "/Ecommezzo-Logo.png",
      rating: 5
    }
  ];

  const stats = [
    { number: "340%", label: "Umsatzsteigerung" },
    { number: "4.2x", label: "ROAS" },
    { number: "280%", label: "Conversion Rate" },
    { number: "24/7", label: "Support" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Was unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Kunden sagen</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Über 500+ zufriedene Kunden vertrauen auf unsere Expertise. Hier sind einige ihrer Erfolgsgeschichten.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-white/50 text-center shadow-xl">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-pink-200 mr-4"
                      />
                      <div className="text-left">
                        <div className="text-gray-800 font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                        <div className="text-pink-500 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-pink-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Werden Sie unser nächster Erfolg!
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr E-Commerce Business auf das nächste Level bringen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              Kostenlose Beratung
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              Portfolio ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
