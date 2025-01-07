import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
  locales,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

export async function middleware(req) {
  const url = req.nextUrl.clone();

  const lang =
    req.cookies.get("NEXT_LOCALE")?.value ||
    req?.headers?.get("accept-language")?.split(",")[0].split("-")[0] ||
    "en";
  if (url.pathname.startsWith("/en") || url.pathname.startsWith("/id")) {
    console.log("Kondisi 1");
    return NextResponse.next();
  }

  if (
    !url.pathname.startsWith("/en") ||
    !url.pathname.startsWith("/id") ||
    url.pathname === "/"
  ) {
    url.pathname = `/${lang}${req.nextUrl.pathname}`;
    console.log("Kondisi 2");
    return NextResponse.redirect(url, 301);
  }
  // return NextResponse.next();
}
