"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Info = {
  count: number;
  liveImages: boolean;
  note: { el: string; en: string };
  source: string;
};

type Status = "loading" | "ready" | "error";

export function StarlinkNote() {
  const { lang } = useI18n();
  const [info, setInfo] = useState<Info | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetch("/api/starlink")
      .then((r) => {
        if (!r.ok) throw new Error("starlink");
        return r.json();
      })
      .then((d: Info) => {
        setInfo(d);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="panel flex h-full flex-col rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
        SpaceX Starlink · TLE
      </p>

      {status === "loading" ? (
        <>
          <p className="display mt-2 text-3xl text-[#8b95ab]">—</p>
          <p className="mt-1 text-xs text-[#8b95ab]">
            {lang === "el" ? "Φόρτωση καταλόγου…" : "Loading catalog…"}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#b7c0d4]">
            {lang === "el"
              ? "Ανάκτηση δημόσιου TLE για τον στόλο Starlink."
              : "Fetching public TLE for the Starlink fleet."}
          </p>
        </>
      ) : null}

      {status === "error" ? (
        <>
          <p className="display mt-2 text-3xl text-[#8b95ab]">—</p>
          <p className="mt-1 text-xs text-amber-400/90">
            {lang === "el" ? "Σήμα προσωρινά μη διαθέσιμο" : "Signal temporarily unavailable"}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#b7c0d4]">
            {lang === "el"
              ? "Δεν ήταν δυνατή η φόρτωση του καταλόγου Starlink. Δοκιμάστε ξανά σε λίγο."
              : "Could not load the Starlink catalog. Try again shortly."}
          </p>
        </>
      ) : null}

      {status === "ready" && info ? (
        <>
          <p className="display mt-2 text-3xl text-[#f0d78c]">
            {info.count.toLocaleString()}
          </p>
          <p className="text-xs text-[#8b95ab]">{info.source}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
            {info.note[lang]}
          </p>
        </>
      ) : null}
    </div>
  );
}
