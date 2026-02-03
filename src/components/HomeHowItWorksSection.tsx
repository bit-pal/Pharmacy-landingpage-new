import React from 'react';
import Image from 'next/image';

export default function HomeHowItWorksSection() {
  const steps = [
    {
      iconSrc: '/Homepage/working-question-circle-filled.svg',
      iconAlt: 'Medical questions icon',
      title: 'Complete Medical Questions',
      description: 'Complete a short questionnaire specific to your health needs.',
    },
    {
      iconSrc: '/Homepage/working-pill-filled.svg',
      iconAlt: 'Treatment selection icon',
      title: 'Select Preferred Treatment',
      description: 'Let us know which treatment you prefer and our qualified professionals will check it\'s right for you. The prescriber may contact you if they require any further information.',
    },
    {
      iconSrc: '/Homepage/working-credit-card.svg',
      iconAlt: 'Secure payment icon',
      title: 'Pay Securely Online',
      description: 'Simple and secure checkout process with free tracked delivery.',
    },
    {
      iconSrc: '/Homepage/working-delivery.svg',
      iconAlt: 'Medicine delivery icon',
      title: 'Your Medicine is delivered',
      description: 'Our team will pack your treatment in discreet packaging and post it directly to you.',
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            How it Works
          </h2>
          <p className="text-gray-600 text-lg">
            Professional, easy and straight forward process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4">
              {/* Icon */}
              <div className={`w-16 h-full rounded-md  bg-[#DAEBE5] flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <Image
                  src={step.iconSrc}
                  alt={step.iconAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-snug text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 