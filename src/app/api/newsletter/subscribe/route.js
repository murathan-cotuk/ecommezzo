// Newsletter abonelik API endpoint
import { subscribeToNewsletter } from '../../../../lib/newsletterStore';

async function sendWelcomeEmail(email, name) {
  console.log(`Welcome email sent to: ${email} (${name})`);
}

export async function POST(request) {
  try {
    const { email, name, source = 'contact_form' } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: 'Ungültige E-Mail-Adresse',
        },
        { status: 400 }
      );
    }

    const result = await subscribeToNewsletter({ email, name, source });

    if (!result.ok) {
      return Response.json(
        {
          success: false,
          message: result.message,
        },
        { status: result.status || 400 }
      );
    }

    try {
      await sendWelcomeEmail(email, name);
    } catch (error) {
      console.warn('Welcome email gönderilemedi:', error);
    }

    return Response.json({
      success: true,
      message: 'Erfolgreich für den Newsletter angemeldet!',
      subscriber: result.subscriber,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error.code === '23505') {
      return Response.json(
        {
          success: false,
          message: 'Diese E-Mail-Adresse ist bereits angemeldet',
        },
        { status: 409 }
      );
    }

    return Response.json(
      {
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
