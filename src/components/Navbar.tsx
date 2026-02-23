'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Tentang', href: '#about' },
  { name: 'Kompetisi', href: '#tracks' },
  { name: 'Jadwal', href: '#timeline' },
  { name: 'Hadiah', href: '#prizes' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[60] flex justify-center pt-6 px-4 pointer-events-none"
      >
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto bg-black/20 w-full max-w-7xl md:w-auto md:justify-center gap-8 border border-white/10 backdrop-blur-md">
          <Link href="/" aria-label="I/O Festival Home" className="flex items-center gap-2 font-raela font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <Image
              src="/assets/logo/logo io transparant.png"
              alt="I/O Festival Logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-bold text-sm tracking-tight hover:bg-neon-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,139,83,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
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
