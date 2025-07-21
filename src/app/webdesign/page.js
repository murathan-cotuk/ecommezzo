'use client';
import Image from 'next/image';

export default function Webdesign() {
  const kundenLogos = [
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/Hero.png',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full h-[300px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mt-20">Webdesign</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Individuelle Webdesign-Lösungen – von E-Commerce über WordPress bis hin zu maßgeschneiderten Webseiten.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-black dark:text-black">
        <h2 className="text-3xl font-bold mb-6">Warum professionelles Webdesign wichtig ist</h2>
        <p className="mb-6">
          Eine moderne, schnelle und benutzerfreundliche Webseite ist der Schlüssel zu Ihrem digitalen Erfolg. Wir
          gestalten Websites, die nicht nur gut aussehen, sondern auch konvertieren.
        </p>
        <p className="mb-6">
          Ob Sie einen <strong>konversionsstarken Shopify Webshop</strong> benötigen oder eine flexible
          <strong> WordPress-Unternehmensseite</strong> bevorzugen – wir liefern maßgeschneiderte Lösungen.
        </p>
      </section>

      {/* Leistungen */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
            {/* Örnek içerik eklenebilir */}
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="bg-white dark:bg-cyan-600 py-16 overflow-hidden">
        <div className="max-w-9xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Unsere Erfolgsgeschichten</h2>

          {/* Kaydırmalı Logo Alanı */}
          <div className="relative w-full overflow-hidden">
            <div className="scroll-wrapper">
              <div className="scroll-track">
                {[...kundenLogos, ...kundenLogos, ...kundenLogos, ...kundenLogos].map((logo, i) => (
                  <div key={i} className="logo-container">
                    <Image
                      src={logo}
                      alt={`Kunde ${i + 1}`}
                      fill
                      className="object-contain opacity-80 hover:opacity-100 transition duration-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scroll-wrapper {
            width: 100%;
            overflow: hidden;
          }

          .scroll-track {
            display: flex;
            animation: marquee 25s linear infinite;
            width: fit-content;
          }

          .logo-container {
            position: relative;
            width: 200px;
            height: 100px;
            margin: 0 24px;
            flex-shrink: 50;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="bg-cyan-900 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Bereit für Ihre neue Website?</h2>
        <p className="mb-6 text-lg">
          Lassen Sie uns gemeinsam Ihre digitale Präsenz gestalten. Fordern Sie jetzt ein unverbindliches Angebot an!
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-white text-cyan-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Jetzt anfragen
        </a>
      </section>
    </div>
  );
}
