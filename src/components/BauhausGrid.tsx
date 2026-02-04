'use client';

import { motion } from 'framer-motion';

export function BauhausGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-90 pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-6 grid-rows-6 gap-2 md:gap-4 p-4 transform -skew-y-2 origin-center">
        
        {/* Large Purple Arch - Solid & Bright */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1 md:col-span-2 row-span-2 rounded-tl-full bg-[#B664FB] border-2 border-[#fff]/20 shadow-[0_0_50px_rgba(182,100,251,0.6)] relative overflow-hidden group"
        >
             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </motion.div>

        {/* Red Circle - Pulsing */}
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-1 row-span-1 rounded-full bg-[#FF8B53] border-4 border-black shadow-[0_0_40px_rgba(255,139,83,0.8)] relative z-10"
        >
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-white mix-blend-overlay" 
            />
        </motion.div>

        {/* Cyan Rectangle - Glass with Texture */}
        <div className="col-span-1 md:col-span-2 row-span-1 bg-[#55D5E7]/40 backdrop-blur-xl border border-[#55D5E7]/50 relative overflow-hidden">
             <div className="absolute inset-0 opacity-30" 
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #000000 25%, #000000 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }} 
             />
        </div>

        {/* Empty Space */}
        <div className="md:col-span-1" />

        {/* Vertical Strip - Neon Beam */}
        <div className="hidden md:block col-span-1 row-span-3 bg-gradient-to-b from-white to-[#55D5E7] opacity-80 mix-blend-overlay blur-[2px]" />

        {/* Quarter Circle Bottom Right - Rotating */}
        <motion.div 
             animate={{ rotate: 90 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="hidden md:block col-span-1 row-span-1 rounded-br-full bg-[#55D5E7] border-t-4 border-l-4 border-black shadow-[0_0_30px_rgba(85,213,231,0.5)]"
        />

        {/* Red Square - Solid Block */}
        <div className="hidden md:flex col-span-1 row-span-2 bg-[#FF8B53] border-2 border-white/20 shadow-[0_0_60px_rgba(255,139,83,0.4)] items-center justify-center">
            <div className="w-1/2 h-1/2 border-2 border-black rounded-full" />
        </div>

        {/* Purple Pill - High Gloss */}
        <div className="col-span-1 md:col-span-2 row-span-1 rounded-full border border-white/40 bg-gradient-to-r from-[#B664FB]/80 to-[#B664FB]/20 backdrop-blur-lg" />

        {/* Grid Lines Pattern */}
        <div className="hidden md:block col-span-1 row-span-1 bg-black/50 border border-white/10" 
             style={{ backgroundImage: 'radial-gradient(circle, #FF8B53 2px, transparent 2px)', backgroundSize: '20px 20px' }} 
        />
        
         {/* Large Cyan Arch Inverse - Heavy Overlay */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="md:col-start-4 col-span-1 md:col-span-2 row-span-2 rounded-tr-full bg-[#55D5E7]/10 border-2 border-[#55D5E7] backdrop-blur-md relative"
        >
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#55D5E7]/20" />
        </motion.div>

        {/* Wireframe Box - White Hot */}
        <div className="hidden md:block col-span-1 row-span-1 border-4 border-white opacity-50 skew-x-12" />
        
         {/* Solid Red Block - Interactivity */}
         <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="hidden md:block col-span-1 row-span-1 bg-[#FF8B53] border-2 border-white shadow-[0_0_40px_rgba(255,139,83,0.6)]"
         />

      </div>
    </div>
  );
}
