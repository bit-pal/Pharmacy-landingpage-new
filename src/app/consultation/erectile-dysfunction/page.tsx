'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ErectileDysfunctionConsultationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    additionalInfo: string;
    isOver18Male: string;
    hasErectileDysfunction: string;
    advisedNotToHaveIntercourse: string;
    hasAllergicReaction: string;
    isOverweight: string;
    smokes: string;
    drinksAlcohol: string;
    takingOtherMedication: string;
    hasMedicalConditions: string;
    hasFollowingConditions: string;
    otherMedicalInfo: string;
    acknowledgeConsent: boolean | undefined;
    acknowledgeTerms: boolean;
  }>({
    additionalInfo: 'no',
    isOver18Male: 'yes',
    hasErectileDysfunction: 'yes',
    advisedNotToHaveIntercourse: 'no',
    hasAllergicReaction: 'no',
    isOverweight: 'no',
    smokes: 'yes',
    drinksAlcohol: 'yes',
    takingOtherMedication: 'no',
    hasMedicalConditions: 'no',
    hasFollowingConditions: 'no',
    otherMedicalInfo: 'no',
    acknowledgeConsent: undefined,
    acknowledgeTerms: false
  });

  const [weightHeightUnit, setWeightHeightUnit] = useState<'metric' | 'imperial'>('metric');

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Navigate to treatment page
    router.push('/consultation/erectile-dysfunction/treatment');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Success Banner */}
      <div className="bg-green-50 border border-green-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-green-800 font-medium">Starting consultation for the treatment.</span>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Order treatment for erectile dysfunction</h1>
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
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-8">
          <p className="text-gray-800 mb-4">
            Ordered this treatment before? Click below to login and fill in the questionnaire automatically. Please answer any additional questions our prescriber asks.
          </p>
          <div className="bg-gray-700 text-white rounded-lg p-6">
            <p className="mb-2">
              <strong>You are logged in as Akio Ito</strong>
            </p>
            <p className="mb-4">
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

              {/* Conditional Message */}
              {formData.additionalInfo === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}

              {formData.additionalInfo === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700 font-medium">Please provide details for our prescribers to review.</span>
                </div>
              )}
            </div>

            {/* Text Area for Yes */}
            {formData.additionalInfo === 'yes' && (
              <div className="mt-4">
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details..."
                ></textarea>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
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

              {/* Conditional Messages */}
              {formData.isOver18Male === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe this medication to you.</span>
                </div>
              )}

              {formData.isOver18Male === 'no' && (
                <div className="flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-red-700 font-medium">This medication is not suitable for you.</span>
                </div>
              )}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Is this medication being used by you to treat erectile dysfunction and do you have difficulty achieving or maintaining an erection?
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Erectile Dysfunction (ED) is where a man cannot get or maintain an erection when sexually aroused and this affects his sexual performance and this problem is persistent.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasErectileDysfunction', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasErectileDysfunction === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasErectileDysfunction === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasErectileDysfunction', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasErectileDysfunction === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasErectileDysfunction === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {/* Conditional Messages */}
              {formData.hasErectileDysfunction === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.hasErectileDysfunction === 'no' && (
              <div className="mt-4 flex items-start px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
                <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-red-700">This medicine is only licensed for use in men with erectile dysfunction. It does not appear you have ED.</span>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever been advised by your doctor not to have intercourse for medical reasons?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('advisedNotToHaveIntercourse', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.advisedNotToHaveIntercourse === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.advisedNotToHaveIntercourse === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('advisedNotToHaveIntercourse', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.advisedNotToHaveIntercourse === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.advisedNotToHaveIntercourse === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.advisedNotToHaveIntercourse === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700 font-medium">Please briefly explain why your Doctor has advised you not to have intercourse</span>
                </div>
              )}
            </div>

            {formData.advisedNotToHaveIntercourse === 'yes' && (
              <div className="mt-4">
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please explain..."
                ></textarea>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Have you ever had an allergic reaction to erectile dysfunction medication? Or any other allergies?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasAllergicReaction', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasAllergicReaction === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasAllergicReaction === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasAllergicReaction', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasAllergicReaction === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasAllergicReaction === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.hasAllergicReaction === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medication.</span>
                </div>
              )}
            </div>

            {formData.hasAllergicReaction === 'yes' && (
              <>
                <div className="mt-4 flex items-start px-4 py-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700">Please provide full details of allergic reactions. Please specify if you have taken erectile dysfunction medication previously.</span>
                </div>
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your allergic reactions..."
                  ></textarea>
                </div>
              </>
            )}
          </div>

          {/* Question 6 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you overweight?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('isOverweight', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isOverweight === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isOverweight === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('isOverweight', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.isOverweight === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.isOverweight === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.isOverweight === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.isOverweight === 'yes' && (
              <>
                <div className="mt-4 flex items-start px-4 py-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700">We can still prescribe you this medicine. Please provide details of your weight and height for our prescribers to review.</span>
                </div>

                <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                  {/* Unit Toggle */}
                  <div className="flex gap-3 mb-6">
                    <button
                      onClick={() => setWeightHeightUnit('metric')}
                      className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${weightHeightUnit === 'metric'
                        ? 'bg-green-100 border-green-600 text-green-700'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center">
                        {weightHeightUnit === 'metric' && (
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        Metric
                      </div>
                    </button>
                    <button
                      onClick={() => setWeightHeightUnit('imperial')}
                      className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${weightHeightUnit === 'imperial'
                        ? 'bg-green-100 border-green-600 text-green-700'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center">
                        {weightHeightUnit === 'imperial' && (
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        Imperial
                      </div>
                    </button>
                  </div>

                  {/* Metric Units */}
                  {weightHeightUnit === 'metric' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <label className="font-medium text-gray-700 w-20">Height</label>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">cm</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="font-medium text-gray-700 w-20">Weight</label>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">kg</span>
                      </div>
                    </div>
                  )}

                  {/* Imperial Units */}
                  {weightHeightUnit === 'imperial' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <label className="font-medium text-gray-700 w-20">Height</label>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">ft</span>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">in</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="font-medium text-gray-700 w-20">Weight</label>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">st</span>
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                        <span className="text-gray-600 w-8">lbs</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Question 7 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you smoke?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('smokes', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.smokes === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.smokes === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('smokes', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.smokes === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.smokes === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.smokes === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.smokes === 'yes' && (
              <div className="mt-4 flex items-start px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-blue-700">We can still prescribe you this medicine but we advise you to stop smoking as smoking narrows the arteries that supply the penis with blood and can worsen erection difficulties.</span>
              </div>
            )}
          </div>

          {/* Question 8 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you drink alcohol?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('drinksAlcohol', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.drinksAlcohol === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.drinksAlcohol === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('drinksAlcohol', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.drinksAlcohol === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.drinksAlcohol === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.drinksAlcohol === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.drinksAlcohol === 'yes' && (
              <div className="mt-4 flex items-start px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-blue-700">We can still prescribe you this medicine, however please be aware that heavy drinking can lead to erection difficulties and to get the maximum benefit from the medicine, we advise that you do not drink alcohol before taking it. It is recommended not to take alcohol and this medication at the same time as the combination can lead to dizziness.</span>
              </div>
            )}
          </div>

          {/* Question 9 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Are you taking ANY other medication? Or have you just finished a course of medication? This includes over the counter, herbal medication, recreational drugs, and creams, sprays or lotions.
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

              {formData.takingOtherMedication === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.takingOtherMedication === 'yes' && (
              <>
                <div className="mt-4 flex items-start px-4 py-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700">We may still be able to prescribe you this medication. Please provide FULL details for our prescribers to review so we can prescribe this safely to you. Medicines which can cause particular interactions include antibiotics, antifungals, antiepileptics, alpha blockers (for blood pressure) and nitrates (such as Imdur tablets, GTN spray or &apos;poppers&apos;).</span>
                </div>
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please list all medications you are taking..."
                  ></textarea>
                </div>
              </>
            )}
          </div>

          {/* Question 10 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you have diabetes, high blood pressure, high cholesterol, a history of stroke, prostate problems, liver or kidney disease or mental health problems?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasMedicalConditions', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasMedicalConditions === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasMedicalConditions === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasMedicalConditions', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasMedicalConditions === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasMedicalConditions === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>
            </div>

            {formData.hasMedicalConditions === 'yes' && (
              <>
                <div className="mt-4 flex items-start px-4 py-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700">We may still be able to prescribe this medication for you but our prescribers needs to know more in order to prescribe safely. Please provide FULL details for our doctor to review. Please be aware that sildenafil can cause dizziness and uncontrolled blood pressure combined with sildenafil can lead to fainting and an increased risk of falls.</span>
                </div>
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your medical conditions..."
                  ></textarea>
                </div>
              </>
            )}
          </div>

          {/* Question 11 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Do you have any of the following?
            </h3>
            <ul className="text-sm text-gray-600 space-y-2 mb-4 ml-6 list-disc">
              <li>Any heart problems including; heart failure, unstable angina, chest pain, irregular heart beats (arrhythmia e.g. atrial fibrillation or flutter, especially if you are taking medication to treat this e.g. beta blockers or anticoagulant e.g. warfarin), aortic stenosis or uncontrolled blood pressure</li>
              <li>A heart operation, heart attack or stroke (including a mini stroke) in the last 6 months</li>
              <li>A history of low blood pressure</li>
              <li>Difficulty walking at a fast pace for 5 minutes or more due to chest pain, calf pain or shortness of breath</li>
              <li>Any condition which affects the shape of the penis such as cavernosal fibrosis, angulation or Peyronie&apos;s disease</li>
              <li>Loss of vision due to NAION (lack of oxygen to the optic nerve) or eye conditions including retinitis pigmentosa, or temporal arteritis</li>
              <li>Blood conditions including sickle cell anaemia or haemophilia</li>
              <li>Leukaemia or multiple myeloma</li>
              <li>Galactose intolerance, lapp lactase deficiency or glucose-galactose malabsorption</li>
              <li>Active stomach ulcers</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('hasFollowingConditions', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasFollowingConditions === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasFollowingConditions === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('hasFollowingConditions', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.hasFollowingConditions === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.hasFollowingConditions === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.hasFollowingConditions === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700 font-medium">Please provide further details.</span>
                </div>
              )}

              {formData.hasFollowingConditions === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medication.</span>
                </div>
              )}
            </div>

            {formData.hasFollowingConditions === 'yes' && (
              <div className="mt-4">
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your conditions..."
                ></textarea>
              </div>
            )}
          </div>

          {/* Question 12 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Is there any other relevant medical information the prescribers should know in order to prescribe this medication to you safely?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleChange('otherMedicalInfo', 'yes')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherMedicalInfo === 'yes'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherMedicalInfo === 'yes' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleChange('otherMedicalInfo', 'no')}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${formData.otherMedicalInfo === 'no'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <div className="flex items-center">
                  {formData.otherMedicalInfo === 'no' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  No
                </div>
              </button>

              {formData.otherMedicalInfo === 'yes' && (
                <div className="flex items-center px-4 py-2 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-yellow-700 font-medium">Please provide full details for our prescriber to review.</span>
                </div>
              )}

              {formData.otherMedicalInfo === 'no' && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medicine.</span>
                </div>
              )}
            </div>

            {formData.otherMedicalInfo === 'yes' && (
              <div className="mt-4">
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide any other relevant medical information..."
                ></textarea>
              </div>
            )}
          </div>

          {/* Consent Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Do you consent to the following?
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I have answered all of the above questions truthfully and confirm that the medication is for my own personal use.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I have read the patient information leaflet and understand the risks and benefits of taking this medicine.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I understand I should not take more than the prescribed dose of this medication.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I understand that patients being treated for erectile dysfunction are recommended to have their blood pressure checked as well as tests for diabetes, cholesterol or hormone imbalances.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I understand I should inform my own GP that I am taking this medicine so they can see a full and accurate picture of my health.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Do not take any <strong>NITRATE</strong> medicines with erectile dysfunction medication. These are normally prescribed for heart issues. This would be very <strong>DANGEROUS</strong>, and includes recreational drugs like poppers or cocaine.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We collect information about your health to make a medical diagnosis and prescribe medicines safely. Under the GDPR this type of data is classed as sensitive and therefore we take further precautions when collecting and processing it. By consenting to this notice, you are giving us permission to process your health data for the purposes of prescribing medicine.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I agree to be treated by the prescribers and healthcare professionals at Assured Pharmacy for my medical condition.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I will contact a medical professional if I have any questions or experience any unusual side effects from my treatment.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I will not take grapefruit juice with this medication as it can increase the risks of side effects.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <strong>If I am ordering the Higher Strength I confirm I have tried the Lower Strength.</strong>
                </span>
              </li>
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

              {formData.acknowledgeConsent === true && (
                <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">We can prescribe you this medication.</span>
                </div>
              )}

              {formData.acknowledgeConsent === false && (
                <div className="flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-red-700 font-medium">You must consent in order to proceed.</span>
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-4">
                You can download a GP letter from the My Account section of our website. This is to keep your GP up to date with any treatment received from us. If you would like us to send a letter in the post to your GP as well, just message us with your GP details. Please tick to indicate that you understand.
              </p>
              <p className="mb-4">
                I&apos;ve read and accept the{' '}
                <a href="/terms" className="text-blue-600 underline">terms & conditions</a>
                {' '}and{' '}
                <a href="/privacy" className="text-blue-600 underline">privacy policy</a>
              </p>
              <button
                onClick={() => handleChange('acknowledgeTerms', !formData.acknowledgeTerms)}
                className={`px-6 py-2 border-2 rounded-lg font-medium transition-colors ${formData.acknowledgeTerms
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center"
            >
              Confirm and Proceed
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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