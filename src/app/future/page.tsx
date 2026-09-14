"use client";

import Image from "next/image";
import Link from "next/link";
import { GreekFlag } from "@/components/greek-flag";
import { StoryChips } from "@/components/story-chips";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FuturePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-12">
      <header className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <GreekFlag className="h-7 w-10" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
              {lang === "el" ? "Εκπαίδευση · έμπνευση · βιομηχανία" : "Education · inspiration · industry"}
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
          <div className="mt-6 space-y-3">
            <StoryChips />
            <div className="flex flex-wrap gap-2">
              <Link
                href="/landscape#space-speaks-greek"
                className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[#f0d78c] hover:border-[#d4af37]/50"
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
      <ul className="grid gap-4 md:grid-cols-2">
        {ui.potential[lang].map((p, i) => (
          <li key={p} className="panel rounded-2xl p-5">
            <p className="font-mono text-xs text-[#7dd3fc]">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-base leading-relaxed">{p}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
