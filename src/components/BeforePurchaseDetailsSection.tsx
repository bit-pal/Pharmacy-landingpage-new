import React from 'react';
import Image from 'next/image';

export default function BeforePurchaseDetailsSection() {
  return (
    <div className="space-y-6">
      {/* Top Image */}
      <div className="relative">
        <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/weight_management/work-step-1.png"
              alt="Consultation - Person using laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        {/* Step number overlay */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
          1
        </div>
      </div>

      {/* Before Purchase Details */}
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-xl font-bold text-black mb-6">
          Before Purchase
        </h3>

        <div className="space-y-4">
          
          {/* Complete Medical Questionnaire */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-gray-600 font-bold">?</span>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Complete a Medical Questionnaire
              </h4>
              <p className="text-gray-600 text-sm">
                Confirming safety and appropriateness
              </p>
            </div>
          </div>

          {/* Choose Starting Dose */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Choose Your Starting Dose
              </h4>
              <p className="text-gray-600 text-sm">
                The 1<sup>st</sup> dose should be selected for customers who are new<br />
                to weight loss injection treatments
              </p>
            </div>
          </div>

          {/* Pay for First Dosage */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Pay for Your First Dosage
              </h4>
              <p className="text-gray-600 text-sm">
                Easy online payment and competitive pricing
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 