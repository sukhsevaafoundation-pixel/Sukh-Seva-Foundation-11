import React from 'react';

// Define the new icon components to match the user-provided image.
// Each icon is an SVG component with a className prop for styling.

const IconShield: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z" />
    </svg>
);

const IconStar: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const IconDocument: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const IconTrendingUp: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

// Define the data for the recognition cards to keep the JSX clean.
const recognitionData = [
    {
        icon: <IconShield className="h-12 w-12 text-blue-600" />,
        title: 'GuideStar Platinum Seal',
        subtitle: 'Highest level of transparency',
    },
    {
        icon: <IconStar className="h-12 w-12 text-yellow-500" />,
        title: 'Charity Navigator 4-Star',
        subtitle: 'Exceptional accountability',
    },
    {
        icon: <IconDocument className="h-12 w-12 text-green-600" />,
        title: 'Annual Reports',
        subtitle: 'Comprehensive impact documentation',
    },
    {
        icon: <IconTrendingUp className="h-12 w-12 text-purple-600" />,
        title: '95% Program Efficiency',
        subtitle: 'Direct impact on beneficiaries',
    },
];

const Recognition: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Updated title to match the image, with "Trust" highlighted in blue */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Recognition & <span className="text-blue-600">Trust</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our commitment to transparency and accountability has earned us recognition from leading organizations.
          </p>
        </div>
        {/* Updated grid layout to display the new cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {recognitionData.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;