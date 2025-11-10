// Admin session verification API endpoint
import { sessionStore } from '../../../../lib/sessionStore';

async function getSession(sessionId) {
  try {
    return sessionStore.get(sessionId);
  } catch (error) {
    return null;
  }
}

// Session sil
async function deleteSession(sessionId) {
  try {
    sessionStore.delete(sessionId);
  } catch (error) {
    console.error('Session delete error:', error);
  }
}

export async function POST(request) {
  try {
    const { sessionId } = await request.json();

    console.log('Verify request - sessionId:', sessionId);

    if (!sessionId) {
      console.log('No sessionId provided');
      return Response.json({
        success: false,
        message: 'Session ID erforderlich'
      }, { status: 400 });
    }

    // Session'ı kontrol et
    const session = await getSession(sessionId);
    console.log('Session found:', session);

    if (!session) {
      console.log('Session not found');
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

