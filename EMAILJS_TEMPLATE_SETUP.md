# EmailJS Template Setup Guide

## 1. Admin Email Template Oluşturma (template_6xi7a9h)

### 1. EmailJS Dashboard'a Gidin
- [EmailJS Dashboard](https://dashboard.emailjs.com/) adresine gidin
- Hesabınıza giriş yapın

### 2. Template'i Düzenleyin
- "Email Templates" sekmesine tıklayın
- `template_6xi7a9h` ID'li template'i bulun ve düzenleyin

### 3. Template Ayarları
- **Template ID:** `template_6xi7a9h`
- **Template Name:** "Admin Contact Form Email"
- **Subject:** "Neue Kontaktanfrage - Ecommezzo"

### 4. HTML Template İçeriği

`src/components/emailtemplate.html` dosyasındaki **YENİ** HTML içeriğini kopyalayıp EmailJS template editörüne yapıştırın.

### 5. Template Variables (Değişkenler)

Bu template aşağıdaki değişkenleri kullanır:

- `{{from_name}}` - Müşteri adı
- `{{from_email}}` - Müşteri email adresi
- `{{phone}}` - Telefon numarası
- `{{company}}` - Şirket adı
- `{{message}}` - Ek mesaj
- `{{project_type}}` - Seçilen proje türleri
- `{{budget}}` - Seçilen bütçe aralığı
- `{{timeline}}` - Seçilen zaman planı
- `{{appointment_date}}` - Randevu tarihi (varsa)
- `{{appointment_time}}` - Randevu saati (varsa)
- `{{appointment_id}}` - Randevu ID'si (varsa)
- `{{calendar_link}}` - Google Calendar ekleme linki (varsa)
- `{{submission_date}}` - Form gönderim tarihi
- `{{submission_time}}` - Form gönderim saati

### 6. Template'i Kaydedin
- "Save Template" butonuna tıklayın
- Template ID'nin `template_6xi7a9h` olduğundan emin olun

### 7. Test Edin
- Template'i test etmek için "Test" butonunu kullanın
- Tüm değişkenlerin doğru çalıştığından emin olun

## 2. Müşteri Özet Email Template Oluşturma (template_dsgl3nu)

### 1. EmailJS Dashboard'a Gidin
- [EmailJS Dashboard](https://dashboard.emailjs.com/) adresine gidin
- Hesabınıza giriş yapın

### 2. Template'i Düzenleyin
- "Email Templates" sekmesine tıklayın
- `template_dsgl3nu` ID'li template'i bulun ve düzenleyin

### 3. Template Ayarları
- **Template ID:** `template_dsgl3nu`
- **Template Name:** "Customer Summary Email"
- **Subject:** "Ihre Anfrage bei Ecommezzo - Bestätigung"

### 4. HTML Template İçeriği

`src/components/customerEmailTemplate.html` dosyasındaki **YENİ** HTML içeriğini kopyalayıp EmailJS template editörüne yapıştırın.

### 5. Template Variables (Değişkenler)

Bu template aşağıdaki değişkenleri kullanır:

- `{{to_email}}` - Müşteri email adresi (ÖNEMLİ!)
- `{{customer_name}}` - Müşteri adı
- `{{project_type}}` - Seçilen proje türleri
- `{{budget}}` - Seçilen bütçe aralığı
- `{{timeline}}` - Seçilen zaman planı
- `{{message}}` - Müşterinin yazdığı mesaj
- `{{appointment_date}}` - Randevu tarihi (varsa)
- `{{appointment_time}}` - Randevu saati (varsa)
- `{{appointment_id}}` - Randevu ID'si (varsa)
- `{{calendar_link}}` - Google Calendar ekleme linki (varsa)
- `{{submission_date}}` - Form gönderim tarihi
- `{{submission_time}}` - Form gönderim saati

### 6. Template'i Kaydedin
- "Save Template" butonuna tıklayın
- Template ID'nin `template_dsgl3nu` olduğundan emin olun

### 7. Test Edin
- Template'i test etmek için "Test" butonunu kullanın
- Tüm değişkenlerin doğru çalıştığından emin olun

## Önemli Notlar

1. **Admin Template ID:** `template_6xi7a9h` olmalı
2. **Customer Template ID:** `template_dsgl3nu` olmalı
3. **HTML Formatı:** Template HTML formatında olmalı
4. **Değişkenler:** Tüm değişkenler `{{variable_name}}` formatında olmalı
5. **Responsive Design:** Email mobil cihazlarda da düzgün görünmeli
6. **Müşteri Email Adresi:** `{{to_email}}` parametresi EmailJS template'inde doğru ayarlanmalı

### Müşteri Template'inde Email Adresi Ayarlama

EmailJS Dashboard'da müşteri template'ini düzenlerken:

1. **"To Email"** alanına `{{to_email}}` yazın
2. **"From Name"** alanına `{{from_name}}` yazın  
3. **"From Email"** alanına `{{from_email}}` yazın

**ÖNEMLİ:** EmailJS template'inde "To Email" alanı boş bırakılmamalı, mutlaka `{{to_email}}` yazılmalıdır.

### EmailJS Template Test Etme

Template'leri test ederken:
1. **Test parametreleri** ekleyin:
   - `to_email`: test@example.com
   - `customer_name`: Test User
   - `project_type`: Online Shop
   - `budget`: 5.000€ - 10.000€
   - `timeline`: In 1-3 Monaten
   - `message`: Test message
   - `appointment_date`: 15.12.2024
   - `appointment_time`: 14:00
   - `appointment_id`: TERM-TEST123
   - `calendar_link`: https://calendar.google.com/...

2. **Test email'i** gönderin ve doğru adrese gittiğini kontrol edin

### Yapılan Değişiklikler

✅ **JavaScript kaldırıldı:** EmailJS template'lerinde JavaScript çalışmadığı için kaldırıldı
✅ **EmailJS Template Syntax:** `{% if %}` ve `{% endif %}` kullanılarak conditional rendering yapıldı
✅ **Calendar Butonları:** `<a>` tag'leri ile çalışan linkler haline getirildi
✅ **Mesaj Bölümü:** Müşteri template'ine eklendi
✅ **Responsive Design:** Tüm email'ler mobil uyumlu

Bu template'ler sayesinde:
- **Admin:** Tüm form bilgilerini ve randevu detaylarını alacak
- **Müşteri:** Form özetini, randevu bilgilerini ve Google Calendar linkini alacak
- **Profesyonel:** Her iki email de modern ve responsive tasarıma sahip
