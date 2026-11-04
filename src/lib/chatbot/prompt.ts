import { readFile } from "node:fs/promises";
import path from "node:path";

import { maintenanceData, profile, projectDetailData, projectsData, skillsData } from "@/data";
import { professionalBackground } from "@/data/profile/background";
import { getCareerDurationText } from "@/shared/utils/career";

let promptCache: string | null = null;

const getPromptFilePath = () => {
  return path.join(process.cwd(), "src", "lib", "chatbot", "portfolio-context.md");
};

const formatPeriod = (periodStart: string, periodEnd?: string) => {
  return `${periodStart} - ${periodEnd ?? "진행 중"}`;
};

const formatCanonicalSiteData = () => {
  const detailsBySlug = new Map(projectDetailData.map((detail) => [detail.slug, detail]));
  const projects = projectsData.map((project) => {
    const detail = project.slug ? detailsBySlug.get(project.slug) : undefined;

    return {
      title: project.title,
      client: project.client,
      period: formatPeriod(project.periodStart, project.periodEnd),
      participation: project.participation,
      stack: project.stack,
      description: project.description,
      projectLink: project.projectLink,
      overview: detail?.overview,
      role: detail?.role,
      highlights: detail?.highlights,
      challenges: detail?.challenges,
      sections: detail?.customSections
        ?.filter((section) => section.type !== "gallery")
        .map(({ title, content }) => ({ title, content })),
      subProjects: detail?.subProjects?.map((subProject) => ({
        title: subProject.title,
        subtitle: subProject.subtitle,
        status: subProject.status,
        statusDescription: subProject.statusDescription,
        details: subProject.details,
        links: subProject.links,
      })),
    };
  });

  const maintenance = maintenanceData
    .map((item) => `- ${item.name} | ${formatPeriod(item.periodStart, item.periodEnd)} | ${item.description}`)
    .join("\n");

  const skills = skillsData.categories
    .map((category) => `- ${category.title}: ${category.skills.join(", ")}`)
    .join("\n");

  return `## Profile
- 이름: ${profile.name} (${profile.nameEn})
- 직함: ${profile.title}
- 이메일: ${profile.email}
- GitHub: ${profile.githubUrl}
- 포트폴리오: ${profile.portfolioUrl}
- 경력 기간: ${profile.careerStartDate} - ${profile.careerEndDate}
- 이전 경력: ${profile.careerExtraMonths}개월
- 총 경력: ${getCareerDurationText()}
- 소개: ${profile.bio}
- 핵심 포인트: ${profile.highlights.join(", ")}
- 주요 업무: ${profile.jobDescription.join(", ")}
- 주요 기술: ${profile.mainStack.join(", ")}
- 도구 및 기타: ${profile.subStack.join(", ")}

## Professional Background
${JSON.stringify(professionalBackground)}

## Skills
${skills}

## Projects
${JSON.stringify(projects)}

## Maintenance
${maintenance}`;
};

export const getPortfolioSystemPrompt = async () => {
  if (promptCache) return promptCache;

  const instructions = await readFile(getPromptFilePath(), "utf-8");
  promptCache = `[INSTRUCTIONS]
${instructions.trim()}

[CANONICAL SITE DATA]
<canonical_site_data>
${formatCanonicalSiteData()}
</canonical_site_data>`;

  return promptCache;
};
