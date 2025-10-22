'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from './Calendar';
import { sendEmail, subscribeToNewsletter } from '../services/emailService';
import { useRouter } from 'next/navigation';

export default function KontaktForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Sorular - çoklu seçim için array
    projectType: [],
    budget: [],
    timeline: [],
    experience: [],
    
    // İletişim bilgileri
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    
    // Onaylar
    privacyPolicy: false,
    wantAppointment: false,
    newsletterSubscription: false
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Teşekkür sayfasında 5 saniye sonra ana sayfaya yönlendirme
  useEffect(() => {
    if (currentStep === questions.length + 1) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCountdown(5);
    }
  }, [currentStep, router]);

  const questions = [
    {
      id: 'project_type',
      question: "Bei was können wir Dich unterstützen?",
      options: [
        { value: 'onlineshop', label: 'Online Shop', icon: '🎨' },
        { value: 'marktplatz', label: 'Marktplatz Beratung', icon: '🛒' },
        { value: 'marketing', label: 'Marketing', icon: '📈' },
        { value: 'other', label: 'Sonstiges', icon: '💡' }
      ]
    },
    {
      id: 'budget',
      question: "Was ist Ihr Budget für dieses Projekt?",
      options: [
        { value: 'under-2k', label: 'Unter 2.000€', icon: '💰' },
        { value: '2k-5k', label: '2.000€ - 5.000€', icon: '💵' },
        { value: '5k-10k', label: '5.000€ - 10.000€', icon: '🏦' },
        { value: 'über-10k', label: 'Über 10.000€', icon: '💎' }
      ]
    },
    {
      id: 'timeline',
      question: "Wann soll das Projekt starten?",
      options: [
        { value: 'immediately', label: 'Sofort', icon: '⚡' },
        { value: '1-3months', label: 'In 1-3 Monaten', icon: '📅' },
        { value: '3-6months', label: 'In 3-6 Monaten', icon: '🗓️' },
        { value: 'flexible', label: 'Flexibel', icon: '🔄' }
      ]
    },
    
  ];

  const handleQuestionAnswer = (questionId, answer) => {
    const fieldNameMap = {
      'project_type': 'projectType',
      'budget': 'budget',
      'timeline': 'timeline',
      'experience': 'experience'
    };
    
    const fieldName = fieldNameMap[questionId];
    
    // Çoklu seçim için array kontrolü
    setFormData(prev => {
      const currentValue = prev[fieldName];
      let newValue;
      
      if (Array.isArray(currentValue)) {
        // Eğer zaten seçiliyse kaldır, değilse ekle
        newValue = currentValue.includes(answer)
          ? currentValue.filter(item => item !== answer)
          : [...currentValue, answer];
      } else {
        // İlk seçim - array oluştur
        newValue = [answer];
      }
      
      return { ...prev, [fieldName]: newValue };
    });

    // Otomatik olarak sonraki soruya geç (500ms sonra)
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(questions.length); // İletişim formuna geç
      }
    }, 500);
  };

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // İletişim formuna geç
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Seçilen cevapları metin olarak döndüren fonksiyon
  const getSelectedAnswersText = (fieldName) => {
    const selectedValues = formData[fieldName];
    if (!Array.isArray(selectedValues) || selectedValues.length === 0) return 'Nicht ausgewählt';
    
    const fieldLabels = {
      projectType: {
        'onlineshop': 'Online Shop',
        'marktplatz': 'Marktplatz Beratung',
        'marketing': 'Marketing',
        'other': 'Sonstiges'
      },
      budget: {
        'under-2k': 'Unter 2.000€',
        '2k-5k': '2.000€ - 5.000€',
        '5k-10k': '5.000€ - 10.000€',
        'over-10k': 'Über 10.000€'
      },
      timeline: {
        'immediately': 'Sofort',
        '1-3months': 'In 1-3 Monaten',
        '3-6months': 'In 3-6 Monaten',
        'flexible': 'Flexibel'
      },
    };
    
    return selectedValues.map(value => fieldLabels[fieldName][value]).join(', ');
  };

  const isOptionSelected = (questionId, optionValue) => {
    const fieldNameMap = {
      'project_type': 'projectType',
      'budget': 'budget',
      'timeline': 'timeline',
      'experience': 'experience'
    };
    
    const fieldName = fieldNameMap[questionId];
    const currentValue = formData[fieldName];
    return Array.isArray(currentValue) && currentValue.includes(optionValue);
  };

  const canProceedToNext = (questionId) => {
    const fieldNameMap = {
      'project_type': 'projectType',
      'budget': 'budget',
      'timeline': 'timeline',
      'experience': 'experience'
    };
    
    const fieldName = fieldNameMap[questionId];
    const currentValue = formData[fieldName];
    return Array.isArray(currentValue) && currentValue.length > 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyPolicy) {
      alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
      return;
    }

    if (formData.wantAppointment && !appointmentData) {
      setShowCalendar(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData, appointmentData);
      
      if (result.success) {
        // Bülten aboneliği kontrolü
        if (formData.newsletterSubscription) {
          try {
            await subscribeToNewsletter(formData.email, formData.name);
            console.log('Newsletter subscription successful');
          } catch (newsletterError) {
            console.warn('Newsletter subscription failed:', newsletterError);
            // Newsletter hatası ana formu etkilemesin
          }
        }
        
        setCurrentStep(questions.length + 1); // Teşekkür sayfasına geç
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendarTimeSelect = (appointment) => {
    setAppointmentData(appointment);
    setShowCalendar(false);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const progress = ((currentStep + 1) / (questions.length + 2)) * 100; // questions.length + iletişim + teşekkür

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 lg:p-12">
        
        {/* Progress Bar */}
        <div className="mb-4 md:mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Fortschritt</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Soru Adımları */}
            {currentStep < questions.length && (
              <div className="text-center space-y-4 md:space-y-8">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                  {questions[currentStep].question}
                </h2>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {questions[currentStep].options.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleQuestionAnswer(questions[currentStep].id, option.value)}
                      className={`group border-2 p-4 md:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        isOptionSelected(questions[currentStep].id, option.value)
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                          : 'border-gray-200 bg-white hover:border-cyan-500 hover:bg-cyan-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl md:text-4xl mb-2 md:mb-3">{option.icon}</div>
                      <div className={`font-semibold text-sm md:text-base ${
                        isOptionSelected(questions[currentStep].id, option.value)
                          ? 'text-cyan-700'
                          : 'text-gray-800 group-hover:text-cyan-700'
                      }`}>
                        {option.label}
                      </div>
                      {isOptionSelected(questions[currentStep].id, option.value) && (
                        <div className="absolute top-1 right-1 w-4 h-4 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs">
                          ✓
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-start items-center pt-4">
                  <button
                    onClick={handlePreviousStep}
                    className="px-4 py-2 text-sm border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    ← Zurück
                  </button>
                </div>
              </div>
            )}

            {/* İletişim Formu */}
            {currentStep === questions.length && (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 md:mb-8">
                  Ihre Kontaktdaten
                </h2>
                
                {/* Özet Bölümü */}
                <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-4 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Ihre Antworten - Übersicht</h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-600">Projektart:</p>
                      <p className="text-xs md:text-sm text-gray-800">{getSelectedAnswersText('projectType')}</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-600">Budget:</p>
                      <p className="text-xs md:text-sm text-gray-800">{getSelectedAnswersText('budget')}</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-600">Zeitplan:</p>
                      <p className="text-xs md:text-sm text-gray-800">{getSelectedAnswersText('timeline')}</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-600">Erfahrung:</p>
                      <p className="text-xs md:text-sm text-gray-800">{getSelectedAnswersText('experience')}</p>
                    </div>
                  </div>
                </div>
               
               <div className="grid grid-cols-2 gap-3 md:gap-6">
                 <div>
                   <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                     Name *
                   </label>
                   <input
                     type="text"
                     required
                     value={formData.name}
                     onChange={(e) => handleInputChange('name', e.target.value)}
                     className="w-full p-2 md:p-3 text-sm border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                     placeholder="Ihr vollständiger Name"
                   />
                 </div>
                 
                 <div>
                   <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                     E-Mail *
                   </label>
                   <input
                     type="email"
                     required
                     value={formData.email}
                     onChange={(e) => handleInputChange('email', e.target.value)}
                     className="w-full p-2 md:p-3 text-sm border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                     placeholder="ihre.email@beispiel.de"
                   />
                 </div>
                 
                 <div>
                   <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                     Telefon
                   </label>
                   <input
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => handleInputChange('phone', e.target.value)}
                     className="w-full p-2 md:p-3 text-sm border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                     placeholder="+49 123 456789"
                   />
                 </div>
                 
                 <div>
                   <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                     Unternehmen
                   </label>
                   <input
                     type="text"
                     value={formData.company}
                     onChange={(e) => handleInputChange('company', e.target.value)}
                     className="w-full p-2 md:p-3 text-sm border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                     placeholder="Ihr Unternehmen"
                   />
                 </div>
               </div>
               
               <div>
                 <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                   Zusätzliche Nachricht
                 </label>
                 <textarea
                   value={formData.message}
                   onChange={(e) => handleInputChange('message', e.target.value)}
                   rows={2}
                   className="w-full p-2 md:p-3 text-sm border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                   placeholder="Erzählen Sie uns mehr über Ihr Projekt..."
                 />
               </div>

               {/* Onay Kutuları */}
               <div className="space-y-3 pt-3 md:pt-4 border-t border-gray-200">
                 <label className="flex items-start space-x-2 md:space-x-3 cursor-pointer">
                   <input
                     type="checkbox"
                     checked={formData.privacyPolicy}
                     onChange={(e) => handleInputChange('privacyPolicy', e.target.checked)}
                     className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                   />
                   <span className="text-xs md:text-sm text-gray-700">
                     Ich akzeptiere die{' '}
                     <a href="/datenschutz" className="text-cyan-600 hover:underline">
                       Datenschutzerklärung
                     </a>{' '}
                     und stimme der Verarbeitung meiner Daten zu. *
                   </span>
                 </label>
                 
                 <label className="flex items-start space-x-2 md:space-x-3 cursor-pointer">
                   <input
                     type="checkbox"
                     checked={formData.wantAppointment}
                     onChange={(e) => handleInputChange('wantAppointment', e.target.checked)}
                     className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                   />
                   <span className="text-xs md:text-sm text-gray-700">
                     Möchten Sie einen Termin buchen?
                   </span>
                 </label>
                 
                 <label className="flex items-start space-x-2 md:space-x-3 cursor-pointer">
                   <input
                     type="checkbox"
                     checked={formData.newsletterSubscription}
                     onChange={(e) => handleInputChange('newsletterSubscription', e.target.checked)}
                     className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                   />
                   <span className="text-xs md:text-sm text-gray-700">
                     📧 Möchten Sie unseren Newsletter abonnieren? 
                     <span className="text-cyan-600 font-medium"> (Empfohlene E-Commerce Tipps & Updates)</span>
                   </span>
                 </label>
                 
                 {formData.wantAppointment && appointmentData && (
                   <div className="ml-6 mt-1 p-2 md:p-3 bg-green-50 border border-green-200 rounded-lg">
                     <p className="text-xs md:text-sm text-green-800">
                       <strong>Ausgewählter Termin:</strong> {appointmentData.formattedDate} um {appointmentData.time}
                     </p>
                     <button
                       type="button"
                       onClick={() => setAppointmentData(null)}
                       className="text-xs text-green-600 hover:text-green-800 underline mt-1"
                     >
                       Termin ändern
                     </button>
                   </div>
                 )}
               </div>

               {/* Navigation ve Gönder Butonu */}
               <div className="flex justify-between items-center pt-4 md:pt-6">
                 <button
                   type="button"
                   onClick={handlePreviousStep}
                   className="px-4 py-2 text-sm border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                 >
                   ← Zurück
                 </button>
                 
                 <button
                   type="submit"
                   disabled={!formData.privacyPolicy || isSubmitting}
                   className={`px-6 py-2 text-sm rounded-lg font-semibold transition-all duration-300 ${
                     formData.privacyPolicy && !isSubmitting
                       ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105'
                       : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                   }`}
                 >
                   {isSubmitting ? (
                     <div className="flex items-center">
                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       Wird gesendet...
                     </div>
                   ) : (
                     formData.wantAppointment ? 'Termin Buchen' : 'Anfrage Senden'
                   )}
                 </button>
               </div>
             </form>
            )}

            {/* Teşekkür Sayfası */}
            {currentStep === questions.length + 1 && (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Vielen Dank für Ihre Anfrage!
                </h2>
                <p className="text-lg text-gray-600">
                  Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
               
                
                <div className="pt-6 space-y-3">
                  <button
                    onClick={() => router.push('/')}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Jetzt zur Startseite
                  </button>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setCurrentStep(0);
                        setFormData({
                          projectType: [],
                          budget: [],
                          timeline: [],
                          experience: [],
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          message: '',
                          privacyPolicy: false,
                          wantAppointment: false,
                          newsletterSubscription: false
                        });
                        setAppointmentData(null);
                      }}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Neue Anfrage
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Calendar Modal */}
      <AnimatePresence>
        {showCalendar && (
          <Calendar
            onTimeSelect={handleCalendarTimeSelect}
            onClose={handleCalendarClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
