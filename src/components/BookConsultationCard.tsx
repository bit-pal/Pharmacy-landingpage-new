'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AppointmentOption {
  id: string;
  title: string;
  duration: string;
  icon: string;
  description: string;
}

const appointmentOptions: AppointmentOption[] = [
  {
    id: 'new-customer',
    title: 'New Customer Consultation',
    duration: '15m',
    icon: 'NEW',
    description: 'A 15-minute phone call, including a required brief video call for weight verification, to ensure safe prescribing as per GPhC guidelines'
  },
  {
    id: '6-month-review',
    title: '6 Month Review',
    duration: '15m',
    icon: 'REVIEW',
    description: 'Book your 6-month review to assess your weight loss progress. After 6 months, we conduct a detailed check-in, followed by ongoing reviews every 6 months to keep you on track.'
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support – Speak with a Prescriber',
    duration: '15m',
    icon: 'SUPPORT',
    description: 'Book a phone session to discuss any questions about your medicine, side effects, medication changes, or general health concerns or questions with a prescriber.'
  },
  {
    id: '3-month-review',
    title: '3 Month Review',
    duration: '15m',
    icon: 'REVIEW',
    description: 'Book your first 3 month review to assess your weight loss progress, and to ask any questions you may have.'
  },
  {
    id: 'pen-support',
    title: 'Mounjaro Pen Technical Support',
    duration: '15m',
    icon: 'PEN',
    description: 'Having trouble with your Mounjaro pen? Our technical team will help resolve any issues and get your pen working properly.'
  },
  {
    id: 'options',
    title: 'Mounjaro/Wegovy Options',
    duration: '15m',
    icon: 'SWITCH',
    description: 'Worried about the price hike? Book your options appointment to learn more, discuss your options, and make the right decision for you.'
  }
];

