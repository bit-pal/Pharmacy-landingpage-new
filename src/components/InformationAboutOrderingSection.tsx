export default function InformationAboutOrderingSection() {
  const infoItems = [
    {
      number: '1',
      bgColor: 'bg-green-500',
      content: 'After completing your 2-minute consultation, we can show you the full range of products and prices available to you.',
    },
    {
      number: '2',
      bgColor: 'bg-blue-500',
      content: 'Verified 18+ customers only. All orders are soft checked for age and identity. Photo ID may be requested.',
    },
    {
      number: '3',
      bgColor: 'bg-orange-500',
      content: 'Open Monday to Friday, orders placed before 3:45pm are shipped the same day from our UK based & regulated pharmacy.',
    },
  ];

  return (
    <section className="bg-gray-100 py-5 ">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Information About Ordering
          </h2>
          
          <div className="space-y-3">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* Numbered badge on the left */}
                <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-base">{item.number}</span>
                </div>
                
                {/* Content on the right */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-snug text-sm">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 