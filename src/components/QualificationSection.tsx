'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function QualificationSection() {
  return (
    <div className="bg-[#F5F5E7] rounded-2xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
              Who Can Qualify<br />
              For Treatment
            </h2>
            
            {/* Qualification Requirements */}
            <div className="space-y-4">
              
              {/* Applicable with BMI 30+ */}
              <div className="bg-[DCE8D9] border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-green-800">Applicable with a BMI of 30 or above</span>
                </div>
              </div>

              {/* BMI 27-30 with health conditions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="mb-3">
                  <p className="font-medium text-gray-900 mb-2">
                    If you have a BMI of 27-30 with at least one weight related health condition
                  </p>
                  <Link href="#" className="text-sm font-medium text-gray-700 underline hover:text-gray-900">
                    View Health Conditions +
                  </Link>
                </div>
              </div>

              {/* Higher-risk ethnic background */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="mb-3">
                  <p className="font-medium text-gray-900 mb-2">
                    Applicable for BMI 27+ if you are from a higher-risk ethnic background
                  </p>
                  <Link href="#" className="text-sm font-medium text-gray-700 underline hover:text-gray-900">
                    View Ethnicities +
                  </Link>
                </div>
              </div>

              {/* Prohibited for BMI under 27 */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="font-semibold text-red-800">Prohibited For BMI Under 27</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 space-y-4 text-sm text-gray-600">
              <p>
                If your BMI qualifies our prescribers will review your health history, and if clinically safe and appropriate, 
                they will prescribe your weight loss treatment.
              </p>
              <p>
                We guarantee a full refund if our clinicians determine that our treatment program is not suitable for you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* BMI Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/weight_management/weight-loss-bmi-image.webp"
                  alt="BMI Weight Loss Qualification Chart"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 