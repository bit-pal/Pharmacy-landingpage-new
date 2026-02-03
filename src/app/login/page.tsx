import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Login - Assured Pharmacy",
  description: "Sign in to your Assured Pharmacy account to access your treatments and manage your orders.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Animated Trust indicators banner */}
      <AnimatedTrustBanner />

      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Branding and Illustration */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
                  A Pharmacy You<br />
                  Can Trust
                </h1>
                <p className="text-lg text-gray-700">
                  ED, Weight Loss, & Hair Loss Experts
                </p>
              </div>

              {/* Banner Front Image */}
              <div className="flex justify-start">
                <div className="w-full max-w-md h-80 relative rounded-lg overflow-hidden">
                  <Image
                    src="/Login/banner-front.png"
                    alt="Assured Pharmacy banner"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 