'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface ConsultationCardProps {
  title: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  additionalContent?: React.ReactNode;
  doctorName?: string;
  doctorTitle?: string;
  doctorRegistration?: string;
  doctorImage?: string;
}

export default function ConsultationCard({
  title,
  description,
  features,
  buttonText,
  buttonLink,
  onButtonClick,
  additionalContent,
  doctorName = "Shirin Jazayeri",
  doctorTitle = "Clinical Lead",
  doctorRegistration = "GPhC Registration 2067461",
  doctorImage
}: ConsultationCardProps) {
  return (
    <div className="bg-green-500 rounded-2xl p-6 md:p-12 text-white w-full">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col space-y-6">
        {/* Title and Description */}
        <div>
          <h1
            className="text-2xl font-bold mb-3 leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-base text-green-50 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Doctor Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-4 text-center shadow-lg w-full max-w-xs">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden relative">
              {/* {doctorImage ? (
                <Image
                  src={doctorImage}
                  alt={doctorName}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 text-xs">Doctor Photo</div>
                </div>
              )} */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-gray-600 text-xs">Doctor Photo</div>
              </div>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Doctor Name</h3>
            <p className="text-sm text-gray-600 mb-1">Doctor Title</p>
            <p className="text-xs text-gray-500">Doctor Registration</p>
          </div>
        </div>

        {/* Button */}
        <div>
          {onButtonClick ? (
            <button
              onClick={onButtonClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-base"
            >
              {buttonText}
            </button>
          ) : (
            <Link
              href={buttonLink || '#'}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-base text-center"
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Features Icons */}
        <div className="flex justify-between items-start gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <p className="font-semibold text-white text-sm leading-tight">{feature.title}</p>
              <p className="text-green-100 text-xs">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {additionalContent && (
          <div className="text-green-100 text-sm">
            {additionalContent}
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {/* Left Content Section */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1
              className="text-4xl font-bold mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-lg text-green-50 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-base">{feature.title}</p>
                  <p className="text-green-100 text-sm">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button and Additional Content */}
          <div className="space-y-4">
            <div className="pt-4">
              {onButtonClick ? (
                <button
                  onClick={onButtonClick}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg text-center"
                >
                  {buttonText}
                </button>
              ) : (
                <Link
                  href={buttonLink || '#'}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg text-center"
                >
                  {buttonText}
                </Link>
              )}
            </div>

            {additionalContent && (
              <div className="text-green-100 text-base">
                {additionalContent}
              </div>
            )}
          </div>
        </div>

        {/* Right Doctor Profile Section */}
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg max-w-xs w-full">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              {/* {doctorImage ? (
                <Image
                  src={doctorImage}
                  alt={doctorName}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 text-xs">Doctor Photo</div>
                </div>
              )} */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-gray-600 text-xs">Doctor Photo</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Doctor Name</h3>
            <p className="text-sm text-blue-600 font-medium mb-1">Doctor Title</p>
            <p className="text-xs text-gray-500">Doctor Registration</p>
          </div>
        </div>
      </div>
    </div>
  );
} 