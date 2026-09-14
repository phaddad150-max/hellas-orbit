"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Info = {
  count: number;
  liveImages: boolean;
  note: { el: string; en: string };
  source: string;
};

export function StarlinkNote() {
  const { lang } = useI18n();
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    fetch("/api/starlink")
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => {});
  }, []);

  if (!info) return null;

  return (
    <div className="panel rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
        SpaceX Starlink · TLE
      </p>
      <p className="display mt-2 text-3xl text-[#f0d78c]">
        {info.count.toLocaleString()}
      </p>
      <p className="text-xs text-[#8b95ab]">{info.source}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#d5dceb]">
        {info.note[lang]}
      </p>
    </div>
  );
}
