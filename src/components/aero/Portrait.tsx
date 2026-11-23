import { useEffect, useRef, useState } from "react";

import { useParallax } from "@/hooks/use-parallax";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { assetUrl, initials } from "@/lib/seniors";

import { PlaneGlyph } from "./PlaneGlyph";

interface PortraitProps {
  name: string;
  /** Public asset path; omit for guests so no senior's photo can ever appear. */
  image?: string;
}

type Status = "loading" | "loaded" | "error";

/** Individual portrait with a placeholder underneath; the photo fades in once it loads. */
export function Portrait({ name, image }: PortraitProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<Status>(image ? "loading" : "error");

  useParallax(frameRef, layerRef, 28, !reduced);

  // The image may finish (or fail) before hydration attaches handlers.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;
    setStatus(img.naturalWidth > 0 ? "loaded" : "error");
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[3/4] w-full overflow-hidden bg-navy shadow-portrait"
    >
      <div ref={layerRef} className="absolute inset-0 scale-[1.12] will-change-transform">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-night">
          <div className="grid size-32 place-items-center rounded-full border border-gold/50 sm:size-36">
            {image ? (
              <span className="font-display text-5xl italic text-gold-light sm:text-6xl">
                {initials(name)}
              </span>
            ) : (
              <PlaneGlyph className="h-10 w-12 -rotate-12 text-gold" />
            )}
          </div>
          <p className="label-caps mt-6 text-[0.58rem] text-gold/70">
            {image ? "Portrait arriving soon" : "Aero Club NITTE"}
          </p>
        </div>

        {image && status !== "error" ? (
          <img
            ref={imgRef}
            src={assetUrl(image)}
            alt={`Portrait of ${name}`}
            decoding="async"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: status === "loaded" ? 1 : 0 }}
          />
        ) : null}
      </div>
    </div>
  );
}
