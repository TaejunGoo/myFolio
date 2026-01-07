import { format, parseISO } from "date-fns";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectHeaderProps {
  title: string;
  category: string;
  client: string;
  periodStart: string;
  periodEnd?: string;
  projectLink?: string;
}

const ProjectHeader = ({
  title,
  category,
  client,
  periodStart,
  periodEnd,
  projectLink,
}: ProjectHeaderProps) => {
  const formattedStart = format(parseISO(periodStart), "yyyy.MM");
  const formattedEnd = periodEnd ? format(parseISO(periodEnd), "yyyy.MM") : "진행 중";

  return (
    <header className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-1 size-4" />
            목록으로
          </Link>
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{category}</Badge>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              사이트 방문
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>

        <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
          <span className="font-medium text-foreground">{client}</span>
          <span>·</span>
          <span>{formattedStart} - {formattedEnd}</span>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
