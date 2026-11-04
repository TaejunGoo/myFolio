import { NextResponse } from "next/server";

/** Block development previews before streamed page rendering starts. */
export const proxy = () => {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  return new NextResponse("Not Found", {
    status: 404,
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
};

export const config = {
  matcher: ["/test-states/:path*"],
};
