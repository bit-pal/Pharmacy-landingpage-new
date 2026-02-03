import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';

export const metadata: Metadata = {
  title: "Edit Account - Assured Pharmacy",
  description: "Edit your account information and manage your Assured Pharmacy profile.",
};

export default function EditAccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <AnimatedTrustBanner />
      
      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Account Information</h1>
          
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <div className="text-base font-bold text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </div>
              <div className="text-gray-900 text-lg">Akio</div>
            </div>

            {/* Last Name */}
            <div>
              <div className="text-base font-bold text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </div>
              <div className="text-gray-900 text-lg">Ito</div>
            </div>

            {/* Change Email Checkbox */}
            <div className="flex items-center space-x-3 py-2">
              <input
                type="checkbox"
                id="changeEmail"
                name="changeEmail"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="changeEmail" className="text-base text-gray-700">
                Change Email
              </label>
            </div>

            {/* Change Password Checkbox */}
            <div className="flex items-center space-x-3 py-2">
              <input
                type="checkbox"
                id="changePassword"
                name="changePassword"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="changePassword" className="text-base text-gray-700">
                Change Password
              </label>
            </div>

            {/* Save Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
