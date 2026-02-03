import React from 'react';
import Image from 'next/image';

export default function TinyNeedleSection() {
  return (
    <div className="bg-green-100 rounded-2xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Tiny Needle,Big Results
          </h2>
          
          <p className="text-gray-700 text-lg mb-6 italic">
            Our injectable weight loss pen needles are so small you can barely see them, making your injections quick and virtually pain-free.
          </p>
          
          <p className="text-black font-semibold text-lg mb-8">
            Ready To Finally Lose Significant Weight?
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Start Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-64 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src="/weight_management/tiny-needle-big-results.webp"
                alt="Tiny Needle - Close-up of small injection needle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 