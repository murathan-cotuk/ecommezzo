export default function Impressum() {
  return (
    <div className="bg-white min-h-screen">
    {/* Hero Section */}
      <section className="w-full h-[300px] bg-gradient-to-t from-[#3e304c] to-[#c499ba] text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">Impressum</h1>
        <p className="text-xl mt-4 opacity-90">Angaben gemäß § 5 TMG</p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hinweis zur Unternehmensgründung */}
        <section className="mb-12">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-900 mb-3">Hinweis: Unternehmensgründung</h2>
            <p className="text-yellow-900 leading-relaxed">
              Dieses Impressum bleibt bestehen. Das Unternehmen Ecommezzo GmbH befindet sich derzeit in der
              Gründungsphase. Bis zum Abschluss der Eintragung im Handelsregister wird die Tätigkeit von
              Murathan Cotuk, Einzelunternehmer (Gründer) verantwortet.
            </p>
          </div>
        </section>

        {/* Vorläufiges Impressum gemäß Ihrer Angaben */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Impressum (vorläufig)</h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700 leading-relaxed">
            <p className="font-semibold">Angaben gemäß § 5 TMG</p>

            <div>
              <p className="font-semibold">Anbieter:</p>
              <p>Ecommezzo (in Gründung)</p>
              <p>Murathan Cotuk</p>
              <p>Robert-Koch-Str. 17</p>
              <p>41564, Kaarst</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold">Kontakt:</p>
              <p>E-Mail: service@ecommezzo.com</p>
              <p>Website: www.ecommezzo.com</p>
            </div>

            <div>
              <p className="font-semibold">Hinweis zur Unternehmensgründung:</p>
              <p>
                Das Unternehmen Ecommezzo GmbH befindet sich derzeit in der Gründungsphase. Bis zum Abschluss der
                Eintragung im Handelsregister wird die Tätigkeit von Murathan Cotuk, Einzelunternehmer (Gründer)
                verantwortet.
              </p>
            </div>

            <div>
              <p className="font-semibold">Haftungsausschluss:</p>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs.1
                TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div>
              <p className="font-semibold">Haftung für Links:</p>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            <div>
              <p className="font-semibold">Urheberrecht:</p>
              <p>
                Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Eine
                Vervielfältigung oder Verwendung ist nur mit ausdrücklicher Zustimmung des Urhebers gestattet.
              </p>
            </div>

            <div>
              <p className="font-semibold">Bildnachweise:</p>
              <p>Unsplash.com, Pexels.com, Eigene Fotografien</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Stand dieses Impressums: 13.10.2025</p>
            </div>
          </div>
        </section>
        
        {/* Anbieter */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Anbieter</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Ecommezzo GmbH</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Handelsregister:</strong> Amtsgericht Musterstadt, HRB 12345<br />
              <strong>Umsatzsteuer-ID:</strong> DE123456789<br />
              <strong>Steuernummer:</strong> 123/456/78901
            </p>
          </div>
    </section>*/}

        {/* Geschäftsführung */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Geschäftsführung</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Max Mustermann</strong><br />
              Geschäftsführer
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Anna Musterfrau</strong><br />
              Geschäftsführerin
            </p>
          </div>
        </section>

        {/* Kontakt */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontakt</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Telefon:</strong> +49 (0) 123 456789<br />
              <strong>Fax:</strong> +49 (0) 123 456788<br />
              <strong>E-Mail:</strong> service@ecommezzo.com<br />
              <strong>Website:</strong> www.ecommezzo.com
            </p>
          </div>
        </section>

        {/* Aufsichtsbehörde */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aufsichtsbehörde</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Gewerbeaufsichtsamt Musterstadt</strong><br />
              Musterstraße 456<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>
        </section>

        {/* Berufsbezeichnung */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Berufsbezeichnung "Webdesigner" und "Online-Marketing-Spezialist" wurde in Deutschland verliehen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Zuständige Kammer:</strong> Industrie- und Handelskammer Musterstadt
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Es gelten folgende berufsrechtliche Regelungen:</strong><br />
            Gewerbeordnung (GewO), Telemediengesetz (TMG), Bundesdatenschutzgesetz (BDSG)
          </p>
        </section>

        {/* Verantwortlich für den Inhalt */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Max Mustermann</strong><br />
              Ecommezzo GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>
        </section>

        {/* Haftungsausschluss */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Haftungsausschluss</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Links</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        {/* Streitschlichtung */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Streitschlichtung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" className="text-[#c499ba] hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        {/* Bildnachweis */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bildnachweis</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die auf dieser Website verwendeten Bilder stammen aus folgenden Quellen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Unsplash.com (kostenlose Stock-Fotos)</li>
            <li>Pexels.com (kostenlose Stock-Fotos)</li>
            <li>Eigene Fotografien und Grafiken</li>
          </ul>
        </section>

        {/* Stand */}
        {/*<section className="text-center">
          <p className="text-gray-500 text-sm">
            Stand dieses Impressums: {new Date().toLocaleDateString('de-DE')}
          </p>
        </section>*/}
      </div>
    </div>
    );
}
