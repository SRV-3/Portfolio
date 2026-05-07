import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Mail, Copy, Check, MapPin, Clock } from 'lucide-react';

// Inline SVGs for Brand Icons
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const email = "thakursourav778@gmail.com";

  // Real-time IST clock
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // 3D Card Hover Effect Configuration
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useTransform(x, [-0.5, 0.5], [10, -10]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Info & Links */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-4">Connect</h2>
          <h3 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#ff7b47]">extraordinary.</span>
          </h3>
          <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
            Whether you have a project in mind or just want to chat about architecture and design, feel free to reach out.
          </p>

          <div className="space-y-6">
            {/* Copy Email Button */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#FF4500]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1">Email me at</p>
                <div className="flex items-center space-x-3">
                  <a href={`mailto:${email}`} className="text-lg font-medium hover:text-[#FF4500] transition-colors">
                    {email}
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 text-white/70 hover:text-white"
                    title="Copy Email"
                  >
                    {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex items-center space-x-4">
              <a 
                href="https://github.com/SRV-3" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#FF4500] border border-white/10 hover:border-[#FF4500] rounded-full transition-all text-white hover:scale-110"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/souravs01/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#FF4500] border border-white/10 hover:border-[#FF4500] rounded-full transition-all text-white hover:scale-110"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Creative Identity Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative perspective-[1000px] w-full max-w-md mx-auto lg:mr-0"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: mouseYSpring, rotateY: mouseXSpring }}
            className="w-full min-h-[420px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden relative group transform-style-3d cursor-crosshair"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {/* Glowing Orb Background */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF4500]/20 blur-[100px] rounded-full group-hover:bg-[#FF4500]/30 transition-colors duration-500 pointer-events-none"></div>

            {/* Card Content - Top */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF4500] to-[#cc3700] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl tracking-tighter">S.</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Sourav Singh</h4>
                <p className="text-[#FF4500] font-mono text-xs uppercase tracking-widest">Fullstack Engineer</p>
              </div>

              {/* Status Indicator */}
              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">Available</span>
                </div>
              </div>
            </div>

            {/* Card Content - Middle (Location & Time) */}
            <div className="relative z-10 my-10 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4 text-white/60">
                <MapPin size={16} className="text-[#FF4500]" />
                <span className="text-sm font-medium">Remote / India (IST)</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Clock size={16} className="text-[#FF4500]" />
                <span className="text-xl font-mono tracking-wider">{currentTime || "Loading..."}</span>
              </div>
            </div>

            {/* Card Content - Bottom */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                System Ready <br/>
                Initialization: Complete
              </div>
              <a 
                href={`mailto:${email}`}
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#FF4500] hover:text-white transition-colors flex items-center space-x-2 group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]"
              >
                <span>Initiate</span>
                <span className="font-serif italic text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;