import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';

const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-y-auto shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#FF4500] rounded-full flex items-center justify-center text-white transition-colors"
        >
          ✕
        </button>

        {/* Modal Left: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1a1a1a]"></div>
        </div>

        {/* Modal Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-[#FF4500]/10 text-[#FF4500] text-xs font-mono uppercase tracking-wider rounded-md border border-[#FF4500]/20">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-white/5 text-white/50 text-xs font-mono uppercase tracking-wider rounded-md border border-white/10">
              {project.status}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{project.title}</h3>
          
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <h4 className="text-sm font-bold uppercase tracking-widest text-[#FF4500] mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] mr-3"></span>
            Key Features
          </h4>
          <ul className="space-y-3 text-white/80 mb-8">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#FF4500] mr-3">▹</span>
                {feature}
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-bold uppercase tracking-widest text-[#FF4500] mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] mr-3"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-[#111111] border border-[#2a2a2a] text-white/90 text-sm rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex space-x-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 text-center py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 text-center py-3 bg-[#111111] text-white border border-white/20 font-semibold rounded-lg hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
            >
              GitHub Source
            </a>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">Featured Projects.</h3>
          </div>
          <p className="text-white/60 max-w-md mt-6 md:mt-0 md:text-right">
            A curated selection of my recent fullstack applications, SaaS platforms, and digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Effect */}
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden mb-8 border border-white/5 bg-[#1a1a1a]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Overlay Hover Layer */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex space-x-3">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>
                
                {/* View Details Button overlay */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="w-12 h-12 bg-[#FF4500] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#FF4500]/30 font-bold text-xl">
                    ↗
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold group-hover:text-[#FF4500] transition-colors">
                    {project.title}
                  </h4>
                </div>
                <p className="text-white/60 line-clamp-2 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs font-mono text-white/30 px-2 py-1">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
