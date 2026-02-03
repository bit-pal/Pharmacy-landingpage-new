'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function PrematureEjaculationTreatmentPage() {
  const router = useRouter();
  const [activeStrength, setActiveStrength] = useState<'30mg' | '60mg'>('30mg');
  const [selectedQuantity, setSelectedQuantity] = useState<'3' | '6' | '12'>('12');

  // Product pricing data
  const products = {
    '30mg': {
      name: 'Priligy (Dapoxetine)',
      image: '/pe_treatment/priligy001.png',
      prices: {
        '3': { price: 29.99, perTablet: 9.99 },
        '6': { price: 55.00, perTablet: 9.17 },
        '12': { price: 85.00, perTablet: 7.08 }
      }
    },
    '60mg': {
      name: 'Priligy (Dapoxetine)',
      image: '/pe_treatment/priligy001.png',
      prices: {
        '3': { price: 39.99, perTablet: 13.33 },
        '6': { price: 75.00, perTablet: 12.50 },
        '12': { price: 120.00, perTablet: 10.00 }
      }
    }
  };

  const currentProduct = products[activeStrength];
  const currentPrice = currentProduct.prices[selectedQuantity];

  const handleBuyNow = () => {
    const productData = {
      name: currentProduct.name,
      price: currentPrice.price,
      quantity: `${selectedQuantity} Tablets`,
      type: `${activeStrength} (${activeStrength === '30mg' ? 'Recommended' : 'High Dosage'})`,
      image: currentProduct.image,
      treatment: 'premature-ejaculation'
    };
    sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="flex justify-between items-center">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-900 whitespace-nowrap">Medical Questions</span>
            </div>

            {/* Connector Line 1 */}
            <div className="flex-1 h-0.5 bg-green-500 mx-2 mb-6"></div>

            {/* Step 2 - Current */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-900 whitespace-nowrap">Treatment & Prices</span>
            </div>

            {/* Connector Line 2 */}
            <div className="flex-1 h-0.5 bg-gray-300 mx-2 mb-6"></div>

            {/* Step 3 - Pending */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mb-2">
                <span className="text-white font-semibold">3</span>
              </div>
              <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Green Header Section */}
      <div className="py-8">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Awesome,<br />
                  it looks like you qualify
                </h1>
                <p className="text-lg opacity-90">
                  It looks like you qualify for one of the treatments shown below. Please proceed with the purchase of your preferred treatment and the team will review your order.
                </p>
              </div>

              {/* Doctor Card */}
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Image
                  src="/pe_treatment/shirin-jazayeri-t.webp"
                  alt="Shirin Jazayeri"
                  width={120}
                  height={120}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-900 text-lg">Shirin Jazayeri</h3>
                <p className="text-sm text-gray-600 mb-1">Clinical Lead</p>
                <p className="text-xs text-gray-500">GPhC Registration 2067481</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-lg px-4 py-8">
        {/* Product Card */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Product Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Priligy (Dapoxetine)</h2>
                {/* <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Excellent</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">TrustPilot</span>
                </div> */}
              </div>

              {/* Strength Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Strength</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveStrength('30mg')}
                    className={`p-4 rounded-lg border-2 transition-colors ${activeStrength === '30mg'
                      ? 'bg-green-50 border-green-500'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-gray-900">30mg</div>
                      <div className="text-sm text-blue-600 font-medium mt-1">Recommended</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveStrength('60mg')}
                    className={`p-4 rounded-lg border-2 transition-colors ${activeStrength === '60mg'
                      ? 'bg-white border-gray-900'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-gray-900">60mg</div>
                      <div className="text-sm text-red-600 font-medium mt-1">High Dosage</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setSelectedQuantity('3')}
                    className={`p-4 rounded-lg border-2 transition-colors ${selectedQuantity === '3'
                      ? 'bg-white border-gray-900'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-gray-900">3</div>
                      <div className="text-sm text-blue-600">Tablets</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedQuantity('6')}
                    className={`p-4 rounded-lg border-2 transition-colors ${selectedQuantity === '6'
                      ? 'bg-white border-gray-900'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-gray-900">6</div>
                      <div className="text-sm text-blue-600">Tablets</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedQuantity('12')}
                    className={`p-4 rounded-lg border-2 transition-colors ${selectedQuantity === '12'
                      ? 'bg-green-50 border-green-500'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-gray-900">12</div>
                      <div className="text-sm text-blue-600">Tablets</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Product Image and Price */}
            <div className="lg:w-80">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  £ {currentPrice.price.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">
                  £ {currentPrice.perTablet.toFixed(2)} Per tablet
                </div>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Buy Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <p className="text-xs text-center text-gray-600 mt-3">
                Prescription and Delivery Included
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8 mt-12">
        <div className="mx-auto max-w-screen-lg px-4">
          <p className="text-center text-sm text-gray-900 font-medium">
            Copyright MediTrue 2025
          </p>
        </div>
      </div>
    </div>
  );
}

