"use client";

import Image from "next/image";
import { golemis, mission } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FirstGreekPage() {
  const { lang } = useI18n();
  const imageAlt = `${golemis.name[lang]} — ${ui.illustration[lang]}`;

  return (
    <div className="space-y-8">
      <header className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
        <div className="portrait-stage panel relative overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="/brand/astronaut.png"
            alt={imageAlt}
            width={800}
            height={1000}
            priority
            className="h-[48vh] max-h-[380px] w-full object-cover object-top lg:h-full lg:max-h-none lg:min-h-[520px]"
          />
          <div
            className="portrait-scrim pointer-events-none absolute inset-0 hidden lg:block"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-10 hidden flex-col gap-3 p-7 lg:flex">
            <p className="portrait-overlay-copy text-[10px] font-medium uppercase tracking-[0.28em] text-[#7dd3fc]">
              {ui.firstGreek[lang]}
            </p>
            <h1 className="display portrait-overlay-copy text-5xl leading-tight text-white">
              {golemis.name[lang]}
            </h1>
            <p className="portrait-overlay-copy text-base font-medium text-[#f0d78c]">
              {golemis.role[lang]} · {golemis.from[lang]}
            </p>
            <p className="portrait-overlay-copy max-w-xl text-[15px] leading-relaxed text-[#e8edf7]">
              {golemis.story[lang]}
            </p>
          </div>
        </div>

        <div className="space-y-3 lg:hidden">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7dd3fc]">
            {ui.firstGreek[lang]}
          </p>
          <h1 className="display text-3xl leading-tight">{golemis.name[lang]}</h1>
          <p className="text-sm font-medium text-[#f0d78c]">
            {golemis.role[lang]} · {golemis.from[lang]}
          </p>
          <p className="text-[15px] leading-relaxed text-[#d5dceb]">
            {golemis.story[lang]}
          </p>
        </div>

        <aside className="panel flex flex-col rounded-3xl p-5 md:p-7">
          <h2 className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
            {lang === "el" ? "Εμπειρία" : "Experience"}
          </h2>
          <p className="mt-2 text-sm text-[#8b95ab]">
            {lang === "el"
              ? "Επιβεβαιωμένη πορεία · το 2027 παραμένει στόχος (NET), όχι κλειστή ημερομηνία."
              : "Confirmed path · 2027 remains a target (NET), not a locked launch date."}
          </p>
          <ol className="relative mt-6 flex-1 space-y-4 border-l border-[#d4af37]/40 pl-6">
            {golemis.timeline.map((step) => {
              const isTarget = step.year === "2027";
              return (
                <li key={step.year} className="relative">
                  <span
                    className={`absolute -left-[29px] top-1 h-3 w-3 rounded-full ${
                      isTarget
                        ? "bg-[#7dd3fc] ring-2 ring-[#7dd3fc]/35"
                        : "bg-[#d4af37]"
                    }`}
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <p
                      className={`font-mono text-xs ${
                        isTarget ? "text-[#7dd3fc]" : "text-[#f0d78c]"
                      }`}
                    >
                      {step.year}
                    </p>
                    {isTarget ? (
                      <span className="rounded-full border border-[#7dd3fc]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7dd3fc]">
                        {lang === "el" ? "στόχος · NET" : "target · NET"}
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={`mt-0.5 text-sm md:text-[15px] ${
                      isTarget ? "text-[#7dd3fc]" : "text-[#d5dceb]"
                    }`}
                  >
                    {step[lang]}
                  </p>
                </li>
              );
            })}
          </ol>
          <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3fc]">
              {mission.code} · {mission.officialNames.vast} ·{" "}
              {mission.officialNames.nasaPam}
            </p>
            <p className="text-sm leading-relaxed text-[#d5dceb]">
              {mission.behind[lang]}
            </p>
            <div className="rounded-2xl border border-[#7dd3fc]/30 bg-[#04070f]/35 px-3 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7dd3fc]">
                {ui.stillOpen[lang]}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#8b95ab]">
                {lang === "el"
                  ? "Έγκριση MCOP · τέταρτο μέλος πληρώματος · ακριβής ημερομηνία εκτόξευσης."
                  : "MCOP approval · fourth crewmember · exact launch date."}
              </p>
            </div>
          </div>
        </aside>
      </header>
    </div>
  );
}
