import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Facebook",
      logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hiring Partners</h2>
          <p className="text-xl text-gray-600">Join our network of industry leaders</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;