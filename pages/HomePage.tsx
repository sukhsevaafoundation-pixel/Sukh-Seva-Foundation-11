import React from 'react';
import Hero from '../components/Hero';
import Initiatives from '../components/Initiatives';
import Stories from '../components/Stories';
import Recognition from '../components/Recognition';
import Donors from '../components/Donors';
import Leadership from '../components/Leadership';
import Transparency from '../components/Transparency';
import MoreWays from '../components/MoreWays';
import Presence from '../components/Presence';
import FAQ from '../components/FAQ';

const HomePage: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
  return (
    <>
      <Hero onDonateClick={onDonateClick} />
      <Initiatives />
      <Stories />
      <Recognition />
      <Donors />
      <Leadership />
      <Transparency />
      <MoreWays />
      <Presence />
      <FAQ />
    </>
  );
};

export default HomePage;