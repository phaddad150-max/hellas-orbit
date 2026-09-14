"use client";

import { useI18n } from "@/lib/i18n";

export function OrbitGlobe() {
  const { lang } = useI18n();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#3d7ad6, #0b2a5c_42%, #061018_78%)] shadow-[0_0_80px_rgba(26,111,212,0.35)]" />
      <div className="absolute inset-[8%] overflow-hidden rounded-full">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_70%_40%,transparent_30%,rgba(0,0,0,0.55))]" />
        <div className="absolute left-[28%] top-[42%] h-[10%] w-[18%] rounded-full bg-[#d4af37]/70 blur-[1px]" title="Greece" />
        <div className="absolute left-[26%] top-[40%] h-[14%] w-[22%] rounded-[40%] border border-[#f0d78c]/50" />
      </div>
      <div className="orbit-spin absolute inset-0">
        <div className="absolute left-1/2 top-[4%] h-3 w-3 -translate-x-1/2 rounded-sm bg-white shadow-[0_0_12px_#7dd3fc]">
          <span className="sr-only">
            {lang === "el" ? "ISS σε τροχιά" : "ISS in orbit"}
          </span>
        </div>
      </div>
      <div className="orbit-spin-rev absolute inset-[-6%]">
        <div className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/40" />
        <div className="absolute right-[6%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
      </div>
      <div className="pointer-events-none absolute inset-[2%] rounded-full border border-[#7dd3fc]/20" />
      <p className="absolute -bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-[0.3em] text-[#7dd3fc]/80">
        ISS · 51.6° · LEO
      </p>
    </div>
  );
}
