'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Countdown } from '@/components/Countdown';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Main Content - Glass Monolith */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 backdrop-blur-xl bg-[#0A0A0A]/80 border border-white/10 rounded-[2.5rem] p-6 md:p-14 shadow-2xl overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-orange"></span>
              </span>
              <span className="text-sm font-semibold tracking-widest text-white/90 font-mono">MUSIM 2026 DIBUKA</span>
            </div>

            <h1 className="font-raela font-black text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] py-2 break-words">
              <span className="block text-white drop-shadow-lg">I/O</span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(182,100,255,0.4)]">
                FESTIVAL
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              <span className="italic block mb-4 text-neon-blue font-serif text-2xl">"Technology into Action, Ideas into Impact"</span>
              Kompetisi teknologi terbesar untuk mahasiswa dan siswa SMA/SMK. Ikuti <span className="text-white font-bold underline decoration-neon-orange decoration-4 underline-offset-4">4 kategori</span> kompetisi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <button
                aria-label="Enter the competition arena"
                className="group relative w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-neon-orange text-white font-bold font-raela text-lg sm:text-xl tracking-wider rounded-none clip-path-polygon hover:bg-[#d00060] transition-all duration-300 shadow-[0_0_20px_rgba(255,139,83,0.4)] hover:shadow-[0_0_40px_rgba(255,139,83,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  MASUK ARENA <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                aria-label="View competition challenges"
                className="px-10 py-5 border-2 border-white/20 hover:border-neon-blue bg-black/40 text-white font-bold text-lg rounded-none hover:bg-neon-blue/10 transition-all duration-300 tracking-wider"
              >
                LIHAT KOMPETISI
              </button>
            </div>

            {/* Social Proof Badge */}
            <div className="flex items-center justify-center gap-2 pt-2 animate-fade-in opacity-80">
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3].map(i => (
                  <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-white/20 backdrop-blur-sm" />
                ))}
              </div>
              <span className="text-sm font-raela text-white/60">
                <span className="text-neon-blue font-bold">500+</span> Inovator Terdaftar
              </span>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6">
              <Countdown />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll untuk Jelajahi</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
