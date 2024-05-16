import { NextResponse, NextRequest } from "next/server";
import { AUTH_COOKIE_KEY } from "../constants";
const protectedRoutes = [
  "/",
  "/about",
  "/admin",
  "/checkout",
  "/contact",
  "/posts",
  "/privacy",
  "/products",
  "/profile",
  "/terms",
];

const publicRoutes = ["/login"];

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(AUTH_COOKIE_KEY)?.value;
  let token = null;

  if (cookie) {
    const cookieObject = JSON.parse(cookie);
    if (cookieObject) {
      token = cookieObject?.token;
    }
  }

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/posts") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  return null;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
  ],
};
