'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, Users, Wallet, Trophy } from 'lucide-react';
import type { CompetitionData } from '@/lib/competitions';
import { StarDust } from '@/components/effects/StarDust';
import Image from 'next/image';

export function CompetitionPage({ data }: { data: CompetitionData }) {
    const Icon = data.icon;

    return (
        <>
            <StarDust />

            {/* Floating 3D Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-20 -right-20 w-100 h-100 opacity-40 blur-[2px]"
                >
                    <Image
                        src="/assets/element/ELEMEN 3.png"
                        alt=""
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute top-1/2 -left-32 w-87.5 h-87.5 opacity-30 blur-xs"
                >
                    <Image
                        src="/assets/element/ELEMEN 2.png"
                        alt=""
                        width={350}
                        height={350}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-[-10%] right-[10%] w-125 h-125 mix-blend-screen"
                >
                    <Image
                        src="/assets/element/ELEMEN FLARE 1.png"
                        alt=""
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </motion.div>
            </div>

            <div className="pt-28 pb-20 px-4 relative z-10">
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

                    {/* Info Grid (Summary) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
                    >
                        <div className="p-5 backdrop-blur-xl bg-white/2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:bg-white/4 transition-all duration-300">
                            <Users className="w-5 h-5 text-white/50 mb-3" />
                            <h3 className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Kategori & Tim</h3>
                            <p className="text-white font-bold text-sm">{data.details.categories}</p>
                        </div>
                        <div className="p-5 backdrop-blur-xl bg-white/2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:bg-white/4 transition-all duration-300">
                            <Wallet className="w-5 h-5 text-white/50 mb-3" />
                            <h3 className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Pendaftaran</h3>
                            <p className="text-white font-bold text-sm tracking-wide">{data.details.fee}</p>
                        </div>
                        <div className="p-5 backdrop-blur-xl bg-white/2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:bg-white/4 transition-all duration-300">
                            <Trophy className="w-5 h-5 text-white/50 mb-3" />
                            <h3 className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Penghargaan</h3>
                            <p className="text-white font-bold text-sm">{data.details.prizes}</p>
                        </div>
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
                                    { date: '15 Mar', label: 'Pendaftaran' },
                                    { date: '30 Apr', label: 'Batas Karya' },
                                    { date: '13 Mei', label: 'Pengumuman' },
                                    { date: '15 Mei', label: 'Pengarahan' },
                                    { date: '4 Jun', label: 'Final' },
                                    { date: '5 Jun', label: 'Penghargaan' },
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
                        className="mb-16 block"
                    >
                        <a
                            href={data.rulebookUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/2 hover:bg-white/6 border border-white/10 px-8 py-4 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 group w-full sm:w-auto"
                        >
                            <Download className="w-5 h-5 text-white/50 group-hover:text-white transition-colors shrink-0" />
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
                        <p className="text-white/50 mb-8">Daftarkan tim Anda hari ini. Tunjukkan kemampuan Anda pada tingkat nasional.</p>
                        <Link
                            href="/kelengkapan"
                            className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-10 py-4 hover:bg-white/90 transition-colors uppercase tracking-widest"
                        >
                            DAFTAR <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
