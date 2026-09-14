"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; r: number; s: number; a: number }[] =
      [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars.length = 0;
      const count = Math.min(220, Math.floor((w * h) / 14000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.4 + 0.2,
          s: Math.random() * 0.6 + 0.2,
          a: Math.random() * Math.PI * 2,
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / w;
      my = e.clientY / h;
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const star of stars) {
        const par = (star.s - 0.2) * 18;
        const x = star.x * w + (mx - 0.5) * par;
        const y = star.y * h + (my - 0.5) * par;
        const tw = 0.45 + 0.55 * Math.sin(t * 0.001 * star.s + star.a);
        ctx.beginPath();
        ctx.fillStyle = `rgba(240, 215, 140, ${tw})`;
        ctx.arc(x, y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
