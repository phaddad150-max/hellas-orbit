"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { MobileDock } from "./mobile-dock";
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

      <header className="site-header sticky top-0 z-40 border-b border-[var(--line)] bg-[#04070f]/92 backdrop-blur-xl supports-[backdrop-filter]:bg-[#04070f]/82">
        <div className="meander h-1.5 w-full" />
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/emblem.jpg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-[#d4af37]/70 sm:h-10 sm:w-10"
            />
            <span className="display text-sm leading-none text-[#f0d78c] sm:text-base">
              Hellas Orbit
            </span>
          </Link>

          <nav
            className="ml-2 hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = isActive(path, item.href);
              const isLive = item.href === "/live";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] tracking-wide transition",
                    active
                      ? "bg-[#d4af37] text-[#1a1404]"
                      : isLive
                        ? "text-[#7dd3fc] hover:bg-white/5"
                        : "text-[#d5dceb] hover:bg-white/5",
                  )}
                >
                  {isLive ? <span className="live-dot" aria-hidden /> : null}
                  {item[lang]}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-[var(--line)] px-2.5 py-1.5 font-mono text-[11px] text-[#f4efe4] transition hover:border-[#d4af37]/50 sm:px-3 sm:text-xs"
            >
              {lang === "el" ? "EL · EN" : "EN · EL"}
            </button>
          </div>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-[var(--header-h,4.5rem)] z-30 bg-black/55 lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-nav"
              className="relative z-40 overflow-y-auto border-t border-[var(--line)] bg-[#04070f]/98 px-3 py-3 lg:hidden"
            >
              <nav className="grid gap-0.5" aria-label="More">
                {nav
                  .filter(
                    (item) =>
                      !["/", "/live", "/first-greek", "/mission"].includes(
                        item.href,
                      ),
                  )
                  .map((item) => {
                  const active = isActive(path, item.href);
                  const isLive = item.href === "/live";
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm transition",
                        active
                          ? "bg-[#d4af37]/15 text-[#f0d78c]"
                          : isLive
                            ? "text-[#7dd3fc] hover:bg-white/5"
                            : "text-[#d5dceb] hover:bg-white/5",
                      )}
                    >
                      {isLive ? <span className="live-dot" aria-hidden /> : null}
                      {item[lang]}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-5 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:py-8 lg:pb-10">
        {children}
      </main>

      <footer className="relative z-10 mx-auto hidden max-w-7xl px-4 pb-10 pt-6 text-center text-xs text-[#8b95ab] lg:block">
        <div className="gold-line mb-6" />
        <p>{ui.footer[lang]}</p>
      </footer>

      <MobileDock moreOpen={open} onMore={() => setOpen((v) => !v)} />
    </div>
  );
}
