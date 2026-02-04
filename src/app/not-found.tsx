import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B664FB]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#55D5E7]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center">
        <h1 className="font-space font-black text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B53] via-[#B664FB] to-[#55D5E7] mb-4">
          404
        </h1>
        <h2 className="font-space font-bold text-2xl md:text-4xl text-white mb-8">
          SECTOR NOT FOUND
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-12 font-sans">
            The coordinates you requested do not exist in this dimension. Return to base immediately.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-white/5 border border-white/20 hover:border-[#55D5E7] hover:text-[#55D5E7] transition-all duration-300 font-space font-bold rounded-lg uppercase tracking-wider inline-block"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
