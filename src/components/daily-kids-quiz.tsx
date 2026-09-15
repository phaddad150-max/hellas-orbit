"use client";

import { useMemo, useState } from "react";
import {
  athensCalendarDate,
  dailyQuizFor,
} from "@/lib/data";
import { ui } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Phase = "ask" | "feedback" | "done";

export function DailyKidsQuiz() {
  const { lang } = useI18n();
  const dayKey = useMemo(() => athensCalendarDate(), []);
  const questions = useMemo(() => dailyQuizFor(dayKey, 4), [dayKey]);
  const [run, setRun] = useState(0);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("ask");
  const [score, setScore] = useState(0);

  const total = questions.length;
  const current = questions[index];

  function reset() {
    setRun((r) => r + 1);
    setIndex(0);
    setPicked(null);
    setPhase("ask");
    setScore(0);
  }

  function choose(optionIndex: number) {
    if (phase !== "ask" || !current) return;
    setPicked(optionIndex);
    if (optionIndex === current.answer) setScore((s) => s + 1);
    setPhase("feedback");
  }

  function next() {
    if (index + 1 >= total) {
      setPhase("done");
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    setPhase("ask");
  }

  if (!total || !current) return null;

  return (
    <section
      key={run}
      className="cinema-stage overflow-hidden rounded-3xl"
      aria-labelledby="daily-kids-quiz-title"
    >
      <div className="cinema-stage-bar">
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#7dd3fc]">
          <span className="live-dot" aria-hidden />
          {ui.quizTitle[lang]}
        </p>
        <p className="font-mono text-[10px] text-[#8b95ab]">
          {dayKey} · {index + 1}/{total}
        </p>
      </div>

      <div className="relative bg-gradient-to-b from-[#0a1224] to-[#04070f] p-5 md:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-2" aria-hidden>
          {questions.map((q, i) => (
            <span
              key={q.id}
              className={cn(
                "h-2 w-2 rounded-full transition",
                i < index
                  ? "bg-[#d4af37]"
                  : i === index
                    ? "bg-[#7dd3fc] pulse-gold"
                    : "bg-white/20",
              )}
            />
          ))}
        </div>

        {phase !== "done" ? (
          <>
            <h2
              id="daily-kids-quiz-title"
              className="display text-2xl text-[#f0d78c] md:text-3xl"
            >
              {current.q[lang]}
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {current.options[lang].map((opt, i) => {
                const isPick = picked === i;
                const isAnswer = i === current.answer;
                const show = phase === "feedback";
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      disabled={phase !== "ask"}
                      onClick={() => choose(i)}
                      className={cn(
                        "w-full rounded-2xl border px-4 py-3 text-left text-sm transition",
                        phase === "ask" &&
                          "border-[var(--line)] text-[#d5dceb] hover:border-[#d4af37]/60 hover:bg-white/5",
                        show &&
                          isAnswer &&
                          "border-[#22c55e]/70 bg-[#22c55e]/10 text-[#f0fdf4]",
                        show &&
                          isPick &&
                          !isAnswer &&
                          "border-[#f87171]/60 bg-[#f87171]/10 text-[#fee2e2]",
                        show &&
                          !isPick &&
                          !isAnswer &&
                          "border-[var(--line)] opacity-50",
                      )}
                    >
                      <span className="mr-2 font-mono text-[10px] text-[#7dd3fc]">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>

            {phase === "feedback" ? (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[#d5dceb]">
                  {picked === current.answer
                    ? lang === "el"
                      ? "Σωστά — συνέχισε!"
                      : "Correct — keep going!"
                    : lang === "el"
                      ? "Όχι αυτή τη φορά — η σωστή είναι σημειωμένη."
                      : "Not this time — the right one is marked."}
                </p>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full bg-[#d4af37] px-5 py-2 text-sm text-[#1a1404]"
                >
                  {index + 1 >= total
                    ? ui.score[lang]
                    : ui.nextQ[lang]}
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">
              {ui.score[lang]}
            </p>
            <p className="display glow mt-2 text-5xl text-[#f0d78c] md:text-6xl">
              {score}/{total}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f0d78c]">
              <span aria-hidden>★</span> {ui.sticker[lang]}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-[var(--line)] px-5 py-2 text-sm text-[#d5dceb] hover:border-[#d4af37]/50"
              >
                {ui.again[lang]}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
