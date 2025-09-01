import React from 'react';
import { HeartIcon } from '../components/Icons';

// Local icon definitions for styling consistency with user's image
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919C8.416 2.175 8.796 2.163 12 2.163m0 7.838c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm6.406-3.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.216 3.803 4.654-.64.175-1.31.225-1.99.088.61 1.91 2.37 3.29 4.45 3.33-1.62 1.27-3.66 2.02-5.88 2.02-1.12 0-2.23-.06-3.31-.19 2.09 1.35 4.58 2.13 7.24 2.13 8.69 0 13.46-7.21 13.46-13.46 0-.21 0-.41-.01-.61.92-.66 1.72-1.49 2.35-2.43z"/></svg>
);
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const ContactPage: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        // In a real app, you would send the form data to an API endpoint
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="bg-[#F8F7F4]">
            {/* Top Title Section */}
            <div className="text-center py-16 border-b border-gray-200">
                <HeartIcon className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                <h1 className="text-5xl font-extrabold text-gray-800" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-600 text-lg tracking-widest" style={{ fontFamily: "'Times New Roman', serif" }}>
                    "BEST NGO FOR CSR IN INDIA: SUKH SEVA FOUNDATION"
                </p>
            </div>
            
            {/* Main Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="flex flex-col">
                         <HeartIcon className="w-6 h-6 text-orange-500 mb-4" />
                         <h2 className="text-5xl font-extrabold text-gray-800 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
                            Get in Touch With Us
                         </h2>
                         <p className="text-purple-600 font-semibold tracking-widest mb-6">WRITE A MESSAGE</p>
                         <p className="text-gray-600 leading-relaxed mb-8">
                            We are the best NGO in Delhi NCR, India. We endeavor for holistic growth of the Nation and its people. We are the best Social Organisation in Delhi NCR, India. Support by Donate to NGO or Donate in India. We Mainly focused on poverty in India, Child Development, Women Empowerment, Skill Development, Education for poor & Street Children, Health programs, Environment protection, Consumer awareness, Elderly care, Rural development programs, Slum development, Donate for Livelihood, etc. Donate to India's best NGO and support development.
                         </p>
                         <div className="flex space-x-4">
                             <a href="#" className="w-10 h-10 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook"><FacebookIcon className="w-5 h-5"/></a>
                             <a href="#" className="w-10 h-10 bg-[#00acee] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Twitter"><TwitterIcon className="w-5 h-5"/></a>
                             <a href="#" className="w-10 h-10 bg-[#E4405F] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram"><InstagramIcon className="w-5 h-5"/></a>
                             <a href="#" className="w-10 h-10 bg-[#0e76a8] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5"/></a>
                         </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Your Name *" required className="w-full p-4 bg-gray-100 border border-transparent rounded-md focus:ring-orange-500 focus:border-orange-500 transition"/>
                                <input type="email" name="email" placeholder="Your Email *" required className="w-full p-4 bg-gray-100 border border-transparent rounded-md focus:ring-orange-500 focus:border-orange-500 transition"/>
                            </div>
                            <input type="text" name="subject" placeholder="Your Subject" className="w-full p-4 bg-gray-100 border border-transparent rounded-md focus:ring-orange-500 focus:border-orange-500 transition"/>
                            <textarea name="message" placeholder="Your message" rows={6} className="w-full p-4 bg-gray-100 border border-transparent rounded-md focus:ring-orange-500 focus:border-orange-500 transition"></textarea>
                            <button type="submit" className="bg-[#F5A623] text-white font-bold py-3 px-8 rounded-md hover:bg-orange-500 transition-colors">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
