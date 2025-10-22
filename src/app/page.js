

"use client";

import CodeAnimation from "../components/CodeAnimation";
import ConversionRateCalculator from "../components/ConversionRateCalculator";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import HomeLast from "../components/HomeLast";
import Compare from "../components/Compare";
import ReferenzSection from '../components/WebdesignReferenz';
import Portfolio from '../components/Portfolio';
import GraffitiScroll from '../components/GraffitiScroll';
import NewsletterSignup from '../components/NewsletterSignup';


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

        {/* Mobile & tablet specific overrides for the hero section (non-destructive) */}
        <style jsx global>{`
          /* Target the first hero section on the homepage */
          @media (max-width: 1024px) {
            main > section:first-of-type {
              min-height: 100vh; /* reduce excessive height on smaller screens */
              height: auto;
              padding-top: 98px; /* ensure content always below fixed navbar */
              padding-bottom: 48px;
              display: flex;
              justify-content: center; /* center content vertically within available space */
              align-items: center; /* always items-center */
            }

            /* Text container: bring it closer to center and keep left alignment */
            main > section:first-of-type > div:nth-of-type(1) {
              padding-top: 6px;
              padding-bottom: 16px;
              margin-left: auto;
              margin-right: auto;
              max-width: 680px;
              text-align: center;
            }

            /* Partner logos: fixed bottom-left and above background */
            main > section:first-of-type > div:nth-of-type(2) {
              left: 16px;
              bottom: 16px;
              position: absolute;
              z-index: 3;
            }

            /* Background visual layer: absolute, centered, non-interactive */
            main > section:first-of-type > div:nth-of-type(3) {
              position: absolute !important;
              inset: 0 !important; /* fill section */
              width: 100% !important;
              height: 100% !important;
              display: grid !important;
              place-items: center;
              overflow: hidden; /* contain visuals */
              z-index: 0; /* stay behind text and logos */
              pointer-events: none; /* never block clicks */
            }

            /* Center-fit scaling for any inner visual (animation/image) */
            main > section:first-of-type > div:nth-of-type(3) canvas,
            main > section:first-of-type > div:nth-of-type(3) svg,
            main > section:first-of-type > div:nth-of-type(3) img,
            main > section:first-of-type > div:nth-of-type(3) video,
            main > section:first-of-type > div:nth-of-type(3) > * {
              width: auto !important;
              height: auto !important;
              max-width: min(100%, 900px) !important; /* cap width on tablets */
              max-height: 70vh !important; /* keep inside viewport */
              object-fit: contain;
            }

            /* Text container above background visual */
            main > section:first-of-type > div:nth-of-type(1) {
              position: relative;
              z-index: 2;
            }
          }

          /* Fine-tune phones specifically */
          @media (max-width: 640px) {
            main > section:first-of-type {
              min-height: 75vh;
              padding-top: 98px; /* ensure content always below fixed navbar on phones */
              padding-bottom: 20px;
              display: flex;
              align-items: center; /* items-center */
              justify-content: center;
            }

            /* Keep gradient background and layer the mobile image above it */
            main > section:first-of-type::before {
              content: "";
              position: absolute;
              inset: 0;
              background-image: url('/Hero2.png');
              background-repeat: no-repeat;
              background-position: center 90%;
              background-size: contain;
              z-index: 0; /* below text and logos, above gradient */
              pointer-events: none;
            }

            /* Subtle dark overlay for better readability */
            main > section:first-of-type::after {
              content: "";
              position: absolute;
              inset: 0;
              background: rgba(19, 27, 32, 0.42);
              z-index: 1; /* above image, below text */
              pointer-events: none;
            }

            main > section:first-of-type > div:nth-of-type(1) h1 {
              line-height: 1.15;
            }

            /* Hide animation on phones; use static background instead */
            main > section:first-of-type > div:nth-of-type(3) {
              display: none !important;
            }

            /* Center-fit scaling on phones */
            main > section:first-of-type > div:nth-of-type(3) > *,
            main > section:first-of-type > div:nth-of-type(3) img,
            main > section:first-of-type > div:nth-of-type(3) video,
            main > section:first-of-type > div:nth-of-type(3) canvas,
            main > section:first-of-type > div:nth-of-type(3) svg {
              width: auto !important;
              height: auto !important;
              max-width: min(100%, 580px) !important; /* common mobile cap */
              max-height: 45vh !important; /* avoid covering logos */
              object-fit: contain;
              margin: 0 auto;
            }

            /* On phones, lift the text a bit more than on tablet */
            main > section:first-of-type > div:nth-of-type(1) {
              transform: translateY(-64px);
            }
          }
        `}</style>

        <Home1 />
         {/*<Home2 />*/}
        {/*<Portfolio />*/}
        <Home3 />
        {/*<GraffitiScroll />*/}
        <ConversionRateCalculator />
        {/*<Compare />*/}
        {/*<ReferenzSection />*/}
        <HomeLast />
        <NewsletterSignup />
        
      </main>
      
      </div>
  );
}
