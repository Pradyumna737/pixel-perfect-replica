import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "image";
}

/** Fades content upward (or wipes an image open) once it scrolls into view. */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  // IntersectionObserver ignores elements fully clipped by their own clip-path,
  // so the image wipe lives on an inner layer while the outer element is observed.
  if (variant === "image") {
    return (
      <Tag ref={ref} className={className}>
        <div className={cn("reveal-image", visible && "is-visible")} style={style}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={cn("reveal", visible && "is-visible", className)} style={style}>
      {children}
    </Tag>
  );
}
