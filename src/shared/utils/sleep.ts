// 로딩 또는 지연이 필요한 상황에서 사용되는 유틸리티 함수
// ex) await sleep(1000); // 1초 대기
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
