'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function WeightLossTreatmentPricesPage() {
  const router = useRouter();
  const [selectedMounjaroStrength, setSelectedMounjaroStrength] = useState('2.5mg');
  const [selectedWegovyStrength, setSelectedWegovyStrength] = useState('0.25mg');
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  const benefits = [
    "Lowest Price Guarantee",
    "Free Tracked Delivery",
    "Discreet Service"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [benefits.length]);

  const handleMounjaroBuyNow = () => {
    const productData = {
      name: 'Mounjaro weight loss treatment plan',
      price: 169.95,
      quantity: '1 KwikPen Pre-filled pen',
      type: `Tirzepatide - ${selectedMounjaroStrength}`,
      image: '/weight_management/mounjaro.png',
      treatment: 'weight-loss'
    };
    sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
    router.push('/checkout');
  };

  const handleWegovyBuyNow = () => {
    const productData = {
      name: 'Wegovy weight loss treatment plan',
      price: 139.95,
      quantity: '1 Flextouch Pre-filled pen',
      type: `Semaglutide - ${selectedWegovyStrength}`,
      image: '/weight_management/wegovy.png',
      treatment: 'weight-loss'
    };
    sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Black Bar - Rotating Benefits */}
      <div className="bg-black text-white py-3">
        <div className="max-w-6xl mx-auto px-4">
          {/* Mobile - Carousel */}
          <div className="md:hidden flex justify-center items-center text-sm h-6 relative overflow-hidden">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out flex items-center ${index === currentBenefitIndex
                  ? 'translate-x-0 opacity-100'
                  : index < currentBenefitIndex
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                  }`}
              >
                <span className="text-green-400 text-xl mr-2">£</span>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Desktop - All visible */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-400 text-xl mr-2">£</span>
                <span className="text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-between">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <span className="text-white text-sm md:text-lg">✓</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-800 text-center">Medical Questions</span>
            </div>

            {/* Line 1 - Completed */}
            <div className="flex-1 h-0.5 md:h-1 bg-green-500 mx-1 md:mx-2 mb-4 md:mb-6"></div>

            {/* Step 2 - Current */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <span className="text-white text-sm md:text-lg">✓</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-800 text-center">Treatment & Prices</span>
            </div>

            {/* Line 2 - Incomplete */}
            <div className="flex-1 h-0.5 md:h-1 bg-gray-300 mx-1 md:mx-2 mb-4 md:mb-6"></div>

            {/* Step 3 - Incomplete */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <span className="text-white text-sm md:text-lg">✓</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-500 text-center">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification Banner */}
      <div className="bg-white py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-6">
            <div className="text-white text-center mb-6">
              <h1 className="text-2xl font-bold mb-1">Awesome,</h1>
              <h2 className="text-2xl font-bold mb-3">it looks like you qualify</h2>
              <p className="text-sm leading-relaxed">
                It looks like you qualify for one of the treatments shown below. Please proceed
                with the purchase of your preferred treatment and the team will review your order.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center mx-auto max-w-xs">
              <Image
                src="/weight_management/shirin-jazayeri-t.webp"
                alt="Shirin Jazayeri"
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg mb-2 mx-auto object-cover"
              />
              <h3 className="font-bold text-gray-800 text-sm">Shirin Jazayeri</h3>
              <p className="text-xs text-gray-600">Clinical Lead</p>
              <p className="text-[10px] text-gray-500 mt-0.5">GPhC Registration 2067461</p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-start gap-6">
              <div className="text-white flex-1 pr-4">
                <h1 className="text-4xl font-bold mb-2">Awesome,</h1>
                <h2 className="text-3xl font-bold mb-4">it looks like you qualify</h2>
                <p className="text-base leading-relaxed">
                  It looks like you qualify for one of the treatments shown below. Please proceed
                  with the purchase of your preferred treatment and the team will review your order.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center flex-shrink-0 w-40">
                <Image
                  src="/weight_management/shirin-jazayeri-t.webp"
                  alt="Shirin Jazayeri"
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-lg mb-2 mx-auto object-cover"
                />
                <h3 className="font-bold text-gray-800 text-sm">Shirin Jazayeri</h3>
                <p className="text-xs text-gray-600">Clinical Lead</p>
                <p className="text-[10px] text-gray-500 mt-0.5">GPhC Registration 2067461</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Plans */}
      <div className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-8">

          {/* Mounjaro Treatment Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Title and Rating */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">Mounjaro weight loss treatment plan</h2>
              {/* <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-green-500 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">TrustPilot</span>
              </div> */}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* 2. Image */}
              <div className="mb-6">
                <Image
                  src="/weight_management/mounjaro.png"
                  alt="Mounjaro"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>

              {/* 3. Strength Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Strength</h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {['2.5mg', '5mg', '7.5mg'].map((strength) => (
                    <button
                      key={strength}
                      onClick={() => setSelectedMounjaroStrength(strength)}
                      className={`p-3 rounded-lg border-2 transition-colors ${selectedMounjaroStrength === strength
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-semibold">{strength}</div>
                      <div className="text-xs text-gray-600">Tirzepatide</div>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['10mg', '12.5mg', '15mg'].map((strength) => (
                    <button
                      key={strength}
                      onClick={() => setSelectedMounjaroStrength(strength)}
                      className={`p-3 rounded-lg border-2 transition-colors ${selectedMounjaroStrength === strength
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-semibold">{strength}</div>
                      <div className="text-xs text-gray-600">Tirzepatide</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium">1 KwikPen Pre-filled pen</span>
                </div>
              </div>

              {/* 5. Price */}
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-800">£ 169.95</div>
                <div className="text-sm text-gray-600">£ 42.49 Per week</div>
              </div>

              {/* 6. Buy Button */}
              <button
                onClick={handleMounjaroBuyNow}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full"
              >
                <span>Buy Now</span>
                <span>→</span>
              </button>

              {/* 7. Prescription Text */}
              <p className="text-center text-sm text-gray-600 mb-6">Prescription included</p>

              {/* Treatment Info */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                <p>
                  The Mounjaro weight loss treatment plan is an ongoing monthly plan. The weight loss treatment plan is billed monthly and will be automatically debited from your account. Your treatment will then be promptly delivered to ensure you have it on time, allowing you to continue your weight loss journey seamlessly.
                </p>
                <p className="font-semibold">This is a dosage example of a typical treatment plan:</p>
                <ul className="space-y-1 ml-4">
                  <li>Weeks 1-4: 2.5mg weekly</li>
                  <li>Weeks 5-8: 5mg weekly</li>
                  <li>Weeks 9-12: 7.5mg weekly</li>
                  <li>Weeks 13-16: 10mg weekly</li>
                  <li>Weeks 17 onwards: 15mg</li>
                </ul>
                <p className="font-semibold mt-4">Mounjaro injections are used weekly and delivered as a monthly supply.</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Clinically proven programme.</li>
                  <li>Double-action appetite suppressor.</li>
                  <li>Easy to use, once-weekly injection.</li>
                  <li>Weekly injection that suppresses appetite and reduces cravings.</li>
                  <li>With lifestyle changes around 96% of people lose weight.</li>
                </ul>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {/* Strength Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Strength</h3>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {['2.5mg', '5mg', '7.5mg'].map((strength) => (
                      <button
                        key={strength}
                        onClick={() => setSelectedMounjaroStrength(strength)}
                        className={`p-3 rounded-lg border-2 transition-colors ${selectedMounjaroStrength === strength
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold">{strength}</div>
                        <div className="text-xs text-gray-600">Tirzepatide</div>
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['10mg', '12.5mg', '15mg'].map((strength) => (
                      <button
                        key={strength}
                        onClick={() => setSelectedMounjaroStrength(strength)}
                        className={`p-3 rounded-lg border-2 transition-colors ${selectedMounjaroStrength === strength
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold">{strength}</div>
                        <div className="text-xs text-gray-600">Tirzepatide</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">1 KwikPen Pre-filled pen</span>
                  </div>
                </div>

                {/* Treatment Info */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                  <p>
                    The Mounjaro weight loss treatment plan is an ongoing monthly plan. The weight loss treatment plan is billed monthly and will be automatically debited from your account. Your treatment will then be promptly delivered to ensure you have it on time, allowing you to continue your weight loss journey seamlessly.
                  </p>
                  <p className="font-semibold">This is a dosage example of a typical treatment plan:</p>
                  <ul className="space-y-1 ml-4">
                    <li>Weeks 1-4: 2.5mg weekly</li>
                    <li>Weeks 5-8: 5mg weekly</li>
                    <li>Weeks 9-12: 7.5mg weekly</li>
                    <li>Weeks 13-16: 10mg weekly</li>
                    <li>Weeks 17 onwards: 15mg</li>
                  </ul>
                  <p className="font-semibold mt-4">Mounjaro injections are used weekly and delivered as a monthly supply.</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Clinically proven programme.</li>
                    <li>Double-action appetite suppressor.</li>
                    <li>Easy to use, once-weekly injection.</li>
                    <li>Weekly injection that suppresses appetite and reduces cravings.</li>
                    <li>With lifestyle changes around 96% of people lose weight.</li>
                  </ul>
                </div>
              </div>

              {/* Price and Buy Button (Desktop) */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <Image
                    src="/weight_management/mounjaro.png"
                    alt="Mounjaro"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-800">£ 169.95</div>
                  <div className="text-sm text-gray-600">£ 42.49 Per week</div>
                </div>
                <button
                  onClick={handleMounjaroBuyNow}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full"
                >
                  <span>Buy Now</span>
                  <span>→</span>
                </button>
                <p className="text-center text-sm text-gray-600">Prescription included</p>
              </div>
            </div>
          </div>

          {/* Wegovy Treatment Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Title and Rating */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">Wegovy weight loss treatment plan</h2>
              {/* <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-green-500 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">TrustPilot</span>
              </div> */}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* 2. Image */}
              <div className="mb-6">
                <Image
                  src="/weight_management/wegovy.png"
                  alt="Wegovy"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>

              {/* 3. Strength Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Strength</h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {['0.25mg', '0.5mg', '1mg'].map((strength) => (
                    <button
                      key={strength}
                      onClick={() => setSelectedWegovyStrength(strength)}
                      className={`p-3 rounded-lg border-2 transition-colors ${selectedWegovyStrength === strength
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-semibold">{strength}</div>
                      <div className="text-xs text-gray-600">Semaglutide</div>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['1.7mg', '2.4mg'].map((strength) => (
                    <button
                      key={strength}
                      onClick={() => setSelectedWegovyStrength(strength)}
                      className={`p-3 rounded-lg border-2 transition-colors ${selectedWegovyStrength === strength
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-semibold">{strength}</div>
                      <div className="text-xs text-gray-600">Semaglutide</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium">1 Flextouch Pre-filled pen</span>
                </div>
              </div>

              {/* 5. Price */}
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-800">£ 139.95</div>
                <div className="text-sm text-gray-600">£ 34.99 Per week</div>
              </div>

              {/* 6. Buy Button */}
              <button
                onClick={handleWegovyBuyNow}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full"
              >
                <span>Buy Now</span>
                <span>→</span>
              </button>

              {/* 7. Prescription Text */}
              <p className="text-center text-sm text-gray-600 mb-6">Prescription included</p>

              {/* Treatment Info */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                <p>
                  The Wegovy weight loss treatment plan is billed monthly and will be automatically deducted from your account. Each month&apos;s medication will be delivered to your door on time, so you can continue your journey without interruption.
                </p>
                <p className="font-semibold">Pricing (per pen / month):</p>
                <ul className="space-y-1 ml-4">
                  <li>Month 1 (0.25mg) - £139.95</li>
                  <li>Month 2 (0.5mg) - £139.95</li>
                  <li>Month 3 (1mg) - £159.95</li>
                  <li>Month 4 (1.7mg) - £179.95</li>
                  <li>Month 5 (2.4mg) - £219.95</li>
                </ul>
                <p className="font-semibold mt-4">Wegovy dosage schedule</p>
                <p>Your clinician will confirm the safest and most effective dose for you, but the general progression is:</p>
                <ul className="space-y-1 ml-4">
                  <li>Month 1: 0.25mg weekly (Pen-1)</li>
                  <li>Month 2: 0.5mg weekly (Pen-2)</li>
                  <li>Month 3: 1mg weekly (Pen-3)</li>
                  <li>Month 4: 1.7mg weekly (Pen-4)</li>
                  <li>Month 5: 2.4mg weekly (Pen-5)</li>
                </ul>
                <p className="mt-4">This gradual increase is designed to minimise side effects and help your body adapt smoothly.</p>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {/* Strength Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Strength</h3>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {['0.25mg', '0.5mg', '1mg'].map((strength) => (
                      <button
                        key={strength}
                        onClick={() => setSelectedWegovyStrength(strength)}
                        className={`p-3 rounded-lg border-2 transition-colors ${selectedWegovyStrength === strength
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold">{strength}</div>
                        <div className="text-xs text-gray-600">Semaglutide</div>
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['1.7mg', '2.4mg'].map((strength) => (
                      <button
                        key={strength}
                        onClick={() => setSelectedWegovyStrength(strength)}
                        className={`p-3 rounded-lg border-2 transition-colors ${selectedWegovyStrength === strength
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold">{strength}</div>
                        <div className="text-xs text-gray-600">Semaglutide</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">1 Flextouch Pre-filled pen</span>
                  </div>
                </div>

                {/* Treatment Info */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                  <p>
                    The Wegovy weight loss treatment plan is billed monthly and will be automatically deducted from your account. Each month&apos;s medication will be delivered to your door on time, so you can continue your journey without interruption.
                  </p>
                  <p className="font-semibold">Pricing (per pen / month):</p>
                  <ul className="space-y-1 ml-4">
                    <li>Month 1 (0.25mg) - £139.95</li>
                    <li>Month 2 (0.5mg) - £139.95</li>
                    <li>Month 3 (1mg) - £159.95</li>
                    <li>Month 4 (1.7mg) - £179.95</li>
                    <li>Month 5 (2.4mg) - £219.95</li>
                  </ul>
                  <p className="font-semibold mt-4">Wegovy dosage schedule</p>
                  <p>Your clinician will confirm the safest and most effective dose for you, but the general progression is:</p>
                  <ul className="space-y-1 ml-4">
                    <li>Month 1: 0.25mg weekly (Pen-1)</li>
                    <li>Month 2: 0.5mg weekly (Pen-2)</li>
                    <li>Month 3: 1mg weekly (Pen-3)</li>
                    <li>Month 4: 1.7mg weekly (Pen-4)</li>
                    <li>Month 5: 2.4mg weekly (Pen-5)</li>
                  </ul>
                  <p className="mt-4">This gradual increase is designed to minimise side effects and help your body adapt smoothly.</p>
                </div>
              </div>

              {/* Price and Buy Button (Desktop) */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <Image
                    src="/weight_management/wegovy.png"
                    alt="Wegovy"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-800">£ 139.95</div>
                  <div className="text-sm text-gray-600">£ 34.99 Per week</div>
                </div>
                <button
                  onClick={handleWegovyBuyNow}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full"
                >
                  <span>Buy Now</span>
                  <span>→</span>
                </button>
                <p className="text-center text-sm text-gray-600">Prescription included</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">Copyright MediTrue 2025</p>
        </div>
      </footer>
    </div>
  );
}
