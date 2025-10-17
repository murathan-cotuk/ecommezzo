'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Calendar({ onTimeSelect, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [availableSlots, setAvailableSlots] = useState({});
  const [isClient, setIsClient] = useState(false);

  // Takvim için gerekli fonksiyonlar
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Önceki ayın günleri
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Bu ayın günleri
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sonntag (0) ve Samstag (6)
  };

  // Tüm zaman dilimleri
  const allTimeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00'
  ];

  // Client-side kontrolü ve currentMonth'u initialize et
  useEffect(() => {
    setIsClient(true);
    setCurrentMonth(new Date());
  }, []);

  // Müsait zaman dilimlerini al
  useEffect(() => {
    if (!isClient) return;
    
    const fetchAvailableSlots = async () => {
      try {
        const { getAvailableSlots } = await import('../services/simpleCalendarService');
        const today = new Date();
        const endDate = new Date();
        endDate.setDate(today.getDate() + 30);
        
        const slots = await getAvailableSlots(today, endDate);
        setAvailableSlots(slots);
      } catch (error) {
        console.warn('Calendar service unavailable, using fallback slots:', error.message);
        // Fallback: Simüle edilmiş müsait zaman dilimleri
        generateFallbackSlots();
      }
    };

    const generateFallbackSlots = () => {
      try {
        const slots = {};
        const today = new Date();
        
        // Gelecek 30 gün için müsait zaman dilimleri
        for (let i = 0; i < 30; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          
          if (!isPast(date)) {
            const dateStr = date.toISOString().split('T')[0];
            
            // Çalışma saatlerini belirle
            const dayNumber = date.getDay();
            
            // Manuel kontrol - hangi günler hafta sonu
            const workingHours = (dayNumber === 0 || dayNumber === 6) 
              ? ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'] // Hafta sonu
              : ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']; // Hafta içi
            
            const timeSlotStatus = {};
            workingHours.forEach(timeSlot => {
              // Tüm çalışma saatleri müsait olarak işaretle
              timeSlotStatus[timeSlot] = 'available';
            });
            
            slots[dateStr] = timeSlotStatus;
          }
        }
        
        setAvailableSlots(slots);
      } catch (fallbackError) {
        console.error('Error generating fallback slots:', fallbackError);
        // En basit fallback - sadece bugün için birkaç saat
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        setAvailableSlots({
          [todayStr]: {
            '18:00': 'available',
            '18:30': 'available',
            '19:00': 'available',
            '19:30': 'available',
            '20:00': 'available'
          }
        });
      }
    };

    fetchAvailableSlots();
  }, [isClient]);

  const handleDateSelect = (date) => {
    if (!isPast(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      // Randevu başlangıç ve bitiş zamanını hesapla
      const startTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      startTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      
      const endTime = new Date(startTime);
      endTime.setMinutes(endTime.getMinutes() + 30); // 30 dakikalık randevu
      
      onTimeSelect({
        date: selectedDate,
        time: selectedTime,
        formattedDate: formatDate(selectedDate),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString()
      });
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Client-side render kontrolü
  if (!isClient || !currentMonth) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden my-4 md:my-0">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Kalender wird geladen...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] md:max-h-[90vh] overflow-hidden my-4 md:my-0"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 md:p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold">Termin Buchen</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-cyan-100 mt-1 md:mt-2 text-sm md:text-base">Wählen Sie ein Datum und eine Uhrzeit</p>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[400px] h-[500px] md:h-[600px]">
          {/* Takvim Bölümü */}
          <div className="flex-1 p-4 md:p-6 border-r border-gray-200">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 capitalize">{monthName}</h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Hafta başlıkları */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-xs md:text-sm font-medium text-gray-600 py-1 md:py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Takvim günleri */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={index} className="h-8 md:h-12" />;
                }

                const dateStr = day.toISOString().split('T')[0];
                const daySlots = availableSlots[dateStr];
                const hasAvailableSlots = daySlots && Object.values(daySlots).some(status => status === 'available');
                const isSelected = selectedDate && selectedDate.toDateString() === day.toDateString();
                const isPastDate = isPast(day);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPastDate}
                    className={`h-8 md:h-12 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-cyan-500 text-white'
                        : isPastDate
                        ? 'text-gray-300 cursor-not-allowed'
                        : hasAvailableSlots
                        ? 'hover:bg-cyan-100 text-gray-800'
                        : 'text-gray-400 cursor-not-allowed'
                    } ${isToday(day) ? 'ring-2 ring-cyan-300' : ''}`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zaman Dilimleri Bölümü */}
          <div className="flex-1 p-4 md:p-6">
            {selectedDate ? (
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
                  für {formatDate(selectedDate)}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 md:gap-3 max-h-48 md:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {Object.entries(availableSlots[selectedDate.toISOString().split('T')[0]] || {})
                    .filter(([time, status]) => status === 'available')
                    .map(([time, status]) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-2 md:p-3 rounded-lg border-2 transition-all duration-200 text-sm ${
                          selectedTime === time
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                            : 'border-gray-200 hover:border-cyan-300 hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                </div>

                {selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="text-xs md:text-sm text-gray-600 mb-2">Ausgewählter Termin:</p>
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      {formatDate(selectedDate)} um {selectedTime}
                    </p>
                    
                    <button
                      onClick={handleConfirm}
                      className="w-full mt-3 md:mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Termin Bestätigen
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm md:text-lg">Bitte wählen Sie ein Datum aus</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
