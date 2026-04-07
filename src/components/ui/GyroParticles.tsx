import { useEffect, useRef, memo } from "react";

interface GyroParticlesProps {
  className?: string;
  count?: number;
  color?: string;
}

const GyroParticles = memo(({ className = "", count = 20, color = "0, 102, 204" }: GyroParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gyroRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<{ x: number; y: number; size: number; baseX: number; baseY: number; opacity: number; speed: number }[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      sizeRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      const { w, h } = sizeRef.current;
      particlesRef.current = Array.from({ length: count }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x, y,
          baseX: x,
          baseY: y,
          size: 1.5 + Math.random() * 2.5,
          opacity: 0.15 + Math.random() * 0.35,
          speed: 0.5 + Math.random() * 1.5,
        };
      });
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const beta = Math.max(-30, Math.min(30, e.beta || 0));
      const gamma = Math.max(-30, Math.min(30, e.gamma || 0));
      gyroRef.current = { x: gamma / 30, y: beta / 30 };
    };

    let fallbackTimer: number;
    let hasGyro = false;

    const startFallback = () => {
      let t = 0;
      const tick = () => {
        t += 0.005;
        gyroRef.current = {
          x: Math.sin(t) * 0.3,
          y: Math.cos(t * 0.7) * 0.3,
        };
        fallbackTimer = requestAnimationFrame(tick);
      };
      fallbackTimer = requestAnimationFrame(tick);
    };

    const draw = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);
      const gyro = gyroRef.current;
      const maxShift = 30;

      for (const p of particlesRef.current) {
        p.x = p.baseX + gyro.x * maxShift * p.speed;
        p.y = p.baseY + gyro.y * maxShift * p.speed;
        p.baseY += Math.sin(Date.now() * 0.001 * p.speed) * 0.1;

        if (p.baseY < -10) p.baseY = h + 10;
        if (p.baseY > h + 10) p.baseY = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    initParticles();

    if (typeof DeviceOrientationEvent !== "undefined") {
      const handler = (e: DeviceOrientationEvent) => {
        if (e.beta !== null || e.gamma !== null) {
          hasGyro = true;
          cancelAnimationFrame(fallbackTimer);
        }
        handleOrientation(e);
      };
      window.addEventListener("deviceorientation", handler);
      setTimeout(() => {
        if (!hasGyro) startFallback();
      }, 500);

      rafRef.current = requestAnimationFrame(draw);
      window.addEventListener("resize", resize);

      return () => {
        cancelAnimationFrame(rafRef.current);
        cancelAnimationFrame(fallbackTimer);
        window.removeEventListener("deviceorientation", handler);
        window.removeEventListener("resize", resize);
      };
    } else {
      startFallback();
      rafRef.current = requestAnimationFrame(draw);
      window.addEventListener("resize", resize);

      return () => {
        cancelAnimationFrame(rafRef.current);
        cancelAnimationFrame(fallbackTimer);
        window.removeEventListener("resize", resize);
      };
    }
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
});

GyroParticles.displayName = "GyroParticles";

export default GyroParticles;
