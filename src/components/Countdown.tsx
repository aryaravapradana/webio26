'use client';

import { useState, useEffect } from 'react';

const OPEN_REG_DATE = new Date("2026-03-15T00:00:00+07:00");
const CLOSE_REG_DATE = new Date("2026-04-30T23:59:59+07:00");

type Phase = 'before_open' | 'wave1' | 'wave2' | 'closed';

function getPhase(now: Date): Phase {
    if (now < OPEN_REG_DATE) return 'before_open';
    if (now <= new Date("2026-04-05T23:59:59+07:00")) return 'wave1';
    if (now <= CLOSE_REG_DATE) return 'wave2';
    return 'closed';
}

function getTargetDate(phase: Phase): Date {
    switch (phase) {
        case 'before_open': return OPEN_REG_DATE;
        case 'wave1': return new Date("2026-04-05T23:59:59+07:00");
        case 'wave2': return CLOSE_REG_DATE;
        case 'closed': return CLOSE_REG_DATE;
    }
}

function getLabel(phase: Phase): string {
    switch (phase) {
        case 'before_open': return 'Pendaftaran dibuka dalam';
        case 'wave1': return 'Early Bird ditutup dalam';
        case 'wave2': return 'Pendaftaran ditutup dalam';
        case 'closed': return 'Pendaftaran telah ditutup';
    }
}

function getSubLabel(phase: Phase): string | null {
    switch (phase) {
        case 'before_open': return '15 Maret 2026';
        case 'wave1': return 'Gelombang 1 · Early Bird Price';
        case 'wave2': return 'Gelombang 2 · Normal Price';
        case 'closed': return null;
    }
}

const calculateTimeLeft = (target: Date) => {
    const difference = +target - +new Date();
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
    const [phase, setPhase] = useState<Phase>(() => getPhase(new Date()));
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(getTargetDate(phase)));

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const currentPhase = getPhase(now);
            setPhase(currentPhase);
            setTimeLeft(calculateTimeLeft(getTargetDate(currentPhase)));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const labels: Record<string, string> = {
        days: 'Hari',
        hours: 'Jam',
        minutes: 'Menit',
        seconds: 'Detik'
    };

    const subLabel = getSubLabel(phase);

    return (
        <div className="border border-white/10 p-8 md:p-10">
            <p className="text-xs tracking-[0.15em] uppercase text-white/30 font-mono mb-2">
                {getLabel(phase)}
            </p>
            {subLabel && (
                <p className="text-xs text-white/20 font-mono mb-8">
                    {subLabel}
                </p>
            )}
            {phase !== 'closed' ? (
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
            ) : (
                <p className="text-white/50 text-lg font-mono">Sampai jumpa tahun depan!</p>
            )}
        </div>
    );
}
