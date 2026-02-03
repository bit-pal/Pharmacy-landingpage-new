import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustpilotReviewsSection from '@/components/TrustpilotReviewsSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us - Assured Pharmacy",
  description: "Learn about Assured Pharmacy - A Pharmacy You Can Trust. UK sourced medications, qualified healthcare professionals, competitive prices, and secure delivery service.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Main content area */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Us Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">

            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">MediTrue</h1>
              <p className="text-xl text-gray-600">A Pharmacy You Can Trust</p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

              {/* Left Content - Features in Two Columns */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Safety & Quality */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety & Quality of our Medication</h3>
                      <p className="text-gray-700 leading-relaxed">
                        All medicines are UK sourced and even our generic lines (i.e. non-branded products) are predominantly manufactured by Accord.
                      </p>
                    </div>
                  </div>

                  {/* Qualified Healthcare */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Healthcare Professionals</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our Pharmacists are regulated by the General Pharmaceutical Council, check our pharmacy registration by{' '}
                        <a href="#" className="text-teal-600 hover:text-teal-700 underline">clicking here</a>
                      </p>
                    </div>
                  </div>

                  {/* Competitive Prices */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitiveness of Our Prices</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We offer a price promise guarantee. If you find one of our products cheaper elsewhere, we will refund the difference.
                      </p>
                    </div>
                  </div>

                  {/* Secure Delivery */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable Delivery Service</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We offer delivery services that cover all the areas in the United Kingdom, our standard delivery is free of charge.
                      </p>
                    </div>
                  </div>

                  {/* Fully Regulated */}
                  {/* <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-12">
                        <Image
                          src="/about_us/register-pharmacy.png"
                          alt="Registered Pharmacy"
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Regulated</h3>
                    </div>
                  </div> */}

                </div>
              </div>

              {/* Right Content - Video Section */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-400 via-blue-400 to-blue-500 rounded-2xl overflow-hidden relative">

                  {/* News Badge */}
                  <div className="relative z-10 p-6 pb-0">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="bg-purple-800 px-3 py-1 rounded-full flex items-center space-x-2">
                        <div className="relative w-4 h-4">
                          <Image
                            src="/about_us/channel-4-news-logo.png"
                            alt="Channel 4 News"
                            fill
                            className="object-contain"
                            sizes="16px"
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">News</span>
                      </div>
                      <span className="text-sm text-white">We&apos;re on C4 News!</span>
                    </div>
                  </div>

                  {/* Video Background with Play Button */}
                  <div className="relative">
                    <div className="relative aspect-video">
                      <Image
                        src="/about_us/about-page-video-bg.png"
                        alt="Assured Pharmacy C4 News Video"
                        fill
                        className="object-cover rounded-b-2xl"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-16 h-16">
                          <Image
                            src="/about_us/video-play-btn.png"
                            alt="Play Video"
                            fill
                            className="object-contain cursor-pointer hover:scale-110 transition-transform"
                            sizes="64px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Trustpilot Reviews Section */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* <TrustpilotReviewsSection /> */}
        </div>
      </div>

      <Footer />
    </main>
  );
} 