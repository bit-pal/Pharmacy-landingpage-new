import React from 'react';
import CallToActionSection from './CallToActionSection';
import ProcessTimelineSection from './ProcessTimelineSection';
import BeforePurchaseDetailsSection from './BeforePurchaseDetailsSection';
import AfterPurchaseDetailsSection from './AfterPurchaseDetailsSection';
import WeeklyInjectionSection from './WeeklyInjectionSection';

export default function HowItWorksSection() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ProcessTimelineSection />
        <BeforePurchaseDetailsSection />
      </div>

      {/* Additional Sections - After Purchase and Once Approved */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">

        {/* After Purchase Section */}
        <div>
          {/* After Purchase Image */}
          <div className="relative">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">After Purchase Image</div>
                <div className="text-sm">Woman with laptop and shopping bag</div>
              </div>
            </div>
            {/* Step number overlay */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
          </div>

          {/* After Purchase Details */}
          <div className="bg-white rounded-xl mt-6">
            <h3 className="text-xl font-bold text-black mb-6">
              After Purchase
            </h3>

            <div className="space-y-4">

              {/* Book Your 15 Minute Consultation */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Book Your 15 Minute Consultation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Schedule a phone and video call with a prescriber
                  </p>
                </div>
              </div>

              {/* Submit Required Photos */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Submit Required Photos
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provide two clear photos for review
                  </p>
                </div>
              </div>

              {/* Clinician Approval & Next-Day Delivery */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Clinician Approval & Next-Day Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Once approved it will ship on an agreed date
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Once Approved Section */}
        <div className="space-y-6">
          {/* Once Approved Image */}
          <div className="relative">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">Once Approved Image</div>
                <div className="text-sm">Thumbs up gesture</div>
              </div>
            </div>
            {/* Step number overlay */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
          </div>

          {/* Once Approved Details */}
          <div className="bg-white rounded-xl mt-6">
            <h3 className="text-xl font-bold text-black mb-6">
              Once Approved
            </h3>

            <div className="space-y-8">

              {/* Subscription Care */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Subscription Care
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatic shipment every 28 days, option to cancel/adjust any time. Free clinician appointments via dashboard
                  </p>
                </div>
              </div>

              {/* Ongoing Monitoring */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Ongoing Monitoring
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Check up every 3-6 months. Monthly weight submission to confirm safety and progress
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* About Weight Loss Injectables FAQ Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">

        {/* Left - Image */}
        <div className="bg-green-100 rounded-2xl p-8 flex items-center justify-center h-96">
          <div className="text-center text-gray-400">
            <div className="text-lg font-medium">Weight Loss Injectables</div>
            <div className="text-sm">Various medication packages and syringes</div>
          </div>
        </div>

        {/* Right - FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            About Weight Loss Injectables
          </h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">Is this really for weight loss?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">How often to take them?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">How effective are they?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">Are they painful?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">How soon will I see results?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny Needle, Big Results Section */}
      <div className="mt-16 bg-green-100 rounded-2xl p-8 md:p-12">
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
            <div className="w-full max-w-sm h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">Tiny Needle Image</div>
                <div className="text-sm">Close-up of small injection needle</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our 5-Point Safety Guarantee Section */}
      <div className="mt-2 bg-[#F5F5E7] rounded-2xl p-8 md:p-12">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our 5-Point Safety<br />Guarantee
          </h2>
          <div className="flex items-center space-x-4">
            {/* Pharmacy Badge */}
            <div className="bg-green-600 text-white px-3 py-2 rounded text-sm font-semibold">
              Online Pharmacy<br />1121967
            </div>
            {/* Trustpilot Badge */}
            {/* <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-bold text-black">Trustpilot</span>
            </div> */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Point 1 - GPHC and MHRA Regulated */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-black text-lg">GPHC and MHRA Regulated</h3>
            <p className="text-gray-600 text-sm">
              UK licensed and regulated by UK medical bodies
            </p>
          </div>

          {/* Point 2 - Certified UK Health Professionals */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-black text-lg">Certified UK Health Professionals</h3>
            <p className="text-gray-600 text-sm">
              Prescriptions reviewed by UK experts. Free consultations available
            </p>
          </div>

          {/* Point 3 - Authentic UK Medications */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-bold text-black text-lg">Authentic UK Medications</h3>
            <p className="text-gray-600 text-sm">
              Sourced from reputable suppliers, safety and quality-checked
            </p>
          </div>

          {/* Point 4 - Reliable UK Customer Support */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-black text-lg">Reliable UK Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Our services are available via phone, email, and live chat
            </p>
          </div>

          {/* Point 5 - Trusted by Thousands */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-bold text-black text-lg">Trusted by Thousands</h3>
            <p className="text-gray-600 text-sm">
              Nearly 15,000 positive and satisfied reviews
            </p>
          </div>
        </div>
      </div>

      {/* Trustpilot Reviews Section */}
      {/* <div className="mt-2">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">

            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-black">Excellent</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on 15,007 reviews</p>
              <div className="flex items-center space-x-1">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-bold text-black">Trustpilot</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-semibold text-black">They are a very professional company...</h4>
              <p className="text-sm text-gray-600">
                They are a very professional company always keep you updated and always receive...
              </p>
              <p className="text-xs text-gray-500">Amanda Thewlis, 11 September</p>
            </div>

            <div className="space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-semibold text-black">Excellent experience with Assured...</h4>
              <p className="text-sm text-gray-600">
                Excellent experience with Assured Pharmacy, customer care has been amazing. Car...
              </p>
              <p className="text-xs text-gray-500">Heidi, 25 August</p>
            </div>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">Showing our 4 & 5 star reviews</p>
          </div>
        </div>
      </div> */}

      {/* Final Call-to-Action Section */}
      <div className="mt-2 bg-gray-100 rounded-2xl p-4 md:p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-3xl font-bold text-black">
            Take the first step towards a healthier you today!
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Start Consultation
          </button>
        </div>
      </div>

      {/* Detailed Medicine Information Section */}
      <div className="mt-16 space-y-8 pl-4 bg-[#F7F7F6]">

        {/* Header with Medicine Tabs */}
        <div className="flex justify-between items-end mb-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Detailed Medicine Information
            </h2>
            <p className="text-gray-600 text-base max-w-2xl">
              Achieving a healthy weight can be a challenge but can bring with it great benefits to your health. You can start the online consultation below to see if you are eligible for our weight loss plan.
            </p>
          </div>

          {/* Medicine Tabs - Positioned bottom-right */}
          <div className="flex space-x-3 ml-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium text-sm">
              Mounjaro
            </button>
            <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium text-sm">
              Wegovy
            </button>
          </div>
        </div>

        {/* Main Content Grid - 3 Cards Layout */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Side - Dosage Information */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-6">
              How Often To Take Mounjaro
            </h3>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Month 1 */}
                <div className="text-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Initial
                  </div>

                  {/* Injection Pen Illustration */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      {/* Pen body */}
                      <div className="w-4 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full mx-auto"></div>
                      {/* Pen cap */}
                      <div className="w-3 h-8 bg-purple-600 rounded-full mx-auto -mt-2"></div>
                      {/* Pen tip */}
                      <div className="w-1 h-3 bg-gray-600 rounded-full mx-auto"></div>
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-black">Month 1</div>
                    <div className="text-gray-600 font-semibold">0.25 mg</div>
                    <div className="text-gray-500 text-xs">each week</div>
                  </div>
                </div>

                {/* Month 2-5 */}
                <div className="text-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Build-up
                  </div>

                  {/* Multiple Injection Pens */}
                  <div className="mb-4 flex justify-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="relative">
                        <div className="w-3 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                        <div className="w-2 h-6 bg-purple-600 rounded-full mx-auto -mt-1"></div>
                        <div className="w-0.5 h-2 bg-gray-600 rounded-full mx-auto"></div>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-black">Month 2 to 5</div>
                    <div className="text-gray-600 font-semibold">5 - 12.5 mg</div>
                    <div className="text-gray-500 text-xs">each week</div>
                  </div>
                </div>

                {/* Month 6+ */}
                <div className="text-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Full
                  </div>

                  {/* Injection Pen Illustration */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <div className="w-4 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full mx-auto"></div>
                      <div className="w-3 h-8 bg-purple-600 rounded-full mx-auto -mt-2"></div>
                      <div className="w-1 h-3 bg-gray-600 rounded-full mx-auto"></div>
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-black">Month 6</div>
                    <div className="text-gray-600 font-semibold">15 mg</div>
                    <div className="text-gray-500 text-xs">each week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6">
              Mounjaro FAQs
            </h3>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-black text-base">How fast will I see results?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-black text-base">Why choose Mounjaro over Wegovy?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-black text-base">How long should I take Mounjaro?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-black text-base">Is Mounjaro right for me?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-black text-base">What are the side effects?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Separate full-width card */}
        <CallToActionSection variant="default" />

        <WeeklyInjectionSection />
      </div>
    </div>
  );
} 
