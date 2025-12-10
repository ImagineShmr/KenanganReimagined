import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full relative">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ValuesSection />
      <AppDownload />
      <Footer />
    </main>
  );
};

export default App;