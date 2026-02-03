'use client';

import React, { useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    id: 1,
    title: "They are a very professional company...",
    content: "They are a very professional company always keep you updated and always receive excellent service every time.",
    author: "Amanda Thewlis",
    date: "11 September",
    rating: 5
  },
  {
    id: 2,
    title: "Excellent experience with Assured...",
    content: "Excellent experience with Assured Pharmacy, customer care has been amazing. Care team very professional and helpful.",
    author: "Heidi",
    date: "25 August", 
    rating: 5
  },
  {
    id: 3,
    title: "Outstanding service and delivery...",
    content: "Outstanding service and delivery. The consultation process was thorough and the medication arrived quickly and discreetly.",
    author: "Michael Johnson",
    date: "18 September",
    rating: 5
  },
  {
    id: 4,
    title: "Highly recommend this pharmacy...",
    content: "Highly recommend this pharmacy. Professional, reliable, and excellent customer support throughout the entire process.",
    author: "Sarah Williams",
    date: "22 August",
    rating: 5
  },
  {
    id: 5,
    title: "Fast and efficient service...",
    content: "Fast and efficient service with great communication. The online consultation was easy and the delivery was prompt.",
    author: "David Brown",
    date: "15 September",
    rating: 5
  }
];

export default function TrustpilotReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-black">Excellent</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600">Based on 15,007 reviews</p>
            <div className="flex items-center space-x-1">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-bold text-black">Trustpilot</span>
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="text-gray-500">Loading reviews...</div>
          </div>
        </div>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];
  const nextReview = reviews[(currentIndex + 1) % reviews.length];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left - Trustpilot Rating (Static) */}
        <div className="space-y-4">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-black">Excellent</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600">Based on 15,007 reviews</p>
          <div className="flex items-center space-x-1">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-bold text-black">Trustpilot</span>
          </div>
        </div>

        {/* Right - Reviews with Navigation */}
        <div className="md:col-span-2 relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 h-40">
              
              {/* First Review Slot */}
              <div className="space-y-3">
                <div className="flex space-x-1">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <h4 className="font-semibold text-black text-sm leading-tight">{currentReview.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {currentReview.content}
                </p>
                <p className="text-xs text-gray-500">{currentReview.author}, {currentReview.date}</p>
              </div>

              {/* Second Review Slot */}
              <div className="space-y-3">
                <div className="flex space-x-1">
                  {[...Array(nextReview.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <h4 className="font-semibold text-black text-sm leading-tight">{nextReview.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {nextReview.content}
                </p>
                <p className="text-xs text-gray-500">{nextReview.author}, {nextReview.date}</p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">Showing our 4 & 5 star reviews</p>
      </div>
    </div>
  );
} 