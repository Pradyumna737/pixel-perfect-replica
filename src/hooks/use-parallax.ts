import { useEffect, type RefObject } from "react";

/** Subtle vertical parallax: writes a transform directly to the target (no re-renders). */
export function useParallax(
  containerRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null>,
  strength = 40,
  enabled = true,
) {
  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target || !enabled) {
      if (target) target.style.transform = "";
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, progress));
      target.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(2)}px, 0) scale(1.12)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [containerRef, targetRef, strength, enabled]);
}
