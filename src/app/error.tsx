"use client";

import { useEffect } from "react";

import { AlertCircle, RefreshCw } from "lucide-react";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <Container className="flex h-[70vh] flex-col items-center justify-center text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="size-10 text-destructive" />
      </div>
      <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
        문제가 발생했습니다.
      </h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        페이지를 불러오는 중에 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>
      <div className="mt-10 flex gap-4">
        <Button
          onClick={() => reset()}
          size="lg"
          className="gap-2"
        >
          <RefreshCw className="size-4" />
          다시 시도
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          홈으로 이동
        </Button>
      </div>
      {error.digest && (
        <p className="mt-8 text-xs text-muted-foreground/50">
          에러 코드: {error.digest}
        </p>
      )}
    </Container>
  );
};

export default Error;
