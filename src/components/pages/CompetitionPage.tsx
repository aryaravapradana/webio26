'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, Users, Wallet, Trophy, ExternalLink } from 'lucide-react';
import type { CompetitionData } from '@/lib/competitions';
import { StarDust } from '@/components/effects/StarDust';
import Image from 'next/image';
import { Countdown } from '@/components/sections/Countdown';

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
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-[-10%] right-[10%] w-125 h-125"
                    style={{ willChange: 'opacity' }}
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

                    {/* Prominent High-Contrast Countdown Tracker */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.11 }}
                        className="mb-12 w-full"
                    >
                        <Countdown accentColor={data.accentHex} />
                    </motion.div>

                    {/* Info Grid (Summary) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        {/* Kategori & Tim Card */}
                        <div 
                            className="group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 z-10"
                            style={{ 
                                background: 'rgba(20, 20, 20, 0.6)',
                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 group-hover:opacity-50 blur-[40px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <Users className="w-6 h-6 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                <h3 className="text-white/50 text-xs font-mono uppercase tracking-[0.2em] mb-2 group-hover:text-white/80 transition-colors">Kategori & Tim</h3>
                                <p className="text-white font-bold text-base md:text-lg leading-tight">{data.details.categories}</p>
                            </div>
                        </div>

                        {/* Pendaftaran Card */}
                        <div 
                            className="group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 z-10"
                            style={{ 
                                background: 'rgba(20, 20, 20, 0.6)',
                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 group-hover:opacity-50 blur-[40px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <Wallet className="w-6 h-6 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                <h3 className="text-white/50 text-xs font-mono uppercase tracking-[0.2em] mb-2 group-hover:text-white/80 transition-colors">Pendaftaran</h3>
                                <p className="text-white font-bold text-base md:text-lg leading-tight tracking-wide">{data.details.fee}</p>
                            </div>
                        </div>

                        {/* Penghargaan Card */}
                        <div 
                            className="group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 z-10"
                            style={{ 
                                background: 'rgba(20, 20, 20, 0.6)',
                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 group-hover:opacity-50 blur-[40px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <Trophy className="w-6 h-6 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                <h3 className="text-white/50 text-xs font-mono uppercase tracking-[0.2em] mb-2 group-hover:text-white/80 transition-colors">Penghargaan</h3>
                                <p className="text-white font-bold text-base md:text-lg leading-tight">{data.details.prizes}</p>
                            </div>
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

                    {/* Downloads Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16 block"
                    >
                        <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-white/30 mb-6">Kelengkapan Lomba</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Rulebook Card */}
                            <a
                                href={data.rulebookUrl || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col items-start gap-4 p-5 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 group w-full z-10"
                                style={{ 
                                    background: 'rgba(20, 20, 20, 0.6)',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-50 blur-[30px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />

                                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <ExternalLink className="w-5 h-5 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                
                                <div className="relative z-10 flex-1 w-full">
                                    <span className="text-white font-bold block text-base mb-1 group-hover:text-white transition-colors">Rulebook</span>
                                    <span className="text-white/50 text-xs font-mono group-hover:text-white/80 transition-colors block mb-4">Panduan lengkap</span>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 w-fit px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                                        Buka Tautan <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform" />
                                    </div>
                                </div>
                            </a>

                            {/* Pernyataan Orisinalitas Card */}
                            <a
                                href="/assets/documents/Surat_Pernyataan_Orisinalitas.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col items-start gap-4 p-5 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 group w-full z-10"
                                style={{ 
                                    background: 'rgba(20, 20, 20, 0.6)',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-50 blur-[30px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />

                                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <ExternalLink className="w-5 h-5 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                
                                <div className="relative z-10 flex-1 w-full">
                                    <span className="text-white font-bold block text-base mb-1 group-hover:text-white transition-colors">Orisinalitas</span>
                                    <span className="text-white/50 text-xs font-mono group-hover:text-white/80 transition-colors block mb-4">Format surat resmi</span>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 w-fit px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                                        Buka Tautan <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform" />
                                    </div>
                                </div>
                            </a>

                            {/* Twibbon Card */}
                            <a
                                href="/assets/documents/Twibbon.zip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col items-start gap-4 p-5 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 group w-full z-10"
                                style={{ 
                                    background: 'rgba(20, 20, 20, 0.6)',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.accentHex}, transparent)` }} />
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-50 blur-[30px] transition-all duration-700 -translate-y-1/4 translate-x-1/4 group-hover:scale-125" style={{ background: data.accentHex }} />
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${data.accentHex}30, inset 0 0 20px ${data.accentHex}20`, border: `1px solid ${data.accentHex}` }} />

                                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))` }}>
                                    <ExternalLink className="w-5 h-5 text-white" style={{ filter: `drop-shadow(0 0 8px ${data.accentHex})` }} />
                                </div>
                                
                                <div className="relative z-10 flex-1 w-full">
                                    <span className="text-white font-bold block text-base mb-1 group-hover:text-white transition-colors">Twibbon</span>
                                    <span className="text-white/50 text-xs font-mono group-hover:text-white/80 transition-colors block mb-4">Aset sosial media</span>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 w-fit px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                                        Buka Tautan <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        </div>
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
