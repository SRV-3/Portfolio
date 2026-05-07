import React from 'react';
import { motion } from 'motion/react';

const journeySteps = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Frontend Foundations",
    description: "Mastered the fundamentals of modern web design, responsive layouts, and React. Focused on creating beautiful, accessible, and highly interactive user interfaces.",
    year: "2025"
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "Server-Side Logic",
    description: "Expanded my skillset to the backend with Node.js and Express. Learned database architecture with MongoDB and built secure, scalable RESTful APIs.",
    year: "2026"
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Architecting Scale",
    description: "Combined frontend and backend expertise to build complete, high-performance applications, including complex e-commerce platforms with payment integrations.",
    year: "2026"
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Modern Infrastructure",
    description: "Currently diving into containerization with Docker, CI/CD pipelines, and cloud deployment to ensure robust, automated, and scalable software delivery.",
    year: "Present"
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4500]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-4">My Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Journey.</h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Timeline Dot (Center on Desktop, Left on Mobile) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px", amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#FF4500] rounded-full -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(255,69,0,0.5)] z-10"
                  ></motion.div>

                  {/* Left Content (Empty on Mobile, Text on Desktop Even) */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${isEven ? '' : 'invisible'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px", amount: 0.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-white/60 leading-relaxed mb-3">{step.description}</p>
                        <span className="text-sm font-mono text-[#FF4500] bg-[#FF4500]/10 px-3 py-1 rounded-full border border-[#FF4500]/20 inline-block">
                          {step.year}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Content / Mobile Content */}
                  <div className={`w-full pl-12 md:w-1/2 md:pl-12 ${!isEven ? '' : 'md:hidden'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px", amount: 0.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-xs font-mono text-white/40 tracking-widest uppercase block mb-2 md:hidden">
                        {step.phase}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-white/60 leading-relaxed mb-3">{step.description}</p>
                      <span className="text-sm font-mono text-[#FF4500] bg-[#FF4500]/10 px-3 py-1 rounded-full border border-[#FF4500]/20 inline-block">
                        {step.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Mobile Phase Label (Hidden on Mobile, handled above) */}
                  <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 -top-8 text-xs font-mono text-white/30 tracking-widest uppercase`}>
                    {step.phase}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;