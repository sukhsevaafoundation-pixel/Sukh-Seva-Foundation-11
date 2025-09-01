import React from 'react';
import { UserGroupIcon, HeartIcon, GlobeAltIcon, ArrowRightIcon } from './Icons';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
      {icon}
    </div>
    <div>
      <p className="text-3xl lg:text-4xl font-bold text-white">{value}</p>
      <p className="text-white/80 text-sm lg:text-base">{label}</p>
    </div>
  </div>
);

// Accept onDonateClick prop to handle opening the donation modal
const Hero: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1073&grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Creating Hope,
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Transforming Lives
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join us in building sustainable solutions that empower communities and create lasting change around the world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Converted link to button to trigger modal */}
            <button
              onClick={onDonateClick}
              className="group inline-flex items-center justify-center text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Donate Now
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 w-full sm:w-auto">
              Learn Our Story
            </a>
          </div>
        </div>
      </div>
       <div className="relative p-8 -mt-24 z-10">
            <div className="container mx-auto">
                <div className="bg-slate-800/30 backdrop-blur-md p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <StatCard icon={<UserGroupIcon className="w-8 h-8 text-yellow-300" />} value="100+" label="Lives Impacted" />
                    <StatCard icon={<HeartIcon className="w-8 h-8 text-pink-300" />} value="5+" label="Active Programs" />
                    <StatCard icon={<GlobeAltIcon className="w-8 h-8 text-sky-300" />} value="11+" label="Communities Served" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;