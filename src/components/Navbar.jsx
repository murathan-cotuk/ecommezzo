"use client";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef} from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 1) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update background based on scroll position
      if (currentScrollY > 750) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 left-0 h-24 flex items-center z-50 ${
          scrolling 
            ? "bg-white/95 shadow-xl text-cyan-950 border-b border-gray-100/50" 
            : "bg-transparent text-white"
        }`}
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.95,
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for smooth animation
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 }
        }}
        style={{
          transformOrigin: "top center"
        }}
      >
        {/* Subtle gradient overlay when scrolling */}
        {scrolling && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative items-center justify-between z-10">
        <div className="flex items-center justify-between w-full">
            <motion.a 
              href="/" 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              ECOMMEZZO
            </motion.a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-md justify-between ml-20">
              <motion.a 
                href="/webdesign" 
                className={`font-bold relative ${
                  pathname === '/webdesign' 
                    ? 'text-teal-400' 
                    : 'hover:text-teal-200'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Webdesign
              </motion.a>
              <motion.a 
                href="/marketing" 
                className={`font-bold relative ${
                  pathname === '/marketing' 
                    ? 'text-teal-400' 
                    : 'hover:text-teal-200'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Marketing
              </motion.a>
              <motion.a 
                href="/marktplatz" 
                className={`font-bold relative ${
                  pathname === '/marktplatz' 
                    ? 'text-teal-400' 
                    : 'hover:text-teal-200'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              > 
                Marktplatz
              </motion.a>
              {/*<motion.a 
                href="/softwares" 
                className={`font-bold relative ${
                  pathname === '/softwares' 
                    ? 'text-[#981919]' 
                    : 'hover:text-red-200'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              > 
                Softwares
              </motion.a>*/}
            </div>
            
            {/* Desktop Social & Contact */}
            <div className="hidden lg:flex items-center space-x-4 text-md ml-10">
              <motion.a 
                href="https://www.instagram.com/ecommezzo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-#8f1818"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.148 3.225-1.667 4.771-4.919 4.919-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-3.225-.148-4.771-1.667-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.148-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 2.656.261.261 2.656.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.191 4.396 2.586 6.791 6.982 6.982C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c4.396-.191 6.791-2.586 6.982-6.982.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.191-4.396-2.586-6.791-6.982-6.982C15.668.012 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0z" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://tr.linkedin.com/company/ecommezzo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-#8f1818"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="/kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button className="px-4 py-2 text-sm border-5 border-teal-500 bg-[#a9e9c2] text-cyan-950 hover:bg-[#d2fae2] hover:text-cyan-950 transition-all duration-300 rounded-md font-bold shadow-lg hover:shadow-xl">
                Kontakt
              </button>
              </motion.a>
              
            </div>


            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 z-50"
              onClick={() => {
                const newState = !isMobileMenuOpen;
                setIsMobileMenuOpen(newState);
                // Dispatch custom event for ScrollToTop component
                window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                  detail: { isOpen: newState } 
                }));
              }}
            >
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu - Full Screen Slide from Right */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                      detail: { isOpen: false } 
                    }));
                  }}
                />
                
                {/* Full Screen Menu */}
                <motion.div
                  className="fixed top-0 right-0 h-full w-full bg-white z-50 lg:hidden"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 200 
                  }}
                >
                  {/* Header with logo and close button */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <a 
                      href="/" 
                      className="text-2xl font-bold text-gray-900 font-serif hover:text-teal-500 transition-colors duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                          detail: { isOpen: false } 
                        }));
                      }}
                    >
                      ECOMMEZZO
                    </a>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                          detail: { isOpen: false } 
                        }));
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Menu Content */}
                  <div className="px-6 py-8 space-y-8">
                    {/* Navigation Links */}
                    <div className="space-y-6">
                      <motion.a 
                        href="/webdesign" 
                        className={`block text-2xl font-bold py-4 border-b border-gray-100 ${
                          pathname === '/webdesign' 
                            ? 'text-teal-500' 
                            : 'text-gray-900 hover:text-teal-500'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                            detail: { isOpen: false } 
                          }));
                        }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        Webdesign
                      </motion.a>
                      <motion.a 
                        href="/marketing" 
                        className={`block text-2xl font-bold py-4 border-b border-gray-100 ${
                          pathname === '/marketing' 
                            ? 'text-teal-500' 
                            : 'text-gray-900 hover:text-teal-500'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                            detail: { isOpen: false } 
                          }));
                        }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        Marketing
                      </motion.a>
                      <motion.a 
                        href="/marktplatz" 
                        className={`block text-2xl font-bold py-4 border-b border-gray-100 ${
                          pathname === '/marktplatz' 
                            ? 'text-teal-500' 
                            : 'text-gray-900 hover:text-teal-500'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                            detail: { isOpen: false } 
                          }));
                        }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      > 
                        Marktplatz
                      </motion.a>
                      <motion.a 
                        href="/softwares" 
                        className={`block text-2xl font-bold py-4 border-b border-gray-100 ${
                          pathname === '/softwares' 
                            ? 'text-teal-500' 
                            : 'text-gray-900 hover:text-teal-500'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                            detail: { isOpen: false } 
                          }));
                        }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      > 
                        Softwares
                      </motion.a>
                    </div>
                    
                    {/* Contact Button */}
                    <div className="pt-8">
                      <motion.a 
                        href="/kontakt"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.dispatchEvent(new CustomEvent('mobileMenuToggle', { 
                            detail: { isOpen: false } 
                          }));
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button className="w-full px-6 py-4 text-lg border-2 border-teal-500 bg-teal-500 text-white hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 rounded-xl font-bold shadow-lg">
                          Kontakt Aufnehmen
                        </button>
                      </motion.a>
                    </div>
                    
                    {/* Social Links */}
                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">Folgen Sie uns</h3>
                      <div className="flex items-center space-x-6">
                        <motion.a 
                          href="https://www.instagram.com/ecommezzo/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.148 3.225-1.667 4.771-4.919 4.919-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-3.225-.148-4.771-1.667-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.148-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 2.656.261.261 2.656.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.191 4.396 2.586 6.791 6.982 6.982C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c4.396-.191 6.791-2.586 6.982-6.982.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.191-4.396-2.586-6.791-6.982-6.982C15.668.012 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0z" />
                          </svg>
                        </motion.a>
                        
                        <motion.a 
                          href="https://tr.linkedin.com/company/ecommezzo" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Sayfa içeriğini navbarın altına kaydırmak için padding-top ekledik */}
      {/*<div className="pt-20"></div>*/}  
    </>
  );
}
