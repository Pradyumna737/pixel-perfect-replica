import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

import { BoardingPass } from "@/components/aero/BoardingPass";
import { Hero } from "@/components/aero/Hero";
import { PlaneGlyph } from "@/components/aero/PlaneGlyph";
import { Portrait } from "@/components/aero/Portrait";
import { Reveal } from "@/components/aero/Reveal";
import { EVENT, SENIORS } from "@/data/seniors";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { resolvePassenger } from "@/lib/seniors";

const TITLE = "The Aero Journey · Aero Club NITTE Farewell 2026";
const DESCRIPTION =
  "Your personal invitation to The Aero Journey — Aero Club NITTE's farewell for Batch 2023–2027, 30 November 2026 at Shambhavi Hall.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { name?: string } =>
    typeof search["name"] === "string" ? { name: search["name"] } : {},
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: AeroJourney,
});

function AeroJourney() {
  const { name } = Route.useSearch();
  const passenger = resolvePassenger(name);

  const senior = passenger.kind === "senior" ? passenger.senior : null;
  const displayName = senior?.name ?? "Honoured Guest";
  const designation = senior?.designation ?? EVENT.club;
  const firstName = senior ? (senior.name.split(" ")[0] ?? senior.name) : "Honoured Guest";
  const seat = senior ? String(SENIORS.indexOf(senior) + 1).padStart(2, "0") : null;

  return (
    <main className="bg-navy">
      <Hero guestName={firstName} />

      {/* ---------- Personal portrait ---------- */}
      <section
        id="passenger"
        aria-labelledby="passenger-name"
        className="relative bg-ivory text-ink"
      >
        <div className="h-36 bg-dusk-down sm:h-52" aria-hidden="true" />

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-7 pb-28 pt-8 md:grid-cols-2 md:gap-20 md:pb-40 md:pt-14">
          <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]">
            <div
              className="absolute -inset-3 border border-gold/80 sm:-inset-4"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-7 -right-7 h-24 w-24 border-b border-r border-burgundy/70 sm:-bottom-9 sm:-right-9"
              aria-hidden="true"
            />
            <div
              className="absolute -left-7 -top-7 h-16 w-16 border-l border-t border-burgundy/40 sm:-left-9 sm:-top-9"
              aria-hidden="true"
            />
            <Reveal variant="image">
              <Portrait
                key={senior?.slug ?? "guest"}
                name={displayName}
                {...(senior ? { image: senior.image } : {})}
              />
            </Reveal>
          </div>

          <div className="text-center md:text-left">
            <Reveal className="label-caps flex items-center justify-center gap-3 text-burgundy md:justify-start">
              <span className="h-px w-8 bg-burgundy/60" aria-hidden="true" />
              {seat ? `Passenger Nº ${seat}` : "Passenger"}
            </Reveal>

            <Reveal
              as="h2"
              delay={120}
              className="display-title mt-6 text-[clamp(2.6rem,7vw,4.75rem)]"
            >
              <span id="passenger-name">{displayName}</span>
            </Reveal>

            <Reveal delay={240}>
              <div className="mx-auto mt-7 h-px w-16 bg-gold md:mx-0" aria-hidden="true" />
              <p className="mx-auto mt-7 max-w-md font-serif text-xl italic leading-relaxed text-burgundy sm:text-2xl md:mx-0">
                {designation}
              </p>
            </Reveal>

            <Reveal
              delay={360}
              className="mt-10 flex items-center justify-center gap-3 text-ink-soft md:justify-start"
            >
              <PlaneGlyph className="h-3 w-4 text-gold" />
              <span className="label-caps">A part of the Aero Journey</span>
            </Reveal>

            {passenger.kind === "unknown" ? (
              <Reveal delay={480}>
                <p className="mx-auto mt-8 max-w-md font-serif text-base leading-relaxed text-ink-soft md:mx-0">
                  We couldn't find “{passenger.requestedName}” on our passenger list. Please check
                  the personal link you received — you're warmly welcome all the same.
                </p>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      <Invitation name={displayName} designation={designation} />

      <footer className="bg-navy px-6 pb-14 pt-6 text-center">
        <div className="mx-auto mb-8 h-px w-40 gold-rule" aria-hidden="true" />
        <p className="font-display text-xl italic text-gold-light">
          With gratitude, for every flight together.
        </p>
        <p className="label-caps mt-3 text-gold/70">
          {EVENT.club} · {EVENT.batch}
        </p>
      </footer>
    </main>
  );
}

function Invitation({ name, designation }: { name: string; designation: string }) {
  const [open, setOpen] = useState(false);
  const passRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const openInvitation = () => {
    setOpen(true);
    window.setTimeout(() => {
      passRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    }, 120);
  };

  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="relative bg-celebration text-ivory"
    >
      <div className="h-36 bg-dusk-up sm:h-52" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-12 text-center sm:pb-32">
        <Reveal className="label-caps text-gold">You are cordially invited</Reveal>

        <Reveal
          as="h2"
          delay={120}
          className="display-title mt-6 text-[clamp(2.6rem,8vw,5.25rem)] text-ivory"
        >
          <span id="invitation-title">
            The Celebration <em className="text-gold-light">Continues</em>
          </span>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-ivory/80 sm:text-xl">
            {EVENT.message}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-1 divide-y divide-gold/30 border-y border-gold/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Date", EVENT.dateLong],
              ["Time", EVENT.time],
              ["Venue", EVENT.venue],
            ].map(([label, value]) => (
              <div key={label} className="px-4 py-6">
                <dt className="label-caps text-gold">{label}</dt>
                <dd className="mt-2 font-display text-2xl whitespace-nowrap text-ivory sm:text-[1.45rem] md:text-[1.6rem]">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={480} className="mt-14">
          {open ? (
            <p className="label-caps text-gold-light/80" role="status">
              Your boarding pass is ready
            </p>
          ) : (
            <button
              type="button"
              onClick={openInvitation}
              className="btn-gold"
              aria-expanded={open}
              aria-controls="boarding-pass"
            >
              Open your invitation
              <PlaneGlyph className="h-2.5 w-3.5" />
            </button>
          )}
        </Reveal>

        <div id="boarding-pass" className="mt-10">
          {open ? <BoardingPass ref={passRef} name={name} designation={designation} /> : null}
        </div>
      </div>
    </section>
  );
}
