"use client";

import { crew } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function CrewPage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
          Dragon · 4 seats
        </p>
        <h1 className="display mt-2 text-5xl">{ui.crewTitle[lang]}</h1>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {crew.map((c) => (
          <article
            key={c.id}
            className={`panel rounded-3xl p-6 ${
              c.id === "golemis" ? "ring-1 ring-[#d4af37]" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <p className="text-3xl">{c.flag}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7dd3fc]">
                {c.role[lang]}
              </p>
            </div>
            <h2 className="display mt-4 text-3xl">{c.name[lang]}</h2>
            <p className="text-sm text-[#f0d78c]">{c.nation[lang]}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#d5dceb]">
              {c.bio[lang]}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
