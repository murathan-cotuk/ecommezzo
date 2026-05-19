// Admin authentication API endpoint
import { createAdminSession } from '../../../../lib/adminSession';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const adminCredentials = {
      username: process.env.ADMIN_USERNAME || 'ecommezzo',
      password: process.env.ADMIN_PASSWORD || 'Ecommezzo2023!',
    };

    if (
      username !== adminCredentials.username ||
      password !== adminCredentials.password
    ) {
      return Response.json(
        {
          success: false,
          message: 'Ungültige Anmeldedaten',
        },
        { status: 401 }
      );
    }

    const { token, expiresAt } = createAdminSession(adminCredentials.username);

    return Response.json({
      success: true,
      message: 'Erfolgreich angemeldet',
      sessionId: token,
      expiresAt,
    });
  } catch (error) {
    console.error('Admin auth error:', error);
    return Response.json(
      {
        success: false,
        message: 'Ein Fehler ist aufgetreten',
      },
      { status: 500 }
    );
  }
}
