import { readFile } from "node:fs/promises";
import path from "node:path";

let promptCache: string | null = null;

const getPromptFilePath = () => {
  return path.join(process.cwd(), "src", "lib", "chatbot", "portfolio-context.md");
};

export const getPortfolioSystemPrompt = async () => {
  if (promptCache) {
    return promptCache;
  }

  const prompt = await readFile(getPromptFilePath(), "utf-8");
  promptCache = prompt.trim();

  return promptCache;
};
