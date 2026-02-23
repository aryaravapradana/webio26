'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Map, MapMarker, MarkerContent, MarkerTooltip, MarkerPopup, MapControls } from '@/components/ui/map';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:iobemftiuntar@gmail.com?subject=${encodeURIComponent(
            subject || 'Pesan dari Website I/O Festival'
        )}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-24 relative bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-raela font-bold text-3xl md:text-5xl text-white mb-4 uppercase tracking-widest">
                        KEEP IN <span className="text-neon-orange">TOUCH</span>
                    </h2>
                    <p className="text-white/60 font-sans">Have questions? We're here to help you gear up.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="font-raela font-bold text-2xl text-white">Contact Information</h3>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 border border-white/10 shrink-0">
                                    <Mail className="w-5 h-5 text-neon-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-raela">Email</h4>
                                    <p className="text-white/60 text-sm">iobemftiuntar@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 border border-white/10 shrink-0">
                                    <MapPin className="w-5 h-5 text-neon-purple" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-raela">Location</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Universitas Tarumanagara<br />
                                        Jl. Letjen S. Parman No.1, RT.6/RW.16, Tomang<br />
                                        Jakarta Barat 11440
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 border border-white/10 shrink-0">
                                    <Phone className="w-5 h-5 text-neon-orange" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-raela">Line Official</h4>
                                    <p className="text-white/60 text-sm">@iofestival</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-64 border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-neon-blue/10 pointer-events-none mix-blend-overlay z-10" />
                            <Map center={[106.7888, -6.1678]} zoom={16} pitch={45}>
                                <MapControls position="bottom-right" showZoom />
                                <MapMarker longitude={106.7888} latitude={-6.1678}>
                                    <MarkerContent className="group z-10">
                                        <div className="size-8 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,139,83,0.8)] relative group shrink-0 cursor-pointer flex items-center justify-center bg-neon-orange text-black transition-transform group-hover:scale-110">
                                            <span className="animate-ping absolute inset-0 -m-1 rounded-full bg-neon-orange opacity-40"></span>
                                            <MapPin className="h-5 w-5 stroke-[2.5px] relative z-10" />
                                        </div>
                                    </MarkerContent>
                                    <MarkerTooltip className="bg-black/90 border border-white/10 text-white text-xs px-2 py-1 pointer-events-none rounded shadow-md z-50">
                                        Universitas Tarumanagara
                                    </MarkerTooltip>
                                    <MarkerPopup className="bg-black border border-neon-orange/20 backdrop-blur-md p-4 w-64 rounded-xl shadow-[0_0_20px_rgba(255,139,83,0.15)] text-left z-50">
                                        <div className="space-y-2">
                                            <p className="font-raela font-bold text-white text-lg leading-tight uppercase tracking-wide">Universitas Tarumanagara</p>
                                            <p className="text-xs text-white/60 font-sans leading-relaxed">
                                                Kampus 1, Jl. Letjen S. Parman No.1, Jakarta Barat
                                            </p>
                                        </div>
                                    </MarkerPopup>
                                </MapMarker>
                            </Map>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-raela font-bold text-white/80 uppercase tracking-wider">Nama Lengkap</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-raela font-bold text-white/80 uppercase tracking-wider">Alamat Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-raela font-bold text-white/80 uppercase tracking-wider">Subjek</label>
                                <input
                                    id="subject"
                                    type="text"
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                                    placeholder="Pertanyaan seputar kompetisi"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-raela font-bold text-white/80 uppercase tracking-wider">Pesan</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-neon-orange text-white font-raela font-bold text-lg px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                KIRIM PESAN
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
