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
                <span className="text-green-400">✓</span> {codeExample.language} Expert Mode
              </div>
              <div className="text-gray-500 text-xs">
                Ready
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Hero Image View - Sağ tarafta görsel
        <div className="h-full w-full animate-fadeIn flex justify-end">
          <img 
            src="/Hero2.png" 
            alt="Ecommezzo Hero" 
            className="h-full w-auto object-contain"
          />
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
