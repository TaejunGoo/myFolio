import type { Metadata } from "next";

import { profile } from "@/data/profile";

// ========================================
// 사이트 기본 정보 (profile에서 파생)
// ========================================
export const SITE_NAME = `${profile.nameEn} | 웹 포트폴리오`;
export const SITE_DESCRIPTION = `${profile.title} ${profile.name} 입니다.`;
export const SITE_AUTHOR = profile.nameEn;
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://taejun-my-folio.vercel.app";
export const SITE_LOCALE = "ko_KR";

// ========================================
// OG 이미지 정보
// ========================================
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/meta/og.jpg`,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
} as const;

// ========================================
// OG 이미지 동적 생성용 스타일 상수
// ========================================
export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

// ========================================
// 메타데이터 생성 헬퍼 함수
// ========================================
interface CreateMetadataOptions {
  title?: string;
  description?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  noIndex?: boolean;
}

/**
 * 공통 메타데이터 생성 함수
 */
export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const {
    title = SITE_NAME,
    description = SITE_DESCRIPTION,
    ogImage = DEFAULT_OG_IMAGE,
    noIndex = false,
  } = options;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description,
      type: "website",
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width ?? DEFAULT_OG_IMAGE.width,
          height: ogImage.height ?? DEFAULT_OG_IMAGE.height,
          alt: ogImage.alt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/**
 * 프로젝트 상세 페이지 메타데이터 생성 함수
 */
interface CreateProjectMetadataOptions {
  title: string;
  description: string;
  slug: string;
}

export function createProjectMetadata({
  title,
  description,
  slug,
}: CreateProjectMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ogImageUrl = `${SITE_URL}/projects/${slug}/opengraph-image`;

  return createMetadata({
    title: fullTitle,
    description,
    ogImage: {
      url: ogImageUrl,
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      alt: title,
    },
  });
}
