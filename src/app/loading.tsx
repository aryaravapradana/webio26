'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-neon-blue/20 rounded-full animate-pulse" />
          <div className="absolute inset-0 border-t-4 border-neon-orange rounded-full animate-spin" />
        </div>
        <div className="font-raela font-bold text-neon-blue tracking-widest text-sm animate-pulse">
          INITIALIZING SYSTEM...
        </div>
      </div>
    </div>
  );
}
