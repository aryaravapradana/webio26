'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, Palette } from 'lucide-react';

const tracks = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Build the digital future with scalable, modern web applications.',
    color: 'from-[#55D5E7] to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Business Case',
    description: 'Solve real-world challenges with strategic innovative solutions.',
    color: 'from-[#FF8B53] to-red-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Craft intuitive and visually stunning user experiences.',
    color: 'from-[#B664FB] to-purple-600',
  }
];

export function Tracks() {
  return (
    <section id="tracks" className="py-16 md:py-32 relative bg-black/50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#B664FB]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-20"
            >
                <h2 className="font-space font-bold text-3xl md:text-7xl mb-6">
                    <span className="text-white">COMPETITION</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55D5E7] to-[#FF8B53]">TRACKS</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    Three arenas. One goal. Choose where you will make your impact.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-auto min-h-[350px] md:h-[450px] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,139,83,0.2)]"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="mb-auto transform group-hover:-translate-y-4 transition-transform duration-500">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} p-[1px]`}>
                                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                        <track.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-space font-bold text-3xl text-white mb-4">{track.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {track.description}
                                </p>
                                <div className="h-1 w-0 bg-gradient-to-r from-white to-transparent mt-8 group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
