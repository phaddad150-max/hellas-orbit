"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { GreekFlag } from "./greek-flag";
import { Starfield } from "./starfield";
import { cn } from "@/lib/utils";

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

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
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(26,111,212,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.09),transparent_50%)]" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#04070f]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#04070f]/78">
        <div className="hellenic-bar h-1 w-full" aria-hidden />
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
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-[#d4af37]/70 sm:h-10 sm:w-10"
            />
            <GreekFlag className="h-6 w-9 sm:h-7 sm:w-10" />
            <span className="min-w-0">
              <span className="display block truncate text-sm leading-none text-[#f0d78c] sm:text-base">
                Hellas Orbit
              </span>
              <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.14em] text-[#7dd3fc] sm:text-[11px]">
                Ελλάδα σε τροχιά
              </span>
            </span>
          </Link>

          <nav className="ml-2 hidden flex-wrap items-center gap-1 xl:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(path, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-2.5 py-1.5 text-[11px] tracking-wide transition",
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
          <>
            <button
              type="button"
              className="fixed inset-0 top-[var(--header-h,4.5rem)] z-30 bg-black/55 xl:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-nav"
              className="relative z-40 max-h-[min(75vh,32rem)] overflow-y-auto overscroll-contain border-t border-[var(--line)] bg-[#04070f]/98 px-3 py-3 xl:hidden"
            >
              <nav className="grid gap-0.5" aria-label="Primary">
                {nav.map((item) => {
                  const active = isActive(path, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3 text-sm transition",
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
              <p className="mt-3 flex items-center gap-2 px-1 text-[10px] text-[#8b95ab]">
                <GreekFlag className="h-3.5 w-5" />
                {ui.brand[lang]} · 🇬🇷 Hellas
              </p>
            </div>
          </>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:py-10 md:py-12">
        {children}
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-6 text-center text-xs text-[#8b95ab]">
        <div className="gold-line mb-6" />
        <p className="mb-2 flex items-center justify-center gap-2">
          <GreekFlag className="h-3.5 w-5" />
          <span className="text-[#f0d78c]">Hellas Orbit</span>
          <span>·</span>
          <span>Ελλάδα σε τροχιά</span>
        </p>
        <p>{ui.footer[lang]}</p>
      </footer>
    </div>
  );
}
