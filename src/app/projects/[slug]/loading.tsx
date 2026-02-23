import Container from "@/components/layout/header/Container";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectLoading = () => {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section Skeleton */}
        <div className="space-y-6 text-left">
          <Skeleton className="h-12 w-3/4 md:w-1/2" />
          <div className="flex justify-start gap-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-6 w-full md:w-2/3" />
        </div>

        {/* Hero Image Skeleton */}
        <Skeleton className="aspect-video w-full rounded-xl" />

        {/* Content Section Skeleton */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 md:col-span-1">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-4 md:col-span-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectLoading;
