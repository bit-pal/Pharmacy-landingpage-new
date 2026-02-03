'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 to-blue-50"
      style={{
        backgroundImage: `
          url('/Homepage/infinite-bg.svg'),
          radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `,
        backgroundSize: 'auto, 300px 300px, 400px 400px',
        backgroundPosition: 'center, top left, bottom right',
        backgroundRepeat: 'repeat, no-repeat, no-repeat'
      }}
    >
      <div className="max-w-screen-lg mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              A Pharmacy You<br />
              Can Trust
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 font-medium">
              ED, Weight Loss, & Hair Loss Experts
            </h2>

            {/* Trust badges with banner-list-logo icons */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Homepage/banner-list-logo-icon.svg"
                    alt="Trust badge icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">Free Tracked Delivery</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Homepage/banner-list-logo-icon.svg"
                    alt="Trust badge icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">Lowest UK Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Homepage/banner-list-logo-icon.svg"
                    alt="Trust badge icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">Safe UK-Regulated Pharmacy</span>
              </div>
            </div>
          </div>

          {/* Right side - Medical doctor image - Hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden">
              <Image
                src="/Homepage/banner-doctor.png"
                alt="Medical doctor with pharmacy background"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 0px, 512px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 