import { format, parseISO } from "date-fns";

/**
 * ISO 날짜 문자열을 "yyyy.MM" 형식으로 포맷팅합니다.
 */
export function formatPeriodDate(isoDate: string): string {
  return format(parseISO(isoDate), "yyyy.MM");
}

/**
 * 시작일과 종료일을 포맷팅하여 문자열로 반환합니다.
 * 종료일이 없으면 기본 텍스트를 반환합니다.
 *
 * @param periodStart - ISO 형식의 시작일 (필수)
 * @param periodEnd - ISO 형식의 종료일 (선택)
 * @param ongoingText - 종료일이 없을 때 표시할 텍스트 (기본: "현재")
 * @returns 포맷팅된 기간 객체 { start: string, end: string }
 */
export function formatPeriod(
  periodStart: string,
  periodEnd?: string,
  ongoingText = "현재",
): { start: string; end: string } {
  return {
    start: formatPeriodDate(periodStart),
    end: periodEnd ? formatPeriodDate(periodEnd) : ongoingText,
  };
}
