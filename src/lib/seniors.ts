import { DEFAULT_SENIOR_SLUG, SENIORS, type Senior } from "@/data/seniors";

export type Passenger =
  { kind: "senior"; senior: Senior } | { kind: "unknown"; requestedName: string };

const normalize = (value: string) => value.trim().replace(/\s+/g, " ").toLowerCase();

/**
 * Resolve the visitor from the `name` URL parameter.
 * - Missing/empty name → the default senior (Gagandeep).
 * - Exact full-name match (case-insensitive, extra spaces ignored) or exact slug → that senior.
 * - Anything else → unknown guest; never falls back to another senior's photograph.
 */
export function resolvePassenger(rawName: string | undefined | null): Passenger {
  const name = rawName == null ? "" : normalize(rawName);
  if (!name) {
    const fallback = SENIORS.find((s) => s.slug === DEFAULT_SENIOR_SLUG);
    if (!fallback) throw new Error("Default senior missing from data");
    return { kind: "senior", senior: fallback };
  }
  const match = SENIORS.find((s) => normalize(s.name) === name || s.slug === name);
  return match
    ? { kind: "senior", senior: match }
    : { kind: "unknown", requestedName: rawName!.trim() };
}

/** Prefix a public asset path with the deploy base (e.g. a GitHub Pages sub-path). */
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  return encodeURI(`${base.endsWith("/") ? base : `${base}/`}${path}`);
}

export function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}
