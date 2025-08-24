'use client';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function ShopifySection() {
  return (
    <section id="shopify" className="bg-gradient-to-br from-emerald-800 via-slate-900 to-green-900 py-32 px-6 relative overflow-hidden">
      {/* 3.1. Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-200/25 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-60 h-60 bg-slate-200/20 rounded-full"></div>
      </motion.div>

      {/* 3.2.Floating Elements with Different Animations */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      >
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-300/40 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-purple-300/35 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
      >
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-teal-300/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-blue-300/40 rounded-full"></div>
      </motion.div>

      {/* 3.3. Pulsing Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 5 }}
      >
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-300/20 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/*3.4. Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <ShoppingBagIcon className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Shopify E-Commerce Experte
          </h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-white">
            <span className="font-bold text-amber-300">Online-Shop Spezialist</span> für professionelle E-Commerce Lösungen. 
            Shopify ist die <span className="font-bold text-blue-200">beste Wahl für Online-Shops</span> - 
            von der Produktpräsentation bis zur Zahlungsabwicklung. Ihr Shop wird nicht nur schön aussehen, 
            sondern auch <span className="font-bold text-blue-300">maximale Umsätze</span> generieren.
          </p>
        </motion.div>

        {/* 3.5. 3D Cards Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: ShoppingBagIcon,
              title: "E-Commerce Shop Design",
              desc: "Professionelle Online-Shops mit optimierter Produktpräsentation",
              features: ["Produktkataloge", "Shopping Cart", "Checkout Optimierung"],
              color: "from-teal-500 to-cyan-500",
              delay: 0.2
            },
            {
              icon: GlobeAltIcon,
              title: "Payment & Shipping",
              desc: "Sichere Zahlungsabwicklung und optimierte Versandlösungen",
              features: ["Payment Gateways", "Versandoptionen", "Steuerberechnung"],
              color: "from-blue-500 to-indigo-500",
              delay: 0.4
            },
            {
              icon: ChartBarIcon,
              title: "Shop Conversion & Sales",
              desc: "Datengetriebene Optimierung für maximale Umsätze",
              features: ["A/B Testing", "Analytics", "Umsatzsteigerung"],
              color: "from-purple-500 to-pink-500",
              delay: 0.6
            }
          ].map(({ icon: Icon, title, desc, features, color, delay }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white border-2 border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-400/50 hover:border-amber-400 hover:scale-105 transition-all duration-500 transform perspective-1000 backdrop-blur-sm"
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 transform rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-emerald-600 transition-colors duration-300">{title}</h3>
              <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-300">{desc}</p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm text-black group-hover:text-stone-700 transition-colors duration-300"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 3.6. Shopify Interactive Features Section */}
        <motion.div 
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 mb-20 border-2 border-white/30 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-black">Warum Shopify für E-Commerce?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-700 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-sm font-bold text-white">🛒</span>
                E-Commerce Vorteile
              </h4>
              <div className="space-y-4">
                {[
                  { 
                    label: "Online-Shop Spezialist", 
                    desc: "Professionelle E-Commerce Lösungen mit Shopify",
                    icon: "🛒"
                  },
                  { 
                    label: "Payment & Shipping", 
                    desc: "Sichere Zahlungsabwicklung und Versandlösungen",
                    icon: "💳"
                  },
                  { 
                    label: "Shop Conversion", 
                    desc: "Optimierung für maximale Umsätze und Conversion",
                    icon: "📈"
                  },
                  { 
                    label: "E-Commerce Apps", 
                    desc: "Maßgeschneiderte Apps für Ihren Online-Shop",
                    icon: "🔧"
                  }
                ].map(({ label, desc, icon }, index) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="group p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <div>
                        <h5 className="font-bold text-black group-hover:text-blue-700 transition-colors duration-300">{label}</h5>
                        <p className="text-sm text-gray-700 mt-1">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-700 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-sm font-bold text-black">⚡</span>
                Shopify Technologie
              </h4>
              <div className="space-y-3 text-gray-700">
                {[
                  { skill: "Liquid Template Language", level: " ", icon: "🎨" },
                  { skill: "Shopify API Integration", level: " ", icon: "🔌" },
                  { skill: "E-Commerce Apps", level: " ", icon: "📱" },
                  { skill: "Shop Theme Design", level: " ", icon: "🛒" },
                  { skill: "Payment Integration", level: " ", icon: "💳" },
                  { skill: "Shop Analytics", level: " ", icon: "📊" }
                ].map(({ skill, level, icon }, index) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex items-center justify-between p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/40 hover:bg-indigo-50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <span className="text-sm text-black">{skill}</span>
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                      {level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3.7. Accordion Section - Pros & Cons */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Shopify vs. Andere Plattformen</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center">✓</span>
                Shopify Vorteile
              </h4>
              <div className="space-y-4">
                {[
                  "Einfache Bedienung - auch für Anfänger",
                  "Sichere Hosting-Lösung mit 99.9% Uptime",
                  "Umfangreiche App-Integration (4000+ Apps)",
                  "24/7 Support von Shopify",
                  "Automatische Updates und Sicherheit",
                  "Mobile-First Design",
                  "Multi-Channel Verkauf (Social Media, Amazon, etc.)",
                  "Eingebaute Analytics und Reporting"
                ].map((pro, index) => (
                  <motion.div 
                    key={pro}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{pro}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">✗</span>
                Andere Plattformen Nachteile
              </h4>
              <div className="space-y-4">
                {[
                  "Komplexe Einrichtung und Wartung",
                  "Unsicherere Hosting-Lösungen",
                  "Begrenzte App-Auswahl",
                  "Teurer Support und Wartung",
                  "Manuelle Updates und Sicherheitspatches",
                  "Schwierige Mobile-Optimierung",
                  "Eingeschränkte Multi-Channel Optionen",
                  "Zusätzliche Kosten für Analytics"
                ].map((con, index) => (
                  <motion.div 
                    key={con}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                    <span className="text-sm">{con}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
