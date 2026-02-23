import Container from "@/components/layout/header/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main>
      <section className="pt-16 md:pt-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <Skeleton className="h-[400px] w-full lg:basis-2/5" />
            <Skeleton className="h-[400px] w-full lg:basis-3/5" />
          </div>
        </Container>
      </section>

      <Container className="my-16 md:my-20">
        <Skeleton className="h-[1px] w-full" />
      </Container>

      <section>
        <Container>
          <Skeleton className="mb-8 h-10 w-48" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="aspect-video w-full rounded-lg" />
            ))}
          </div>
        </Container>
      </section>

      <Container className="my-16 md:my-20">
        <Skeleton className="h-[1px] w-full" />
      </Container>

      <section className="mb-16 md:mb-20">
        <Container>
          <Skeleton className="mb-8 h-10 w-48" />
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Loading;
