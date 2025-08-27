// Google Calendar API Service
// Bu servis gerçek Google Calendar entegrasyonu sağlar

const CALENDAR_ID = 'c_f619335b0ebdf8e9ad7cd3cd7be2c7d5cafd880b88f4d2e97dd46c4004909082@group.calendar.google.com';
const CALENDAR_PUBLIC_URL = 'https://calendar.google.com/calendar/embed?src=c_f619335b0ebdf8e9ad7cd3cd7be2c7d5cafd880b88f4d2e97dd46c4004909082%40group.calendar.google.com&ctz=Europe%2FBerlin';
const CALENDAR_ICAL_URL = 'https://calendar.google.com/calendar/ical/c_f619335b0ebdf8e9ad7cd3cd7be2c7d5cafd880b88f4d2e97dd46c4004909082%40group.calendar.google.com/public/basic.ics';

// Google Calendar API'ye randevu ekleme (Google Meet ile)
export const addAppointmentToGoogleCalendar = async (appointmentData) => {
  try {
    // Environment variable kontrol et
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
      console.log('Google Calendar API key bulunamadı. Manuel link oluşturuluyor...');
      return {
        success: false,
        message: 'Google Calendar API key bulunamadı',
        error: 'API key not found'
      };
    }

    // Google Calendar API endpoint
    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`;
    
    // Randevu verilerini hazırla
    const event = {
      summary: 'Website Meeting - Ecommezzo',
      description: `Website Meeting mit Ecommezzo Team\n\nTermin ID: ${appointmentData.appointmentId}\nKunde: ${appointmentData.customerName}\nEmail: ${appointmentData.customerEmail}\nTelefon: ${appointmentData.customerPhone}\nProjekt: ${appointmentData.projectType}`,
      start: {
        dateTime: appointmentData.startTime,
        timeZone: 'Europe/Berlin'
      },
      end: {
        dateTime: appointmentData.endTime,
        timeZone: 'Europe/Berlin'
      },
      location: 'Google Meet Video Call',
      attendees: [
        { email: appointmentData.customerEmail, name: appointmentData.customerName }
      ],
      // Google Meet video call ekle
      conferenceData: {
        createRequest: {
          requestId: appointmentData.appointmentId,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 gün önce
          { method: 'popup', minutes: 30 } // 30 dakika önce
        ]
      }
    };

    // API isteği gönder
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status}`);
    }

    const result = await response.json();
    
    // Google Meet link'ini al
    const meetLink = result.conferenceData?.entryPoints?.find(ep => ep.entryPointType === 'video')?.uri || '';
    
    return {
      success: true,
      message: 'Randevu başarıyla Google Calendar\'a eklendi',
      eventId: result.id,
      eventLink: result.htmlLink,
      meetLink: meetLink
    };

  } catch (error) {
    console.error('Google Calendar API error:', error);
    return {
      success: false,
      message: 'Google Calendar\'a eklenirken hata oluştu',
      error: error.message
    };
  }
};

// Mevcut randevuları kontrol et
export const checkExistingAppointments = async (startTime, endTime) => {
  try {
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
      console.log('Google Calendar API key bulunamadı.');
      return [];
    }

    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`;
    const params = new URLSearchParams({
      timeMin: startTime,
      timeMax: endTime,
      singleEvents: true,
      orderBy: 'startTime'
    });

    const response = await fetch(`${apiUrl}?${params}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status}`);
    }

    const result = await response.json();
    return result.items || [];

  } catch (error) {
    console.error('Google Calendar check error:', error);
    return [];
  }
};

// Randevu güncelleme
export const updateAppointment = async (eventId, appointmentData) => {
  try {
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
      console.log('Google Calendar API key bulunamadı.');
      return {
        success: false,
        message: 'Google Calendar API key bulunamadı',
        error: 'API key not found'
      };
    }

    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`;
    
    const event = {
      summary: 'Website Meeting - Ecommezzo',
      description: `Website Meeting mit Ecommezzo Team\n\nTermin ID: ${appointmentData.appointmentId}\nKunde: ${appointmentData.customerName}\nEmail: ${appointmentData.customerEmail}\nTelefon: ${appointmentData.customerPhone}\nProjekt: ${appointmentData.projectType}`,
      start: {
        dateTime: appointmentData.startTime,
        timeZone: 'Europe/Berlin'
      },
      end: {
        dateTime: appointmentData.endTime,
        timeZone: 'Europe/Berlin'
      },
      location: 'Google Meet Video Call',
      attendees: [
        { email: appointmentData.customerEmail, name: appointmentData.customerName }
      ]
    };

    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      message: 'Randevu başarıyla güncellendi',
      eventId: result.id,
      eventLink: result.htmlLink
    };

  } catch (error) {
    console.error('Google Calendar update error:', error);
    return {
      success: false,
      message: 'Randevu güncellenirken hata oluştu',
      error: error.message
    };
  }
};

// Randevu silme
export const deleteAppointment = async (eventId) => {
  try {
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
      console.log('Google Calendar API key bulunamadı.');
      return {
        success: false,
        message: 'Google Calendar API key bulunamadı',
        error: 'API key not found'
      };
    }

    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`;

    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status}`);
    }

    return {
      success: true,
      message: 'Randevu başarıyla silindi'
    };

  } catch (error) {
    console.error('Google Calendar delete error:', error);
    return {
      success: false,
      message: 'Randevu silinirken hata oluştu',
      error: error.message
    };
  }
};

// Google Meet link oluşturma (fallback)
export const generateMeetLink = (appointmentId) => {
  // Randevu ID'sinden Google Meet kodu oluştur
  const meetCode = appointmentId.replace(/[^A-Z0-9]/g, '').substring(0, 10);
  return `https://meet.google.com/${meetCode}`;
};

// Takvim bilgilerini döndür
export const getCalendarInfo = () => {
  return {
    calendarId: CALENDAR_ID,
    publicUrl: CALENDAR_PUBLIC_URL,
    icalUrl: CALENDAR_ICAL_URL,
    embedCode: `<iframe src="${CALENDAR_PUBLIC_URL}" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`
  };
};
