'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amanda Thewlis',
    date: '5 days ago',
    title: 'They are a very professional company...',
    content: 'They are a very professional company always keep you updated and always review my pen online.',
    fullContent: 'They are a very professional company always keep you updated and always review my pen online. The service is excellent and I would highly recommend them to anyone looking for professional healthcare support.',
    rating: 5,
  },
  {
    name: 'Heidi',
    date: '25 August',
    title: 'Excellent experience with Assured...',
    content: 'Excellent experience with Assured Pharmacy customer care has been amazing. Careful consideration is given to suitability including a phone consultation and uploading photos. Sent',
    fullContent: 'Excellent experience with Assured Pharmacy customer care has been amazing. Careful consideration is given to suitability including a phone consultation and uploading photos. Sent my medication quickly and efficiently. The whole process was smooth and professional.',
    rating: 5,
  },
  {
    name: 'Kern',
    date: '22 August',
    title: 'These guys are amazing',
    content: 'These guys are amazing! Soooo much better than Numan who I was with originally for Mounjaro. No fuss, quick delivery, great updates and much better pricing. They have',
    fullContent: 'These guys are amazing! Soooo much better than Numan who I was with originally for Mounjaro. No fuss, quick delivery, great updates and much better pricing. They have exceeded all my expectations and I\'m so glad I switched to them.',
    rating: 5,
  },
  {
    name: 'Lauren Hendry',
    date: '19 August',
    title: 'Maisy assisted me on Friday 15/08 and...',
    content: 'Maisy assisted me on Friday 15/08 and helped me with an urgent order for my Mounjaro pen, it was delivered the next day by courier! I',
    fullContent: 'Maisy assisted me on Friday 15/08 and helped me with an urgent order for my Mounjaro pen, it was delivered the next day by courier! I was so impressed with the speed and efficiency of the service.',
    rating: 5,
  },
  {
    name: 'Lauren Hendry',
    date: '19 July',
    title: 'the Pharmacy have gone above and beyond!',
    content: 'The pharmacy have gone above and beyond with their customer service and support.',
    fullContent: 'The pharmacy have gone above and beyond with their customer service and support. Every interaction has been professional and they really care about their customers.',
    rating: 5,
  },
  {
    name: 'Miss Brown',
    date: '15 July',
    title: 'Excellent pharmacy',
    content: 'Excellent pharmacy. I have used for 4 months and they are very professional and efficient.',
    fullContent: 'Excellent pharmacy. I have used for 4 months and they are very professional and efficient. The staff are knowledgeable and always willing to help with any questions.',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Reviews
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Thousands of clients trust our treatment plans
          </p>

          {/* Trustpilot Integration */}
          {/* <div className="mb-8">
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="text-lg font-semibold">Excellent</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Rated 4.4 / 5 based on <span className="underline">15,007 reviews</span> on <span className="font-semibold">Trustpilot</span>
            </p>
          </div> */}

          {/* <p className="text-sm text-gray-500 mb-6">Showing our 4 & 5 star reviews</p> */}
        </div>

        {/* Scrollable Reviews Container */}
        <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, index) => {
              const isExpanded = expandedReviews.has(index);
              return (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                    ))}
                  </div>

                  {/* Reviewer Info */}
                  <div className="mb-3">
                    <p className="font-semibold text-sm text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    {review.title}
                  </h4>

                  {/* Review Content */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {isExpanded ? review.fullContent : review.content}
                  </p>

                  {/* Read more/less button */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-green-500 text-sm font-medium mt-2 hover:text-green-600 transition-colors"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 