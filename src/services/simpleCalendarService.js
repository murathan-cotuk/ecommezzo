// Google Calendar iCal feed konfigürasyonu
const ICAL_FEED_URL = 'https://calendar.google.com/calendar/ical/c_f619335b0ebdf8e9ad7cd3cd7be2c7d5cafd880b88f4d2e97dd46c4004909082%40group.calendar.google.com/private-f3864f7fe71e15e43fe54734c96dbbbe/basic.ics';

// Müsait zaman dilimlerini al
export const getAvailableSlots = async (startDate, endDate) => {
  try {
    const response = await fetch(ICAL_FEED_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch iCal feed');
    }
    
    const icalData = await response.text();
    const events = parseICalData(icalData);
    
    return processCalendarEvents(events, startDate, endDate);
  } catch (error) {
    console.error('Error fetching iCal data:', error);
    // Fallback: Simüle edilmiş müsait zaman dilimleri
    return generateFallbackSlots(startDate, endDate);
  }
};

// iCal verilerini parse et
const parseICalData = (icalData) => {
  const events = [];
  const lines = icalData.split('\n');
  let currentEvent = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT') {
      if (currentEvent) {
        events.push(currentEvent);
        currentEvent = null;
      }
    } else if (currentEvent && line.startsWith('DTSTART:')) {
      currentEvent.start = parseICalDate(line.substring(8));
    } else if (currentEvent && line.startsWith('DTEND:')) {
      currentEvent.end = parseICalDate(line.substring(6));
    } else if (currentEvent && line.startsWith('SUMMARY:')) {
      currentEvent.summary = line.substring(8);
    }
  }
  
  return events;
};

// iCal tarih formatını parse et
const parseICalDate = (dateString) => {
  // iCal formatı: 20231201T100000Z veya 20231201T100000
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(4, 6)) - 1; // JavaScript'te ay 0-11 arası
  const day = parseInt(dateString.substring(6, 8));
  const hour = parseInt(dateString.substring(9, 11));
  const minute = parseInt(dateString.substring(11, 13));
  const second = parseInt(dateString.substring(13, 15));
  
  return new Date(year, month, day, hour, minute, second);
};

// Takvim olaylarını işle ve müsait zaman dilimlerini hesapla
const processCalendarEvents = (events, startDate, endDate) => {
  const availableSlots = {};
  const timeSlots = generateTimeSlots();
  
  // Her gün için müsait zaman dilimlerini hesapla
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dateStr = date.toISOString().split('T')[0];
    
    // Hafta sonu kontrolü
    if (isWeekend(date)) {
      availableSlots[dateStr] = [];
      continue;
    }
    
    // O günün olaylarını filtrele
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === date.toDateString();
    });
    
    // Müsait zaman dilimlerini hesapla
    const availableTimes = calculateAvailableTimes(timeSlots, dayEvents);
    availableSlots[dateStr] = availableTimes;
  }
  
  return availableSlots;
};

// Zaman dilimlerini oluştur
const generateTimeSlots = () => {
  return [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];
};

// Müsait zaman dilimlerini hesapla
const calculateAvailableTimes = (timeSlots, events) => {
  const availableTimes = [...timeSlots];
  
  events.forEach(event => {
    const startTime = new Date(event.start);
    const endTime = new Date(event.end);
    
    // Çakışan zaman dilimlerini kaldır
    for (let i = availableTimes.length - 1; i >= 0; i--) {
      const slotTime = new Date();
      const [hours, minutes] = availableTimes[i].split(':');
      slotTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      
      if (slotTime >= startTime && slotTime < endTime) {
        availableTimes.splice(i, 1);
      }
    }
  });
  
  return availableTimes;
};

// Hafta sonu kontrolü
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Fallback: Simüle edilmiş müsait zaman dilimleri
const generateFallbackSlots = (startDate, endDate) => {
  const availableSlots = {};
  const timeSlots = generateTimeSlots();
  
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dateStr = date.toISOString().split('T')[0];
    
    if (!isWeekend(date)) {
      // %70 müsaitlik oranı
      availableSlots[dateStr] = timeSlots.filter(() => Math.random() > 0.3);
    } else {
      availableSlots[dateStr] = [];
    }
  }
  
  return availableSlots;
};

// Randevu ekle (manuel takvim girişi için hazırla)
export const addAppointment = async (appointmentData) => {
  try {
    // Bu durumda sadece email gönderiyoruz
    // Google Calendar'a otomatik ekleme için kullanıcının manuel olarak eklemesi gerekiyor
    
    const appointmentInfo = {
      customerName: appointmentData.customerName,
      customerEmail: appointmentData.customerEmail,
      customerPhone: appointmentData.customerPhone,
      projectType: appointmentData.projectType,
      startTime: appointmentData.startTime,
      endTime: appointmentData.endTime,
      formattedDate: new Date(appointmentData.startTime).toLocaleDateString('de-DE'),
      formattedTime: new Date(appointmentData.startTime).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
    };
    
    return {
      success: true,
      message: 'Appointment information prepared for manual calendar entry',
      appointmentInfo,
      note: 'Please manually add this appointment to your Google Calendar'
    };
    
  } catch (error) {
    console.error('Error preparing appointment:', error);
    return {
      success: false,
      message: 'Failed to prepare appointment information',
      error: error.message
    };
  }
};
