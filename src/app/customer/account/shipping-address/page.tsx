'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';
import { useRouter } from 'next/navigation';

export default function ShippingAddressPage() {
  const router = useRouter();

  const handleSaveAddress = () => {
    // Here you would typically save the address data
    // For now, just navigate back to account page
    router.push('/customer/account');
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <AnimatedTrustBanner />

      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Contact Information</h2>

                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">Akio</div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">Ito</div>
                  </div>

                  {/* Company */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">Company</div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2"></div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">08077904123</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Address</h2>

                <div className="space-y-6">
                  {/* Address Search */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">Address Search</div>
                    <div className="text-sm text-gray-500 border-b border-gray-300 pb-2 mb-3">Start with post/zip code or street</div>
                  </div>

                  {/* Street Address */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">3-12-1 Shinjuku, Shinjuku-ku Tokyo</div>
                  </div>

                  {/* Country */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                      <div className="text-base text-gray-900">United Kingdom</div>
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* State/Province */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">State/Province</div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">東京都</div>
                  </div>

                  {/* City */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </div>
                    <div className="text-base text-gray-900 border-b border-gray-300 pb-2">Tokyo</div>
                  </div>

                  {/* Zip/Postal Code */}
                  <div>
                    <div className="text-base text-gray-700 mb-2">Postal Code</div>
                    <div className="flex items-center justify-between">
                      <div className="text-base text-gray-900 border-b border-gray-300 pb-2 flex-1">160-0022</div>
                      <button className="ml-4 text-green-600 hover:text-green-800 text-sm font-medium">
                        Find Address
                      </button>
                    </div>
                  </div>

                  {/* Default Shipping Address */}
                  <div className="bg-green-100 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-700 text-sm font-medium">It&apos;s a default shipping address.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Address Button */}
            <div className="mt-8">
              <button
                onClick={handleSaveAddress}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
