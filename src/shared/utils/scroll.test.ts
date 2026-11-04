import { afterEach, describe, expect, it, vi } from "vitest";

import { getScrollBehavior, scrollToElement } from "./scroll";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("motion-aware section scrolling", () => {
  it.each([true, false])("respects reduced motion=%s while preserving the header offset", (reducedMotion) => {
    const scrollTo = vi.fn();
    vi.stubGlobal("window", {
      matchMedia: vi.fn(() => ({ matches: reducedMotion })),
      scrollY: 200,
      scrollTo,
    });
    const element = { getBoundingClientRect: () => ({ top: 100 }) } as HTMLElement;

    scrollToElement(element);

    expect(scrollTo).toHaveBeenCalledWith({ top: 220, behavior: reducedMotion ? "instant" : "smooth" });
  });

  it("can be evaluated without browser globals", () => {
    expect(getScrollBehavior()).toBe("smooth");
  });
});
