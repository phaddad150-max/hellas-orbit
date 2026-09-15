"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, Radio, Rocket, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const DOCK = [
  { href: "/", el: "Αρχή", en: "Home", Icon: Home },
  { href: "/live", el: "Live", en: "Live", Icon: Radio, live: true },
  { href: "/first-greek", el: "Πρώτος", en: "First", Icon: User },
  { href: "/mission", el: "Πτήση", en: "Mission", Icon: Rocket },
] as const;

export function MobileDock({
  moreOpen,
  onMore,
}: {
  moreOpen: boolean;
  onMore: () => void;
}) {
  const { lang } = useI18n();
  const path = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[#04070f]/95 px-2 pt-1 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.45rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5">
        {DOCK.map(({ href, Icon, live, ...label }) => {
          const active =
            href === "/"
              ? path === "/"
              : path === href || path.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] tracking-wide",
                  active ? "text-[#f0d78c]" : live ? "text-[#7dd3fc]" : "text-[#9aa3b8]",
                )}
              >
                <span className="relative">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                  {live ? (
                    <span className="live-dot absolute -right-1 -top-0.5" />
                  ) : null}
                </span>
                {label[lang]}
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={onMore}
            aria-expanded={moreOpen}
            className={cn(
              "flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] tracking-wide",
              moreOpen ? "text-[#f0d78c]" : "text-[#9aa3b8]",
            )}
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
            {lang === "el" ? "Άλλα" : "More"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
