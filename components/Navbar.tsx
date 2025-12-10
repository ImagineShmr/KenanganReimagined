import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/80 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-brand-red text-white' : 'bg-white text-brand-red'}`}>
               <Coffee size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-espresso' : 'text-brand-espresso md:text-white'}`}>
              Kenangan
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-red ${
                  isScrolled ? 'text-brand-espresso' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className={`px-5 py-2 rounded-full font-medium text-sm transition-transform hover:scale-105 active:scale-95 ${
                isScrolled 
                ? 'bg-brand-espresso text-white hover:bg-brand-red' 
                : 'bg-white text-brand-espresso hover:bg-brand-cream'
            }`}>
              Download App
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-brand-espresso' : 'text-brand-espresso'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-cream flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-brand-espresso hover:text-brand-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="font-serif text-3xl text-brand-espresso hover:text-brand-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="mt-8 px-8 py-3 bg-brand-red text-white rounded-full font-medium text-lg shadow-lg shadow-brand-red/30"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;