import Container from "@/components/layout/header/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container className="flex h-[70vh] flex-col items-center justify-center text-center">
      <Skeleton className="mb-4 h-10 w-48" />
      <Skeleton className="h-6 w-80" />
    </Container>
  );
};

export default Loading;
