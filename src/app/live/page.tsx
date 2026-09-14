"use client";

import Link from "next/link";
import { IssTracker } from "@/components/iss-tracker";
import { LiveStream } from "@/components/live-stream";
import { OpsBoard } from "@/components/ops-board";
import { StarlinkNote } from "@/components/starlink-note";
import { XPulse } from "@/components/x-pulse";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function LivePage() {
  const { lang } = useI18n();

  const desk =
    lang === "el"
      ? "Γραφείο επιχειρήσεων για Vast-PAM-1 / PAM-6 — προορισμός ISS. Ζωντανά feeds NASA / SpaceX / ESA και η διαδρομή του Γολέμη."
      : "Ops desk for Vast-PAM-1 / PAM-6 — ISS destination. Live NASA / SpaceX / ESA feeds and Golemis’s path.";

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
            {ui.live[lang]}
          </p>
          <h1 className="display mt-2 text-5xl">
            {lang === "el" ? "Ουρανός τώρα" : "Sky now"}
          </h1>
          <p className="mt-3 max-w-2xl text-[#d5dceb]">{ui.opsLead[lang]}</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#b7c0d4]">
            {desk}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/mission"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Αποστολή" : "Mission"}
          </Link>
          <Link
            href="/first-greek"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Πρώτος Έλληνας" : "First Greek"}
          </Link>
        </div>
      </header>

      {/* 1 — Live streams */}
      <section aria-labelledby="live-streams-heading" className="space-y-3">
        <h2
          id="live-streams-heading"
          className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]"
        >
          {lang === "el" ? "Ζωντανά streams" : "LIVE streams"}
        </h2>
        <LiveStream />
      </section>

      {/* 2 — ISS + Starlink */}
      <section
        aria-labelledby="sky-sensors-heading"
        className="space-y-3"
      >
        <h2
          id="sky-sensors-heading"
          className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]"
        >
          {lang === "el" ? "Θέση & σήμα" : "Position & signal"}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <IssTracker />
          <StarlinkNote />
        </div>
      </section>

      {/* 3 — Ops board (primary) */}
      <section aria-labelledby="ops-heading" className="space-y-3">
        <h2
          id="ops-heading"
          className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]"
        >
          {ui.opsTitle[lang]}
        </h2>
        <OpsBoard />
      </section>

      {/* 4 — XPulse secondary */}
      <section aria-labelledby="pulse-heading" className="space-y-3">
        <h2
          id="pulse-heading"
          className="text-xs uppercase tracking-[0.28em] text-[#8b95ab]"
        >
          {ui.pulseTitle[lang]}
        </h2>
        <XPulse />
      </section>
    </div>
  );
}
