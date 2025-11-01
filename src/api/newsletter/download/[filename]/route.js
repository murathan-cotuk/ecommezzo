// Newsletter CSV download endpoint
export async function GET(request, { params }) {
  try {
    const { filename } = params;

    // Güvenlik kontrolü - sadece CSV dosyalarına izin ver
    if (!filename.endsWith('.csv') || filename.includes('..') || filename.includes('/')) {
      return Response.json({
        success: false,
        message: 'Ungültiger Dateiname'
      }, { status: 400 });
    }

    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const csvFilePath = path.join(dataDir, filename);

    // Dosya var mı kontrol et
    try {
      await fs.access(csvFilePath);
    } catch (error) {
      return Response.json({
        success: false,
        message: 'Datei nicht gefunden'
      }, { status: 404 });
    }

    // CSV dosyasını oku
    const csvContent = await fs.readFile(csvFilePath, 'utf8');

    // CSV dosyasını döndür
    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache'
      }
    });

  } catch (error) {
    console.error('CSV download error:', error);
    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten beim Herunterladen der Datei'
    }, { status: 500 });
  }
}
