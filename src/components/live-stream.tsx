"use client";

import { useEffect, useState } from "react";
import { streams } from "@/lib/leaders";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

function embedSrc(base: string) {
  const join = base.includes("?") ? "&" : "?";
  return `${base}${join}autoplay=1&mute=1&playsinline=1&rel=0`;
}

export function LiveStream() {
  const { lang } = useI18n();
  const [id, setId] = useState(streams[0].id);
  const [ready, setReady] = useState(false);
  const current = streams.find((s) => s.id === id) ?? streams[0];

  useEffect(() => {
    setReady(false);
  }, [current.id]);

  return (
    <div
      id="live"
      className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_0_0_1px_rgba(125,211,252,0.08)]"
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-3 py-2">
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#7dd3fc]">
          <span className="live-dot" aria-hidden />
          {lang === "el" ? "Cinema stage · επίσημα feeds" : "Cinema stage · official feeds"}
        </p>
        <p className="font-mono text-[10px] text-[#8b95ab]">NASA · SpaceX</p>
      </div>
      <div className="flex flex-wrap gap-1 border-b border-[var(--line)] p-2">
        {streams.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setId(s.id)}
            className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-wide ${
              id === s.id
                ? "bg-[#d4af37] text-[#1a1404]"
                : "text-[#d5dceb] hover:bg-white/5"
            }`}
          >
            {s[lang]}
          </button>
        ))}
      </div>
      <div className="relative aspect-video min-h-[min(70vh,640px)] w-full bg-black">
        {!ready ? (
          <div
            className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center gap-2 bg-black/80"
            role="status"
            aria-live="polite"
          >
            <span className="live-dot" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b95ab]">
              {lang === "el" ? "Φόρτωση stream…" : "Loading stream…"}
            </p>
            <p className="max-w-sm px-4 text-center text-[11px] text-[#6b7280]">
              {lang === "el"
                ? "Επίσημο YouTube embed — χωρίς εξωτερικές λίστες συνδέσμων."
                : "Official YouTube embed — no outbound link lists."}
            </p>
          </div>
        ) : null}
        <iframe
          key={current.id}
          title={current[lang]}
          src={embedSrc(current.src)}
          className="absolute inset-0 z-[1] h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setReady(true)}
        />
      </div>
      <p className="px-3 py-2 font-mono text-[10px] text-[#8b95ab]">
        {current.credit} · {ui.streamCredit[lang]}
      </p>
    </div>
  );
}
