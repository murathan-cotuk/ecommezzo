"use client";

import Social_Icons from "./Social_Icons";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-t from-cyan-950 to-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Üst Kısım: Bağlantılar ve Bilgiler */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Hakkımızda */}
            <div>
              <h3 className="text-lg font-bold mb-4">ECOMMEZZO</h3>
              <p className="text-gray-400">
                Ihr zuverlässiger Partner für nachhaltigen Erfolg mit Europas führenden Marktplätzen und Ihrem profitablen Shopify-Shop.
              </p>
            </div>
  
            {/* Dienstleistungen */}
            <div>
              <h3 className="text-lg font-bold mb-4">DIENSTLEISTUNGEN</h3>
              <ul className="space-y-1">
                <li><a href="/webdesign" className="text-gray-400 hover:text-white">Website | Onlineshop</a></li>
                <li><a href="/webdesign#shoprelaunch" className="text-gray-400 hover:text-white">Shop-Relaunch</a></li>
                <li><a href="/marktplatz" className="text-gray-400 hover:text-white">Marktplatz</a></li>
                <li><a href="/conversion" className="text-gray-400 hover:text-white">Conversion Rate Rechner</a></li>
              </ul>
            </div>
  
            {/* Marketing */}
            <div>
              <h3 className="text-lg font-bold mb-4">MARKETING</h3>
              <ul className="space-y-1">
                <li><a href="/marketing#seo" className="text-gray-400 hover:text-white">Suchmaschinenoptimierung (SEO)</a></li>
                <li><a href="/marketing#social-media" className="text-gray-400 hover:text-white">Social Media</a></li>
                <li><a href="/marketing#amazon-ppc" className="text-gray-400 hover:text-white">Amazon PPC</a></li>
                <li><a href="/marketing#target-audience" className="text-gray-400 hover:text-white">Bestimmung der Zielgruppe</a></li>
              </ul>
            </div>
            
            {/* Kontakt */}
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-1">
                <li><a href="/kontakt" className="text-gray-400 hover:text-white">Kontakt</a></li>
                <li><a href="mailto:service@ecommezzo.com" className="text-gray-400 hover:text-white">service@ecommezzo.com</a></li>
              </ul>
            </div>
          </div>
          <Social_Icons />
          {/* Sosyal Medya Linkleri */}
          <div className="flex space-x-4 mb-4 md:mb-8">
              {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>*/}
              {/*<a href="https://www.instagram.com/ecommezzo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.148 3.225-1.667 4.771-4.919 4.919-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-3.225-.148-4.771-1.667-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.148-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 2.656.261.261 2.656.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.191 4.396 2.586 6.791 6.982 6.982C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c4.396-.191 6.791-2.586 6.982-6.982.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.191-4.396-2.586-6.791-6.982-6.982C15.668.012 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0z" />
                </svg>
              </a>*/}
              
              {/*<a href="https://tr.linkedin.com/company/ecommezzo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>*/}
            </div>
  
          {/* Alt Kısım: Telif Hakkı ve Yasal Bağlantılar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Ecommezzo. All Rights Reserved.
            </div>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li><a href="/impressum" className="text-gray-400 hover:text-white">Impressum</a></li>
              <li><a href="/datenschutz" className="text-gray-400 hover:text-white">Datenschutz</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  