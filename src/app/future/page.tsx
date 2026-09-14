"use client";

import Image from "next/image";
import Link from "next/link";
import { GreekFlag } from "@/components/greek-flag";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FuturePage() {
  const { lang } = useI18n();
  const potentials = ui.potential[lang];

  return (
    <div className="space-y-12">
      <header className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <GreekFlag className="h-7 w-10" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
              {ui.whyCare[lang]}
            </p>
          </div>
          <h1 className="display mt-2 text-5xl md:text-6xl">
            {lang === "el" ? "Επόμενη γενιά" : "Next generation"}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#d5dceb]">
            {ui.futureLead[lang]}
          </p>
          <p className="mt-3 text-sm text-[#8b95ab]">
            {lang === "el"
              ? "Ένας χώρος για μαθητές, φοιτητές και νέους επιστήμονες — χωρίς ξεχωριστή «παιδική» ενότητα στο μενού."
              : "One place for pupils, students and young scientists — no separate kids item in the main menu."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/landscape#space-speaks-greek"
              className="inline-flex rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f0d78c] hover:border-[#d4af37]"
            >
              {ui.namesTitle[lang]} →
            </Link>
            <Link
              href="/"
              className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[#d5dceb] hover:border-[#d4af37]/50"
            >
              {lang === "el" ? "Κέντρο αποστολής →" : "Mission control →"}
            </Link>
          </div>
        </div>
        <div className="panel overflow-hidden rounded-3xl">
          <Image
            src="/brand/constellation.jpg"
            alt=""
            width={1200}
            height={900}
            className="h-full min-h-[280px] w-full object-cover"
            priority
          />
        </div>
      </header>

      <section>
        <h2 className="display text-3xl md:text-4xl">{ui.potentialTitle[lang]}</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#8b95ab]">
          {ui.whyCare[lang]}
        </p>
        <ol className="relative mt-8 space-y-0 border-l border-[#d4af37]/45 pl-6 md:pl-8">
          {potentials.map((p, i) => {
            const isLast = i === potentials.length - 1;
            return (
              <li key={p} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#04070f] font-mono text-[10px] text-[#f0d78c] md:-left-[39px] md:h-7 md:w-7 md:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className={`panel rounded-2xl p-5 ${
                    isLast ? "border border-[#d4af37]/35" : ""
                  }`}
                >
                  <p className="text-base leading-relaxed text-[#d5dceb] md:text-lg">
                    {p}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
