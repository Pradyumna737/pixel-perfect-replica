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
          className="group mt-12 block w-[min(100%,21rem)] animate-soft-rise"
          style={rise(800)}
          aria-label="Jump to your invitation"
        >
          <div className="grid -rotate-2 grid-cols-[1fr_7.5rem] bg-ivory text-left text-ink shadow-ticket transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:-translate-y-1">
            <div className="relative min-w-0 px-5 py-4">
              <span className="absolute inset-y-0 left-0 w-1 bg-burgundy" aria-hidden="true" />
              <p className="label-caps text-[0.58rem] text-burgundy">Invitation for</p>
              <p className="mt-1 font-display text-[clamp(1.1rem,4.5vw,1.5rem)] italic leading-tight">
                {guestName}
              </p>
              <p className="label-caps mt-1 text-[0.55rem] text-ink-soft">{guestRole}</p>
            </div>
            <div className="ticket-perforation flex flex-col items-center justify-center px-1 text-center">
              <p className="font-display text-2xl leading-none">30</p>
              <p className="label-caps mt-1 whitespace-nowrap text-[0.55rem] tracking-[0.12em] text-burgundy">
                Nov 26
              </p>
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
