import { describe, expect, it } from "vitest";

import { getPortfolioSystemPrompt } from "./prompt";

describe("portfolio prompt data", () => {
  it("includes current subprojects with progress and future plans", async () => {
    const prompt = await getPortfolioSystemPrompt();
    const canonicalData = prompt.split("<canonical_site_data>")[1].split("</canonical_site_data>")[0];

    expect(canonicalData).toContain("총 경력: 8년 2개월");
    expect(canonicalData).toContain("\"title\": \"가계부 앱\"");
    expect(canonicalData).toContain("\"status\": \"in-progress\"");
    expect(canonicalData).toContain("Storybook에 등록");
    expect(canonicalData).toContain("향후 Supabase를 연동");
    expect(canonicalData).toContain("구현 계획");
    expect(prompt).toContain("must not be described as a completed or released product");
  });

  it("keeps employment facts grounded in the provided documents", async () => {
    const prompt = await getPortfolioSystemPrompt();

    expect(prompt).toContain("위팩토리 - 웹 디자이너/퍼블리셔");
    expect(prompt).toContain("회사 업무에서는 GitHub Copilot과 Antigravity");
    expect(prompt).not.toContain("촬영 스튜디오를 구축");
    expect(prompt).not.toContain("제작 비용을 절감");
  });
});
