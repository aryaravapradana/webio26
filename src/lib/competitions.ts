import { Palette, Code2, Briefcase, type LucideIcon } from 'lucide-react';

export interface CompetitionData {
    slug: string;
    title: string;
    shortTitle: string;
    icon: LucideIcon;
    color: string;
    accentHex: string;
    badge?: string;
    tagline: string;
    description: string;
    rulebookUrl?: string;
}

export const competitions: CompetitionData[] = [
    {
        slug: 'ui-ux',
        title: 'UI/UX Design',
        shortTitle: 'UI/UX',
        icon: Palette,
        color: 'from-neon-purple to-purple-600',
        accentHex: '#a64dff',
        badge: 'Popular',
        tagline: 'Design interfaces that solve real problems.',
        description:
            'Cabang UI/UX Design menantang peserta untuk merancang antarmuka dan pengalaman pengguna yang tidak hanya estetis, tetapi juga berdampak nyata bagi masyarakat. Peserta akan memilih salah satu sub-tema dan merancang solusi digital yang inovatif.',
        rulebookUrl: '#',
    },
    {
        slug: 'web-dev',
        title: 'Web Development',
        shortTitle: 'Web Dev',
        icon: Code2,
        color: 'from-neon-blue to-blue-600',
        accentHex: '#55D5E7',
        tagline: 'Build web solutions that create real impact.',
        description:
            'Cabang Web Development menantang peserta untuk membangun aplikasi web yang fungsional, kreatif, dan berdampak. Bukan hanya soal coding, tapi bagaimana teknologi web bisa menyelesaikan masalah nyata.',
        rulebookUrl: '#',
    },
    {
        slug: 'business-case',
        title: 'Business Case',
        shortTitle: 'Business Case',
        icon: Briefcase,
        color: 'from-neon-orange to-orange-600',
        accentHex: '#ff8c42',
        badge: 'New',
        tagline: 'Innovate business solutions with real-world impact.',
        description:
            'Cabang Business Case menantang peserta untuk menyusun rencana bisnis teknologi yang inovatif dan berdampak nyata. Peserta harus membuktikan kelayakan bisnis dan potensi dampak sosial dari solusi mereka.',
        rulebookUrl: '#',
    },
];

export function getCompetition(slug: string): CompetitionData | undefined {
    return competitions.find((c) => c.slug === slug);
}
