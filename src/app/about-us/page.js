export default function AboutUs() {
    return (
      <div>
         {/* Hero Section */}
      <section className="w-full h-[300px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mt-20">About Us
        </h1>
      </section>
        <h1 className="text-3xl font-bold text-center my-8">Hakkımızda</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Vizyonumuz</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Modern e-ticaret çözümleri sunarak işletmelerin büyümesine katkıda bulunmak.</p>
          </div>
          <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Misyonumuz</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Müşterilerimize en iyi hizmeti sunmak ve yenilikçi çözümler üretmek.</p>
          </div>
        </div>
      </div>
    );
  }
  