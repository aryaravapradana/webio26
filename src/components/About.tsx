'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Globe, Cpu } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: "Precision & Skill",
        description: "Test your technical prowess against the best minds in the region."
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "We value creative solutions that break the boundaries of conventional tech."
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Connect with industry leaders, mentors, and fellow visionaries."
    },
    {
        icon: Cpu,
        title: "Future Tech",
        description: "Work with cutting-edge tools and frameworks to build tomorrow."
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
                <h2 className="font-space font-bold text-3xl md:text-6xl mb-8 leading-tight">
                    <span className="text-white">THE</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B664FB] to-[#55D5E7]">NEXT EVOLUTION</span>
                </h2>
                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                    I/O FESTIVAL is not just a competition; it is a proving ground for the creators of tomorrow. 
                    We bring together developers, designers, and data scientists to solve real-world problems 
                    through technology.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                   Founded on the principles of innovation and community, we aim to accelerate the growth of 
                   the tech ecosystem by providing a platform for raw talent to shine.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                    >
                        <feature.icon className="w-10 h-10 text-[#55D5E7] mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-space font-bold text-xl text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-white/60">{feature.description}</p>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}
