import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';

const raela = localFont({
  src: [
    { path: './fonts/raelagrotesque/RaelaGrotesque-Thin-BF67b427f305180.ttf', weight: '100', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-ExtraLight-BF67b427f310b80.ttf', weight: '200', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-Light-BF67b427f312600.ttf', weight: '300', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-Regular-BF67b427f3144cd.ttf', weight: '400', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-Medium-BF67b427f311230.ttf', weight: '500', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-SemiBold-BF67b427f313d28.ttf', weight: '600', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-Bold-BF67b427f311913.ttf', weight: '700', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-ExtraBold-BF67b427f30ffda.ttf', weight: '800', style: 'normal' },
    { path: './fonts/raelagrotesque/RaelaGrotesque-Black-BF67b427f2c4ada.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-space',
  display: 'swap',
});

const jakarta = localFont({
  src: [
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/plusjakartasans/static/PlusJakartaSans-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-inter', // Mapping to existing variable for seamless replacement
  display: 'swap',
});

import { NoiseOverlay } from '@/components/NoiseOverlay';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: {
    default: 'I/O FESTIVAL 2026 | Technology into Action',
    template: '%s | I/O FESTIVAL 2026',
  },
  description: 'The ultimate futuristic tech competition bringing together visionaries, developers, and creators to redefine the boundaries of what is possible.',
  keywords: ['hackathon', 'tech festival', 'coding competition', 'Indonesia', 'technology', 'innovation', 'Bauhaus', 'cyberpunk'],
  authors: [{ name: 'IO Festival Team' }],
  creator: 'IO Festival Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iofest.com', 
    title: 'I/O FESTIVAL 2026 | Technology into Action',
    description: 'Join the ultimate futuristic tech competition. Web Dev, Data Science, and UI/UX Design tracks.',
    siteName: 'I/O FESTIVAL 2026',
    images: [
      {
        url: '/og-image.jpg', // Ideally we'd have this file, but defining the slot is good practice
        width: 1200,
        height: 630,
        alt: 'I/O FESTIVAL 2026 Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I/O FESTIVAL 2026',
    description: 'The ultimate futuristic tech competition. Register now.',
    creator: '@iofestival',
    images: ['/twitter-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents zoom-based horizontal checks
  themeColor: '#0A0A0A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          raela.variable,
          jakarta.variable,
          'bg-black text-white font-sans antialiased overflow-x-hidden selection:bg-[#FF8B53]/30 selection:text-white'
        )}
      >
        <NoiseOverlay />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
