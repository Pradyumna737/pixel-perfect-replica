import type { CSSProperties } from "react";

import { FlightPath } from "./FlightPath";
import { LogoMedallion } from "./Logo";
import { PlaneGlyph } from "./PlaneGlyph";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function Hero({ guestName, guestRole }: { guestName: string; guestRole: string }) {
  return (
    <header className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-night px-6 pb-32 pt-16 text-center">
      <div className="inset-frame" aria-hidden="true" />
      <FlightPath />

      <div className="relative z-10 flex flex-col items-center">
        <LogoMedallion className="size-20 animate-soft-rise sm:size-24" />

        <p className="label-caps mt-9 animate-soft-rise text-gold-light" style={rise(150)}>
          Aero Club NITTE <span className="mx-1.5 text-gold">·</span> Batch 2023–2027
        </p>

        <h1 className="display-title mt-6 animate-soft-rise text-ivory" style={rise(300)}>
          <span className="block font-display text-2xl italic text-gold-light sm:text-3xl">
            The
          </span>
          <span className="block text-[clamp(3.3rem,13vw,8.5rem)] leading-[0.9]">Aero Journey</span>
        </h1>

        <div
          className="mt-7 flex w-56 items-center gap-3 animate-soft-rise text-gold sm:w-72"
          style={rise(450)}
          aria-hidden="true"
        >
          <span className="gold-rule flex-1" />
          <PlaneGlyph className="h-3 w-4" />
          <span className="gold-rule flex-1" />
        </div>

        <p
          className="mt-6 max-w-md animate-soft-rise font-serif text-lg italic leading-relaxed text-ivory/80 sm:text-xl"
          style={rise(600)}
        >
          Celebrating the journey, friendships and memories.
        </p>

        <a
          href="#invitation"
          className="group mt-12 block w-[min(100%,24rem)] animate-soft-rise"
          style={rise(800)}
          aria-label="Jump to your invitation"
        >
          <div className="drop-ticket -rotate-2 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:-translate-y-1">
            <div className="ticket-cut grid grid-cols-[1fr_6.5rem] text-left [--stub:6.5rem]">
              {/* Main panel — burgundy with gold engraving */}
              <div className="relative min-w-0 bg-burgundy-card px-6 pb-6 pt-7 text-center">
                <div className="guilloche absolute inset-0" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute inset-[10px] border border-gold/55"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-[14px] border border-gold/20"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-center gap-2.5 text-gold">
                    <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
                    <p className="label-caps text-[0.56rem] text-gold-light">Invitation for</p>
                    <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
                  </div>

                  <p className="mt-3 font-display text-[clamp(1.35rem,5.2vw,1.75rem)] italic leading-[1.1] text-ivory">
                    {guestName}
                  </p>

                  <div className="mx-auto mt-3 flex w-24 items-center gap-2 text-gold" aria-hidden="true">
                    <span className="gold-rule flex-1" />
                    <PlaneGlyph className="h-2 w-3" />
                    <span className="gold-rule flex-1" />
                  </div>

                  <p className="label-caps mt-3 text-[0.56rem] text-gold-light/90">{guestRole}</p>
                </div>
              </div>

              {/* Stub — ivory with the date */}
              <div className="relative flex flex-col items-center justify-center border-l-[1.5px] border-dashed border-burgundy/45 bg-ivory px-2 text-center text-burgundy">
                <div
                  className="pointer-events-none absolute inset-[10px] border border-burgundy/25"
                  aria-hidden="true"
                />
                <p className="label-caps relative text-[0.5rem] tracking-[0.24em] text-ink-soft">
                  Admit one
                </p>
                <p className="relative mt-2 font-display text-[2.6rem] leading-none">30</p>
                <p className="label-caps relative mt-1 whitespace-nowrap text-[0.56rem] tracking-[0.2em]">
                  Nov 2026
                </p>
                <span className="relative mt-2.5 h-px w-8 bg-gold" aria-hidden="true" />
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-9 z-10 flex items-end justify-center px-8 sm:px-14">
        <a
          href="#passenger"
          className="flex flex-col items-center gap-3 text-gold-light/80"
          aria-label="Scroll to continue"
        >
          <span className="label-caps text-[0.58rem]">Scroll</span>
          <span className="relative block h-12 w-px overflow-hidden bg-gold/25">
            <span className="absolute inset-x-0 top-0 h-1/3 animate-scroll-cue bg-gold" />
          </span>
        </a>
      </div>
    </header>
  );
}
