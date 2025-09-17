'use client';

import { useState, useEffect } from 'react';

export default function Home1() {
  const [currentCode, setCurrentCode] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);

  const codeLines = [
    'console.log("Hello World");',
    'const ecommerce = "success";',
    'function buildShop() {',
    '  return "Shopify Expert";',
    '}',
    '// Ecommezzo - Your Partner',
    'const results = await optimize();',
    'return "Conversion Rate Up!";'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCode.length < codeLines[codeIndex].length) {
          setCurrentCode(codeLines[codeIndex].substring(0, currentCode.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentCode.length > 0) {
          setCurrentCode(currentCode.substring(0, currentCode.length - 1));
        } else {
          setIsDeleting(false);
          setCodeIndex((prev) => (prev + 1) % codeLines.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentCode, isDeleting, codeIndex, codeLines]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Kod animasyonu */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">Terminal</span>
            </div>
            
            <div className="font-mono text-green-400 text-lg leading-relaxed">
              <div className="mb-2">
                <span className="text-blue-400">$</span> npm start
              </div>
              <div className="mb-2">
                <span className="text-gray-500">// Ecommezzo Development</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-500">// Building your success...</span>
              </div>
              <div className="mb-2">
                <span className="text-yellow-400">→</span> {currentCode}
                <span className="animate-pulse text-green-400">|</span>
              </div>
              <div className="text-gray-500">
                <span className="text-green-400">✓</span> Ready for production
              </div>
            </div>
          </div>

          {/* Sağ taraf - Yazı */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">
                Code Meets
                <span className="block bg-gradient-to-r from-cyan-950 to-gray-950 bg-clip-text text-transparent">
                  Commerce
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wir entwickeln nicht nur Websites – wir programmieren Ihren Erfolg. 
                Mit modernsten Technologien und bewährten Strategien bringen wir 
                Ihr E-Commerce-Business auf das nächste Level.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-950 to-gray-950 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Schnell</h3>
                <p className="text-sm text-gray-600">Optimierte Performance für maximale Geschwindigkeit</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-950 to-gray-950 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sicher</h3>
                <p className="text-sm text-gray-600">Enterprise-Level Sicherheit für Ihr Business</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Shopify
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                WordPress
              </span>
            </div>

            <a href="/webdesign" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-950 to-gray-950 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
              Mehr erfahren
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
