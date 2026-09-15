"use client";

import { NameSky } from "@/components/name-sky";
import { greekNames } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export function NamesSection() {
  const { lang } = useI18n();

  return (
    <div className="space-y-6">
      <header>
        <h2 className="display text-3xl md:text-5xl">{ui.namesTitle[lang]}</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#d5dceb]">{ui.namesLead[lang]}</p>
      </header>
      <NameSky />
      <div className="grid gap-3 sm:grid-cols-2">
        {greekNames.map((n) => (
          <article key={n.name} className="panel rounded-2xl p-4">
            <p className="font-mono text-[10px] text-[#7dd3fc]">{n.usedBy}</p>
            <h3 className="display text-xl text-[#f0d78c]">{n.greek}</h3>
            <p className="text-sm text-[#d5dceb]">{n.name}</p>
            <p className="mt-2 text-sm text-[#d5dceb]">{n.what[lang]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
