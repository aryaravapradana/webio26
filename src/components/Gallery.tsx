'use client';

import { motion } from 'framer-motion';

const placeholders = [
    "bg-gradient-to-br from-purple-900 to-black",
    "bg-gradient-to-br from-cyan-900 to-black",
    "bg-gradient-to-br from-red-900 to-black",
    "bg-gradient-to-br from-gray-900 to-black",
];

export function Gallery() {
  return (
    <section className="py-20 overflow-hidden bg-black/80">
        <div className="mb-10 text-center">
             <h3 className="font-space font-bold text-2xl text-white/50 uppercase tracking-widest">Previous Highlights</h3>
        </div>
      <div className="w-full max-w-full overflow-hidden relative">
        <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
            {[...Array(8)].map((_, i) => (
                <div 
                    key={i} 
                    className={`w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl flex-shrink-0 ${placeholders[i % 4]} border border-white/10 flex items-center justify-center relative overflow-hidden group`}
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-space font-bold text-white/20 text-4xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        202{i % 5} MEMORY
                    </span>
                </div>
            ))}
             {[...Array(8)].map((_, i) => (
                <div 
                    key={`duplicate-${i}`} 
                    className={`w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl flex-shrink-0 ${placeholders[i % 4]} border border-white/10 flex items-center justify-center relative overflow-hidden group`}
                >
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-space font-bold text-white/20 text-4xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        202{i % 5} MEMORY
                    </span>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
