import { Palette, Code2, Briefcase, type LucideIcon } from 'lucide-react';

export interface CompetitionDetails {
    categories: string;
    fee: string;
    prizes: string;
}

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
    details: CompetitionDetails;
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
        tagline: 'Design interfaces that solve problems.',
        description:
            'Peserta UI/UX Design akan merancang antarmuka dan pengalaman pengguna. Desain harus estetis dan bermanfaat bagi masyarakat. Peserta wajib memilih satu sub-tema dan membuat solusi digital.',
        details: {
            categories: 'Mahasiswa / Umum / Siswa (Tim Maks. 3 Orang)',
            fee: 'Rp 75.000 (Early) / Rp 90.000 (Normal)',
            prizes: 'Uang Tunai & E-Sertifikat',
        },
        rulebookUrl: '#',
    },
    {
        slug: 'web-dev',
        title: 'Web Development',
        shortTitle: 'Web Dev',
        icon: Code2,
        color: 'from-neon-blue to-blue-600',
        accentHex: '#55D5E7',
        tagline: 'Build web applications that solve problems.',
        description:
            'Peserta Web Development akan membangun aplikasi web yang fungsional. Kompetisi ini menguji kemampuan pemrograman dan pemecahan masalah. Aplikasi harus mampu mengatasi kendala di dunia nyata.',
        details: {
            categories: 'Mahasiswa / Umum / Siswa (Tim Maks. 3 Orang)',
            fee: 'Rp 75.000 (Early) / Rp 90.000 (Normal)',
            prizes: 'Uang Tunai & E-Sertifikat',
        },
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
        tagline: 'Create business plans with clear potential.',
        description:
            'Peserta Business Case akan menyusun rencana bisnis berbasis teknologi. Solusi peserta harus memiliki dampak sosial. Peserta wajib membuktikan kelayakan finansial dari desain bisnis tersebut.',
        details: {
            categories: 'Mahasiswa (Tim Maks. 3 Orang)',
            fee: 'Rp 75.000 (Early) / Rp 90.000 (Normal)',
            prizes: 'Uang Tunai & E-Sertifikat',
        },
        rulebookUrl: '#',
    },
];

export function getCompetition(slug: string): CompetitionData | undefined {
    return competitions.find((c) => c.slug === slug);
}
