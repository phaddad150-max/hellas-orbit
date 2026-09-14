"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ExternalLink, RefreshCw } from "lucide-react";
import { leaders } from "@/lib/leaders";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

type FeedItem = {
  title: string;
  link: string;
  date: string;
  source: string;
  missionRelated?: boolean;
};

const TABS = ["nasa", "spacex", "esa", "leaders"] as const;
type Tab = (typeof TABS)[number];

export function OpsBoard() {
  const { lang } = useI18n();
  const [tab, setTab] = useState<Tab>("nasa");
  const [items, setItems] = useState<FeedItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    fetch(`/api/updates?t=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d: { items?: FeedItem[]; updatedAt?: string }) => {
        setItems(d.items ?? []);
        setUpdatedAt(d.updatedAt ?? "");
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
    const id = window.setInterval(load, 5 * 60 * 1000);
    return () => window.clearInterval(id);
  }, [load]);

  const filtered = useMemo(() => {
    if (tab === "leaders") return [];
    const list = items.filter((i) => i.source === tab);
    const related = list.filter((i) => i.missionRelated);
    return (
      related.length
        ? [...related, ...list.filter((i) => !i.missionRelated)]
        : list
    ).slice(0, 10);
  }, [items, tab]);

  const labels: Record<Tab, { el: string; en: string }> = {
    nasa: { el: "NASA", en: "NASA" },
    spacex: { el: "SpaceX", en: "SpaceX" },
    esa: { el: "ESA", en: "ESA" },
    leaders: { el: "Ηγέτες", en: "Leaders" },
  };

  return (
    <div id="ops" className="panel rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
            {ui.opsTitle[lang]}
            <span className="ml-2 font-mono text-[9px] tracking-normal text-[#f0d78c]/80">
              · {lang === "el" ? "κύρια πηγή" : "primary"}
            </span>
          </p>
          <p className="mt-1 text-sm text-[#d5dceb]">{ui.opsLead[lang]}</p>
          {updatedAt ? (
            <p className="mt-1 font-mono text-[10px] text-[#8b95ab]">
              {lang === "el" ? "Ανανεώθηκε" : "Updated"} ·{" "}
              {new Date(updatedAt).toLocaleString(
                lang === "el" ? "el-GR" : "en-GB",
              )}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={load}
          className="rounded-full border border-[var(--line)] p-2 text-[#f0d78c] hover:border-[#d4af37]/50"
          aria-label={lang === "el" ? "Ανανέωση" : "Refresh"}
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-3 py-1 text-[11px] uppercase ${
              tab === t
                ? "bg-[#d4af37] text-[#1a1404]"
                : "border border-[var(--line)] text-[#d5dceb]"
            }`}
          >
            {labels[t][lang]}
          </button>
        ))}
      </div>

      {tab === "leaders" ? (
        <ul className="mt-4 space-y-3">
          {leaders.map((l) => (
            <li key={l.id} className="rounded-xl bg-black/25 p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-[#f0d78c]">{l.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-[#7dd3fc]">
                    {l.org[lang]} · {l.role[lang]}
                  </p>
                </div>
                <div className="flex gap-2">
                  {l.x ? (
                    <a
                      href={l.x}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[#7dd3fc]"
                    >
                      X
                    </a>
                  ) : null}
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#d4af37]"
                    aria-label={l.name}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm text-[#d5dceb]">{l.note[lang]}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 space-y-2">
          {filtered.length === 0 ? (
            <li className="text-sm text-[#8b95ab]">
              {lang === "el" ? "Φόρτωση ενημερώσεων…" : "Loading updates…"}
            </li>
          ) : (
            filtered.map((item) => (
              <li key={item.link + item.title}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl bg-black/25 p-3 hover:bg-black/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-[#f4efe4]">{item.title}</p>
                    {item.missionRelated ? (
                      <span className="shrink-0 rounded-full border border-[#d4af37]/40 px-2 py-0.5 font-mono text-[9px] uppercase text-[#f0d78c]">
                        {lang === "el" ? "σχετικό" : "mission"}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase text-[#8b95ab]">
                    {item.source} · {item.date}
                  </p>
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
