import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Contact Us - Assured Pharmacy",
  description: "Get in touch with Assured Pharmacy. Contact us for any inquiry about our services, medications, or general questions. We're here to help.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Main content area */}
      <div className="py-6">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Left Content - Contact Form */}
              <div>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">Contact us</h1>
                  <p className="text-gray-600">Reach out to us for any inquiry</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                        placeholder="Your Name"
                        required
                      />
                      <span className="absolute right-3 top-2 text-red-500 text-sm">Required</span>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                        placeholder="Your Email"
                        required
                      />
                      <span className="absolute right-3 top-2 text-red-500 text-sm">Required</span>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Content - Map and Info */}
              <div className="space-y-4 flex flex-col">

                {/* Map Section - Live Google Map */}
                <div className="bg-gray-200 rounded-lg overflow-hidden flex-1 relative">
                  {/* Live Google Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.123456789!2d-2.2276543!3d53.3280123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4c5e12345678%3A0xabcdef1234567890!2sWilmslow%2C%20UK!5e0!3m2!1sen!2suk!4v1699123456789!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MediTrue Location"
                    className="w-full h-full"
                  ></iframe>

                  {/* Address Info Box Overlay */}
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">MediTrue Ltd</p>
                        <p className="text-gray-600">Example Address</p>
                        <p className="text-gray-600">Example Postcode</p>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400 text-xs">
                            {'★'.repeat(5)}
                          </div>
                          <span className="text-gray-500 text-xs ml-1">78 reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Please be aware that we are not an emergency medical service. If you <span className="text-blue-600">require urgent medical assistance</span>, please call 999.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Information - Bottom Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-blue-600 hover:text-blue-700 text-sm">
                      <a href="mailto:example mail">example mail</a>
                    </p>
                  </div>
                </div>

                {/* Prescriber Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Prescriber Email</h3>
                    <p className="text-blue-600 hover:text-blue-700 text-sm">
                      <a href="mailto:prescriber mail">prescriber mail</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-blue-600 hover:text-blue-700 text-sm">
                      <a href="tel:01625460621">example phone</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
} 