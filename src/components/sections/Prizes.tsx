'use client';

import { motion } from 'framer-motion';

export function Prizes() {
   return (
      <section id="prizes" className="py-16 md:py-32 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px]" />

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center"
            >
               <h2 className="font-raela font-bold text-3xl md:text-7xl text-white mb-6">TOTAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-purple">HADIAH</span></h2>

               <p className="text-7xl md:text-[10rem] font-black font-raela text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-purple leading-none">
                  Rp 46 Juta
               </p>
            </motion.div>
         </div>
      </section>
   );
}

