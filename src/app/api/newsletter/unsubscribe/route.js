// Newsletter abonelik iptal API endpoint
export async function POST(request) {
  try {
    const { email, token } = await request.json();

    if (!email) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse ist erforderlich'
      }, { status: 400 });
    }

    // Basit dosya tabanlı veritabanı
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const subscribersFile = path.join(dataDir, 'newsletter_subscribers.json');

    // Mevcut aboneleri oku
    let subscribers = [];
    try {
      const existingData = await fs.readFile(subscribersFile, 'utf8');
      subscribers = JSON.parse(existingData);
    } catch (error) {
      return Response.json({
        success: false,
        message: 'Keine Abonnenten gefunden'
      }, { status: 404 });
    }

    // Abone bul
    const subscriberIndex = subscribers.findIndex(sub => sub.email === email.toLowerCase());
    
    if (subscriberIndex === -1) {
      return Response.json({
        success: false,
        message: 'E-Mail-Adresse nicht gefunden'
      }, { status: 404 });
    }

    // Token kontrolü (opsiyonel güvenlik)
    if (token && subscribers[subscriberIndex].unsubscribeToken !== token) {
      return Response.json({
        success: false,
        message: 'Ungültiger Token'
      }, { status: 401 });
    }

    // Aboneliği iptal et
    subscribers[subscriberIndex].status = 'unsubscribed';
    subscribers[subscriberIndex].unsubscribedAt = new Date().toISOString();

    // Güncellenmiş listeyi kaydet
    await fs.writeFile(subscribersFile, JSON.stringify(subscribers, null, 2));

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

