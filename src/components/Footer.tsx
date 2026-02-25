'use client';

import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo/logo io transparant.png"
              alt="I/O Festival Logo"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
            <div className="w-px h-8 bg-white/10" />
            <Image
              src="/assets/logo/LOGO FTI UNTAR.png"
              alt="FTI UNTAR Logo"
              width={120}
              height={60}
              className="h-10 w-auto object-contain"
            />
            <div className="w-px h-8 bg-white/10" />
            <Image
              src="/assets/logo/logo bem fti white.png"
              alt="BEM FTI Logo"
              width={120}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-white/50 text-sm mt-2">© 2026 I/O Festival. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" aria-label="Follow us on Twitter" className="text-white/40 hover:text-neon-orange transition-colors duration-300">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Follow us on Instagram" className="text-white/40 hover:text-neon-orange transition-colors duration-300">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Visit our Github" className="text-white/40 hover:text-neon-orange transition-colors duration-300">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
