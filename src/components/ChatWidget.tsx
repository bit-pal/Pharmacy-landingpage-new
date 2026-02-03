'use client';

import { useState } from 'react';
import { MessageCircle, X, Search, User, HelpCircle, Package, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-12 right-4 md:bottom-6 md:right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:top-4 md:right-4 w-80 h-[calc(100vh-2rem)] md:h-[calc(100vh-2rem)] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-white p-4 border-b border-gray-200 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                <div className="w-4 h-4 relative">
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white transform -translate-y-1/2"></div>
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2"></div>
                </div>
              </div>
              <span className="font-semibold text-gray-900">Assured Pharmacy</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Welcome Message */}
          <div className="p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hi There</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are Assured Pharmacy, feel free to ask us any questions. Existing customers can log in to view and track orders, and access additional information.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Usually replies in a</span>
                  <span className="font-semibold mx-1">few hours</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
                </div>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👋</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-6 pb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 px-6 overflow-y-auto">
            <h4 className="font-semibold text-gray-900 mb-6">Quick links</h4>
            <div className="space-y-0">
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-900">Your Order & Tracking Details</span>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-900">Weight Loss FAQ</span>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-900">Hair Loss FAQ</span>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-900">Erectile Dysfunction FAQ</span>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Send className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-900">Send us a message</span>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
              <span className="w-4 h-4 bg-gray-400 rounded"></span>
              <span>Powered by Richpanel</span>
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
} 