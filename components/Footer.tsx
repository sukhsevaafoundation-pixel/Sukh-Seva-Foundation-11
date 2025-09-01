
import React from 'react';
import FooterSilhouette from './FooterSilhouette';

// --- SVG Icon Components for the New Footer Design ---

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.216 3.803 4.654-.64.175-1.31.225-1.99.088.61 1.91 2.37 3.29 4.45 3.33-1.62 1.27-3.66 2.02-5.88 2.02-1.12 0-2.23-.06-3.31-.19 2.09 1.35 4.58 2.13 7.24 2.13 8.69 0 13.46-7.21 13.46-13.46 0-.21 0-.41-.01-.61.92-.66 1.72-1.49 2.35-2.43z"/></svg>
);
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
);
const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
);
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.138 4.157 4.274-1.12z"/></svg>
);

const Footer: React.FC = () => {
    return (
    <footer className="bg-gray-100 text-gray-800 relative overflow-x-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Foundation Info */}
            <div className="md:col-span-12 lg:col-span-4">
                <div className="mb-4">
                    <img src="https://i.ibb.co/7jZ0S0c/logo.png" alt="Sukh Seva Foundation Logo" className="h-24 w-auto" />
                </div>
                <p className="text-gray-600 max-w-sm">
                    A non-profit organization dedicated to creating hope and transforming lives through sustainable community solutions.
                </p>
                <div className="mt-6 flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-sky-500 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
                </div>
            </div>

            {/* Link Columns */}
            <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg tracking-wider text-gray-900">ABOUT US</h4>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Our Story</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Vision & Mission</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Leadership</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Tax Exemption</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg tracking-wider text-gray-900">GET INVOLVED</h4>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Online Donations</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Volunteer</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Our Initiatives</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            {/* Newsletter & Recognition */}
            <div className="md:col-span-6 lg:col-span-4">
                 <h4 className="font-bold text-lg tracking-wider text-gray-900">SUBSCRIBE E-NEWSLETTER</h4>
                 <form className="mt-4 space-y-3">
                    <input type="text" placeholder="Full Name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                    <input type="email" placeholder="Email Id" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                    <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                        Submit
                    </button>
                 </form>
                 <div className="mt-6">
                    <img src="https://i.ibb.co/8DBw83h/Guide-Star-India-Platinum-Seal-2024.png" alt="GuideStar Platinum Seal" className="h-20" />
                 </div>
            </div>
        </div>
      </div>
      
      {/* New Silhouette Section */}
      <div className="bg-gray-200/75 pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-600 flex justify-between items-center">
            <p>Charity ID: 123/GWA/2023</p>
            <p>© {new Date().getFullYear()} Sukh Seva Foundation. All rights reserved.</p>
        </div>
        <FooterSilhouette />
      </div>

       <a href="#" className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50" aria-label="Chat on WhatsApp">
        <WhatsAppIcon className="w-8 h-8"/>
      </a>
    </footer>
  );
};

export default Footer;