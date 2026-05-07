import React from 'react';
import { motion } from 'motion/react';
import heroImg from '../assets/hero.png';

const Hero = () => {
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
    <section id="home" className="relative w-full min-h-screen bg-[#111111] text-white font-sans flex flex-col">
      {/* Orange Gradient Background Area that contains Nav and Hero Data */}
      <div className="relative w-full bg-gradient-to-br from-[#FF4500] via-[#D83A00] to-[#801F00] rounded-b-[40px] md:rounded-b-[80px] flex flex-col pt-6 pb-0 overflow-hidden min-h-[85vh]">
        
        {/* Top Spacer to account for fixed Navbar */}
        <div className="pt-24 md:pt-32"></div>

        {/* Huge Absolute Image (Lowest Z-Index) */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[75%] lg:w-[60%] max-w-[900px] z-0 hidden md:flex justify-center items-end pointer-events-none"
        >
          <img 
            src={heroImg} 
            alt="Sourav Singh" 
            className="w-full h-auto max-h-[80vh] object-contain object-bottom"
          />
        </motion.div>

        {/* Main Hero Content */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-grow pointer-events-none">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 pb-12 pointer-events-auto"
          >
            <p className="text-lg md:text-xl font-medium mb-2 text-white/90">Hey, I'm Sourav Singh</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
              Creative<br />Developer<br/>& Designer
            </h1>
            
            <div className="mt-12 space-y-6 hidden md:block">
               <div className="text-sm border-l-2 border-white/30 pl-4">
                  <span className="text-white/60 font-mono">01</span>
                  <p className="font-medium mt-1">Web Development</p>
               </div>
               <div className="text-sm border-l-2 border-white/30 pl-4">
                  <span className="text-white/60 font-mono">02</span>
                  <p className="font-medium mt-1">AWS Deployment</p>
               </div>
               <div className="text-sm border-l-2 border-white/30 pl-4">
                  <span className="text-white/60 font-mono">03</span>
                  <p className="font-medium mt-1">UI/UX Design</p>
               </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 flex flex-col justify-center pb-12 pointer-events-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Shaping experiences that make life simpler.
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              I'm a developer and designer focused on building clean, intuitive interfaces that solve real-world problems. Let's build something meaningful together.
            </p>
            
            <div className="flex items-center space-x-4">
              <motion.button 
                onClick={(e) => handleScrollTo(e, 'projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Black Section (Trusted By) */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm flex-grow"
      >
        <p className="mb-4 md:mb-0 font-medium text-white/70">Trusted by Brands I've Helped Shape</p>
        <div className="flex space-x-8 items-center font-bold font-mono overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
          <span className="whitespace-nowrap">O Supa Blox</span>
          <span className="whitespace-nowrap">X Hype Blox</span>
          <span className="whitespace-nowrap">[] Frame Blox</span>
          <span className="whitespace-nowrap">OO Ultra Blox</span>
        </div>
      </motion.div> */}

    </section>
  );
};

export default Hero;