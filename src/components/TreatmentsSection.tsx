'use client';

import Link from 'next/link';
import Image from 'next/image';

const treatments = [
  {
    title: 'Erectile Dysfunction',
    description: "Don't be among the 50% of men experiencing erectile dysfunction. Discover the path to stronger, longer-lasting erections and more satisfying sex.",
    image: '/Homepage/treatment-ed.webp',
    route: '/erectile-dysfunction',
  },
  {
    title: 'Weight Loss',
    description: 'Reach your ideal weight and lose up to 25% with our dual-action weight loss treatment, clinically proven and approved by the MHRA.',
    image: '/Homepage/treatment-weight-loss.webp',
    route: '/weight-loss',
  },
  {
    title: 'Hair Loss',
    description: 'Take control and reverse hair loss with our treatments. Clinical studies show that 90% of men experience either halted hair loss or show regrowth.',
    image: '/Homepage/treatment-hair-loss.webp',
    route: '/hair-loss',
  },
  {
    title: 'Premature Ejaculation',
    description: 'Boost your endurance and satisfaction with our clinically proven treatments and effective solutions for longer-lasting sex.',
    image: '/Homepage/treatment-pe.webp',
    route: '/premature-ejaculation',
  },
];

export default function TreatmentsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Treatments
          </h2>
          <p className="text-xl text-gray-600">
            The most effective treatments in the UK
          </p>
        </div>

        <div className="space-y-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Mobile: Vertical Layout */}
              <div className="md:hidden">
                {/* Image on top for mobile */}
                <div className="w-full h-48 relative">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Content below image for mobile */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {treatment.description}
                  </p>
                  <Link 
                    href={treatment.route}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full inline-block text-center"
                  >
                    View Treatments
                  </Link>
                </div>
              </div>

              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:flex m-4 items-stretch rounded-lg">
                {/* Image on the left - 50% width */}
                <div className="w-1/2 relative rounded-lg">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ borderRadius: '10px' }}
                  />
                </div>                
                {/* Content on the right */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div>
                    <Link 
                      href={treatment.route}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block"
                    >
                      View Treatments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 