import Link from "next/link";

import { MapPin, CheckCircle } from "lucide-react";

/**
 * Enhanced Footer component.
 */
const Footer = () => {
  return (
    <footer className="py-16 md:py-8 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="text-xl font-bold tracking-tighter mb-2 text-slate-900 dark:text-white">
              PORTFOLIO<span className="text-blue-500">.V2</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-500 text-sm">
                <MapPin size={14} className="text-blue-500" />
                Based in Ilorin, Nigeria 🌍
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-500 text-sm">
                <CheckCircle size={14} className="text-emerald-500" />
                Available for New Opportunities
              </div>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
            <a 
              href="https://github.com/Jayb-oy17" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} Abdullateef Mujahid. Designed & Developed with passion.
          </div>
          <div className="text-slate-400 dark:text-slate-600 text-xs">
            Built with Next.js, Tailwind & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
