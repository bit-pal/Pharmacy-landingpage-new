import React from 'react';
import Image from 'next/image';

export default function OnceApprovedDetailsSection() {
  return (
    <div>
      {/* Once Approved Image */}
      <div className="relative">
        <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/weight_management/work-step-3.png"
              alt="Once Approved - Thumbs up gesture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        {/* Step number overlay */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          3
        </div>
      </div>

      {/* Once Approved Details */}
      <div className="bg-white rounded-xl mt-6 p-6">
        <h3 className="text-xl font-bold text-black mb-6">
          Once Approved
        </h3>

        <div className="space-y-4">
          
          {/* Fast & Free Delivery */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Fast & Free Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                Next-day delivery to your door at no extra cost
              </p>
            </div>
          </div>

          {/* Discreet Packaging */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Discreet Packaging
              </h4>
              <p className="text-gray-600 text-sm">
                Your privacy is protected with unmarked packaging
              </p>
            </div>
          </div>

          {/* Start Your Journey */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Start Your Weight Loss Journey
              </h4>
              <p className="text-gray-600 text-sm">
                Begin your transformation with professional support
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 