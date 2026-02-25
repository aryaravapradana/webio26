'use client';

import { motion } from 'framer-motion';
import { GraduationCap, PartyPopper, Megaphone } from 'lucide-react';

const pillars = [
    {
        icon: GraduationCap,
        title: "Akademik",
        description: "Mewadahi bakat dan minat mahasiswa serta siswa se-Indonesia melalui cabang Web Dev, UI/UX, dan Business Case."
    },
    {
        icon: PartyPopper,
        title: "Festival",
        description: "Nuansa yang fun, rame, dan meriah. Booth Exhibition dan suasana kebersamaan yang membedakan I/O dari lomba lainnya."
    },
    {
        icon: Megaphone,
        title: "Exposure",
        description: "Wajah FTI Untar ke dunia luar. Mempresentasikan siapa kita ke sekolah, industri profesional, dan masyarakat umum."
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
                        <h2 className="font-raela font-bold text-3xl md:text-6xl mb-8 leading-tight text-white">
                            Technology Into Action,<br />
                            Ideas Into Impact.
                        </h2>
                        <p className="text-lg text-white/70 mb-6 leading-relaxed">
                            I/O Festival adalah kompetisi akademik tingkat nasional yang dikemas sebagai perayaan teknologi oleh FTI UNTAR. Bukan cuma cari orang yang jago coding atau desain, tapi mencari inovator sejati yang karyanya berdampak.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Tahun ini peserta wajib memproyeksikan dampak nyata karya mereka melalui <span className="text-white font-semibold">Impact Projection</span> — core metric yang memaksa peserta menjadi problem solver, bukan cuma teknisi.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                            >
                                <div className="flex items-start gap-5">
                                    <pillar.icon className="w-10 h-10 text-neon-blue shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <div>
                                        <h3 className="font-raela font-bold text-xl text-white mb-2">{pillar.title}</h3>
                                        <p className="text-sm text-white/60">{pillar.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
