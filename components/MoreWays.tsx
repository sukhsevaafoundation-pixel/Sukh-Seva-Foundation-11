
import React from 'react';
import { ArrowRightIcon } from './Icons';

// --- New Icon Components ---
// These icons are created to match the design in the user-provided image.

// A shield icon for the "Donate and Save Tax" card.
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-14.978z" />
  </svg>
);

// A graduation cap icon for the "Educate to Elevate" card.
const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);

// --- Card Data ---
// Data is structured here to keep the main component's JSX clean and easy to read.
const helpData = [
    {
        icon: <ShieldIcon className="w-8 h-8 text-white" />,
        iconBg: "bg-gradient-to-br from-teal-400 to-blue-500",
        title: "Donate and Save Tax",
        description: "Make a difference while maximizing your tax benefits under Section 80G."
    },
    {
        icon: <GraduationCapIcon className="w-8 h-8 text-white" />,
        iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
        title: "Educate to Elevate",
        description: "Support our education programs to empower communities through learning."
    }
];

// --- Reusable HelpCard Component ---
const HelpCard: React.FC<{ icon: React.ReactNode; iconBg: string; title: string; description: string }> = ({ icon, iconBg, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border">
        <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{description}</p>
        <a href="#" className="group mt-6 inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
    </div>
);


const MoreWays: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    {/* Updated title to use gradient text as shown in the image */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        More Ways to <span className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">Help Us</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover additional opportunities to support our mission and create lasting impact.
                    </p>
                </div>
                {/* Updated grid to render the new styled cards */}
                <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                    {helpData.map((item, index) => (
                        <HelpCard
                            key={index}
                            icon={item.icon}
                            iconBg={item.iconBg}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreWays;