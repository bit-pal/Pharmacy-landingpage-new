'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const router = useRouter();

  const handleStartConsultation = async (e: React.MouseEvent) => {
    e.preventDefault();

    // All treatments go directly to consultation page
    // Login/info happens within the questionnaire flow itself
    // Add ?start=true to ensure fresh start (clear saved progress)
    router.push(`/consultation/${treatment.id}?start=true`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Image */}
        <div className="h-64 bg-gray-200 relative">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-3">
            {treatment.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {treatment.description}
          </p>
          
          {/* Start Consultation Button */}
          <button
            onClick={handleStartConsultation}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 group w-full justify-center"
          >
            Start Consultation
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex m-4 items-stretch rounded-lg">
        {/* Image Section - 50% width */}
        <div className="md:w-1/2">
          <div className="h-48 md:h-full bg-gray-200 relative rounded-lg">
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content Section - 50% width */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-3">
              {treatment.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Start Consultation Button */}
          <div className="flex justify-start">
            <button
              onClick={handleStartConsultation}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 group"
            >
              Start Consultation
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 