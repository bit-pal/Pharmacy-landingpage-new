'use client';

import Link from 'next/link';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
}

export default function CTABanner({
  message,
  buttonText,
  buttonLink,
  backgroundColor = "bg-gray-200",
  textColor = "text-black",
  buttonColor = "bg-blue-600",
  buttonHoverColor = "hover:bg-blue-700"
}: CTABannerProps) {
  return (
    <div className={`${backgroundColor} rounded-2xl p-6 md:p-4`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-bold ${textColor}`}>
            {message}
          </h3>
        </div>
        
        <div className="flex-shrink-0">
          <Link 
            href={buttonLink}
            className={`inline-block ${buttonColor} ${buttonHoverColor} text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-colors duration-200`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
} 