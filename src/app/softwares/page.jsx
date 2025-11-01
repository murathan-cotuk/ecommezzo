"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import SoftwareCard from '../../components/softwares/SoftwareCard';
import { softwaresData } from './softwaresData';

export default function SoftwaresPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'analytics', 'marketing', 'automation', 'integration'];

  const filteredSoftwares = selectedCategory === 'all' 
    ? softwaresData 
    : softwaresData.filter(software => software.category === selectedCategory);

  return (
    <div className="text-gray-900 bg-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="w-full min-h-[50vh] sm:h-[700px] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-t from-white via-[#e8ad39] to-[#c37e19]">
          
          {/* Metin - Ortalanmış */}
          <div className="w-full text-center z-20 pt-20 pb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold pb-6 lg:pb-10 bg-gradient-to-r from-white via-[#c499ba] to-[#986f8e] bg-clip-text text-gray-50"
            >
              Ecommezzo <span className="text-[#8f1818]">Softwares</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg mt-4 max-w-xl mx-auto text-gray-50 leading-relaxed"
            >
              Leistungsstarke SaaS-Lösungen für Ihr E-Commerce-Business. 
              Von Analytics bis Automatisierung - wir haben die Tools, die Sie zum Erfolg brauchen.
            </motion.p>
          </div>
        </section>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#8f1818] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-[#8f1818]/10 hover:text-[#8f1818] shadow-md'
              }`}
            >
              {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Software Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSoftwares.map((software, index) => (
            <motion.div
              key={software.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SoftwareCard software={software} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}