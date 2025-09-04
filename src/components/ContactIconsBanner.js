'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactItems = [
  {
    id: 1,
    icon: (
      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    title: "",
    subtitle: "",
    bgColor: "from-pink-200 to-rose-300",
    iconColor: "text-pink-600"
  },
  {
    id: 2,
    icon: (
      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    title: "",
    subtitle: "",
    bgColor: "from-blue-200 to-cyan-300",
    iconColor: "text-blue-600"
  },
  {
    id: 3,
    icon: (
      <svg className="w-24 h-24" fill="currentColor" viewBox="0 -960 960 960">
        <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z"/>
      </svg>
    ),
    title: "",
    subtitle: "",
    bgColor: "from-purple-200 to-indigo-300",
    iconColor: "text-purple-600"
  }
];

export default function ContactIconsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contactItems.length);
    }, 9000); //9 saniye

    return () => clearInterval(interval);
  }, []);

  const currentItem = contactItems[currentIndex];

  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`absolute inset-0 bg-gradient-to-br ${currentItem.bgColor}`}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-20"
            style={{
              background: `linear-gradient(45deg, ${currentItem.bgColor.split(' ')[1]}, ${currentItem.bgColor.split(' ')[3]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center"
          >
            {/* Icon Container */}
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`w-48 h-48 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl ${currentItem.iconColor}`}
            >
              {currentItem.icon}
            </motion.div>

            {/* Text Content */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl font-bold text-gray-800 mb-2"
            >
              {currentItem.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600"
            >
              {currentItem.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      
    </div>
  );
}
