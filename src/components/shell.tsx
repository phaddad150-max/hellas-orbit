"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { Starfield } from "./starfield";
import { cn } from "@/lib/utils";

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, toggleLang } = useI18n();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(26,111,212,0.16),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_50%)]" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#04070f]/80 backdrop-blur-xl">
        <div className="meander h-1.5 w-full" />
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/emblem.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-[#d4af37]/60"
            />
            <span className="display block text-sm leading-none text-[#f0d78c]">
              {ui.brand[lang]}
            </span>
          </Link>

          <nav className="ml-4 hidden flex-wrap items-center gap-1 xl:flex">
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

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[#f4efe4] transition hover:border-[#d4af37]/50"
            >
              {lang === "el" ? "EL · EN" : "EN · EL"}
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--line)] p-2 xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="grid gap-1 border-t border-[var(--line)] px-4 py-3 xl:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
              >
                {item[lang]}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 md:py-12">
        {children}
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-6 text-center text-xs text-[#8b95ab]">
        <div className="gold-line mb-6" />
        <p>{ui.footer[lang]}</p>
      </footer>
    </div>
  );
}
