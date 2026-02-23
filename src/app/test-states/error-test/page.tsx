"use client";

import { useEffect } from "react";

const ErrorTestPage = () => {
  useEffect(() => {
    // 렌더링 후 의도적으로 에러를 발생시켜 error.tsx를 트리거합니다.
    throw new Error("테스트를 위한 의도적인 에러입니다.");
  }, []);

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold">에러 테스트 준비 중...</h2>
      <p className="mt-4 text-muted-foreground">이 문구는 보이지 않고 바로 에러 페이지가 나타나야 합니다.</p>
    </div>
  );
};

export default ErrorTestPage;
