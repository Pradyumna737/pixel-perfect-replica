
import { useEffect, useRef, useState } from "react";

import { useParallax } from "@/hooks/use-parallax";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { assetUrl, initials } from "@/lib/seniors";

import { PlaneGlyph } from "./PlaneGlyph";

interface PortraitProps {
  name: string;
  image?: string;
  portraitScale?: number;
  portraitOffsetY?: number;
}

type Status = "loading" | "loaded" | "error";

export function Portrait({
  name,
  image,
  portraitScale = 1,
  portraitOffsetY = 0,
}: PortraitProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();

  const [status, setStatus] = useState<Status>(
    image ? "loading" : "error"
  );

  useParallax(frameRef, layerRef, 28, !reduced);

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
      <div ref={layerRef} className="absolute inset-0 will-change-transform">

        {/* Background remains visible through transparent PNG areas */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-night">

          {/* Show initials only while loading or if the photo fails */}
          {image && status !== "loaded" ? (
            <span className="font-display text-5xl italic text-gold-light sm:text-6xl">
              {initials(name)}
            </span>
          ) : null}

          {/* Guest placeholder */}
          {!image ? (
            <>
              <PlaneGlyph className="h-10 w-12 -rotate-12 text-gold" />
              <p className="label-caps mt-6 text-[0.58rem] text-gold/70">
                Aero Club NITTE
              </p>
            </>
          ) : null}
        </div>

        {image && status !== "error" ? (
          <img
            ref={imgRef}
            src={assetUrl(image)}
            alt={`Portrait of ${name}`}
            decoding="async"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-[1400ms] ease-out"
            style={{
              opacity: status === "loaded" ? 1 : 0,
              transform: `translateY(${portraitOffsetY}%) scale(${portraitScale})`,
              transformOrigin: "center top",
            }}
          />
        ) : null}

      </div>
    </div>
  );
}
