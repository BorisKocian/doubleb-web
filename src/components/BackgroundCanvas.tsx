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
// Mobil: žiara pod prstom (ťuknutie aj scroll). Silnejšia a s hrubšou čiarou než kurzor,
// lebo stred zakrýva prst a na malom displeji by tenké obrysy neboli vidno.
const TOUCH_R = 150;
const TOUCH_BOOST = 0.55;
const TOUCH_STROKE = 1.2;
const INTERACTIVE = "a,button,input,textarea,select,label,summary,[role='button'],[role='tab']";

// Tokeny trvania v ms. Minifikátor CSS ich v builde prepíše na sekundy (240ms → .24s).
function durationMs(styles: CSSStyleDeclaration, name: string, fallback: number) {
  const raw = styles.getPropertyValue(name).trim();
  const value = parseFloat(raw);
  if (Number.isNaN(value)) return fallback;
  return raw.endsWith("ms") ? value : raw.endsWith("s") ? value * 1000 : value;
}

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

    // Žiara pod prstom: drží sa, kým je prst na displeji a kým stránka po švihnutí ešte ide.
    // Potom ostane --dur-mid a za --dur-slow dohasne.
    const styles = getComputedStyle(canvas);
    const holdMs = durationMs(styles, "--dur-mid", 240);
    const fadeMs = durationMs(styles, "--dur-slow", 560);
    let touchX = -9999;
    let touchY = -9999;
    let touchDown = false;
    let touchReleasedAt = 0;
    let touchGlow = 0;

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

      if (touchDown) {
        touchGlow = 1;
      } else if (touchGlow > 0) {
        const t = Math.min(1, Math.max(0, performance.now() - touchReleasedAt - holdMs) / fadeMs);
        touchGlow = (1 - t) * (1 - t);
      }

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

          const proximity = isTouch
            ? 0
            : Math.max(0, 1 - Math.hypot(cx - cursorX, cy - cursorY) / CURSOR_R);
          const touchProximity = touchGlow > 0
            ? Math.max(0, 1 - Math.hypot(cx - touchX, cy - touchY) / TOUCH_R) * touchGlow
            : 0;
          const boost = proximity * CURSOR_BOOST + touchProximity * TOUCH_BOOST;
          const alpha = BASE_ALPHA + boost;

          const w = pill ? PILL_W : DOT_W;
          const h = pill ? PILL_H : DOT_H;

          if (boost > 0.0025) {
            ctx.strokeStyle = `rgba(0,255,0,${alpha})`;
          } else {
            ctx.strokeStyle = `rgba(232,234,232,${alpha})`;
          }

          ctx.lineWidth = touchProximity > 0.01 ? TOUCH_STROKE : STROKE;
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, h / 2);
          ctx.stroke();
        }
      }
      rafPending = false;
      // Kým žiara dohasína, kreslí sa ďalej; potom slučka stojí.
      if (!touchDown && touchGlow > 0) scheduleRedraw();
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

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      isTouch = true;
      const target = e.target instanceof Element ? e.target : null;
      if (target?.closest(INTERACTIVE)) return;
      touchDown = true;
      touchX = t.clientX;
      touchY = t.clientY;
      scheduleRedraw();
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      touchDown = true;
      touchX = t.clientX;
      touchY = t.clientY;
      scheduleRedraw();
    }

    function onTouchEnd(e: TouchEvent) {
      if (e.touches.length > 0 || !touchDown) return;
      touchDown = false;
      touchReleasedAt = performance.now();
      scheduleRedraw();
    }

    function onScroll() {
      // Dobeh po švihnutí: kým sa stránka hýbe, žiara nezačne dohasínať.
      if (!touchDown && touchGlow > 0) touchReleasedAt = performance.now();
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
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      window.addEventListener("touchcancel", onTouchEnd, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="db-canvas" aria-hidden="true" />;
}
