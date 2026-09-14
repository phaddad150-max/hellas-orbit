"use client";

import { useState } from "react";
import { greekNames } from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

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

export function NameSky() {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);
  const item = greekNames[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
      <div className="panel relative min-h-[380px] overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/brand/constellation.jpg)" }}
        />
        <div className="absolute inset-0 bg-[#04070f]/35" />
        {greekNames.map((n, i) => (
          <button
            key={n.name}
            type="button"
            className="star-hit absolute"
            style={{
              left: `${positions[i][0]}%`,
              top: `${positions[i][1]}%`,
            }}
            onClick={() => setActive(i)}
            aria-label={n.greek}
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
        </p>
      </div>
      <div className="panel rounded-2xl p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
          {item.usedBy}
        </p>
        <h3 className="display mt-2 text-4xl text-[#f0d78c]">{item.greek}</h3>
        <p className="mt-1 font-mono text-sm text-[#d5dceb]">{item.name}</p>
        <p className="mt-4 text-sm leading-relaxed text-[#d5dceb]">
          {item.what[lang]}
        </p>
      </div>
    </div>
  );
}
