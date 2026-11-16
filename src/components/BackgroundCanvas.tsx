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
// Mobil: každý dotyk (ťuknutie aj začiatok scrollu) pustí krátku vlnu. Stred zakrýva prst,
// preto má vlna hrubšiu čiaru než kurzor a počas dohasínania sa rozšíri.
const TOUCH_R = 150;
const TOUCH_R_START = 0.7;
const TOUCH_BOOST = 0.38;
const TOUCH_STROKE = 1;
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

    // Vlna: nábeh za --dur-fast, dohasnutie za --dur-slow. Je rovnaká pri ťuknutí aj pri
    // scrollovaní a nezávisí od toho, ako dlho prst drží. Nový dotyk ju pustí znova od
    // aktuálnej úrovne, takže opakované švihnutia z jedného miesta neblikajú.
    const styles = getComputedStyle(canvas);
    const riseMs = durationMs(styles, "--dur-fast", 120);
    const fadeMs = durationMs(styles, "--dur-slow", 560);
    let touchX = -9999;
    let touchY = -9999;
    let waveStart = -Infinity;
    let waveFrom = 0;
    let wavePending = false;
    let touchGlow = 0;
    let touchR = TOUCH_R;

    function waveLevel(now: number) {
      const t = now - waveStart;
      if (t < 0 || t >= riseMs + fadeMs) return 0;
      if (t < riseMs) {
        const k = t / riseMs;
        return waveFrom + (1 - waveFrom) * (1 - (1 - k) * (1 - k));
      }
      const k = 1 - (t - riseMs) / fadeMs;
      return k * k;
    }

    function startWave(x: number, y: number) {
      const now = performance.now();
      waveFrom = waveLevel(now);
      waveStart = now;
      touchX = x;
      touchY = y;
      scheduleRedraw();
    }

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

      const now = performance.now();
      touchGlow = waveLevel(now);
      const progress = Math.min(1, Math.max(0, (now - waveStart) / (riseMs + fadeMs)));
      touchR = TOUCH_R * (TOUCH_R_START + (1 - TOUCH_R_START) * progress);

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
            ? Math.max(0, 1 - Math.hypot(cx - touchX, cy - touchY) / touchR) * touchGlow
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
      // Kým vlna beží, kreslí sa ďalej; potom slučka stojí.
      if (touchGlow > 0) scheduleRedraw();
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
      // Ťuknutie na odkaz či tlačidlo vlnu nepustí, scroll začatý na ňom áno.
      if (target?.closest(INTERACTIVE)) {
        wavePending = true;
        return;
      }
      wavePending = false;
      startWave(t.clientX, t.clientY);
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      if (wavePending) {
        wavePending = false;
        startWave(t.clientX, t.clientY);
        return;
      }
      // Vlna ide za prstom, kým beží; pohyb prsta ju nepredĺži.
      if (touchGlow <= 0) return;
      touchX = t.clientX;
      touchY = t.clientY;
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
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
    }
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="db-canvas" aria-hidden="true" />;
}
