"use client";

import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function NextPage() {
  const { lang } = useI18n();
  const mail =
    lang === "el"
      ? "mailto:?subject=Hellas%20Orbit%20σχολεία"
      : "mailto:?subject=Hellas%20Orbit%20schools";

  return (
    <div className="mx-auto max-w-lg space-y-6 py-6 text-center">
      <h1 className="display text-4xl">{ui.nextTitle[lang]}</h1>
      <p className="text-[#d5dceb]">{ui.nextLead[lang]}</p>
      <a
        href={mail}
        className="inline-flex min-h-11 items-center rounded-full bg-[#d4af37] px-5 text-sm text-[#1a1404]"
      >
        {ui.nextCta[lang]}
      </a>
    </div>
  );
}
