import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Gallery').then(mod => mod.Gallery));
const About = dynamic(() => import('@/components/About').then(mod => mod.About));
const Tracks = dynamic(() => import('@/components/Tracks').then(mod => mod.Tracks));
const Timeline = dynamic(() => import('@/components/Timeline').then(mod => mod.Timeline));
const Prizes = dynamic(() => import('@/components/Prizes').then(mod => mod.Prizes));
const Sponsors = dynamic(() => import('@/components/Sponsors').then(mod => mod.Sponsors));
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ));
const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact));
const CTA = dynamic(() => import('@/components/CTA').then(mod => mod.CTA));

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-black selection:bg-neon-orange/30 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <div className="relative -mt-20 z-0">
        <Gallery />
      </div>
      <div className="relative -mt-20 z-10">
        <About />
      </div>
      <Tracks />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
