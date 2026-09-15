"use client";

import { useState } from "react";
import { LiveIss } from "@/components/live-iss";
import { Sheet } from "@/components/sheet";
import { flightSteps, groundTeams, openLights, sources } from "@/lib/console";
import { ui } from "@/lib/copy";
import { crew } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function MissionPage() {
  const { lang } = useI18n();
  const [crewId, setCrewId] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [srcOpen, setSrcOpen] = useState(false);
  const member = crew.find((c) => c.id === crewId);
  const current = flightSteps[step];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="display text-4xl">{ui.missionTitle[lang]}</h1>
        <p className="mt-2 text-sm text-[#d5dceb]">{ui.durationOfficial[lang]}</p>
        <p className="text-xs text-[#8b95ab]">{ui.durationGreek[lang]}</p>
      </header>

      <section>
        <h2 className="mb-3 display text-2xl">{ui.crewTitle[lang]}</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {crew.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCrewId(c.id)}
              className="panel overflow-hidden rounded-2xl p-0 text-left"
            >
              <div className="aspect-[3/4] bg-[#f3f5f8]">
                {"photo" in c && c.photo ? (
                  // Native img so portraits always paint (Next optimizer was unreliable here).
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.photo}
                    alt=""
                    width={480}
                    height={640}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-sm text-[#8b95ab]">
                    TBA
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-wide text-[#7dd3fc]">
                  {c.role[lang]}
                </p>
                <p className="display mt-1 text-base leading-tight sm:text-lg">
                  {c.name[lang]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 display text-2xl">{ui.stepperTitle[lang]}</h2>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {flightSteps.map((s, i) => (
            <button
              key={s.n}
              type="button"
              onClick={() => setStep(i)}
              className={`min-h-11 shrink-0 rounded-full px-3 text-sm ${
                i === step
                  ? "bg-[#d4af37] text-[#1a1404]"
                  : "border border-[var(--line)] text-[#d5dceb]"
              }`}
            >
              {s.n}
            </button>
          ))}
        </div>
        <div className="panel mt-3 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-wide text-[#7dd3fc]">
            {current.title[lang]}
          </p>
          <p className="mt-2 text-sm text-[#d5dceb]">{current.body[lang]}</p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 display text-2xl">{ui.vehicleTitle[lang]}</h2>
        <p className="panel rounded-2xl p-4 text-sm text-[#d5dceb]">
          SpaceX Crew Dragon · Falcon 9
        </p>
      </section>

      <section>
        <h2 className="mb-3 display text-2xl">{ui.groundTitle[lang]}</h2>
        <div className="grid grid-cols-2 gap-3">
          {groundTeams.map((g) => (
            <article key={g.id} className="panel rounded-2xl p-4">
              <h3 className="text-[#f0d78c]">{g.title[lang]}</h3>
              <p className="mt-1 text-sm text-[#d5dceb]">{g.body[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 display text-2xl">{ui.stillOpen[lang]}</h2>
        <div className="flex flex-wrap gap-2">
          {openLights.map((o) => (
            <span
              key={o.id}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#7dd3fc]/40 px-3 text-sm text-[#7dd3fc]"
            >
              <span className="live-dot" aria-hidden />
              {o[lang]}
            </span>
          ))}
        </div>
      </section>

      <LiveIss />

      <button
        type="button"
        onClick={() => setSrcOpen(true)}
        className="min-h-11 rounded-full border border-[var(--line)] px-4 text-sm text-[#f0d78c]"
      >
        {ui.sources[lang]}
      </button>

      <Sheet
        open={Boolean(member)}
        onClose={() => setCrewId(null)}
        title={member?.name[lang] ?? ""}
      >
        {member ? (
          <div className="space-y-3 text-sm text-[#d5dceb]">
            {"photo" in member && member.photo ? (
              <div className="overflow-hidden rounded-xl bg-[#f3f5f8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt=""
                  width={480}
                  height={640}
                  className="mx-auto max-h-56 w-auto object-cover object-top"
                />
              </div>
            ) : null}
            <p>
              {member.role[lang]} · {member.agency} · {member.nation[lang]}
            </p>
            <p>{member.bio[lang]}</p>
          </div>
        ) : null}
      </Sheet>

      <Sheet open={srcOpen} onClose={() => setSrcOpen(false)} title={ui.sources[lang]}>
        <ul className="space-y-3 text-sm">
          {sources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#7dd3fc] underline-offset-2 hover:underline"
              >
                {s[lang]} ↗
              </a>
            </li>
          ))}
        </ul>
      </Sheet>
    </div>
  );
}
