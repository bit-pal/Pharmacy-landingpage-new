import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpandableDeliveryInfo from '@/components/ExpandableDeliveryInfo';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Delivery Information - Assured Pharmacy",
  description: "Learn about our delivery options including Royal Mail Tracked, Special Delivery, and Collection services. Fast, secure, and discreet delivery across the UK.",
};

export default function DeliveryInformationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
   
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-8">          
          {/* Delivery Information Section */}
          <div className="rounded-lg p-6 shadow-sm border-b border-gray-200">
            
            {/* Opening Hours */}
            <div className="mb-6">
              <p className="text-gray-700 mb-3 leading-relaxed">
                We are open Monday to Friday from 9am until 4:30pm. Orders received before 3:45pm (Monday to Friday) will be posted via Royal Mail the same day, subject to our prescribers not needing any further medical information. Please note that we are closed on weekends and bank holidays.
              </p>
              <p className="text-gray-700 font-medium">
                Orders received out of hours will be processed on the first following working day.
              </p>
            </div>

            {/* Delivery Options Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Delivery Options</h1>
              <p className="text-gray-600">We have 4 Delivery options at Assured Pharmacy</p>
            </div>

            {/* Delivery Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Royal Mail Tracked 48/24 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-700 rounded-lg flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src="/delivery/royal-mail-logo.png"
                        alt="Royal Mail"
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Royal Mail Tracked 48/24</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                             Doesn&apos;t require a signature upon delivery
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comes through your letterbox
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Average delivery 1-2 days for Tracked 24
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Average delivery 1-3 days for Tracked 48
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tracked 48 is free of charge
                    </li>
                  </ul>
                </div>
              </div>

              {/* Special Delivery by DPD */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-700 rounded-lg flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src="/delivery/dpd-logo.png"
                        alt="DPD"
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Delivery by DPD</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Next day delivery or a full refund
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comes through your letterbox
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Orders on Fridays aren&apos;t guaranteed to arrive on Saturdays, although in most cases they will.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Costs £5.95
                    </li>
                  </ul>
                </div>
              </div>

              {/* Royal Mail Special Delivery */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-700 rounded-lg flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src="/delivery/royal-mail-logo.png"
                        alt="Royal Mail"
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Royal Mail Special Delivery</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Next day delivery or a full refund
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comes through your letterbox
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Orders on Fridays aren&apos;t guaranteed to arrive on Saturdays, although in most cases they will.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Costs £5.95
                    </li>
                  </ul>
                </div>
              </div>

              {/* Royal Mail Collection */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-700 rounded-lg flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src="/delivery/royal-collection-logo-vertical.png"
                        alt="Royal Mail Collection"
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Royal Mail Collection</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Requires ID or signature to pick up parcel
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Received at the nearest selected post office
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Orders on Fridays aren&apos;t guaranteed to arrive on Saturdays, although in most cases they will.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Costs £5.95
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>

      {/* Detailed Delivery Information Section */}
      <ExpandableDeliveryInfo />

      <Footer />
    </main>
  );
} 