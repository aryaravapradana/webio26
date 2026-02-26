'use client';

import { motion } from 'framer-motion';

const sponsorTiers = [
    {
        tier: 'Gold Sponsors',
        logos: [
            { name: 'Sponsor 1', width: 160 },
            { name: 'Sponsor 2', width: 160 },
            { name: 'Sponsor 3', width: 160 },
        ]
    },
    {
        tier: 'Silver Sponsors',
        logos: [
            { name: 'Sponsor 4', width: 120 },
            { name: 'Sponsor 5', width: 120 },
            { name: 'Sponsor 6', width: 120 },
            { name: 'Sponsor 7', width: 120 },
        ]
    },
    {
        tier: 'Media Partners',
        logos: [
            { name: 'Media 1', width: 100 },
            { name: 'Media 2', width: 100 },
            { name: 'Media 3', width: 100 },
            { name: 'Media 4', width: 100 },
            { name: 'Media 5', width: 100 },
        ]
    }
];

export function Sponsors() {
    return (
        <section className="py-16 md:py-24 relative">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-raela font-bold text-3xl md:text-5xl text-white mb-4">
                        DIDUKUNG <span className="text-white/40">OLEH</span>
                    </h2>
                </motion.div>

                <div className="space-y-16">
                    {sponsorTiers.map((tier, tierIndex) => (
                        <motion.div
                            key={tier.tier}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: tierIndex * 0.1 }}
                        >
                            <p className="text-xs tracking-[0.2em] uppercase text-white/25 font-mono text-center mb-8">
                                {tier.tier}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                                {tier.logos.map((logo, i) => (
                                    <div
                                        key={i}
                                        className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-center px-8 py-6"
                                        style={{ width: logo.width + 40, height: 80 }}
                                    >
                                        <span className="text-white/20 text-xs font-mono">{logo.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
