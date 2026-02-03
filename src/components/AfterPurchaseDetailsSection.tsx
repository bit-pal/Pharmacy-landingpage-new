import React from 'react';
import Image from 'next/image';

export default function AfterPurchaseDetailsSection() {
  return (
    <div>
      {/* After Purchase Image */}
      <div className="relative">
        <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/weight_management/work-step-2.png"
              alt="After Purchase - Woman with laptop and shopping bag"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        {/* Step number overlay */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          2
        </div>
      </div>

      {/* After Purchase Details */}
      <div className="bg-white rounded-xl mt-6 p-6">
        <h3 className="text-xl font-bold text-black mb-6">
          After Purchase
        </h3>

        <div className="space-y-4">
          
          {/* Book Your 15 Minute Consultation */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Book Your 15 Minute Consultation
              </h4>
              <p className="text-gray-600 text-sm">
                Schedule a phone and video call with a prescriber
              </p>
            </div>
          </div>

          {/* Submit Required Photos */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Submit Required Photos
              </h4>
              <p className="text-gray-600 text-sm">
                Provide two clear photos for review
              </p>
            </div>
          </div>

          {/* Clinician Approval & Next-Day Delivery */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Clinician Approval & Next-Day Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                Once approved it will ship on an agreed date
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 