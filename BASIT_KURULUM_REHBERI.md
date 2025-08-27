# 🎯 Basit Kurulum Rehberi - Google Cloud Olmadan

## ✅ Sistem Nasıl Çalışıyor

### **Randevu Alındığında:**
1. ✅ **Randevu ID** oluşturulur
2. ✅ **Google Calendar link** oluşturulur (Google Meet ile)
3. ✅ **Google Meet link** oluşturulur
4. ✅ **Size email** gönderilir
5. ✅ **Müşteriye email** gönderilir

### **Email'lerde:**
- **Size gelen email:** Google Calendar link'i + Google Meet link'i
- **Müşteriye giden email:** Google Calendar link'i + Google Meet link'i

## 🔧 Yapmanız Gerekenler

### **1. EmailJS Template'lerini Güncelleyin**

1. **EmailJS Dashboard'a gidin:** https://dashboard.emailjs.com/

2. **Admin Template (`template_6xi7a9h`):**
   - Template'i düzenleyin
   - `src/components/emailtemplate.html` dosyasındaki **YENİ** HTML'i kopyalayıp yapıştırın
   - Kaydedin

3. **Müşteri Template (`template_dsgl3nu`):**
   - Template'i düzenleyin
   - `src/components/customerEmailTemplate.html` dosyasındaki **YENİ** HTML'i kopyalayıp yapıştırın
   - **"To Email"** alanına `{{to_email}}` yazdığınızdan emin olun
   - Kaydedin

### **2. Test Edin**

1. **Formu test edin:**
   - `/termin-buchen` sayfasına gidin
   - Randevu alın
   - Email'leri kontrol edin

2. **Link'leri test edin:**
   - Google Calendar link'ine tıklayın
   - Google Meet link'ine tıklayın

## 🚀 Sistem Özellikleri

### **Google Calendar Link:**
- Randevu bilgileri otomatik doldurulur
- Google Meet video call otomatik oluşturulur
- Kullanıcı "Save" butonuna tıklayarak takvime ekler

### **Google Meet Link:**
- Randevu ID'sinden oluşturulur
- Doğrudan video call'a bağlanır
- Her randevu için benzersiz kod

### **Email'ler:**
- Modern ve responsive tasarım
- Tüm randevu bilgileri dahil
- Çalışan link'ler

## 📞 Sorun Giderme

### **Email Gönderilmiyor:**
- EmailJS template'lerinin güncellendiğinden emin olun
- "To Email" alanının `{{to_email}}` olduğunu kontrol edin

### **Link'ler Çalışmıyor:**
- Google Calendar link'ini test edin
- Google Meet link'ini test edin

### **Template Hatası:**
- HTML kodunu doğru kopyaladığınızdan emin olun
- EmailJS dashboard'da kaydettiğinizi kontrol edin

## ✅ Avantajlar

### **Google Cloud Olmadan:**
- ✅ Kurulum çok basit
- ✅ API key gerektirmez
- ✅ Hızlı çalışır
- ✅ Güvenli

### **Özellikler:**
- ✅ Google Meet video call
- ✅ Google Calendar entegrasyonu
- ✅ Modern email tasarımı
- ✅ Responsive tasarım
- ✅ Otomatik randevu ID

## 🎉 Sistem Hazır!

**Artık sadece EmailJS template'lerini güncellemeniz yeterli!**

1. EmailJS dashboard'a gidin
2. Template'leri güncelleyin
3. Test edin

**Sistem tamamen çalışır durumda!** 🚀
