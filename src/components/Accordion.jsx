'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    title: "E-Commerce Entwicklung",
    details: [
      { 
        name: "Shopify", 
        description: "Professionelle Shopify-Shop Entwicklung",
        image: "/shopify.png", 
        list: ["Theme Entwicklung", "App Integration", "Shop Optimierung"]
      },
      { 
        name: "WooCommerce", 
        description: "Individuelle WooCommerce-Lösungen",
        image: "/woocommerce.png",
        list: ["Custom Plugins", "Performance Optimierung", "SEO Integration"],
        button: true // Sadece bunda buton olacak
      }
    ],
  },
  {
    title: "Web Design & UX/UI",
    details: [
      { 
        name: "Figma Design", 
        description: "Hochwertige Figma UI/UX Designs",
        image: "/figma.png",
        list: ["Prototyping", "User Testing", "Responsive Design"]
      },
      { 
        name: "Webflow", 
        description: "No-Code Webseiten mit Webflow",
        image: "/webflow.png",
        list: ["Custom Animations", "CMS Integration", "SEO Optimierung"],
        button: true
      }
    ],
  },
  {
    title: "SEO & Performance",
    details: [
      { 
        name: "SEO Optimierung", 
        description: "Mehr Traffic mit gezielter SEO",
        image: "/seo.png",
        list: ["Keyword Analyse", "On-Page SEO", "Off-Page SEO"]
      },
      { 
        name: "PageSpeed", 
        description: "Optimierung für schnelle Ladezeiten",
        image: "/pagespeed.png",
        list: ["Code Minifizierung", "Caching Strategien", "Lazy Loading"],
        button: true
      }
    ],
  },
];

export default function Accordion() {
  const [openStates, setOpenStates] = useState(Array(services.length).fill(false));

  const toggleAccordion = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Für diese Dinge sind wir der{" "}
        <span className="text-teal-600 font-extrabold">richtige Ansprechpartner</span> für dich
      </h2>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <button
              className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-200 transition-all text-2xl font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              <span>{service.title}</span>
              {openStates[index] ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
            </button>

            {openStates[index] && (
              <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="p-6 border rounded-xl bg-gray-50">
                    {/* Görsel Ekleme */}
                    {detail.image && <img src={detail.image} alt={detail.name} className="w-16 h-16 mb-4" />}

                    <h3 className="text-xl font-bold">{detail.name}</h3>
                    <p className="text-lg text-gray-700 mt-2">{detail.description}</p>

                    {/* Liste Ekleme */}
                    {detail.list && (
                      <ul className="mt-4 list-disc pl-5 text-gray-600">
                        {detail.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Buton sadece 2. öğede gösterilecek */}
                    {detail.button && (
                      <a href="/termin-buchen">
                        <button className="mt-4 px-5 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition">
                          Termin buchen
                        </button>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
