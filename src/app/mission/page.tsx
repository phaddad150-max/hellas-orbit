"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  golemis,
  mission,
  missionTimeline,
  officialChannels,
  officialStatements,
  vehicle,
} from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function MissionPage() {
  const { lang } = useI18n();

  const decisionFacts: [string, string][] = [
    [lang === "el" ? "Παράθυρο" : "Window", mission.windowLabel[lang]],
    [lang === "el" ? "Κατάσταση" : "Status", mission.status[lang]],
    [lang === "el" ? "Όχημα" : "Vehicle", mission.vehicle],
    [lang === "el" ? "Προορισμός" : "Destination", mission.destination],
    [lang === "el" ? "Διάρκεια" : "Duration", mission.duration[lang]],
    [lang === "el" ? "Εκτόξευση" : "Launch site", mission.site[lang]],
    [
      lang === "el" ? "Ονόματα" : "Labels",
      `${mission.officialNames.vast} · ${mission.officialNames.nasaPam}`,
    ],
  ];

  const stillOpen = [
    lang === "el" ? "Έγκριση MCOP" : "MCOP approval",
    lang === "el" ? "Τέταρτο μέλος πληρώματος" : "Fourth crewmember",
    lang === "el" ? "Ακριβής ημερομηνία εκτόξευσης" : "Exact launch date",
  ];

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
          {mission.officialNames.vast} · {mission.officialNames.nasaPam} ·{" "}
          {mission.operator}
        </p>
        <h1 className="display mt-2 text-5xl md:text-6xl">
          {lang === "el" ? "Αποστολή" : "Mission"}
        </h1>
        <p className="mt-3 text-sm text-[#8b95ab]">
          {mission.officialNames.note[lang]}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#d5dceb]">
          {mission.goal[lang]}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#8b95ab]">
          {mission.note[lang]}
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {mission.partners.map((p) => (
          <div key={p.id} className="panel rounded-2xl p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3fc]">
              {p.role[lang]}
            </p>
            <p className="display mt-2 text-xl text-[#f0d78c]">{p[lang]}</p>
          </div>
        ))}
      </section>

      <section className="panel rounded-3xl p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
              {lang === "el" ? "Ρόλος Γολέμη" : "Golemis’s role"}
            </p>
            <h2 className="display mt-2 text-2xl md:text-3xl">
              {golemis.name[lang]} · {golemis.role[lang]}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#d5dceb]">
              {lang === "el"
                ? "Υπόκειται σε έγκριση MCOP: Mission Specialist στην Vast-PAM-1 / PAM-6 — τρίτο μέλος πληρώματος μαζί με διοικητή Thomas Pesquet και πιλότο Aleš Svoboda. Εκπαίδευση με Vast, SpaceX και NASA. Θα τρέξει ελληνικά πειράματα σε τροχιά."
                : "Subject to MCOP approval: Mission Specialist on Vast-PAM-1 / PAM-6 — third crewmember with commander Thomas Pesquet and pilot Aleš Svoboda. Training with Vast, SpaceX and NASA. He will run Greek experiments in orbit."}
            </p>
          </div>
          <Link
            href="/first-greek"
            className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Πλήρες προφίλ →" : "Full profile →"}
          </Link>
        </div>
      </section>

      <section>
        <h2 className="display text-3xl">
          {lang === "el" ? "Βασικά στοιχεία" : "Decision facts"}
        </h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {decisionFacts.map(([k, v]) => (
            <div
              key={k}
              className="panel flex items-start justify-between gap-4 rounded-xl px-4 py-3 text-sm"
            >
              <span className="shrink-0 text-[#8b95ab]">{k}</span>
              <span className="text-right text-[#f0d78c]">{v}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#8b95ab]">{ui.netNote[lang]}</p>
      </section>

      <section className="panel rounded-3xl border border-[#7dd3fc]/25 p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
              {lang === "el" ? "Εκκρεμή" : "Still open"}
            </p>
            <h2 className="display mt-2 text-2xl md:text-3xl">
              {lang === "el" ? "Τι μένει ανοιχτό" : "What remains open"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#8b95ab]">
              {lang === "el"
                ? "Εκκρεμεί: έγκριση MCOP, τέταρτο μέλος πληρώματος, ακριβής ημερομηνία εκτόξευσης."
                : "Pending: MCOP approval, fourth crewmember, exact launch date."}
            </p>
          </div>
          <Link
            href="/live"
            className="shrink-0 rounded-full border border-[#7dd3fc]/40 px-3 py-1.5 text-xs text-[#7dd3fc] hover:border-[#7dd3fc]/70"
          >
            {lang === "el" ? "Ops desk · Ζωντανά →" : "Ops desk · Live →"}
          </Link>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stillOpen.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[#7dd3fc]/30 bg-[#04070f]/40 px-3 py-1.5 text-xs text-[#d5dceb]"
            >
              ○ {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="display text-3xl">
          {lang === "el" ? "Χρονολόγιο" : "Timeline"}
        </h2>
        <ol className="relative mt-6 space-y-4 border-l border-[#d4af37]/40 pl-6">
          {missionTimeline.map((step) => (
            <li key={step.date + step.en} className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[#d4af37]" />
              <p className="font-mono text-xs text-[#7dd3fc]">{step.date}</p>
              <p className="text-sm text-[#d5dceb] md:text-base">{step[lang]}</p>
              <a
                href={step.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs text-[#f0d78c]"
              >
                {lang === "el" ? "Πηγή" : "Source"}{" "}
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel overflow-hidden rounded-3xl">
          <Image
            src="/brand/vehicle.jpg"
            alt=""
            width={900}
            height={1200}
            className="h-[380px] w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h2 className="display text-3xl">{ui.vehicleTitle[lang]}</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.rocket}
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.capsule}
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.station}
            </span>
          </div>
          <div className="space-y-3">
            {vehicle.points.map((p) => (
              <div
                key={p.en}
                className="panel rounded-2xl p-4 text-sm leading-relaxed text-[#d5dceb]"
              >
                {p[lang]}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#8b95ab]">
            {mission.behind[lang]}
          </p>
        </div>
      </section>

      <details className="panel group rounded-3xl p-5 md:p-6">
        <summary className="cursor-pointer list-none">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
                {lang === "el" ? "Επίσημες δηλώσεις" : "Official statements"}
              </p>
              <h2 className="display mt-2 text-2xl md:text-3xl">
                {lang === "el"
                  ? "ESA · Vast · Ελλάδα · CNES"
                  : "ESA · Vast · Greece · CNES"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[#8b95ab]">
                {lang === "el"
                  ? "Δευτερεύον · πάτα για να ανοίξεις επαληθεύσιμες παραθέσεις με πηγές."
                  : "Secondary · expand for verifiable quotations with sources."}
              </p>
            </div>
            <span className="text-xs text-[#f0d78c] group-open:hidden">
              {lang === "el" ? "Άνοιγμα ↓" : "Open ↓"}
            </span>
            <span className="hidden text-xs text-[#f0d78c] group-open:inline">
              {lang === "el" ? "Κλείσιμο ↑" : "Close ↑"}
            </span>
          </div>
        </summary>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {officialStatements.map((s) => (
            <article key={s.id} className="rounded-2xl border border-[var(--line)] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3fc]">
                {s.org} · {s.date}
              </p>
              <h3 className="mt-2 text-base text-[#f0d78c]">{s.speaker}</h3>
              <p className="text-xs text-[#8b95ab]">{s.role[lang]}</p>
              <blockquote className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
                “{s.quote[lang]}”
              </blockquote>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[#f0d78c]"
              >
                {s.sourceLabel[lang]} <ExternalLink className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {officialChannels.map((c) => (
            <span
              key={c.id}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-xs"
            >
              <span className="text-[#f0d78c]">{c.label}</span>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#8b95ab] hover:text-[#d5dceb]"
              >
                web
              </a>
              <a
                href={c.x}
                target="_blank"
                rel="noreferrer"
                className="text-[#7dd3fc] hover:text-[#d5dceb]"
              >
                X
              </a>
            </span>
          ))}
        </div>
      </details>
    </div>
  );
}
