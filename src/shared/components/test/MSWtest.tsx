'use client';

import useSWR from 'swr';
import { fetcher } from '@/shared/api/axios';
import { cn } from '@/shared/utils/cn'; // 아까 만든 유틸 활용

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

export default function MSWtest() {
  // ✅ SWR 사용: useEffect, useState, 로딩 처리 등을 한 줄로 해결
  // 첫 번째 인자: API URL (Key 역할)
  // 두 번째 인자: 데이터를 가져오는 함수 (Axios fetcher)
  const { data: notices, error, isLoading } = useSWR<Notice[]>('/api/notices', fetcher);

  // 1. 로딩 상태 처리
  if (isLoading) {
    return <div className="animate-pulse p-4 text-blue-500">데이터 불러오는 중... ⏳</div>;
  }

  // 2. 에러 상태 처리
  if (error) {
    return <div className="p-4 text-red-500">에러가 발생했습니다 😢</div>;
  }

  // 3. 데이터 렌더링
  return (
    <div className="mx-auto mt-8 max-w-md rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">📢 공지사항 (SWR + Axios)</h2>
      <ul className="space-y-4">
        {notices?.map((notice) => (
          <li key={notice.id} className={cn(`
            border-b pb-2
            hover:bg-gray-50
          `, 'transition-colors duration-200')}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{notice.title}</span>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{notice.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
