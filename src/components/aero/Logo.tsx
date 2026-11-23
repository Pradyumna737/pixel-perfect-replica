import { LOGO_PATH } from "@/data/seniors";
import { assetUrl } from "@/lib/seniors";
import { cn } from "@/lib/utils";

/** The club logo sits on an ivory medallion so its colours stay true on navy. */
export function LogoMedallion({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full bg-ivory ring-1 ring-gold/70 ring-offset-4 ring-offset-navy",
        className,
      )}
    >
      <img
        src={assetUrl(LOGO_PATH)}
        alt="Aero Club NITTE logo"
        width={400}
        height={400}
        decoding="async"
        className="absolute inset-[14%] h-[72%] w-[72%] object-contain"
      />
    </div>
  );
}
