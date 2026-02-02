/**
 * Header offset을 고려한 섹션 스크롤 함수
 * scrollIntoView의 offset 제한을 해결하기 위한 커스텀 구현
 */

const HEADER_OFFSET = 80; // header 높이 + 여유 공간 (px)

/**
 * 지정된 엘리먼트로 부드럽게 스크롤하며 header offset을 고려합니다.
 *
 * @param element - 스크롤할 대상 엘리먼트
 * @param offset - 추가 offset (기본값: HEADER_OFFSET)
 */
export const scrollToElement = (
  element: HTMLElement,
  offset: number = HEADER_OFFSET,
): void => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * ID로 엘리먼트를 찾아 스크롤합니다.
 *
 * @param targetId - 스크롤할 대상 엘리먼트의 ID (# 제외)
 * @param offset - 추가 offset (기본값: HEADER_OFFSET)
 * @returns 성공 여부
 */
export const scrollToSection = (
  targetId: string,
  offset: number = HEADER_OFFSET,
): boolean => {
  const element = document.getElementById(targetId);

  if (!element) {
    console.warn(`Element with id "${targetId}" not found`);
    return false;
  }

  scrollToElement(element, offset);
  return true;
};
