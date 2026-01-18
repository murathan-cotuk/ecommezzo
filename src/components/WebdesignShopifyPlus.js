'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  BoltIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  ServerIcon,
  LockClosedIcon,
  CpuChipIcon
} from "@heroicons/react/24/solid";

export default function ShopifyPlusSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="shopify-plus" className="bg-white py-20 px-6 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section with Shopify Plus Logo */}
        <motion.div 
          className="text-center mb-16"
          {...(isMobile ? {} : {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          {/* Shopify Plus Logo */}
          <motion.div
            className="flex justify-center mb-8"
            {...(isMobile ? {} : {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 }
            })}
          >
            <div className="relative w-64 h-32 md:w-80 md:h-40">
              <Image
                src="/Shopifyplus.png"
                alt="Shopify Plus"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 px-6 py-3 rounded-full mb-6 border border-teal-200">
            <SparklesIcon className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">Enterprise E-Commerce Lösung</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Skalieren ohne Grenzen mit Shopify Plus
          </h2>
          
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700 font-medium">
            <span className="font-bold text-teal-600">Shopify Plus</span> ist die Enterprise-Lösung für wachsende Unternehmen, 
            die <span className="font-bold text-cyan-600">maximale Performance</span>, 
            <span className="font-bold text-purple-600"> unbegrenzte Skalierbarkeit</span> und 
            <span className="font-bold text-pink-600"> höchste Conversion-Raten</span> benötigen.
          </p>
        </motion.div>

        {/* Key Benefits with Animations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: RocketLaunchIcon,
              title: "Enterprise Performance",
              desc: "Shopify Plus bietet unvergleichliche Ladezeiten und 99.99% Uptime-Garantie. Ihre Kunden erleben eine blitzschnelle Shopping-Erfahrung, die nachweislich zu höheren Conversion-Raten führt.",
              stats: "36% mehr Umsatz",
              color: "from-teal-500 to-cyan-500",
              bgColor: "bg-teal-50",
              borderColor: "border-teal-200"
            },
            {
              icon: ShieldCheckIcon,
              title: "Enterprise Security & Support",
              desc: "Dedizierter Account Manager, 24/7 Priority Support und Level 1 PCI DSS Compliance. Ihre Daten und die Ihrer Kunden sind optimal geschützt.",
              stats: "24/7 Priority Support",
              color: "from-blue-500 to-indigo-500",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200"
            },
            {
              icon: ChartBarIcon,
              title: "Maximale Conversion & ROI",
              desc: "Shopify Plus-Shops generieren durchschnittlich 36% mehr Umsatz. Erweiterte Analytics, A/B Testing und personalisierte Checkouts optimieren jeden Aspekt für maximale Conversion.",
              stats: "36% höhere Conversion",
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200"
            }
          ].map(({ icon: Icon, title, desc, stats, color, bgColor, borderColor }, i) => (
            <motion.div
              key={title}
              className={`group bg-white border-2 ${borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${bgColor}`}
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: i * 0.15 }
              })}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                {...(isMobile ? {} : {
                  whileHover: { scale: 1.1, rotate: 5 },
                  transition: { type: "spring", stiffness: 300 }
                })}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{desc}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg">
                <ArrowTrendingUpIcon className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold text-teal-700">{stats}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shopify Plus Exclusive Features */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-20 border-2 border-gray-200 shadow-xl"
          {...(isMobile ? {} : {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Exklusive Shopify Plus Features
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Funktionen, die nur mit Shopify Plus verfügbar sind und Ihrem Business einen echten Wettbewerbsvorteil verschaffen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ServerIcon,
                title: "Unbegrenzte Skalierbarkeit",
                desc: "Von 100 zu 100.000 Produkten ohne Performance-Einbußen",
                color: "text-teal-600"
              },
              {
                icon: BoltIcon,
                title: "Script Editor & APIs",
                desc: "Erweiterte Anpassungsmöglichkeiten für individuelle Lösungen",
                color: "text-blue-600"
              },
              {
                icon: GlobeAltIcon,
                title: "Multi-Store & Multi-Currency",
                desc: "Bis zu 20 Sprachen und automatische Währungsumrechnung",
                color: "text-purple-600"
              },
              {
                icon: CpuChipIcon,
                title: "Shopify Flow",
                desc: "Erweiterte Automatisierung für komplexe Workflows",
                color: "text-pink-600"
              },
              {
                icon: LockClosedIcon,
                title: "Custom Checkout",
                desc: "Checkout ohne Shopify-Branding für Ihre Marke",
                color: "text-indigo-600"
              },
              {
                icon: ChartBarIcon,
                title: "Launchpad",
                desc: "Automatisierte Marketing-Kampagnen und Flash Sales",
                color: "text-cyan-600"
              },
              {
                icon: StarIcon,
                title: "Priority Support",
                desc: "Dedizierter Account Manager und 24/7 Support",
                color: "text-orange-600"
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Erweiterte Analytics",
                desc: "Detaillierte Reports und Conversion-Tracking",
                color: "text-green-600"
              }
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <motion.div
                key={title}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
                {...(isMobile ? {} : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: index * 0.05 },
                  whileHover: { y: -5 }
                })}
              >
                <Icon className={`w-10 h-10 ${color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors duration-300">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 mb-20 border-2 border-gray-200 shadow-xl"
          {...(isMobile ? {} : {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Shopify Plus vs. Standard Shopify
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-700 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-lg">
                      <span className="font-bold text-teal-700">Shopify Plus</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="font-bold text-gray-600">Standard Shopify</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Bandbreite & Traffic", plus: "Unbegrenzt", standard: "Begrenzt" },
                  { feature: "Account Manager", plus: "Dedizierter Manager", standard: "Standard Support" },
                  { feature: "API-Zugriffe", plus: "Erweiterte APIs", standard: "Eingeschränkt" },
                  { feature: "Checkout-Branding", plus: "Ohne Shopify-Branding", standard: "Mit Shopify-Branding" },
                  { feature: "Automatisierung", plus: "Shopify Flow", standard: "Basis-Automatisierung" },
                  { feature: "Mehrsprachigkeit", plus: "Bis zu 20 Sprachen", standard: "Begrenzt" },
                  { feature: "Multi-Currency", plus: "Automatische Umrechnung", standard: "Eingeschränkt" },
                  { feature: "Marketing-Tools", plus: "Launchpad & erweiterte Tools", standard: "Standard-Tools" },
                  { feature: "Analytics", plus: "Erweiterte Reports", standard: "Basis Analytics" },
                  { feature: "Support", plus: "24/7 Priority Support", standard: "Standard Support" },
                  { feature: "Conversion-Rate", plus: "Bis zu 36% höher", standard: "Standard-Rate" },
                  { feature: "Skalierbarkeit", plus: "Enterprise-Level", standard: "Begrenzt" }
                ].map(({ feature, plus, standard }, index) => (
                  <motion.tr
                    key={feature}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    {...(isMobile ? {} : {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.3, delay: index * 0.05 }
                    })}
                  >
                    <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-2 text-teal-700 font-semibold">
                        <CheckBadgeIcon className="w-5 h-5 text-teal-600" />
                        {plus}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">{standard}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Business Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200"
            {...(isMobile ? {} : {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <StarIcon className="w-8 h-8 mr-3 text-teal-600" />
              ROI & Business Impact
            </h4>
            <div className="space-y-4">
              {[
                "Durchschnittlich 36% höhere Conversion-Raten",
                "Reduzierte Abandoned-Cart-Rate durch optimierte Checkouts",
                "Höhere durchschnittliche Bestellwerte durch Personalisierung",
                "Geringere Betriebskosten durch Automatisierung",
                "Schnellere Time-to-Market für neue Produkte",
                "Bessere Kundenbindung durch personalisierte Erfahrungen"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-start p-4 bg-white rounded-lg border border-teal-100 hover:border-teal-300 transition-all duration-300"
                  {...(isMobile ? {} : {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.3, delay: index * 0.1 }
                  })}
                >
                  <CheckBadgeIcon className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200"
            {...(isMobile ? {} : {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BoltIcon className="w-8 h-8 mr-3 text-purple-600" />
              Technische Vorteile
            </h4>
            <div className="space-y-4">
              {[
                "99.99% Uptime-Garantie für maximale Verfügbarkeit",
                "CDN-optimierte Geschwindigkeit weltweit",
                "Level 1 PCI DSS Compliance für höchste Sicherheit",
                "Automatische Sicherheitsupdates und Patches",
                "Erweiterte Backup- und Wiederherstellungsoptionen",
                "Skalierbare Infrastruktur für unbegrenztes Wachstum"
              ].map((advantage, index) => (
                <motion.div
                  key={advantage}
                  className="flex items-start p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all duration-300"
                  {...(isMobile ? {} : {
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.3, delay: index * 0.1 }
                  })}
                >
                  <CheckBadgeIcon className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
