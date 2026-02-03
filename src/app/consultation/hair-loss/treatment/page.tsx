'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Image from 'next/image';

export default function HairLossTreatmentPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('finasteride');
  const [selectedQuantity, setSelectedQuantity] = useState('168');

  const handleBuyNow = () => {
    // Pass product data to checkout page
    const productData = {
      name: currentProduct.name,
      price: currentPrice.price,
      quantity: `${selectedQuantity} Tablets (${currentPrice.duration})`,
      type: activeTab === 'finasteride' ? 'Finasteride (Generic - Low Cost)' : 'Propecia (Branded)',
      image: currentProduct.image,
      treatment: 'hair-loss'
    };

    // Store in sessionStorage and navigate
    sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
    router.push('/checkout');
  };

  // Product data
  const products = {
    finasteride: {
      name: 'Generic Propecia',
      image: '/hair_loss/finasteride.png',
      prices: {
        '28': { price: 19.99, perTablet: 0.71, duration: '1 Month' },
        '84': { price: 49.99, perTablet: 0.60, duration: '3 Months' },
        '168': { price: 85.99, perTablet: 0.51, duration: '6 Months' }
      }
    },
    propecia: {
      name: 'Propecia',
      image: '/hair_loss/propecia.png',
      prices: {
        '28': { price: 29.99, perTablet: 1.07, duration: '1 Month' },
        '84': { price: 69.99, perTablet: 0.83, duration: '3 Months' },
        '168': { price: 119.99, perTablet: 0.71, duration: '6 Months' }
      }
    }
  };

  const currentProduct = products[activeTab as keyof typeof products];
  const currentPrice = currentProduct.prices[selectedQuantity as keyof typeof currentProduct.prices];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="flex justify-between items-center">
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
              <Image
                src="/hair_loss/shirin-jazayeri-t.webp"
                alt="Shirin Jazayeri"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 mb-1">Shirin Jazayeri</h3>
              <p className="text-sm text-gray-600">Clinical Lead</p>
              <p className="text-xs text-gray-500 mt-2">GPhC Registration 2067461</p>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Product Selection */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 border-b">
                <button
                  onClick={() => setActiveTab('finasteride')}
                  className={`px-6 py-3 font-semibold text-base transition-colors relative ${activeTab === 'finasteride'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Finasteride
                </button>
                <button
                  onClick={() => setActiveTab('propecia')}
                  className={`px-6 py-3 font-semibold text-base transition-colors relative ${activeTab === 'propecia'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Propecia
                </button>
              </div>

              {/* Quantity Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setSelectedQuantity('28')}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${selectedQuantity === '28'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="font-bold text-gray-900 mb-1">28 Tablets</div>
                    <div className="text-sm text-gray-600">1 Month</div>
                  </button>
                  <button
                    onClick={() => setSelectedQuantity('84')}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${selectedQuantity === '84'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="font-bold text-gray-900 mb-1">84 Tablets</div>
                    <div className="text-sm text-gray-600">3 Months</div>
                  </button>
                  <button
                    onClick={() => setSelectedQuantity('168')}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${selectedQuantity === '168'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    <div className="font-bold text-gray-900 mb-1">168 Tablets</div>
                    <div className="text-sm text-gray-600">6 Months</div>
                  </button>
                </div>
              </div>

              {/* TrustPilot */}
              {/* <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900">Excellent</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">★ TrustPilot</span>
                </div>
              </div> */}
            </div>

            {/* Right Side - Product Display and Purchase */}
            <div className="lg:w-96 bg-gray-50 rounded-lg p-6">
              {/* Product Badge */}
              {activeTab === 'finasteride' && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    Generic Propecia
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-center h-48">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">£ {currentPrice.price}</span>
                  <span className="text-sm text-gray-600">£ {currentPrice.perTablet} Per tablet</span>
                </div>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center transition-colors group"
              >
                Buy Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <p className="text-sm text-center text-gray-600 mt-4">
                Prescription and Delivery included
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm text-gray-900 font-medium">
            Copyright MediTrue 2025
          </p>
        </div>
      </div>
    </main>
  );
}

