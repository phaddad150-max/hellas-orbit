import { NextResponse } from "next/server";

type EpicRow = { image: string; date: string };

export async function GET() {
  try {
    const res = await fetch("https://epic.gsfc.nasa.gov/api/natural", {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("epic");
    const rows = (await res.json()) as EpicRow[];
    const last = rows.at(-1) ?? rows[0];
    if (!last) throw new Error("empty");
    const day = last.date.slice(0, 10).replaceAll("-", "/");
    const url = `https://epic.gsfc.nasa.gov/archive/natural/${day}/png/${last.image}.png`;
    return NextResponse.json({ url, date: last.date, source: "NASA EPIC" });
  } catch {
    return NextResponse.json({ url: null, source: "NASA EPIC" }, { status: 502 });
  }
}
