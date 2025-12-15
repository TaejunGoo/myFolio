import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { Header } from "@/components/layout/header";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { MSWProvider } from "@/shared/provider/MSWProvider";
import { cn } from "@/shared/utils/cn";

const pretendard = localFont({
  src: "../../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard", // Tailwind에서 쓸 변수 이름
  weight: "400 700", // 가변 폰트 웨이트 범위
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const RootLayout = async ({
  children,
  params,
}: Readonly<RootLayoutProps>) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`
        ${pretendard.variable}
      `}
      suppressHydrationWarning
    >
      <body className={cn(pretendard.className, "antialiased")}>
        <NextIntlClientProvider locale={locale}>
          <MSWProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              <Header />
              {children}
            </ThemeProvider>
          </MSWProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
