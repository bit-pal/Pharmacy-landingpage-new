import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import BookConsultationContent from '@/components/BookConsultationContent';

export const metadata: Metadata = {
  title: "Book Your Consultation - Assured Pharmacy",
  description: "Book a consultation with Assured Pharmacy for your healthcare needs.",
};

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Custom header for booking page */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - same as Header component */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/Homepage/banner-list-logo-icon.svg"
                  alt="Assured Pharmacy Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-wide">
                ASSURED PHARMACY
              </span>
            </div>
          </Link>
          
          {/* Phone number - icon only on mobile, full number on desktop */}
          <a
            href="tel:01625460621"
            className="flex items-center gap-2 font-medium hover:no-underline"
          >
            <Phone className="w-5 h-5 text-teal-500" />
            <span className="hidden lg:inline text-sm text-gray-700">01625 460 621</span>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Book Your Consultation</h1>
          
          <BookConsultationContent />
        </div>
      </div>
    </main>
  );
}
