"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SoftwareCard({ software }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src="/a.png" 
          alt={`${software.name} cover`}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#8f1818] px-3 py-1 rounded-full text-sm font-semibold">
            {software.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-#8f1818 transition-colors">
          {software.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {software.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {software.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 text-#8f1818500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">${software.price}</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
          {software.originalPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              ${software.originalPrice}/month
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/softwares/${software.slug}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-[#8f1818] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#6b1212] transition-colors"
            >
              Mehr Erfahren
            </motion.button>
          </Link>
          
        </div>

        {/* Status Badge */}
        {software.status && (
          <div className="mt-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              software.status === 'new' 
                ? 'bg-green-100 text-green-800' 
                : software.status === 'beta'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {software.status === 'new' ? '✨ New' : 
               software.status === 'beta' ? '🚀 Beta' : 
               '🔥 Popular'}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}