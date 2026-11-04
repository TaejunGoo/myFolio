import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { MdLanguage, MdOutlineDevices } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiAerospike,
  SiAntdesign,
  SiAnthropic,
  SiGithubcopilot,
  SiGoogle,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiOpenai,
  SiRecoil,
  SiShadcnui,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { EmotionIcon } from "./EmotionIcon";

import type { IconType } from "react-icons";

export interface TechConfig {
  icon: IconType;
  iconClassName: string;
}

export type TechName =
  | "Next.js"
  | "TypeScript"
  | "React"
  | "Recoil"
  | "Vue.js"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Sass"
  | "styled-components"
  | "Emotion"
  | "Tailwind CSS"
  | "Storybook"
  | "jQuery"
  | "Git"
  | "Figma"
  | "MUI"
  | "shadcn/ui"
  | "Ant Design"
  | "Photoshop"
  | "Claude Code"
  | "Codex"
  | "GitHub Copilot"
  | "SWR"
  | "Zustand"
  | "Recharts"
  | "Puppeteer"
  | "SQLite"
  | "Gemini CLI"
  | "Antigravity"
  | "반응형"
  | "모바일"
  | "다국어"
  ;

export const techMap: Record<TechName, TechConfig> = {
  "반응형": {
    icon: MdOutlineDevices,
    iconClassName: "text-gray-600 dark:text-gray-400",
  },
  "모바일": {
    icon: MdOutlineDevices,
    iconClassName: "text-purple-600 dark:text-purple-400",
  },
  "다국어": {
    icon: MdLanguage,
    iconClassName: "text-green-600 dark:text-green-400",
  },
  "Next.js": {
    icon: SiNextdotjs,
    iconClassName: "text-black dark:text-white",
  },
  TypeScript: {
    icon: SiTypescript,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  React: {
    icon: FaReact,
    iconClassName: "text-cyan-600 dark:text-cyan-400",
  },
  Recoil: {
    icon: SiRecoil,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  "Vue.js": {
    icon: FaVuejs,
    iconClassName: "text-emerald-600 dark:text-emerald-400",
  },
  JavaScript: {
    icon: FaJs,
    iconClassName: "text-yellow-600 dark:text-yellow-400",
  },
  HTML: {
    icon: FaHtml5,
    iconClassName: "text-orange-600 dark:text-orange-400",
  },
  CSS: {
    icon: FaCss3Alt,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  Sass: {
    icon: FaSass,
    iconClassName: "text-pink-600 dark:text-pink-400",
  },
  "styled-components": {
    icon: SiStyledcomponents,
    iconClassName: "text-pink-600 dark:text-pink-400",
  },
  Emotion: {
    icon: EmotionIcon as IconType,
    iconClassName: "text-pink-600 dark:text-pink-400",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    iconClassName: "text-cyan-600 dark:text-cyan-400",
  },
  Storybook: {
    icon: SiStorybook,
    iconClassName: "text-pink-600 dark:text-pink-400",
  },
  jQuery: {
    icon: SiJquery,
    iconClassName: "text-blue-700 dark:text-blue-400",
  },
  Git: {
    icon: FaGitAlt,
    iconClassName: "text-orange-600 dark:text-orange-400",
  },
  Figma: {
    icon: FaFigma,
    iconClassName: "text-purple-600 dark:text-purple-400",
  },
  MUI: {
    icon: SiMui,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  "shadcn/ui": {
    icon: SiShadcnui,
    iconClassName: "text-slate-900 dark:text-slate-100",
  },
  "Ant Design": {
    icon: SiAntdesign,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  Photoshop: {
    icon: SiAdobephotoshop,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  "Claude Code": {
    icon: SiAnthropic,
    iconClassName: "text-orange-600 dark:text-orange-400",
  },
  Codex: {
    icon: SiOpenai,
    iconClassName: "text-emerald-600 dark:text-emerald-400",
  },
  "GitHub Copilot": {
    icon: SiGithubcopilot,
    iconClassName: "text-purple-600 dark:text-purple-400",
  },
  SWR: {
    icon: FaReact,
    iconClassName: "text-cyan-600 dark:text-cyan-400",
  },
  Zustand: {
    icon: FaReact,
    iconClassName: "text-orange-600 dark:text-orange-400",
  },
  Recharts: {
    icon: FaReact,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  Puppeteer: {
    icon: FaReact,
    iconClassName: "text-green-600 dark:text-green-400",
  },
  SQLite: {
    icon: FaReact,
    iconClassName: "text-gray-600 dark:text-gray-400",
  },
  "Gemini CLI": {
    icon: SiGoogle,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  Antigravity: {
    icon: SiAerospike,
    iconClassName: "text-indigo-600 dark:text-indigo-400",
  },
};
