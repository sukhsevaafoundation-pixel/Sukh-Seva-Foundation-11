import React from 'react';

// --- Professional Icon Set for this Section ---

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

const BadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M7.875 21L12 16.5l4.125 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// --- Data for the chart ---
const donationData = [
  { name: 'Programs', value: 78, color: '#3b82f6' },      // blue-500
  { name: 'Operations', value: 12, color: '#14b8a6' },    // teal-500
  { name: 'Fundraising', value: 10, color: '#f97316' },   // orange-500
];

// --- A more professional InfoCard Component ---
const InfoCard: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
            {icon}
        </div>
        <div className="flex-grow">
            <h4 className="font-bold text-lg text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
    </div>
);

// --- Main Transparency Component ---
const Transparency: React.FC = () => {
    // Added a fourth card to create a balanced 2x2 grid
    const cardData = [
        {
            icon: <ShieldIcon className="w-8 h-8 text-blue-600" />,
            title: "GuideStar Platinum Seal",
            subtitle: "Highest level of transparency"
        },
        {
            icon: <BadgeIcon className="w-8 h-8 text-green-600" />,
            title: "Charity Navigator 4-Star",
            subtitle: "Exceptional accountability"
        },
        {
            icon: <DocumentIcon className="w-8 h-8 text-orange-600" />,
            title: "Annual Reports",
            subtitle: "Comprehensive impact documentation"
        },
        {
            icon: <TrendingUpIcon className="w-8 h-8 text-purple-600" />,
            title: "95% Program Efficiency",
            subtitle: "Direct impact on beneficiaries"
        }
    ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Complete <span className="text-blue-600">Transparency</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We believe in full accountability. See exactly how your donations are used and the impact they create in communities worldwide.
          </p>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Column (Wider): Bar Chart */}
          <div className="bg-white p-8 rounded-xl shadow-2xl lg:col-span-3">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">How We Use Your Donations</h3>
            <div className="space-y-6">
              {donationData.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-1 text-base">
                    <span className="font-semibold text-gray-700">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{backgroundColor: item.color}}></span>
                      {item.name}
                    </span>
                    <span className="font-bold text-gray-800">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Info Cards in a 2x2 Grid for balance */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardData.map((card, index) => (
                <InfoCard key={index} icon={card.icon} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
             <a href="#" className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Annual Report
            </a>
        </div>
      </div>
    </section>
  );
};

export default Transparency;