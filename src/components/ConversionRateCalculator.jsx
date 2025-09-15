'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalculatorIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function ConversionRateCalculator() {
  const [sessions, setSessions] = useState('');
  const [conversions, setConversions] = useState('');
  const [conversionRate, setConversionRate] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateConversionRate = () => {
    const sessionsNum = parseFloat(sessions);
    const conversionsNum = parseFloat(conversions);
    
    if (sessionsNum > 0 && conversionsNum >= 0) {
      const rate = (conversionsNum / sessionsNum) * 100;
      setConversionRate(rate.toFixed(2));
      setShowResult(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      calculateConversionRate();
    }
  };

  const getRateColor = (rate) => {
    if (rate >= 3) return 'text-green-600';
    if (rate >= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRateMessage = (rate) => {
    if (rate >= 3) return 'Ausgezeichnet! Ihre Conversion Rate liegt über dem Branchendurchschnitt.';
    if (rate >= 2) return 'Gut! Ihre Conversion Rate ist durchschnittlich. Es gibt noch Optimierungspotenzial.';
    if (rate >= 1) return 'Verbesserungswürdig. Ihre Conversion Rate liegt unter dem Durchschnitt.';
    return 'Kritisch. Ihre Conversion Rate ist sehr niedrig und benötigt dringend Optimierung.';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Conversion Rate Rechner{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block text-[#c499ba] origin-center"
            >
              📊
            </motion.span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berechnen Sie Ihre Conversion Rate in Sekunden. Unser professioneller Rechner hilft Ihnen dabei, 
            die Performance Ihrer Website oder Ihres Online-Shops zu analysieren.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ihre Daten eingeben
                </h2>
                <p className="text-gray-600">
                  Geben Sie Ihre Sitzungen und Conversions ein, um Ihre Conversion Rate zu berechnen.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sitzungen/Visits
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={sessions}
                      onChange={(e) => setSessions(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="z.B. 95000"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#c499ba] focus:outline-none transition-colors duration-300 text-lg text-gray-900"
                    />
                    <ChartBarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Anzahl der Website-Besuche in einem bestimmten Zeitraum
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sales
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={conversions}
                      onChange={(e) => setConversions(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="z.B. 1500"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#c499ba] focus:outline-none transition-colors duration-300 text-lg text-gray-900"
                    />
                    <ArrowTrendingUpIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  </div>
                  
                </div>

                <button
                  onClick={calculateConversionRate}
                  className="w-full bg-gradient-to-r from-[#e4a734] to-[#c27d18] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 text-lg"
                >
                  <CalculatorIcon className="h-6 w-6" />
                  Conversion Rate berechnen
                </button>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ihre Conversion Rate
                </h3>
                
                {showResult && conversionRate !== null ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`text-6xl font-bold ${getRateColor(conversionRate)}`}>
                      {conversionRate}%
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <p className={`text-lg font-semibold ${getRateColor(conversionRate)} mb-2`}>
                        {getRateMessage(conversionRate)}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Branchendurchschnitt: 2-3% | Spitzenwerte: 5%+
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white rounded-lg p-4">
                        <div className="font-semibold text-gray-900">Sitzungen</div>
                        <div className="text-2xl font-bold text-[#c499ba]">{parseInt(sessions).toLocaleString()}</div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="font-semibold text-gray-900">Sales</div>
                        <div className="text-2xl font-bold text-[#c499ba]">{parseInt(conversions).toLocaleString()}</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-gray-400">
                    <div className="text-4xl mb-4">📈</div>
                    <p>Geben Sie Ihre Daten ein und klicken Sie auf "Berechnen"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#76a395] to-[#649385] rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            💡 Erfahren Sie mehr über Conversion Optimierung
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Eine gute Conversion Rate ist der Schlüssel zum Erfolg. Lassen Sie uns gemeinsam 
            Ihre Website optimieren und Ihre Umsätze steigern.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#3e304c] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Kostenlose Beratung anfragen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
