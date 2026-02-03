import { Mail, Phone, MapPin, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  maxWidth?: 'normal' | 'wide';
}

export default function Footer({ maxWidth = 'normal' }: FooterProps) {
  const widthClass = maxWidth === 'wide' ? 'max-w-7xl' : 'max-w-screen-lg';

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className={`${widthClass} mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-12`}>

        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col space-y-2 mb-2 md:flex-row md:justify-between md:items-center md:space-y-0 md:mb-4">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <Image
                src="/Homepage/footer-logo-icon.png"
                alt="Assured Pharmacy logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 text-center md:text-left">MediTrue</span>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <span className="text-sm text-gray-600 font-medium">Our Social Media</span>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
              <div className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="space-y-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 mb-10">

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Regulation Information</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed px-2 md:px-0">
              MediTrue is a regulated pharmacy with the General Pharmaceutical Council. Our regulation details can be verified by clicking the image below.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              {/* <Image
                src="/Homepage/register-pharmacy.png"
                alt="Registered Pharmacy badge"
                width={112}
                height={72}
                className="object-contain"
              /> */}

              <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center shadow-sm border">
                <Image
                  src="/Homepage/footer-logo-maestro.png"
                  alt="Maestro payment method"
                  width={40}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center shadow-sm border">
                <Image
                  src="/Homepage/footer-logo-mastercard.png"
                  alt="MasterCard payment method"
                  width={40}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center shadow-sm border">
                <Image
                  src="/Homepage/footer-logo-visa.png"
                  alt="Visa payment method"
                  width={40}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="break-all">Example Email</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p>Example Phone Number</p>
              </div>
              <div className="mt-6 leading-relaxed">
                <div className="flex items-start justify-center md:justify-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">MediTrue Ltd</p>
                    <p>Example Address</p>
                    <p>Example postcode</p>
                    <p>Northern Ireland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Info</h3>
            <div className="text-sm text-gray-600 leading-relaxed px-2 md:px-0">
              <p >Our Pharmacist prescribers that work with us on a daily basis are:</p>
              <p >Example Pharmacist 1</p>
              <p >Example Pharmacist 2</p>
              <p>And our Superintendent Pharmacist is:</p>
              <p >Example Superintendent Pharmacist</p>
            </div>
          </div>
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Delivery Information</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Complaints Procedure</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Refund Policy</a>
          </div>

          {/* Copyright */}
          <div className="text-sm font-semibold text-gray-800 text-center md:text-right">
            © 2025 MediTrue
          </div>
        </div>
      </div>
    </footer>
  );
} 