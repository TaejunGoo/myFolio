'use client';

import { useEffect, useState } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      if (typeof window !== 'undefined') {
        const { worker } = await import('@/mocks/browser');
        await worker.start({
          onUnhandledRequest: 'bypass', // 핸들러 없는 요청은 그냥 통과
        });
        setMswReady(true);
      }
    }
    enableMocking();
  }, []);

  // MSW가 준비되기 전에는 아무것도 렌더링하지 않음 (선택사항)
  if (!mswReady) return null;

  return <>{children}</>;
}
