"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { Starfield } from "./starfield";
import { cn } from "@/lib/utils";

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, toggleLang } = useI18n();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(26,111,212,0.16),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_50%)]" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#04070f]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#04070f]/75">
        <div className="meander h-1.5 w-full" />
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/emblem.jpg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-[#d4af37]/60 sm:h-10 sm:w-10"
            />
            <span className="display block truncate text-xs leading-none text-[#f0d78c] sm:text-sm">
              {ui.brand[lang]}
            </span>
          </Link>

          <nav className="ml-2 hidden flex-wrap items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-[11px] tracking-wide transition",
                  path === item.href
                    ? "bg-[#d4af37] text-[#1a1404]"
                    : "text-[#d5dceb] hover:bg-white/5",
                )}
              >
                {item[lang]}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-[var(--line)] px-2.5 py-1.5 font-mono text-[11px] text-[#f4efe4] transition hover:border-[#d4af37]/50 sm:px-3 sm:text-xs"
            >
              {lang === "el" ? "EL · EN" : "EN · EL"}
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--line)] p-2 xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open ? (
          <div
            id="mobile-nav"
            className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain border-t border-[var(--line)] px-3 py-2 xl:hidden"
          >
            <nav className="grid gap-0.5" aria-label="Primary">
              {nav.map((item) => {
                const active = path === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition",
                      active
                        ? "bg-[#d4af37]/15 text-[#f0d78c] ring-1 ring-[#d4af37]/45"
                        : "text-[#d5dceb] hover:bg-white/5",
                    )}
                  >
                    <span>{item[lang]}</span>
                    {active ? (
                      <span className="font-mono text-[10px] uppercase tracking-wide text-[#d4af37]">
                        {lang === "el" ? "εδώ" : "here"}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:py-10 md:py-12">
        {children}
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-6 text-center text-xs text-[#8b95ab]">
        <div className="gold-line mb-6" />
        <p>{ui.footer[lang]}</p>
      </footer>
    </div>
  );
}
