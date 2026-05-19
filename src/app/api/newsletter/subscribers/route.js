// Newsletter aboneleri listesi API endpoint (Admin)
import { listNewsletterSubscribers } from '../../../../lib/newsletterStore';
import { getAdminSessionFromRequest } from '../../../../lib/adminSession';

function requireAdmin(request) {
  const session = getAdminSessionFromRequest(request);
  if (!session) {
    return Response.json(
      {
        success: false,
        message: 'Nicht autorisiert',
      },
      { status: 401 }
    );
  }
  return null;
}

export async function GET(request) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const status = searchParams.get('status') || 'all'; // 'all', 'active', 'unsubscribed'
    const source = searchParams.get('source') || 'all'; // 'all', 'contact_form', 'direct_signup', etc.

    const allSubscribers = await listNewsletterSubscribers({ status, source });
    const total = allSubscribers.length;
    const from = (page - 1) * limit;
    const subscribers = allSubscribers.slice(from, from + limit);
    const totalPages = Math.ceil(total / limit);

    // Hassas bilgileri kaldır (unsubscribe_token hariç)
    const safeSubscribers = (subscribers || []).map(sub => ({
      email: sub.email,
      name: sub.name || '',
      source: sub.source || '',
      status: sub.status || 'active',
      subscribedAt:
        sub.subscribed_at || sub.subscribedAt || sub.created_at || new Date().toISOString(),
      unsubscribedAt: sub.unsubscribed_at || null
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
  const unauthorized = requireAdmin(request);
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const { format = 'csv' } = await request.json();

    if (format !== 'csv') {
      return Response.json({
        success: false,
        message: 'Nur CSV-Format wird unterstützt'
      }, { status: 400 });
    }

    const subscribers = await listNewsletterSubscribers();

    if (!subscribers || subscribers.length === 0) {
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
        sub.subscribed_at || sub.subscribedAt || sub.created_at || '',
        sub.unsubscribed_at || sub.unsubscribedAt || ''
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

