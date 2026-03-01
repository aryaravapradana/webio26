'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Palette, ArrowRight } from 'lucide-react';

const tracks = [
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Rancang antarmuka dan pengalaman pengguna yang terukur. Desain tersebut harus berguna bagi masyarakat luas.',
        color: 'from-neon-purple to-purple-600',
        accentHex: '#a64dff',
        href: '/kompetisi/ui-ux',
    },
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Bangun sebuah layanan website fungsional. Layanan tersebut harus berhasil mengatasi kendala di dunia nyata.',
        color: 'from-neon-blue to-blue-600',
        accentHex: '#55D5E7',
        href: '/kompetisi/web-dev',
    },
    {
        icon: Briefcase,
        title: 'Business Case',
        description: 'Susun rencana bisnis berbasis teknologi ringkas. Rencana bisnis tersebut wajib mendatangkan pemasukan finansial yang terukur.',
        color: 'from-neon-orange to-orange-600',
        accentHex: '#ff8c42',
        href: '/kompetisi/business-case',
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
                        <span className="text-white">CABANG</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-orange">KOMPETISI</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg mb-3">
                        Pilih satu cabang kompetisi yang sesuai dengan minat Anda. Lima tim terbaik pada setiap cabang akan berebut kejuaraan di laga Grand Final.
                    </p>
                    <p className="text-white/30 text-sm font-mono">
                        Terbuka untuk Mahasiswa, Siswa, dan Umum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={track.href}
                                className="group relative block p-8 md:p-10 transition-all duration-500 overflow-hidden rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                                style={{
                                    background: 'rgba(255, 255, 255, 0)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                }}
                            >
                                {/* Gradient Border Mask */}
                                <div
                                    className="absolute inset-0 rounded-[24px] pointer-events-none group-hover:opacity-100 transition-opacity duration-500 opacity-60"
                                    style={{
                                        padding: '1px',
                                        background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)`,
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude',
                                    }}
                                />
                                {/* Accent glow on hover */}
                                <div
                                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[60px]"
                                    style={{ background: track.accentHex }}
                                />

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${track.color} p-px mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                        <track.icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="font-raela font-bold text-2xl text-white mb-3">{track.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-8">
                                    {track.description}
                                </p>

                                {/* Bottom link indicator */}
                                <div className="flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors text-sm font-mono">
                                    <span>Lihat Detail</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>


                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
