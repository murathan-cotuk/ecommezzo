'use client';
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
     
      

      {/* Floating Elements */}
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Hero Icon */}
          <div className="inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-4xl">💼</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Starten Sie Ihr Projekt mit uns
          </h2>

          {/* Subtitle */}
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700 mb-12">
            Lassen Sie uns in einem 
            <span className="font-bold text-orange-600"> kostenlosen Strategiegespräch</span> Ihre Vision besprechen 
            und gemeinsam eine <span className="font-bold text-yellow-600">maßgeschneiderte Lösung</span> entwickeln, 
            die Ihr Unternehmen nachhaltig voranbringt.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💼",
                title: "Professionelle Beratung",
                desc: "Kostenlose Erstberatung mit individueller Lösungsfindung"
              },
              {
                icon: "⚡",
                title: "Schnelle Umsetzung",
                desc: "Moderne Technologien für zeitnahe Projektabwicklung"
              },
              {
                icon: "🎯",
                title: "Erfolgsgarantie",
                desc: "Bewährte Methoden für messbare Ergebnisse"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="/kontakt"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 mr-3 font-extrabold tracking-wide">Kontakt</span>
              <span className="relative z-10 text-2xl">→</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-sm font-medium">Kostenlose Beratung</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              <span className="text-sm font-medium">Schnelle Antwort</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔒</span>
              <span className="text-sm font-medium">100% Vertraulich</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
