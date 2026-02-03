'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X } from 'lucide-react';
import StartConsultationButton from './StartConsultationButton';
import AccountLoginButton from './AccountLoginButton';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    const loginInfoStr = sessionStorage.getItem('loginInfo');
    setLoginInfo(loginInfoStr ? JSON.parse(loginInfoStr) : null);
  }, []);

  return (
    <header className="bg-white relative">
      {/* Top bar with light green background */}
      <div className="bg-green-100 py-3">
        <div className="text-center">
          <p className="text-gray-700 text-sm">Orders before 3:45pm are processed the same day.</p>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto flex items-center justify-between px-4 py-4 max-w-screen-lg">
          {/* Left side - Hamburger menu and Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"

              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Image
                  src="/Homepage/header-menu-btn-icon-alt.png"
                  alt="Open menu"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-3">
                {/* Banner list logo icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/Homepage/banner-list-logo-icon.svg"
                    alt="MediTrue Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-wide">
                  MediTrue
                </span>
              </div>
            </Link>
          </div>

          {/* Right side - Phone and buttons */}
          <div className="flex items-center gap-4">
            {/* Phone number */}
            <a
              href="tel:01625460621"
              className="hidden items-center gap-2 font-medium hover:no-underline lg:flex"
            >
              <Phone className="w-4 h-4 text-teal-500" />
              <span className="text-sm text-gray-700">example phone number</span>
            </a>

            {/* Desktop Buttons */}
            {pathname.includes('/consultation/') ? (
              <></>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <StartConsultationButton />
                <AccountLoginButton href={loginInfo ? '/customer/account' : '/login'}>
                  {loginInfo ? "My Account" : "Account Login"}
                </AccountLoginButton>
              </div>
            )}

            {/* Mobile Button - Only My Account */}
            <div className="md:hidden">
              <AccountLoginButton href={loginInfo ? '/customer/account' : '/login'}>
                {loginInfo ? "My Account" : "Account Login"}
              </AccountLoginButton>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50">
          {/* X button positioned slightly left of center */}
          <div className="absolute top-8 left-1/4 transform -translate-x-1/2" >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Menu Items - Centered positioning */}
          <div className="pt-32">
            <nav className="max-w-md ml-[22%] px-8">
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.05s_forwards]">
                <a
                  href="/"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Home</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.1s_forwards]">
                <a
                  href="/weight-loss"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Weight Loss</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.15s_forwards]">
                <a
                  href="/erectile-dysfunction"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Erectile Dysfunction</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.2s_forwards]">
                <a
                  href="/hair-loss"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Hair Loss</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.25s_forwards]">
                <a
                  href="/premature-ejaculation"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Premature Ejaculation</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.3s_forwards]">
                <a
                  href="/delivery-information"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Delivery</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.35s_forwards]">
                <a
                  href="/about-us"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>About Us</b>
                </a>
              </div>
              <div className="hover:bg-gray-100 transition-colors duration-200 -mx-8 opacity-0 translate-y-4 animate-[slideIn_0.3s_ease-out_0.4s_forwards]">
                <a
                  href="/contact-us"
                  className="block py-3 px-8 text-2xl font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <b>Contact Us</b>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 