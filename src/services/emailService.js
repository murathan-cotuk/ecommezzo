// EmailJS konfigürasyonu
export const emailConfig = {
  serviceId: 'service_798utw5',
  templateId: 'template_6xi7a9h',
  publicKey: 'q1s-2Ea1o9hZ79Jln'
};

// Email gönderme fonksiyonu
export const sendEmail = async (formData, appointmentData = null) => {
  try {
    // EmailJS'i dinamik olarak import et
    const emailjs = await import('@emailjs/browser');
    
    // EmailJS'i initialize et
    emailjs.default.init(emailConfig.publicKey);

    // Randevu ID oluştur
    const generateAppointmentId = () => {
      const timestamp = Date.now().toString(36);
      const random = Math.random().toString(36).substr(2, 5);
      return `TERM-${timestamp}-${random}`.toUpperCase();
    };

    const appointmentId = appointmentData ? generateAppointmentId() : null;

    // Google Calendar link oluştur (Google Meet ile)
    const generateCalendarLink = (appointmentData, appointmentId, projectType) => {
      if (!appointmentData) return '';
      
      const startTime = new Date(appointmentData.startTime);
      const endTime = new Date(appointmentData.endTime);
      
      const formatDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
      };
      
      const title = encodeURIComponent('Meeting - Ecommezzo');
      const start = formatDate(startTime);
      const end = formatDate(endTime);
      const details = encodeURIComponent(`Website Meeting mit Ecommezzo Team\n\nTermin ID: ${appointmentId}\n\nProjekt: ${projectType}\n\nGoogle Meet Video Call wird automatisch generiert.`);
      const location = encodeURIComponent('Google Meet Video Call');
      
      // Google Meet video call ile birlikte calendar link
      // Google Meet otomatik olarak oluşturulacak
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&add=true&sf=true&output=xml&crm=AVAILABLE&conference=hangoutsMeet&popup=true`;
    };

    // Google Meet link oluştur - Size özel
    const generateAdminMeetLink = (appointmentId) => {
      // Randevu ID'sinden Google Meet kodu oluştur
      const meetCode = appointmentId.replace(/[^A-Z0-9]/g, '').substring(0, 10);
      return `https://meet.google.com/${meetCode}-admin`;
    };

    // Google Meet link oluştur - Müşteriye özel
    const generateCustomerMeetLink = (appointmentId) => {
      // Randevu ID'sinden Google Meet kodu oluştur
      const meetCode = appointmentId.replace(/[^A-Z0-9]/g, '').substring(0, 10);
      return `https://meet.google.com/${meetCode}-customer`;
    };

    // Google Meet link'lerini oluştur
    const adminMeetLink = appointmentData ? generateAdminMeetLink(appointmentId) : '';
    const customerMeetLink = appointmentData ? generateCustomerMeetLink(appointmentId) : '';

    // Spam koruması için ek bilgiler
    const spamProtection = {
      messageId: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      senderDomain: 'ecommezzo.com',
      priority: 'normal'
    };

    // Size gönderilecek email template parametreleri
    const adminTemplateParams = {
      to_email: 'service@ecommezzo.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Nicht angegeben',
      company: formData.company || 'Nicht angegeben',
      message: formData.message || 'Keine zusätzliche Nachricht',
      
      // Form cevapları
      project_type: formData.projectType.join(', '),
      budget: formData.budget.join(', '),
      timeline: formData.timeline.join(', '),
      
      // Termin bilgileri (eğer varsa)
      appointment_date: appointmentData ? appointmentData.formattedDate : 'Kein Termin gewünscht',
      appointment_time: appointmentData ? appointmentData.time : 'Kein Termin gewünscht',
      appointment_id: appointmentId || 'N/A',
      
      // Calendar bilgileri - Size özel link'ler
      calendar_link: appointmentData ? generateCalendarLink(appointmentData, appointmentId, formData.projectType.join(', ')) : '',
      meet_link: adminMeetLink, // Size özel Meet link
      
      // Form türü
      form_type: appointmentData ? 'Terminbuchung' : 'Kontaktanfrage',
      
      // Tarih
      submission_date: new Date().toLocaleDateString('de-DE'),
      submission_time: new Date().toLocaleTimeString('de-DE'),
      
      // Spam koruması
      message_id: spamProtection.messageId,
      timestamp: spamProtection.timestamp
    };

    // Müşteriye gönderilecek özet email template parametreleri
    const customerTemplateParams = {
      to_email: formData.email,
      from_name: 'Ecommezzo Team',
      from_email: 'service@ecommezzo.com',
      customer_name: formData.name,
      
      // Form özeti
      project_type: formData.projectType.join(', '),
      budget: formData.budget.join(', '),
      timeline: formData.timeline.join(', '),
      message: formData.message || 'Keine zusätzliche Nachricht',
      
      // Termin bilgileri (eğer varsa)
      appointment_date: appointmentData ? appointmentData.formattedDate : 'Kein Termin gewünscht',
      appointment_time: appointmentData ? appointmentData.time : 'Kein Termin gewünscht',
      appointment_id: appointmentId || 'N/A',
      
      // Randevu takvime eklenebilir link (eğer randevu varsa) - Müşteri için basit link
      calendar_link: appointmentData ? generateCalendarLink(appointmentData, appointmentId, formData.projectType.join(', ')) : '',
      meet_link: customerMeetLink, // Müşteriye özel Meet link
      
      // Form türü
      form_type: appointmentData ? 'Terminbuchung' : 'Kontaktanfrage',
      
      // Tarih
      submission_date: new Date().toLocaleDateString('de-DE'),
      submission_time: new Date().toLocaleTimeString('de-DE'),
      
      // Spam koruması
      message_id: spamProtection.messageId,
      timestamp: spamProtection.timestamp
    };

    // Size email gönder
    const adminResponse = await emailjs.default.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      adminTemplateParams
    );

    // Müşteriye özet email gönder
    const customerResponse = await emailjs.default.send(
      emailConfig.serviceId,
      'template_dsgl3nu', // Müşteri özet template ID'si
      customerTemplateParams
    );

    return {
      success: true,
      message: 'Emails erfolgreich gesendet!',
      adminResponse,
      customerResponse,
      appointmentId,
      adminMeetLink,
      customerMeetLink,
      spamProtection
    };

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Fehler beim Senden der Emails. Bitte versuchen Sie es erneut.',
      error: error.message
    };
  }
};

// Test email gönderme fonksiyonu
export const sendTestEmail = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+49 123 456789',
    company: 'Test Company',
    message: 'Dies ist eine Test-Nachricht',
    projectType: ['onlineshop'],
    budget: ['5k-10k'],
    timeline: ['1-3months'],
    experience: ['some']
  };

  return await sendEmail(testData);
};
