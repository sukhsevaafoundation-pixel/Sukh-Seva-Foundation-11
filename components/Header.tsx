import React, { useState } from 'react';

const Logo: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <button onClick={() => onNavigate('Home')} className="flex items-center" aria-label="Go to Homepage">
    <img src="https://i.ibb.co/7jZ0S0c/logo.png" alt="Sukh Seva Foundation Logo" className="h-16 w-auto" />
  </button>
);

interface HeaderProps {
    onDonateClick: () => void;
    onNavigate: (page: string) => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onDonateClick, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Our Story", "Initiatives", "Stories", "Achievements", "Get Involved", "Contact"];
  
  const handleNavClick = (link: string) => {
    onNavigate(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo onNavigate={onNavigate} />
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link} 
                onClick={() => handleNavClick(link)} 
                className={`transition-colors duration-300 font-medium pb-1 border-b-2 ${currentPage === link ? 'text-indigo-700 border-indigo-700' : 'text-gray-600 border-transparent hover:text-indigo-700'}`}
                aria-current={currentPage === link ? 'page' : undefined}
              >
                {link}
              </button>
            ))}
          </nav>
          <button
            onClick={onDonateClick}
            className="hidden lg:inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Donate Now
          </button>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
         <div className="lg:hidden bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map(link => (
                    <button 
                      key={link} 
                      onClick={() => handleNavClick(link)} 
                      className={`py-2 px-3 rounded-md transition-colors duration-300 font-medium text-left ${currentPage === link ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                      aria-current={currentPage === link ? 'page' : undefined}
                    >
                        {link}
                    </button>
                ))}
                <button
                  onClick={() => {
                    onDonateClick();
                    setIsMenuOpen(false);
                  }}
                  className="mt-2 text-center bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
                >
                    Donate Now
                </button>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
