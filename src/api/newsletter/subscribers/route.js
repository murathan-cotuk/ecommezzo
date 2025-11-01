// Newsletter aboneleri listesi API endpoint (Admin)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const status = searchParams.get('status') || 'all'; // 'all', 'active', 'unsubscribed'
    const source = searchParams.get('source') || 'all'; // 'all', 'contact_form', 'direct_signup', etc.

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
        success: true,
        data: [],
        pagination: {
          page: 1,
          limit: limit,
          total: 0,
          totalPages: 0
        }
      });
    }

    // Filtreleme
    let filteredSubscribers = subscribers;

    if (status !== 'all') {
      filteredSubscribers = filteredSubscribers.filter(sub => sub.status === status);
    }

    if (source !== 'all') {
      filteredSubscribers = filteredSubscribers.filter(sub => sub.source === source);
    }

    // Sıralama (en yeni önce)
    filteredSubscribers.sort((a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt));

    // Sayfalama
    const total = filteredSubscribers.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedSubscribers = filteredSubscribers.slice(startIndex, endIndex);

    // Hassas bilgileri kaldır
    const safeSubscribers = paginatedSubscribers.map(sub => ({
      email: sub.email,
      name: sub.name,
      source: sub.source,
      status: sub.status,
      subscribedAt: sub.subscribedAt,
      unsubscribedAt: sub.unsubscribedAt
    }));

    return Response.json({
      success: true,
      data: safeSubscribers,
      pagination: {
        page: page,
        limit: limit,
        total: total,
        totalPages: totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      filters: {
        status: status,
        source: source
      }
    });

  } catch (error) {
    console.error('Newsletter subscribers fetch error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten beim Laden der Abonnenten'
    }, { status: 500 });
  }
}

// CSV export endpoint
export async function POST(request) {
  try {
    const { format = 'csv' } = await request.json();

    if (format !== 'csv') {
      return Response.json({
        success: false,
        message: 'Nur CSV-Format wird unterstützt'
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

    // CSV oluştur
    const csvHeader = 'Email,Name,Source,Status,Subscribed At,Unsubscribed At\n';
    const csvRows = subscribers.map(sub => {
      return [
        sub.email,
        sub.name || '',
        sub.source || '',
        sub.status || '',
        sub.subscribedAt || '',
        sub.unsubscribedAt || ''
      ].map(field => `"${field}"`).join(',');
    }).join('\n');

    const csvContent = csvHeader + csvRows;

    // CSV dosyasını kaydet
    const timestamp = new Date().toISOString().split('T')[0];
    const csvFileName = `newsletter_subscribers_${timestamp}.csv`;
    const csvFilePath = path.join(dataDir, csvFileName);
    
    await fs.writeFile(csvFilePath, csvContent, 'utf8');

    return Response.json({
      success: true,
      message: 'CSV erfolgreich erstellt',
      filename: csvFileName,
      downloadUrl: `/api/newsletter/download/${csvFileName}`
    });

  } catch (error) {
    console.error('CSV export error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten beim CSV-Export'
    }, { status: 500 });
  }
}
