'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CompetitionPage } from '@/components/CompetitionPage';
import { getCompetition } from '@/lib/competitions';
import { notFound } from 'next/navigation';

export default function WebDevPage() {
    const data = getCompetition('web-dev');
    if (!data) notFound();

    return (
        <main className="min-h-screen bg-black selection:bg-neon-orange/30 overflow-x-hidden w-full">
            <Navbar />
            <CompetitionPage data={data} />
            <Footer />
        </main>
    );
}
