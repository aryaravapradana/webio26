'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import type { CompetitionData } from '@/lib/competitions';

export function CompetitionPage({ data }: { data: CompetitionData }) {
    const Icon = data.icon;

    return (
        <div className="pt-28 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Back */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Link href="/#tracks" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm font-mono transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${data.color} p-px`}>
                            <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-raela font-black text-4xl md:text-5xl text-white">{data.title}</h1>
                        </div>
                    </div>
                    <p className="text-white/40 text-lg font-mono italic">{data.tagline}</p>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <p className="text-white/70 text-lg leading-relaxed">{data.description}</p>
                </motion.div>
                {/* Horizontal Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-white/30 mb-8">Timeline</h2>
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute top-3 left-0 right-0 h-px bg-white/10" />

                        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8">
                            {[
                                { date: '15 Mar', label: 'Open Reg' },
                                { date: '30 Apr', label: 'Close Reg' },
                                { date: '10 Mei', label: 'Deadline Karya' },
                                { date: '20 Mei', label: 'Pengumuman' },
                                { date: '4 Jun', label: 'Grand Final' },
                                { date: '5 Jun', label: 'Awarding' },
                            ].map((item, i) => (
                                <div key={i} className="relative flex flex-col items-center text-center">
                                    <div
                                        className="w-2.5 h-2.5 rounded-full border-2 mb-3 shrink-0"
                                        style={{
                                            borderColor: data.accentHex,
                                            backgroundColor: i === 0 || i === 4 ? data.accentHex : 'transparent',
                                        }}
                                    />
                                    <span className="text-white font-mono text-xs font-bold">{item.date}</span>
                                    <span className="text-white/30 text-[10px] mt-0.5">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Rulebook Download */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <a
                        href={data.rulebookUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-white/10 px-8 py-4 hover:bg-white/5 transition-colors group"
                    >
                        <Download className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                        <div>
                            <span className="text-white font-bold block">Download Rulebook</span>
                            <span className="text-white/30 text-xs font-mono">PDF · Panduan lengkap kompetisi</span>
                        </div>
                    </a>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center border-t border-white/10 pt-12"
                >
                    <h3 className="font-raela font-bold text-2xl text-white mb-4">Siap Berkompetisi?</h3>
                    <p className="text-white/50 mb-8">Daftarkan tim kamu dan buktikan skill di kancah nasional.</p>
                    <Link
                        href="/kelengkapan"
                        className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-10 py-4 hover:bg-white/90 transition-colors"
                    >
                        Register <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
