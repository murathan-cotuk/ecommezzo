// Newsletter aboneleri listesi API endpoint (Admin)
import { getSupabaseClient } from '../../../../lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const status = searchParams.get('status') || 'all'; // 'all', 'active', 'unsubscribed'
    const source = searchParams.get('source') || 'all'; // 'all', 'contact_form', 'direct_signup', etc.

    const supabase = getSupabaseClient();

    // Filtre oluştur
    let query = supabase
      .from('newsletter_subscribers')
      .select('*', { count: 'exact' });

    if (status !== 'all') {
      query = query.eq('status', status);
    }
    if (source !== 'all') {
      query = query.eq('source', source);
    }

    // Sayfalama için range hesapla
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Aboneleri çek (en yeni önce sırala)
    const { data: subscribers, error: fetchError, count } = await query
      .order('subscribed_at', { ascending: false })
      .range(from, to);

    if (fetchError) {
      throw fetchError;
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    // Hassas bilgileri kaldır (unsubscribe_token hariç)
    const safeSubscribers = (subscribers || []).map(sub => ({
      email: sub.email,
      name: sub.name || '',
      source: sub.source || '',
      status: sub.status || 'active',
      subscribedAt: sub.subscribed_at || sub.created_at || new Date().toISOString(),
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
  try {
    const { format = 'csv' } = await request.json();

    if (format !== 'csv') {
      return Response.json({
        success: false,
        message: 'Nur CSV-Format wird unterstützt'
      }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    // Tüm aboneleri çek
    const { data: subscribers, error: fetchError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (fetchError) {
      throw fetchError;
    }

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
        sub.subscribed_at || sub.created_at || '',
        sub.unsubscribed_at || ''
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

