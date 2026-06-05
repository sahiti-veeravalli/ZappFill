import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number };

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pts: Pt[] = [];
    let raf = 0;

    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark
        ? { dot: "rgba(180, 200, 255, 0.36)", line: "180, 200, 255", mouse: "200, 220, 255", lineMul: 0.52, mouseMul: 0.64 }
        : { dot: "rgba(70, 40, 180, 0.36)", line: "80, 50, 190", mouse: "80, 50, 190", lineMul: 0.88, mouseMul: 0.8 };
    };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.floor((w * h) / 11000);
      const count = Math.max(60, Math.min(160, density));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => { mouse.current.active = false; };

    const tick = () => {
      const { dot, line, mouse: mc, lineMul, mouseMul } = getColors();
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const mActive = mouse.current.active;

      // update + draw points
      for (const p of pts) {
        if (mActive) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140 && d2 > 0.001) {
            const f = (1 - Math.sqrt(d2) / 140) * 0.6;
            p.vx += (dx / Math.sqrt(d2)) * f;
            p.vy += (dy / Math.sqrt(d2)) * f;
          }
        }
        p.vx *= 0.96;
        p.vy *= 0.96;
        // base drift
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x += w; else if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h; else if (p.y > h) p.y -= h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = dot;
        ctx.fill();
      }

      // connections
      const maxDist = 130;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = Math.min(1, (1 - d / maxDist) * 0.28 * lineMul);
            ctx.strokeStyle = `rgba(${line}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse connections + halo
      if (mActive) {
        for (const p of pts) {
          const dx = p.x - mx, dy = p.y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            const alpha = Math.min(1, (1 - d / 180) * 0.6 * mouseMul);
            ctx.strokeStyle = `rgba(${mc}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        grd.addColorStop(0, `rgba(${mc}, 0.35)`);
        grd.addColorStop(1, `rgba(${mc}, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(mx, my, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] h-full w-full"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
