"use client";

import Link from "next/link";
import { greeceTiles } from "@/lib/console";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function GreecePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-6">
      <h1 className="display text-3xl leading-tight md:text-5xl">
        {ui.greeceTitle[lang]}
      </h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {greeceTiles.map((tile) => {
          const inner = (
            <>
              <h2 className="display text-xl text-[#f0d78c]">{tile.title[lang]}</h2>
              <p className="mt-2 text-sm text-[#d5dceb]">{tile.body[lang]}</p>
              {tile.external ? (
                <span className="mt-3 inline-block text-xs text-[#7dd3fc]">↗</span>
              ) : null}
            </>
          );
          const cls = "panel min-h-28 rounded-2xl p-4";
          return tile.external ? (
            <a
              key={tile.id}
              href={tile.href}
              target="_blank"
              rel="noreferrer"
              className={cls}
            >
              {inner}
            </a>
          ) : (
            <Link key={tile.id} href={tile.href} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
