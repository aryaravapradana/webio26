'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Preloader() {
    const [phase, setPhase] = useState<'logo-in' | 'logo-out' | 'bg-out' | 'done'>('logo-in');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('logo-out'), 400); // 0.4s
        const t2 = setTimeout(() => setPhase('bg-out'), 700);  // 0.7s
        const t3 = setTimeout(() => setPhase('done'), 1000);  // 1s
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    if (phase === 'done') return null;

    return (
        <AnimatePresence>
            {true && (
                <motion.div
                    className="fixed inset-0 z-999 bg-black flex items-center justify-center"
                    animate={{
                        opacity: phase === 'bg-out' ? 0 : 1,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <motion.div
                        animate={{
                            opacity: phase === 'logo-in' ? 1 : 0,
                            scale: phase === 'logo-in' ? 1 : 1.05,
                            y: phase === 'logo-in' ? 0 : -10,
                        }}
                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <Image
                            src="/assets/logo/logo-io.webp"
                            alt="I/O Festival 2026"
                            width={160}
                            height={160}
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
