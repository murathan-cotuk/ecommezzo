// Admin authentication API endpoint
export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Admin credentials (production'da environment variables kullanın)
    const adminCredentials = {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD || 'ecommezzo2024!'
    };

    // Credentials kontrolü
    if (username !== adminCredentials.username || password !== adminCredentials.password) {
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

// Session kaydet
async function saveSession(sessionId, sessionData) {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const sessionsFile = path.join(dataDir, 'admin_sessions.json');

    // Data klasörünü oluştur
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Klasör zaten var
    }

    // Mevcut session'ları oku
    let sessions = {};
    try {
      const existingData = await fs.readFile(sessionsFile, 'utf8');
      sessions = JSON.parse(existingData);
    } catch (error) {
      // Dosya yok, boş object ile başla
    }

    // Yeni session ekle
    sessions[sessionId] = sessionData;

    // Session'ları kaydet
    await fs.writeFile(sessionsFile, JSON.stringify(sessions, null, 2));
  } catch (error) {
    console.error('Session save error:', error);
  }
}
