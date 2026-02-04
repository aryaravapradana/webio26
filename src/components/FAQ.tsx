'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Who can participate?",
        answer: "The competition is open to all students and professionals. You can join individually or as a team of up to 4 members."
    },
    {
        question: "Is there a registration fee?",
        answer: "No, participation in I/O FESTIVAL 2026 is completely free of charge. We believe in accessible innovation for everyone."
    },
    {
        question: "Can I join multiple tracks?",
        answer: "Teams must select one primary track to compete in. However, you can attend workshops and keynotes covering all topics."
    },
    {
        question: "What is the judging criteria?",
        answer: "Projects are judged on Innovation (30%), Technical complexity (30%), Design/UX (20%), and Presentation (20%)."
    },
    {
        question: "Will there be mentorship?",
        answer: "Yes! We have industry experts from top tech companies available during the hackathon phase to guide you."
    }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-space font-bold text-3xl md:text-5xl text-center mb-12 md:mb-16 text-white">
            OFTEN ASKED <span className="text-[#55D5E7]">QUESTIONS</span>
        </h2>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="font-space font-bold text-lg text-white">{faq.question}</span>
                        {openIndex === index ? (
                            <Minus className="w-5 h-5 text-[#55D5E7]" />
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
