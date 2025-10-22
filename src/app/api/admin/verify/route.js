// Admin session verification API endpoint
export async function POST(request) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return Response.json({
        success: false,
        message: 'Session ID erforderlich'
      }, { status: 400 });
    }

    // Session'ı kontrol et
    const session = await getSession(sessionId);

    if (!session) {
      return Response.json({
        success: false,
        message: 'Ungültige Session'
      }, { status: 401 });
    }

    // Session süresi kontrolü
    const now = new Date();
    const expiresAt = new Date(session.expiresAt);

    if (now > expiresAt) {
      // Session süresi dolmuş, sil
      await deleteSession(sessionId);
      return Response.json({
        success: false,
        message: 'Session abgelaufen'
      }, { status: 401 });
    }

    return Response.json({
      success: true,
      message: 'Session gültig',
      session: {
        username: session.username,
        expiresAt: session.expiresAt
      }
    });

  } catch (error) {
    console.error('Session verification error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten'
    }, { status: 500 });
  }
}

// Session oku
async function getSession(sessionId) {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const sessionsFile = path.join(dataDir, 'admin_sessions.json');

    const existingData = await fs.readFile(sessionsFile, 'utf8');
    const sessions = JSON.parse(existingData);
    
    return sessions[sessionId] || null;
  } catch (error) {
    return null;
  }
}

// Session sil
async function deleteSession(sessionId) {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const sessionsFile = path.join(dataDir, 'admin_sessions.json');

    const existingData = await fs.readFile(sessionsFile, 'utf8');
    const sessions = JSON.parse(existingData);
    
    delete sessions[sessionId];
    
    await fs.writeFile(sessionsFile, JSON.stringify(sessions, null, 2));
  } catch (error) {
    console.error('Session delete error:', error);
  }
}
