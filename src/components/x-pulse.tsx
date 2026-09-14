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

/** Offline seed only — never presented as live volume or fabricated posts. */
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
    el: "Ο δημόσιος παλμός X είναι σε αναμονή (κλειδί API ή καθυστέρηση ροής). Μέχρι να γεμίσει, οι επίσημες ενημερώσεις είναι στον πίνακα επιχειρήσεων (Ops) παραπάνω.",
    en: "The public X pulse is on hold (API key or feed lag). Until it fills, official updates live on the Ops board above.",
  },
};

export function XPulse() {
  const { lang } = useI18n();
  const [pulse, setPulse] = useState<Pulse>(SEED);
  const isSeed = pulse.source !== "live";

  useEffect(() => {
    fetch("/api/x-pulse")
      .then((r) => r.json())
      .then((d) => {
        // Only accept an explicit live payload — never promote seed as live
        if (d && d.source === "live" && Array.isArray(d.themes) && d.themes.length) {
          setPulse(d);
        }
      })
      .catch(() => {
        /* stay on honest seed */
      });
  }, []);

  return (
    <div
      id="talk"
      className={`panel rounded-2xl p-4 ${
        isSeed
          ? "border border-dashed border-[var(--line)] bg-black/15 opacity-85"
          : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8b95ab]">
          {ui.pulseTitle[lang]}
        </p>
        {isSeed ? (
          <span className="rounded-full border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#8b95ab]">
            {lang === "el" ? "offline / καθυστέρηση" : "offline / lag"}
          </span>
        ) : (
          <span className="font-mono text-[10px] text-[#8b95ab]">X API</span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#b7c0d4]">
        {pulse.summary[lang]}
      </p>
      {isSeed ? (
        <p className="mt-2 rounded-xl border border-dashed border-[var(--line)] bg-black/20 px-3 py-2 text-[11px] leading-relaxed text-[#8b95ab]">
          {lang === "el"
            ? "Κενό ή καθυστέρηση ροής — όχι σφάλμα σελίδας. Κύρια πηγή σημάτων: ο πίνακας επιχειρήσεων (Ops) παραπάνω. Δεν εμφανίζουμε ψεύτικο παλμό. "
            : "Empty or delayed feed — not a page error. Primary signal source: the Ops board above. We never fake pulse. "}
          {ui.pulseEmpty[lang]}
        </p>
      ) : null}
      <div className={`mt-3 flex flex-wrap gap-2 ${isSeed ? "opacity-55" : ""}`}>
        {pulse.themes.map((t) => (
          <span
            key={t.en}
            className={`rounded-full border px-3 py-1 text-xs ${
              isSeed
                ? "border-[var(--line)] text-[#8b95ab]"
                : "border-[var(--line)] text-[#f0d78c]"
            }`}
          >
            {t[lang]}
          </span>
        ))}
      </div>
    </div>
  );
}
