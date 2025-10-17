"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sayfa scroll durumunu dinle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Mobile menu state'ini dinle
  useEffect(() => {
    const handleMobileMenuToggle = (event) => {
      setIsMobileMenuOpen(event.detail.isOpen);
    };

    window.addEventListener('mobileMenuToggle', handleMobileMenuToggle);
    return () => window.removeEventListener('mobileMenuToggle', handleMobileMenuToggle);
  }, []);

  // Scroll en üste taşı
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && !isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.3 
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Main Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden group"
            whileHover={{ 
              scale: 1.1,
              y: -5,
              rotate: 360,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Pulsing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Icon with Animation */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUp 
                size={24} 
                className="group-hover:scale-110 transition-transform duration-200" 
              />
            </motion.div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
              whileHover={{ scale: 1.5 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
