'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

export function Prizes() {
  return (
    <section id="prizes" className="py-16 md:py-32 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-24">
            <h2 className="font-space font-bold text-3xl md:text-7xl text-white mb-4">TOTAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B53] to-[#B664FB]">PRIZES</span></h2>
            <p className="text-white/60 text-xl">Prepare to win big. Recognition + Rewards.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {/* 2nd Place - Cool/Cyan */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 md:p-8 rounded-3xl text-center border-t-4 border-t-[#55D5E7] relative order-2 lg:order-1 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(85,213,231,0.2)]"
            >
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-b from-[#55D5E7] to-[#00a0b0] flex items-center justify-center text-black font-bold shadow-lg">
                    2
                 </div>
                 <div className="mb-6 mt-6 flex justify-center text-[#55D5E7]">
                    <Medal className="w-16 h-16" />
                 </div>
                 <h3 className="text-2xl font-bold font-space text-white mb-2">Runner Up</h3>
                 <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#55D5E7] to-[#00a0b0] mb-4">$3,000</p>
                 <ul className="text-sm text-white/50 space-y-2">
                    <li>+ Silver Trophy</li>
                    <li>+ Mentorship</li>
                 </ul>
            </motion.div>

            {/* 1st Place - Warm/Orange */}
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 rounded-3xl text-center border-t-4 border-t-[#FF8B53] relative order-1 lg:order-2 transform lg:-translate-y-12 bg-white/5 shadow-[0_0_50px_rgba(255,139,83,0.1)] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,139,83,0.4)]"
            >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-[#FF8B53] to-[#d05a2b] flex items-center justify-center text-black font-bold text-xl shadow-lg ring-4 ring-black">
                    1
                 </div>
                 <div className="mb-6 mt-6 flex justify-center text-[#FF8B53]">
                    <Trophy className="w-24 h-24 drop-shadow-[0_0_15px_rgba(255,139,83,0.5)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-space text-white mb-2">Grand Champion</h3>
                 <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FF8B53] to-[#d05a2b] mb-6">$10,000</p>
                 <ul className="text-base text-white/60 space-y-2">
                    <li>+ Gold Trophy</li>
                    <li>+ Investor Meeting</li>
                    <li>+ Tech Bundle</li>
                 </ul>
            </motion.div>

            {/* 3rd Place - Deep/Purple */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6 md:p-8 rounded-3xl text-center border-t-4 border-t-[#B664FB] relative order-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(182,100,251,0.2)]"
            >
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-b from-[#B664FB] to-[#8000cc] flex items-center justify-center text-white font-bold shadow-lg">
                    3
                 </div>
                 <div className="mb-6 mt-6 flex justify-center text-[#B664FB]">
                    <Award className="w-16 h-16" />
                 </div>
                 <h3 className="text-2xl font-bold font-space text-white mb-2">2nd Runner Up</h3>
                 <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#B664FB] to-[#8000cc] mb-4">$1,500</p>
                 <ul className="text-sm text-white/50 space-y-2">
                    <li>+ Bronze Trophy</li>
                    <li>+ Swag Kit</li>
                 </ul>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
