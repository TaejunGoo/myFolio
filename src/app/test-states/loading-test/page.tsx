import Container from "@/components/layout/header/Container";
import { sleep } from "@/shared/utils";

const LoadingTestPage = async () => {
  // 의도적으로 3초 지연시켜 스켈레톤 UI를 확인합니다.
  await sleep(3000);

  return (
    <Container className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold">로딩 완료!</h2>
      <p className="mt-4 text-muted-foreground">3초간의 스켈레톤 UI 노출 후 콘텐츠가 정상적으로 렌더링되었습니다.</p>
    </Container>
  );
};

export default LoadingTestPage;
