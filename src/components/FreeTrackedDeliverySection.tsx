import Image from 'next/image';

export default function FreeTrackedDeliverySection() {
  return (
    <section className="bg-gray-100 py-5 px-3 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free Tracked Delivery
            </h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              We use Royal Mail Tracked delivery for free and DPD guaranteed{' '}
              <strong>next day delivery for £5.95</strong>
            </p>
            
            {/* Mobile - Delivery logos below text */}
            <div className="flex items-center justify-center space-x-4">
              {/* DPD Logo */}
              <div className="  flex items-center justify-center p-1">
                <Image
                  src="/Homepage/home-logo-dpdgroup.png"
                  alt="DPD Group logo"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
              
              {/* Royal Mail Logo */}
              <div className="w-20 h-12 bg-gray-50 rounded border flex items-center justify-center p-1">
                <Image
                  src="/Homepage/home-logo-royal-mail.png"
                  alt="Royal Mail logo"
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left side - Title and description */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Tracked Delivery
              </h3>
              <p className="text-gray-700 text-base">
                We use Royal Mail Tracked delivery for free and DPD guaranteed{' '}
                <strong>next day delivery for £5.95</strong>
              </p>
            </div>
            
            {/* Right side - Delivery logos */}
            <div className="flex items-center space-x-4 ml-8">
              {/* DPD Logo */}
              <div className="w-16 h-10 bg-gray-50 rounded border flex items-center justify-center p-1">
                <Image
                  src="/Homepage/home-logo-dpdgroup.png"
                  alt="DPD Group logo"
                  width={50}
                  height={25}
                  className="object-contain"
                />
              </div>
              
              {/* Royal Mail Logo */}
              <div className="w-20 h-10 bg-gray-50 rounded border flex items-center justify-center p-1">
                <Image
                  src="/Homepage/home-logo-royal-mail.png"
                  alt="Royal Mail logo"
                  width={60}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 