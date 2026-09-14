import { NextResponse } from "next/server";

type Item = {
  title: string;
  link: string;
  date: string;
  source: string;
  missionRelated?: boolean;
};

const FEEDS: { source: string; url: string }[] = [
  { source: "nasa", url: "https://blogs.nasa.gov/spacestation/feed/" },
  { source: "nasa", url: "https://blogs.nasa.gov/commercialcrew/feed/" },
  { source: "nasa", url: "https://www.nasa.gov/missions/station/feed/" },
  {
    source: "esa",
    url: "https://www.esa.int/rssfeed/Our_Activities/Human_and_Robotic_Exploration",
  },
];

const SPACEX_FALLBACK: Item[] = [
  {
    source: "spacex",
    title: "SpaceX launches — Falcon 9 / Dragon schedule",
    link: "https://www.spacex.com/launches/",
    date: new Date().toISOString().slice(0, 10),
    missionRelated: true,
  },
  {
    source: "spacex",
    title: "SpaceX updates on X",
    link: "https://x.com/SpaceX",
    date: new Date().toISOString().slice(0, 10),
    missionRelated: true,
  },
  {
    source: "spacex",
    title: "Crew Dragon overview",
    link: "https://www.spacex.com/vehicles/dragon/",
    date: new Date().toISOString().slice(0, 10),
    missionRelated: true,
  },
];

const MISSION_RE =
  /dragon|falcon|crew-?\d|iss|station|commercial crew|vast|pam-?6|astronaut|splashdown|dock|undock|crew|launch/i;

function parseRss(xml: string, source: string): Item[] {
  const items: Item[] = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1);
  for (const block of blocks.slice(0, 10)) {
    const title = text(block, "title");
    const link = text(block, "link") || attr(block, "guid");
    const date = text(block, "pubDate") || text(block, "updated");
    if (title && link) {
      const cleanTitle = decode(title).slice(0, 180);
      items.push({
        title: cleanTitle,
        link: decode(link).trim(),
        date: date ? new Date(date).toISOString().slice(0, 10) : "",
        source,
        missionRelated: MISSION_RE.test(cleanTitle),
      });
    }
  }
  return items;
}

function text(block: string, tag: string) {
  const m =
    block.match(
      new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i"),
    ) || block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return m?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
}

function attr(block: string, tag: string) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`, "i"));
  return m?.[1]?.trim() ?? "";
}

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function GET() {
  const collected: Item[] = [...SPACEX_FALLBACK];
  await Promise.all(
    FEEDS.map(async (feed) => {
      try {
        const res = await fetch(feed.url, {
          next: { revalidate: 300 },
          headers: { Accept: "application/rss+xml, application/xml, text/xml" },
        });
        if (!res.ok) return;
        const xml = await res.text();
        collected.push(...parseRss(xml, feed.source));
      } catch {
        /* keep going */
      }
    }),
  );

  collected.sort((a, b) => {
    const rel = Number(!!b.missionRelated) - Number(!!a.missionRelated);
    if (rel !== 0) return rel;
    return (b.date || "").localeCompare(a.date || "");
  });

  return NextResponse.json({
    items: collected.slice(0, 36),
    updatedAt: new Date().toISOString(),
  });
}
