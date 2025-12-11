import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, always show scrolled style
  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showScrolledStyle
          ? 'bg-brand-cream/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img
              src={showScrolledStyle ? "/images/kcLogo.png" : "/images/kcLogoWhite.png"}
              alt="Kenangan Coffee"
              className="h-16 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${isActive
                      ? 'text-brand-red border-b-2 border-brand-red pb-0.5'
                      : showScrolledStyle
                        ? 'text-brand-espresso hover:text-brand-red'
                        : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/download-app"
              className={`px-5 py-2 rounded-full font-medium text-sm transition-transform hover:scale-105 active:scale-95 ${showScrolledStyle
                ? 'bg-brand-espresso text-white hover:bg-brand-red'
                : 'bg-white text-brand-espresso hover:bg-brand-cream'
                }`}>
              Download App
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${showScrolledStyle ? 'text-brand-espresso' : 'text-white'}`}
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
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="font-serif text-3xl text-brand-espresso hover:text-brand-red transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/download-app"
                  className="mt-8 px-8 py-3 bg-brand-red text-white rounded-full font-medium text-lg shadow-lg shadow-brand-red/30 inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download App
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;