'use client';

import { useState } from 'react';

export default function ExpandableDeliveryInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <button 
            className="w-full flex items-center justify-between p-6 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h2 className="text-xl font-semibold text-gray-900">Detailed Delivery Information</h2>
            <svg 
              className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${isExpanded ? '' : 'rotate-180'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          
          {/* Expandable Content */}
          {isExpanded && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  All orders are sent in <span className="font-semibold">discreet</span> non branded packaging for your peace of mind. Your credit card statement will say &apos;Assured Direct&apos; for your privacy and we are also able to post medicines to an alternative address (for instance a work address). Please note, however, that we are unable to post medicines to third parties- we must ensure that the patient ordering the medicine is the person who receives it.
                </p>
                
                <p>
                  For some services you may be asked to sign for your package and if you are not at home a delivery notice will be left and the package will be conveniently held at your local Royal Mail delivery office for collection, or if you requested the premium courier service you can arrange another delivery date by text or email.
                </p>
                
                <p>
                  Should you wish for delivery on a specific day, then please just call or email us. We&apos;re always happy to help.
                </p>
                
                <p>
                  We do want our customers to know that we do everything possible to get your order to you as quickly as possible. We are, as all ecommerce businesses are, reliant on our couriers. No courier has a 100% on time record. In the unlikely event that your order is late, please contact us and we will refund you any delivery costs.
                </p>
                
                <p>
                  We ask that you store your medicines safely and out of the reach of children. In the unlikely event you wish to return unwanted medicines for us to dispose of safely for you, you can post them back to us free of charge.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 