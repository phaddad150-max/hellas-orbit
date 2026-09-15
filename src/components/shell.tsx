"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { MobileDock } from "./mobile-dock";
import { Starfield } from "./starfield";
import { cn } from "@/lib/utils";

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, toggleLang } = useI18n();
  const path = usePathname();

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(26,111,212,0.16),transparent_55%)]" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#04070f]/92 backdrop-blur-xl">
        <div className="meander h-1 w-full" />
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2 sm:px-4">
          <Link href="/" className="display shrink-0 text-sm text-[#f0d78c] sm:text-base">
            Hellas Orbit
          </Link>
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = path === item.href || path.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-[#d4af37] text-[#1a1404]"
                      : "text-[#d5dceb] hover:bg-white/5",
                  )}
                >
                  {item[lang]}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#7dd3fc]/40 px-2 py-1 font-mono text-[10px] text-[#7dd3fc] sm:inline-flex">
              <span className="live-dot" aria-hidden />
              {ui.liveChipIss[lang]}
            </span>
            <button
              type="button"
              onClick={toggleLang}
              className="min-h-11 rounded-full border border-[var(--line)] px-3 font-mono text-xs"
            >
              {lang === "el" ? "EL | EN" : "EN | EL"}
            </button>
          </div>
        </div>
        <p className="mx-auto hidden max-w-6xl px-4 pb-2 text-[11px] leading-snug text-[#8b95ab] lg:block">
          {ui.statusChip[lang]}
        </p>
        <p className="mx-auto max-w-6xl truncate px-3 pb-2 text-[10px] text-[#8b95ab] lg:hidden">
          PAM-6 · MCOP · NET 2027
        </p>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-3 py-4 sm:px-4 lg:py-6">
        {children}
      </main>

      <footer className="relative z-10 mx-auto max-w-6xl px-3 pb-[calc(5.25rem+env(safe-area-inset-bottom))] pt-4 text-center text-[10px] text-[#8b95ab] sm:text-xs lg:pb-8">
        <div className="gold-line mb-4 hidden lg:block" />
        <p>{ui.footer[lang]}</p>
      </footer>

      <MobileDock />
    </div>
  );
}
