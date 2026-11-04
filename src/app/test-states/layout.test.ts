import { notFound } from "next/navigation";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import TestStatesLayout, { metadata } from "./layout";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => { throw new Error("NOT_FOUND"); }),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("test page access", () => {
  it("keeps previews available during development", () => {
    vi.stubEnv("NODE_ENV", "development");
    expect(TestStatesLayout({ children: "preview" })).toBe("preview");
    expect(notFound).not.toHaveBeenCalled();
  });

  it("rejects the entire test subtree in production", () => {
    vi.stubEnv("NODE_ENV", "production");
    expect(() => TestStatesLayout({ children: "preview" })).toThrow("NOT_FOUND");
    expect(notFound).toHaveBeenCalledOnce();
  });

  it("does not allow indexing development previews", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
