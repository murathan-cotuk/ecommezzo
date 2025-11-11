// Newsletter abonelik iptal API endpoint
import { connectToDatabase } from '../../../../lib/mongodb';

export async function POST(request) {
  try {
    const { email, token } = await request.json();

    if (!email) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse ist erforderlich'
      }, { status: 400 });
    }

    // MongoDB'ye bağlan
    const { db } = await connectToDatabase();
    const subscribersCollection = db.collection('newsletter_subscribers');

    // Abone bul
    const subscriber = await subscribersCollection.findOne({ 
      email: email.toLowerCase().trim() 
    });

    if (!subscriber) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse nicht gefunden'
      }, { status: 404 });
    }

    // Token kontrolü (opsiyonel güvenlik)
    if (token && subscriber.unsubscribeToken !== token) {
      return Response.json({
        success: false,
        message: 'Ungültiger Token'
      }, { status: 401 });
    }

    // Aboneliği iptal et
    await subscribersCollection.updateOne(
      { email: email.toLowerCase().trim() },
      {
        $set: {
          status: 'unsubscribed',
          unsubscribedAt: new Date().toISOString()
        }
      }
    );

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
