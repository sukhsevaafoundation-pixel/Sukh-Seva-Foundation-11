
import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

// --- A professionally styled SVG map of India ---
// Updated with a lighter, cleaner fill and stroke for a modern look.
const IndiaMap: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1119.2"
    className={className}
    aria-label="Map of India"
  >
    <path 
        className="fill-gray-200 stroke-gray-400"
        strokeWidth="2"
        d="M998.9 316.5c-2.3-1.6-4.9-2.7-7.6-3.2-.2-.1-.4-.1-.6-.2-2-.4-4-.5-6-.5-3.6 0-7.2.5-10.6 1.6-.2 0-.3.1-.5.1-3.2 1-6.2 2.5-9 4.4-1.2.8-2.3 1.7-3.4 2.6-4.4 3.7-7.9 8-10.4 12.8-1.5 2.8-2.7 5.7-3.6 8.7-1.1 3.5-1.7 7-1.7 10.6 0 2.2.2 4.4.7 6.6.6 2.6 1.5 5.2 2.8 7.6 1.8 3.5 4.2 6.7 7.1 9.4 1.4 1.3 2.9 2.5 4.5 3.5 3.3 2.1 7 3.5 10.9 4.1 2 .3 4 .4 6 .4 2.9 0 5.8-.4 8.6-1.1 3.3-.9 6.4-2.3 9.3-4.1 1.7-1.1 3.3-2.3 4.8-3.6 3.1-2.8 5.6-6 7.4-9.6.9-1.9 1.7-3.8 2.3-5.8 1.1-3.8 1.7-7.7 1.7-11.7s-.6-8-1.8-11.8c-.7-2.2-1.6-4.3-2.7-6.4-1.9-3.4-4.2-6.5-7-9.1-1.3-1.2-2.7-2.3-4.1-3.3-2.9-2-6-3.6-9.3-4.7z M392.6 1119.2c-1.3-2-2.3-4-3-6.1-.9-2.8-1.4-5.6-1.4-8.5 0-4.6 1.3-9 3.8-12.9 1.1-1.7 2.4-3.3 3.8-4.7 2.9-2.9 6.3-5.1 10.1-6.5 2-.7 4-1.1 6-1.4 3-.4 6-.5 9-.2 2.6.2 5.2.8 7.6 1.7 3.2 1.2 6.1 2.9 8.7 5.1 1.5 1.3 2.9 2.7 4.1 4.3 2.2 2.9 3.9 6.2 5 9.7.7 2.1 1.2 4.3 1.4 6.5.3 3 .2 6.1-.3 9.1-.5 2.9-1.4 5.7-2.7 8.3-1.8 3.6-4.2 6.8-7.2 9.4-1.6 1.4-3.3 2.6-5.1 3.6-3.1 1.8-6.5 2.9-10.1 3.4-1.8.2-3.6.3-5.4.3-3.1 0-6.2-.4-9.1-1.3-3.3-1-6.4-2.5-9.2-4.4-1.5-.9-2.9-2-4.2-3.2z M695.1 297.4l-31.5-23.3-2.2-40.3-15.6-31.1-39.2-2.6-30.8-21.5-12.2-32.9-29-19.7-44.5-47-52.9-16.1-30.8 13-16.1 12.2-22.3-5.7-29.8-24.3-11.2-19.2-22-17.4-21-18.4-23.3-3.8c-1.6-.3-3.2-.4-4.8-.4-1.7 0-3.4.1-5.1.4l-31.1 4.7-29.3 13.5-3.3 29.3-23.3 11.2-4.2 16.1-26.2 5.7-34.9-1.5-18.7 15.3-20.5 25.1-41.5 23.3-19.4 44.5-35.9 44.5-3.3 10.9-2.8 14.5-18.7 26.5-2.8 1.5-5.2 2.8-7.7 3.8-2.5 1.1-5 1.9-7.5 2.6l-20 4.7-18.4 20.3-11.2 22.8-15.3 27.5 1.8 18.9 14.2 15.6 12.2 21.8 24.3 18.1 31.8 34.9 3.8 29.5 35.4 34.4 20.8 45.3 3.5 32.3 28.5 53.7 10.4 27.5-1.5 25.8-21 16.1-12.2 36.4-1.3 5.7-2.3 11.6-3.1 17.6-.7 5.5-1.1 11-1.1 16.6 0 16.3 3.8 32.5 11.2 47.7l1.3 2.6 13.5 23.3c3.8 6.7 8.3 12.9 13.5 18.7l22.3 24.3 2.8 2.6c11.9 11.2 25.3 20 40 26.2l32.3 13.5 1.8.8c12.7 5.2 25.6 9.2 38.7 11.9l20.5 4.2h1.3c15.1-1 30-3.5 44.5-7.5l45.5-12.5 46-28.5 28-1.5 25.8 10.1 27-21.8 11.2-23.3 21-36.9 28.5-62.1 16.4-44.5 22.8-77.9 12.7-41.5 14-61.1 8.2-50.6 18.1-51.4 2.8-20-8.2-29-20-21.5-18.9-20-1.8-17.9-29.8-10.4-19.4-23.8-3-12.7-14.8-17.1-13.5-23-2.3-11.2-4.5-22.3-6.7-33.4z" />
  </svg>
);

