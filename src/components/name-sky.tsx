"use client";

import { useMemo, useState } from "react";
import { greekNames } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

type NameItem = (typeof greekNames)[number];

const positions = [
  [18, 22],
  [42, 14],
  [68, 20],
  [84, 38],
  [72, 58],
  [50, 48],
  [28, 55],
  [12, 70],
  [38, 78],
  [60, 76],
  [82, 72],
  [90, 18],
  [8, 40],
  [55, 30],
  [33, 34],
  [76, 44],
];

type NameSkyProps = {
  names?: NameItem[];
  /** split = sky + detail card; sky = full-bleed stars only (no second card) */
  variant?: "split" | "sky";
  onSelect?: (name: NameItem) => void;
};

export function NameSky({
  names,
  variant = "split",
  onSelect,
}: NameSkyProps) {
  const { lang } = useI18n();
  const list = names?.length ? names : greekNames;
  const [active, setActive] = useState(variant === "sky" ? -1 : 0);
  const item =
    active >= 0 ? list[Math.min(active, list.length - 1)] : undefined;

  const stars = useMemo(
    () =>
      list.map((n, i) => ({
        n,
        i,
        left: positions[i % positions.length][0],
        top: positions[i % positions.length][1],
      })),
    [list],
  );

  function select(i: number) {
    setActive(i);
    onSelect?.(list[i]);
  }

  const sky = (
    <div
      className={
        variant === "sky"
          ? "relative min-h-[420px] w-full overflow-hidden md:min-h-[480px]"
          : "panel relative min-h-[380px] overflow-hidden rounded-2xl"
      }
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: "url(/brand/constellation.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#04070f]/35" />
      {stars.map(({ n, i, left, top }) => (
        <button
          key={n.name}
          type="button"
          className="star-hit absolute"
          style={{ left: `${left}%`, top: `${top}%` }}
          onClick={() => select(i)}
          aria-label={n.greek}
          aria-pressed={active === i}
        >
          <span
            className={`block h-2.5 w-2.5 rounded-full ${
              active === i ? "bg-[#f0d78c] pulse-gold" : "bg-white/80 twinkle"
            }`}
          />
        </button>
      ))}
      <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-[#f0d78c]">
        {ui.tapStar[lang]}
        {item ? ` · ${item.greek}` : ""}
      </p>
    </div>
  );

  if (variant === "sky") {
    return sky;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
      {sky}
      <div className="panel rounded-2xl p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
          {item?.usedBy}
        </p>
        <h3 className="display mt-2 text-4xl text-[#f0d78c]">{item?.greek}</h3>
        <p className="mt-1 font-mono text-sm text-[#d5dceb]">{item?.name}</p>
        <p className="mt-4 text-sm leading-relaxed text-[#d5dceb]">
          {item?.what[lang]}
        </p>
      </div>
    </div>
  );
}
