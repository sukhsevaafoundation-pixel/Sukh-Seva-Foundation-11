import React from 'react';
import { HeartIcon, UsersIcon, UserGroupIcon } from '../components/Icons';

interface GetInvolvedPageProps {
    onDonateClick: () => void;
    onNavigate: (page: string) => void;
}

const InfoCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    onClick: () => void;
}> = ({ icon, title, description, buttonText, buttonColor, onClick }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-8 flex-grow">{description}</p>
        <button
            onClick={onClick}
            className={`w-full font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${buttonColor}`}
        >
            {buttonText}
        </button>
    </div>
);


const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onDonateClick, onNavigate }) => {
    
    const cards = [
        {
            icon: <div className="p-4 bg-red-100 rounded-full"><HeartIcon className="w-12 h-12 text-red-500" /></div>,
            title: 'Donate',
            description: 'Your contribution, big or small, fuels our mission. Help us create lasting change with a one-time or monthly donation.',
            buttonText: 'Donate Now',
            buttonColor: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white',
            action: onDonateClick,
        },
        {
            icon: <div className="p-4 bg-blue-100 rounded-full"><UsersIcon className="w-12 h-12 text-blue-500" /></div>,
            title: 'Volunteer',
            description: 'Give the gift of your time and skills. Join our passionate team of volunteers and make a hands-on difference in our communities.',
            buttonText: 'Join Us',
            buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white',
            action: () => alert('Volunteer sign-up coming soon!'), // Placeholder
        },
        {
            icon: <div className="p-4 bg-purple-100 rounded-full"><UserGroupIcon className="w-12 h-12 text-purple-500" /></div>,
            title: 'Partner With Us',
            description: 'Collaborate with us to amplify your corporate social responsibility impact. We offer tailored partnership opportunities for organizations.',
            buttonText: 'Contact Us',
            buttonColor: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white',
            action: () => onNavigate('Contact'),
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Get Involved
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        You have the power to make a difference. Explore the ways you can join the Sukh Seva Foundation family and help us build a better world.
                    </p>
                </div>
                <div className="mt-16 max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <InfoCard 
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            buttonText={card.buttonText}
                            buttonColor={card.buttonColor}
                            onClick={card.action}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolvedPage;
