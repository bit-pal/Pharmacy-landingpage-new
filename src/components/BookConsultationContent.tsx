'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookConsultationContent() {
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(9); // October = 9 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

  const handleAppointmentSelect = (appointmentId: string) => {
    setSelectedAppointment(appointmentId);
    setCurrentStep(2);
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // Automatically move to step 3 when time is selected
    setCurrentStep(3);
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

  const handleConfirmBooking = () => {
    setCurrentStep(4);
  };

  const generateGoogleCalendarUrl = () => {
    if (!selectedDate || !selectedTime || !selectedAppointment) return '#';
    
    // Format the date
    const year = currentYear;
    const month = currentMonth + 1; // Convert to 1-indexed
    const day = selectedDate;
    
    // Parse the selected time
    const [hours, minutes] = selectedTime.split(':').map(Number);
    
    // Create start date/time
    const startDate = new Date(year, currentMonth, day, hours, minutes);
    const endDate = new Date(startDate.getTime() + 15 * 60 * 1000); // Add 15 minutes
    
    // Format dates for Google Calendar
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };
    
    const startDateStr = formatDate(startDate);
    const endDateStr = formatDate(endDate);
    
    // Build Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';
    const params = new URLSearchParams({
      text: 'Assured Pharmacy Consultation',
      dates: `${startDateStr}/${endDateStr}`,
      details: 'Consultation appointment with Assured Pharmacy',
      location: 'Assured Pharmacy'
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const handleReturnToWebsite = () => {
    // Reset all state and return to home
    setCurrentStep(1);
    setSelectedAppointment(null);
    setSelectedDate(null);
    setSelectedTime(null);
    window.location.href = '/';
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null); // Reset selected date when month changes
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null); // Reset selected date when month changes
  };

  const getMonthName = (month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday=0 to Monday=0
  };

  return (
    <div className={currentStep === 4 ? "w-full" : "grid lg:grid-cols-3 gap-8"}>
      {/* Left sidebar - Pink - Hide in step 4 */}
      {currentStep !== 4 && (
        <div className="bg-pink-500 text-white rounded-lg p-6 lg:p-6">
        <div className="text-center mb-4 lg:mb-8">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <Image
              src="/Homepage/banner-list-logo-icon.svg"
              alt="Assured Pharmacy Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <div className="text-xl font-bold">ASSURED</div>
          <div className="text-xl font-bold">PHARMACY</div>
        </div>

        {/* Steps */}
        <div className="mb-0 lg:mb-8">
          {/* Mobile: Horizontal circles */}
          <div className="flex justify-start items-center space-x-3 lg:hidden">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep > 1 ? 'bg-gray-600 text-white' : 'bg-white text-pink-500'
            }`}>
              {currentStep > 1 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : '1'}
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep > 2 ? 'bg-gray-600 text-white' : currentStep >= 2 ? 'bg-white text-pink-500' : 'bg-pink-400 text-white'
            }`}>
              {currentStep > 2 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : '2'}
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep > 3 ? 'bg-gray-600 text-white' : currentStep >= 3 ? 'bg-white text-pink-500' : 'bg-pink-400 text-white'
            }`}>
              {currentStep > 3 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : '3'}
            </div>
          </div>
          
          {/* Desktop: Vertical list with labels */}
          <div className="hidden lg:block space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep > 1 ? 'bg-gray-600 text-white' : 'bg-white text-pink-500'
              }`}>
                {currentStep > 1 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : '1'}
              </div>
              <span className={currentStep >= 1 ? "font-medium" : "text-pink-100"}>Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep > 2 ? 'bg-gray-600 text-white' : currentStep >= 2 ? 'bg-white text-pink-500' : 'bg-pink-400 text-white'
              }`}>
                {currentStep > 2 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : '2'}
              </div>
              <span className={currentStep >= 2 ? "font-medium" : "text-pink-100"}>Date & Time</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep > 3 ? 'bg-gray-600 text-white' : currentStep >= 3 ? 'bg-white text-pink-500' : 'bg-pink-400 text-white'
              }`}>
                {currentStep > 3 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : '3'}
              </div>
              <span className={currentStep >= 3 ? "font-medium" : "text-pink-100"}>Information</span>
            </div>
          </div>
        </div>

        {/* Contact info - Hidden on mobile */}
        <div className="hidden lg:block border-t border-pink-400 pt-4">
        <div className="text-sm text-pink-100 mb-1">Have any questions?</div>
        <div className="text-sm font-medium">01625 460 621</div>
      </div>
        </div>
      )}

    {/* Right content area */}
    <div className={currentStep === 4 ? "w-full" : "lg:col-span-2"}>
      <div className={currentStep === 4 ? "bg-white rounded-lg border border-gray-200 p-6 w-full max-w-4xl mx-auto" : "bg-white rounded-lg border border-gray-200 p-6 min-h-[600px]"}>
          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Select service</h2>
              <p className="text-pink-500 text-sm mb-6">Appointment</p>
            </>
          )}
          
          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-8">Select Date & Time</h2>
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
                      placeholder=""
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
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Surname <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* New Customer Consultation */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('new-customer')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">NEW</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">New Customer Consultation</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A 15-minute phone call, including a required brief video call for weight verification, to ensure safe prescribing as per GPhC guidelines
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 Month Review */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('6-month-review')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">REVIEW</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">6 Month Review</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Book your 6-month review to assess your weight loss progress. After 6 months, we conduct a detailed check-in, followed by ongoing reviews every 6 months to keep you on track.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing Support */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('ongoing-support')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">SUPPORT</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">Ongoing Support – Speak with a Prescriber</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Book a phone session to discuss any questions about your medicine, side effects, medication changes, or general health concerns or questions with a prescriber.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Month Review */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('3-month-review')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">REVIEW</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">3 Month Review</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Book your first 3 month review to assess your weight loss progress, and to ask any questions you may have.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mounjaro Pen Technical Support */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('pen-support')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">PEN</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">Mounjaro Pen Technical Support</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Having trouble with your Mounjaro pen? Our technical team will help resolve any issues and get your pen working properly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mounjaro/Wegovy Options */}
              <div 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAppointmentSelect('options')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">SWITCH</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">Mounjaro/Wegovy Options</h3>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">15m</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Worried about the price hike? Book your options appointment to learn more, discuss your options, and make the right decision for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Next Step Button for Step 1 */}
          {currentStep === 1 && (
            <div className="flex justify-end mt-6">
              <button 
                className="font-bold px-8 py-3 rounded transition-colors duration-200 text-sm text-white"
                style={{ backgroundColor: '#E91E8C' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D01A7D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E91E8C';
                }}
              >
                NEXT STEP
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <>
              {/* Calendar and Time Grid */}
              <div className="grid md:grid-cols-[300px,1fr] gap-8 mb-8">
                {/* Calendar */}
                <div>
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-semibold text-gray-900">
                      {getMonthName(currentMonth)} {currentYear}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-gray-100 rounded-md"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 rounded-md"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-xs font-medium text-gray-600 py-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Dynamic Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for proper week alignment */}
                    {Array.from({ length: getFirstDayOfMonth(currentMonth, currentYear) }, (_, i) => (
                      <div key={`empty-${i}`}></div>
                    ))}
                    
                    {/* Calendar dates */}
                    {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }, (_, i) => i + 1).map(date => (
                      <button
                        key={date}
                        onClick={() => handleDateSelect(date)}
                        className={`p-2 text-center text-sm hover:bg-gray-100 transition-colors border-b-2 ${
                          selectedDate === date ? 'border-gray-800 font-bold' : 'border-gray-200'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Time */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-gray-900">Time</h4>
                  </div>
                  {selectedDate ? (
                    <div className="h-80">
                      {/* Selected Date Display */}
                      <div className="text-center mb-6">
                        <p className="text-base text-pink-500">
                          {String(selectedDate).padStart(2, '0')}-{String(currentMonth + 1).padStart(2, '0')}-{currentYear}
                        </p>
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
                                ? 'bg-pink-500 text-white border-pink-500'
                                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-8 text-center h-80 flex items-center justify-center">
                      <p className="text-pink-500 text-base font-medium">Select date</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={handleBack}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-8 py-3 rounded transition-colors duration-200 text-sm"
                >
                  BACK
                </button>
                <button 
                  className="font-bold px-8 py-3 rounded transition-colors duration-200 text-sm text-white"
                  style={{ backgroundColor: '#E91E8C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D01A7D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E91E8C';
                  }}
                >
                  NEXT STEP
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="flex justify-between mt-8">
              <button 
                onClick={handleBack}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-8 py-3 rounded transition-colors duration-200 text-sm"
              >
                BACK
              </button>
              <button 
                onClick={handleConfirmBooking}
                className="font-bold px-8 py-3 rounded transition-colors duration-200 text-sm text-white"
                style={{ backgroundColor: '#E91E8C' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D01A7D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E91E8C';
                }}
              >
                CONFIRM BOOKING
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div className="flex items-center justify-center h-full min-h-[500px]">
              <div className="text-center">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Success Message */}
                <h2 className="text-xl font-semibold text-green-500 mb-12">
                  Thank you for booking an appointment!
                </h2>
                
                {/* Action Buttons */}
                <div className="flex flex-col items-center space-y-4 max-w-xs mx-auto">
                  <a 
                    href={generateGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 no-underline text-xs font-medium"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>ADD TO GOOGLE CALENDAR</span>
                  </a>
                  
                  <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-xs font-medium">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>ADD TO ICAL CALENDAR</span>
                  </button>
                  
                  <button 
                    onClick={handleReturnToWebsite}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-xs font-medium"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11l3.707-3.707a1 1 0 011.414 1.414L5.414 11l2.293 2.293a1 1 0 010 1.414zm4.586 0a1 1 0 001.414 0L17.414 11l-3.707-3.707a1 1 0 00-1.414 1.414L14.586 11l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>RETURN TO THE WEBSITE</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
