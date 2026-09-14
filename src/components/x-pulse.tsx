"use client";

import { useEffect, useState } from "react";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

type Pulse = {
  volume: number;
  languages: { el: number; en: number };
  themes: { el: string; en: string }[];
  summary: { el: string; en: string };
  source: "live" | "seed";
};

const SEED: Pulse = {
  volume: 0,
  languages: { el: 0, en: 0 },
  source: "seed",
  themes: [
    { el: "Υπερηφάνεια", en: "Pride" },
    { el: "Γιατρός από τη Λάρισα", en: "Doctor from Larissa" },
    { el: "Δορυφόροι / εργοστάσιο", en: "Satellites / factory" },
    { el: "Πότε πετάει;", en: "When does he fly?" },
  ],
  summary: {
    el: "Ο δημόσιος παλμός θα γεμίσει όταν συνδεθεί το X API. Μέχρι τότε ακολουθήστε NASA, SpaceX και τον Γολέμη από τον πίνακα δίπλα.",
    en: "The public pulse fills when the X API is connected. Until then follow NASA, SpaceX and Golemis from the board next door.",
  },
};

export function XPulse() {
  const { lang } = useI18n();
  const [pulse, setPulse] = useState<Pulse>(SEED);

  useEffect(() => {
    fetch("/api/x-pulse")
      .then((r) => r.json())
      .then((d) => {
        if (d && d.themes) setPulse(d);
      })
      .catch(() => {});
  }, []);

  return (
    <div id="talk" className="panel rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
          {ui.pulseTitle[lang]}
        </p>
        <span className="font-mono text-[10px] text-[#8b95ab]">
          {pulse.source === "live" ? "X API" : "SEED"}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
        {pulse.summary[lang]}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {pulse.themes.map((t) => (
          <span
            key={t.en}
            className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[#f0d78c]"
          >
            {t[lang]}
          </span>
        ))}
      </div>
      {pulse.source === "seed" ? (
        <p className="mt-3 text-[11px] text-[#8b95ab]">{ui.pulseEmpty[lang]}</p>
      ) : null}
    </div>
  );
}
