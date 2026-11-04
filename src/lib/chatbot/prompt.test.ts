import { describe, expect, it } from "vitest";

import { professionalBackground } from "@/data/profile/background";
import { projectDetailData, projectsData } from "@/data/projects";

import { getPortfolioSystemPrompt } from "./prompt";

describe("portfolio prompt data", () => {
  it("includes current subprojects with progress and future plans", async () => {
    const prompt = await getPortfolioSystemPrompt();
    const canonicalData = prompt.split("\n<canonical_site_data>\n")[1].split("</canonical_site_data>")[0];
    const projects = JSON.parse(canonicalData.split("## Projects\n")[1].split("\n\n## Maintenance")[0]) as {
      subProjects?: { title: string; status?: string; details: string[] }[];
    }[];
    const ledger = projects.flatMap((project) => project.subProjects ?? []).find((project) => project.title === "가계부 앱");

    expect(canonicalData).toContain("총 경력: 8년 2개월");
    expect(ledger?.status).toBe("in-progress");
    expect(ledger?.details.join(" ")).toContain("Storybook에 등록");
    expect(ledger?.details.join(" ")).toContain("향후 Supabase를 연동");
    expect(ledger?.details.join(" ")).toContain("구현 계획");
    expect(prompt).toContain("must not be described as a completed or released product");
  });

  it("keeps verified background facts in the canonical data", async () => {
    const prompt = await getPortfolioSystemPrompt();

    expect(prompt).toContain(JSON.stringify(professionalBackground));
    expect(prompt).toContain("웹 디자이너/퍼블리셔");
    expect(professionalBackground.workplaceAiUse.tools).toEqual(["GitHub Copilot", "Antigravity"]);
    expect(prompt).not.toContain("촬영 스튜디오를 구축");
    expect(prompt).not.toContain("제작 비용을 절감");
  });

  it("sends every project once without a second narrative project catalog", async () => {
    const prompt = await getPortfolioSystemPrompt();
    const projectText = prompt.split("## Projects\n")[1].split("\n\n## Maintenance")[0];
    const projects = JSON.parse(projectText) as { title: string }[];

    expect(projects).toHaveLength(projectsData.length);
    expect(new Set(projects.map((project) => project.title)).size).toBe(projectsData.length);
    expect(prompt.split(projectDetailData[0].overview)).toHaveLength(2);
    expect(prompt).not.toContain("## Representative Projects");
    expect(prompt).not.toContain("[CONTEXT DATA]");
  });
});
