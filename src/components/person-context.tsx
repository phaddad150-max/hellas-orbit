"use client";

import { useState } from "react";
import { hellenicAdds } from "@/lib/console";
import { ui } from "@/lib/copy";
import { crew, mission, vehicle } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Tab = "mission" | "crew" | "vehicle" | "hellenic";

export function PersonContext() {
  const { lang } = useI18n();
  const [tab, setTab] = useState<Tab>("mission");

  const tabs: { id: Tab; label: string }[] = [
    { id: "mission", label: ui.contextMission[lang] },
    { id: "crew", label: ui.contextCrew[lang] },
    { id: "vehicle", label: ui.contextVehicle[lang] },
    { id: "hellenic", label: ui.contextHellenic[lang] },
  ];

  return (
    <section className="mt-8" aria-label={ui.contextMission[lang]}>
      <div
        role="tablist"
        className="flex gap-2 overflow-x-auto pb-1"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full px-4 text-sm",
              tab === t.id
                ? "bg-[#d4af37] text-[#1a1404]"
                : "border border-[var(--line)] text-[#d5dceb]",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="panel mt-4 rounded-2xl p-4 sm:p-5">
        {tab === "mission" ? (
          <div className="space-y-3 text-sm text-[#d5dceb]">
            <p>
              {lang === "el"
                ? "NASA επέλεξε τη Vast για PAM-6 (12 Φεβ 2026). ESA υπέγραψε για την Ελλάδα (9 Σεπ 2026). Ίδια πτήση: Vast-PAM-1."
                : "NASA selected Vast for PAM-6 (12 Feb 2026). ESA signed for Greece (9 Sep 2026). Same flight: Vast-PAM-1."}
            </p>
            <p>{ui.durationOfficial[lang]}</p>
            <p className="text-xs text-[#8b95ab]">{ui.netNote[lang]}</p>
            <p className="text-xs text-[#8b95ab]">{ui.pendingMcop[lang]}</p>
          </div>
        ) : null}

        {tab === "crew" ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {crew.map((c) => (
              <article key={c.id} className="overflow-hidden rounded-xl bg-black/20">
                <div className="aspect-[3/4] bg-[#f3f5f8]">
                  {"photo" in c && c.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.photo}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-mono text-xs text-[#8b95ab]">
                      TBA
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-[10px] uppercase text-[#7dd3fc]">{c.role[lang]}</p>
                  <p className="display text-sm leading-tight">{c.name[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {tab === "vehicle" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/vehicle.jpg"
              alt=""
              className="h-40 w-full rounded-xl object-cover sm:h-full"
            />
            <div className="space-y-2 text-sm text-[#d5dceb]">
              <p>
                {vehicle.rocket} · {vehicle.capsule} · {vehicle.station}
              </p>
              <p>{mission.site[lang]}</p>
              <p>{ui.durationOfficial[lang]}</p>
            </div>
          </div>
        ) : null}

        {tab === "hellenic" ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {hellenicAdds.map((item) => (
              <article key={item.title.en} className="rounded-xl bg-black/20 p-3">
                <h3 className="text-sm text-[#f0d78c]">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#d5dceb]">
                  {item.body[lang]}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
