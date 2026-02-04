'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Countdown } from '@/components/Countdown';
import { BauhausGrid } from '@/components/BauhausGrid';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/Scene3D').then(mod => mod.Scene3D), { ssr: false });

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      {/* <Scene3D /> */}

      {/* Modern Bauhaus Pattern */}
      <BauhausGrid />
      
      {/* Background Gradients and Grid (Fallback/Overlay) */}
        <div className="absolute inset-0 bg-black -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-[#B664FB]/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-[#55D5E7]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] bg-[#FF8B53]/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Grid Floor */}
        <div 
            className="absolute inset-0 opacity-30"
            style={{
                backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
            }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Floating Shapes Decor */}
        <motion.div 
            initial={{ opacity: 0, rotate: -20, x: -100 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-0 hidden lg:block w-32 h-32 border border-white/10 rounded-xl backdrop-blur-sm"
        />
         <motion.div 
            initial={{ opacity: 0, rotate: 20, x: 100 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute right-0 bottom-20 hidden lg:block w-24 h-24 border border-[#FF8B53]/30 rounded-full backdrop-blur-sm"
        />

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
             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8B53] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8B53]"></span>
                </span>
                <span className="text-sm font-semibold tracking-widest text-white/90 font-mono">SEASON 2026 OPEN</span>
             </div>

              <h1 className="font-space font-black text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] py-2 break-words">
                <span className="block text-white drop-shadow-lg">I/O</span>
                <span className="block bg-gradient-to-r from-[#55D5E7] via-[#B664FB] to-[#FF8B53] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(182,100,255,0.4)]">
                  FESTIVAL
                </span>
              </h1>

              <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                <span className="italic block mb-4 text-[#55D5E7] font-serif text-2xl">"Technology into Action, Ideas into Impact"</span>
                The ultimate futuristic tech competition. Disrupt across <span className="text-white font-bold underline decoration-[#FF8B53] decoration-4 underline-offset-4">4 dimensions</span> of technology.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                <button 
                  aria-label="Enter the competition arena"
                  className="group relative w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-[#FF8B53] text-white font-bold font-space text-lg sm:text-xl tracking-wider rounded-none clip-path-polygon hover:bg-[#d00060] transition-all duration-300 shadow-[0_0_20px_rgba(255,139,83,0.4)] hover:shadow-[0_0_40px_rgba(255,139,83,0.6)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    ENTER THE ARENA <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                    aria-label="View competition challenges"
                    className="px-10 py-5 border-2 border-white/20 hover:border-[#55D5E7] bg-black/20 backdrop-blur-md text-white font-bold text-lg rounded-none hover:bg-[#55D5E7]/10 transition-all duration-300 tracking-wider"
                >
                    VIEW CHALLENGES
                </button>
              </div>

              {/* Social Proof Badge */}
              <div className="flex items-center justify-center gap-2 pt-2 animate-fade-in opacity-80">
                 <div className="flex -space-x-2 overflow-hidden">
                    {[1,2,3].map(i => (
                        <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-white/20 backdrop-blur-sm" />
                    ))}
                 </div>
                 <span className="text-sm font-space text-white/60">
                    <span className="text-[#55D5E7] font-bold">500+</span> Innovators Registered
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
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
       </motion.div>
    </section>
  );
}
