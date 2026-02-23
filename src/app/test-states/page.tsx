import { Loader2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TestStatesPage = () => {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">로딩 및 에러 상태 테스트</h1>
          <p className="text-lg text-muted-foreground">새로 구현한 공통 로딩(Skeleton)과 에러 UI를 확인하기 위한 테스트 영역입니다.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Loading Test Card */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary">
                <Loader2 className="size-6 animate-spin" />
                <CardTitle>로딩 상태 확인</CardTitle>
              </div>
              <CardDescription>의도적으로 3초간 지연을 발생시켜 스켈레톤 UI를 확인합니다.</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-6">
              <Link href="/test-states/loading-test">
                <Button className="w-full gap-2">
                  테스트 시작 <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Error Test Card */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="size-6" />
                <CardTitle>에러 상태 확인</CardTitle>
              </div>
              <CardDescription>의도적으로 런타임 오류를 발생시켜 공통 에러 UI를 확인합니다.</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-6">
              <Link href="/test-states/error-test">
                <Button variant="destructive" className="w-full gap-2">
                  테스트 시작 <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-muted/50 p-6 text-sm text-muted-foreground">
          <h3 className="mb-2 font-bold text-foreground">💡 확인 가이드</h3>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>로딩</strong>: 버튼 클릭 시 화면 전체가 스켈레톤 UI로 나타나며 3초 후 실제 내용이 로드됩니다.</li>
            <li><strong>에러</strong>: 버튼 클릭 시 &quot;문제가 발생했습니다&quot; 라는 문구와 함께 다시 시도 버튼이 나타납니다.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TestStatesPage;
