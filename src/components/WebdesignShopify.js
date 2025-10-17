'use client';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function ShopifySection() {
  return (
    <section id="shopify" className="bg-gradient-to-br from-emerald-800 via-slate-900 to-green-900 py-16 px-6 relative overflow-hidden">

      {/* 3.3. Static Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full"></div>
      </div>

     

      <div className="max-w-7xl mx-auto relative z-10">
        {/*3.4. Hero Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Shopify E-Commerce Experte
          </h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-white">
            <span className="font-bold">Online-Shop Spezialist</span> für professionelle E-Commerce Lösungen. 
            Shopify ist die beste Wahl für Online-Shops - 
            von der Produktpräsentation bis zur Zahlungsabwicklung. Ihr Shop wird nicht nur schön aussehen, 
            sondern auch maximale Umsätze generieren.
          </p>
        </div>

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
            <div
              key={title}
              className="group bg-white border-2 border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-400/50 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-emerald-600 transition-colors duration-300">{title}</h3>
              <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-300">{desc}</p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-sm text-black group-hover:text-stone-700 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-300"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3.6. Shopify Interactive Features Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 mb-20 border-2 border-white/30 shadow-2xl">
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
                  <div 
                    key={label}
                    className="group p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/40 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <div>
                        <h5 className="font-bold text-black group-hover:text-blue-700 transition-colors duration-300">{label}</h5>
                        <p className="text-sm text-gray-700 mt-1">{desc}</p>
                      </div>
                    </div>
                  </div>
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
                  <div 
                    key={skill}
                    className="group flex items-center justify-between p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/40 hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <span className="text-sm text-black">{skill}</span>
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3.7. Accordion Section - Pros & Cons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-20">
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
                  <div 
                    key={pro}
                    className="flex items-start p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{pro}</span>
                  </div>
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
                  <div 
                    key={con}
                    className="flex items-start p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                    <span className="text-sm">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
