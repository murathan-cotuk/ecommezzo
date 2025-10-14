'use client';

import { motion } from "framer-motion";
import ConversionRateCalculator from '../../components/ConversionRateCalculator';
import { ChartBarIcon, ArrowTrendingUpIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function Conversion() {
    return (
    <div className="text-gray-900 bg-[#fff6e3]">
         {/* Hero Section */}
      <section className="w-full min-h-[100vh] sm:h-[800px] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden" style={{backgroundImage: 'url(/ConversionHeader.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="w-full lg:w-1/2 pl-0 lg:pl-40 pt-20 pb-10 lg:pb-20 z-20 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pb-6 lg:pb-10 bg-gradient-to-r from-[#4c7266] via-[#3ca384] to-[#649385] bg-clip-text text-transparent">
              Conversion Rate Rechner
        </h1>
              <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 pb-10 lg:pb-20 text-white leading-relaxed">
                Ihre Website ist Ihr digitaler erster Eindruck – wir gestalten sie modern, schnell und benutzerfreundlich, um Kunden zu gewinnen und Ihre Marke zu stärken.
              </p>
              <a
                href="/kontakt"
                className="block w-fit mx-auto lg:mx-0"
              >
                <button className="px-4 sm:px-8 py-3 sm:py-6 bg-gradient-to-r from-[#3ca384] to-[#649385] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#97cabb] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3 text-sm sm:text-lg">
                  Kontakt Aufnehmen
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </a>
            </div>
      </section>
      <style jsx global>{`
        /* Mobile hero adjustments to mirror homepage behavior */
        @media (max-width: 1024px) {
          section:first-of-type {
            min-height: clamp(260px, 62vw, 560px);
            height: auto;
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none !important;
            position: relative;
          }

          section:first-of-type > div:nth-of-type(1) {
            position: relative;
            z-index: 2;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            max-width: 680px;
          }
        }

        @media (max-width: 640px) {
          section:first-of-type::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url('/ConversionHeader.png');
            background-repeat: no-repeat;
            background-position: right 60%;
            background-size: 200% auto; /* show right half */
            z-index: 0;
            pointer-events: none;
          }
          section:first-of-type::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(19, 27, 32, 0.42);
            z-index: 1;
            pointer-events: none;
          }
          section:first-of-type > div:nth-of-type(1) {
            transform: none;
            padding-top: 98px;
          }
        }
      `}</style>

      {/* Calculator Component */}
      <ConversionRateCalculator />

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-[#e4a734 ] to-[#f9cd69]">
        
        {/* Definition Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-[#255547]">
            Was ist eine Conversion Rate?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-black leading-relaxed mb-6">
                Die Conversion Rate (Konversionsrate) ist eine der wichtigsten Kennzahlen im Online-Marketing. 
                Sie zeigt das Verhältnis zwischen Website-Besuchern und gewünschten Zielhandlungen an.
              </p>
              <p className="text-lg text-black leading-relaxed mb-6">
                Einfach ausgedrückt: Wie viele Ihrer Besucher werden zu Kunden? Diese Metrik ist entscheidend 
                für den Erfolg Ihrer Online-Präsenz und hilft dabei, Optimierungspotenziale zu identifizieren.
              </p>
              <div className="bg-gradient-to-r from-[#76a395] to-[#3ca384] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Die Formel</h3>
                <p className="text-lg">
                  <strong>Conversions ÷ Sitzungen × 100% = Conversion Rate</strong>
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Beispielrechnung</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">Sitzungen:</span>
                  <span className="text-[#c499ba] font-bold">30.000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">Conversions:</span>
                  <span className="text-[#c499ba] font-bold">900</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#76a395] to-[#3ca384] rounded-lg text-white">
                  <span className="font-semibold">Conversion Rate:</span>
                  <span className="font-bold text-xl">3%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Metrics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Wichtige Online-Marketing Begriffe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChartBarIcon,
                title: "Sitzungen/Visits",
                description: "Die Anzahl der Besuche auf Ihrer Website. Jeder Besuch wird als separate Sitzung gezählt, unabhängig davon, ob es derselbe Nutzer ist.",
                details: "In Google Analytics als 'Sessions' bezeichnet. Eine Sitzung endet nach 30 Minuten Inaktivität oder um Mitternacht."
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Conversions",
                description: "Gewünschte Zielhandlungen Ihrer Besucher. Das können Käufe, Newsletter-Anmeldungen, Downloads oder andere wichtige Aktionen sein.",
                details: "Makro-Conversions sind die wichtigsten Ziele (z.B. Verkäufe), Mikro-Conversions sind Zwischenschritte (z.B. Warenkorb hinzufügen)."
              },
              {
                icon: LightBulbIcon,
                title: "User/Nutzer",
                description: "Technisch gesehen ein Cookie zur Identifikation. Ein Nutzer kann mehrere Sitzungen haben, wenn er die Website mehrmals besucht.",
                details: "Wichtig: Ein Nutzer ist nicht zwangsläufig eine echte Person. Verschiedene Geräte = verschiedene Nutzer."
              }
            ].map(({ icon: Icon, title, description, details }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="h-12 w-12 text-[#c499ba] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-sm text-gray-500 italic">{details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Optimization Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Conversion Rate Optimierung (CRO)
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">
                Was ist Conversion Rate Optimierung?
              </h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                CRO umfasst alle Maßnahmen zur Steigerung der Conversion Rate. Ziel ist es, 
                mehr Besucher in Kunden zu verwandeln, ohne den Traffic zu erhöhen.
              </p>
              <p className="text-lg text-black leading-relaxed mb-6">
                Durch gezielte Optimierungen können Sie Ihre Umsätze erheblich steigern, 
                da Sie aus dem vorhandenen Traffic mehr herausholen.
              </p>
              <div className="space-y-4 text-black">
                {[
                  "A/B Testing verschiedener Seitenversionen",
                  "Optimierung der Benutzererfahrung (UX)",
                  "Verbesserung der Ladezeiten",
                  "Mobile Optimierung",
                  "Vertrauensaufbau durch Testimonials",
                  "Vereinfachung des Checkout-Prozesses"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#76a395] rounded-full mr-3"></div>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Branchenvergleich</h3>
              <div className="space-y-4">
                {[
                  { branch: "E-Commerce", rate: "2-3%" },
                  { branch: "SaaS", rate: "3-5%" },
                  { branch: "Lead Generation", rate: "2-4%" },
                  { branch: "Content/News", rate: "1-2%" },
                  { branch: "Finanzdienstleistungen", rate: "5-10%" }
                ].map(({ branch, rate }, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">{branch}</span>
                    <span className="text-[#c499ba] font-bold">{rate}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                * Durchschnittswerte - Spitzenwerte können deutlich höher liegen
              </p>
            </div>
          </div>
        </motion.section>

        {/* A/B Testing Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            A/B Testing für bessere Conversion Rates
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Wie funktioniert A/B Testing?
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A/B Testing ist eine datengetriebene Methode zur Optimierung Ihrer Website. 
                  Sie testen zwei Versionen einer Seite und messen, welche bessere Ergebnisse erzielt.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#c499ba] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hypothese bilden</h4>
                      <p className="text-gray-600">Identifizieren Sie Verbesserungspotenziale</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#c499ba] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Varianten erstellen</h4>
                      <p className="text-gray-600">Entwickeln Sie eine alternative Version</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#c499ba] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Test durchführen</h4>
                      <p className="text-gray-600">Teilen Sie Traffic zwischen den Versionen auf</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#c499ba] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ergebnisse analysieren</h4>
                      <p className="text-gray-600">Bestimmen Sie die Gewinnervariante</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#c499ba] to-[#3e304c] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Erfolgreiche A/B Tests</h3>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Call-to-Action Buttons</h4>
                    <p className="text-sm opacity-90">Farbe, Text und Position optimieren</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Landingpage Headlines</h4>
                    <p className="text-sm opacity-90">Verschiedene Botschaften testen</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Checkout-Prozess</h4>
                    <p className="text-sm opacity-90">Schritte reduzieren und vereinfachen</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Produktbilder</h4>
                    <p className="text-sm opacity-90">Verschiedene Darstellungen testen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#76a395] to-[#649385] rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Bereit für höhere Conversion Rates?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Website optimieren und Ihre Umsätze steigern. 
            Mit unserer Expertise in Conversion Rate Optimierung erreichen Sie das nächste Level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="px-8 py-4 bg-white text-[#76a395] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
            >
              Kostenlose Analyse anfragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/webdesign"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#76a395] transition-all duration-300"
            >
              Webdesign Services
            </a>
          </div>
        </motion.section>
        </div>
      </div>
    );
  }
