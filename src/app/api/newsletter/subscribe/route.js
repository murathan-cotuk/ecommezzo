// Newsletter abonelik API endpoint
import { connectToDatabase } from '../../../../lib/mongodb';

// Unsubscribe token oluştur
function generateUnsubscribeToken(email) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(email + Date.now()).digest('hex').substring(0, 32);
}

// Hoş geldin emaili gönder (opsiyonel)
async function sendWelcomeEmail(email, name) {
  // Burada email gönderme servisi kullanabilirsiniz
  // Şimdilik sadece log
  console.log(`Welcome email sent to: ${email} (${name})`);
}

export async function POST(request) {
  try {
    const { email, name, source = 'contact_form' } = await request.json();

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        message: 'Ungültige E-Mail-Adresse'
      }, { status: 400 });
    }

    // MongoDB'ye bağlan
    const { db } = await connectToDatabase();
    const subscribersCollection = db.collection('newsletter_subscribers');

    // Email zaten kayıtlı mı kontrol et
    const existingSubscriber = await subscribersCollection.findOne({ 
      email: email.toLowerCase().trim() 
    });

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return Response.json({
          success: false,
          message: 'Diese E-Mail-Adresse ist bereits angemeldet'
        }, { status: 409 });
      } else {
        // Yeniden abone ol - mevcut kaydı güncelle
        await subscribersCollection.updateOne(
          { email: email.toLowerCase().trim() },
          {
            $set: {
              status: 'active',
              subscribedAt: new Date().toISOString(),
              source: source,
              name: name?.trim() || existingSubscriber.name || ''
            }
          }
        );

        // Başarılı abonelik emaili gönder (opsiyonel)
        try {
          await sendWelcomeEmail(email, name);
        } catch (error) {
          console.warn('Welcome email gönderilemedi:', error);
        }

        return Response.json({
          success: true,
          message: 'Erfolgreich für den Newsletter angemeldet!',
          subscriber: {
            email: email.toLowerCase().trim(),
            subscribedAt: new Date().toISOString()
          }
        });
      }
    }

    // Yeni abone ekle
    const subscriber = {
      email: email.toLowerCase().trim(),
      name: name?.trim() || '',
      source: source,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      unsubscribeToken: generateUnsubscribeToken(email),
      createdAt: new Date()
    };

    await subscribersCollection.insertOne(subscriber);

    // Başarılı abonelik emaili gönder (opsiyonel)
    try {
      await sendWelcomeEmail(email, name);
    } catch (error) {
      console.warn('Welcome email gönderilemedi:', error);
    }

    return Response.json({
      success: true,
      message: 'Erfolgreich für den Newsletter angemeldet!',
      subscriber: {
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // MongoDB duplicate key hatası (email zaten var)
    if (error.code === 11000) {
      return Response.json({
        success: false,
        message: 'Diese E-Mail-Adresse ist bereits angemeldet'
      }, { status: 409 });
    }

    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