const locations = [
  { id: 'gwalior', name: 'Gwalior', province: 'Madhya Pradesh', pos: 'top-[44%] left-[46%]', description: 'Headquarters for our "Project Udaan" education initiative and "Ann Seva" food drives.' },
  { id: 'dabra', name: 'Dabra', province: 'Madhya Pradesh', pos: 'top-[47%] left-[46.5%]', description: 'Focused on women\'s safety workshops and healthcare camps under "Jeevan Jyoti".' },
  { id: 'morena', name: 'Morena', province: 'Madhya Pradesh', pos: 'top-[41%] left-[46.2%]', description: 'Implementing sustainable agriculture practices and environmental awareness programs.' },
  { id: 'indore', name: 'Indore', province: 'Madhya Pradesh', pos: 'top-[53%] left-[42%]', description: 'Expanding our skill development programs for economic empowerment in urban areas.' },
  { id: 'bhopal', name: 'Bhopal', province: 'Madhya Pradesh', pos: 'top-[50%]', description: 'Collaborating with local authorities on disaster relief readiness and community development.' },
];

// --- Enhanced, Interactive Location Card ---
const LocationCard: React.FC<{
  location: { name: string; province: string; id: string };
  isHighlighted: boolean;
  isActive: boolean;
  onClick: () => void;
  onHover: (id: string | null) => void;
}> = ({ location, isHighlighted, isActive, onClick, onHover }) => (
  <button
    onClick={onClick}
    onMouseEnter={() => onHover(location.id)}
    onMouseLeave={() => onHover(null)}
    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer ${
      isActive
        ? 'bg-indigo-600 border-indigo-600 shadow-lg text-white'
        : isHighlighted
        ? 'bg-indigo-50 border-indigo-500 shadow-md'
        : 'bg-white border-gray-200 hover:shadow-lg'
    }`}
  >
    <p className={`font-bold text-lg transition-colors ${isActive ? 'text-white' : 'text-gray-800'}`}>
      {location.name}
    </p>
    <p className={`text-sm transition-colors ${isActive ? 'text-indigo-200' : 'text-gray-500'}`}>
      {location.province}
    </p>
  </button>
);

// --- The Main, Refactored Presence Component ---
const Presence: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(locations[0].id);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [renderedLocation, setRenderedLocation] = useState<string | null>(locations[0].id);
  const [animationClass, setAnimationClass] = useState('animate-scaleIn');

  useEffect(() => {
    if (activeLocation) {
      setRenderedLocation(activeLocation);
      setAnimationClass('animate-scaleIn');
    } else if (renderedLocation) {
      setAnimationClass('animate-scaleOut');
      const timer = setTimeout(() => {
        setRenderedLocation(null);
      }, 300); // Must match CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [activeLocation, renderedLocation]);

  const handleLocationClick = (id: string) => {
    setActiveLocation(prevId => (prevId === id ? null : id));
  };

  const renderedLocationData = locations.find(loc => loc.id === renderedLocation);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-green-600">Presence</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're actively working across multiple regions to create lasting change. Hover or click on a location to explore our impact on the map.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Interactive Map Column */}
          <div className="lg:col-span-2 relative w-full h-96 md:h-[500px] bg-white rounded-2xl shadow-xl p-4 overflow-hidden border border-gray-100">
            <IndiaMap className="absolute inset-0 w-full h-full object-contain" />
            
            {locations.map(loc => {
                const isActive = activeLocation === loc.id;
                const isHovered = hoveredLocation === loc.id;
                const isHighlighted = isActive || isHovered;

                return (
                    <div
                        key={loc.id}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-transform duration-300 ${loc.pos} ${isHighlighted ? 'scale-125 z-10' : 'scale-100'}`}
                        onMouseEnter={() => setHoveredLocation(loc.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                    >
                        <button 
                          onClick={() => handleLocationClick(loc.id)}
                          className="relative flex items-center justify-center w-8 h-8 focus:outline-none"
                          aria-label={`Select ${loc.name}`}
                        >
                          <div className={`absolute animate-ping-slow w-full h-full rounded-full ${isActive ? 'bg-indigo-400' : 'bg-green-300'}`}></div>
                          <div className={`relative w-4 h-4 bg-white rounded-full border-4 ${isActive ? 'border-indigo-600' : 'border-green-600'}`}></div>
                        </button>
                        <div className={`absolute bottom-full mb-3 w-max bg-gray-800 text-white text-sm font-bold py-1 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform -translate-x-1/2 left-1/2 whitespace-nowrap`}>
                          {loc.name}
                        </div>
                    </div>
                );
            })}

            {/* Pop-up Card for Active Location */}
            {renderedLocationData && (
              <div
                key={renderedLocationData.id}
                className={`popup-card absolute bg-white rounded-lg shadow-2xl border border-gray-200 z-20 w-64 ${animationClass} ${renderedLocationData.pos}`}
              >
                <div className="p-4 relative">
                   <button 
                      onClick={() => setActiveLocation(null)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-800"
                      aria-label="Close pop-up"
                    >
                      <CloseIcon className="w-5 h-5" />
                    </button>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 pr-6">{renderedLocationData.name}</h4>
                    <p className="text-sm font-semibold text-indigo-600 mb-2">{renderedLocationData.province}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{renderedLocationData.description}</p>
                </div>
                {/* Pointer Arrow */}
                <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200"></div>
              </div>
            )}
            
            <style>{`
              .animate-ping-slow { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
              .popup-card { transform-origin: bottom center; }
              @keyframes scaleIn { 
                from { transform: translate(-50%, -100%) scale(0.8); opacity: 0; } 
                to { transform: translate(-50%, calc(-100% - 1.5rem)) scale(1); opacity: 1; } 
              }
              @keyframes scaleOut { 
                from { transform: translate(-50%, calc(-100% - 1.5rem)) scale(1); opacity: 1; } 
                to { transform: translate(-50%, -100%) scale(0.8); opacity: 0; } 
              }
              .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
              .animate-scaleOut { animation: scaleOut 0.3s ease-in forwards; }
            `}</style>
          </div>
          
          {/* Location List Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Active Locations</h3>
            <div className="space-y-3">
              {locations.map(loc => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  isActive={activeLocation === loc.id}
                  isHighlighted={hoveredLocation === loc.id}
                  onClick={() => handleLocationClick(loc.id)}
                  onHover={setHoveredLocation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
