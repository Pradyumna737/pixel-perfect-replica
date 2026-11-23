import { describe, expect, it } from "vitest";

import { SENIORS } from "@/data/seniors";
import { resolvePassenger } from "@/lib/seniors";

describe("personalised invitation links", () => {
  it("has all 16 seniors, each with their own portrait", () => {
    expect(SENIORS).toHaveLength(16);
    expect(new Set(SENIORS.map((s) => s.image)).size).toBe(16);
  });

  it("defaults to Gagandeep when no name is given", () => {
    const p = resolvePassenger(undefined);
    expect(p.kind === "senior" && p.senior.name).toBe("Gagandeep Kayara Gangadhara");
  });

  it("gives Gagandeep only the designation President", () => {
    const p = resolvePassenger("Gagandeep Kayara Gangadhara");
    expect(p.kind === "senior" && p.senior.designation).toBe("President");
  });

  it("matches names case-insensitively", () => {
    const p = resolvePassenger("chinmay KULKARNI");
    expect(p.kind === "senior" && p.senior.image).toBe("assets/portraits/chinmay.jpg");
  });

  it("never shows another senior for an unknown name", () => {
    const p = resolvePassenger("Rahul Sharma");
    expect(p.kind).toBe("unknown");
  });
});
