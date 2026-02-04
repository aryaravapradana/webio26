'use client';

import { Sparkles, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
         
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 font-space font-bold text-2xl tracking-tighter">
                <Sparkles className="w-6 h-6 text-[#FF8B53]" />
                <span className="text-white">I/O FESTIVAL 2026</span>
            </div>
            <p className="text-white/50 text-sm">© 2026 Future Tech Events. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
            <a href="#" aria-label="Follow us on Twitter" className="text-white/40 hover:text-[#FF8B53] transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Follow us on Instagram" className="text-white/40 hover:text-[#FF8B53] transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Visit our Github" className="text-white/40 hover:text-[#FF8B53] transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
      </div>
    </footer>
  );
}
