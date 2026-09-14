"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { OrbitGlobe } from "@/components/orbit-globe";
import { crew, golemis, mission, vehicle } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

const cards = [
  { href: "/first-greek", kicker: "01", titleEl: "Ο πρώτος Έλληνας", titleEn: "The first Greek" },
  { href: "/mission", kicker: "02", titleEl: "Αποστολή", titleEn: "Mission" },
  { href: "/live", kicker: "03", titleEl: "Ζωντανά", titleEn: "Live" },
  { href: "/crew", kicker: "04", titleEl: "Πλήρωμα", titleEn: "Crew" },
  { href: "/landscape", kicker: "05", titleEl: "Η Ελλάδα στο Διάστημα", titleEn: "Greece in Space" },
] as const;

export default function HomePage() {
  const { lang } = useI18n();
  const golemisCrew = crew.find((c) => c.id === "golemis");

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--line)]">
        <Image
          src="/brand/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070f] via-[#04070f]/80 to-transparent" />
        <div className="relative grid items-center gap-8 p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
              🇬🇷 {mission.code} · {mission.operator}
            </p>
            <h1 className="display glow mt-3 text-4xl leading-tight md:text-6xl">
              {ui.firstGreek[lang]}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#d5dceb] md:text-lg">
              {golemis.story[lang]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {[
                mission.windowLabel[lang],
                mission.status[lang],
                mission.vehicle,
                mission.destination,
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 max-w-lg">
              <Countdown />
            </div>
            <p className="mt-3 max-w-lg text-xs text-[#8b95ab]">{ui.netNote[lang]}</p>
          </div>
          <OrbitGlobe />
        </div>
      </section>

      <div className="overflow-hidden rounded-full border border-[var(--line)] py-2">
        <div className="ticker flex w-max gap-10 whitespace-nowrap px-6 font-mono text-xs text-[#f0d78c]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>ΑΔΡΙΑΝΟΣ ΓΟΛΕΜΗΣ</span>
              <span>ESA · HELLAS-SPACE</span>
              <span>DRAGON · FALCON 9</span>
              <span>ISS · NET SUMMER 2027</span>
              <span>ΑΡΤΕΜΙΣ · ΑΠΟΛΛΩΝ · ΩΡΙΩΝ</span>
            </span>
          ))}
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="panel rounded-2xl p-5 transition hover:-translate-y-1"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#7dd3fc]">
              {c.kicker}
            </p>
            <h3 className="display mt-2 text-xl">
              {lang === "el" ? c.titleEl : c.titleEn}
            </h3>
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-[#f0d78c]">
              {ui.explore[lang]} <ArrowRight className="h-3.5 w-3.5" />
            </p>
          </Link>
        ))}
      </section>

      {/* Tease only — full crew lives on /crew */}
      <section className="panel rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
              {ui.crewTitle[lang]}
            </p>
            <h2 className="display mt-2 text-3xl">
              {golemisCrew?.flag} {golemis.name[lang]}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#d5dceb]">
              {golemisCrew?.role[lang]}
              {" · "}
              {lang === "el"
                ? "Μαζί με διοικητή Pesquet και πιλότο Svoboda · 4ο μέλος εκκρεμεί."
                : "Alongside commander Pesquet and pilot Svoboda · 4th seat still pending."}
            </p>
          </div>
          <Link href="/crew" className="text-xs text-[#f0d78c]">
            {ui.explore[lang]} →
          </Link>
        </div>
      </section>

      {/* Tease vehicle — full specs on /mission */}
      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="panel overflow-hidden rounded-3xl">
          <Image
            src="/brand/vehicle.jpg"
            alt=""
            width={900}
            height={600}
            className="h-[240px] w-full object-cover md:h-full"
          />
        </div>
        <div className="panel flex flex-col justify-center rounded-3xl p-6">
          <h2 className="display text-3xl">{ui.vehicleTitle[lang]}</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.rocket}
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.capsule}
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[#f0d78c]">
              {vehicle.station}
            </span>
          </div>
          <p className="mt-4 text-sm text-[#d5dceb]">
            {mission.windowLabel[lang]} · {mission.status[lang]}
          </p>
          <Link
            href="/mission"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#f0d78c]"
          >
            {ui.explore[lang]} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section
        className="panel overflow-hidden rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: "url(/brand/constellation.jpg)" }}
      >
        <div className="bg-[#04070f]/70 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
            Artemis · Apollo · Orion
          </p>
          <h2 className="display mt-2 max-w-2xl text-4xl">{ui.namesTitle[lang]}</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d5dceb]">{ui.namesLead[lang]}</p>
          <Link
            href="/landscape#space-speaks-greek"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2 text-sm text-[#1a1404]"
          >
            {ui.explore[lang]} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
