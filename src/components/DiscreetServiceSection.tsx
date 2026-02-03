import Image from 'next/image';

const features = [
  {
    imageSrc: '/Homepage/service-order.png',
    imageAlt: 'Online process icon',
    title: '100% Online Process',
    description: 'You can complete your whole order online from consultation to checkout. But if you need to contact us we are available by live chat, email and phone.',
  },
  {
    imageSrc: '/Homepage/service-box.png',
    imageAlt: 'Plain packaging icon',
    title: 'Plain Packaging Guaranteed',
    description: 'Orders are shipped in discreet mailing bags and boxes so you can rest assured your order will remain private.',
  },
  {
    imageSrc: '/Homepage/service-postbox.png',
    imageAlt: 'Post office collection icon',
    title: 'Optional Post Office Collection',
    description: 'If having your order shipped to a home or work address doesn\'t suit you then you can select to collect from a post office convenient to you. (Exclusions apply)',
  },
];

export default function DiscreetServiceSection() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discreet Service
          </h2>
          <p className="text-xl text-gray-600">
            Your orders are private and this is our responsibility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                {/* Icon and Title on the same line */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                
                {/* Description below */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 