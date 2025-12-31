import { ProjectCardProps } from "./ProjectCard";

export const projectsData:ProjectCardProps[] = [
  {
    title: "WCG 2019 공식 웹사이트",
    category: "event",
    client: "Smilegate",
    description: "WCG 2019(월드 사이버 게임즈) 공식 웹사이트 개발 및 중국 시안 현지 운영 지원",
    imageUrlAry: ["/images/projects/wcg2019_01.jpg", "/images/projects/wcg2019_02.jpg", "/images/projects/wcg2019_03.jpg"],
    periodStart: "2025-01",
    periodEnd: "2025-03",
    stack: ["HTML", "CSS", "jQuery", "반응형", "다국어", "PhotoShop"],
  },
  {
    title: "JTBC 보도 디지털 플랫폼 리빌딩",
    projectLink: "https://news.jtbc.co.kr/",
    category: "press",
    client: "JTBC",
    description: "JTBC 보도 디지털 플랫폼 리빌딩 프로젝트",
    // imageUrlAry: ["/images/projects/jtbc_01.jpg", "/images/projects/jtbc_02.jpg", "/images/projects/jtbc_03.jpg"],
    periodStart: "2024-01",
    periodEnd: "2024-12",
    stack: ["Next.js", "TypeScript", "MUI", "Recoil", "Emotion", "반응형", "Git", "Figma"],
  },
];
