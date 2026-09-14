"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

/** Compact LIVE status + clock — daily-return cue for home / live. */
export function LivePulse({
  compact = false,
  href = "/live",
}: {
  compact?: boolean;
  /** Set null to render as non-link status chip. */
  href?: string | null;
}) {
  const { lang } = useI18n();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const stamp =
    now?.toLocaleTimeString(lang === "el" ? "el-GR" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }) ?? "--:--:--";

  const className =
    "live-pulse-bar inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/35 bg-[#7dd3fc]/08 px-3 py-1.5 transition hover:border-[#7dd3fc]/70 hover:bg-[#7dd3fc]/14";

  const inner = (
    <>
      <span className="live-dot" aria-hidden />
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc]">
        {ui.live[lang]}
      </span>
      {!compact ? (
        <span className="font-mono text-[10px] text-[#8b95ab]">
          {lang === "el" ? "ενημερώθηκε" : "updated"} {stamp}
        </span>
      ) : (
        <span className="font-mono text-[10px] text-[#8b95ab]">{stamp}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
