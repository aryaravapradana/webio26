'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Countdown } from '@/components/Countdown';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left - Title & CTA */}
          <div className="lg:col-span-7 space-y-6">

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-raela font-black text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter leading-[0.85]"
            >
              <span className="block text-white">I/O</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a64dff 0%, #ffffff 25%, #ff8c42 50%, #55D5E7 75%, #ffffff 100%)'
                }}
              >
                FESTIVAL
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-white/50 text-lg md:text-xl leading-relaxed max-w-md"
            >
              Kompetisi teknologi tingkat nasional yang dikemas sebagai perayaan teknologi oleh FTI UNTAR. 3 cabang kompetisi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2"
            >
              <button className="group px-8 py-4 bg-white text-black font-bold text-lg tracking-wide hover:bg-white/90 transition-colors">
                <span className="flex items-center gap-3">
                  Daftar Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-bold text-lg tracking-wide transition-colors">
                Lihat Kompetisi
              </button>
            </motion.div>
          </div>

          {/* Right - Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <Countdown />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
