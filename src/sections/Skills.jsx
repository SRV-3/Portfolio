import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const skillSections = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Redux Toolkit", icon: "redux" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Next.js", icon: "nextdotjs" },
        { name: "Shadcn UI", icon: "shadcnui" },
        { name: "Framer Motion", icon: "framer" },
        { name: "Responsive Design", icon: "" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express.js", icon: "express" },
        { name: "NestJS", icon: "nestjs" },
        { name: "REST APIs", icon: "" },
        { name: "GraphQL", icon: "graphql" },
        { name: "JWT Auth", icon: "jsonwebtokens" },
        { name: "Google OAuth", icon: "google" },
        { name: "Nodemailer", icon: "" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Prisma", icon: "prisma" },
        { name: "Mongoose", icon: "mongoose" },
        { name: "Aggregation Pipelines", icon: "" }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Postman", icon: "postman" },
        { name: "Vercel", icon: "vercel" },
        { name: "Railway", icon: "railway" }
      ]
    },
    {
      category: "Methodologies",
      skills: [
        { name: "Agile & Scrum", icon: "" },
        { name: "Test-Driven Development", icon: "" },
        { name: "Clean Code", icon: "" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h3>
          <p className="text-xl text-white/70 max-w-2xl">
            A comprehensive overview of the technologies I work with across the full stack and development lifecycle.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <h4 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase flex items-center">
                <span className="w-4 h-px bg-[#FF4500] mr-3"></span>
                {section.category}
              </h4>

              {/* Skills List */}
              <div className="flex flex-wrap gap-4">
                {section.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    className="group flex items-center space-x-3 px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.2)] rounded-lg text-white font-medium transition-all cursor-default text-sm"
                  >
                    {skill.icon && (
                      <img 
                        src={`https://cdn.simpleicons.org/${skill.icon}/white`} 
                        alt={skill.name} 
                        className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" 
                      />
                    )}
                    <span className="group-hover:text-[#FF4500] transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              {idx < skillSections.length - 1 && (
                <div className="h-px bg-white/5 w-1/2 md:w-1/3 mt-12"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;