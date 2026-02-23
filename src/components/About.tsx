'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Globe, Cpu } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: "Kompetisi",
        description: "Uji kemampuan teknismu melawan talenta terbaik dari seluruh Indonesia."
    },
    {
        icon: Zap,
        title: "Inovasi",
        description: "Kami menghargai solusi kreatif yang mendorong batas teknologi konvensional."
    },
    {
        icon: Globe,
        title: "Jaringan",
        description: "Terhubung dengan pemimpin industri, mentor, dan sesama inovator."
    },
    {
        icon: Cpu,
        title: "Teknologi Masa Depan",
        description: "Bekerja dengan tools dan framework terdepan untuk membangun hari esok."
    }
];

export function About() {
    return (
        <section id="about" className="relative py-16 md:py-32 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-raela font-bold text-3xl md:text-6xl mb-8 leading-tight">
                            <span className="text-white">THE</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">NEXT EVOLUTION</span>
                        </h2>
                        <p className="text-lg text-white/70 mb-6 leading-relaxed">
                            I/O FESTIVAL bukan hanya sebuah kompetisi; ini adalah ajang pembuktian bagi para kreator masa depan.
                            Kompetisi teknologi informasi terbesar dan terlengkap untuk mahasiswa dan siswa SMA/SMK se-Indonesia.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Dibangun dengan prinsip inovasi dan komunitas, kami bertujuan untuk mempercepat pertumbuhan
                            ekosistem teknologi dengan menyediakan wadah bagi talenta-talenta muda untuk bersinar.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                            >
                                <feature.icon className="w-10 h-10 text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="font-raela font-bold text-xl text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-white/60">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
