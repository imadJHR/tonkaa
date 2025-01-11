import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/products', label: 'Collection' },
    { to: '/services', label: 'Services' },
    { to: '/stores', label: 'Magasin' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a0f0f]/90 backdrop-blur-md py-2 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="w-12 h-12" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm xl:text-base ${
                  location.pathname === link.to
                    ? 'text-[#8B4513]'
                    : 'text-[#e6ccb2] hover:text-[#8B4513] transition-colors'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-[#8B4513]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Catalog Download Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://green-austin-25.tiiny.site/"
              download="CATALOGUE_TONKA_2024_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#8B4513] hover:bg-[#8B4513]/80 text-[#e6ccb2] transition-colors duration-300 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                Voir tout notre catalogue
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#e6ccb2]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#1a0f0f]/95 backdrop-blur-md mt-2 rounded-md"
            >
              <div className="py-4 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 text-sm sm:text-base ${
                      location.pathname === link.to
                        ? 'text-[#8B4513] bg-white/10'
                        : 'text-[#e6ccb2] hover:text-[#8B4513] hover:bg-white/5 transition-colors'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Mobile Catalog Download Button */}
                <div className="px-4 py-2">
                  <a
                    href="https://green-austin-25.tiiny.site/"
                    download="CATALOGUE_TONKA_2024_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full bg-[#8B4513] hover:bg-[#8B4513]/80 text-[#e6ccb2] transition-colors duration-300 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
                      Voir tout notre catalogue
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;