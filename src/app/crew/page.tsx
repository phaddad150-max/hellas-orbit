"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { crew, mission, officialChannels } from "@/lib/data";
import { leaders } from "@/lib/leaders";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

const ESA_HOME = "https://www.esa.int/";

function leaderById(id: string) {
  return leaders.find((l) => l.id === id);
}

function channelById(id: string) {
  return officialChannels.find((c) => c.id === id);
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function CrewPage() {
  const { lang } = useI18n();
  const pesquet = leaderById("pesquet") ?? channelById("pesquet");
  const golemisLeader = leaderById("golemis") ?? channelById("golemis");

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
          {mission.code} · {mission.officialNames.vast} ·{" "}
          {mission.officialNames.nasaPam}
        </p>
        <h1 className="display mt-2 text-4xl sm:text-5xl">{ui.crewTitle[lang]}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
          {lang === "el"
            ? "Τρία ονόματα ανακοινωμένα · μία θέση ακόμα ανοιχτή."
            : "Three names announced · one seat still open."}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
        {ordered.map((c) => {
          const isGolemis = c.id === "golemis";
          const isPending = c.id === "tba";
          const isPesquet = c.id === "pesquet";
          const isSvoboda = c.id === "svoboda";

          const xHref = isGolemis
            ? golemisLeader?.x
            : isPesquet
              ? pesquet?.x
              : undefined;
          const webHref = isGolemis
            ? golemisLeader?.href ?? ESA_HOME
            : isPesquet
              ? pesquet?.href ?? ESA_HOME
              : isSvoboda
                ? ESA_HOME
                : undefined;

          const media = isGolemis ? (
            <div className="crew-photo relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-[#04070f]">
              <Image
                src="/brand/astronaut.png"
                alt={`${c.name[lang]} — ${ui.illustration[lang]}`}
                width={480}
                height={600}
                className="h-full w-full object-cover object-top"
              />
              <p className="absolute bottom-2 left-2 right-2 text-[9px] text-[#a8b0c2]">
                {ui.illustration[lang]}
              </p>
            </div>
          ) : isPending ? (
            <div className="mb-4 flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[#7dd3fc]/35 bg-black/20">
              <span className="font-mono text-3xl text-[#7dd3fc]/70">✦</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7dd3fc]">
                TBA
              </span>
            </div>
          ) : (
            <div className="mb-4 flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#0c1424] to-[#04070f]">
              <span className="text-4xl leading-none" aria-hidden>
                {c.flag}
              </span>
              <span className="display text-3xl tracking-wide text-[#f0d78c]/90">
                {initials(c.name.en)}
              </span>
              <p className="px-3 text-center text-[9px] leading-snug text-[#8b95ab]">
                {ui.illustration[lang]}
              </p>
            </div>
          );

          const links = !isPending ? (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              {xHref ? (
                <a
                  href={xHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7dd3fc]/40 px-2.5 py-1 text-[#7dd3fc] hover:border-[#7dd3fc]/70"
                  onClick={(e) => e.stopPropagation()}
                >
                  X
                </a>
              ) : null}
              {webHref ? (
                <a
                  href={webHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-2.5 py-1 text-[#f0d78c] hover:border-[#d4af37]/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  ESA <ExternalLink className="h-3 w-3" />
                </a>
              ) : null}
              {isGolemis ? (
                <span className="inline-flex items-center gap-1 text-[#f0d78c]">
                  {lang === "el" ? "Πλήρες προφίλ" : "Full profile"}{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              ) : null}
            </div>
          ) : null;

          const body = (
            <>
              {media}
              <div className="flex items-start justify-between gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3fc]">
                  {c.role[lang]}
                </p>
                {isPending ? (
                  <span className="rounded-full border border-[#7dd3fc]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7dd3fc]">
                    {ui.stillOpen[lang]}
                  </span>
                ) : null}
                {isGolemis ? (
                  <span className="rounded-full border border-[#d4af37]/45 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#f0d78c]">
                    🇬🇷 Hellas
                  </span>
                ) : null}
              </div>
              <h2
                className={`display mt-2 text-xl break-words sm:text-2xl ${
                  isPending ? "text-[#8b95ab]" : "text-white"
                }`}
              >
                {c.name[lang]}
              </h2>
              <p className="text-xs text-[#f0d78c]">{c.nation[lang]}</p>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isPending ? "text-[#8b95ab]" : "text-[#d5dceb]"
                }`}
              >
                {c.bio[lang]}
              </p>
              {links}
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
