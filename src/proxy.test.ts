import { afterEach, describe, expect, it, vi } from "vitest";

import { config, proxy } from "./proxy";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("development preview access", () => {
  it("allows previews in development", () => {
    vi.stubEnv("NODE_ENV", "development");
    expect(proxy().headers.get("x-middleware-next")).toBe("1");
  });

  it("returns an HTTP 404 without indexing in production", () => {
    vi.stubEnv("NODE_ENV", "production");
    const response = proxy();

    expect(response.status).toBe(404);
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
  });

  it("only matches the development preview subtree", () => {
    expect(config.matcher).toEqual(["/test-states/:path*"]);
  });
});
