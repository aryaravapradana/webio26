import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="border border-white/10 bg-white/2 p-8 md:p-16 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-orange" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-orange" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-orange" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-orange" />

                    <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <h2 className="font-raela font-black text-4xl md:text-6xl text-white mb-6 tracking-tighter uppercase relative z-10">
                        Siap Berkompetisi?
                    </h2>

                    <p className="text-white/70 text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto relative z-10">
                        Daftarkan tim Anda sekarang dan raih kesempatan memenangkan hadiah total <span className="text-neon-orange font-bold font-raela tracking-wider">Rp 46 Juta</span>, serta buktikan skill kalian di kancah nasional.
                    </p>

                    <Link
                        href="#"
                        className="inline-flex items-center gap-3 bg-white text-black font-raela font-bold text-lg px-10 py-4 hover:bg-neon-orange hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,139,83,0.3)] hover:shadow-[0_0_30px_rgba(255,139,83,0.6)] relative z-10 uppercase tracking-widest"
                    >
                        DAFTAR SEKARANG
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
