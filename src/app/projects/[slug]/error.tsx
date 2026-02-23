"use client";

import { useEffect } from "react";

import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";

const ProjectError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex h-[70vh] flex-col items-center justify-center text-center">
      <div className="bg-warning/10 flex size-16 items-center justify-center rounded-full">
        <AlertTriangle className="text-warning size-8" />
      </div>
      <h2 className="mt-6 text-xl font-bold tracking-tight md:text-2xl">
        프로젝트 정보를 불러올 수 없습니다.
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground md:text-base">
        요청하신 프로젝트를 찾을 수 없거나 불러오는 도중 오류가 발생했습니다.
      </p>
      <div className="mt-8 flex gap-4">
        <Button
          onClick={() => reset()}
          size="default"
          className="gap-2"
        >
          <RefreshCw className="size-4" />
          다시 시도
        </Button>
        <Link href="/">
          <Button
            variant="outline"
            size="default"
            className="gap-2"
          >
            <ArrowLeft className="size-4" />
            전체 프로젝트 보기
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ProjectError;
