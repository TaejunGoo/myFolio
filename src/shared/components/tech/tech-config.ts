import { IconType } from "react-icons";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { MdLanguage, MdOutlineDevices } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiAntdesign,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiRecoil,
  SiShadcnui,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { EmotionIcon } from "./EmotionIcon";

export interface TechConfig {
  icon: IconType;
  className: string;
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
  | "Styled-Components"
  | "Emotion"
  | "Tailwind CSS"
  | "Storybook"
  | "jQuery"
  | "Git"
  | "Figma"
  | "MUI"
  | "Shadcn UI"
  | "Ant Design"
  | "PhotoShop"
  | "반응형"
  | "다국어"
  ;

export const techMap: Record<TechName, TechConfig> = {
  "반응형": {
    icon: MdOutlineDevices,
    className: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  },
  "다국어": {
    icon: MdLanguage,
    className: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  "Next.js": {
    icon: SiNextdotjs,
    className: "bg-black text-white dark:bg-white dark:text-black border-transparent",
  },
  TypeScript: {
    icon: SiTypescript,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  React: {
    icon: FaReact,
    className: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  },
  Recoil: {
    icon: SiRecoil,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  "Vue.js": {
    icon: FaVuejs,
    className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  JavaScript: {
    icon: FaJs,
    className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },
  HTML: {
    icon: FaHtml5,
    className: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  CSS: {
    icon: FaCss3Alt,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  Sass: {
    icon: FaSass,
    className: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  },
  "Styled-Components": {
    icon: SiStyledcomponents,
    className: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  },
  Emotion: {
    icon: EmotionIcon as IconType,
    className: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    className: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  },
  Storybook: {
    icon: SiStorybook,
    className: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  },
  jQuery: {
    icon: SiJquery,
    className: "bg-blue-700/10 text-blue-700 border-blue-700/20",
  },
  Git: {
    icon: FaGitAlt,
    className: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  Figma: {
    icon: FaFigma,
    className: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  MUI: {
    icon: SiMui,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  "Shadcn UI": {
    icon: SiShadcnui,
    className: "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 border-transparent",
  },
  "Ant Design": {
    icon: SiAntdesign,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  PhotoShop: {
    icon: SiAdobephotoshop,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
};
