"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

/**
 * Hero component with a clipped background mask and subtle motion.
 */
const Hero = () => {
  const { scrollY } = useScroll();
  const maskY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-10 overflow-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background Masked Area with slow motion */}
      <motion.div 
        style={{ y: maskY }}
        className="absolute inset-0 z-0 opacity-20"
      >
        <div className="hero-mask absolute inset-0 animated-gradient bg-linear-to-br from-blue-600 via-purple-700 to-blue-900" />
      </motion.div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-blue-500 font-mono text-xs tracking-widest mb-4 uppercase">
            Available for new opportunities
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
            Hi, I&apos;m <span className="text-gradient">Abdullateef Mujahid</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A Front End Web Developer specializing in user experience optimization, 
            responsive design, and visually stunning web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
            >
              View Projects
            </Link>
            <Link 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg font-semibold transition-all backdrop-blur-sm"
            >
              Contact Me
            </Link>
            <a 
              href="/resume.pdf" 
              download
              className="w-full sm:w-auto px-8 py-4 border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-1 h-12 rounded-full bg-linear-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
