import React from 'react';
import Image from 'next/image';

export default function ProcessTimelineSection() {
  return (
    <div className="space-y-8 bg-gray-100 rounded-2xl p-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          How it Works
        </h2>
        <p className="text-gray-600 text-lg">
          Professional, easy and straight<br />
          forward process
        </p>
      </div>

      {/* Process Steps - Staggered Layout */}
      <div className="relative min-h-[400px]">
        
        {/* Step 1 - Before Purchase - Top Position */}
        <div className="absolute top-0 left-0 flex items-start space-x-4">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1 whitespace-nowrap">
              Before Purchase
            </h3>
          </div>
        </div>

        {/* Dotted line from step 1 to step 2 */}
        <div className="absolute top-12 left-5 border-l-2 border-dotted border-gray-400 h-16"></div>

        {/* Step 2 - After Purchase - Middle Position */}
        <div className="absolute top-28 left-0 flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1 whitespace-nowrap">
              After Purchase
            </h3>
          </div>
        </div>

        {/* Dotted line from step 2 to step 3 */}
        <div className="absolute top-40 left-5 border-l-2 border-dotted border-gray-400 h-16"></div>

        {/* Step 3 - Once Approved - Lower Position */}
        <div className="absolute top-56 left-0 flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1 whitespace-nowrap">
              Once Approved
            </h3>
          </div>
        </div>

        {/* Medication Package Illustration - Positioned to the right of steps */}
        <div className="absolute top-16 right-0">
          <div className="relative">
            {/* Real medication package image */}
            <div className="w-48 h-64 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative w-full h-full">
                <Image
                  src="/weight_management/mounjaro-v2.png"
                  alt="Medication Package"
                  fill
                  className="object-contain p-4"
                  sizes="192px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 