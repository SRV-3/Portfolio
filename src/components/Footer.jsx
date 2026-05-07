import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand & Mission */}
        <div className="md:col-span-2 flex flex-col items-start">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Sourav.</h2>
          <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
            Building premium, scalable, and intuitive digital experiences. Bridging the gap between engineering and design.
          </p>
          <a 
            href="mailto:hello@sourav.dev" 
            className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-6 py-3 transition-colors text-sm font-medium"
          >
            <Mail size={16} className="text-[#FF4500]" />
            <span>thakursourav778@gmail.com</span>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-6">Quick Links</h3>
          <ul className="space-y-4 text-white/70">
            <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#journey" onClick={(e) => handleScrollTo(e, 'journey')} className="hover:text-white transition-colors">Journey</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-6">Connect</h3>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/SRV-3" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://x.com/Sourav30360541" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/souravs01/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; {currentYear} Sourav Singh. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;