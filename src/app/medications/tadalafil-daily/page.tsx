'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TadalafilDailyProductPage() {
  const [selectedStrength, setSelectedStrength] = useState('2.5mg');
  const [selectedQuantity, setSelectedQuantity] = useState('28 tablets');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (expandedSection === 'reviews') {
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
    { value: '2.5mg', label: 'Tadalafil Daily' },
    { value: '5mg', label: 'Tadalafil Daily' }
  ];

  const quantities = [
    { value: '28 tablets', price: '£35.00', pricePerTablet: '£1.25' },
    { value: '56 tablets', price: '£65.00', pricePerTablet: '£1.16' },
    { value: '84 tablets', price: '£90.00', pricePerTablet: '£1.07' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getCurrentPrice = () => {
    const quantity = quantities.find(q => q.value === selectedQuantity);
    return quantity || quantities[0];
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
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 flex flex-col items-center justify-center relative">

              <Image
                src="/ed_treatment/tadalafildaily002.png"
                alt="Tadalafil Daily"
                width={500}
                height={500}
                className="object-contain"
              />
              <div className="mt-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Tadalafil Daily erectile dysfunction treatment</h1>
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
                <div className="grid grid-cols-2 gap-3">
                  {strengths.map((strength) => (
                    <button
                      key={strength.value}
                      onClick={() => setSelectedStrength(strength.value)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${selectedStrength === strength.value
                          ? 'bg-orange-100 border-orange-500 text-gray-900'
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
                <div className="grid grid-cols-1 gap-3">
                  {quantities.map((quantity) => (
                    <button
                      key={quantity.value}
                      onClick={() => setSelectedQuantity(quantity.value)}
                      className={`px-6 py-4 rounded-lg border text-sm font-medium transition-colors flex justify-between items-center ${selectedQuantity === quantity.value
                          ? 'bg-orange-100 border-orange-500 text-gray-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                    >
                      <span>{quantity.value}</span>
                      <span className="font-bold">{quantity.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-orange-600 mb-1">{getCurrentPrice().price}</div>
                <div className="text-sm text-gray-600">{getCurrentPrice().pricePerTablet} per tablet</div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Works within</p>
                  <p className="font-bold text-gray-900">30 mins</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Taken Daily</p>
                  <p className="font-bold text-gray-900">Always active</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Price per pill</p>
                  <p className="font-bold text-gray-900">From £1.25</p>
                </div>
              </div>

              {/* Get Started Button */}
              <Link
                href="/consultation/erectile-dysfunction"
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
                  src="/ed_treatment/working-question-circle-filled.svg"
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
                  src="/ed_treatment/working-pill-filled.svg"
                  alt="Treatment selection icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Select Preferred Treatment</h3>
                <p className="text-gray-600">Choose your preferred ED treatment from our range of effective options.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/ed_treatment/working-credit-card.svg"
                  alt="Payment icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reviewed by Healthcare Professional</h3>
                <p className="text-gray-600">Your consultation is reviewed by a qualified healthcare professional to ensure suitability.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DAEBE5] rounded-md flex items-center justify-center">
                <Image
                  src="/ed_treatment/working-delivery.svg"
                  alt="Delivery icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment Delivered Discreetly</h3>
                <p className="text-gray-600">Your medication is delivered in discreet packaging to your chosen address.</p>
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
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/ed_treatment/service-order.png"
                  alt="Online Process"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Online Process</h3>
              <p className="text-gray-600">You can complete your whole order online from consultation to checkout. But if you need to contact us we are available by live chat, email and phone.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/ed_treatment/service-box.png"
                  alt="Plain Packaging"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plain Packaging Guaranteed</h3>
              <p className="text-gray-600">Orders are shipped in discreet mailing bags and boxes so you can rest assured your order will remain private.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-20 h-20 mb-6">
                <Image
                  src="/ed_treatment/service-postbox.png"
                  alt="Post Office Collection"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optional Post Office Collection</h3>
              <p className="text-gray-600">If having your order shipped to a home or work address doesn't suit you then you can select to collect from a post office convenient to you.</p>
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
                  src="/ed_treatment/info-order-1.png"
                  alt="Order step 1"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-lg pt-2">After completing your 2-minute consultation, we can show you the full range of ED treatments and prices available to you.</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16">
                <Image
                  src="/ed_treatment/info-order-2.png"
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
                  src="/ed_treatment/info-order-3.png"
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
            {/* What is it */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('what')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">What is Tadalafil Daily and how does it work?</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'what' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'what' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Tadalafil Daily is a lower-dose version of Tadalafil taken every day, rather than on-demand. This means you'll always be ready for sexual activity without needing to plan ahead.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By taking a small daily dose, you maintain a steady level of the medication in your system, allowing for spontaneous sexual activity at any time.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Take once daily at the same time each day</li>
                    <li>Always ready for spontaneous intimacy</li>
                    <li>Lower daily dose means fewer side effects</li>
                    <li>No need to plan ahead or time your dose</li>
                  </ul>
                  <p className="text-gray-700">
                    Tadalafil Daily is ideal for men who have sex more than twice a week and want the freedom of spontaneity.
                  </p>
                </div>
              )}
            </div>

            {/* Using Tadalafil Daily */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('using')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">How to use Tadalafil Daily</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'using' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'using' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Take one tablet at the same time every day, regardless of when you plan to have sex. The recommended dose is 2.5mg or 5mg daily.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Swallow the tablet whole with water</li>
                    <li>Take at the same time each day to maintain steady levels</li>
                    <li>Can be taken with or without food</li>
                    <li>Sexual stimulation is still required for the medication to work</li>
                    <li>After a few days, you'll be ready for sex at any time</li>
                    <li>Do not take more than one tablet per day</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    It may take several days to reach steady levels in your body, so be patient during the first week of treatment.
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
                    The daily dose is lower than the on-demand dose, so side effects are often milder. Common side effects include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Headache (usually mild)</li>
                    <li>Indigestion</li>
                    <li>Back pain or muscle aches</li>
                    <li>Nasal congestion</li>
                    <li>Flushing</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    These side effects are usually mild and often improve as your body adjusts to the daily medication.
                  </p>
                  <p className="text-gray-700 mb-4 font-semibold">
                    Seek immediate medical attention if you experience:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>An erection that lasts more than 4 hours (priapism)</li>
                    <li>Sudden decrease or loss of vision</li>
                    <li>Chest pain or irregular heartbeat</li>
                    <li>Allergic reactions (rash, itching, swelling)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Who shouldn't take it */}
            <div className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleSection('who')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">Who shouldn't take Tadalafil Daily?</span>
                <span className="text-2xl text-gray-600">{expandedSection === 'who' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'who' && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Tadalafil Daily is not suitable for everyone. Do not take Tadalafil Daily if you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Are taking nitrates (medicines for chest pain)</li>
                    <li>Have severe heart or liver problems</li>
                    <li>Have recently had a stroke or heart attack</li>
                    <li>Have low blood pressure</li>
                    <li>Have a rare inherited eye disease</li>
                    <li>Are allergic to tadalafil or any of the other ingredients</li>
                  </ul>
                  <p className="text-gray-700">
                    Always inform your doctor about all medications you're taking and any medical conditions you have before starting Tadalafil Daily.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer maxWidth="wide" />
    </div>
  );
}

