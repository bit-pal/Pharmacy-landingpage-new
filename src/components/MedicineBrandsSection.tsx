'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const brands = [
  {
    name: 'Accord',
    image: '/Homepage/accord.webp',
    alt: 'Accord Healthcare logo'
  },
  {
    name: 'Lilly',
    image: '/Homepage/lilly.webp',
    alt: 'Eli Lilly logo'
  },
  {
    name: 'Novo Nordisk',
    image: '/Homepage/novonordisk.webp',
    alt: 'Novo Nordisk logo'
  },
  {
    name: 'Pfizer',
    image: '/Homepage/pfizer.webp',
    alt: 'Pfizer logo'
  },
  {
    name: 'Teva',
    image: '/Homepage/teva.webp',
    alt: 'Teva Pharmaceuticals logo'
  },
];

export default function MedicineBrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Medicine Brands
          </h2>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 p-2"
            >
              <Image
                src={brand.image}
                alt={brand.alt}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Carousel Layout */}
        <div className="md:hidden">
          {/* Brand Display */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center w-48 h-20 bg-white p-4">
              <Image
                src={brands[currentIndex].image}
                alt={brands[currentIndex].alt}
                width={180}
                height={75}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 