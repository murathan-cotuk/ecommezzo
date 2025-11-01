// Newsletter abonelik API endpoint
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

    // Abone verisi
    const subscriber = {
      email: email.toLowerCase().trim(),
      name: name?.trim() || '',
      source: source, // 'contact_form', 'direct_signup', 'website_popup'
      subscribedAt: new Date().toISOString(),
      status: 'active',
      unsubscribeToken: generateUnsubscribeToken(email)
    };

    // Basit dosya tabanlı veritabanı (production'da gerçek DB kullanın)
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const subscribersFile = path.join(dataDir, 'newsletter_subscribers.json');

    // Data klasörünü oluştur
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Klasör zaten var
    }

    // Mevcut aboneleri oku
    let subscribers = [];
    try {
      const existingData = await fs.readFile(subscribersFile, 'utf8');
      subscribers = JSON.parse(existingData);
    } catch (error) {
      // Dosya yok, boş array ile başla
    }

    // Email zaten kayıtlı mı kontrol et
    const existingSubscriber = subscribers.find(sub => sub.email === subscriber.email);
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return Response.json({
          success: false,
          message: 'Diese E-Mail-Adresse ist bereits angemeldet'
        }, { status: 409 });
      } else {
        // Yeniden abone ol
        existingSubscriber.status = 'active';
        existingSubscriber.subscribedAt = new Date().toISOString();
        existingSubscriber.source = source;
      }
    } else {
      // Yeni abone ekle
      subscribers.push(subscriber);
    }

    // Aboneleri kaydet
    await fs.writeFile(subscribersFile, JSON.stringify(subscribers, null, 2));

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
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
    }, { status: 500 });
  }
}

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
