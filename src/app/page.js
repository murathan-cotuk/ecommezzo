"use client";

import Accordion from "@/components/Accordion";
import App from "@/components/App";
import SplashScreen from "@/components/SplashScreen";
import ThreeDBannerWrapper from "@/components/ThreeDBannerWrapper";


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen relative">

      {/* Splash Screen en başta ve ekranı kaplasın */}
      <SplashScreen />

      {/* Geri kalan içerik */}
      <main className="relative z-10">
        <section className="w-full h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
          <div className="w-1/2 pl-40 pt-20 z-10">
            <h1 className="text-7xl font-bold text-left pb-10">Mehr als nur eine Agentur</h1>
            <p className="text-lg mt-4 max-w-xl text-left pb-20">
              Keine Lust mehr auf E-Commerce-Agenturen und Coaches, die nicht halten, was sie versprechen?
              Wir sind die Shopify Experts an deiner Seite.
            </p>
            <a href="/datenschutz">
              <button className="px-6 py-5 border-2 border-teal-400 bg-teal-500 text-cyan-950 hover:bg-teal-600 transition-all duration-300 rounded-md font-bold mr-5">
                Shopaufbau
              </button>
            </a>
            <a href="/datenschutz">
              <button className="px-6 py-5 border-2 border-teal-500 text-teal-500 hover:bg-indigo-100 transition-all duration-300 rounded-md font-bold">
                Shop Optimieren
              </button>
            </a>
          </div>

          <div className="absolute right-0 bottom-0 w-1/2 h-auto">
            <img src="/Hero.png" alt="Hero" className="w-[800px] h-auto" />
          </div>
        </section>

        <Accordion />
        <App />
        <ThreeDBannerWrapper />
      </main>
    </div>
  );
}
