import React from 'react';
import { HeartIcon } from './Icons';

const donorLogos = [
  { name: 'Government of India', src: 'https://i.ibb.co/3kZ5bJc/gov-india.png', alt: 'Government of India Logo' },
  { name: 'DDU-GKY', src: 'https://i.ibb.co/L5Bf8r3/ddu-gky.png', alt: 'DDU-GKY Logo' },
  { name: 'Maulana Azad Education Foundation', src: 'https://i.ibb.co/bF9p2H6/maef.png', alt: 'Maulana Azad Education Foundation Logo' },
  { name: 'Ministry of Textiles', src: 'https://i.ibb.co/KqwYgVv/ministry-textiles.png', alt: 'Ministry of Textiles Logo' },
  { name: 'Delhi Government', src: 'https://i.ibb.co/9vP1PzB/delhi-gov.png', alt: 'Delhi Government Logo' },
  { name: 'Bhagwati', src: 'https://i.ibb.co/Rz3gH2K/bhagwati.png', alt: 'Bhagwati Exports Logo' },
];

const Donors: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <HeartIcon className="w-8 h-8 mx-auto text-orange-500 mb-2" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-orange-500">Top Donors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are grateful for the support of our esteemed donors who believe in our mission and help us make a difference.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
            {donorLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donors;