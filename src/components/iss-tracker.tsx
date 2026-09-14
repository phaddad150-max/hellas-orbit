"use client";

import { useEffect, useState } from "react";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

type Iss = {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
};

export function IssTracker() {
  const { lang } = useI18n();
  const [iss, setIss] = useState<Iss | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544",
        );
        if (!res.ok) throw new Error("iss");
        const data = (await res.json()) as Iss;
        if (alive) {
          setIss(data);
          setError(false);
        }
      } catch {
        if (alive) setError(true);
      }
    };
    load();
    const id = window.setInterval(load, 8000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  const x = iss ? (iss.longitude + 180) / 360 : 0.5;
  const y = iss ? (90 - iss.latitude) / 180 : 0.45;

  return (
    <div className="panel overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
          {ui.live[lang]} · {ui.issNow[lang]}
        </p>
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      </div>
      <div className="relative mx-4 mb-4 aspect-[2/1] overflow-hidden rounded-xl bg-[#071018]">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, #123a6a 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, #1a6fd4 0 1px, transparent 1px)",
            backgroundSize: "18px 18px, 28px 28px",
          }}
        />
        <div className="absolute inset-[12%] rounded-[50%] border border-[#1a6fd4]/40" />
        <div className="absolute left-[48%] top-[42%] h-2 w-2 rounded-full bg-[#d4af37]" />
        {iss && (
          <div
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white shadow-[0_0_16px_#7dd3fc]"
            style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
          />
        )}
        <p className="absolute bottom-2 left-3 font-mono text-[10px] text-[#b7c0d4]">
          {error
            ? lang === "el"
              ? "Σήμα ISS μη διαθέσιμο"
              : "ISS signal unavailable"
            : iss
              ? `${iss.latitude.toFixed(1)}°, ${iss.longitude.toFixed(1)}°`
              : "…"}
        </p>
      </div>
      {iss && (
        <div className="grid grid-cols-2 gap-2 px-4 pb-4 text-xs md:grid-cols-4">
          <Metric label={ui.lat[lang]} value={`${iss.latitude.toFixed(2)}°`} />
          <Metric label={ui.lon[lang]} value={`${iss.longitude.toFixed(2)}°`} />
          <Metric
            label={ui.alt[lang]}
            value={`${iss.altitude.toFixed(0)} km`}
          />
          <Metric
            label={ui.vel[lang]}
            value={`${iss.velocity.toFixed(0)} km/h`}
          />
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-black/25 px-2 py-2">
      <div className="text-[10px] uppercase tracking-[0.16em] text-[#b7c0d4]">
        {label}
      </div>
      <div className="font-mono text-sm text-[#f0d78c]">{value}</div>
    </div>
  );
}
