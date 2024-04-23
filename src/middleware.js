import { NextResponse } from "next/server";

export function middleware(request) {
  const cookieStore = request.cookies.get("user");
  const { pathname } = request.nextUrl;

  if (!cookieStore?.value && !pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (cookieStore?.value && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
