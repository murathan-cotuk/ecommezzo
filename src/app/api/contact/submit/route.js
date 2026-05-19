import { saveContactLead } from '../../../../lib/newsletterStore';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email?.trim()) {
      return Response.json(
        { success: false, message: 'E-Mail ist erforderlich' },
        { status: 400 }
      );
    }

    const result = await saveContactLead(body);

    if (!result.ok) {
      return Response.json(
        { success: false, message: result.message || 'Speichern fehlgeschlagen' },
        { status: result.status || 500 }
      );
    }

    return Response.json({ success: true, message: 'Kontakt gespeichert' });
  } catch (error) {
    console.error('Contact submit error:', error);
    return Response.json(
      { success: false, message: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}
