import { memo } from "react";

// Stacked square contours twist around a shared axis to form the Kubo sculpture.
const contours = Array.from({ length: 46 }, (_, layer) => {
  const t = layer / 45;
  const angle = (t - 0.5) * 1.55;
  const radius = 165 + 26 * Math.sin(t * Math.PI);
  const points = Array.from({ length: 129 }, (_, step) => {
    const a = (step / 128) * Math.PI * 2;
    const x =
      Math.sign(Math.cos(a)) * Math.pow(Math.abs(Math.cos(a)), 0.38) * radius;
    const z =
      Math.sign(Math.sin(a)) * Math.pow(Math.abs(Math.sin(a)), 0.38) * radius;
    const rx = x * Math.cos(angle) - z * Math.sin(angle);
    const rz = x * Math.sin(angle) + z * Math.cos(angle);
    return `${(350 + rx * 1.15 + rz * 0.34).toFixed(1)},${(355 + (t - 0.5) * 320 + rz * 0.48 - rx * 0.16).toFixed(1)}`;
  });
  return `M${points.join(" L")} Z`;
});

const LineSculpture = () => (
  <div className="kw-sculpture" aria-hidden="true">
    <svg viewBox="0 0 700 700" fill="none">
      <defs>
        <linearGradient
          id="kubo-thread"
          x1="100"
          y1="100"
          x2="570"
          y2="630"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#eeeeff" />
          <stop offset=".5" stopColor="#a6a0ff" />
          <stop offset="1" stopColor="#525099" />
        </linearGradient>
      </defs>
      {contours.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="url(#kubo-thread)"
          strokeWidth={i % 8 === 0 ? 1.3 : 0.65}
          opacity={i % 8 === 0 ? 0.9 : 0.5}
        />
      ))}
    </svg>
  </div>
);
export default memo(LineSculpture);
