// Admin session verification API endpoint
import { verifyAdminSession } from '../../../../lib/adminSession';
import { sessionStore } from '../../../../lib/sessionStore';

export async function POST(request) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return Response.json(
        {
          success: false,
          message: 'Session ID erforderlich',
        },
        { status: 400 }
      );
    }

    const jwtSession = verifyAdminSession(sessionId);
    if (jwtSession) {
      return Response.json({
        success: true,
        message: 'Session gültig',
        session: jwtSession,
      });
    }

    const legacySession = sessionStore.get(sessionId);
    if (legacySession) {
      const now = new Date();
      const expiresAt = new Date(legacySession.expiresAt);

      if (now > expiresAt) {
        sessionStore.delete(sessionId);
        return Response.json(
          {
            success: false,
            message: 'Session abgelaufen',
          },
          { status: 401 }
        );
      }

      return Response.json({
        success: true,
        message: 'Session gültig',
        session: {
          username: legacySession.username,
          expiresAt: legacySession.expiresAt,
        },
      });
    }

    return Response.json(
      {
        success: false,
        message: 'Ungültige Session',
      },
      { status: 401 }
    );
  } catch (error) {
    console.error('Session verification error:', error);
    return Response.json(
      {
        success: false,
        message: 'Ein Fehler ist aufgetreten',
      },
      { status: 500 }
    );
  }
}
