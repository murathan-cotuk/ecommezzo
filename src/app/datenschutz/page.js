export default function Datenschutz() {
    return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full h-[300px] bg-gradient-to-t from-[#3e304c] to-[#c499ba] text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">Datenschutzerklärung</h1>
        <p className="text-xl mt-4 opacity-90">Schutz Ihrer persönlichen Daten</p>
      </section>
  
      <div className="max-w-4xl mx-auto px-6 py-16">
          
        {/* Einleitung */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Einleitung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
          Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Ecommezzo GmbH. 
            Eine Nutzung der Internetseiten der Ecommezzo GmbH ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung 
            personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine 
            gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
          </p>
        </section>

        {/* Verantwortlicher */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Verantwortlicher</h2>
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
              Telefon: +49 (0) 123 456789<br />
              E-Mail: service@ecommezzo.com
            </p>
          </div>
        </section>

        {/* Datenerhebung */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Datenerhebung und -verwendung</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Automatische Datenerhebung</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beim Besuch unserer Website werden automatisch folgende Daten erfasst:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>IP-Adresse des zugreifenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Kontaktformular</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (optional)</li>
            <li>Nachricht</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unsere Website benutzerfreundlicher, 
            effektiver und sicherer zu machen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Wir weisen jedoch darauf hin, dass Sie in diesem 
            Fall gegebenenfalls nicht alle Funktionen dieser Website vollumfänglich nutzen können.
          </p>
        </section>

        {/* Google Analytics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Google Analytics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer 
            gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung 
            dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: 
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#c499ba] hover:underline ml-1">https://tools.google.com/dlpage/gaoptout</a>
          </p>
        </section>

        {/* Ihre Rechte */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Ihre Rechte</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
            <li><strong>Berichtigungsrecht:</strong> Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</li>
            <li><strong>Löschungsrecht:</strong> Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.</li>
            <li><strong>Einschränkungsrecht:</strong> Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</li>
            <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</li>
            <li><strong>Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
          </ul>
        </section>

        {/* Datensicherheit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Datensicherheit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, 
            die von Ihrem Browser unterstützt wird.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir haben technische und organisatorische Sicherheitsmaßnahmen getroffen, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, 
            Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
          </p>
        </section>

        {/* Änderungen */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Änderungen dieser Datenschutzerklärung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der 
            Datenverarbeitung anzupassen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </section>

        {/* Kontakt */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Kontakt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>E-Mail:</strong> service@ecommezzo.com
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Telefon:</strong> +49 (0) 123 456789
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Adresse:</strong> Ecommezzo GmbH, Musterstraße 123, 12345 Musterstadt
            </p>
          </div>
        </section>

        {/* Stand */}
        <section className="text-center">
          <p className="text-gray-500 text-sm">
            Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString('de-DE')}
          </p>
        </section>
        </div>
      </div>
      );
  }
