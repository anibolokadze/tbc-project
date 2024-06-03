import { NextResponse, NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

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

const publicRoutes = ["/landing"];

export default async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const session = await getSession(request, res);
  const userId = session?.user?.sub;

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/posts") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);

  const error = request.nextUrl.searchParams.get("error");

  // Handle `access_denied` error
  if (error === "access_denied") {
    return NextResponse.redirect(new URL("/landing", request.nextUrl));
  }

  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/landing", request.nextUrl));
  }

  if (isPublicRoute && userId) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
    "/api/auth/callback",
  ],
};
