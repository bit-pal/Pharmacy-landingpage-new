'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('Akio');
  const [lastName, setLastName] = useState('Ito');
  const [postcode, setPostcode] = useState('');
  const [streetAddress, setStreetAddress] = useState('3-12-1 Shinjuku, Shinjuku-ku Tokyo');
  const [townCity, setTownCity] = useState('Tokyo');
  const [county, setCounty] = useState('東京都');
  const [postcodeSecond, setPostcodeSecond] = useState('160-0022');
  const [telephone, setTelephone] = useState('08077904123');
  const [differentShipping, setDifferentShipping] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState('royal-mail');

  // Payment modal state
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  // Product data state
  const [productData, setProductData] = useState({
    name: 'Viagra & Generic Sildenafil',
    price: 71.99,
    quantity: '32 (Tablets)',
    type: 'Sildenafil (Generic - Low Cost)',
    strength: '50mg (Best for first order)',
    image: '/ed_treatment/sildenafil001.png',
    treatment: 'ed'
  });

  // Load product data from sessionStorage
  useEffect(() => {
    const storedProduct = sessionStorage.getItem('checkoutProduct');
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      setProductData({
        name: parsedProduct.name,
        price: parsedProduct.price,
        quantity: parsedProduct.quantity,
        type: parsedProduct.type,
        strength: parsedProduct.strength || '',
        image: parsedProduct.image,
        treatment: parsedProduct.treatment
      });
    }
  }, []);

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePayment = () => {
    // Handle payment processing
    console.log('Processing payment...');
    alert('Payment processed successfully!');
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Medical Questions</span>
            </div>

            {/* Line 1 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 2 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Treatment & Prices</span>
            </div>

            {/* Line 2 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 3 - Current */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Column - Scrollable Forms */}
            <div className="space-y-6 lg:pr-4 flex flex-col">

              {/* Patient Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 order-1">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Patient details</h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postcode
                    </label>
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-9 text-green-600 text-sm font-medium hover:underline">
                      Find Address
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Town / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={townCity}
                      onChange={(e) => setTownCity(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        County
                      </label>
                      <input
                        type="text"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={postcodeSecond}
                        onChange={(e) => setPostcodeSecond(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 order-2">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Shipping details</h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={differentShipping}
                      onChange={(e) => setDifferentShipping(e.target.checked)}
                      className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">I have a different shipping address</span>
                  </label>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    All delivery options apart from click and collect may be posted without a signature. You confirm that no animals or children may be harmed by posting through your letterbox.
                  </div>

                  <div className="space-y-3">
                    <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${selectedShipping === 'royal-mail' ? 'border-green-500 bg-green-50' : 'border-gray-300'
                      }`}>
                      <input
                        type="radio"
                        name="shipping"
                        value="royal-mail"
                        checked={selectedShipping === 'royal-mail'}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-5 h-5 text-green-500"
                      />
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">£5.95</span>
                          <span className="text-gray-700">Royal Mail / DPD</span>
                        </div>
                        <span className="text-gray-700 font-medium">Next Day Delivery</span>
                      </div>
                    </label>

                    <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${selectedShipping === 'tracked-48' ? 'border-green-500 bg-green-50' : 'border-gray-300'
                      }`}>
                      <input
                        type="radio"
                        name="shipping"
                        value="tracked-48"
                        checked={selectedShipping === 'tracked-48'}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-5 h-5 text-green-500"
                      />
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">£0.00</span>
                          <span className="text-gray-700">Tracked 48</span>
                        </div>
                        <span className="text-gray-700 font-medium">1-3 Working Days</span>
                      </div>
                    </label>

                    <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${selectedShipping === 'tracked-24' ? 'border-green-500 bg-green-50' : 'border-gray-300'
                      }`}>
                      <input
                        type="radio"
                        name="shipping"
                        value="tracked-24"
                        checked={selectedShipping === 'tracked-24'}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-5 h-5 text-green-500"
                      />
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">£1.50</span>
                          <span className="text-gray-700">Tracked 24</span>
                        </div>
                        <span className="text-gray-700 font-medium">Usually Next Day (not guaranteed)</span>
                      </div>
                    </label>

                    <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${selectedShipping === 'click-collect' ? 'border-green-500 bg-green-50' : 'border-gray-300'
                      }`}>
                      <input
                        type="radio"
                        name="shipping"
                        value="click-collect"
                        checked={selectedShipping === 'click-collect'}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-5 h-5 text-green-500"
                      />
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">£5.95</span>
                          <span className="text-gray-700">Post Office Click & Collect</span>
                        </div>
                        <span className="text-gray-700 font-medium">Next Day Delivery</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-lg shadow-sm p-6 order-3">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Payment Methods</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Processed Securely by <span className="text-blue-600 font-medium">Ryft</span>
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                    A secure Payment window will open for you to input credit card details.
                  </div>

                  {/* Payment Card Icons */}
                  <div className="flex items-center justify-center gap-3 py-3">
                    <div className="w-16 h-10 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200">
                      <Image
                        src="/Homepage/footer-logo-visa.png"
                        alt="Visa"
                        width={45}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div className="w-16 h-10 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200">
                      <Image
                        src="/Homepage/footer-logo-mastercard.png"
                        alt="Mastercard"
                        width={45}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div className="w-16 h-10 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200">
                      <Image
                        src="/Homepage/footer-logo-maestro.png"
                        alt="Maestro"
                        width={45}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div className="w-16 h-10 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
                        <line x1="2" y1="10" x2="22" y2="10" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  <button
                    onClick={handleOpenPaymentModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Continue to Payment</span>
                    <span className="text-xl">→</span>
                  </button>

                  {/* Security Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 border border-green-300 rounded">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔒</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">VERIFIED & SECURED</span>
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded">
                      <span className="text-xs font-semibold text-blue-600">Trustwave</span>
                      <p className="text-xs text-gray-600">Trusted Commerce</p>
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded flex items-center justify-center">
                      <Image
                        src={`/${productData.treatment === 'ed' ? 'ed_treatment' : productData.treatment === 'hair-loss' ? 'hair_loss' : productData.treatment === 'premature-ejaculation' ? 'pe_treatment' : 'weight_management'}/register-pharmacy.png`}
                        alt="Registered Pharmacy"
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded flex items-center justify-center">
                      <Image
                        src={`/${productData.treatment === 'ed' ? 'ed_treatment' : productData.treatment === 'hair-loss' ? 'hair_loss' : productData.treatment === 'premature-ejaculation' ? 'pe_treatment' : 'weight_management'}/home-logo-royal-mail.png`}
                        alt="Royal Mail"
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Order Summary (Sticky) */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Product Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={productData.image}
                    alt={productData.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {productData.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">£{productData.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                  {productData.strength && (
                    <div className="flex justify-between items-start">
                      <span className="text-sm text-gray-700">Strength:</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{productData.strength}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-700">Quantity:</span>
                    <span className="text-sm font-medium text-gray-900 text-right">{productData.quantity}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-700">Generic or Branded:</span>
                    <span className="text-sm font-medium text-gray-900 text-right">{productData.type}</span>
                  </div>
                </div>

                {/* Apply Discount Code */}
                <button className="w-full text-left text-gray-600 text-sm py-3 px-4 bg-white border border-gray-300 rounded-md hover:bg-gray-50 mb-6 flex justify-between items-center">
                  <span>Apply Discount Code</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Price Summary */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-700">Cart Subtotal</span>
                    <span className="text-sm font-medium text-gray-900">£{productData.price.toFixed(2)}</span>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Shipping</span>
                      <span className="text-sm font-medium text-gray-900">£5.95</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Next Day Delivery - Royal Mail / DPD</p>
                  </div>
                </div>

                {/* Order Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-base font-bold text-gray-900">Order Total</span>
                  <span className="text-2xl font-bold text-gray-900">£{(productData.price + 5.95).toFixed(2)}</span>
                </div>

                {/* Continue to Payment Button */}
                <button
                  onClick={handleOpenPaymentModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <span>Continue to Payment</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <p className="text-xs text-gray-700 text-center leading-relaxed">
                  A secure Payment window will open for you to input credit card details.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">Copyright MediTrue 2025</p>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 relative min-h-[400px]">
            {/* Close Button */}
            <button
              onClick={handleClosePaymentModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment</h2>

            {/* Card Input Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white">
                {/* Card Icon */}
                <div className="mr-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>

                {/* Card Number Input */}
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-300 text-sm"
                  maxLength={19}
                />

                {/* MM/YY Input */}
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-16 outline-none text-gray-900 placeholder-gray-300 text-right text-sm mr-3"
                  maxLength={5}
                />

                {/* CVC Input */}
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-12 outline-none text-gray-900 placeholder-gray-300 text-right text-sm"
                  maxLength={4}
                />
              </div>
            </div>

            {/* Save card checkbox */}
            <div className="mb-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600 italic">Save card for future payments</span>
              </label>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center text-base"
            >
              Pay £77.94 →→
            </button>

            {/* Chat/Support Button */}
            <button className="absolute bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
