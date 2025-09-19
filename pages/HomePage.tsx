import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import Initiatives from '../components/Initiatives';
import Stories from '../components/Stories';
import ImageGallery from '../components/ImageGallery';
import ImageModal, { ImageData } from '../components/ImageModal';
import Recognition from '../components/Recognition';
import Donors from '../components/Donors';
import Leadership from '../components/Leadership';
import Transparency from '../components/Transparency';
import MoreWays from '../components/MoreWays';
import Presence from '../components/Presence';
import FAQ from '../components/FAQ';

const allImages: ImageData[] = [
    { src: 'https://picsum.photos/seed/edu1/500/500', alt: 'Children learning in a classroom', category: 'Education', description: 'Empowering the next generation.' },
    { src: 'https://picsum.photos/seed/health1/500/500', alt: 'Medical checkup at a camp', category: 'Healthcare', description: 'Providing essential medical care.' },
    { src: 'https://picsum.photos/seed/comm1/500/500', alt: 'Community members working together', category: 'Community', description: 'Building stronger communities.' },
    { src: 'https://picsum.photos/seed/env1/500/500', alt: 'Volunteers planting trees', category: 'Environment', description: 'Protecting our planet for the future.' },
    { src: 'https://picsum.photos/seed/edu2/500/500', alt: 'A student receiving a scholarship', category: 'Education', description: 'Opening doors through education.' },
    { src: 'https://picsum.photos/seed/health2/500/500', alt: 'A doctor talking to a patient', category: 'Healthcare', description: 'Health and wellness for all.' },
    { src: 'https://picsum.photos/seed/comm2/500/500', alt: 'A new well being installed in a village', category: 'Community', description: 'Clean water for a village.' },
    { src: 'https://picsum.photos/seed/women1/500/500', alt: 'Women in a skill development workshop', category: 'Empowerment', description: 'Empowering women with new skills.' },
];

const categories = ['All', 'Education', 'Healthcare', 'Community', 'Environment', 'Empowerment'];

const HomePage: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return allImages;
    return allImages.filter(img => img.category === activeFilter);
  }, [activeFilter]);
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // When filter changes, close the modal as the index is no longer valid
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % filteredImages.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + filteredImages.length) % filteredImages.length);
    }
  };
  
  const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <>
      <Hero onDonateClick={onDonateClick} />
      <Initiatives />
      <Stories />
      <ImageGallery 
        images={filteredImages}
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        onImageClick={handleImageClick}
      />
      <Recognition />
      <Donors />
      <Leadership />
      <Transparency />
      <MoreWays />
      <Presence />
      <FAQ />

      {currentImage && (
        <ImageModal 
            image={currentImage}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
            hasNext={filteredImages.length > 1}
            hasPrev={filteredImages.length > 1}
        />
      )}
    </>
  );
};

export default HomePage;
