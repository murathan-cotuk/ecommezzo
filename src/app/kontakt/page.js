'use client';

import { motion } from 'framer-motion';
import KontaktForm from '../../components/KontaktForm';

export default function Kontakt() {
  const scrollToForm = () => {
    const formElement = document.getElementById('kontakt-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 to-gray-950">
      <main className="relative z-10">
          <section className="w-full h-[500px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
            
            {/* 5 Eşit Parçalı Mobil Website Görselleri - Arka Plan */}
            <div className="absolute left-0 top-0 w-full h-full flex">
              
              {/* Parça 1 - En Sol (Aşağı Kayma) - 0% Opacity */}
              <div className="w-1/5 h-full relative overflow-hidden flex items-center justify-center opacity-0">
                <div className="absolute top-0 left-0 w-full h-full animate-scroll-down">
                  {[
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 1" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 2" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 3" },
                  ].map((img, i) => (
                    <div key={i} className="w-full h-full p-2">
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parça 2 - Sol (Yukarı-Aşağı) - 25% Opacity */}
              <div className="w-1/5 h-full relative overflow-hidden flex items-center justify-center opacity-25">
                <div className="absolute top-0 left-0 w-full h-full animate-scroll-up">
                  {[
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 4" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 5" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 6" },
                  ].map((img, i) => (
                    <div key={i} className="w-full h-full p-2">
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parça 3 - Orta (Aşağı-Yukarı) - 50% Opacity */}
              <div className="w-1/5 h-full relative overflow-hidden flex items-center justify-center opacity-50">
                <div className="absolute top-0 left-0 w-full h-full animate-scroll-down">
                  {[
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 7" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 8" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 9" },
                  ].map((img, i) => (
                    <div key={i} className="w-full h-full p-2">
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parça 4 - Sağ (Yukarı-Aşağı) - 75% Opacity */}
              <div className="w-1/5 h-full relative overflow-hidden flex items-center justify-center opacity-75">
                <div className="absolute top-0 left-0 w-full h-full animate-scroll-up">
                  {[
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 10" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 11" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 12" },
                  ].map((img, i) => (
                    <div key={i} className="w-full h-full p-2">
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parça 5 - En Sağ (Aşağı Kayma) - 100% Opacity */}
              <div className="w-1/5 h-full relative overflow-hidden flex items-center justify-center opacity-100">
                <div className="absolute top-0 left-0 w-full h-full animate-scroll-down">
                  {[
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 13" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 14" },
                    { src: "/Pinqponq_Homepage_Banner_tiny.webp", alt: "Website 15" },
                  ].map((img, i) => (
                    <div key={i} className="w-full h-full p-2">
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Degrade Kaplama - Kayan Görsellerin Üstünde */}
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gray-950 via-gray-950/50 to-gray-400/40 z-20"></div>

            {/* Metin ve Buton - Sol Taraf */}
            <div className="w-1/2 pl-40 pt-20 z-20">
              <h1 className="text-7xl font-bold text-left pb-10 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Kontakt
              </h1>
              <p className="text-lg mt-4 max-w-xl text-left pb-20 text-gray-300 leading-relaxed">
              </p>
            </div>

          </section>
        </main>


      {/* Contact Form Section */}
      <section className="py-5 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3" id="kontakt-form">
              <KontaktForm />
            </div>

            {/* Social Media & Contact Info - Takes 1 column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-8 border border-gray-200 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Weitere Kontaktmöglichkeiten
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-300 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-Mail</h4>
                      <a href="mailto:service@ecommezzo.com" className="text-cyan-600 hover:text-cyan-700 text-sm">
                        service@ecommezzo.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.148 3.225-1.667 4.771-4.919 4.919-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-3.225-.148-4.771-1.667-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.148-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 2.656.261.261 2.656.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.191 4.396 2.586 6.791 6.982 6.982C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c4.396-.191 6.791-2.586 6.982-6.982.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.191-4.396-2.586-6.791-6.982-6.982C15.668.012 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instagram</h4>
                      <a href="https://www.instagram.com/ecommezzo/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 text-sm">
                        @ecommezzo
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                      <a href="https://tr.linkedin.com/company/ecommezzo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                        Ecommezzo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Warum Ecommezzo?</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Professionelle Expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Schnelle Umsetzung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>24h Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Maßgeschneiderte Lösungen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
