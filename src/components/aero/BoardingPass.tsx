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
      <dd className="mt-0.5 font-sans text-[0.66rem] font-medium leading-tight tracking-[0.08em] sm:text-sm sm:tracking-[0.12em]">
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
      className="relative mx-auto grid w-full max-w-[46rem] animate-pass-unfold grid-cols-[1fr_5.75rem] bg-ivory text-left text-ink shadow-ticket sm:grid-cols-[1fr_10.5rem]"
    >
      <div
        className="pointer-events-none absolute inset-[5px] border border-gold/60"
        aria-hidden="true"
      />

      <div className="relative min-w-0 py-4 pl-5 pr-3 sm:py-6 sm:pl-9 sm:pr-7">
        <span
          className="absolute inset-y-[5px] left-[5px] w-1 bg-burgundy sm:w-1.5"
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

        <dl className="mt-3 grid grid-cols-[auto_auto_1fr] gap-x-3.5 border-t border-gold/50 pt-2.5 sm:mt-4 sm:gap-x-8 sm:pt-3">
          <Field label="Date" value={EVENT.dateShort} />
          <Field label="Time" value={EVENT.time} />
          <Field label="Venue" value={EVENT.venue.toUpperCase()} />
        </dl>
      </div>

      <div className="ticket-perforation flex flex-col justify-between px-3 py-4 sm:px-5 sm:py-6">
        <div>
          <p className="label-caps text-[0.5rem] tracking-[0.24em] text-burgundy sm:text-[0.6rem]">
            Admit One
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-gold">
            <PlaneGlyph className="h-2.5 w-3.5 sm:h-3 sm:w-4" />
            <span className="h-px flex-1 border-t border-dashed border-gold/70" />
          </div>
        </div>

        <div className="text-ink">
          <p className="font-display text-3xl leading-none sm:text-5xl">30</p>
          <p className="label-caps mt-1 text-[0.5rem] tracking-[0.22em] sm:text-[0.6rem]">
            Nov 2026
          </p>
          <p className="label-caps text-[0.5rem] tracking-[0.22em] text-ink-soft sm:text-[0.6rem]">
            {EVENT.time}
          </p>
        </div>

        <div>
          <div className="barcode h-7 w-full opacity-85 sm:h-9" aria-hidden="true" />
          <p className="label-caps mt-1.5 text-[0.45rem] tracking-[0.2em] text-ink-soft sm:text-[0.55rem]">
            {EVENT.batch}
          </p>
        </div>
      </div>
    </article>
  );
});
