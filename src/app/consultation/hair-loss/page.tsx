'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function HairLossConsultationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    additionalInfo: string;
    isOver18Male: string;
    hadMedicationBefore: string;
    hairLossType: string;
    hairLossPattern: string;
    takingForOtherCondition: string;
    hasAllergies: string;
    hasKidneyLiverProblems: string;
    otherExplanation: string;
    prostateCancer: string;
    takingOtherMedication: string;
    otherRelevantInfo: string;
    acknowledgeConsent: boolean | undefined;
    acknowledgeTerms: boolean;
  }>({
    additionalInfo: '',
    isOver18Male: 'yes',
    hadMedicationBefore: '',
    hairLossType: '',
    hairLossPattern: '',
    takingForOtherCondition: '',
    hasAllergies: '',
    hasKidneyLiverProblems: '',
    otherExplanation: '',
    prostateCancer: '',
    takingOtherMedication: '',
    otherRelevantInfo: '',
    acknowledgeConsent: undefined,
    acknowledgeTerms: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultipleChoice = (field: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[field as keyof typeof formData] as string[];
      const isSelected = currentValues.includes(value);
      return {
        ...prev,
        [field]: isSelected
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Navigate to treatment page
    router.push('/consultation/hair-loss/treatment');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Success Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="mx-auto max-w-screen-lg px-4 py-3">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-green-800 font-medium text-sm">Starting consultation for the treatment.</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-screen-lg px-4 py-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {/* Step 1 - Active */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Medical Questions</span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 h-0.5 bg-gray-300 mx-4 mb-6"></div>

            {/* Step 2 - Inactive */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-500">Treatment & Prices</span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 h-0.5 bg-gray-300 mx-4 mb-6"></div>

            {/* Step 3 - Inactive */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-500">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Green Header Section */}
        <div className="bg-green-600 rounded-lg p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1 text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Order Hair Loss treatment</h1>
              <p className="mb-4">
                Please fill out as much detail as possible on the questionnaire so that we can offer treatment safely.
              </p>
              <p className="mb-2">
                If you have any questions please contact us on <strong>phone number</strong> or{' '}
                <a href="mailto:example mail" className="underline">example mail</a>.
              </p>
              <p className="text-sm">
                After the medical questions, you can let us know which treatment option you would prefer and our team will check that this is the best option.
              </p>
            </div>

            {/* Doctor Card */}
            <div className="bg-white rounded-lg p-6 text-center flex-shrink-0">
              <Image
                // src="/pe_treatment/shirin-jazayeri-t.webp"
                src="/"
                alt="doctor image"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 mb-1">Doctor's name</h3>
              <p className="text-sm text-gray-600">Doctor's description</p>
              <p className="text-xs text-gray-500 mt-2">Doctor's position</p>
            </div>
          </div>
        </div>

        {/* User Info Banner */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-8">
          <p className="text-gray-800 mb-4">
            Ordered this treatment before? Click below to login and fill in the questionnaire automatically. Please answer any additional questions our prescriber asks.
          </p>
          <div className="bg-gray-700 text-white rounded-lg p-6">
            <p className="mb-2">
              <strong>You are logged in as Akio Ito</strong>
            </p>
            <p>
              <strong>DISCLAIMER</strong>: The below questions have been automatically completed based on your previous responses. If there have been any changes to your circumstances since your last prescription, please amend the question accordingly. It is important that you complete this questionnaire fully in order for us to safely prescribe.
            </p>
          </div>
        </div>

        {/* Questionnaire Form */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Is there any additional information since we last prescribed this medication for you that you think our prescribers should know, before we provide you with a repeat prescription?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('additionalInfo', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.additionalInfo === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.additionalInfo === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('additionalInfo', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.additionalInfo === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.additionalInfo === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline */}
              {formData.additionalInfo === 'yes' && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">Please provide details for our prescribers to review.</p>
                </div>
              )}
              {formData.additionalInfo === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe this medication to you.</p>
                </div>
              )}
            </div>

            {/* Textarea for additional details - appears below when Yes is selected */}
            {formData.additionalInfo === 'yes' && (
              <div className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter additional information..."
                />
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you male and over the age of 18?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('isOver18Male', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isOver18Male === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isOver18Male === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('isOver18Male', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isOver18Male === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isOver18Male === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline */}
              {formData.isOver18Male === 'yes' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe this medication to you.</p>
                </div>
              )}
              {formData.isOver18Male === 'no' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-800 font-medium">This medication is not suitable for you.</p>
                </div>
              )}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you had this medication before?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hadMedicationBefore', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadMedicationBefore === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadMedicationBefore === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hadMedicationBefore', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadMedicationBefore === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadMedicationBefore === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline */}
              {formData.hadMedicationBefore === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe this medication for you.</p>
                </div>
              )}
            </div>

            {/* Blue info message and textarea for Yes */}
            {formData.hadMedicationBefore === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-blue-800 font-medium">We can prescribe this medication for you. Please provide further information regarding any previous side effects and how long you have taken it for?</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter information about previous side effects and duration..."
                />
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Has your hair loss come about gradually or suddenly?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hairLossType', 'gradually')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hairLossType === 'gradually'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossType === 'gradually' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Gradually
                </div>
              </button>
              <button
                onClick={() => handleChange('hairLossType', 'suddenly')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hairLossType === 'suddenly'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossType === 'suddenly' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Suddenly
                </div>
              </button>
            </div>
          </div>

          {/* Question 5 - Single Choice */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Describe your pattern of hair loss?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleChange('hairLossPattern', 'crown')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors text-left ${formData.hairLossPattern === 'crown'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossPattern === 'crown' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  From the crown of my head
                </div>
              </button>
              <button
                onClick={() => handleChange('hairLossPattern', 'crown-temples')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors text-left ${formData.hairLossPattern === 'crown-temples'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossPattern === 'crown-temples' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  From the crown of my head and my temples
                </div>
              </button>
              <button
                onClick={() => handleChange('hairLossPattern', 'temples')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors text-left ${formData.hairLossPattern === 'temples'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossPattern === 'temples' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  From my temples only
                </div>
              </button>
              <button
                onClick={() => handleChange('hairLossPattern', 'patches')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors text-left ${formData.hairLossPattern === 'patches'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hairLossPattern === 'patches' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  In patches all over my head
                </div>
              </button>
            </div>
          </div>

          {/* Question 6 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you already taking Propecia (finasteride), Proscar or Avodart (dutasteride) for a condition other than hair loss?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('takingForOtherCondition', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingForOtherCondition === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingForOtherCondition === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('takingForOtherCondition', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingForOtherCondition === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingForOtherCondition === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline */}
              {formData.takingForOtherCondition === 'yes' && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">Please list the condition here</p>
                </div>
              )}
            </div>

            {/* Textarea for condition details - appears below when Yes is selected */}
            {formData.takingForOtherCondition === 'yes' && (
              <div className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please list the condition..."
                />
              </div>
            )}
          </div>

          {/* Question 7 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you suffer with allergies?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasAllergies', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasAllergies === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasAllergies === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasAllergies', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasAllergies === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasAllergies === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for No */}
              {formData.hasAllergies === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.hasAllergies === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">Please provide details for our prescribers to review. Include whether you have taken Propecia before and whether you were allergic to it?</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide allergy details..."
                />
              </div>
            )}
          </div>

          {/* Question 8 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you have any kidney or liver problems?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasKidneyLiverProblems', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasKidneyLiverProblems === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasKidneyLiverProblems === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasKidneyLiverProblems', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasKidneyLiverProblems === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasKidneyLiverProblems === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for No */}
              {formData.hasKidneyLiverProblems === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.hasKidneyLiverProblems === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">We may still be able to prescribe you this medication. Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details about kidney or liver problems..."
                />
              </div>
            )}
          </div>

          {/* Question 9 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Could there be any other explanation for your hair loss including stress, chemotherapy or poor diet?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('otherExplanation', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherExplanation === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherExplanation === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('otherExplanation', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherExplanation === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherExplanation === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.otherExplanation === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">We may still be able to prescribe you this medication. Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details about other possible causes..."
                />
              </div>
            )}
          </div>

          {/* Question 10 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever been diagnosed with prostate cancer or male breast cancer?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              (Note that finasteride can affect the results of a test for prostate cancer called a PSA test. If you ever require this test it is important to tell the doctor you are taking finasteride.)
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('prostateCancer', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.prostateCancer === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.prostateCancer === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('prostateCancer', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.prostateCancer === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.prostateCancer === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.prostateCancer === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">We may still be able to prescribe you this medication. Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details about your diagnosis..."
                />
              </div>
            )}
          </div>

          {/* Question 11 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you currently taking ANY other medication including over the counter, herbal medication or recreational drugs?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('takingOtherMedication', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingOtherMedication === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingOtherMedication === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('takingOtherMedication', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingOtherMedication === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingOtherMedication === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for Yes */}
              {formData.takingOtherMedication === 'yes' && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">You may still be eligible for treatment, please provide details for our prescribers to review</p>
                </div>
              )}
            </div>

            {/* Textarea for Yes */}
            {formData.takingOtherMedication === 'yes' && (
              <div className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details about other medications..."
                />
              </div>
            )}
          </div>

          {/* Question 12 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Is there any other relevant information our prescribers needs to know in order to prescribe this medication safely to you?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('otherRelevantInfo', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherRelevantInfo === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherRelevantInfo === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('otherRelevantInfo', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherRelevantInfo === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherRelevantInfo === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.otherRelevantInfo === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">We may still be able to prescribe you this medication. Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide any other relevant information..."
                />
              </div>
            )}
          </div>

          {/* Consent Section */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Please consent to the following?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-6">
              <li>I agree to be treated by the prescribers and healthcare professionals at Assured Pharmacy for my medical condition.</li>
              <li>I will contact a medical professional if I have any questions or experience any unusual side effects from my treatment. I understand that I should inform my own GP that I am taking this treatment so they can see a full and accurate picture of my health.</li>
              <li>I have read the patient information leaflet and understand the risks and benefits of taking this medicine.</li>
              <li>I have answered all of the above questions accurately and confirm that the medication is for my personal use only.</li>
              <li>I understand that finasteride should not be taken by women and in pregnancy, it may harm the unborn foetus. Also, women of childbearing age should not handle crushed or damaged finasteride tablets and a condom should be used during sexual intercourse.</li>
              <li>We collect information about your health to make a medical diagnosis and prescribe treatment safely. Under the GDPR this type of data is classed as sensitive and therefore we take further precautions when collecting and processing it. By consenting to this notice, you are giving us permission to process your health data for the purposes of prescribing medicine.</li>
              <li>Please be aware that Finasteride can affect the results of a PSA test for prostate cancer. If you ever require a PSA test you must inform the doctor you are taking Finasteride</li>
              <li>I understand there have been rare cases of patients developing depression whilst on this medication. If I develop depression, I will stop taking this medicine immediately and inform a healthcare professional.</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('acknowledgeConsent', true)}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.acknowledgeConsent === true
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.acknowledgeConsent === true && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('acknowledgeConsent', false)}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.acknowledgeConsent === false
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.acknowledgeConsent === false && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for Yes (Green Success) */}
              {formData.acknowledgeConsent === true && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}

              {/* Conditional Message - Inline for No (Red Error) */}
              {formData.acknowledgeConsent === false && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-800 font-medium">You must consent in order to proceed</p>
                </div>
              )}
            </div>
          </div>

          {/* GP Letter Note */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              You can download a GP letter from the My Account section of our website. This is to keep your GP up to date with any treatment received from us. If you would like us to send a letter in the post to your GP as well, just message us with your GP details. Please tick to indicate that you understand.
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-700 mb-4">
              I&apos;ve read and accept the{' '}
              <a href="/terms" className="text-blue-600 underline">terms & conditions</a> and{' '}
              <a href="/privacy" className="text-blue-600 underline">privacy policy</a>
            </p>
            <button
              onClick={() => handleChange('acknowledgeTerms', !formData.acknowledgeTerms)}
              className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.acknowledgeTerms
                ? 'bg-green-100 border-green-600 text-green-700'
                : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center">
                {formData.acknowledgeTerms && (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                Acknowledge
              </div>
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              Confirm and Proceed
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">Copyright MediTrue 2025</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

