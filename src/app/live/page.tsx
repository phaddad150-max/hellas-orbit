"use client";

import { EarthLive } from "@/components/earth-live";
import { IssTracker } from "@/components/iss-tracker";
import { LiveStream } from "@/components/live-stream";
import { OpsBoard } from "@/components/ops-board";
import { StarlinkNote } from "@/components/starlink-note";
import { useI18n } from "@/lib/i18n";

export default function LivePage() {
  const { lang } = useI18n();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="display text-4xl md:text-5xl">
          {lang === "el" ? "Ζωντανά" : "Live"}
        </h1>
        <p className="mt-2 max-w-xl text-[#d5dceb]">
          {lang === "el"
            ? "Γη από NOAA GOES, κάμερες ISS, θέση σταθμού."
            : "Earth from NOAA GOES, ISS cameras, station position."}
        </p>
      </header>

      <EarthLive />
      <LiveStream />

      <div className="grid gap-6 lg:grid-cols-2">
        <IssTracker />
        <StarlinkNote />
      </div>

      <OpsBoard />
    </div>
  );
}
