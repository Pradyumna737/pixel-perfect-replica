/** Minimal top-down airliner silhouette, nose pointing along +x, centred on 0,0. */
export const PLANE_PATH =
  "M19 0 C19 -1.4 17 -2 14 -2 L5 -2 L-3 -15 L-7 -15 L-2 -2 L-10 -2 L-14 -7.5 L-17 -7.5 L-14.5 0 L-17 7.5 L-14 7.5 L-10 2 L-2 2 L-7 15 L-3 15 L5 2 L14 2 C17 2 19 1.4 19 0 Z";

export function PlaneGlyph({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="-20 -16 40 32"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={PLANE_PATH} fill="currentColor" />
    </svg>
  );
}
