# Vercel Environment Variables Kurulumu

## 🚨 Önemli: Vercel Dashboard'dan Environment Variables Ayarlayın

`vercel.json` dosyasındaki secret referansları kaldırıldı. Environment variable'ları artık Vercel Dashboard'dan doğrudan ayarlamanız gerekiyor.

## 📋 Adım Adım Kurulum

### 1. Vercel Dashboard'a Gidin

1. [Vercel Dashboard](https://vercel.com/dashboard) sayfasına gidin
2. Projenizi seçin
3. **Settings** sekmesine gidin
4. **Environment Variables** bölümüne gidin

### 2. Gerekli Environment Variables'ları Ekleyin

Aşağıdaki environment variable'ları ekleyin:

#### Production Environment Variables

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/deepvision
MONGODB_DB=deepvision
SHOPIFY_API_KEY=your-shopify-api-key
SHOPIFY_API_SECRET=your-shopify-api-secret
SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
SHOPIFY_WEBHOOK_SECRET=your-shopify-webhook-secret
NEXTAUTH_SECRET=your-random-secret-key-min-32-chars
NEXTAUTH_URL=https://your-domain.vercel.app
```

#### Build-time Environment Variables (Public)

```
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SHOPIFY_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id (opsiyonel)
```

### 3. Environment Variable Eklemek İçin

1. Vercel Dashboard > Project > Settings > Environment Variables
2. **Add New** butonuna tıklayın
3. **Name** alanına variable adını yazın (örn: `MONGODB_URI`)
4. **Value** alanına değeri yazın
5. **Environment** seçeneklerini işaretleyin:
   - ✅ Production
   - ✅ Preview
   - ✅ Development (isteğe bağlı)
6. **Save** butonuna tıklayın

### 4. Redeploy

Environment variable'ları ekledikten sonra:

1. **Deployments** sekmesine gidin
2. En son deployment'ı bulun
3. **⋮** (üç nokta) menüsünden **Redeploy** seçeneğini seçin

VEYA

```bash
vercel --prod
```

## 🔒 Güvenlik Notları

- **Asla** environment variable değerlerini GitHub'a commit etmeyin
- `.env.local` dosyasını `.gitignore`'a eklediğinizden emin olun
- Production değerlerini sadece Production environment'a ekleyin
- MongoDB URI'de kullanıcı adı ve şifre varsa bunlar hassas bilgilerdir

## ✅ Kontrol Listesi

- [ ] MongoDB URI eklendi
- [ ] MongoDB DB name eklendi
- [ ] Shopify API credentials eklendi
- [ ] NextAuth secret eklendi (min 32 karakter)
- [ ] Public URL'ler eklendi (NEXT_PUBLIC_*)
- [ ] Proje redeploy edildi

## 🐛 Hata Çözümü

Eğer hala `MONGODB_URI references Secret "mongodb_uri", which does not exist` hatası alıyorsanız:

1. Vercel Dashboard'dan environment variable'ları kontrol edin
2. Projeyi yeniden deploy edin
3. Eğer hala sorun varsa, `vercel.json` dosyasını kontrol edin (secret referansları olmamalı)

## 📚 Daha Fazla Bilgi

- [Vercel Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

