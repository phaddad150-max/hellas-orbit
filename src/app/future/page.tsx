"use client";

import Image from "next/image";
import Link from "next/link";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function FuturePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-12">
      <header className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
            {lang === "el" ? "Εκπαίδευση · έμπνευση · βιομηχανία" : "Education · inspiration · industry"}
          </p>
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
          <Link
            href="/landscape#space-speaks-greek"
            className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {ui.namesTitle[lang]} →
          </Link>
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
