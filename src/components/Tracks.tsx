'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, Palette, Smartphone } from 'lucide-react';

const tracks = [
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Desain antarmuka dan pengalaman pengguna yang inovatif.',
        color: 'from-neon-purple to-purple-600',
    },
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Pengembangan aplikasi web yang kreatif dan fungsional.',
        color: 'from-neon-blue to-blue-600',
    },
    {
        icon: Smartphone,
        title: 'Android Development',
        description: 'Pengembangan aplikasi Android yang inovatif dan berkualitas.',
        color: 'from-neon-orange to-orange-600',
    },
    {
        icon: Briefcase,
        title: 'Business Plan',
        description: 'Rencana bisnis teknologi yang inovatif dan berdampak.',
        color: 'from-neon-blue to-cyan-600',
    }
];

export function Tracks() {
    return (
        <section id="tracks" className="py-16 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="font-raela font-bold text-3xl md:text-7xl mb-6">
                        <span className="text-white">JENIS</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-orange">KOMPETISI</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Pilih kategori kompetisi yang sesuai dengan minat dan keahlianmu.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-auto min-h-[350px] md:h-[450px] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,139,83,0.2)]"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="mb-auto transform group-hover:-translate-y-4 transition-transform duration-500">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} p-[1px]`}>
                                        <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                            <track.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-raela font-bold text-3xl text-white mb-4">{track.title}</h3>
                                    <p className="text-white/60 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {track.description}
                                    </p>
                                    <div className="h-1 w-0 bg-gradient-to-r from-white to-transparent mt-8 group-hover:w-full transition-all duration-700" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
