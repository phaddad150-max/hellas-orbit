import { NextResponse } from "next/server";

/** Public TLEs only — Starlink has no public live Earth cameras. */
export async function GET() {
  try {
    const res = await fetch(
      "https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle",
      { next: { revalidate: 21600 } },
    );
    if (!res.ok) throw new Error("tle");
    const text = await res.text();
    const names = text.match(/^STARLINK[^\n]*/gim) ?? [];
    return NextResponse.json({
      source: "CelesTrak TLE",
      count: names.length,
      liveImages: false,
      note: {
        el: "Τα Starlink έχουν δημόσια TLE (θέση σε τροχιά). Δεν έχουν δημόσια ζωντανή κάμερα Γης.",
        en: "Starlink has public TLEs (where they are). They do not publish a live Earth camera.",
      },
    });
  } catch {
    return NextResponse.json({
      source: "fallback",
      count: 11000,
      liveImages: false,
      note: {
        el: "Χιλιάδες Starlink σε τροχιά (TLE). Όχι ζωντανή εικόνα από τα ίδια τα δορυφόρα.",
        en: "Thousands of Starlink in orbit (TLE). No live picture from those satellites.",
      },
    });
  }
}
