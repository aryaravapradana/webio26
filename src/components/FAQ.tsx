'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Siapa yang dapat berpartisipasi?",
        answer: "Siswa SMA/SMK/sederajat dan mahasiswa aktif dari perguruan tinggi di seluruh Indonesia dapat berpartisipasi dalam kompetisi I/O FESTIVAL 2026."
    },
    {
        question: "Apa saja cabang kompetisinya?",
        answer: "I/O Festival 2026 memiliki 3 cabang kompetisi: UI/UX Design, Web Development, dan Business Case. Peserta wajib memilih sub-tema: Good Governance & Civic Tech, Circular Economy & Resource Management, atau Human Capital & Future Skills Inclusivity."
    },
    {
        question: "Bagaimana sistem lombanya?",
        answer: "Lomba terdiri dari 2 tahap: Penyisihan (Online) dan Grand Final (Offline di UNTAR). Di penyisihan, peserta mengirimkan Bundle (Proposal dan Link Karya). Hanya 5 tim terbaik per cabang yang lolos ke Grand Final."
    },
    {
        question: "Apa itu Impact Projection?",
        answer: "Impact Projection adalah core metric I/O 2026. Peserta wajib memproyeksikan dampak nyata karya mereka jika digunakan di dunia nyata dengan data konkret. Bobotnya 35% untuk UI/UX dan Web Dev, dan hingga 40% untuk Business Case."
    },
    {
        question: "Berapa anggota yang diperbolehkan dalam satu tim?",
        answer: "Setiap tim terdiri dari 3-5 orang anggota, dengan satu orang sebagai ketua tim. Semua anggota tim harus berasal dari institusi yang sama."
    },
    {
        question: "Apakah boleh mengikuti lebih dari satu cabang?",
        answer: "Ya, peserta diperbolehkan mengikuti lebih dari satu cabang kompetisi, tetapi dengan tim yang berbeda. Satu orang hanya boleh terdaftar dalam satu tim untuk satu cabang."
    },
    {
        question: "Apa saja hadiah untuk para pemenang?",
        answer: "Para pemenang akan mendapatkan hadiah berupa uang tunai, sertifikat, trophy, dan kesempatan magang di perusahaan partner I/O FESTIVAL 2026."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 md:py-32 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="font-raela font-bold text-3xl md:text-5xl text-center mb-12 md:mb-16 text-white">
                    PERTANYAAN <span className="text-neon-blue">UMUM</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-raela font-bold text-lg text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-neon-blue" />
                                ) : (
                                    <Plus className="w-5 h-5 text-white/50" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
