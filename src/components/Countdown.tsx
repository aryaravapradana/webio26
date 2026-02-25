'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-01") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const labels: Record<string, string> = {
        days: 'Hari',
        hours: 'Jam',
        minutes: 'Menit',
        seconds: 'Detik'
    };

    return (
        <div className="border border-white/10 p-8 md:p-10">
            <p className="text-xs tracking-[0.15em] uppercase text-white/30 font-mono mb-8">
                Pendaftaran ditutup dalam
            </p>
            <div className="grid grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([interval, value]) => (
                    <div key={interval} className="flex flex-col items-center">
                        <span className="font-raela font-black text-4xl md:text-5xl text-white tabular-nums">
                            {value.toString().padStart(2, '0')}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-white/30 mt-2 font-mono">
                            {labels[interval]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
