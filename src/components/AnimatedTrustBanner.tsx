'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const trustItems = [
  {
    id: 1,
    text: "Free Tracked Delivery",
    icon: "/Login/fast-delivery.png"
  },
  {
    id: 2,
    text: "Lowest Price Guarantee",
    icon: "/Login/currency.png"
  },
  {
    id: 3,
    text: "We are based in the UK",
    icon: "/Login/location.png"
  }
];

export default function AnimatedTrustBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === trustItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-white text-sm h-6 relative">
          {/* Desktop: Show all items */}
          <div className="hidden md:flex justify-between items-center w-full space-x-8">
            {trustItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <div className="w-4 h-4 relative flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.text} icon`}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Mobile: Sliding items one by one */}
          <div className="md:hidden relative w-full overflow-hidden h-6">
            {isClient ? (
              <div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center animate-slide-in-out"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 relative flex-shrink-0">
                    <Image
                      src={trustItems[currentIndex].icon}
                      alt={`${trustItems[currentIndex].text} icon`}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span className="whitespace-nowrap">{trustItems[currentIndex].text}</span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 relative flex-shrink-0">
                    <Image
                      src={trustItems[0].icon}
                      alt={`${trustItems[0].text} icon`}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span className="whitespace-nowrap">{trustItems[0].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 