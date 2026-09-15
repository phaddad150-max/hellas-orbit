"use client";

import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export function Sheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const { lang } = useI18n();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label={ui.close[lang]}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal
        className="relative z-10 w-full max-w-lg rounded-t-3xl border border-[var(--line)] bg-[#0a1424] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:rounded-3xl"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="display text-2xl text-[#f0d78c]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 rounded-full border border-[var(--line)] px-3 text-sm text-[#d5dceb]"
          >
            {ui.close[lang]}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
