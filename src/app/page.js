import AnimatedSection from '../components/AnimatedSection';
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full h-[800px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex items-center px-6 relative overflow-hidden">
      {/* Sol taraf (Metinler) */}
      <div className="w-1/2 pl-10 z-10 pb-40 pl-40 pt-20"> {/* Metin önde kalması için `z-10` ekledik */}
        <h1 className="text-7xl font-bold text-left pb-10">Mehr als nur eine Agentur</h1>
        <p className="text-lg mt-4 max-w-xl text-left pb-20">
        Keine Lust mehr auf 0815 E-Commerce-Agenturen und Coaches, die nicht halten, was sie versprechen? Wir sind die Shopify Experts an deiner Seite. Dein Partner auf Augenhöhe – in guten wie in schlechten Zeiten.
        </p>
        <a href="/datenschutz"><button className="px-6 py-5 border-2 border-teal-500 bg-teal-500 text-cyan-950 hover:bg-teal-600 hover:text-cyan-950 transition-all duration-00 rounded-md font-bold mr-5">
              Shopaufbau
            </button>
            </a>
              <a href="/datenschutz"><button className="px-6 py-5 border-2 border-teal-500 text-teal-500 hover:bg-indigo-100 hover:text-cyan-950 transition-all duration-00 rounded-md font-bold">
              Shop Optimieren
            </button>
            </a>
      </div>

      {/* Sağ taraf (Görsel) */}
      <div className="absolute right-0 bottom-0 w-1/2 h-auto">  
        <img src="/Hero.png" alt="Hero Image" className="w-800 h-auto" />
      </div>
    </section>

      
      <Accordion />
      {/* <AnimatedSection />*/}
      
    </div>
  );
}
