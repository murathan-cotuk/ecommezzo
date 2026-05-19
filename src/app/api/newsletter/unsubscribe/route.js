// Newsletter abonelik iptal API endpoint
import { unsubscribeFromNewsletter } from '../../../../lib/newsletterStore';

export async function POST(request) {
  try {
    const { email, token } = await request.json();

    if (!email) {
      return Response.json(
        {
          success: false,
          message: 'E-Mail-Adresse ist erforderlich',
        },
        { status: 400 }
      );
    }

    const result = await unsubscribeFromNewsletter({ email, token });

    if (!result.ok) {
      return Response.json(
        {
          success: false,
          message: result.message,
        },
        { status: result.status || 400 }
      );
    }

    return Response.json({
      success: true,
      message: 'Erfolgreich vom Newsletter abgemeldet',
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return Response.json(
      {
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      },
      { status: 500 }
    );
  }
}
