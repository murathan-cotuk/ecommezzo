export default function Services() {
    return (
      <div>
        <section className="w-full h-[300px] bg-gradient-to-t from-cyan-950 to-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mt-20">Services
        </h1>
      </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">X</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">X</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">X</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">X</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">X</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">X</p>
            </div>
          </div>
        </div>
      </div>
    );
  }