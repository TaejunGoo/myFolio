import { profile } from "@/data/profile";

/** Parse "YYYY-MM" string to a Date object */
function parseCareerDate(dateStr: string): Date {
  const [year, month] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

// 경력 개월 수 계산
export function getCareerDuration(
  from: Date = parseCareerDate(profile.careerStartDate),
  to: Date = new Date(),
): { years: number; months: number } {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
}

export function getCareerDurationText(
  from: Date = parseCareerDate(profile.careerStartDate),
  to: Date = new Date(),
): string {
  const { years, months } = getCareerDuration(from, to);
  return `${years}년 ${months}개월`;
}
