// Newsletter abonelik iptal API endpoint
import { getSupabaseClient } from '../../../../lib/supabase';

export async function POST(request) {
  try {
    const { email, token } = await request.json();

    if (!email) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse ist erforderlich'
      }, { status: 400 });
    }

    const supabase = getSupabaseClient();
    const normalizedEmail = email.toLowerCase().trim();

    // Abone bul
    const { data: subscriber, error: fetchError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', normalizedEmail)
      .single();

    if (fetchError || !subscriber) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse nicht gefunden'
      }, { status: 404 });
    }

    // Token kontrolü (opsiyonel güvenlik)
    if (token && subscriber.unsubscribe_token !== token) {
      return Response.json({
        success: false,
        message: 'Ungültiger Token'
      }, { status: 401 });
    }

    // Aboneliği iptal et
    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', normalizedEmail);

    if (updateError) {
      throw updateError;
    }

    return Response.json({
      success: true,
      message: 'Erfolgreich vom Newsletter abgemeldet'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
    }, { status: 500 });
  }
}
