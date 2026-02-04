'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#55D5E7]/20 rounded-full animate-pulse" />
          <div className="absolute inset-0 border-t-4 border-[#FF8B53] rounded-full animate-spin" />
        </div>
        <div className="font-space font-bold text-[#55D5E7] tracking-widest text-sm animate-pulse">
            INITIALIZING SYSTEM...
        </div>
      </div>
    </div>
  );
}
