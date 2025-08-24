'use client';
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-100/60 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-yellow-100/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-50/40 rounded-full"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-200/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-yellow-200/25 rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Hero Icon */}
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-4xl">💼</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-orange-600 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Starten Sie Ihr Projekt mit uns
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nachdem wir Ihnen unsere Expertise in <span className="font-bold text-orange-600">Shopify-Entwicklung</span>, 
            <span className="font-bold text-yellow-600"> WordPress-Lösungen</span> und 
            <span className="font-bold text-gray-800"> SEO-Optimierung</span> vorgestellt haben, 
            laden wir Sie ein, den nächsten Schritt zu wagen. Lassen Sie uns in einem 
            <span className="font-bold text-orange-600"> kostenlosen Strategiegespräch</span> Ihre Vision besprechen 
            und gemeinsam eine <span className="font-bold text-yellow-600">maßgeschneiderte Lösung</span> entwickeln, 
            die Ihr Unternehmen nachhaltig voranbringt.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
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
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/termin-buchen"
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 10px 25px rgba(249, 115, 22, 0.3)",
                  "0 15px 35px rgba(249, 115, 22, 0.5)",
                  "0 10px 25px rgba(249, 115, 22, 0.3)",
                ],
              }}
              transition={{
                scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotate: [0, -2, 2, 0],
                transition: { 
                  duration: 0.4,
                  scale: { type: "spring", stiffness: 300, damping: 10 },
                  rotate: { duration: 0.6, ease: "easeInOut" }
                }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              <span className="relative z-10 mr-3 font-extrabold tracking-wide">Jetzt Termin buchen</span>
              <motion.span
                className="relative z-10 text-2xl"
                animate={{ 
                  x: [0, 8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
