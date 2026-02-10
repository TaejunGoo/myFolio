
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import AnimatedBackground from "@/components/layout/AnimatedBackground";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { createMetadata } from "@/data/shared";
import { cn } from "@/shared/utils/cn";

import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard", // Tailwind에서 쓸 변수 이름
  weight: "400 700", // 가변 폰트 웨이트 범위
});

export const metadata: Metadata = createMetadata();

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
      <body className={cn(pretendard.className, "pt-[67px]! antialiased md:pt-[75px]!")}>
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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
