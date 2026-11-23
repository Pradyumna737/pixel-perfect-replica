import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { PLANE_PATH } from "./PlaneGlyph";

const ROUTE = "M -60 520 C 200 560, 330 330, 560 350 S 900 210, 1020 170 S 1180 90, 1280 60";

/** Dotted flight path across the opening scene with a gold airliner gliding along it. */
export function FlightPath() {
  const reduced = useReducedMotion();

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-gold opacity-60 sm:opacity-100"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="route-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.2" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="0.85" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint meridians — a quiet nod to navigation charts */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1">
        <circle cx="980" cy="120" r="260" />
        <ellipse cx="980" cy="120" rx="130" ry="260" />
        <ellipse cx="980" cy="120" rx="260" ry="90" />
        <line x1="720" y1="120" x2="1240" y2="120" />
      </g>

      <path
        id="flight-route"
        d={ROUTE}
        fill="none"
        stroke="url(#route-fade)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 11"
        className="animate-dash-drift"
      />

      {reduced ? (
        <g transform="translate(860 228) rotate(-22) scale(1.1)">
          <path d={PLANE_PATH} fill="currentColor" />
        </g>
      ) : (
        <g>
          <g transform="scale(1.1)">
            <path d={PLANE_PATH} fill="currentColor" />
          </g>
          <animateMotion
            dur="16s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keyPoints="0;1"
            keyTimes="0;1"
            keySplines="0.45 0 0.55 1"
          >
            <mpath href="#flight-route" />
          </animateMotion>
        </g>
      )}
    </svg>
  );
}
