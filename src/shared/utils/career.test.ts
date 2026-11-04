import { afterEach, describe, expect, it, vi } from "vitest";

import { getCareerDuration, getCareerDurationText } from "./career";

afterEach(() => {
  vi.useRealTimers();
});

describe("career duration", () => {
  it("keeps completed employment fixed after the end date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2030, 10, 4));

    expect(getCareerDurationText()).toBe("8년 2개월");
  });

  it("includes the final month and earlier employment", () => {
    expect(getCareerDuration(new Date(2019, 2, 1), new Date(2026, 6, 1), 9)).toEqual({
      years: 8,
      months: 2,
    });
    expect(getCareerDuration(new Date(2026, 6, 1), new Date(2026, 6, 1), 0)).toEqual({
      years: 0,
      months: 1,
    });
  });

  it("preserves explicit date ranges across a year boundary", () => {
    expect(getCareerDurationText(new Date(2025, 10, 1), new Date(2026, 1, 1))).toBe("1년 1개월");
  });
});
