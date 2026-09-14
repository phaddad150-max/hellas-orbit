"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { crew, mission } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function CrewPage() {
  const { lang } = useI18n();

  const ordered = [
    ...crew.filter((c) => c.id === "pesquet"),
    ...crew.filter((c) => c.id === "svoboda"),
    ...crew.filter((c) => c.id === "golemis"),
    ...crew.filter((c) => c.id === "tba"),
  ];

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
          {mission.officialNames.vast} · {mission.officialNames.nasaPam} · Dragon · 4
          seats
        </p>
        <h1 className="display mt-2 text-4xl sm:text-5xl">{ui.crewTitle[lang]}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
          {lang === "el"
            ? "Τρία ονόματα ανακοινωμένα · μία θέση ακόμα ανοιχτή. Ο Γολέμης είναι ο ελληνικός ειδικός αποστολής — άνοιξε το πλήρες προφίλ για εμπειρία και διαδρομή."
            : "Three names announced · one seat still open. Golemis is Greece’s mission specialist — open the full profile for experience and path."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <Link
            href="/mission"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Αποστολή →" : "Mission →"}
          </Link>
          <Link
            href="/first-greek"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Ο πρώτος Έλληνας →" : "The first Greek →"}
          </Link>
          <Link
            href="/live"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Ζωντανά →" : "Live →"}
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
        {ordered.map((c) => {
          const isGolemis = c.id === "golemis";
          const isPending = c.id === "tba";

          const body = (
            <>
              <div className="flex items-start justify-between gap-2">
                <p className="text-3xl leading-none">{c.flag}</p>
                <div className="min-w-0 text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3fc]">
                    {c.role[lang]}
                  </p>
                  {isPending ? (
                    <span className="mt-1 inline-block rounded-full border border-[#7dd3fc]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7dd3fc]">
                      {lang === "el" ? "εκκρεμεί" : "pending"}
                    </span>
                  ) : null}
                  {isGolemis ? (
                    <span className="mt-1 inline-block rounded-full border border-[#d4af37]/45 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#f0d78c]">
                      🇬🇷 Hellas
                    </span>
                  ) : null}
                </div>
              </div>
              <h2
                className={`display mt-4 text-2xl break-words md:text-3xl ${
                  isPending ? "text-[#8b95ab]" : "text-white"
                }`}
              >
                {c.name[lang]}
              </h2>
              <p className="text-sm text-[#f0d78c]">{c.nation[lang]}</p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  isPending ? "text-[#8b95ab]" : "text-[#d5dceb]"
                }`}
              >
                {c.bio[lang]}
              </p>
              {isGolemis ? (
                <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#f0d78c]">
                  {lang === "el" ? "Πλήρες προφίλ" : "Full profile"}{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </p>
              ) : null}
            </>
          );

          if (isGolemis) {
            return (
              <Link
                key={c.id}
                href="/first-greek"
                className="panel block h-full rounded-3xl p-4 sm:p-5 ring-1 ring-[#d4af37] transition hover:-translate-y-0.5 hover:bg-white/[0.03]"
              >
                {body}
              </Link>
            );
          }

          return (
            <article
              key={c.id}
              className={`panel h-full rounded-3xl p-4 sm:p-5 ${
                isPending
                  ? "border border-dashed border-[#7dd3fc]/35 bg-black/20"
                  : ""
              }`}
            >
              {body}
            </article>
          );
        })}
      </div>

      <p className="text-xs text-[#8b95ab]">
        {lang === "el"
          ? "Πλήρωμα υπό έγκριση MCOP · τέταρτο μέλος και ακριβής ημερομηνία εκτόξευσης ακόμα ανοιχτά."
          : "Crew subject to MCOP approval · fourth crewmember and exact launch date still open."}
      </p>
    </div>
  );
}
