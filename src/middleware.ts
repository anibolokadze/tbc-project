import { NextResponse, NextRequest } from "next/server";
// import { AUTH_COOKIE_KEY } from "../constants";
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

const publicRoutes = ["/login"];

export default async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const session = await getSession(request, res);
  const userId = session?.user?.sub;

  // const cookie = request.cookies.get(AUTH_COOKIE_KEY)?.value;
  // let token = null;

  // if (cookie) {
  //   const cookieObject = JSON.parse(cookie);
  //   if (cookieObject) {
  //     token = cookieObject?.token;
  //   }
  // }

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/posts") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));
  }
  if (isPublicRoute && (userId === undefined || userId)) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  return null;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
  ],
};
