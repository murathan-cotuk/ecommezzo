# Vercel Environment Variables Kurulumu

Vercel'de build hatası almamak için Supabase environment variable'larını Vercel Dashboard'da ayarlamanız gerekiyor.

## Adımlar

### 1. Vercel Dashboard'a Gidin
1. [Vercel Dashboard](https://vercel.com/dashboard) sayfanıza gidin
2. `ecommezzo` projenizi seçin
3. **Settings** sekmesine tıklayın
4. Sol menüden **Environment Variables** seçeneğine tıklayın

### 2. Environment Variables Ekleyin

Aşağıdaki 3 environment variable'ı ekleyin:

#### 1. NEXT_PUBLIC_SUPABASE_URL
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** `https://ycqlnxstxhrqxolsbzos.supabase.co`
- **Environment:** Production, Preview, Development (hepsini seçin)

#### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcWxueHN0eGhycXhvbHNiem9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMTk3MjIsImV4cCI6MjA3ODU5NTcyMn0.rOMTp5dY9tp055JJfb5STIjzsTIA93PuXfAwbyBglKk`
- **Environment:** Production, Preview, Development (hepsini seçin)

#### 3. SUPABASE_SERVICE_ROLE_KEY
- **Name:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcWxueHN0eGhycXhvbHNiem9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzAxOTcyMiwiZXhwIjoyMDc4NTk1NzIyfQ.vLuykkzsqxn_zcD4GlV4Cs4pm30pngRVbuw1xTEyKd0`
- **Environment:** Production, Preview, Development (hepsini seçin)
- **⚠️ ÖNEMLİ:** Bu key hassas bilgidir, sadece server-side'da kullanılır

### 3. Deploy'u Yeniden Başlatın

1. Environment variable'ları ekledikten sonra **Deployments** sekmesine gidin
2. Son deployment'ın yanındaki **⋯** (üç nokta) menüsüne tıklayın
3. **Redeploy** seçeneğini seçin
4. Veya yeni bir commit push edin

## Doğrulama

Deploy tamamlandıktan sonra:
1. Newsletter abonelik formunu test edin
2. API endpoint'lerinin çalıştığını kontrol edin

## Sorun Giderme

### "Missing Supabase environment variables" hatası devam ediyor
- Environment variable'ların doğru isimlendirildiğinden emin olun (büyük/küçük harf duyarlı)
- Tüm environment'ları (Production, Preview, Development) seçtiğinizden emin olun
- Deploy'u yeniden başlatın

### Build başarılı ama runtime'da hata alıyorum
- Environment variable'ların doğru değerlere sahip olduğunu kontrol edin
- Supabase projenizin aktif olduğundan emin olun
