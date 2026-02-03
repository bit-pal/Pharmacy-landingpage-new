'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MounjaroProductPage() {
  const [selectedStrength, setSelectedStrength] = useState('2.5mg');
  const [selectedQuantity, setSelectedQuantity] = useState('1 Flextouch Pre-filled pen');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    // Load Trustpilot widget script when reviews section is expanded
    if (expandedSection === 'reviews') {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="trustpilot"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        script.id = 'trustpilot-script';
        document.body.appendChild(script);
      }
    }
  }, [expandedSection]);

  const strengths = [
    { value: '2.5mg', label: 'Tirzepatide' },
    { value: '5mg', label: 'Tirzepatide' },
    { value: '7.5mg', label: 'Tirzepatide' },
    { value: '10mg', label: 'Tirzepatide' },
    { value: '12.5mg', label: 'Tirzepatide' },
    { value: '15mg', label: 'Tirzepatide' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Top notification bar */}
      <div className="bg-teal-100 py-2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-800">Orders before 3:45pm are processed the same day.</p>
        </div>
      </div>

      {/* Hero Section - Product Image and Price Checker */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Product Image */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 flex flex-col items-center justify-center relative">
              {/* Recommended Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow-md">
                  <span className="text-white mr-1">★</span>
                  <span>Recommended</span>
                </div>
              </div>

              <Image
                src="/weight_management/mounjaro.png"
                alt="Mounjaro"
                width={500}
                height={500}
                className="object-contain"
              />
              <div className="mt-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Mounjaro weight loss treatment plan</h1>
                {/* <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-semibold">Excellent</span>
                  <div className="flex text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">TrustPilot</span>
                </div> */}
              </div>
            </div>

            {/* Right - Price Checker */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Price Checker</h2>

              {/* Strength Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strength</h3>
                <div className="grid grid-cols-3 gap-3">
                  {strengths.map((strength) => (
                    <button
                      key={strength.value}
                      onClick={() => setSelectedStrength(strength.value)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${selectedStrength === strength.value
                        ? 'bg-green-100 border-green-500 text-gray-900'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                    >
                      <div>{strength.value}</div>
                      <div className="text-xs">{strength.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
                <button className="w-full px-6 py-4 rounded-lg bg-green-100 border border-green-500 text-gray-900 font-medium text-center">
                  {selectedQuantity}
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-teal-600 mb-1">£149.95</div>
                <div className="text-sm text-gray-600">£ 37.50 Per week</div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Lose</p>
                  <p className="font-bold text-gray-900">Around 25%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">When to use</p>
                  <p className="font-bold text-gray-900">Once a week</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Price per dose</p>
                  <p className="font-bold text-gray-900">From £37.50 per week</p>
                </div>
              </div>

              {/* Get Started Button */}
              <Link
                href="/weight-loss"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg mb-6 flex items-center justify-center gap-2"
              >
                Get Started
                <span className="text-xl">≫</span>
              </Link>

              {/* Delivery Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <div className="text-green-600 text-xl">⏰</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Want it delivered by Saturday 11th October?</p>
                  <p className="text-sm text-gray-700">Order within: 2h 32m 47s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="border-y border-gray-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="text-green-600 text-2xl">⚡</div>
              <span className="font-semibold text-gray-900">Free Tracked Delivery</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-green-600 text-2xl">£</div>
              <span className="font-semibold text-gray-900">Lowest Price Guarantee</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-green-600 text-2xl">✓</div>
              <span className="font-semibold text-gray-900">We are based in the UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">How it Works</h2>
            <p className="text-lg text-gray-600">Professional, easy and straight forward process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/Homepage/working-question-circle-filled.svg"
                  alt="Medical questions icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Medical Questions</h3>
                <p className="text-gray-600">Complete a health questionnaire specific to your health needs.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/Homepage/working-pill-filled.svg"
                  alt="Treatment selection icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Select Preferred Treatment</h3>
                <p className="text-gray-600">You can show your preferred treatment and set up your subscription.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/Homepage/working-credit-card.svg"
                  alt="Payment icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact with pharmacy team</h3>
                <p className="text-gray-600">A member of the weight loss team will contact you to discuss your plan and answer any questions.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/Homepage/working-delivery.svg"
                  alt="Delivery icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment delivered</h3>
                <p className="text-gray-600">On an agreed day your order will be shipped and received by you the following day (some location exclusions apply)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discreet Service Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Discreet Service</h2>
            <p className="text-lg text-gray-600">Your orders are private and this is our responsibility</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/Homepage/service-order.png"
                  alt="Online Process"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Online Process</h3>
              <p className="text-gray-600">You can complete your whole order online from consultation to checkout. But if you need to contact us we are available by live chat, email and phone.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/Homepage/service-box.png"
                  alt="Plain Packaging"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plain Packaging Guaranteed</h3>
              <p className="text-gray-600">Orders are shipped in discreet mailing bags and boxes so you can rest assured your order will remain private.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/Homepage/service-postbox.png"
                  alt="Post Office Collection"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optional Post Office Collection</h3>
              <p className="text-gray-600">If having your order shipped to a home or work address doesn't suit you then you can select to collect from a post office convenient to you. (Exclusions apply)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Information About Ordering Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Information About Ordering</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16">
                <Image
                  src="/Homepage/info-order-1.png"
                  alt="Order step 1"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-lg pt-2">After completing your 2-minute consultation, we can show you the full range of products and prices available to you.</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16">
                <Image
                  src="/Homepage/info-order-2.png"
                  alt="Order step 2"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-lg pt-2">Verified 18+ customers only. All orders are soft checked for age and identity. Photo ID may be requested.</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16">
                <Image
                  src="/Homepage/info-order-3.png"
                  alt="Order step 3"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-lg pt-2">Open Monday to Friday, orders placed before 3:45pm are shipped the same day from our UK based & regulated pharmacy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Information Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Clinical Information</h2>

          <div className="space-y-4">
            {/* Reviews */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('reviews')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Reviews of MediTrue</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'reviews' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'reviews' && (
                <div className="px-6 pb-6">
                  <h3 className="text-3xl font-bold text-green-600 mb-8">
                    Great Customer Reviews, Independently Verified
                  </h3>

                  {/* Trustpilot Rating Summary */}
                  {/* <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-xl font-semibold">Excellent</span>
                      <div className="flex text-green-500 text-2xl">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600">TrustPilot</span>
                    </div>
                    <p className="text-center text-gray-700 mb-2">
                      Rated <strong>4.4 / 5</strong> based on <strong>15,009 reviews</strong>
                    </p>
                    <p className="text-center text-sm text-gray-600">
                      Showing our 4 & 5 star reviews
                    </p>
                  </div> */}

                  {/* Scrollable Reviews Container */}
                  <div className="max-h-[600px] overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Review Card 1 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Sam, 3 October</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Brilliant service</h4>
                        <p className="text-gray-700 text-sm">
                          Brilliant service. Amazing follow up communication too. Delivery was prompt and honestly cant fault any part from order to delivery. Will definitely use this company again.
                        </p>
                      </div>

                      {/* Review Card 2 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Amanda Thewlis, 11 September</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">They are a very professional company...</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          They are a very professional company always keep you updated and always recieve my pen ontime.
                        </p>
                        <button className="text-teal-600 text-sm font-medium hover:underline">Read more</button>
                      </div>

                      {/* Review Card 3 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Heidi, 25 August</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Excellent experience with Assured...</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Excellent experience with Assured Pharmacy, customer care has been amazing. Careful consideration is given to suitability including a phone consultation and uploading photos.
                        </p>
                        <button className="text-teal-600 text-sm font-medium hover:underline">Read more</button>
                      </div>

                      {/* Review Card 4 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Kerri, 22 August</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">These guys are amazing</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          These guys are amazing! Soooo much better than Numan who I was with originally for Mounjaro. No fuss, quick delivery, great updates and much better pricing. They have...
                        </p>
                        <button className="text-teal-600 text-sm font-medium hover:underline">Read more</button>
                      </div>

                      {/* Review Card 5 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Lauren Hendry, 19 August</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Maisy assisted me on Friday 15/08 and...</h4>
                        <p className="text-gray-700 text-sm">
                          Maisy assisted me on Friday 15/08 and she was absolutely brilliant. Very patient and understanding of my needs and concerns.
                        </p>
                      </div>

                      {/* Review Card 6 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Lauren Hendry, 19 July</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">the Pharmacy have gone above and beyond!!</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          I came across Assured Pharmacy, as I was looking for a pharmacy that was able to provide weight loss medication at a more affordable price.
                        </p>
                        <button className="text-teal-600 text-sm font-medium hover:underline">Read more</button>
                      </div>

                      {/* Review Card 7 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Miss Brown, 15 July</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Excellent pharmacy</h4>
                        <p className="text-gray-700 text-sm">
                          Excellent pharmacy . I have used for 4 months now to purchase my weight loss medication. Always helpful and efficient.
                        </p>
                      </div>

                      {/* Review Card 8 */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex text-green-500 mb-2">
                          {[...Array(4)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Clare Constantine, 9 May</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Ordering Mounjaro was a simple process</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Ordering Mounjaro was a simple process and I received my medication quickly. The customer service team were very helpful and answered all my questions.
                        </p>
                        <button className="text-teal-600 text-sm font-medium hover:underline">Read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* What is it */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('what')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">What is it, how does it work?</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'what' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'what' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Mounjaro is designed to support your weight loss journey on a weekly basis. Enhanced by a balanced, calorie-conscious diet and regular physical activity, Mounjaro maximises its effectiveness, ensuring safe and steady weight loss progress.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Weekly injection that suppresses appetite and reduces cravings.</li>
                    <li>With lifestyle changes</li>
                    <li>Suitable for adults with a BMI of 30 or above, or 27 and above with a weight-related condition.</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    It is important to continue to follow the advice on diet and exercise given to you by the prescriber.
                  </p>
                  <p className="text-gray-700">
                    Mounjaro works by slowing down how fast food moves through your stomach after eating. This can lead to you feeling fuller for longer and in turn reduces your appetite. Alongside diet and exercise this can lead to you losing weight.
                  </p>
                </div>
              )}
            </div>

            {/* Using Mounjaro */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('using')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Using Mounjaro</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'using' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'using' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Administer Mounjaro via injection once weekly into your abdomen, thigh, or upper arm. Tailored to your treatment stage, Mounjaro is available in various doses.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Commencing with a 2.5mg initial dose, subsequent increments are administered until reaching the optimal dose. This gradual dosage escalation ensures manageable adaptation to any potential side effects. Each dosage level is maintained for four weeks before advancing to the next.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Read the Instructions for Use that come with Mounjaro.</li>
                    <li>Use Mounjaro exactly as your healthcare provider says.</li>
                    <li>Each pen is for one patient only and should not be used by anyone other than you.</li>
                  </ul>

                  <h4 className="font-bold text-gray-900 mb-3">Choosing when to use Mounjaro?</h4>
                  <p className="text-gray-700 mb-4">
                    You should inject Mounjaro on the same day every week. You can take it at any time of day. You might want to set a reminder on your phone, so you don't forget what day you normally take it.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>You can use your pen at any time of the day, with or without meals.</li>
                    <li>Use Mounjaro on the same day each week.</li>
                    <li>To help you remember, when to use Mounjaro, you may wish to tick the day of the week when you inject your first dose on the box that your pen comes in, or mark it on a calendar.</li>
                    <li>If necessary, you can change the day of your weekly injection, as long as it has been at least 3 days since your last injection.</li>
                    <li>After selecting a new dosing day, continue with once-a-week dosing on that new day</li>
                  </ul>

                  <h4 className="font-bold text-gray-900 mb-3">Missed a dose of Mounjaro?</h4>
                  <p className="text-gray-700">
                    If you happen to miss a dose of Mounjaro, it's recommended to administer the missed dose within 5 days of the scheduled time. Please strive to take it promptly upon realising the oversight.
                  </p>
                </div>
              )}
            </div>

            {/* Side effects */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('side')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Side effects</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'side' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'side' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    As with any medication, certain individuals may experience side effects while using Mounjaro. Some very common side effects may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Nausea</li>
                    <li>Vomiting</li>
                    <li>Diarrhea</li>
                    <li>Constipation</li>
                    <li>Headache</li>
                    <li>Fatigue</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    The side effects of Mounjaro typically improve over time as your body adjusts to the treatment. You may find that side effects are most noticeable during the dose escalation phase and tend to be mild. As your body acclimates to the treatment, these side effects are likely to diminish and eventually disappear.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Establish a consistent injection schedule by administering Mounjaro on the same day each week to give your body regular breaks between treatments. To effectively manage side effects, consider the following strategies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Consume smaller, more frequent meals</li>
                    <li>Stop eating when you feel full</li>
                    <li>Stay hydrated by drinking plenty of water</li>
                    <li>Avoid consuming fatty foods</li>
                    <li>If feeling nauseous, sip water and opt for plain foods such as toast, crackers, or rice</li>
                    <li>Increase fiber intake to alleviate constipation</li>
                    <li>Maintain a regular exercise routine</li>
                    <li>For headaches, you may take paracetamol</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Remember to consult with your healthcare provider if you experience persistent or severe side effects.
                  </p>
                  <p className="text-gray-700">
                    To see more details please see the <a href="#" className="text-blue-600 hover:underline">patient information leaflet</a>.
                  </p>
                </div>
              )}
            </div>

            {/* Storage */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('storage')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Storage and Disposal</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'storage' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'storage' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    You should keep the pen in the fridge from the day you receive it.
                  </p>
                  <p className="text-gray-700 mb-4">
                    After first use: Store below 30° C or, preferably, in a refrigerator (2° C to 8° C). Do not freeze Mounjaro and do not use it if it has been frozen. Keep the pen cap on when the pen is not in use in order to protect it from light.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Once in use the pen has an expiry of 6 weeks so make sure you use all 4 doses within this time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dispose of your used pen needles in a sharps disposal container right away after use, do not dispose of loose pen needles in your household waste.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dispose of the used pen in your household bin after you have removed the needle.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Do not recycle your used sharps disposal container.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Sharps disposal container should be taken to a local pharmacy for disposal once full.
                  </p>
                  <p className="text-gray-700">
                    Ask your doctor, pharmacist or nurse about how to dispose of medicines you no longer use.
                  </p>
                </div>
              )}
            </div>

            {/* Why us */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('why')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Why us</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'why' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'why' && (
                <div className="px-6 pb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">MediTrue, A Pharmacy You Can Trust</h3>
                  <p className="text-gray-700 mb-6">
                    MediTrue offers our patients complete peace of mind with regard to;
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">✓</span>
                      <span className="text-gray-700">Safety and quality of our medication.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">✓</span>
                      <span className="text-gray-700">Qualifications of our healthcare professionals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">✓</span>
                      <span className="text-gray-700">Competitiveness of our prices.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">✓</span>
                      <span className="text-gray-700">Accessibility for all patients.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-2">✓</span>
                      <span className="text-gray-700">Secure and reliable delivery service.</span>
                    </li>
                  </ul>

                  <div className="flex justify-center mb-8">
                    <Image
                      src="/Homepage/banner-list-logo-icon.svg"
                      alt="Assured Pharmacy Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-6">The Team</h4>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-gray-700">
                      Our experienced team of healthcare professionals is dedicated to providing you with the highest quality care and support throughout your weight loss journey.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

