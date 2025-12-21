// 경력 개월 수 계산 (2019년 3월 ~ 오늘)
export function getCareerDuration(from: Date = new Date(2019, 2, 1), to: Date = new Date()): { years: number; months: number } {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
}

export function getCareerDurationText(from: Date = new Date(2019, 2, 1), to: Date = new Date()): string {
  const { years, months } = getCareerDuration(from, to);
  return `${years}년 ${months}개월`;
}
