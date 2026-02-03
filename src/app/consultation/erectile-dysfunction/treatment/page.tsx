'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ErectileDysfunctionTreatmentPage() {
  const router = useRouter();
  const [selectedMedications, setSelectedMedications] = useState<{
    [key: string]: {
      tab: string;
      strength: string;
      quantity: string;
    };
  }>({});

  const handleSelection = (medicationId: string, field: 'tab' | 'strength' | 'quantity', value: string) => {
    setSelectedMedications(prev => ({
      ...prev,
      [medicationId]: {
        ...prev[medicationId],
        tab: prev[medicationId]?.tab || '',
        strength: prev[medicationId]?.strength || '',
        quantity: prev[medicationId]?.quantity || '',
        [field]: value
      }
    }));
  };

  const isSelected = (medicationId: string, field: 'tab' | 'strength' | 'quantity', value: string) => {
    return selectedMedications[medicationId]?.[field] === value;
  };

  const handleBuyNow = (medicationType: string) => {
    // Define product data based on medication type
    const productDataMap: { [key: string]: any } = {
      sildenafil: {
        name: 'Viagra & Generic Sildenafil',
        price: 71.99,
        quantity: '32 (Tablets)',
        type: 'Sildenafil (Generic - Low Cost)',
        strength: '50mg (Best for first order)',
        image: '/ed_treatment/sildenafil001.png',
        treatment: 'ed'
      },
      tadalafil: {
        name: 'Cialis & Generic Tadalafil (As Needed)',
        price: 89.50,
        quantity: '32 (Tablets)',
        type: 'Tadalafil (Generic - Low Cost)',
        strength: '20mg',
        image: '/ed_treatment/tadalafilasneeded001.png',
        treatment: 'ed'
      },
      tadalafilDaily: {
        name: 'Cialis Daily & Generic Tadalafil',
        price: 36.00,
        quantity: '28 (Tablets)',
        type: 'Tadalafil Daily (Generic)',
        strength: '2.5mg',
        image: '/ed_treatment/tadalafildaily002.png',
        treatment: 'ed'
      },
      spedra: {
        name: 'Spedra (Avanafil)',
        price: 70.00,
        quantity: '16 (Tablets)',
        type: 'Spedra (Branded)',
        strength: '100mg',
        image: '/ed_treatment/spedra-t.png',
        treatment: 'ed'
      },
      viagraConnect: {
        name: 'Viagra Connect',
        price: 71.99,
        quantity: '32 (Tablets)',
        type: 'Viagra Connect (OTC)',
        strength: '50mg',
        image: '/ed_treatment/viagraconnect001.png',
        treatment: 'ed'
      }
    };

    const productData = productDataMap[medicationType];

    // Store in sessionStorage and navigate
    sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Medical Questions</span>
            </div>

            {/* Connector Line - Completed */}
            <div className="flex-1 h-0.5 bg-green-600 mx-4 mb-6"></div>

            {/* Step 2 - Active */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Treatment & Prices</span>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Green Success Section */}
        <div className="bg-green-600 rounded-lg p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Awesome,<br />it looks like you qualify
              </h1>
              <p className="text-lg">
                It looks like you qualify for one of the treatments shown below. Please proceed with the purchase of your preferred treatment and the team will review your order.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-lg overflow-hidden">
                <Image
                  src="/ed_treatment/shirin-jazayeri-t.webp"
                  alt="Shirin Jazayeri"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Shirin Jazayeri</h3>
              <p className="text-sm text-gray-600">Clinical Lead</p>
              <p className="text-sm text-gray-600">GPhC Registration 2067461</p>
            </div>
          </div>
        </div>

        {/* Medication Cards */}
        <div className="space-y-6">
          {/* Sildenafil / Viagra */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => handleSelection('sildenafil1', 'tab', 'sildenafil')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('sildenafil1', 'tab', 'sildenafil') || !selectedMedications['sildenafil1']?.tab
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Sildenafil
                  </button>
                  <button
                    onClick={() => handleSelection('sildenafil1', 'tab', 'viagra')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('sildenafil1', 'tab', 'viagra')
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Viagra
                  </button>
                  {/* <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-semibold text-gray-900">Excellent</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">TrustPilot</span>
                  </div> */}
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Generic Viagra</span>
                </div>

                {/* Strength */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '25mg', label: 'Low Dosage' },
                      { value: '50mg', label: 'Best for first order' },
                      { value: '100mg', label: 'High Dosage' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelection('sildenafil1', 'strength', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('sildenafil1', 'strength', option.value) || (option.value === '50mg' && !selectedMedications['sildenafil1']?.strength)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{option.value}</div>
                        <div className="text-xs text-gray-600">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['4', '8', '16', '32', '64'].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => handleSelection('sildenafil1', 'quantity', qty)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('sildenafil1', 'quantity', qty) || (qty === '32' && !selectedMedications['sildenafil1']?.quantity)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{qty}</div>
                        <div className="text-xs text-gray-600">Tablets</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Click to Upgrade & Save!</h4>
                    <p className="text-sm text-gray-700">
                      Buy 64 tablets and save <span className="font-bold text-blue-700">£15.99*</span> | * compared to buying 2 x 32 tablets
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Price & Image */}
              <div className="lg:w-80 flex flex-col items-center">
                <div className="w-64 h-48 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/ed_treatment/sildenafil001.png"
                    alt="Sildenafil"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">£ 71.99</div>
                  <div className="text-sm text-gray-600">£ 2.25 Per tablet</div>
                </div>
                <button
                  onClick={() => handleBuyNow('sildenafil')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Prescription and Delivery Included</p>
              </div>
            </div>
          </div>

          {/* Tadalafil / Cialis */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => handleSelection('tadalafil1', 'tab', 'tadalafil')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('tadalafil1', 'tab', 'tadalafil') || !selectedMedications['tadalafil1']?.tab
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Tadalafil
                  </button>
                  <button
                    onClick={() => handleSelection('tadalafil1', 'tab', 'cialis')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('tadalafil1', 'tab', 'cialis')
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Cialis
                  </button>
                  {/* <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-semibold text-gray-900">Excellent</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">TrustPilot</span>
                  </div> */}
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Generic Cialis</span>
                </div>

                {/* Strength */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '10mg', label: 'Recommended' },
                      { value: '20mg', label: 'Higher Strength' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelection('tadalafil1', 'strength', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('tadalafil1', 'strength', option.value) || (option.value === '10mg' && !selectedMedications['tadalafil1']?.strength)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{option.value}</div>
                        <div className="text-xs text-gray-600">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['4', '8', '12', '16', '32', '64'].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => handleSelection('tadalafil1', 'quantity', qty)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('tadalafil1', 'quantity', qty) || (qty === '32' && !selectedMedications['tadalafil1']?.quantity)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{qty}</div>
                        <div className="text-xs text-gray-600">Tablets</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Click to Upgrade & Save!</h4>
                    <p className="text-sm text-gray-700">
                      Buy 64 tablets and save <span className="font-bold text-blue-700">£39.02*</span> | * compared to buying 2 x 32 tablets
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Price & Image */}
              <div className="lg:w-80 flex flex-col items-center">
                <div className="w-64 h-48 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/ed_treatment/tadalafilasneeded001.png"
                    alt="Tadalafil As Needed"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">£ 89.50</div>
                  <div className="text-sm text-gray-600">£ 2.80 Per tablet</div>
                </div>
                <button
                  onClick={() => handleBuyNow('tadalafil')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Prescription and Delivery Included</p>
              </div>
            </div>
          </div>

          {/* Tadalafil Daily */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => handleSelection('tadalafilDaily', 'tab', 'tadalafil')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('tadalafilDaily', 'tab', 'tadalafil') || !selectedMedications['tadalafilDaily']?.tab
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Tadalafil Daily
                  </button>
                  <button
                    onClick={() => handleSelection('tadalafilDaily', 'tab', 'cialis')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('tadalafilDaily', 'tab', 'cialis')
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Cialis Daily
                  </button>
                  {/* <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-semibold text-gray-900">Excellent</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">TrustPilot</span>
                  </div> */}
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Generic Cialis</span>
                </div>

                {/* Strength */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                  <div className="w-full">
                    <button
                      onClick={() => handleSelection('tadalafilDaily', 'strength', '5mg')}
                      className="w-full p-4 rounded-lg border-2 bg-green-50 border-green-600"
                    >
                      <div className="font-semibold text-gray-900">5mg</div>
                      <div className="text-xs text-gray-600">Recommended Strength</div>
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '28', label: '4 Weeks' },
                      { value: '56', label: '8 Weeks' },
                      { value: '84', label: '12 Weeks' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelection('tadalafilDaily', 'quantity', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('tadalafilDaily', 'quantity', option.value) || (option.value === '56' && !selectedMedications['tadalafilDaily']?.quantity)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{option.value} Tablets</div>
                        <div className="text-xs text-gray-600">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Click to Upgrade & Save!</h4>
                    <p className="text-sm text-gray-700">
                      Buy 56 tablets and save <span className="font-bold text-blue-700">3.5%*</span> | * compared to buying 2 x 28 tablets
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Price & Image */}
              <div className="lg:w-80 flex flex-col items-center">
                <div className="w-64 h-48 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/ed_treatment/tadalafildaily002.png"
                    alt="Tadalafil Daily"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">£ 36.00</div>
                  <div className="text-sm text-gray-600">£ 1.29 Per tablet</div>
                </div>
                <button
                  onClick={() => handleBuyNow('tadalafilDaily')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Prescription and Delivery Included</p>
              </div>
            </div>
          </div>

          {/* Spedra */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Spedra</h2>
                  {/* <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-semibold text-gray-900">Excellent</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">TrustPilot</span>
                  </div> */}
                </div>

                {/* Strength */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '50mg', label: 'Low Dosage' },
                      { value: '100mg', label: 'Best for first order' },
                      { value: '200mg', label: 'High Dosage' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelection('spedra', 'strength', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('spedra', 'strength', option.value) || (option.value === '100mg' && !selectedMedications['spedra']?.strength)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{option.value}</div>
                        <div className="text-xs text-gray-600">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['4', '8', '16', '32', '64'].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => handleSelection('spedra', 'quantity', qty)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('spedra', 'quantity', qty) || (qty === '16' && !selectedMedications['spedra']?.quantity)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{qty}</div>
                        <div className="text-xs text-gray-600">Tablets</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Click to Upgrade & Save!</h4>
                    <p className="text-sm text-gray-700">
                      Buy 32 tablets and save <span className="font-bold text-blue-700">£19.50*</span> | * compared to buying 2 x 16 tablets
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Price & Image */}
              <div className="lg:w-80 flex flex-col items-center">
                <div className="w-64 h-48 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/ed_treatment/spedra-t.png"
                    alt="Spedra"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">£ 70.00</div>
                  <div className="text-sm text-gray-600">£ 4.38 Per tablet</div>
                </div>
                <button
                  onClick={() => handleBuyNow('spedra')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Prescription and Delivery Included</p>
              </div>
            </div>
          </div>

          {/* Sildenafil / Viagra Connect */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => handleSelection('sildenafil2', 'tab', 'sildenafil')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('sildenafil2', 'tab', 'sildenafil') || !selectedMedications['sildenafil2']?.tab
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Sildenafil
                  </button>
                  <button
                    onClick={() => handleSelection('sildenafil2', 'tab', 'viagraconnect')}
                    className={`pb-2 px-4 font-semibold border-b-2 transition-colors ${isSelected('sildenafil2', 'tab', 'viagraconnect')
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-400'
                      }`}
                  >
                    Viagra Connect
                  </button>
                  {/* <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-semibold text-gray-900">Excellent</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">TrustPilot</span>
                  </div> */}
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Generic Viagra</span>
                </div>

                {/* Strength */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '25mg', label: 'Low Dosage' },
                      { value: '50mg', label: 'Best for first order' },
                      { value: '100mg', label: 'High Dosage' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelection('sildenafil2', 'strength', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('sildenafil2', 'strength', option.value) || (option.value === '50mg' && !selectedMedications['sildenafil2']?.strength)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{option.value}</div>
                        <div className="text-xs text-gray-600">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['4', '8', '16', '32', '64'].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => handleSelection('sildenafil2', 'quantity', qty)}
                        className={`p-4 rounded-lg border-2 transition-colors ${isSelected('sildenafil2', 'quantity', qty) || (qty === '32' && !selectedMedications['sildenafil2']?.quantity)
                          ? 'bg-green-50 border-green-600'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="font-semibold text-gray-900">{qty}</div>
                        <div className="text-xs text-gray-600">Tablets</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Click to Upgrade & Save!</h4>
                    <p className="text-sm text-gray-700">
                      Buy 64 tablets and save <span className="font-bold text-blue-700">£15.99*</span> | * compared to buying 2 x 32 tablets
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Price & Image */}
              <div className="lg:w-80 flex flex-col items-center">
                <div className="w-64 h-48 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/ed_treatment/viagraconnect001.png"
                    alt="Viagra Connect"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">£ 71.99</div>
                  <div className="text-sm text-gray-600">£ 2.25 Per tablet</div>
                </div>
                <button
                  onClick={() => handleBuyNow('viagraConnect')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Prescription and Delivery Included</p>
              </div>
            </div>
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

