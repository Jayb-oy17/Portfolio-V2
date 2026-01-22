"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

/**
 * ProjectCard component with hover effects.
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl -z-10" />

      <div className="flex flex-col h-full">
        <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 aspect-video">
           <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10" />
           {project.image ? (
             <img 
               src={project.image} 
               alt={project.title}
               className="w-full h-full object-cover object-top"
             />
           ) : (
             <div className="flex items-center justify-center h-full text-slate-600 font-mono text-xs uppercase tracking-widest">
               {project.title} Preview
             </div>
           )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <motion.span 
              key={t} 
              whileHover={{ scale: 1.1 }}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-blue-500/5 border border-slate-200 dark:border-white/5 rounded-md text-slate-600 dark:text-slate-300"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-white/5">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
