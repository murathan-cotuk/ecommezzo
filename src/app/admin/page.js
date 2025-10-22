'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Authentication kontrolü
  const checkAuth = async () => {
    try {
      const sessionId = localStorage.getItem('admin_session');
      if (!sessionId) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId })
      });

      const data = await response.json();

      if (data.success) {
        setAuthenticated(true);
      } else {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_session');
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/admin/login');
    } finally {
      setAuthLoading(false);
    }
  };

  // Logout fonksiyonu
  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_session');
    router.push('/admin/login');
  };

  // İlk yükleme - auth kontrolü
  useEffect(() => {
    checkAuth();
  }, []);

  // Auth loading
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Authentifizierung...</p>
        </div>
      </div>
    );
  }

  // Auth başarısız
  if (!authenticated) {
    return null; // Router zaten yönlendirecek
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Willkommen im Ecommezzo Admin Panel</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center"
            >
              🚪 Abmelden
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push('/admin/newsletter')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <span className="text-2xl">📧</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
                <p className="text-sm text-gray-600">Abonnenten verwalten</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Newsletter-Abonnenten anzeigen, filtern und als CSV exportieren.
            </p>
            <div className="flex items-center text-orange-600 font-medium">
              <span>Verwaltung öffnen</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Analytics Card - Gelecekte eklenebilir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6 opacity-50 cursor-not-allowed"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">Website Statistiken</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Detaillierte Website-Analysen und Performance-Metriken.
            </p>
            <div className="flex items-center text-gray-400 font-medium">
              <span>Bald verfügbar</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Settings Card - Gelecekte eklenebilir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 opacity-50 cursor-not-allowed"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Einstellungen</h3>
                <p className="text-sm text-gray-600">System Konfiguration</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Website-Einstellungen und Systemkonfiguration verwalten.
            </p>
            <div className="flex items-center text-gray-400 font-medium">
              <span>Bald verfügbar</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Schnellübersicht</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">📧</div>
              <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
              <p className="text-sm text-gray-600">Abonnenten verwalten</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900">Sicherheit</h3>
              <p className="text-sm text-gray-600">Admin Panel geschützt</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">✅</div>
              <h3 className="text-lg font-semibold text-gray-900">Status</h3>
              <p className="text-sm text-gray-600">System läuft optimal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
