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

// Session oku - Memory tabanlı
const sessions = new Map();

async function getSession(sessionId) {
  try {
    return sessions.get(sessionId) || null;
  } catch (error) {
    return null;
  }
}

// Session sil - Memory tabanlı
async function deleteSession(sessionId) {
  try {
    sessions.delete(sessionId);
    console.log('Session deleted from memory:', sessionId);
  } catch (error) {
    console.error('Session delete error:', error);
  }
}
