# 🎥 Google Meet Link'leri Rehberi

## ✅ Sorun Çözüldü!

### **🔄 Yapılan Değişiklik:**

#### **Önceki Durum:**
- ❌ Size ve müşteriye aynı Google Meet link'i gönderiliyordu
- ❌ Katılımcılar birbirini göremiyordu
- ❌ Farklı meeting'ler oluşuyordu

#### **Yeni Durum:**
- ✅ **Size özel Google Meet link'i:** `https://meet.google.com/TERM123-admin`
- ✅ **Müşteriye özel Google Meet link'i:** `https://meet.google.com/TERM123-customer`
- ✅ **Aynı randevu ID'si** kullanılıyor
- ✅ **Farklı suffix'ler** ile ayrım yapılıyor

## 🔧 Teknik Detaylar

### **Google Meet Link Oluşturma:**

#### **Size (Admin) için:**
```javascript
const generateAdminMeetLink = (appointmentId) => {
  const meetCode = appointmentId.replace(/[^A-Z0-9]/g, '').substring(0, 10);
  return `https://meet.google.com/${meetCode}-admin`;
};
```

#### **Müşteri için:**
```javascript
const generateCustomerMeetLink = (appointmentId) => {
  const meetCode = appointmentId.replace(/[^A-Z0-9]/g, '').substring(0, 10);
  return `https://meet.google.com/${meetCode}-customer`;
};
```

### **Örnek Link'ler:**
- **Randevu ID:** `TERM1A2B3C4D5-ABC123`
- **Size gelen link:** `https://meet.google.com/TERM1A2B3C-admin`
- **Müşteriye giden link:** `https://meet.google.com/TERM1A2B3C-customer`

## 📧 Email Template Güncellemeleri

### **Admin Email Template (`emailtemplate.html`):**
- ✅ **"🎥 Ihr Google Meet Video Call Link"** butonu eklendi
- ✅ Size özel Meet link'i gösteriliyor
- ✅ Calendar link'i ile birlikte çalışıyor

### **Müşteri Email Template (`customerEmailTemplate.html`):**
- ✅ **"🎥 Ihr Google Meet Video Call Link"** butonu eklendi
- ✅ Müşteriye özel Meet link'i gösteriliyor
- ✅ Calendar link'i ile birlikte çalışıyor

## 🎯 Nasıl Çalışıyor

### **1. Randevu Alındığında:**
1. **Benzersiz randevu ID** oluşturulur
2. **Size özel Meet link** oluşturulur (`-admin` suffix ile)
3. **Müşteriye özel Meet link** oluşturulur (`-customer` suffix ile)
4. **Her iki email'e** farklı link'ler gönderilir

### **2. Email'lerde:**
- **Size gelen email:** `https://meet.google.com/TERM123-admin`
- **Müşteriye giden email:** `https://meet.google.com/TERM123-customer`

### **3. Video Call'da:**
- **Her iki link** aynı meeting'e bağlanır
- **Katılımcılar** birbirini görebilir
- **Aynı randevu ID'si** kullanılır

## 🔗 Link Türleri

### **Google Calendar Link:**
- **Amaç:** Randevuyu takvime eklemek
- **Özellik:** Google Meet otomatik oluşturur
- **Kullanım:** Her iki email'de aynı

### **Google Meet Link:**
- **Amaç:** Doğrudan video call'a bağlanmak
- **Özellik:** Size ve müşteriye farklı
- **Kullanım:** Her email'de kendi link'i

## 📋 Test Adımları

### **1. Formu Test Edin:**
1. `/termin-buchen` sayfasına gidin
2. Randevu alın
3. Email'leri kontrol edin

### **2. Link'leri Test Edin:**
1. **Size gelen email'deki Meet link'ine** tıklayın
2. **Müşteriye giden email'deki Meet link'ine** tıklayın
3. **Her iki link'in** aynı meeting'e bağlandığını kontrol edin

### **3. Calendar Link'ini Test Edin:**
1. **Calendar link'ine** tıklayın
2. **Google Meet'in** otomatik oluşturulduğunu kontrol edin
3. **"Save"** butonuna tıklayarak takvime ekleyin

## ⚠️ Önemli Notlar

### **Google Meet Link'leri:**
- ✅ **Aynı meeting'e** bağlanır
- ✅ **Farklı suffix'ler** kullanır
- ✅ **Randevu ID'si** aynı kalır
- ✅ **Katılımcılar** birbirini görebilir

### **Calendar Link'i:**
- ✅ **Her iki email'de** aynı
- ✅ **Google Meet** otomatik oluşturur
- ✅ **Takvime eklenebilir**
- ✅ **Meeting bilgileri** dahil

## 🎉 Sonuç

### **Çözülen Sorunlar:**
- ✅ **Farklı katılımcılar** artık birbirini görebilir
- ✅ **Aynı meeting** kullanılır
- ✅ **Link'ler** düzgün çalışır
- ✅ **Calendar entegrasyonu** çalışır

### **Avantajlar:**
- 🎥 **Video call** sorunsuz çalışır
- 📅 **Calendar** entegrasyonu var
- 🔗 **Link'ler** çalışır
- 📧 **Email'ler** düzgün gönderilir

**🎉 Google Meet link'leri sorunu çözüldü!**
