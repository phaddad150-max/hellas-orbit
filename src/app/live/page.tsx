"use client";

import { IssTracker } from "@/components/iss-tracker";
import { LiveStream } from "@/components/live-stream";
import { OpsBoard } from "@/components/ops-board";
import { StarlinkNote } from "@/components/starlink-note";
import { XPulse } from "@/components/x-pulse";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export default function LivePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
          {ui.live[lang]}
        </p>
        <h1 className="display mt-2 text-5xl">
          {lang === "el" ? "Ουρανός τώρα" : "Sky now"}
        </h1>
        <p className="mt-3 max-w-2xl text-[#d5dceb]">{ui.opsLead[lang]}</p>
      </header>

      <LiveStream />

      <div className="grid gap-6 lg:grid-cols-2">
        <IssTracker />
        <StarlinkNote />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <OpsBoard />
        <XPulse />
      </div>
    </div>
  );
}
