'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-01") - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

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

    return (
        <div className="w-full flex justify-center py-10 z-20 relative">
            <div className="glass-card px-8 py-6 rounded-3xl flex flex-wrap justify-center items-center bg-black/60 border-white/5">
                {Object.entries(timeLeft).map(([interval, value]) => (
                    <div key={interval} className="flex flex-col items-center mx-4 md:mx-8">
                        <span className="font-raela font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tabular-nums w-16 md:w-32 text-center inline-block">
                            {value.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm uppercase tracking-widest text-neon-orange mt-2 font-mono">
                            {interval}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

