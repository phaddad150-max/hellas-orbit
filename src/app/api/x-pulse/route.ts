import { NextResponse } from "next/server";

/**
 * Live X pulse when X_BEARER_TOKEN is set.
 * Never copies Elenchos 9-question analysis — volume + theme chips only.
 */
export async function GET() {
  const token = process.env.X_BEARER_TOKEN;
  if (!token) {
    return NextResponse.json({
      source: "seed",
      volume: 0,
      languages: { el: 0, en: 0 },
      themes: [
        { el: "Υπερηφάνεια", en: "Pride" },
        { el: "Γιατρός από τη Λάρισα", en: "Doctor from Larissa" },
        { el: "Δορυφόροι / εργοστάσιο", en: "Satellites / factory" },
        { el: "Πότε πετάει;", en: "When does he fly?" },
      ],
      summary: {
        el: "Ο δημόσιος παλμός θα γεμίσει όταν συνδεθεί το X API.",
        en: "The public pulse fills when the X API is connected.",
      },
    });
  }

  const query =
    '("Golemis" OR "Γολέμης" OR "first Greek astronaut" OR "πρώτος Έλληνας αστροναύτης") -is:retweet';
  try {
    const url = new URL("https://api.x.com/2/tweets/search/recent");
    url.searchParams.set("query", query);
    url.searchParams.set("max_results", "20");
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("x");
    const data = (await res.json()) as { meta?: { result_count?: number } };
    const n = data.meta?.result_count ?? 0;
    return NextResponse.json({
      source: "live",
      volume: n,
      languages: { el: 0, en: 0 },
      themes: [
        { el: "Υπερηφάνεια", en: "Pride" },
        { el: "Εκπαίδευση", en: "Training" },
        { el: "ISS 2027", en: "ISS 2027" },
      ],
      summary: {
        el: `Περίπου ${n} πρόσφατες δημόσιες αναφορές στο X για την αποστολή (χωρίς ρητορικά αποσπάσματα).`,
        en: `About ${n} recent public X mentions of the mission (no quoted posts on this wall).`,
      },
    });
  } catch {
    return NextResponse.json({
      source: "seed",
      volume: 0,
      languages: { el: 0, en: 0 },
      themes: [{ el: "Αναμονή σήματος X", en: "Waiting on X signal" }],
      summary: {
        el: "Το X API δεν απάντησε αυτή τη φορά.",
        en: "The X API did not answer this time.",
      },
    });
  }
}
