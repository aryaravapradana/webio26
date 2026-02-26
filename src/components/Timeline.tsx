'use client';

import { motion } from 'framer-motion';

const events = [
    {
        date: "15 Mar - 5 Apr 2026",
        title: "Open Registration Gel. 1",
        description: "Pendaftaran Early Bird dibuka.",
        highlight: true,
    },
    {
        date: "6 Apr - 30 Apr 2026",
        title: "Open Registration Gel. 2",
        description: "Pendaftaran harga normal.",
        highlight: true,
    },
    {
        date: "30 April 2026",
        title: "Batas Pengumpulan Karya",
        description: "Batas akhir upload proposal dan karya awal.",
    },
    {
        date: "13 Mei 2026",
        title: "Pengumuman Finalis",
        description: "Top 5 tim per cabang diumumkan via IG, Website, dan WhatsApp.",
    },
    {
        date: "15 Mei 2026",
        title: "Technical Meeting Finalis",
        description: "Briefing teknis online via Zoom untuk para finalis.",
    },
    {
        date: "28 Mei 2026",
        title: "Pengumpulan Materi Final",
        description: "Batas akhir submit file presentasi (PPT/Video).",
    },
    {
        date: "4 Juni 2026",
        title: "Main Event Day 1: Final",
        description: "Presentasi final di Auditorium UNTAR.",
        highlight: true,
    },
    {
        date: "5 Juni 2026",
        title: "Main Event Day 2: Awarding",
        description: "Talkshow, Guest Star, dan Pengumuman Pemenang.",
        highlight: true,
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
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                    {/* Mobile Left Line */}
                    <div className="md:hidden absolute left-4 w-px h-full bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group cursor-pointer hover:scale-[1.01] transition-transform duration-300 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
                                    <h3 className={`font-mono text-sm mb-2 ${event.highlight ? 'text-neon-orange' : 'text-neon-blue'}`}>{event.date}</h3>
                                    <h4 className="text-2xl font-bold font-raela text-white mb-2">{event.title}</h4>
                                    <p className="text-white/60 text-sm">{event.description}</p>
                                </div>

                                {/* Center Dot (Desktop) */}
                                <div className="hidden md:block relative z-10 shrink-0">
                                    <div className={`w-4 h-4 rounded-full ring-4 ring-black ${event.highlight ? 'bg-neon-orange shadow-[0_0_20px_rgba(255,139,83,0.8)]' : 'bg-neon-blue shadow-[0_0_15px_rgba(85,213,231,0.5)]'}`} />
                                </div>

                                {/* Mobile Dot (Absolute Left) */}
                                <div className={`md:hidden absolute left-[13px] w-2.5 h-2.5 rounded-full mt-1.5 ${event.highlight ? 'bg-neon-orange shadow-[0_0_10px_rgba(255,139,83,0.8)]' : 'bg-neon-blue shadow-[0_0_8px_rgba(85,213,231,0.5)]'}`} />

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
