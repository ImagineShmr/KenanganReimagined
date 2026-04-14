import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import AppDownload from '../components/AppDownload';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <MenuSection />
      <AboutSection />
      <ValuesSection />
      <AppDownload />
    </>
  );
};

export default HomePage;
