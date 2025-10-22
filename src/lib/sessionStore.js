// Global session store - tüm admin API'leri için ortak
const sessions = new Map();

export const sessionStore = {
  // Session kaydet
  set(sessionId, sessionData) {
    sessions.set(sessionId, sessionData);
    console.log('Session saved:', sessionId);
  },

  // Session oku
  get(sessionId) {
    return sessions.get(sessionId) || null;
  },

  // Session sil
  delete(sessionId) {
    sessions.delete(sessionId);
    console.log('Session deleted:', sessionId);
  },

  // Session kontrolü
  has(sessionId) {
    return sessions.has(sessionId);
  },

  // Tüm session'ları listele (debug için)
  getAll() {
    return Array.from(sessions.entries());
  }
};