export default function BookConsultationCard() {
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleAppointmentSelect = (appointmentId: string) => {
    setSelectedAppointment(appointmentId);
    setCurrentStep(2);
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setSelectedAppointment(null);
      setSelectedDate(null);
      setSelectedTime(null);
    } else if (currentStep === 3) {
      setCurrentStep(2);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // Automatically move to step 3 when time is selected
    setCurrentStep(3);
  };

  const handleNextStep = () => {
    if (currentStep === 2 && selectedDate && selectedTime) {
      setCurrentStep(3);
    }
  };

  const handleConfirmBooking = () => {
    setCurrentStep(4);
  };

  const handleReturnToWebsite = () => {
    router.push('/');
  };

  const generateGoogleCalendarUrl = () => {
    if (!selectedDate || !selectedTime || !selectedAppointment) return '#';
    
    // Get the selected appointment details
    const appointment = appointmentOptions.find(opt => opt.id === selectedAppointment);
    const appointmentTitle = appointment?.title || 'Consultation';
    
    // Format the date (assuming October 2025)
    const year = 2025;
    const month = 10; // October
    const day = selectedDate;
    
    // Parse the selected time (e.g., "09:15")
    const [hours, minutes] = selectedTime.split(':').map(Number);
    
    // Create start date/time in UTC format
    const startDate = new Date(year, month - 1, day, hours, minutes);
    const endDate = new Date(startDate.getTime() + 15 * 60 * 1000); // Add 15 minutes
    
    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };
    
    const startDateStr = formatDate(startDate);
    const endDateStr = formatDate(endDate);
    
    // Build Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';
    const params = new URLSearchParams({
      text: appointmentTitle,
      dates: `${startDateStr}/${endDateStr}`,
      details: `Appointment with Assured Pharmacy for ${appointmentTitle}`,
      location: 'Assured Pharmacy'
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const getIconElement = (iconType: string) => {
    const baseClasses = "w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold";
    
    switch (iconType) {
      case 'NEW':
        return <div className={`${baseClasses} bg-gray-400`}>NEW</div>;
      case 'REVIEW':
        return <div className={`${baseClasses} bg-gray-400`}>REVIEW</div>;
      case 'SUPPORT':
        return <div className={`${baseClasses} bg-gray-400`}>SUPPORT</div>;
      case 'PEN':
        return <div className={`${baseClasses} bg-gray-400`}>PEN</div>;
      case 'SWITCH':
        return <div className={`${baseClasses} bg-red-500`}>SWITCH</div>;
      default:
        return <div className={`${baseClasses} bg-gray-400`}>{iconType}</div>;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {currentStep !== 4 && (
        <>
          {/* Title */}
          <div className="px-6 pt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Book A Free Consultation</h1>
          </div>
          {/* Header */}
          <div className="text-white py-12 px-8 relative border-b border-gray-200 rounded-t-lg bg-pink-400">
        {/* Logo - centered */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold leading-tight">ASSURED</div>
            <div className="text-xl font-bold leading-tight">PHARMACY</div>
          </div>
        </div>
        
        
        {/* Step indicators - positioned at the bottom left */}
        <div className="absolute left-8 bottom-4 flex space-x-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep > 1 ? 'bg-gray-600 text-white' : 'bg-white text-gray-600'
          }`}>
            {currentStep > 1 ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : '1'}
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep > 2 ? 'bg-gray-600 text-white' : currentStep >= 2 ? 'bg-white text-gray-600' : 'bg-gray-400 text-white'
          }`}>
            {currentStep > 2 ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : '2'}
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            currentStep >= 3 ? 'bg-white text-gray-600 font-bold' : 'bg-gray-400 text-white'
          }`}>3</div>
        </div>
      </div>
        </>
      )}

      {currentStep === 4 && (
        <div className="px-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Book A Free Consultation</h1>
        </div>
      )}

      {/* Content */}
      <div className="px-6 pb-6">
        {currentStep === 1 && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Select service</h2>
            <p className="text-gray-600 mb-6">Appointment</p>
            
            {/* Scrollable appointment options */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {appointmentOptions.map((option) => (
                <div 
                  key={option.id} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleAppointmentSelect(option.id)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {getIconElement(option.icon)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{option.title}</h3>
                        <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                          {option.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h2>
            
            {/* Calendar */}
            <div className="mb-6 flex justify-center">
              <div className="w-full max-w-md">
                <div className="flex items-center justify-center mb-6 relative">
                  <button className="absolute left-0 p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-lg font-semibold text-gray-900">October 2025</h3>
                  <button className="absolute right-0 p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Calendar Container */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* First row: 1-5 with some empty cells for proper alignment */}
                    <div></div> {/* Empty cell for alignment */}
                    <div></div> {/* Empty cell for alignment */}
                    <button
                      onClick={() => handleDateSelect(1)}
                      className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                        selectedDate === 1 
                          ? 'border-gray-800 bg-white font-semibold' 
                          : 'border-gray-300'
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => handleDateSelect(2)}
                      className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                        selectedDate === 2 
                          ? 'border-gray-800 bg-white font-semibold' 
                          : 'border-gray-300'
                      }`}
                    >
                      2
                    </button>
                    <button
                      onClick={() => handleDateSelect(3)}
                      className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                        selectedDate === 3 
                          ? 'border-gray-800 bg-white font-semibold' 
                          : 'border-gray-300'
                      }`}
                    >
                      3
                    </button>
                    <button
                      onClick={() => handleDateSelect(4)}
                      className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                        selectedDate === 4 
                          ? 'border-gray-800 bg-white font-semibold' 
                          : 'border-gray-300'
                      }`}
                    >
                      4
                    </button>
                    <button
                      onClick={() => handleDateSelect(5)}
                      className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                        selectedDate === 5 
                          ? 'border-gray-800 bg-white font-semibold' 
                          : 'border-gray-300'
                      }`}
                    >
                      5
                    </button>
                    
                    {/* Rest of the dates */}
                    {Array.from({ length: 26 }, (_, i) => i + 6).map(date => (
                      <button
                        key={date}
                        onClick={() => handleDateSelect(date)}
                        className={`p-2 text-center text-xs border-b-2 hover:bg-white transition-colors ${
                          selectedDate === date 
                            ? 'border-gray-800 bg-white font-semibold' 
                            : 'border-gray-300'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-center font-medium text-gray-700 mb-4">Time</h4>
                {selectedDate ? (
                  <div>
                    {/* Selected Date Display */}
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600">0{selectedDate}-10-2025</p>
                    </div>
                    
                    {/* Time Slots Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        '09:00', '09:15', '09:30',
                        '09:45', '10:00', '10:15',
                        '10:30', '10:45', '11:00',
                        '11:15', '11:30', '11:45'
                      ].map(time => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 text-sm rounded-lg border transition-colors ${
                            selectedTime === time
                              ? 'bg-blue-500 text-white border-blue-500'
                              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <p className="text-gray-500">Select date</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button 
                onClick={handleBack}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                BACK
              </button>
              <button 
                onClick={handleNextStep}
                disabled={!selectedDate || !selectedTime}
                className={`font-medium px-6 py-2 rounded transition-colors duration-200 ${
                  selectedDate && selectedTime
                    ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                NEXT STEP
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Fill information</h2>
            
            {/* Form */}
            <div className="space-y-6">
              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjMDEyMTY5Ii8+CjxyZWN0IHk9IjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSI1IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjUiIGZpbGw9IiNGRjAwMDAiLz4KPC9zdmc+" alt="UK" className="w-5 h-4" />
                      <svg className="w-3 h-3 ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="07400 123456"
                    />
                  </div>
                </div>
              </div>
              
              {/* Name and Surname Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Surname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your surname"
                  />
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={handleBack}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                BACK
              </button>
              <button 
                onClick={handleConfirmBooking}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                CONFIRM BOOKING
              </button>
            </div>
          </>
        )}

        {currentStep === 4 && (
          <div className="text-center py-12">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Success Message */}
            <h2 className="text-2xl font-semibold text-green-600 mb-8">
              Thank you for booking an appointment!
            </h2>
            
            {/* Action Buttons */}
            <div className="space-y-3 max-w-sm mx-auto">
              <a 
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 no-underline"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                ADD TO GOOGLE CALENDAR
              </a>
              
              <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                ADD TO ICAL CALENDAR
              </button>
              
              <button 
                onClick={handleReturnToWebsite}
                className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11l3.707-3.707a1 1 0 011.414 1.414L5.414 11l2.293 2.293a1 1 0 010 1.414zm4.586 0a1 1 0 001.414 0L17.414 11l-3.707-3.707a1 1 0 00-1.414 1.414L14.586 11l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" />
                </svg>
                RETURN TO THE WEBSITE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 