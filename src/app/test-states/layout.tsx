import type { ReactNode } from "react";

import { notFound } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const TestStatesLayout = ({ children }: { children: ReactNode }) => {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return children;
};

export default TestStatesLayout;
