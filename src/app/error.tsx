'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="glass-card p-12 rounded-2xl border border-white/10 text-center max-w-lg w-full">
        <h2 className="font-space font-bold text-4xl text-[#FF8B53] mb-4">SYSTEM MALFUNCTION</h2>
        <p className="text-white/60 mb-8 font-sans">
          A critical error has occurred in the neural link. Our engineers have been notified.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-[#55D5E7]/10 border border-[#55D5E7] text-[#55D5E7] hover:bg-[#55D5E7] hover:text-black transition-all duration-300 font-space font-bold rounded-lg uppercase tracking-wider"
        >
          Re-initialize Link
        </button>
      </div>
    </div>
  );
}
