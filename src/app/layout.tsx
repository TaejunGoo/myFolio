import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import AnimatedBackground from "@/components/layout/AnimatedBackground";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { MSWProvider } from "@/shared/provider/MSWProvider";
import { cn } from "@/shared/utils/cn";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard", // Tailwind에서 쓸 변수 이름
  weight: "400 700", // 가변 폰트 웨이트 범위
});

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
        <MSWProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <AnimatedBackground />
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </MSWProvider>
      </body>
    </html>
  );
};

export default RootLayout;
