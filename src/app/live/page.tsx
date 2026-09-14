"use client";

import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { GreekFlag } from "@/components/greek-flag";
import { IssTracker } from "@/components/iss-tracker";
import { LivePulse } from "@/components/live-pulse";
import { LiveStream } from "@/components/live-stream";
import { OpsBoard } from "@/components/ops-board";
import { StarlinkNote } from "@/components/starlink-note";
import { XPulse } from "@/components/x-pulse";
import { mission } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function LivePage() {
  const { lang } = useI18n();

  const desk =
    lang === "el"
      ? "Γραφείο επιχειρήσεων για Vast-PAM-1 · PAM-6 — προορισμός ISS. Επίσημα feeds NASA / SpaceX / ESA."
      : "Ops desk for Vast-PAM-1 · PAM-6 — ISS destination. Official NASA / SpaceX / ESA feeds.";

  const officialPair = `${mission.officialNames.vast} · ${mission.officialNames.nasaPam}`;

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <GreekFlag className="h-7 w-10" />
              <LivePulse href={null} />
            </div>
            <h1 className="display mt-3 text-5xl">
              {lang === "el" ? "Ουρανός τώρα" : "Sky now"}
            </h1>
            <p className="mt-3 max-w-2xl text-[#d5dceb]">{ui.opsLead[lang]}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#b7c0d4]">
              {desk}
            </p>
            <nav
              aria-label={lang === "el" ? "Σχετικές σελίδες" : "Related pages"}
              className="mt-4 flex flex-wrap gap-2"
            >
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
            </nav>
          </div>
          <div className="panel w-full max-w-sm rounded-2xl p-4 sm:w-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7dd3fc]">
              {lang === "el" ? "Κατάσταση αποστολής" : "Mission status"}
            </p>
            <p className="display mt-2 text-xl text-[#f0d78c]">
              {mission.status[lang]}
            </p>
            <p className="mt-1 text-xs text-[#8b95ab]">
              {mission.windowLabel[lang]}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-[#b7c0d4]">
              {mission.code} · {officialPair}
            </p>
            <div className="mt-4">
              <Countdown />
            </div>
          </div>
        </div>
      </header>

      {/* 1 — Cinema stage: official embeds dominate */}
      <section aria-labelledby="live-streams-heading" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2
            id="live-streams-heading"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#7dd3fc]"
          >
            <span className="live-dot" aria-hidden />
            {lang === "el" ? "Ζωντανά streams" : "LIVE streams"}
          </h2>
          <LivePulse compact href={null} />
        </div>
        <LiveStream />
      </section>

      {/* 2 — ISS + Starlink secondary row */}
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

      {/* 3 — OpsBoard primary signal */}
      <section aria-labelledby="ops-heading" className="space-y-3">
        <h2
          id="ops-heading"
          className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]"
        >
          {ui.opsTitle[lang]}
        </h2>
        <OpsBoard />
      </section>

      {/* 4 — XPulse demoted */}
      <section
        aria-labelledby="pulse-heading"
        className="space-y-2 opacity-90"
      >
        <h2
          id="pulse-heading"
          className="text-[10px] uppercase tracking-[0.28em] text-[#8b95ab]"
        >
          {ui.pulseTitle[lang]}
          <span className="ml-2 font-mono tracking-normal text-[#8b95ab]/80">
            · {lang === "el" ? "δευτερεύον" : "secondary"}
          </span>
        </h2>
        <XPulse />
      </section>

      <div className="flex flex-wrap gap-2 border-t border-[var(--line)] pt-6">
        <Link
          href="/landscape"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#8b95ab] hover:border-[#d4af37]/40 hover:text-[#f0d78c]"
        >
          {lang === "el" ? "Η Ελλάδα στο Διάστημα →" : "Greece in Space →"}
        </Link>
        <Link
          href="/future"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#8b95ab] hover:border-[#d4af37]/40 hover:text-[#f0d78c]"
        >
          {lang === "el" ? "Επόμενη γενιά →" : "Next generation →"}
        </Link>
      </div>
    </div>
  );
}
