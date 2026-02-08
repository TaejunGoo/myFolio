
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import AnimatedBackground from "@/components/layout/AnimatedBackground";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/shared/utils/cn";

import type { Metadata } from "next";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard", // Tailwind에서 쓸 변수 이름
  weight: "400 700", // 가변 폰트 웨이트 범위
});

export const metadata: Metadata = {
  title: "구태준 | 웹 포트폴리오",
  description: "퍼블리셔ꞏUI 엔지니어 구태준 입니다.",
  openGraph: {
    title: "구태준 | 웹 포트폴리오",
    description: "퍼블리셔ꞏUI 엔지니어 구태준 입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "구태준 | 웹 포트폴리오",
    images: [
      {
        url: "/images/profile/og.jpg",
        width: 1200,
        height: 630,
        alt: "구태준 | 웹 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "구태준 | 웹 포트폴리오",
    description: "퍼블리셔ꞏUI 엔지니어 구태준 입니다.",
    images: ["/images/profile/og.jpg"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="ko"
      className={`
        ${pretendard.variable}
      `}
      suppressHydrationWarning
    >
      <body className={cn(pretendard.className, "pt-16 antialiased md:pt-20")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <AnimatedBackground />
          <Header />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
