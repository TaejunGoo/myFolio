import { ImageResponse } from "next/og";

import { OG_IMAGE_SIZE, SITE_AUTHOR, SITE_URL } from "@/data/shared";

export const runtime = "edge";

export const alt = "프로젝트 상세";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;

  // 프로젝트 데이터 가져오기
  const { getProjectBySlug } = await import("@/data/projects");
  const project = getProjectBySlug(slug);

  if (!project) {
    return new Response("Not Found", { status: 404 });
  }

  // Pretendard OTF 폰트 로드
  const [fontRegular, fontBold] = await Promise.all([
    fetch(`${SITE_URL}/fonts/pretendard/Pretendard-Regular.otf`).then((res) => res.arrayBuffer()),
    fetch(`${SITE_URL}/fonts/pretendard/Pretendard-Bold.otf`).then((res) => res.arrayBuffer()),
  ]);

  // 프로젝트 기간 포맷팅
  const formatPeriod = () => {
    const start = project.periodStart;
    const end = project.periodEnd ?? "현재";
    return `${start} - ${end}`;
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundImage: `url(${SITE_URL}/images/meta/og_bg.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Pretendard",
          padding: "150px 50px",
        }}
      >
        {/* 메인 콘텐츠 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* 프로젝트 제목 */}
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 700,
              color: "white",
              textAlign: "left",
              lineHeight: 1.2,
              marginBottom: "12px",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            {project.title}
          </div>

          {/* 프로젝트 기간 */}
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "left",
            }}
          >
            {formatPeriod()}
          </div>
        </div>
        {/* 작성자 */}
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "left",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          {`by ${SITE_AUTHOR}`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Pretendard",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
