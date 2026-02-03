import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WeeklyInjectionSectionProps {
  activeMedicine?: 'mounjaro' | 'wegovy';
}

export default function WeeklyInjectionSection({ activeMedicine = 'mounjaro' }: WeeklyInjectionSectionProps) {
  const isMounjaro = activeMedicine === 'mounjaro';
  const medicineName = isMounjaro ? 'Mounjaro' : 'Wegovy';
  const injectionImage = isMounjaro 
    ? '/weight_management/weight-loss-mounjaro-injection.webp'
    : '/weight_management/weight-loss-wegovy-injection.webp';

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-black mb-2">
          Weekly Weight Loss Injection
        </h3>
        <p className="text-gray-600 text-base">
          A powerful, science-backed solution to help you improve your health.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left - The Injection */}
        <div className="flex flex-col h-full bg-gray-100 p-4 rounded-lg">
          <div className="flex-grow">
            <h4 className="text-xl font-bold text-black mb-4">
              The {medicineName} Injection
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A weekly injection that works by suppressing your <br /> appetite.
            </p>
            
            {/* Injection Image */}
            <div className="w-full h-48 bg-white rounded-lg overflow-hidden mb-4">
              <div className="relative w-full h-full">
                <Image
                  src={injectionImage}
                  alt={`${medicineName} injection pen`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Clinically proven prescription medication</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Reduces hunger and cravings</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Paired with clinical support to assess progress</span>
              </div>
            </div>
          </div>

          <Link
            href="/consultation/weight-loss"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors w-full text-sm mt-4 text-center block"
          >
            Get Started →
          </Link>
        </div>

        {/* Right - Dedicated Support */}
        <div className="flex flex-col h-full bg-gray-100 p-4 rounded-lg">
          <div className="flex-grow">
            <h4 className="text-xl font-bold text-black mb-4">
              Dedicated {medicineName} Support
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Dedicated telephone support throughout your weight loss journey
            </p>
            
            {/* Support Image - Real healthcare professional */}
            <div className="w-full h-48 bg-white rounded-lg overflow-hidden mb-4">
              <div className="relative w-full h-full">
                <Image
                  src="/weight_management/dedicated-support.webp"
                  alt="Dedicated healthcare support professional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Support Features List */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Personalised phone and video consultations at your convenience</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Regular progress check-ins to keep you motivated and supported</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Friendly expert guidance whenever you need reassurance</span>
              </div>
            </div>
          </div>

          <Link
            href="/consultation/weight-loss"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors w-full text-sm mt-4 text-center block"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
} 