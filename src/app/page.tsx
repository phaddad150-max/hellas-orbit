"use client";

import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { FirstGreekBlock } from "@/components/first-greek-block";
import { NamesSection } from "@/components/names-section";
import { OrbitGlobe } from "@/components/orbit-globe";
import { ui } from "@/lib/copy";
import { golemis, mission } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-16">
      <section id="control" className="relative overflow-hidden rounded-2xl border border-[var(--line)] md:rounded-3xl">
        <Image
          src="/brand/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070f] via-[#04070f]/80 to-[#04070f]/40 lg:bg-gradient-to-r lg:from-[#04070f] lg:via-[#04070f]/85 lg:to-transparent" />
        <div className="relative grid items-center gap-6 p-5 md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-xs">
              {mission.officialNames.nasaPam} · {mission.officialNames.vast}
            </p>
            <h1 className="display glow mt-2 text-[1.85rem] leading-tight sm:text-4xl md:text-6xl">
              {ui.firstGreek[lang]}
            </h1>
            <p className="mt-2 text-sm font-medium text-[#f0d78c]">
              {golemis.name[lang]}
            </p>
            <div className="mt-6 max-w-lg">
              <Countdown />
            </div>
          </div>
          <div className="hidden lg:block">
            <OrbitGlobe />
          </div>
        </div>
      </section>

      <section id="first-greek">
        <FirstGreekBlock />
      </section>

      <section id="names">
        <NamesSection />
      </section>

      <section id="next" className="panel rounded-3xl p-6 text-center md:p-10">
        <h2 className="display text-3xl md:text-5xl">{ui.nextTitle[lang]}</h2>
        <p className="mx-auto mt-3 max-w-xl text-[#d5dceb]">{ui.nextLead[lang]}</p>
        <a
          href="/future"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#d4af37] px-5 text-sm text-[#1a1404]"
        >
          {ui.nextCta[lang]}
        </a>
      </section>
    </div>
  );
}
