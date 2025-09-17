'use client';

import { useState, useEffect } from 'react';

export default function CodeAnimation() {
  const [currentCode, setCurrentCode] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const codeExample = {
    language: 'JavaScript',
    command: 'npm run dev',
    icon: '⚡',
    code: [
      'import React from "react";',
      'import { useState, useEffect } from "react";',
      'import { motion } from "framer-motion";',
      '',
      'const EcommezzoStore = () => {',
      '  // Create an amazing website...',
      '  const [conversion, setConversion] = useState(0);',
      '  ',
      '  useEffect(() => {',
      '    // Awesome!',
      '    optimizeStore().then(result => {',
      '      setConversion(result.roas);',
      '    });',
      '  }, []);',
      '  ',
      '  // Boost the sales...',
      '  return <Dashboard roas={conversion} />;',
      '};'
    ]
  };

  useEffect(() => {
    if (isComplete) return; // Stop if already completed
    
    const timeout = setTimeout(() => {
      const currentLine = codeExample.code[lineIndex];
      
      if (currentCode.length < currentLine.length) {
        setCurrentCode(currentLine.substring(0, currentCode.length + 1));
      } else {
        // Line completed, move to next line
        setTimeout(() => {
          if (lineIndex < codeExample.code.length - 1) {
            setLineIndex(lineIndex + 1);
            setCurrentCode('');
          } else {
            // All lines completed, show transition effect then visual output
            setTimeout(() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setShowOutput(true);
                setIsComplete(true);
                setIsTransitioning(false);
              }, 800);
            }, 2000);
          }
        }, 300);
      }
    }, 5);

    return () => clearTimeout(timeout);
  }, [currentCode, lineIndex, isComplete]);

  return (
    <div className={`h-full w-full overflow-hidden relative ${!showOutput ? 'bg-gray-900 rounded-2xl p-8 shadow-2xl' : ''}`} style={{marginTop: '2px'}}>
      {!showOutput ? (
        // Terminal View - Kod yazma ekranı
        <div className={`transition-all duration-800 flex flex-col h-full ${isTransitioning ? 'blur-sm opacity-30 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
          {/* Terminal Header */}
          <div className="flex items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm font-medium">
              
            </span>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 text-xs">LIVE</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="font-mono text-yellow-400 text-sm leading-relaxed flex flex-col h-full">
            {/* Command Line */}
            <div className="mb-4 flex items-center">
              <span className="text-blue-400 mr-2">$</span>
              <span className="text-white">{codeExample.command}</span>
              <div className="ml-2 w-2 h-4 bg-green-400 animate-pulse"></div>
            </div>
            
            {/* Code Lines */}
            <div className="space-y-1 mb-6 flex-1">
              {codeExample.code.map((line, index) => (
                <div key={index} className="flex items-start">
                  <span className={`mr-4 w-8 text-right text-xs ${
                    index <= lineIndex ? 'text-gray-600' : 'text-transparent'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    {index < lineIndex ? (
                      <span className="text-green-400">{line}</span>
                    ) : index === lineIndex ? (
                      <span>
                        <span className="text-yellow-400">→</span> {currentCode}
                        <span className="animate-pulse text-green-400">|</span>
                      </span>
                    ) : (
                      <span className="text-transparent">{line}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Status Bar */}
            <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
              <div className="text-gray-500 text-xs">
                <span className="text-green-400">✓</span>
              </div>
              <div className="text-gray-500 text-xs">
                Ready
              </div>
            </div>
          </div>
        </div>
      ) : (
        // GERÇEK WEBSİTE GİBİ MUAZZAM E-TİCARET PLATFORMU
        <div className="h-full w-full animate-fadeIn bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
          
          {/* Website Container */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Navigation Bar */}
            <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-2xl font-bold text-gray-800">Ecommezzo</span>
              </div>
              <div className="flex space-x-8 text-gray-600 font-medium">
                <span className="hover:text-cyan-600 transition-colors cursor-pointer">Home</span>
                <span className="hover:text-cyan-600 transition-colors cursor-pointer">Products</span>
                <span className="hover:text-cyan-600 transition-colors cursor-pointer">About</span>
                <span className="hover:text-cyan-600 transition-colors cursor-pointer">Contact</span>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
            
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Transform Your Business</h1>
                <p className="text-xl mb-8 opacity-90">The ultimate e-commerce platform for modern entrepreneurs</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-all">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Ecommezzo?</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Optimized for speed and performance</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Beautiful Design</h3>
                  <p className="text-gray-600">Stunning templates and customization</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics</h3>
                  <p className="text-gray-600">Comprehensive insights and reports</p>
                </div>
              </div>
            </div>
            
            {/* Products Showcase */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
              <div className="grid grid-cols-2 gap-6 animate-scroll-up">
                
                {/* Product 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">NEW</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Package</h3>
                    <p className="text-gray-600 mb-4">Complete e-commerce solution with advanced features</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-600">€299/month</span>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">HOT</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise Suite</h3>
                    <p className="text-gray-600 mb-4">Advanced features for growing businesses</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-600">€599/month</span>
                      <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 3 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 relative">
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">BEST</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Plan</h3>
                    <p className="text-gray-600 mb-4">Perfect balance of features and affordability</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-600">€199/month</span>
                      <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 4 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">VIP</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ultimate Package</h3>
                    <p className="text-gray-600 mb-4">Everything you need for enterprise success</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-600">€999/month</span>
                      <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Accordion Section */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      How does the pricing work?
                      <span className="text-cyan-600">+</span>
                    </h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      Can I customize my store?
                      <span className="text-cyan-600">+</span>
                    </h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      What support do you offer?
                      <span className="text-cyan-600">+</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-800 text-white p-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-4">Ready to Get Started?</div>
                <p className="text-gray-300 mb-6">Join thousands of successful entrepreneurs</p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                  Start Your Free Trial
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}

      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes scroll-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 15s linear infinite;
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(0,255,255,0.5), 0 0 10px rgba(0,255,255,0.3), 0 0 15px rgba(0,255,255,0.2);
          }
          50% {
            text-shadow: 0 0 10px rgba(147,51,234,0.8), 0 0 20px rgba(147,51,234,0.6), 0 0 30px rgba(147,51,234,0.4);
          }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .hover\\:rotate-y-5:hover {
          transform: rotateY(5deg);
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}
