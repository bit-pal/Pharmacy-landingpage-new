import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';

export const metadata: Metadata = {
  title: "Email Preferences - Assured Pharmacy",
  description: "Manage your email preferences and marketing communications.",
};

export default function EmailPreferencesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <AnimatedTrustBanner />
      
      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* User Information */}
            <div className="mb-8">
              <div className="text-base text-gray-900 mb-1">
                <span className="text-gray-700">Name:</span> Akio Ito
              </div>
              <div className="text-base text-gray-900">
                <span className="text-gray-700">Email:</span> akioito217@gmail.com
              </div>
            </div>

            {/* Marketing Emails Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base text-gray-900">Marketing Emails</h2>
                <div className="flex items-center space-x-3">
                  <span className="text-base text-gray-900">Opt-out</span>
                  <input
                    type="checkbox"
                    id="optOut"
                    name="optOut"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
              </div>
              
              <p className="text-base text-gray-900 mb-6">
                Unsubscribe from all marketing emails (promotional emails, discount offers)
              </p>
            </div>

            {/* Save Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
