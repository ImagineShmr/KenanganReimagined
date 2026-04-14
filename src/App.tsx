import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import OurStoryPage from './pages/OurStoryPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import DownloadAppPage from './pages/DownloadAppPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen w-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download-app" element={<DownloadAppPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;