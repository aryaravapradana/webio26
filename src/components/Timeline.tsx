'use client';

import { motion } from 'framer-motion';

const events = [
    {
        date: "1 Maret 2026",
        title: "Penyebaran Informasi",
        description: "Informasi kompetisi mulai disebarkan ke seluruh Indonesia."
    },
    {
        date: "15 Mar - 1 Mei 2026",
        title: "Registrasi & Pengumpulan Karya",
        description: "Periode pendaftaran dan pengumpulan karya tahap awal."
    },
    {
        date: "5 - 12 Mei 2026",
        title: "Penilaian Karya Tahap 1",
        description: "Tim juri melakukan penilaian terhadap karya tahap awal."
    },
    {
        date: "15 Mei 2026",
        title: "Pengumuman Semifinal",
        description: "Pengumuman peserta yang lolos ke tahap semifinal."
    },
    {
        date: "16 - 21 Mei 2026",
        title: "Pengumpulan Karya Semi-final",
        description: "Peserta semifinalis mengumpulkan karya tahap kedua."
    },
    {
        date: "3 Juni 2026",
        title: "Pengumuman Finalis",
        description: "Pengumuman peserta yang lolos ke tahap final."
    },
    {
        date: "12 - 13 Juni 2026",
        title: "Final & Presentasi",
        description: "Presentasi final oleh para finalis di hadapan dewan juri."
    },
    {
        date: "13 Juni 2026",
        title: "Pengumuman Pemenang & Closing",
        description: "Pengumuman pemenang, talkshow, dan penutupan event."
    }
];

export function Timeline() {
    return (
        <section id="timeline" className="py-16 md:py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="font-raela font-bold text-3xl md:text-6xl mb-4 text-white">JADWAL <span className="text-neon-orange">ACARA</span></h2>
                    <p className="text-white/60">Tandai kalendermu. Perjalanan dimulai sekarang.</p>
                </motion.div>

                <div className="relative">
                    {/* Center Line (Hidden on Mobile, Visible on MD) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                    {/* Mobile Left Line */}
                    <div className="md:hidden absolute left-4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group cursor-pointer hover:scale-[1.01] transition-transform duration-300 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
                                    <h3 className="text-neon-blue font-mono text-sm mb-2">{event.date}</h3>
                                    <h4 className="text-2xl font-bold font-raela text-white mb-2">{event.title}</h4>
                                    <p className="text-white/60 text-sm">{event.description}</p>
                                </div>

                                {/* Center Dot (Desktop) */}
                                <div className="hidden md:block relative z-10 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-neon-orange shadow-[0_0_20px_rgba(255,139,83,0.8)] ring-4 ring-black" />
                                </div>

                                {/* Mobile Dot (Absolute Left) */}
                                <div className="md:hidden absolute left-[13px] w-2.5 h-2.5 rounded-full bg-neon-orange shadow-[0_0_10px_rgba(255,139,83,0.8)] mt-1.5" />

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
