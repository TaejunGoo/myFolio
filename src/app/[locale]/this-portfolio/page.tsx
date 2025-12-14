const ThisPortfolioPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">About This Portfolio</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        이 포트폴리오 사이트가 어떻게 만들어졌는지, 기술적 고민과 해결 과정을 기록했습니다.
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">1. Purpose & Concept</h2>
          <p>퍼블리셔로서의 역량과 프론트엔드 기술력을 동시에 보여주기 위해...</p>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-semibold">2. Tech Stack & Decisions</h2>
          <p>Next.js App Router, Tailwind CSS v4, Zustand...</p>
        </section>
      </div>
    </div>
  );
};
export default ThisPortfolioPage;
