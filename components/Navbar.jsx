"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Navbar component with a blurred background and sticky positioning.
 * Design Choice: Glassmorphism effect for a modern, tech-focused look.
 */
const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center group">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                layoutId="nav-underline"
              />
            </Link>
          ))}
        </div>

        {/* Mobile menu could be added here, but keeping it minimal for v2 as requested */}
      </div>
    </nav>
  );
};

export default Navbar;
