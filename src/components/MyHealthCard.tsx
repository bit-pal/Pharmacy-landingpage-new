'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MyHealthCardProps {
  initialHeight?: string;
  initialWeight?: string;
  phoneNumber?: string;
}

export default function MyHealthCard({ 
  initialHeight = "", 
  initialWeight = "",
  phoneNumber = "01625 460 621"
}: MyHealthCardProps) {
  const [height, setHeight] = useState(initialHeight);
  const [weight, setWeight] = useState(initialWeight);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [showValidation, setShowValidation] = useState(false);
  const [showPreviousReadings, setShowPreviousReadings] = useState(false);
  const router = useRouter();

  const handleBookConsultation = () => {
    router.push('/book-consultation');
  };

  const handleUpdate = () => {
    // Check if values are entered
    if (!height || !weight) {
      setShowValidation(true);
      setShowPreviousReadings(false);
    } else {
      setShowValidation(false);
      setShowPreviousReadings(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* My Health Header */}
      <h3 className="text-xl font-semibold text-teal-600">My Health</h3>
      
      {/* Two Cards in Same Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Weight Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 md:mb-6">My Weight</h4>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {/* Height */}
            <div className="flex items-center gap-1 md:gap-2">
              <label className="text-gray-400 text-sm whitespace-nowrap">Height</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-12 md:w-16 px-1 md:px-2 py-1 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-sm"
                placeholder=""
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                className="px-1 md:px-2 py-1 border border-gray-300 rounded text-sm bg-white"
              >
                <option value="cm">cm</option>
                <option value="ft">ft</option>
                <option value="in">in</option>
              </select>
            </div>
            
            {/* Weight */}
            <div className="flex items-center gap-1 md:gap-2">
              <label className="text-gray-400 text-sm whitespace-nowrap">Weight</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-12 md:w-16 px-1 md:px-2 py-1 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-sm"
                placeholder=""
              />
              <select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
                className="px-1 md:px-2 py-1 border border-gray-300 rounded text-sm bg-white"
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
                <option value="st">st</option>
              </select>
            </div>
            
            {/* Update Button */}
            <button 
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 md:px-4 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap"
            >
              Update
            </button>
          </div>

          {/* Validation Message */}
          {showValidation && (
            <div className="mt-4 text-center">
              <p className="text-red-500 text-sm">Please enter valid values.</p>
            </div>
          )}

          {/* Previous Readings */}
          {showPreviousReadings && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Previous Readings</h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-xs md:text-sm text-gray-600 mb-1">1st Oct, 25</div>
                  <div className="text-base md:text-lg font-bold text-gray-900">80 kg</div>
                  <div className="text-xs md:text-sm text-gray-500">(25.2 BMI)</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-xs md:text-sm text-gray-600 mb-1">1st Oct, 25</div>
                  <div className="text-base md:text-lg font-bold text-gray-900">78 kg</div>
                  <div className="text-xs md:text-sm text-gray-500">(24.6 BMI)</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* How are you feeling Card */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-gray-200 rounded-lg shadow-sm p-4 md:p-6 relative">
          <div className="pr-12 md:pr-16">
            <h4 className="text-lg font-bold text-gray-900 mb-3">How are you feeling?</h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Are you experiencing any issues, side effects, or have feedback? Please let us know
            </p>
            
            {/* Phone Number */}
            <div className="flex items-center mb-4 text-sm text-gray-700">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {phoneNumber}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button 
                onClick={handleBookConsultation}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 md:px-4 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Book Free Consultation
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-3 md:px-4 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap">
                Send Message
              </button>
            </div>
          </div>
          
          {/* Doctor Avatar - positioned absolutely */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 