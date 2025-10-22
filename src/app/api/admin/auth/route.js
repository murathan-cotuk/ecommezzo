// Admin authentication API endpoint
export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Admin credentials (production'da environment variables kullanın)
    const adminCredentials = {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD || 'ecommezzo2024'
    };

    // Debug log
    console.log('Login attempt:', { username, password });
    console.log('Expected:', adminCredentials);

    // Credentials kontrolü
    if (username !== adminCredentials.username || password !== adminCredentials.password) {
      console.log('Login failed - credentials mismatch');
      return Response.json({
        success: false,
        message: 'Ungültige Anmeldedaten'
      }, { status: 401 });
    }

    // Session ID oluştur
    const sessionId = generateSessionId();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 saat

    // Session'ı kaydet (basit dosya tabanlı)
    await saveSession(sessionId, {
      username: adminCredentials.username,
      expiresAt: expiresAt.toISOString(),
      createdAt: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    return Response.json({
      success: true,
      message: 'Erfolgreich angemeldet',
      sessionId: sessionId,
      expiresAt: expiresAt.toISOString()
    });

  } catch (error) {
    console.error('Admin auth error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten'
    }, { status: 500 });
  }
}

// Session ID oluştur
function generateSessionId() {
  const crypto = require('crypto');
  return crypto.randomBytes(32).toString('hex');
}

// Session kaydet - Memory tabanlı (deploy uyumlu)
const sessions = new Map();

async function saveSession(sessionId, sessionData) {
  try {
    // Memory'de sakla (deploy ortamında dosya yazma sorunu olabilir)
    sessions.set(sessionId, sessionData);
    console.log('Session saved in memory:', sessionId);
  } catch (error) {
    console.error('Session save error:', error);
  }
}
