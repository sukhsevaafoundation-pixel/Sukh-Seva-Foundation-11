import React from 'react';

const OurStoryPage: React.FC = () => (
  <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-indigo-700">Story</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          From a humble beginning to a nationwide movement, our journey is one of passion, dedication, and unwavering commitment to creating a better world.
        </p>
      </div>
      <div className="mt-16 max-w-4xl mx-auto prose lg:prose-xl text-gray-700">
        <p>
          Sukh Seva Foundation was born from a simple yet powerful idea: that every individual deserves a life of dignity, opportunity, and hope. It all started in 2023 in the heart of Gwalior, where our founders, Kuldeep Singh and Piyush Dohare, witnessed firsthand the pressing challenges faced by marginalized communities.
        </p>
        <p>
          Driven by a shared vision, they pooled their resources and rallied a small group of like-minded volunteers. Their first initiative was a small-scale food drive, "Ann Seva," providing nutritious meals to street children. The overwhelming response and the visible impact on the children's lives fueled their resolve to do more.
        </p>
        <img src="https://picsum.photos/seed/story1/800/500" alt="Foundation volunteers distributing food" className="rounded-lg shadow-lg my-8 w-full object-cover"/>
        <p>
          From there, our work expanded to address other critical areas like education, healthcare, and environmental sustainability. "Project Udaan" was launched to provide free education and skill development, opening doors to brighter futures for countless young minds. "Jeevan Jyoti" brought essential healthcare services to remote villages, saving lives and promoting wellness.
        </p>
        <p>
          Today, Sukh Seva Foundation is a testament to the power of collective action. With a growing family of donors, volunteers, and partners, we continue to innovate and implement sustainable solutions that empower communities to thrive. Our story is still being written, and with your support, we can create a legacy of positive change for generations to come.
        </p>
      </div>
    </div>
  </div>
);

export default OurStoryPage;
