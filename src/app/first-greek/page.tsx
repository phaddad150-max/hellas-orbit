"use client";

import { PersonContext } from "@/components/person-context";
import { personChips } from "@/lib/console";
import { ui } from "@/lib/copy";
import { golemis } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function PersonPage() {
  const { lang } = useI18n();

  return (
    <div>
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="panel overflow-hidden rounded-2xl bg-[#f3f5f8]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/golemis.jpg"
          alt={golemis.name[lang]}
          width={800}
          height={1000}
          className="h-[42vh] max-h-[360px] w-full object-cover object-top lg:h-auto lg:max-h-[520px]"
        />
      </div>
      <div>
        <h1 className="display text-4xl lg:text-5xl">{ui.personTitle[lang]}</h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#d5dceb]">
          {ui.personLead[lang]}
        </p>
        <p className="mt-2 text-xs text-[#8b95ab]">{ui.pendingMcop[lang]}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {personChips.map((c) => (
            <li
              key={c.en}
              className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[#f0d78c]"
            >
              {c[lang]}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <PersonContext />
    </div>
  );
}
