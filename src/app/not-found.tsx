import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center">
        <h1 className="font-raela font-black text-9xl text-transparent bg-clip-text bg-gradient-to-r from-neon-orange via-neon-purple to-neon-blue mb-4">
          404
        </h1>
        <h2 className="font-raela font-bold text-2xl md:text-4xl text-white mb-8">
          SECTOR NOT FOUND
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-12 font-sans">
          The coordinates you requested do not exist in this dimension. Return to base immediately.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-white/5 border border-white/20 hover:border-neon-blue hover:text-neon-blue transition-all duration-300 font-raela font-bold rounded-lg uppercase tracking-wider inline-block"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
