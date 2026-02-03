'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WeightLossInjectablesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this really for weight loss?",
      answer: "Yes, our weight loss treatments are licensed for weight loss \"The Medicines and Healthcare products Regulatory Agency (MHRA) has authorised the use of tirzepatide (Mounjaro; Eli Lilly) for weight loss and weight management in adults\"."
    },
    {
      question: "How often to take them?",
      answer: "Our weight loss treatments are taken once weekly and should be taken consistently and on the same day each week."
    },
    {
      question: "How effective are they?",
      answer: "If you're curious about the weight loss potential with Mounjaro, clinical trials have demonstrated that patients can achieve at least a 20% weight loss after using tirzepatide for 72 weeks (18 months), and upto 25% over 88 weeks or more, especially when combined with healthy lifestyle changes."
    },
    {
      question: "Are they painful?",
      answer: "Self-injecting medication can be an uncomfortable idea for many. However, weight loss injections differ from those used for vaccinations. Weight loss injections are administered through an easy-to-use injection pen, not a standard injection needle. It features a much smaller needle than vaccination needles, and the liquid is not manually pushed."
    },
    {
      question: "How soon will I see results?",
      answer: "Results vary from person to person. While every weight loss journey is unique, over 92% of patients saw results within the first month, with more than 25% noticing changes in the first week."
    }
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
        About Weight Loss Injectables
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Image */}
        <div className="bg-green-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
          <Image
            src="/weight_management/mounjaro.png"
            alt="Weight Loss Injectables"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right - Accordion FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-600 flex-shrink-0">
                  {expandedIndex === index ? '−' : '▼'}
                </span>
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

