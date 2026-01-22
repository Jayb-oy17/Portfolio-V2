"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ExternalLink, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects, featuredProject, experience } from "@/data/projects";

/**
 * Single Page Portfolio (v2.1).
 */
export default function Home() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Responsive Web Design", 
    "UI/UX Design", "Framer Motion", "Git", "API Integration"
  ];

  const socials = [
    { icon: <Mail size={24} />, label: "Email", href: "mailto:ajiboladiekola16@gmail.com", color: "hover:text-blue-400" },
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/Jayb-oy17", color: "hover:text-white" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/ajibola-diekola-683068341", color: "hover:text-blue-500" },
    { icon: <Twitter size={24} />, label: "Twitter", href: "https://x.com/devJipson101?s=09", color: "hover:text-sky-400" },
  ];

  const stats = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "15+" },
    { label: "Load Optimization", value: "35% Faster" },
    { label: "Active Users", value: "500+" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-6 bg-slate-100/50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 md:py-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-slate-200 dark:bg-slate-900 section-divider opacity-50 z-0 rotate-180" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  I am a Front End Developer with expertise in user experience optimization, 
                  responsive website development, and creating visually stunning web applications. 
                  Based in Ilorin, Nigeria, I focus on building interactive and cross-platform 
                  compatible web experiences.
                </p>
                <p>
                  Currently, I leverage technologies like React and Framer Motion to ensure that 
                  every project is not only functional but also engaging for the end user.
                </p>
                <div className="pt-8">
                  <h3 className="text-white font-bold mb-4 italic text-sm uppercase tracking-widest">The Legacy</h3>
                  <p className="mb-4 text-sm">
                    My journey started with a foundation in core web technologies. 
                    You can view the v1 of my portfolio here:
                  </p>
                  <a 
                    href="https://jipson-port.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-blue-500/30 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all text-xs font-medium"
                  >
                    View Past Portfolio (v1)
                  </a>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-black/20">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-xs">
                  Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 rounded-lg text-xs text-slate-600 dark:text-slate-300 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-24 md:py-12 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Project</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="relative overflow-hidden aspect-video lg:aspect-auto bg-slate-100 dark:bg-slate-800">
               <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
               {featuredProject.image ? (
                 <img 
                   src={featuredProject.image} 
                   alt={featuredProject.title}
                   className="w-full h-full object-cover object-top"
                 />
               ) : (
                 <div className="flex items-center justify-center h-full text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">
                   Featured Work Preview
                 </div>
               )}
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{featuredProject.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed italic">&quot;{featuredProject.description}&quot;</p>
              
              <div className="grid gap-6 mb-8 text-sm">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold mb-1 uppercase tracking-widest text-[10px]">The Challenge</h4>
                  <p className="text-slate-500 dark:text-slate-400">{featuredProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold mb-1 uppercase tracking-widest text-[10px]">The Solution</h4>
                  <p className="text-slate-500 dark:text-slate-400">{featuredProject.solution}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Tech Choice</h4>
                    <p className="text-slate-500 dark:text-slate-400">{featuredProject.techChoices}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold mb-1 uppercase tracking-widest text-[10px]">Result</h4>
                  <p className="text-slate-300 font-medium">{featuredProject.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                 <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                   <ExternalLink size={18} /> View Case Study
                 </a>
                 {featuredProject.github && (
                   <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:border-white/30 rounded-xl transition-all">
                     <Github size={20} />
                   </a>
                 )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 md:py-16 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Journey</h2>
            <p className="text-slate-400">Charting the course of my professional growth.</p>
          </motion.div>

          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-xl ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="flex items-center gap-3 text-blue-500 mb-2">
                      <Briefcase size={16} />
                      <span className="text-xs font-mono uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-400">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Other Projects</h2>
              <p className="text-slate-400 max-w-xl">
                A selection of my recent work, focusing on performance, usability, and technical challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-slate-900 section-divider opacity-50 z-0" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-400 text-lg mb-16">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/50 border border-white/5 transition-all duration-300 ${social.color} group shadow-lg shadow-black/20`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-inherit">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-black/5 dark:shadow-black/40">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Send a Message</h3>
              <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 ml-1">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button 
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
