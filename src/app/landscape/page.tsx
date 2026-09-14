"use client";

import Link from "next/link";
import { NameSky } from "@/components/name-sky";
import { greekNames } from "@/lib/data";
import { greecePath } from "@/lib/greece";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

/** Featured names for the Greece story — full list stays available but demoted. */
const FEATURED = new Set([
  "Apollo",
  "Artemis",
  "Orion",
  "Odyssey",
  "Europa",
  "Hera",
  "Helios",
]);

export default function LandscapePage() {
  const { lang } = useI18n();
  const featured = greekNames.filter((n) => FEATURED.has(n.name));
  const rest = greekNames.filter((n) => !FEATURED.has(n.name));

  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
          ESA · HELLAS-SPACE
        </p>
        <h1 className="display mt-2 text-5xl md:text-6xl">
          {lang === "el" ? "Η Ελλάδα στο Διάστημα" : "Greece in Space"}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#d5dceb]">
          {lang === "el"
            ? "Μέλος ESA, δορυφόροι, εργοστάσιο, και ο πρώτος γιατρός-αστροναύτης — και τα ελληνικά ονόματα που ήδη ταξιδεύουν στον ουρανό."
            : "ESA member, satellites, a factory, and the first doctor-astronaut — plus the Greek names already travelling through the sky."}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          <a
            href="#path"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#d5dceb] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Η διαδρομή" : "The path"}
          </a>
          <a
            href="#space-speaks-greek"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#f0d78c] hover:border-[#d4af37]/50"
          >
            {ui.namesTitle[lang]}
          </a>
          <Link
            href="/future"
            className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#d5dceb] hover:border-[#d4af37]/50"
          >
            {lang === "el" ? "Επόμενη γενιά" : "Next generation"}
          </Link>
        </div>
      </header>

      <section id="path" className="scroll-mt-28">
        <h2 className="display text-3xl">
          {lang === "el" ? "Η διαδρομή της Ελλάδας" : "Greece’s path"}
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {greecePath.map((p) => (
            <article key={p.id} className="panel rounded-3xl p-6">
              <h3 className="display text-2xl text-[#f0d78c]">{p.title[lang]}</h3>
              <p className="mt-3 leading-relaxed text-[#d5dceb]">{p.body[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="space-speaks-greek" className="scroll-mt-28 space-y-8">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
            Artemis · Apollo · Orion
          </p>
          <h2 className="display mt-2 text-4xl md:text-5xl">{ui.namesTitle[lang]}</h2>
          <p className="mt-3 text-[#d5dceb]">{ui.namesLead[lang]}</p>
        </header>
        <NameSky />
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((n) => (
            <article key={n.name} className="panel rounded-2xl p-4">
              <p className="font-mono text-xs text-[#7dd3fc]">{n.usedBy}</p>
              <h3 className="display text-2xl text-[#f0d78c]">{n.greek}</h3>
              <p className="text-sm">{n.name}</p>
              <p className="mt-2 text-sm text-[#d5dceb]">{n.what[lang]}</p>
            </article>
          ))}
        </div>
        {rest.length > 0 ? (
          <details className="panel rounded-2xl p-4">
            <summary className="cursor-pointer text-sm text-[#f0d78c]">
              {lang === "el"
                ? `Άλλα ελληνικά ονόματα στον ουρανό (${rest.length})`
                : `More Greek names in the sky (${rest.length})`}
            </summary>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {rest.map((n) => (
                <article
                  key={n.name}
                  className="rounded-xl border border-[var(--line)] p-3"
                >
                  <p className="font-mono text-[10px] text-[#7dd3fc]">{n.usedBy}</p>
                  <h3 className="display text-lg text-[#f0d78c]">{n.greek}</h3>
                  <p className="text-xs">{n.name}</p>
                  <p className="mt-1 text-xs text-[#d5dceb]">{n.what[lang]}</p>
                </article>
              ))}
            </div>
          </details>
        ) : null}
      </section>
    </div>
  );
}
