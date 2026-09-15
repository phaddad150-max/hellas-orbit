"use client";

import { useEffect, useState } from "react";
import { IssTracker } from "@/components/iss-tracker";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

const NASA_ISS =
  "https://www.youtube.com/embed/awQzjn72bI0?mute=1&playsinline=1&rel=0";

export function LiveIss({ preview = false }: { preview?: boolean }) {
  const { lang } = useI18n();
  const [play, setPlay] = useState(false);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const cell = nav.connection;
    const save = Boolean(cell?.saveData) || cell?.effectiveType === "cellular";
    if (wide && !save && !preview) setPlay(true);
  }, [preview]);

  if (!ok) {
    return (
      <div>
        <p className="mb-2 text-xs text-[#8b95ab]">{ui.issTrack[lang]}</p>
        <IssTracker />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
      <p className="flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-[#7dd3fc]">
        <span className="live-dot" aria-hidden />
        {ui.liveLabel[lang]}
      </p>
      <div className="relative aspect-video bg-black">
        {play ? (
          <iframe
            title="NASA ISS"
            src={`${NASA_ISS}&autoplay=1`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            onError={() => setOk(false)}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex min-h-11 items-center justify-center bg-[#071018] text-sm text-[#f0d78c]"
          >
            {ui.liveTap[lang]}
          </button>
        )}
      </div>
    </div>
  );
}
