import { forwardRef } from "react";

import { EVENT } from "@/data/seniors";

import { LogoMedallion } from "./Logo";
import { PlaneGlyph } from "./PlaneGlyph";

interface BoardingPassProps {
  name: string;
  designation: string;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="label-caps text-[0.5rem] tracking-[0.24em] text-ink-soft sm:text-[0.58rem]">
        {label}
      </dt>
      <dd className="mt-0.5 break-words font-sans text-[0.58rem] font-medium leading-tight tracking-[0.035em] [overflow-wrap:anywhere] sm:text-sm sm:tracking-[0.12em]">
        {value}
      </dd>
    </div>
  );
}

/** Compact, horizontal premium airline-style pass. */
export const BoardingPass = forwardRef<HTMLElement, BoardingPassProps>(function BoardingPass(
  { name, designation },
  ref,
) {
  return (
    <article
      ref={ref}
      aria-label={`Boarding pass for ${name}`}
      className="drop-ticket relative mx-auto w-full max-w-[46rem] animate-pass-unfold text-left"
    >
      <div className="ticket-cut grid grid-cols-[minmax(0,1fr)_4.75rem] text-ink [--stub:4.75rem] sm:grid-cols-[minmax(0,1fr)_10.5rem] sm:[--stub:10.5rem]">
        <div className="relative min-w-0 bg-ivory-wash py-4 pl-6 pr-3 sm:py-6 sm:pl-10 sm:pr-7">
          <div
            className="pointer-events-none absolute inset-y-[8px] left-[8px] right-[12px] border border-gold/60"
            aria-hidden="true"
          />
          <span
            className="absolute inset-y-[8px] left-[8px] w-1 bg-burgundy sm:w-1.5"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <LogoMedallion className="size-6 ring-offset-1 ring-offset-ivory sm:size-7" />
              <span className="label-caps text-[0.5rem] leading-tight tracking-[0.18em] sm:text-[0.6rem] sm:tracking-[0.24em]">
                {EVENT.club}
              </span>
            </div>
            <span className="label-caps shrink-0 text-[0.5rem] tracking-[0.24em] text-burgundy sm:text-[0.6rem]">
              Boarding Pass
            </span>
          </div>

          <h3 className="display-title mt-2 text-[1.6rem] italic sm:mt-3 sm:text-[2.4rem]">
            {EVENT.title}
          </h3>

          <div className="mt-2 sm:mt-3">
            <p className="label-caps text-[0.5rem] tracking-[0.24em] text-ink-soft sm:text-[0.58rem]">
              Passenger
            </p>
            <p className="font-display text-lg font-semibold leading-tight sm:text-2xl">{name}</p>
            <p className="mt-0.5 font-serif text-[0.72rem] italic leading-snug text-burgundy sm:text-sm">
              {designation}
            </p>
          </div>

          <dl className="mt-3 grid grid-cols-[0.95fr_0.85fr_1.35fr] gap-x-2 border-t border-gold/50 pt-2.5 sm:mt-4 sm:grid-cols-[auto_auto_1fr] sm:gap-x-8 sm:pt-3">
            <Field label="Date" value={EVENT.dateShort} />
            <Field label="Time" value={EVENT.time} />
            <Field label="Venue" value={EVENT.venue.toUpperCase()} />
          </dl>
        </div>

        <div className="relative flex flex-col justify-between border-l-[1.5px] border-dashed border-gold/70 bg-burgundy-card px-2 py-4 text-ivory sm:px-5 sm:py-6">
          <div
            className="pointer-events-none absolute inset-y-[8px] left-[8px] right-[8px] border border-gold/45 sm:left-[12px]"
            aria-hidden="true"
          />
          <div>
            <div className="mt-2 flex items-center gap-1.5 text-gold">
              <PlaneGlyph className="h-2.5 w-3.5 sm:h-3 sm:w-4" />
              <span className="h-px flex-1 border-t border-dashed border-gold/70" />
            </div>
          </div>

          <div className="text-ivory">
            <p className="font-display text-3xl leading-none sm:text-5xl">30</p>
            <p className="label-caps mt-1 text-[0.42rem] tracking-[0.12em] sm:text-[0.6rem] sm:tracking-[0.22em]">
              Nov 2026
            </p>
            <p className="label-caps text-[0.42rem] tracking-[0.1em] text-gold-light/80 sm:text-[0.6rem] sm:tracking-[0.22em]">
              {EVENT.time}
            </p>
          </div>

          <div>
            <div className="barcode-gold h-7 w-full opacity-80 sm:h-9" aria-hidden="true" />
            <p className="label-caps mt-1.5 text-[0.4rem] tracking-[0.12em] text-gold-light/75 sm:text-[0.55rem] sm:tracking-[0.2em]">
              {EVENT.batch}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
});
