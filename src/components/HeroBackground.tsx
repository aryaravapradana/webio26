'use client';

import { motion } from 'framer-motion';
import { BauhausGrid } from '@/components/BauhausGrid';

export function HeroBackground() {
    return (
        <>
            {/* Modern Bauhaus Pattern */}
            <BauhausGrid />

            {/* Background Gradients and Grid (Fallback/Overlay) */}
            <div className="absolute inset-0 bg-black -z-10">
                {/* Static Gradient Orbs — replaces blur(120px) for GPU perf */}
                <div
                    className="absolute top-[-20%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] rounded-full gpu"
                    style={{ background: 'radial-gradient(circle, rgba(182,100,251,0.20) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-[-20%] right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] rounded-full gpu"
                    style={{ background: 'radial-gradient(circle, rgba(85,213,231,0.10) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute top-[40%] left-[30%] w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full gpu"
                    style={{ background: 'radial-gradient(circle, rgba(255,139,83,0.10) 0%, transparent 70%)' }}
                />

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
                className="absolute right-0 bottom-20 hidden lg:block w-24 h-24 border border-neon-orange/30 rounded-full backdrop-blur-sm"
            />
        </>
    );
}
