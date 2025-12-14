# Supabase Kurulum Talimatları

## 1. Environment Variables Ayarlama

Proje kök dizininde `.env.local` dosyası oluşturun ve aşağıdaki içeriği ekleyin:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ycqlnxstxhrqxolsbzos.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcWxueHN0eGhycXhvbHNiem9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMTk3MjIsImV4cCI6MjA3ODU5NTcyMn0.rOMTp5dY9tp055JJfb5STIjzsTIA93PuXfAwbyBglKk
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcWxueHN0eGhycXhvbHNiem9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzAxOTcyMiwiZXhwIjoyMDc4NTk1NzIyfQ.vLuykkzsqxn_zcD4GlV4Cs4pm30pngRVbuw1xTEyKd0
```

## 2. Supabase Veritabanı Tablolarını Oluşturma

### Yöntem 1: Supabase Dashboard (Önerilen)

1. [Supabase Dashboard](https://supabase.com/dashboard/project/ycqlnxstxhrqxolsbzos) sayfanıza gidin
2. Sol menüden **SQL Editor**'a tıklayın
3. **New query** butonuna tıklayın
4. `supabase/migrations/001_initial_schema.sql` dosyasının içeriğini kopyalayıp yapıştırın
5. **Run** butonuna tıklayın (veya `Ctrl+Enter`)

### Yöntem 2: Supabase CLI (Eğer kuruluysa)

```bash
# Supabase CLI ile bağlan
supabase link --project-ref ycqlnxstxhrqxolsbzos

# Migration'ı uygula
supabase db push
```

## 3. Tabloların Doğrulanması

SQL Editor'da şu sorguyu çalıştırarak tabloların oluşturulduğunu kontrol edin:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('newsletter_subscribers', 'tracking_events', 'daily_insights');
```

3 tablo görünmelidir.

## 4. Test Etme

### Newsletter API Testi

```bash
# Newsletter abonelik testi
curl -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

### Development Server'ı Başlatma

```bash
npm run dev
```

## 5. Sorun Giderme

### "Missing Supabase environment variables" hatası
- `.env.local` dosyasının proje kök dizininde olduğundan emin olun
- Next.js development server'ı yeniden başlatın (`Ctrl+C` sonra `npm run dev`)

### RLS Policy hatası
- Supabase Dashboard > Authentication > Policies bölümünden RLS politikalarının aktif olduğunu kontrol edin
- SQL Editor'da migration'ı tekrar çalıştırmayı deneyin

### Tablo bulunamadı hatası
- SQL Editor'da migration dosyasını tekrar çalıştırın
- Tabloların oluşturulduğunu yukarıdaki SQL sorgusu ile kontrol edin

