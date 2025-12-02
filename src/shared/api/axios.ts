import axios from 'axios';

// 1. Axios 인스턴스 생성 (기본 설정)
export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // 필요하다면 baseURL 설정 (MSW는 상대 경로도 잘 잡으므로 생략 가능)
});

// 2. SWR에서 사용할 Fetcher 함수
// url을 받아서 axios로 요청하고, 데이터(data)만 반환
export const fetcher = (url: string) => api.get(url).then((res) => res.data);
