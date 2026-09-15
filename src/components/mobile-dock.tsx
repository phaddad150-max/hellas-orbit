"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Star, User } from "lucide-react";
import { nav } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ICONS = [Home, User, Star, Sparkles] as const;

export function MobileDock() {
  const { lang } = useI18n();
  const path = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[#04070f]/96 px-1 pt-1 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {nav.map((item, i) => {
          const Icon = ICONS[i] ?? Home;
          const active =
            item.href === "/"
              ? path === "/"
              : path === item.href || path.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] sm:text-[11px]",
                  active ? "text-[#f0d78c]" : "text-[#9aa3b8]",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
                {item[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
