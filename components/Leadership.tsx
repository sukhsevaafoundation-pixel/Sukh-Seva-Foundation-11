import React, { useState } from 'react';

// --- Professional Social & Contact Icons ---
// Using a consistent icon set for a clean, professional look.

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/>
    </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.216 3.803 4.654-.64.175-1.31.225-1.99.088.61 1.91 2.37 3.29 4.45 3.33-1.62 1.27-3.66 2.02-5.88 2.02-1.12 0-2.23-.06-3.31-.19 2.09 1.35 4.58 2.13 7.24 2.13 8.69 0 13.46-7.21 13.46-13.46 0-.21 0-.41-.01-.61.92-.66 1.72-1.49 2.35-2.43z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

interface Leader {
  name: string;
  title: string;
  titleColor: string; // To match colors from the image
  description: string;
  imageUrl: string;
  contact: { // Updated data structure for all contact info
    instagram: string;
    twitter: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}

// Updated data to match the image and include all contact info
const leadershipData: Leader[] = [
  {
    name: 'Kuldeep Singh',
    title: 'Founder & CEO',
    titleColor: 'text-blue-600',
    description: 'Dedicated to creating sustainable change through community empowerment and education.',
    imageUrl: 'https://i.ibb.co/6g2fRjJ/IMG-20240428-WA0001.jpg',
    contact: {
        instagram: 'https://www.instagram.com/Mr_krishna_s',
        twitter: '#',
        linkedin: '#',
        email: 'mailto:kuldeep@example.com',
        phone: 'tel:+1234567890'
    }
  },
  {
    name: 'Piyush Dohare',
    title: 'Co-Founder & CMO',
    titleColor: 'text-blue-600',
    description: 'A strong perspective from the healthcare field and is deeply committed to social welfare, health awareness, and community service.',
    imageUrl: 'https://i.ibb.co/F8gDq3g/IMG-20240428-WA0002.jpg',
    contact: {
        instagram: 'https://www.instagram.com/piyush_dohare',
        twitter: '#',
        linkedin: '#',
        email: 'mailto:piyush@example.com',
        phone: 'tel:+1234567891'
    }
  }
];

// --- Redesigned Leadership Card with "Connect" functionality ---
const LeadershipCard: React.FC<{ leader: Leader }> = ({ leader }) => {
    // State to manage the visibility of social icons for each card
    const [showSocials, setShowSocials] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full border">
            <img 
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-md" 
              src={leader.imageUrl} 
              alt={leader.name} 
            />
            <h4 className="text-2xl font-bold text-gray-900">{leader.name}</h4>
            <p className={`${leader.titleColor} font-semibold mb-3`}>{leader.title}</p>
            <p className="text-gray-600 mb-6 flex-grow">{leader.description}</p>

            {/* The single Instagram link from the original image design */}
            <a href={leader.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-pink-600 transition-colors mb-6">
                <InstagramIcon className="w-5 h-5 mr-2" />
                <span className="font-medium text-sm">@{leader.contact.instagram.split('/').pop()}</span>
            </a>
            
            {/* The "Connect" button to reveal more options */}
            <button 
                onClick={() => setShowSocials(!showSocials)}
                className="bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Connect
            </button>
            
            {/* The container for social icons, revealed on button click */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showSocials ? 'max-h-20 mt-6' : 'max-h-0'}`}>
                <div className="flex items-center space-x-5">
                    <a href={leader.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors" aria-label="Twitter">
                        <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href={leader.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon className="w-6 h-6" />
                    </a>
                    <a href={leader.contact.email} className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Email">
                        <MailIcon className="w-6 h-6" />
                    </a>
                    <a href={leader.contact.phone} className="text-gray-400 hover:text-green-500 transition-colors" aria-label="Phone">
                        <PhoneIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};


// --- Main Leadership Section ---
const Leadership: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50"> 
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Meet Our <span className="text-indigo-700">Leadership</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        The driving force behind our mission, dedicated to creating a better world.
                    </p>
                </div>
                {/* Updated grid to use the new LeadershipCard */}
                <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                    {leadershipData.map((leader, index) => (
                        <LeadershipCard key={index} leader={leader} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;