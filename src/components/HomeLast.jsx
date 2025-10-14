'use client';


export default function HomeLast() {

  return (
    <>
      {/* Full-Width Banner */}
      {/*<section className="w-full bg-slate-800 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <h2 className="font-bold text-white text-center leading-tight whitespace-nowrap" style={{fontSize: 'clamp(1.5rem, 4vw, 3rem)'}}>
          Wie Ecommezzo Ihre Erfolgsgeschichte mitschreibt
          </h2>
        </div>
      </section>*/}

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">

          {/* Metin Kartları */}
          <div className="space-y-4 sm:space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Kart 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3">1</span>
                  Strategische Partnerschaft
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  In der dynamischen Welt des E-Commerce sind wir mehr als nur eine Agentur – wir sind Ihre strategischen Partner für nachhaltigen Online-Erfolg. Mit über 5 Jahren Erfahrung in der digitalen Transformation von Unternehmen haben wir uns darauf spezialisiert, komplexe E-Commerce-Herausforderungen in messbare Erfolge zu verwandeln.
                </p>
              </div>

              {/* Kart 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3">2</span>
                  Technische Exzellenz
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Unser Expertenteam kombiniert technische Exzellenz mit tiefgreifendem Marktverständnis, um maßgeschneiderte Lösungen zu entwickeln, die nicht nur Ihre Verkäufe steigern, sondern auch Ihre Markenidentität stärken. Von der initialen Strategieentwicklung bis zur kontinuierlichen Optimierung begleiten wir Sie durch jeden Schritt Ihrer digitalen Reise.
                </p>
              </div>

              {/* Kart 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3">3</span>
                  Individuelle Ansätze
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Wir verstehen, dass jeder Online-Shop einzigartig ist. Deshalb setzen wir auf individuelle Ansätze, die speziell auf Ihre Zielgruppe, Ihr Produktportfolio und Ihre Geschäftsziele zugeschnitten sind. Unsere Shopify-Expertise, kombiniert mit modernsten Webdesign-Prinzipien und datengetriebenen Marketing-Strategien, sorgt dafür, dass Ihr Online-Shop nicht nur funktional, sondern auch konversionsoptimiert ist.
                </p>
              </div>

              {/* Kart 4 */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3">4</span>
                  Nachweisbare Erfolge
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Unser Erfolg misst sich an Ihrem Erfolg. Mit durchschnittlichen Conversion-Rate-Steigerungen von 40% und ROI-Verbesserungen von über 200% haben wir bereits über 150 Unternehmen dabei geholfen, ihre Online-Präsenz zu revolutionieren. Von Start-ups bis hin zu etablierten Marken – wir schaffen die technische Infrastruktur und das Marketing-Ökosystem, das Ihr Unternehmen braucht, um in der digitalen Landschaft zu dominieren.
                </p>
              </div>

              {/* Kart 5 */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3">5</span>
                  Ihre Vision, unsere Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Vertrauen Sie auf unsere bewährten Methoden, innovative Technologien und unerschütterliche Hingabe an Qualität. Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen und Ihr Unternehmen an die Spitze des digitalen Handels führen.
                </p>
              </div>

              {/* Kart 6 - Özel Kart */}
              
            </div>
          </div>

          </div>
        </div>
      </section>
    </>
  );
}
