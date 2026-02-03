'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ConsultationLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get('treatment') || 'weight-loss';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const benefits = [
    { icon: '✓', text: 'Free Tracked Delivery' },
    { icon: '£', text: 'Lowest Price Guarantee' },
    { icon: '🇬🇧', text: 'We are based in the UK' }
  ];

  // Load email from sessionStorage if available (from info page)
  useEffect(() => {
    const userInfo = sessionStorage.getItem('consultationUserInfo');
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        if (parsed.email) {
          setEmail(parsed.email);
        }
      } catch (e) {
        console.error('Error parsing user info:', e);
      }
    }
  }, []);

  const handleLogin = () => {
    // Validate form
    if (!email.trim() || !password.trim()) {
      return;
    }

    // Store login info (in a real app, this would be sent to backend)
    sessionStorage.setItem('loginInfo', JSON.stringify({
      email: email.trim(),
      loggedIn: true,
    }));

    // Navigate to consultation page
    router.push(`/consultation/${treatmentId}`);
  };

  const handleCancel = () => {
    // Go back to info page
    router.push(`/consultation/${treatmentId}/info?treatment=${treatmentId}`);
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

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
                Please, log in to your account.
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

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-center">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Forgot Your Password? <span className="text-blue-600 underline">Click here</span>
                </a>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-1"
                >
                  <ChevronLeft size={16} />
                  <span>Cancel</span>
                </button>

                <button
                  onClick={handleLogin}
                  disabled={!isFormValid}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>Login</span>
                  <ChevronRight size={16} />
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

