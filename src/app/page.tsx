"use client";

import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { OrbitGlobe } from "@/components/orbit-globe";
import { golemis, mission, vehicle } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--line)] md:rounded-3xl">
        <Image
          src="/brand/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070f] via-[#04070f]/80 to-[#04070f]/40 md:bg-gradient-to-r md:from-[#04070f] md:via-[#04070f]/85 md:to-transparent" />
        <div className="relative grid items-center gap-6 p-5 sm:p-6 md:gap-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-xs sm:tracking-[0.28em]">
              {mission.code} · {mission.operator}
            </p>
            <h1 className="display glow mt-2 text-[1.85rem] leading-tight sm:mt-3 sm:text-4xl md:text-6xl">
              {ui.firstGreek[lang]}
            </h1>
            <p className="mt-2 text-sm font-medium text-[#f0d78c]">
              {golemis.name[lang]}
            </p>
            <p className="mt-3 line-clamp-3 max-w-xl text-[15px] leading-relaxed text-[#d5dceb] sm:mt-4 sm:line-clamp-none sm:text-base md:text-lg">
              {golemis.story[lang]}
            </p>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 text-xs sm:mt-6 sm:flex-wrap sm:overflow-visible">
              {[
                mission.windowLabel[lang],
                mission.status[lang],
                mission.vehicle,
              ].map((chip) => (
                <span
                  key={chip}
                  className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-5 max-w-lg sm:mt-8">
              <Countdown />
            </div>
          </div>
          <div className="hidden lg:block">
            <OrbitGlobe />
          </div>
        </div>
      </section>

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

      <Link
        href="/landscape#space-speaks-greek"
        className="relative block overflow-hidden rounded-2xl md:rounded-3xl"
      >
        <div
          className="min-h-[180px] bg-cover bg-center md:min-h-[260px]"
          style={{ backgroundImage: "url(/brand/constellation.jpg)" }}
        >
          <div className="flex min-h-[180px] items-end bg-[#04070f]/70 p-5 md:min-h-[260px] md:p-10">
            <h2 className="display max-w-2xl text-3xl text-[#f0d78c] md:text-5xl">
              {ui.namesTitle[lang]}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
