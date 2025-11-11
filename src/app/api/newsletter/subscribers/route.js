// Newsletter aboneleri listesi API endpoint (Admin)
import { connectToDatabase } from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const status = searchParams.get('status') || 'all'; // 'all', 'active', 'unsubscribed'
    const source = searchParams.get('source') || 'all'; // 'all', 'contact_form', 'direct_signup', etc.

    // MongoDB'ye bağlan
    const { db } = await connectToDatabase();
    const subscribersCollection = db.collection('newsletter_subscribers');

    // Filtre oluştur
    const filter = {};
    if (status !== 'all') {
      filter.status = status;
    }
    if (source !== 'all') {
      filter.source = source;
    }

    // Toplam sayıyı al
    const total = await subscribersCollection.countDocuments(filter);

    // Sayfalama için skip ve limit hesapla
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(total / limit);

    // Aboneleri çek (en yeni önce sırala)
    const subscribers = await subscribersCollection
      .find(filter)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // Hassas bilgileri kaldır (unsubscribeToken hariç)
    const safeSubscribers = subscribers.map(sub => ({
      email: sub.email,
      name: sub.name || '',
      source: sub.source || '',
      status: sub.status || 'active',
      subscribedAt: sub.subscribedAt || sub.createdAt || new Date().toISOString(),
      unsubscribedAt: sub.unsubscribedAt || null
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
      message: 'Ein Fehler ist aufgetreten beim Laden der Abonnenten',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
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

    // MongoDB'ye bağlan
    const { db } = await connectToDatabase();
    const subscribersCollection = db.collection('newsletter_subscribers');

    // Tüm aboneleri çek
    const subscribers = await subscribersCollection
      .find({})
      .sort({ subscribedAt: -1 })
      .toArray();

    if (subscribers.length === 0) {
      return Response.json({
        success: false,
        message: 'Keine Abonnenten gefunden'
      }, { status: 404 });
    }

    // CSV oluştur
    const csvHeader = 'Email,Name,Source,Status,Subscribed At,Unsubscribed At\n';
    const csvRows = subscribers.map(sub => {
      return [
        sub.email || '',
        sub.name || '',
        sub.source || '',
        sub.status || 'active',
        sub.subscribedAt || sub.createdAt || '',
        sub.unsubscribedAt || ''
      ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',');
    }).join('\n');

    const csvContent = csvHeader + csvRows;

    // CSV'yi base64 olarak döndür (Vercel serverless'te dosya yazma yapamayız)
    const base64Content = Buffer.from(csvContent, 'utf8').toString('base64');
    const timestamp = new Date().toISOString().split('T')[0];
    const csvFileName = `newsletter_subscribers_${timestamp}.csv`;

    return Response.json({
      success: true,
      message: 'CSV erfolgreich erstellt',
      filename: csvFileName,
      csvContent: base64Content,
      downloadUrl: `data:text/csv;base64,${base64Content}`
    });

  } catch (error) {
    console.error('CSV export error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten beim CSV-Export',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

