"use client";

import Image from "next/image";
import { golemis } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FirstGreekPage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-8">
      {/* Portrait + overlay | experience beside — large screens */}
      <header className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
        <div className="portrait-stage panel relative overflow-hidden rounded-3xl">
          <Image
            src="/brand/astronaut.png"
            alt=""
            width={800}
            height={1000}
            priority
            className="h-full min-h-[420px] w-full object-cover object-top md:min-h-[520px]"
          />
          {/* Dark scrim for readable overlay text */}
          <div
            className="portrait-scrim pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-5 md:p-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7dd3fc]">
              🇬🇷 ESA Project Astronaut
            </p>
            <h1 className="display text-3xl leading-tight text-white drop-shadow md:text-4xl lg:text-5xl">
              {golemis.name[lang]}
            </h1>
            <p className="text-sm font-medium text-[#f0d78c] md:text-base">
              {golemis.role[lang]}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-[#d5dceb] md:text-[15px]">
              {golemis.story[lang]}
            </p>
            <blockquote className="display border-l-2 border-[#d4af37] pl-3 text-lg leading-snug text-[#f0d78c] md:text-xl">
              “{golemis.quote[lang]}”
            </blockquote>
            <div className="mt-1 flex flex-wrap gap-2">
              {golemis.facts.map((f) => (
                <span
                  key={f.en}
                  className="rounded-full border border-[#d4af37]/35 bg-[#04070f]/55 px-2.5 py-1 text-[11px] text-[#d5dceb] backdrop-blur-sm"
                >
                  ★ {f[lang]}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-[#8b95ab]">{ui.illustration[lang]}</p>
          </div>
        </div>

        <aside className="panel flex flex-col rounded-3xl p-5 md:p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
            {lang === "el" ? "Εμπειρία" : "Experience"}
          </p>
          <h2 className="display mt-2 text-3xl md:text-4xl">
            {lang === "el" ? "Η διαδρομή" : "The path"}
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
        </aside>
      </header>
    </div>
  );
}
