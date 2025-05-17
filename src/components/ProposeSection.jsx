import React from 'react';

const ProposeSection = () => {
  const features = [
    {
      color: 'bg-purple-500',
      title: 'Built for impact',
      description:
        'We identify and nurture a truly diverse team of designers, developers and marketers',
    },
    {
      color: 'bg-red-500',
      title: 'In sync with you',
      description:
        'We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.',
    },
  ];

  return (
    <section className="w-full bg-white  py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side: Heading */}
        <div className='ml-30'>
          <p className="text-sm text-purple-600 font-semibold mb-2">ACHIEVE MORE</p>
          <h2 className="text-3xl md:text-3xl font-extrabold text-black leading-snug">
            Purpose of a convoy is to keep your team
          </h2>
        </div>

        {/* Right Side: Features */}
        <div className="md:col-span-2 ml-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className={`w-4 h-4 mt-1 rounded-full ${feature.color}`}></span>
              <div>
                <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProposeSection;
