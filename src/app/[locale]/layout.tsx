import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { MSWProvider } from "@/shared/provider/MSWProvider";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
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
    >
      <body className={pretendard.className}>
        <NextIntlClientProvider locale={locale}>
          <MSWProvider>{children}</MSWProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
