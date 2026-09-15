"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flag, Radio, Sparkles, User } from "lucide-react";
import { nav } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ICONS = [User, Radio, Flag, Sparkles] as const;

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
          const Icon = ICONS[i] ?? User;
          const active =
            path === item.href || path.startsWith(`${item.href}/`);
          const isMission = item.href === "/mission";
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[11px]",
                  active ? "text-[#f0d78c]" : "text-[#9aa3b8]",
                )}
              >
                <span className="relative">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                  {isMission ? (
                    <span className="live-dot absolute -right-1 -top-0.5" />
                  ) : null}
                </span>
                {item[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
