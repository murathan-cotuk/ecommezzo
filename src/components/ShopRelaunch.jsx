'use client';
import { motion } from "framer-motion";
import { ShoppingBagIcon, ArrowPathIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function ShopRelaunch() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="shoprelaunch" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Shop Relaunch{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block text-[#c499ba] origin-center"
            >
              🚀
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Verwandeln Sie Ihren bestehenden Online-Shop in eine Verkaufsmaschine. 
            Mit unserem Shop Relaunch Service steigern wir Ihre Conversion-Rate und optimieren die Benutzererfahrung.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Warum einen Shop Relaunch?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ihr Online-Shop ist das Herzstück Ihres E-Commerce-Business. 
                Ein professioneller Relaunch kann Ihre Verkäufe um bis zu 300% steigern 
                und die Kundenzufriedenheit erheblich verbessern.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ChartBarIcon,
                  title: "Conversion-Optimierung",
                  desc: "Steigerung der Verkaufsrate durch UX/UI-Verbesserungen"
                },
                {
                  icon: ArrowPathIcon,
                  title: "Performance-Boost",
                  desc: "Schnellere Ladezeiten für bessere SEO-Rankings"
                },
                {
                  icon: ShoppingBagIcon,
                  title: "Mobile Optimierung",
                  desc: "Perfekte Darstellung auf allen Geräten"
                },
                {
                  icon: CurrencyDollarIcon,
                  title: "ROI-Steigerung",
                  desc: "Messbare Umsatzsteigerung durch Optimierungen"
                }
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="h-8 w-8 text-[#c499ba] mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#c499ba] to-[#3e304c] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Ihre Vorteile im Überblick</h4>
              <div className="space-y-4">
                {[
                  "📈 Bis zu 300% höhere Conversion-Rate",
                  "⚡ 50% schnellere Ladezeiten",
                  "📱 100% mobile Optimierung",
                  "🎯 Verbesserte Benutzererfahrung",
                  "🔍 SEO-Optimierung für bessere Rankings",
                  "💰 Messbare Umsatzsteigerung"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-lg"
                  >
                    <span className="mr-3">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unser Relaunch-Prozess
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                desc: "Detaillierte Analyse Ihres bestehenden Shops und Identifikation von Optimierungspotenzialen"
              },
              {
                step: "02", 
                title: "Konzept",
                desc: "Entwicklung eines maßgeschneiderten Relaunch-Konzepts basierend auf Ihren Zielen"
              },
              {
                step: "03",
                title: "Umsetzung",
                desc: "Professionelle Umsetzung mit modernsten Technologien und Best Practices"
              },
              {
                step: "04",
                title: "Launch",
                desc: "Sorgfältiger Go-Live und kontinuierliche Optimierung für maximalen Erfolg"
              }
            ].map(({ step, title, desc }, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#c499ba] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#c499ba] to-[#3e304c] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Bereit für Ihren Shop Relaunch?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie uns gemeinsam Ihren Online-Shop zu einer Verkaufsmaschine verwandeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="px-8 py-4 bg-white text-[#3e304c] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
            >
              Kostenlose Beratung anfragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
