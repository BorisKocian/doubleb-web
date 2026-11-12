"use client";

import { useEffect, useRef } from "react";

const GRID = 34;
const DOT_W = 6;
const DOT_H = 6;
const PILL_W = 20;
const PILL_H = 6;
const STROKE = 0.6;
const BASE_ALPHA = 0.016;
const CURSOR_R = 210;
const CURSOR_BOOST = 0.25;

function isPill(row: number, col: number) {
  return (row * 7 + col * 11) % 5 === 0;
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cursorX = -9999;
    let cursorY = -9999;
    let rafPending = false;
    let isTouch = false;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function draw() {
      if (!canvas || !ctx) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = STROKE;

      const cols = Math.ceil(W / GRID) + 2;
      const rows = Math.ceil(H / GRID) + 2;
      const offX = -GRID;
      const offY = -GRID;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pill = isPill(r, c);
          const x = offX + c * GRID;
          const y = offY + r * GRID;
          const cx = x + (pill ? PILL_W / 2 : DOT_W / 2);
          const cy = y + DOT_H / 2;

          const dist = Math.hypot(cx - cursorX, cy - cursorY);
          const proximity = Math.max(0, 1 - dist / CURSOR_R);
          const alpha = BASE_ALPHA + proximity * CURSOR_BOOST;

          const w = pill ? PILL_W : DOT_W;
          const h = pill ? PILL_H : DOT_H;

          if (proximity > 0.01 && !isTouch) {
            ctx.strokeStyle = `rgba(0,255,0,${alpha})`;
          } else {
            ctx.strokeStyle = `rgba(232,234,232,${alpha})`;
          }

          ctx.beginPath();
          ctx.roundRect(x, y, w, h, h / 2);
          ctx.stroke();
        }
      }
      rafPending = false;
    }

    function scheduleRedraw() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(draw);
    }

    function onPointerMove(e: PointerEvent) {
      if (prefersReduced) return;
      if (e.pointerType === "touch") {
        isTouch = true;
        return;
      }
      isTouch = false;
      cursorX = e.clientX;
      cursorY = e.clientY;
      scheduleRedraw();
    }

    function onPointerLeave() {
      cursorX = -9999;
      cursorY = -9999;
      scheduleRedraw();
    }

    resize();

    if (!prefersReduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    }
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="db-canvas" aria-hidden="true" />;
}
