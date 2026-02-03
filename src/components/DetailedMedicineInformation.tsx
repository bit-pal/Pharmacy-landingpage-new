'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DetailedMedicineInformationProps {
  activeMedicine: 'mounjaro' | 'wegovy';
  setActiveMedicine: (medicine: 'mounjaro' | 'wegovy') => void;
}

export default function DetailedMedicineInformation({ 
  activeMedicine, 
  setActiveMedicine 
}: DetailedMedicineInformationProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const mountjaroFAQs = [
    {
      question: "How fast will I see results?",
      answer: "Results vary by individual, but many patients begin to see weight loss within the first few weeks of treatment. Significant results are typically observed after 3-6 months of consistent use along with diet and exercise."
    },
    {
      question: "Why choose Mounjaro over Wegovy?",
      answer: "Mounjaro (tirzepatide) works on both GIP and GLP-1 receptors, offering a dual-action approach to weight loss. Clinical studies have shown it may result in greater weight loss compared to single-action medications. The choice depends on your individual health profile and doctor's recommendation."
    },
    {
      question: "How long should I take Mounjaro?",
      answer: "The duration of treatment varies by individual. Most patients continue treatment as long as they're benefiting from it and not experiencing adverse effects. Your healthcare provider will monitor your progress and adjust the treatment plan as needed."
    },
    {
      question: "Is Mounjaro right for me?",
      answer: "Mounjaro is suitable for adults with a BMI of 30 or greater, or 27 or greater with weight-related health conditions. A consultation with our healthcare professionals will determine if it's the right choice for you based on your medical history and health goals."
    },
    {
      question: "What are the side effects?",
      answer: "Common side effects include nausea, diarrhea, decreased appetite, vomiting, constipation, and stomach pain. These typically improve over time as your body adjusts to the medication. Serious side effects are rare but should be reported to your doctor immediately."
    }
  ];

  const wegovyFAQs = [
    {
      question: "How fast will I see results?",
      answer: "Most patients begin to notice weight loss within the first month of treatment. Optimal results are typically seen after 6-12 months of consistent use combined with a healthy diet and regular exercise."
    },
    {
      question: "Why choose Wegovy over Mounjaro?",
      answer: "Wegovy (semaglutide) is a well-established GLP-1 receptor agonist with extensive clinical research backing its effectiveness. It's been specifically approved for chronic weight management and has a proven track record. Your doctor can help determine which medication is best for your needs."
    },
    {
      question: "How long should I take Wegovy?",
      answer: "Wegovy is intended for long-term use as part of a comprehensive weight management program. Treatment duration depends on your individual response and health goals. Regular monitoring with your healthcare provider will guide the continuation of therapy."
    },
    {
      question: "Is Wegovy right for me?",
      answer: "Wegovy is approved for adults with a BMI of 30 or higher, or 27 or higher with at least one weight-related condition. During your consultation, our healthcare team will assess your medical history and determine if Wegovy is appropriate for you."
    },
    {
      question: "What are the side effects?",
      answer: "The most common side effects include nausea, diarrhea, vomiting, constipation, abdominal pain, and headache. These side effects usually decrease over time. If you experience severe or persistent side effects, contact your healthcare provider."
    }
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Detailed Medicine Information
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                Achieving a healthy weight can be a challenge but can bring with it great benefits to your health. You can start the online consultation below to see if you are eligible for our weight loss plan.
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-3 bg-gray-100 p-2 rounded-full">
              <button
                onClick={() => setActiveMedicine('mounjaro')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  activeMedicine === 'mounjaro'
                    ? 'bg-gray-700 text-white'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Mounjaro
              </button>
              <button
                onClick={() => setActiveMedicine('wegovy')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  activeMedicine === 'wegovy'
                    ? 'bg-green-100 text-black font-bold'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Wegovy
              </button>
            </div>
          </div>
        </div>

        {/* Content based on selected medicine */}
        {activeMedicine === 'mounjaro' ? (
          <>
            {/* How Often To Take Mounjaro + FAQs */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* How Often Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">
                  How Often To Take Mounjaro
                </h3>
                <div className="relative">
                  <Image
                    src="/weight_management/weight-loss-dosage-mounjaro.webp"
                    alt="Mounjaro Dosage Schedule"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* FAQs Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Mounjaro FAQs
                </h3>
                <div className="space-y-4">
                  {mountjaroFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold text-black pr-4">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                            expandedFAQ === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === index && (
                        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* How Often To Take Wegovy + FAQs */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* How Often Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">
                  How Often To Take Wegovy
                </h3>
                <div className="relative">
                  <Image
                    src="/weight_management/weight-loss-dosage-wegovy.webp"
                    alt="Wegovy Dosage Schedule"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* FAQs Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Wegovy FAQs
                </h3>
                <div className="space-y-4">
                  {wegovyFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold text-black pr-4">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                            expandedFAQ === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === index && (
                        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

