import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      {/* Tam ekran 404.webp görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/404.webp"
          alt="404 Not Found"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay - görselin üzerine hafif koyu katman */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* İçerik - görselin üzerinde */}
      <div className="relative z-20 text-center text-white px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-lg">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white drop-shadow-lg">
            Seite nicht gefunden
          </h2>
          <p className="text-lg mb-8 text-white drop-shadow-md">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          
          {/* Zurück zur Startseite butonu */}
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
