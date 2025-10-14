

"use client";

import CodeAnimation from "@/components/CodeAnimation";
import ConversionRateCalculator from "@/components/ConversionRateCalculator";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import Home3 from "@/components/Home3";
import HomeLast from "@/components/HomeLast";
import Compare from "@/components/Compare";
import ReferenzSection from '@/components/WebdesignReferenz';
import Portfolio from '@/components/Portfolio';
import GraffitiScroll from '@/components/GraffitiScroll';


export default function Home() {
  return (
      
      <div className="bg-gray-50 min-h-screen relative">

      {/* Splash Screen en başta ve ekranı kaplasın */}
      {/*<SplashScreen />*/}

      {/* Geri kalan içerik */}
      <main className="relative z-10">
        <section className="w-full min-h-[100vh] sm:h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 relative overflow-hidden">
          <div className="w-full lg:w-1/2 pl-0 lg:pl-40 pt-20 pb-10 lg:pb-20 z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold pb-6 lg:pb-10">Dein E-Commerce Agentur</h1>
            <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 pb-10 lg:pb-20">
            Mit Ecommezzo sind Sie nur einen Schritt davon entfernt, 
            Ihre Website und alle E-Commerce-Prozesse picobello zu machen!
            </p>
            <a href="/kontakt" className="block w-fit mx-auto lg:mx-0">
              <button className="px-4 sm:px-6 py-3 sm:py-5 border-5 border-teal-400 bg-[#a9e9c2] text-cyan-950 hover:bg-[#d2fae2] hover:animate-pulse transition-all duration-300 rounded-md font-bold mr-0 lg:mr-5 animate-small-bounce text-sm sm:text-base">
                Kontakt Aufnehmen
              </button>
            </a>
          </div>
          
          <div className="absolute left-4 sm:left-10 lg:left-40 bottom-4 sm:bottom-10 flex items-center gap-2 sm:gap-4">
            <img src="/shopify-partner.png" alt="ShopifyPartners" className="w-[120px] sm:w-[150px] lg:w-[200px] h-auto" />
            <img src="/wordpress_partner.png" alt="WordpressPartners" className="w-[45px] sm:w-[60px] lg:w-[75px] h-auto" />
          </div>

          <div className="absolute right-0 top-[98px] w-full lg:w-1/2 h-[calc(100%-98px)] hidden sm:block">
            <CodeAnimation />
          </div>
        </section>

        <Home1 />
         {/*<Home2 />*/}
        {/*<Portfolio />*/}
        <Home3 />
        <GraffitiScroll />
        <ConversionRateCalculator />
        {/*<Compare />*/}
        {/*<ReferenzSection />*/}
        {/*<HomeLast />*/}
        
      </main>
      
      </div>
  );
}
