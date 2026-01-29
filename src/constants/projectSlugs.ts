export const PROJECT_SLUGS = {
  JTBC_NEWS_RENEWAL: "jtbc-news-renewal",
  VIBE_CODING_PROJECTS: "vibe-coding-projects",
  CJ_SCHOOLFOOD: "cj-schoolfood",
  CJ_THE_SQUARE: "cj-the-square",
  CJ_MAXONOMY: "cj-maxonomy",
  KBS_TVUT: "kbs-tvut",
} as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[keyof typeof PROJECT_SLUGS];
