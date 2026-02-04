import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Gallery').then(mod => mod.Gallery));
const About = dynamic(() => import('@/components/About').then(mod => mod.About));
const Tracks = dynamic(() => import('@/components/Tracks').then(mod => mod.Tracks));
const Timeline = dynamic(() => import('@/components/Timeline').then(mod => mod.Timeline));
const Prizes = dynamic(() => import('@/components/Prizes').then(mod => mod.Prizes));
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ));

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#FF8B53]/30 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <FAQ />
      <Footer />
    </main>
  );
}
