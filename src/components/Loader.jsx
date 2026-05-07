import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Let it sit at 100% for half a second
          return 100;
        }
        // Random increment for a dynamic feeling
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] bg-[#111111] flex flex-col items-center justify-center text-white font-mono"
      initial={{ opacity: 1, y: 0 }}
      exit={{ 
        y: '-100%', 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center">
        {/* Loading percentage */}
        <div className="text-[#FF4500] text-7xl md:text-9xl font-bold tracking-tighter w-48 text-center flex justify-center">
          {progress}
          <span className="text-4xl md:text-6xl mt-auto pb-2">%</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 md:w-96 h-1 bg-white/10 mt-8 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#FF4500]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Text */}
        <div className="mt-8 text-white/50 tracking-[0.3em] uppercase text-xs animate-pulse">
          Initializing Portfolio
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
