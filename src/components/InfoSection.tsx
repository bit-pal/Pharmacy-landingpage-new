'use client';

import { useState } from 'react';
import Image from 'next/image';

interface InfoItem {
  question: string;
  answer?: string;
}

interface InfoSectionProps {
  title: string;
  imageTitle: string;
  imageDescription: string;
  imageBackgroundColor?: string;
  items: InfoItem[];
  showAnswers?: boolean;
}

export default function InfoSection({
  title,
  imageTitle,
  imageDescription,
  imageBackgroundColor = "bg-green-100",
  items,
  showAnswers = false
}: InfoSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      
      {/* Left - Information Image */}
      <div className={`${imageBackgroundColor} rounded-2xl overflow-hidden h-96`}>
        <div className="relative w-full h-full">
          <Image
            src={
              imageTitle?.includes('Hair') ? '/hair_loss/faq-cover.png' :
              imageTitle?.includes('PE') ? '/pe_treatment/faq.webp' :
              '/ed_treatment/faq-cover.png'
            }
            alt={`${imageTitle} - ${imageDescription}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right - FAQ/Info Accordion */}
      <div>
        <h2 
          className="text-3xl md:text-4xl font-bold text-black mb-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button 
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left p-5 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-black text-lg pr-4">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {(expandedIndex === index || (showAnswers && item.answer)) && item.answer && (
                <div className="px-5 pb-5 pt-2 text-gray-600 text-base leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 