import React from 'react';
import Image from 'next/image';

export default function SafetyGuaranteeSection() {
  return (
    <div className="bg-[#F5F5E7] rounded-2xl p-8 md:p-12">
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Our 5-Point Safety<br />Guarantee
        </h2>
        <div className="flex items-center space-x-4">
          {/* Pharmacy Badge */}
          {/* <div className="relative">
            <Image
              src="/weight_management/register-pharmacy.png"
              alt="Registered Pharmacy 1121967"
              width={120}
              height={60}
              className="object-contain"
            />
          </div> */}
          {/* Trustpilot Badge */}
          {/* <div className="relative">
            <Image
              src="/weight_management/trustpilot-logo.png"
              alt="Trustpilot"
              width={100}
              height={40}
              className="object-contain"
            />
          </div> */}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Point 1 - GPHC and MHRA Regulated */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/weight_management/safety-icon-1.png"
              alt="GPHC and MHRA Regulated"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-black text-lg">GPHC and MHRA Regulated</h3>
          <p className="text-gray-600 text-sm">
            UK licensed and regulated by UK medical bodies
          </p>
        </div>

        {/* Point 2 - Certified UK Health Professionals */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/weight_management/safety-icon-2.png"
              alt="Certified UK Health Professionals"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-black text-lg">Certified UK Health Professionals</h3>
          <p className="text-gray-600 text-sm">
            Prescriptions reviewed by UK experts. Free consultations available
          </p>
        </div>

        {/* Point 3 - Authentic UK Medications */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/weight_management/safety-icon-3.png"
              alt="Authentic UK Medications"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-black text-lg">Authentic UK Medications</h3>
          <p className="text-gray-600 text-sm">
            Sourced from reputable suppliers, safety and quality-checked
          </p>
        </div>

        {/* Point 4 - Reliable UK Customer Support */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/weight_management/safety-icon-4.png"
              alt="Reliable UK Customer Support"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-black text-lg">Reliable UK Customer Support</h3>
          <p className="text-gray-600 text-sm">
            Our services are available via phone, email, and live chat
          </p>
        </div>

        {/* Point 5 - Trusted by Thousands */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/weight_management/safety-icon-5.png"
              alt="Trusted by Thousands"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-black text-lg">Trusted by Thousands</h3>
          <p className="text-gray-600 text-sm">
            Nearly 15,000 positive and satisfied reviews
          </p>
        </div>
      </div>
    </div>
  );
} 