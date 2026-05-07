import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for sticky navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111111]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-tighter text-white z-50 relative"
        >
          <a href="#" onClick={(e) => handleScrollTo(e, 'home')}>Sourav.</a>
        </motion.div>
        
        {/* Desktop Links */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex space-x-8 text-sm font-medium text-white/90"
        >
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-[#FF4500] transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-[#FF4500] transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-[#FF4500] transition-colors">Projects</a>
          <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#FF4500] transition-colors">Services</a>
          <a href="#journey" onClick={(e) => handleScrollTo(e, 'journey')} className="hover:text-[#FF4500] transition-colors">Journey</a>
        </motion.div>

        {/* Desktop CTA */}
        <motion.button 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors items-center space-x-2"
        >
          <span>Hire Me</span>
          <span className="bg-[#FF4500] text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">→</span>
        </motion.button>

        {/* Mobile Menu Toggle Button */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden text-white z-50 relative p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#111111] z-40 flex flex-col items-center justify-center space-y-8"
          >
            <div className="flex flex-col items-center space-y-6 text-2xl font-medium text-white/90">
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-[#FF4500] transition-colors">About</a>
              <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-[#FF4500] transition-colors">Skills</a>
              <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-[#FF4500] transition-colors">Projects</a>
              <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#FF4500] transition-colors">Services</a>
              <a href="#journey" onClick={(e) => handleScrollTo(e, 'journey')} className="hover:text-[#FF4500] transition-colors">Journey</a>
            </div>
            
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-3">
              <span>Hire Me</span>
              <span className="bg-[#FF4500] text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-sm">→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;