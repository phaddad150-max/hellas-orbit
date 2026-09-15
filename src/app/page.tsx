"use client";

import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { OrbitGlobe } from "@/components/orbit-globe";
import { nav, ui } from "@/lib/copy";
import { golemis, mission, vehicle } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--line)] md:rounded-3xl">
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
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#d5dceb] md:text-lg">
              {golemis.story[lang]}
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

      <nav
        className="grid grid-cols-2 gap-3 lg:hidden"
        aria-label={ui.homeTitle[lang]}
      >
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="panel flex min-h-20 flex-col justify-between rounded-2xl p-4"
          >
            <span className="font-mono text-[10px] text-[#7dd3fc]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="display text-xl">{item[lang]}</span>
          </Link>
        ))}
      </nav>

      <Link
        href="/mission"
        className="panel grid overflow-hidden rounded-2xl md:grid-cols-[1.1fr_0.9fr] md:rounded-3xl"
      >
        <Image
          src="/brand/vehicle.jpg"
          alt=""
          width={900}
          height={600}
          className="h-[180px] w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center p-5 md:p-6">
          <h2 className="display text-2xl md:text-3xl">{ui.vehicleTitle[lang]}</h2>
          <p className="mt-2 text-sm text-[#d5dceb]">
            {vehicle.rocket} · {vehicle.capsule}
          </p>
        </div>
      </Link>
    </div>
  );
}
