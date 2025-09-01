import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

// Import Pages
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import InitiativesPage from './pages/InitiativesPage';
import StoriesPage from './pages/StoriesPage';
import AchievementsPage from './pages/AchievementsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';


const App: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const handleOpenDonationModal = () => setIsDonationModalOpen(true);
  const handleCloseDonationModal = () => setIsDonationModalOpen(false);
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onDonateClick={handleOpenDonationModal} />;
      case 'Our Story':
        return <OurStoryPage />;
      case 'Initiatives':
        return <InitiativesPage />;
      case 'Stories':
        return <StoriesPage />;
      case 'Achievements':
        return <AchievementsPage />;
      case 'Get Involved':
        return <GetInvolvedPage onDonateClick={handleOpenDonationModal} onNavigate={handleNavigate} />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onDonateClick={handleOpenDonationModal} />;
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header onDonateClick={handleOpenDonationModal} onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <DonationModal isOpen={isDonationModalOpen} onClose={handleCloseDonationModal} />
    </div>
  );
};

export default App;
