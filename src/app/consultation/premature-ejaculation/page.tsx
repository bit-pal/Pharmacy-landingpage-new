'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function PrematureEjaculationConsultationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    additionalInfo: string;
    isAge18to64Male: string;
    ejaculationTiming: string;
    ejaculationDuration: string;
    causesDistress: string;
    issueDuration: string;
    advisedNotIntercourse: string;
    drinks: string;
    hadAllergicReaction: string;
    takingMedication: string;
    hadConditions: string;
    otherRelevantInfo: string;
    consent: boolean | undefined;
    acknowledgeTerms: boolean;
  }>({
    additionalInfo: '',
    isAge18to64Male: '',
    ejaculationTiming: '',
    ejaculationDuration: '',
    causesDistress: '',
    issueDuration: '',
    advisedNotIntercourse: '',
    drinks: 'no',
    hadAllergicReaction: '',
    takingMedication: '',
    hadConditions: '',
    otherRelevantInfo: '',
    consent: undefined,
    acknowledgeTerms: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Navigate to treatment page
    router.push('/consultation/premature-ejaculation/treatment');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Success Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="mx-auto max-w-screen-lg px-4 py-3">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-medium text-sm">Starting consultation for the treatment.</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="flex justify-between items-center">
            {/* Step 1 - Active */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Medical Questions</span>
            </div>

            {/* Connector Line - Inactive */}
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

            {/* Connector Line - Inactive */}
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
      <div className="mx-auto max-w-screen-lg px-4 py-8">
        {/* Green Header Section */}
        <div className="bg-green-600 rounded-lg p-8 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Order Premature Ejaculation treatment
              </h1>
              <p className="text-base mb-2">
                Please fill out as much detail as possible on the questionnaire so that we can offer treatment safely.
              </p>
              <p className="text-base mb-2">
                If you have any questions please contact us on <strong>phone number</strong> or{' '}
                <strong>example mail</strong>.
              </p>
              <p className="text-base">
                After the medical questions, you can let us know which treatment option you would prefer and our team will check that this is the best option.
              </p>
            </div>
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
        <div className="bg-gray-600 text-white rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>You are logged in as Akio Ito</strong>
          </p>
          <p className="text-sm mt-1">
            <strong>DISCLAIMER:</strong> The below questions have been automatically completed based on your previous responses.
            If there have been any changes to your circumstances since your last prescription, please amend the question accordingly.
            It is important that you complete this questionnaire fully in order for us to safely prescribe.
          </p>
        </div>

        {/* Ordered Before Banner */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-800">
            Ordered this treatment before? Click below to login and fill in the questionnaire automatically. Please answer any additional questions our prescriber asks.
          </p>
        </div>

        {/* Question Cards */}
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

              {/* Conditional Message - Inline for No */}
              {formData.additionalInfo === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medicine.</p>
                </div>
              )}
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.additionalInfo === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details..."
                />
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you male and between the ages of 18-64?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('isAge18to64Male', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isAge18to64Male === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isAge18to64Male === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('isAge18to64Male', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isAge18to64Male === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isAge18to64Male === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for Yes (Green Success) */}
              {formData.isAge18to64Male === 'yes' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}

              {/* Conditional Message - Inline for No (Red Error) */}
              {formData.isAge18to64Male === 'no' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-800 font-medium">This medicine is only suitable for use in men aged 18-64.</p>
                </div>
              )}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Following commencement of sexual activity, do you ejaculate:
            </h3>
            <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1">
              <li>before you mean to?</li>
              <li>with minimal sexual stimulation?</li>
              <li>and within two minutes?</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('ejaculationTiming', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.ejaculationTiming === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.ejaculationTiming === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('ejaculationTiming', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.ejaculationTiming === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.ejaculationTiming === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              How long does it usually take you to ejaculate when you have sex?
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleChange('ejaculationDuration', 'under-two')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.ejaculationDuration === 'under-two'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Under two minutes
              </button>
              <button
                onClick={() => handleChange('ejaculationDuration', 'two-seven')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.ejaculationDuration === 'two-seven'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Two to seven minutes
              </button>
              <button
                onClick={() => handleChange('ejaculationDuration', 'longer-seven')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.ejaculationDuration === 'longer-seven'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Longer than seven minutes
              </button>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Would you say premature ejaculation causes you distress and/or interpersonal difficulty?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('causesDistress', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.causesDistress === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.causesDistress === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('causesDistress', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.causesDistress === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.causesDistress === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>
          </div>

          {/* Question 6 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              How long have you been having issues with premature ejaculation?
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleChange('issueDuration', 'less-six')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.issueDuration === 'less-six'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Less than six months
              </button>
              <button
                onClick={() => handleChange('issueDuration', 'longer-six')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.issueDuration === 'longer-six'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Longer than six months
              </button>
            </div>
          </div>

          {/* Question 7 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever been advised by a doctor not to have intercourse for medical reasons?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('advisedNotIntercourse', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.advisedNotIntercourse === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.advisedNotIntercourse === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('advisedNotIntercourse', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.advisedNotIntercourse === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.advisedNotIntercourse === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>
          </div>

          {/* Question 8 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you drink?
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleChange('drinks', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.drinks === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.drinks === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
              <button
                onClick={() => handleChange('drinks', 'less-21')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.drinks === 'less-21'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Less than 21 units per week
              </button>
              <button
                onClick={() => handleChange('drinks', 'more-21')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.drinks === 'more-21'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                More than 21 units per week
              </button>
            </div>
          </div>

          {/* Question 9 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever had an allergic reaction or experienced severe side effects from taking Priligy or other medication such as SSRI antidepressant medication?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hadAllergicReaction', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadAllergicReaction === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadAllergicReaction === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hadAllergicReaction', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadAllergicReaction === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadAllergicReaction === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>
          </div>

          {/* Question 10 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you taking ANY medication including over the counter medication, herbal medication or recreational drugs? (Or have you just finished a course of medication in the last two months?)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('takingMedication', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingMedication === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingMedication === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('takingMedication', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.takingMedication === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.takingMedication === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for No (Green Success) */}
              {formData.takingMedication === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.takingMedication === 'yes' && (
              <div className="mt-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800">
                    You may still be eligible for treatment, please provide details of ANY medication you are taking for our doctor to review. Specific medicines which interact can include antidepressants, antifungal medication, recreational drugs such as ketamine or HIV medication. For a full list of interactions, please see the information leaflet or contact us in the pharmacy to discuss.
                  </p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details of your medications..."
                />
              </div>
            )}
          </div>

          {/* Question 11 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever suffered from any of the following?
            </h3>
            <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1">
              <li>Prostate problems or previous prostate surgery</li>
              <li>Any mental health problems such as panic attacks, suicidal thoughts, bipolar disorder, depression or schizophrenia</li>
              <li>Liver or kidney problems</li>
              <li>Heart problems including severe heart failure, heart attacks, unstable angina, chest pain or irregular heart beats</li>
              <li>Strokes or any bleeding or clotting disorder</li>
              <li>Glaucoma (or at risk of glaucoma)</li>
              <li>Epilepsy</li>
              <li>Glucose- galactose malabsorption, lapp lactase deficiency or glucose intolerance</li>
              <li>LOW blood pressure (or history or falls or collapses)</li>
              <li>Any condition which affects the shape of the penis such as cavernosal fibrosis, angulation or Peyronie's disease</li>
              <li>Pain in your genitals when you ejaculate or pass urine</li>
              <li>History of migraines or severe headaches</li>
              <li>Serious brain injury</li>
              <li>Stomach or duodenal ulcers</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hadConditions', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadConditions === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadConditions === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hadConditions', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hadConditions === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hadConditions === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for Yes (Yellow Warning) */}
              {formData.hadConditions === 'yes' && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">Please provide further details.</p>
                </div>
              )}
            </div>

            {/* Textarea for Yes */}
            {formData.hadConditions === 'yes' && (
              <div className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details..."
                />
              </div>
            )}
          </div>

          {/* Question 12 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Is there any other relevant medical information the prescriber should know in order to prescribe this medication to you safely?
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

              {/* Conditional Message - Inline for No (Green Success) */}
              {formData.otherRelevantInfo === 'no' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}
            </div>

            {/* Yellow warning message and textarea for Yes */}
            {formData.otherRelevantInfo === 'yes' && (
              <div className="mt-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-yellow-800 font-medium">We may still be able to prescribe this medication. Please provide details for our prescribers to review.</p>
                </div>
                <textarea
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please provide details..."
                />
              </div>
            )}
          </div>

          {/* Consent Section */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Please consent to the following:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-6">
              <li>I agree to be treated by the prescribers and healthcare professionals at Assured Pharmacy for my medical condition.</li>
              <li>I will contact a medical professional if I have any questions or experience any unusual side effects from my treatment. I understand that I should inform my own GP that I am taking this treatment so they can see a full and accurate picture of my health.</li>
              <li>I have read the patient information leaflet and understand the risks and benefits of taking this medicine. I will contact a healthcare professional if I have any questions.</li>
              <li>I have answered all of the above questions accurately and confirm that the medication is for my personal use only.</li>
              <li>We collect information about your health to make a medical diagnosis and prescribe medicines safely. Under the GDPR this type of data is classed as sensitive and therefore we take further precautions when collecting and processing it. By consenting to this notice, you are giving us permission to process your health data for the purposes of prescribing medicine.</li>
              <li>I will have my blood pressure checked regularly as I understand that low blood pressure can cause fainting or collapsing when taking Priligy.</li>
              <li>I understand that Priligy can cause dizziness and confirm that I will not operate machinery or drive after taking this medication.</li>
              <li>I confirm that I will not take tablets for erectile dysfunction 24 hours of taking Priligy.</li>
              <li>I confirm that I will not drink alcohol while taking this medication.</li>
              <li>I confirm I will not continue to use Priligy for longer than 6 months without a medical review of my condition.</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('consent', true)}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.consent === true
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.consent === true && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('consent', false)}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.consent === false
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.consent === false && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Message - Inline for Yes (Green Success) */}
              {formData.consent === true && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-800 font-medium">We can prescribe you this medication.</p>
                </div>
              )}

              {/* Conditional Message - Inline for No (Red Error) */}
              {formData.consent === false && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-800 font-medium">You must consent in order to proceed.</p>
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
      </div>

      {/* Footer Copyright */}
      <div className="border-t border-gray-200 py-8 mt-12">
        <div className="mx-auto max-w-screen-lg px-4">
          <p className="text-center text-sm text-gray-900 font-medium">
            Copyright MediTrue 2025
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

