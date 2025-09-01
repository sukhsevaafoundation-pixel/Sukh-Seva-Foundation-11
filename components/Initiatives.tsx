
import React, { useState } from 'react';
import { LocationMarkerIcon, UsersIcon, ArrowRightIcon } from './Icons';

interface Initiative {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  location: string;
  people: number;
  raised: number;
  goal: number;
  imageUrl: string;
}

const initiativesData: Initiative[] = [
    {
        category: 'Education',
        categoryColor: 'bg-blue-100 text-blue-800',
        title: 'Project Udaan (Education for All)',
        description: 'Join us in shaping young futures through education—teach, mentor, or support a child’s learning.',
        location: 'Gwalior Madhya Pradesh',
        people: 49,
        raised: 199,
        goal: 50000,
        imageUrl: 'https://picsum.photos/seed/education/400/300'
    },
    {
        category: 'Healthcare',
        categoryColor: 'bg-red-100 text-red-800',
        title: 'Jeevan Jyoti (Healthcare & Wellness)',
        description: 'Through Jeevan Jyoti, we welcome healthcare professionals and volunteers to participate in medical camps.',
        location: 'Gwalior Madhya Pradesh',
        people: 12,
        raised: 199,
        goal: 100000,
        imageUrl: 'https://picsum.photos/seed/health/400/300'
    },
    {
        category: 'Food Security',
        categoryColor: 'bg-green-100 text-green-800',
        title: 'Ann Seva (Food & Nutrition Drive)',
        description: 'Share a meal, share hope—volunteer with us to feed hungry families and children.',
        location: 'Gwalior Madhya Pradesh',
        people: 8,
        raised: 199,
        goal: 180000,
        imageUrl: 'https://picsum.photos/seed/food/400/300'
    },
    {
        category: 'Environment',
        categoryColor: 'bg-teal-100 text-teal-800',
        title: 'Prakriti Raksha (Environment & Sustainability)',
        description: 'Plant a tree, clean a street, or lead a campaign—every action counts for our planet.',
        location: 'Gwalior Madhya Pradesh',
        people: 1,
        raised: 99,
        goal: 49000,
        imageUrl: 'https://picsum.photos/seed/env/400/300'
    },
    {
        category: 'Economic Empowerment',
        categoryColor: 'bg-purple-100 text-purple-800',
        title: 'Women Safety Initiative',
        description: 'Together, we can create a world where women feel safe, respected, and empowered.',
        location: 'Gwalior, Dabra, Morena, Madhya Pradesh',
        people: 4,
        raised: 10,
        goal: 150000,
        imageUrl: 'https://picsum.photos/seed/women/400/300'
    },
    // --- Added three new initiatives ---
    {
        category: 'Community Development',
        categoryColor: 'bg-yellow-100 text-yellow-800',
        title: 'Gram Vikas (Village Development)',
        description: 'Empowering villages with essential infrastructure like clean water, sanitation, and community centers.',
        location: 'Rural Gwalior',
        people: 25,
        raised: 75000,
        goal: 200000,
        imageUrl: 'https://picsum.photos/seed/village/400/300'
    },
    {
        category: 'Disaster Relief',
        categoryColor: 'bg-orange-100 text-orange-800',
        title: 'Aapda Sahayata (Disaster Relief)',
        description: 'Providing immediate relief and long-term support to communities affected by natural disasters.',
        location: 'Nationwide',
        people: 50,
        raised: 120000,
        goal: 500000,
        imageUrl: 'https://picsum.photos/seed/relief/400/300'
    },
    {
        category: 'Animal Welfare',
        categoryColor: 'bg-pink-100 text-pink-800',
        title: 'Pashu Seva (Animal Welfare)',
        description: 'Caring for stray and injured animals through rescue operations, shelters, and medical aid.',
        location: 'Gwalior City',
        people: 15,
        raised: 45000,
        goal: 100000,
        imageUrl: 'https://picsum.photos/seed/animal/400/300'
    }
];


const InitiativeCard: React.FC<{ initiative: Initiative }> = ({ initiative }) => {
    const progressPercentage = (initiative.raised / initiative.goal) * 100;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="relative">
                <img className="w-full h-56 object-cover" src={initiative.imageUrl} alt={initiative.title} />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${initiative.categoryColor}`}>
                    {initiative.category}
                </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{initiative.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                        <LocationMarkerIcon className="w-4 h-4 mr-1.5" />
                        <span>{initiative.location}</span>
                    </div>
                    <div className="flex items-center">
                        <UsersIcon className="w-4 h-4 mr-1.5" />
                        <span>{initiative.people} people</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                        <span>Raised</span>
                        <span>₹{initiative.raised.toLocaleString()} / ₹{initiative.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>
                <a href="#" className="group mt-auto inline-flex items-center font-semibold text-indigo-700 hover:text-indigo-900 transition-colors">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

const Initiatives: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  // Updated to show 6 initiatives by default
  const displayedInitiatives = showAll ? initiativesData : initiativesData.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Active <span className="text-blue-600">Initiatives</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how we're making a difference in communities worldwide through targeted programs and sustainable solutions.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedInitiatives.map((item, index) => (
            <InitiativeCard key={index} initiative={item} />
          ))}
        </div>
        {/* Updated condition to show button only if there are more than 6 initiatives */}
        {!showAll && initiativesData.length > 6 && (
            <div className="mt-12 text-center">
                <button 
                    onClick={() => setShowAll(true)}
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                    View All Initiatives
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Initiatives;
