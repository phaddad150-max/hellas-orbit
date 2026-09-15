"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

/** NOAA GOES full-disk — public latest Earth still, refreshed in-page. */
const GOES =
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg";

export function EarthLive() {
  const { lang } = useI18n();
  const [src, setSrc] = useState(`${GOES}?t=${Date.now()}`);

  useEffect(() => {
    const tick = () => setSrc(`${GOES}?t=${Date.now()}`);
    const id = window.setInterval(tick, 90_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
      <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-3 py-2">
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#7dd3fc]">
          <span className="live-dot" aria-hidden />
          {lang === "el" ? "Γη τώρα · NOAA GOES" : "Earth now · NOAA GOES"}
        </p>
        <p className="font-mono text-[10px] text-[#8b95ab]">
          {lang === "el" ? "δωρεάν API / latest.jpg" : "free feed / latest.jpg"}
        </p>
      </div>
      <div className="relative aspect-video bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={lang === "el" ? "Ζωντανή Γη από GOES" : "Live Earth from GOES"}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
