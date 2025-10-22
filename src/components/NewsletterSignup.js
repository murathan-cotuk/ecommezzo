'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '../services/emailService';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Bitte geben Sie eine E-Mail-Adresse ein');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const result = await subscribeToNewsletter(email, name);
      
      if (result.success) {
        setSuccess(true);
        setMessage('Erfolgreich für den Newsletter angemeldet!');
        setEmail('');
        setName('');
        
        // 3 saniye sonra success mesajını temizle
        setTimeout(() => {
          setSuccess(false);
          setMessage('');
        }, 3000);
      } else {
        setMessage(result.message || 'Ein Fehler ist aufgetreten');
      }
    } catch (error) {
      setMessage('Verbindungsfehler. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-200 to-amber-200 text-orange-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📧 Abonnieren Sie jetzt unseren Newsletter!
            </h2>
            <p className="text-lg md:text-xl text-orange-700 max-w-2xl mx-auto">
              Erhalten Sie exklusive E-Commerce Tipps, Marketing-Strategien und Updates direkt in Ihr Postfach.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-orange-300/30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-sm font-medium text-orange-800 mb-2">
                    Name (optional)
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 border border-orange-300/50"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-orange-800 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 border border-orange-300/50"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Wird angemeldet...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🚀</span>
                    Jetzt kostenlos abonnieren
                  </>
                )}
              </button>
            </form>

            {/* Mesaj gösterimi */}
            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mt-4 p-3 rounded-lg text-sm ${
                  success 
                    ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                    : 'bg-red-500/20 text-red-100 border border-red-400/30'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {success ? '✅' : '⚠️'}
                  </span>
                  {message}
                </div>
              </motion.div>
            )}

            {/* Güvenlik notu */}
            <p className="text-xs text-orange-600 mt-4 text-center">
              🔒 Ihre Daten sind sicher. Kein Spam, jederzeit abmeldbar.
            </p>
          </div>

          {/* Özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-lg mb-2">E-Commerce Tipps</h3>
              <p className="text-orange-600 text-sm">
                Praktische Ratschläge für Ihren Online-Shop
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold text-lg mb-2">Marketing-Strategien</h3>
              <p className="text-orange-600 text-sm">
                Bewährte Methoden für mehr Verkäufe
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🆕</div>
              <h3 className="font-semibold text-lg mb-2">Neueste Updates</h3>
              <p className="text-orange-600 text-sm">
                Immer auf dem Laufenden bleiben
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
