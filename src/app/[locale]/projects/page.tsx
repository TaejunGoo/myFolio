import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  // const t = useTranslations('ProjectsPage');
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Projects List</h1>
      <p className="text-muted-foreground">진행했던 프로젝트들을 소개합니다.</p>
      {/* 프로젝트 목록 컴포넌트가 들어갈 자리 */}
    </div>
  );
}
