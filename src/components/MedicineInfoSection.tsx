'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface DosageStep {
  period: string;
  dose: string;
  description?: string;
  badge?: string;
  isMultiple?: boolean;
}

interface FAQ {
  question: string;
  answer?: string;
}

interface ComparisonRow {
  feature: string;
  values: string[];
}

interface TabContent {
  dosageTitle: string;
  dosageSteps?: DosageStep[];
  instructions?: string[];
  showImage?: boolean;
  imageAlt?: string;
  faqTitle: string;
  faqs: FAQ[];
  showComparison?: boolean;
  comparisonTitle?: string;
  comparisonHeaders?: string[];
  comparisonRows?: ComparisonRow[];
  note?: string;
}

interface MedicineInfoSectionProps {
  title: string;
  description: string;
  tabs: { key: string; label: string }[];
  tabContents: { [key: string]: TabContent };
  backgroundColor?: string;
}

export default function MedicineInfoSection({
  title,
  description,
  tabs,
  tabContents,
  backgroundColor = "bg-[#F7F7F6]"
}: MedicineInfoSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || '');
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  // Reset expanded FAQ when tab changes
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
    setExpandedFAQIndex(null);
  };

  const renderDosageTimeline = (steps: DosageStep[]) => {
    return (
      <div className="space-y-6">
        {/* Single image showing the complete dosage timeline */}
        <div className="flex justify-center mb-6">
          <Image
            src="/weight_management/weight-loss-dosage-mounjaro.webp"
            alt="Mounjaro dosage timeline"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
        
        {/* Text labels below the image */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex-1">
              {step.badge && (
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                  {step.badge}
                </div>
              )}
              <p className="text-sm font-bold text-black mb-1">{step.period}</p>
              <p className="text-lg font-bold text-black">{step.dose}</p>
              {step.description && (
                <p className="text-xs text-gray-600 mt-1">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDosageList = (steps: DosageStep[]) => {
    return (
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <span className="font-medium text-gray-900">{step.period}</span>
            <span className="text-lg font-bold text-black">{step.dose}</span>
          </div>
        ))}
      </div>
    );
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
  };

  const renderFAQs = (faqs: FAQ[], showAnswers: boolean = false) => {
    return (
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left p-4 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-black pr-4">{faq.question}</span>
              <svg 
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  expandedFAQIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedFAQIndex === index && faq.answer && (
              <div className="px-4 pb-4 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-200 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const activeContent = tabContents[activeTab];

  return (
    <div className={`${backgroundColor} p-8 rounded-2xl`}>
      {/* Header with title */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          {title}
        </h2>
        
        {/* Grid layout: Description on left, Tabs on right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Left - Description (takes 2 columns) */}
          <div className="md:col-span-2">
            <p className="text-gray-600 text-base">
              {description}
            </p>
          </div>
          
          {/* Right - Medicine Tabs (takes 1 column) */}
          <div className="flex justify-end">
            <div className="flex bg-gray-200 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? 'bg-gray-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeContent && (
        <div className="space-y-8">
          {/* Top Row - Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left - Dosage Information */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">
                {activeContent.dosageTitle}
              </h3>
              
              {activeContent.showImage ? (
                <div className="space-y-4">
                  {/* Medication dosage image */}
                  <div className="w-full h-48 bg-white rounded-lg overflow-hidden mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={activeContent.imageAlt?.toLowerCase().includes('finasteride') ? '/hair_loss/finasteride-dosage.png' : '/ed_treatment/sildenafil-dosage3.webp'}
                        alt={activeContent.imageAlt || "Medication dosage information"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  
                  {/* Instructions */}
                  {activeContent.instructions && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-black mb-3">{activeContent.dosageSteps?.[0]?.period || "Instructions"}</h4>
                      {activeContent.instructions.map((instruction, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">{instruction}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : activeContent.dosageSteps ? (
                activeContent.dosageSteps[0]?.isMultiple || activeContent.dosageSteps.some(step => step.badge) ? 
                  renderDosageTimeline(activeContent.dosageSteps) : 
                  renderDosageList(activeContent.dosageSteps)
              ) : null}

              {activeContent.note && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> {activeContent.note}
                  </p>
                </div>
              )}
            </div>

            {/* Right - FAQs */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">
                {activeContent.faqTitle}
              </h3>
              
              {renderFAQs(activeContent.faqs, activeContent.faqs.some(faq => faq.answer))}
            </div>
          </div>

          {/* Bottom Row - Comparison Table (if enabled) */}
          {activeContent.showComparison && activeContent.comparisonTitle && activeContent.comparisonHeaders && activeContent.comparisonRows && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">
                {activeContent.comparisonTitle}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                      {activeContent.comparisonHeaders.map((header, index) => (
                        <th key={index} className={`text-center py-3 px-4 font-semibold ${index === 0 ? 'text-purple-600' : 'text-blue-600'}`}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {activeContent.comparisonRows.map((row, index) => (
                      <tr key={index}>
                        <td className="py-3 px-4 font-medium text-gray-900">{row.feature}</td>
                        {row.values.map((value, valueIndex) => (
                          <td key={valueIndex} className="py-3 px-4 text-center text-gray-700">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 