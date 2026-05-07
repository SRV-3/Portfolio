import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const allSkills = [
    { name: "React.js", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express.js", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "GraphQL", icon: "graphql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma", icon: "prisma" },
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "AWS", icon: "amazonaws" },
    { name: "Vercel", icon: "vercel" },
  ];

  // Split into two rows for the marquee
  const row1 = [...allSkills].slice(0, Math.ceil(allSkills.length / 2));
  const row2 = [...allSkills].slice(Math.ceil(allSkills.length / 2));

  // We duplicate the arrays to create a seamless infinite loop
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="skills" className="py-24 md:py-32 bg-transparent text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h3>
          <p className="text-xl text-white/70 max-w-2xl">
            A comprehensive overview of the technologies I work with across the full stack.
          </p>
        </motion.div>
      </div>

      {/* Marquee Tickers - Rotated for dynamic feel */}
      <div className="relative w-[110%] -left-[5%] flex flex-col gap-6 transform -rotate-3 scale-105 pointer-events-none">
        
        {/* Row 1 - Left to Right */}
        <div className="flex w-[400vw] md:w-[250vw] lg:w-[150vw]">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {duplicatedRow1.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-4 px-8 py-5 bg-[#0d0d0d] border border-white/5 rounded-full text-white font-semibold shadow-2xl min-w-max pointer-events-auto hover:border-[#FF4500] hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-all duration-300">
                <img src={`https://cdn.simpleicons.org/${skill.icon}/white`} alt={skill.name} className="w-6 h-6 opacity-80" />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-[400vw] md:w-[250vw] lg:w-[150vw] -ml-[25vw]">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["-33.33%", 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {duplicatedRow2.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-4 px-8 py-5 bg-[#0d0d0d] border border-white/5 rounded-full text-white font-semibold shadow-2xl min-w-max pointer-events-auto hover:border-[#FF4500] hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-all duration-300">
                <img src={`https://cdn.simpleicons.org/${skill.icon}/white`} alt={skill.name} className="w-6 h-6 opacity-80" />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;