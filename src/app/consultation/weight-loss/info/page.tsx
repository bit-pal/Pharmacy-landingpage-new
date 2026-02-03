'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { ChevronRight } from 'lucide-react';

export default function ConsultationInfoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get('treatment') || 'weight-loss';

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const benefits = [
    { icon: '✓', text: 'Free Tracked Delivery' },
    { icon: '£', text: 'Lowest Price Guarantee' },
    { icon: '🇬🇧', text: 'We are based in the UK' }
  ];

  const handleContinue = () => {
    // Validate form
    if (!email.trim() || !firstName.trim() || !lastName.trim()) {
      return;
    }

    // Store user info in sessionStorage for later use
    sessionStorage.setItem('consultationUserInfo', JSON.stringify({
      email: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    }));

    // Navigate to login page
    router.push(`/consultation/${treatmentId}/login?treatment=${treatmentId}`);
  };

  const isFormValid = email.trim() !== '' && firstName.trim() !== '' && lastName.trim() !== '';

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Benefits Bar */}
      <div className="bg-black text-white py-4">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Free Tracked Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">£</span>
              <span>Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">🇬🇧</span>
              <span>We are based in the UK</span>
            </div>
          </div>

          {/* Mobile: Show first benefit */}
          <div className="md:hidden flex justify-center items-center text-sm">
            <span className="text-green-400">{benefits[0].icon}</span>
            <span className="ml-2">{benefits[0].text}</span>
          </div>
        </div>
      </div>

      {/* Consultation Status Banner */}
      <div className="bg-green-500 text-white py-3">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-xs font-bold">✓</span>
            </div>
            <span className="text-sm font-medium">Starting consultation for the treatment.</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Form Header */}
            <div className="text-center py-8 px-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Let&apos;s start with your info.
              </h1>
            </div>

            {/* Form Fields */}
            <div className="px-6 py-8 space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Continue Button */}
              <div className="pt-4">
                <button
                  onClick={handleContinue}
                  disabled={!isFormValid}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <span className="text-xl">≫</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-8 text-center mt-auto">
        <p className="text-sm text-gray-600">
          Copyright MediTrue 2025
        </p>
      </div>
    </main>
  );
}

