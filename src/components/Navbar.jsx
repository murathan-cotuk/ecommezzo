export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              Ecommezzo
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/webdesign" className="text-gray-800 dark:text-white hover:text-gray-600">Webdesign</a>
            <a href="/marketing" className="text-gray-800 dark:text-white hover:text-gray-600">Marketing</a>
            <a href="/web-analytics" className="text-gray-800 dark:text-white hover:text-gray-600">Web Analytics</a>
            <a href="/marktplatz" className="text-gray-800 dark:text-white hover:text-gray-600">Marktplatz</a>
            <a href="/about-us" className="text-gray-800 dark:text-white hover:text-gray-600">About Us</a>
            <a href="/termin-buchen" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Termin Buchen</a>
          </div>
        </div>
      </div>
    </nav>
  );
}