import { profile } from "./profile";

/** Verified career facts that are not part of the public project descriptions. */
export const professionalBackground = {
  career: [
    {
      company: "라드씨엔에스",
      role: "웹 퍼블리셔",
      periodStart: profile.careerStartDate,
      periodEnd: profile.careerEndDate,
      responsibilities: profile.jobDescription,
    },
    {
      company: "위팩토리",
      role: "웹 디자이너/퍼블리셔",
      periodStart: "2018-02",
      periodEnd: "2018-10",
      responsibilities: [
        "고객사 사이트 유지보수 및 상품·콘텐츠 페이지 제작",
        "Cafe24·고도몰 기반 운영 페이지 수정 및 관리",
      ],
      tools: ["HTML/CSS", "Photoshop", "Cafe24", "고도몰"],
      relatedExperience: ["상품 촬영"],
    },
  ],
  education: [
    { school: "영남대학교", major: "행정학과", periodStart: "2009-03", periodEnd: "2017-02", status: "졸업" },
    { school: "수성고등학교", periodStart: "2006-03", periodEnd: "2009-02", status: "졸업" },
  ],
  training: [
    {
      name: "웹퍼블리싱 프론트엔드디자인",
      institution: "대구 그린컴퓨터아트학원",
      periodStart: "2017-03",
      periodEnd: "2017-08",
      status: "수료",
      details: [
        "HTML·CSS 기초 및 웹표준·웹 접근성을 고려한 퍼블리싱",
        "JavaScript·jQuery를 활용한 인터랙티브 웹 요소 제작",
        "Photoshop·Illustrator를 활용한 웹 UI 디자인 및 소스 제작",
      ],
    },
  ],
  qualifications: [
    { name: "웹디자인기능사", issuer: "한국산업인력공단", acquiredAt: "2017-09" },
  ],
  workflowTools: ["Git", "GitHub", "GitHub Desktop", "Sourcetree"],
  workplaceAiUse: {
    tools: ["GitHub Copilot", "Antigravity"],
    activities: ["코드 자동완성", "반복적인 함수·UI 기능 구현 보조"],
    knowledgeSharing: "AI 기반 개인 프로젝트 제작 사례를 팀에 공유",
  },
};
