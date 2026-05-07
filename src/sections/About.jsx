import React, { useState } from 'react';
import { motion } from 'motion/react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#111111] text-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px", amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
      >
        
        {/* Left Column: Intro */}
        <motion.div variants={itemVariants} className="lg:col-span-6 xl:col-span-5">
          <h2 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-6">Behind the Code</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
            Building scalable systems & modern web apps.
          </h3>
          <div className="text-white/70 text-lg leading-relaxed mb-10">
            <p>
              I am a Fullstack developer focused on building scalable and modern web applications with clean UI and reliable backend systems. My approach merges technical robustness with elegant design.
            </p>
            
            {/* Expandable Content */}
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <p>
                  I specialize in bridging the gap between design and engineering. My journey involves working across the entire stack from optimizing complex database aggregation pipelines to ensuring a seamless, highly responsive user experience on the frontend.
                </p>
                <p>
                  When I'm not coding, I'm constantly exploring new architectural patterns and cloud infrastructure tools to refine my craft and build resilient digital products that convert.
                </p>
              </motion.div>
            )}
          </div>

          <motion.button 
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 text-white font-semibold hover:text-[#FF4500] transition-colors"
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <span className="w-8 h-[1px] bg-white group-hover:bg-[#FF4500] transition-colors"></span>
          </motion.button>
        </motion.div>

        {/* Right Column: Focus */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
          
          {/* Experience / Focus */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] mr-3"></span>
              Experience & Focus
            </h4>
            <ul className="space-y-5 text-white/70">
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                Building fullstack web applications
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                Developing e-commerce platforms and SaaS dashboards
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                Working with authentication systems and payment integrations
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                Exploring scalable backend architecture and DevOps workflows
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                Interested in deployment, containerization and cloud infrastructure
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;