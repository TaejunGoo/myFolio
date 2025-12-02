import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/notices', () => {
    return HttpResponse.json([
      { id: 1, title: '서비스 오픈 안내', date: '2025-12-01', content: '결(Gyeol) 서비스가 오픈되었습니다.' },
      { id: 2, title: '점검 안내', date: '2025-12-05', content: '서버 안정화를 위한 점검이 예정되어 있습니다.' },
      { id: 3, title: '이벤트 당첨자 발표', date: '2025-12-10', content: '축하합니다! 당첨자 명단입니다.' },
    ]);
  }),
];
