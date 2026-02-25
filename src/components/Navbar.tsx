'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Tentang', href: '#about' },
  { name: 'Kompetisi', href: '#tracks' },
  { name: 'Jadwal', href: '#timeline' },
  { name: 'Hadiah', href: '#prizes' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[60] flex justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'
          }`}
      >
        <div className={`flex items-center justify-between pointer-events-auto w-full gap-8 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
          ? 'rounded-full px-6 py-3 bg-black/30 max-w-4xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'rounded-none px-12 py-5 bg-black/40 max-w-full border-b border-white/5'
          }`}>
          <Link href="/" aria-label="I/O Festival Home" className="flex items-center gap-2 font-raela font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <Image
              src="/assets/logo/logo io transparant.png"
              alt="I/O Festival Logo"
              width={200}
              height={60}
              className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'h-10' : 'h-14'}`}
              priority
            />
          </Link>

          <div className={`hidden md:flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'gap-8' : 'gap-10'}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-white/70 hover:text-white transition-all duration-700 relative group ${isScrolled ? 'text-sm' : 'text-base'}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className={`hidden md:block bg-white text-black rounded-full font-bold tracking-tight hover:bg-neon-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,139,83,0.4)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-0.5 ${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'}`}>
              Daftar Sekarang
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-neon-orange transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-raela font-bold text-white hover:text-neon-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="mt-8 bg-neon-orange text-white px-8 py-3 rounded-full font-bold text-lg tracking-wider shadow-[0_0_20px_rgba(255,139,83,0.4)]">
              Daftar Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
