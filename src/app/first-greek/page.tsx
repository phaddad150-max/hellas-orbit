"use client";

import Image from "next/image";
import Link from "next/link";
import { golemis } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FirstGreekPage() {
  const { lang } = useI18n();
  const imageAlt = `${golemis.name[lang]} — ${ui.illustration[lang]}`;

  return (
    <div className="space-y-8">
      {/* Portrait + overlay | experience beside — large screens */}
      <header className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
        <div className="portrait-stage panel relative overflow-hidden rounded-3xl">
          <Image
            src="/brand/astronaut.png"
            alt={imageAlt}
            width={800}
            height={1000}
            priority
            className="h-full min-h-[360px] w-full object-cover object-top sm:min-h-[420px] md:min-h-[520px]"
          />
          {/* Dark scrim for readable overlay text */}
          <div
            className="portrait-scrim pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-10 flex max-h-[78%] flex-col gap-2 overflow-y-auto overscroll-contain p-4 sm:gap-3 sm:p-5 md:max-h-none md:p-7">
            <p className="portrait-overlay-copy text-[10px] font-medium uppercase tracking-[0.28em] text-[#7dd3fc]">
              🇬🇷 ESA Project Astronaut
            </p>
            <h1 className="display portrait-overlay-copy text-[1.65rem] leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {golemis.name[lang]}
            </h1>
            <p className="portrait-overlay-copy text-xs font-medium text-[#f0d78c] sm:text-sm md:text-base">
              {golemis.role[lang]}
            </p>
            <p className="portrait-overlay-copy line-clamp-3 max-w-xl text-[13px] leading-relaxed text-[#e8edf7] sm:line-clamp-4 sm:text-sm md:line-clamp-none md:text-[15px]">
              {golemis.story[lang]}
            </p>
            <blockquote className="display portrait-overlay-copy border-l-2 border-[#d4af37] pl-3 text-base leading-snug text-[#f0d78c] sm:text-lg md:text-xl">
              “{golemis.quote[lang]}”
            </blockquote>
            <div className="mt-1 flex flex-wrap gap-1.5 sm:gap-2">
              {golemis.facts.map((f) => (
                <span
                  key={f.en}
                  className="rounded-full border border-[#d4af37]/35 bg-[#04070f]/70 px-2 py-1 text-[10px] leading-snug text-[#e8edf7] backdrop-blur-sm sm:px-2.5 sm:text-[11px]"
                >
                  ★ {f[lang]}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-[#a8b0c2]">{ui.illustration[lang]}</p>
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
          <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
            <Link
              href="/mission"
              className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[#f0d78c] hover:border-[#d4af37]/50"
            >
              {lang === "el" ? "Αποστολή →" : "Mission →"}
            </Link>
            <Link
              href="/live"
              className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[#7dd3fc] hover:border-[#7dd3fc]/50"
            >
              {lang === "el" ? "Ζωντανά →" : "Live →"}
            </Link>
          </div>
        </aside>
      </header>
    </div>
  );
}
