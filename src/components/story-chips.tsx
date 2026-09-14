"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Learning-arc chips only — Crew/Live live in primary nav, not duplicated here. */
const STORY = [
  { href: "/", el: "Κέντρο", en: "Control" },
  { href: "/first-greek", el: "Πρώτος Έλληνας", en: "First Greek" },
  { href: "/mission", el: "Αποστολή", en: "Mission" },
  { href: "/landscape", el: "Ελλάδα στο Διάστημα", en: "Greece in Space" },
  { href: "/future", el: "Επόμενη γενιά", en: "Next gen" },
] as const;

export function StoryChips({ className = "" }: { className?: string }) {
  const { lang } = useI18n();
  const path = usePathname();

  return (
    <nav
      aria-label={lang === "el" ? "Διαδρομή ιστορίας" : "Story flow"}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {STORY.map((item) => {
        const active =
          item.href === "/"
            ? path === "/"
            : path === item.href || path.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-wide transition",
              active
                ? "border-[#d4af37]/70 bg-[#d4af37]/15 text-[#f0d78c] ring-1 ring-[#d4af37]/35"
                : "border-[var(--line)] text-[#d5dceb] hover:border-[#d4af37]/50 hover:text-[#f0d78c]",
            )}
          >
            {item[lang]}
          </Link>
        );
      })}
    </nav>
  );
}
