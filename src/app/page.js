

"use client";

import Accordion from "@/components/Accordion";
import SplashScreen from "@/components/SplashScreen";
import CodeAnimation from "@/components/CodeAnimation";
import ConversionRateCalculator from "@/components/ConversionRateCalculator";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import Home3 from "@/components/Home3";
import HomeLast from "@/components/HomeLast";
import Compare from "@/components/Compare";
import ReferenzSection from '@/components/WebdesignReferenz';
import Portfolio from '@/components/Portfolio';


export default function Home() {
  return (
      
      <div className="bg-gray-50 min-h-screen relative">

      {/* Splash Screen en başta ve ekranı kaplasın */}
      {/*<SplashScreen />*/}

      {/* Geri kalan içerik */}
      <main className="relative z-10">
        <section className="w-full h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
          <div className="w-1/2 pl-40 pt-20 z-10">
            <h1 className="text-7xl font-bold text-left pb-10">MMehr als nur eine Agentur</h1>
            <p className="text-lg mt-4 max-w-xl text-left pb-20">
              Keine Lust mehr auf E-Commerce-Agenturen und Coaches, die nicht halten, was sie versprechen?
              Wir sind die Shopify Experts an deiner Seite.
            </p>
            <a href="/kontakt">
              <button className="px-6 py-5 border-5 border-teal-400 bg-[#a9e9c2] text-cyan-950 hover:bg-[#d2fae2] hover:animate-pulse transition-all duration-300 rounded-md font-bold mr-5 animate-small-bounce">
                Kontakt Aufnehmen
              </button>
            </a>
          </div>
          <div className="absolute left-40 bottom-10 flex items-center gap-4">
            <img src="/shopify-partner.png" alt="ShopifyPartners" className="w-[200px] h-auto" />
            <img src="/wordpress_partner.png" alt="WordpressPartners" className="w-[75px] h-auto" />
          </div>

          <div className="absolute right-0 top-[98px] w-1/2 h-[calc(100%-98px)]">
            <CodeAnimation />
          </div>
        </section>

        <Home1 />
         {/*<Home2 />*/}
        {/*<Portfolio />*/}
        <Home3 />
        <ConversionRateCalculator />
        <Compare />
        {/*<ReferenzSection />*/}
        <HomeLast />
        
      </main>
      
      </div>
  );
}
