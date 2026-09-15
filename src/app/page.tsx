"use client";

import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { LiveIss } from "@/components/live-iss";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-6 lg:min-h-[70vh] lg:space-y-8">
      <header>
        <h1 className="display text-3xl sm:text-4xl lg:text-5xl">{ui.homeTitle[lang]}</h1>
        <p className="mt-2 max-w-xl text-sm text-[#d5dceb]">{ui.pendingMcop[lang]}</p>
      </header>

      <Countdown />

      <nav className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label={ui.homeTitle[lang]}>
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="panel flex min-h-24 flex-col justify-between rounded-2xl p-4"
          >
            <span className="font-mono text-[10px] text-[#7dd3fc]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="display text-xl">{item[lang]}</span>
          </Link>
        ))}
      </nav>

      <LiveIss preview />
    </div>
  );
}
