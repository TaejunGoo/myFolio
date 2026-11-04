import { createElement } from "react";

import { useReducedMotion } from "framer-motion";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import FadeInView from "./FadeInView";

import type * as FramerMotion from "framer-motion";

vi.mock("framer-motion", async (importOriginal) => {
  const original = await importOriginal<typeof FramerMotion>();
  return { ...original, useReducedMotion: vi.fn() };
});

describe("reduced-motion content visibility", () => {
  it("renders content without an initially hidden animation state", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const markup = renderToStaticMarkup(createElement(FadeInView, { delay: 2 }, "Visible content"));

    expect(markup).toContain("Visible content");
    expect(markup).not.toContain("opacity:0");
    expect(markup).not.toContain("translateY(20px)");
  });
});
