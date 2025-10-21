# Google SEO Kurulum Rehberi

Bu rehber, ecommezzo projesine Google SEO ayarlarının nasıl ekleneceğini ve Google hesabınızla nasıl bağlantı kuracağınızı açıklar.

## 🚀 Kurulum Adımları

### 1. Environment Variables Ayarlama

`.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GSC_VERIFICATION_CODE=your-verification-code-here

# Site URL
NEXT_PUBLIC_SITE_URL=https://ecommezzo.com
```

### 2. Google Analytics 4 Kurulumu

1. **Google Analytics hesabı oluşturun:**
   - [Google Analytics](https://analytics.google.com/) adresine gidin
   - "Start measuring" butonuna tıklayın
   - Hesap adı: "ecommezzo"
   - Property adı: "ecommezzo.com"
   - Reporting time zone: "Germany"

2. **Data Stream oluşturun:**
   - Web platformunu seçin
   - Website URL: `https://ecommezzo.com`
   - Stream adı: "ecommezzo.com"

3. **Measurement ID'yi alın:**
   - Stream oluşturduktan sonra "G-" ile başlayan ID'yi kopyalayın
   - Bu ID'yi `.env.local` dosyasındaki `NEXT_PUBLIC_GA_TRACKING_ID` değişkenine ekleyin

### 3. Google Search Console Kurulumu

1. **Google Search Console hesabı oluşturun:**
   - [Google Search Console](https://search.google.com/search-console/) adresine gidin
   - "Add property" butonuna tıklayın
   - "URL prefix" seçeneğini seçin
   - Website URL: `https://ecommezzo.com`

2. **Verification yöntemini seçin:**
   - "HTML tag" seçeneğini seçin
   - Meta tag içindeki `content` değerini kopyalayın
   - Bu değeri `.env.local` dosyasındaki `NEXT_PUBLIC_GSC_VERIFICATION_CODE` değişkenine ekleyin

3. **Sitemap gönderin:**
   - Sol menüden "Sitemaps" seçin
   - "Add a new sitemap" butonuna tıklayın
   - Sitemap URL: `sitemap.xml`
   - "Submit" butonuna tıklayın

### 4. Projeyi Çalıştırma

```bash
npm run dev
```

## 📊 Eklenen SEO Özellikleri

### ✅ Google Analytics 4
- Otomatik sayfa görüntüleme takibi
- Enhanced ecommerce tracking
- Form submission tracking
- Button click tracking
- Scroll depth tracking

### ✅ Google Search Console
- Site verification
- Sitemap otomatik gönderimi
- Core Web Vitals monitoring

### ✅ SEO Optimizasyonları
- Structured data (JSON-LD)
- Meta tags optimizasyonu
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Robots.txt optimizasyonu
- Sitemap.xml otomatik oluşturma

### ✅ Performance Optimizasyonları
- Image optimization (WebP, AVIF)
- CSS optimization
- Compression
- Caching headers
- Security headers

## 🔧 Kullanım

### Analytics Event Tracking

```javascript
import { event, trackFormSubmission, trackButtonClick } from '../lib/gtag';

// Form submission tracking
trackFormSubmission('contact-form');

// Button click tracking
trackButtonClick('cta-button');

// Custom event tracking
event({
  action: 'download',
  category: 'engagement',
  label: 'brochure-pdf',
  value: 1
});
```

### Structured Data

```javascript
import { generateStructuredData, generateServiceStructuredData } from '../lib/seo';

// Organization structured data
const orgData = generateStructuredData();

// Service structured data
const serviceData = generateServiceStructuredData({
  name: "E-Commerce Development",
  description: "Professional e-commerce solutions",
  type: "WebDevelopmentService"
});
```

## 📈 Monitoring ve Raporlama

### Google Analytics'te İzleyebileceğiniz Metrikler:
- Sayfa görüntülemeleri
- Kullanıcı davranışları
- Conversion oranları
- Traffic kaynakları
- Core Web Vitals

### Google Search Console'da İzleyebileceğiniz Metrikler:
- Arama performansı
- Indexing durumu
- Core Web Vitals
- Mobile usability
- Security issues

## 🚨 Önemli Notlar

1. **GDPR Uyumluluğu:** Google Analytics kullanımı için kullanıcı onayı alın
2. **Cookie Policy:** Cookie kullanımı hakkında bilgilendirme yapın
3. **Privacy Policy:** Veri işleme politikalarınızı güncelleyin
4. **Performance:** Analytics script'leri sayfa yükleme hızını etkileyebilir

## 🔍 Test Etme

1. **Google Analytics Test:**
   - Real-time reports bölümünden ziyaretçi verilerini kontrol edin
   - Events bölümünden custom event'leri kontrol edin

2. **Google Search Console Test:**
   - URL inspection tool ile sayfalarınızı test edin
   - Core Web Vitals raporlarını kontrol edin

3. **SEO Test:**
   - Google PageSpeed Insights ile performans testi yapın
   - Rich Results Test ile structured data'yı test edin

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- Google Analytics Help Center
- Google Search Console Help Center
- Next.js Documentation
- React Documentation
