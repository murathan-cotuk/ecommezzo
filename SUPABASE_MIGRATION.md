# MongoDB'den Supabase'e Geçiş Rehberi

Bu proje MongoDB'den Supabase'e başarıyla geçirilmiştir. Bu dokümantasyon, geçiş sürecini ve yapılması gereken adımları açıklar.

## ✅ Tamamlanan İşlemler

1. ✅ Supabase client paketi yüklendi (`@supabase/supabase-js`)
2. ✅ Supabase bağlantı dosyası oluşturuldu (`src/lib/supabase.js`)
3. ✅ SQL migration dosyası oluşturuldu (`supabase/migrations/001_initial_schema.sql`)
4. ✅ Newsletter API'leri Supabase'e uyarlandı
5. ✅ Tracking API'leri Supabase'e uyarlandı
6. ✅ Eski MongoDB dosyaları kaldırıldı
7. ✅ `package.json` güncellendi (mongodb paketi kaldırıldı)

## 📋 Yapılması Gerekenler

### 1. Supabase Projesi Oluşturma

1. [Supabase](https://supabase.com) hesabı oluşturun veya giriş yapın
2. Yeni bir proje oluşturun
3. Proje oluşturulduktan sonra **Settings > API** bölümünden şu bilgileri alın:
   - Project URL
   - `anon` public key
   - `service_role` secret key (sadece server-side işlemler için)

### 2. Veritabanı Tablolarını Oluşturma

Supabase Dashboard'da **SQL Editor**'a gidin ve `supabase/migrations/001_initial_schema.sql` dosyasındaki SQL kodunu çalıştırın.

Alternatif olarak, Supabase CLI kullanıyorsanız:
```bash
supabase db push
```

### 3. Environment Variables Ayarlama

`.env.local` dosyanızı oluşturun veya güncelleyin:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Önemli:** 
- `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` client-side'da kullanılır
- `SUPABASE_SERVICE_ROLE_KEY` sadece server-side işlemler için kullanılır ve asla client-side'da expose edilmemelidir

### 4. Veri Migrasyonu (Opsiyonel)

Eğer MongoDB'de mevcut verileriniz varsa, bunları Supabase'e taşımanız gerekir:

#### Newsletter Subscribers
```javascript
// MongoDB'den veri çekme (geçici script)
const { MongoClient } = require('mongodb');
const { createClient } = require('@supabase/supabase-js');

// MongoDB bağlantısı
const mongoClient = new MongoClient('your-mongodb-uri');
const db = mongoClient.db('ecommezzo');
const subscribers = await db.collection('newsletter_subscribers').find({}).toArray();

// Supabase'e aktarma
const supabase = createClient('your-supabase-url', 'your-service-role-key');
for (const sub of subscribers) {
  await supabase.from('newsletter_subscribers').insert({
    email: sub.email,
    name: sub.name || '',
    source: sub.source || 'contact_form',
    status: sub.status || 'active',
    subscribed_at: sub.subscribedAt || sub.createdAt,
    unsubscribed_at: sub.unsubscribedAt || null,
    unsubscribe_token: sub.unsubscribeToken || null
  });
}
```

#### Tracking Events ve Daily Insights
Benzer şekilde `tracking_events` ve `daily_insights` collection'larını da taşıyabilirsiniz.

### 5. Bağımlılıkları Güncelleme

```bash
npm install
```

Bu komut MongoDB paketini kaldırıp Supabase paketini yükleyecektir.

### 6. Test Etme

1. Newsletter abonelik formunu test edin
2. Newsletter abonelik iptalini test edin
3. Admin panelinden aboneleri listelemeyi test edin
4. Tracking API'lerini test edin

## 🔄 Değişiklikler

### Veritabanı Yapısı

**MongoDB Collections → Supabase Tables:**

- `newsletter_subscribers` → `newsletter_subscribers`
- `tracking_events` → `tracking_events`
- `daily_insights` → `daily_insights`

### API Değişiklikleri

Tüm API endpoint'leri aynı kalır, sadece backend implementasyonu değişti:

- `POST /api/newsletter/subscribe` - Newsletter abonelik
- `POST /api/newsletter/unsubscribe` - Newsletter abonelik iptali
- `GET /api/newsletter/subscribers` - Aboneleri listeleme
- `POST /api/newsletter/subscribers` - CSV export
- `POST /api/insight/track` - Tracking event kaydetme
- `GET /api/insight/track` - Tracking verilerini getirme

### Kod Değişiklikleri

- `src/lib/mongodb.js` → `src/lib/supabase.js`
- MongoDB collection operasyonları → Supabase table operasyonları
- MongoDB `$inc`, `$max` operatörleri → JavaScript ile manuel hesaplama

## 🔒 Güvenlik

- Row Level Security (RLS) politikaları migration dosyasında tanımlanmıştır
- Public insert işlemleri için `anon` key kullanılır
- Admin işlemleri için `service_role` key kullanılır
- `service_role` key asla client-side'da kullanılmamalıdır

## 📚 Ek Kaynaklar

- [Supabase Dokümantasyonu](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## ⚠️ Notlar

- MongoDB'den Supabase'e geçiş sırasında veri tipleri değişti (MongoDB ObjectId → PostgreSQL UUID)
- Tarih formatları ISO string olarak korundu
- JSONB kullanılarak MongoDB'nin esnek yapısı korundu
- Index'ler performans için optimize edildi

## 🐛 Sorun Giderme

### "Missing Supabase environment variables" hatası
- `.env.local` dosyasının doğru oluşturulduğundan emin olun
- Environment variable'ların doğru isimlendirildiğinden emin olun
- Next.js'i yeniden başlatın

### RLS Policy hatası
- Supabase Dashboard'da RLS politikalarının doğru ayarlandığından emin olun
- Service role key kullanıldığından emin olun (server-side işlemler için)

### Veri formatı uyumsuzluğu
- Migration dosyasını tekrar kontrol edin
- Veri tiplerinin doğru olduğundan emin olun

