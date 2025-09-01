import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// --- Re-styled FAQItem as a Card with animation ---
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-md mb-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none p-6"
      aria-expanded={isOpen}
    >
      <span>{question}</span>
      {isOpen ? <ChevronUpIcon className="w-6 h-6 text-indigo-600 flex-shrink-0" /> : <ChevronDownIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />}
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="px-6 pb-6 text-gray-600">
            <p>{answer}</p>
        </div>
      </div>
    </div>
  </div>
);

const faqs = [
    { question: 'How are donations used?', answer: 'Your donations are primarily used for our welfare programs and initiatives (78%), operational costs (12%), and fundraising efforts (10%) to ensure we can continue our work effectively. We maintain complete transparency.' },
    { question: 'Do I get tax benefits?', answer: 'Yes, all donations are eligible for tax benefits under Section 80G of the Income Tax Act. A receipt will be provided for your contribution.' },
    { question: 'How can I volunteer?', answer: 'We welcome volunteers! You can get involved in various programs, from teaching and mentoring to participating in health camps. Please visit our "Get Involved" page for more information and to sign up.' },
];

// --- New and Existing Icons ---
const QuestionMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 0010 16.57l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Centered FAQ Accordion Section --- */}
        <div className="text-center max-w-3xl mx-auto">
          <QuestionMarkIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our work and how you can help.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
            <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
            />
            ))}
        </div>

        {/* --- "Have a Question?" Form Section --- */}
        <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900">Have a Question?</h3>
                    <p className="mt-3 text-gray-600">Don't see your question above? Submit it and we'll get back to you.</p>
                </div>
                <form className="mt-8 max-w-xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required 
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                    </div>
                    <div className="mt-6">
                        <textarea 
                            placeholder="What would you like to know?" 
                            rows={5} 
                            required
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
                    </div>
                    <div className="mt-8 text-center">
                        <button type="submit" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <SendIcon className="w-5 h-5 mr-2" />
                            Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;