
import React from 'react';

interface Story {
  name: string;
  age: number;
  location: string;
  title: string;
  description: string;
  imageUrl: string;
}

const storiesData: Story[] = [
  {
    name: 'Ramesh Sharma',
    age: 26,
    location: 'Village Bhitarwar, Gwalior',
    title: 'Clean Water Brings New Hope to Ramesh’s Family',
    description: 'Clean water changed daily life for Ramesh’s family in rural Gwalior.',
    imageUrl: 'https://picsum.photos/seed/ramesh/400/400'
  },
  {
    name: 'Priya Verma',
    age: 14,
    location: 'Hazira, Gwalior, Madhya Pradesh',
    title: 'Priya’s Journey Back to School',
    description: 'Shiksha Sewa helped Priya continue her education and dream bigger.',
    imageUrl: 'https://picsum.photos/seed/priya/400/400'
  },
  {
    name: 'Shiv Kumar',
    age: 22,
    location: 'Gwalior Madhya Pradesh',
    title: 'A New Life: Shiv’s Kidney Treatment Journey',
    description: 'With the help of StreetCare Health Mission and donations, he received life-saving care and a successful surgery.',
    imageUrl: 'https://picsum.photos/seed/shiv/400/400'
  }
];

const StoryCard: React.FC<{ story: Story }> = ({ story }) => (
    <div className="group">
        <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={`${story.imageUrl}`} alt={story.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="mt-4">
            <p className="text-sm text-gray-500">{story.name}, Age {story.age} • {story.location}</p>
            <h3 className="text-xl font-bold mt-2 text-gray-900">{story.title}</h3>
            <p className="mt-2 text-gray-600">{story.description}</p>
            <a href="#" className="mt-4 inline-block font-semibold text-indigo-700 hover:underline">Read Full Story →</a>
        </div>
    </div>
);

const Stories: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Stories of <span className="text-pink-500">Hope</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Real stories from the people whose lives have been transformed through our programs and your generous support.
                    </p>
                </div>
                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {storiesData.map((story, index) => (
                        <StoryCard key={index} story={story} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="#" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                        Read More Stories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Stories;
