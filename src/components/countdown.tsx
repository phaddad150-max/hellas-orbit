"use client";

import { useEffect, useState } from "react";
import { LAUNCH_WINDOW } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { pad } from "@/lib/utils";

function diff() {
  const ms = Math.max(0, LAUNCH_WINDOW.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const { lang } = useI18n();
  const [t, setT] = useState(diff);

  useEffect(() => {
    const id = window.setInterval(() => setT(diff()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells = [
    { n: t.days, l: ui.days[lang] },
    { n: t.hours, l: ui.hours[lang] },
    { n: t.minutes, l: ui.minutes[lang] },
    { n: t.seconds, l: ui.seconds[lang], pulse: true },
  ];

  return (
    <div>
      <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc]">
        <span className="live-dot" aria-hidden />
        {lang === "el" ? "Αντίστροφη μέτρηση · NET" : "Countdown · NET"}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {cells.map((c) => (
          <div
            key={c.l}
            className={`panel countdown-cell rounded-xl px-2 py-3 text-center ${
              c.pulse ? "pulse-gold" : ""
            }`}
          >
            <div className="font-mono text-2xl text-[#f0d78c] md:text-3xl">
              {c.n > 99 ? c.n : pad(c.n)}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b7c0d4]">
              {c.l}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[#b7c0d4]">
        {ui.netNote[lang]}
      </p>
    </div>
  );
}
