'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

interface AccountWelcomeCardProps {
  description?: string;
}

export default function AccountWelcomeCard({
  description = "From your account dashboard you can view your recent orders, manage your shipping and billing addresses"
}: AccountWelcomeCardProps) {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<{
    firstName: string | undefined;
    lastName: string | undefined;
  } | null>(null);

  useEffect(() => {
    const loginInfoStr = sessionStorage.getItem('loginInfo');
    if (loginInfoStr) {
      const loginData = JSON.parse(loginInfoStr);
      setLoginInfo({
        firstName: loginData?.firstName,
        lastName: loginData?.lastName
      })
    }
  }, []);

  const handleEditAccount = () => {
    router.push('/customer/account/edit');
  };

  const handleEmailPreferences = () => {
    router.push('/customer/account/email-preferences');
  };

  const handleSignOut = () => {
    sessionStorage.removeItem('loginInfo');
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 mb-8 border border-gray-200">
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Hello, {loginInfo?.firstName} {loginInfo?.lastName}</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Buttons section */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleEditAccount}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-md transition-colors duration-200 text-sm"
          >
            Edit Password And Account Details
          </button>
          <button
            onClick={handleEmailPreferences}
            className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-md transition-colors duration-200 text-sm"
          >
            Manage Email Preferences
          </button>
          <button
            onClick={handleSignOut}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2.5 rounded-md transition-colors duration-200 text-sm"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
} 