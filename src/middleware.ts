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

const publicRoutes = ["/login"];

export default async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  try {
    // Change: Added try-catch block to handle and log errors.
    const session = await getSession(request, res);
    const userId = session?.user?.sub;

    const path = request.nextUrl.pathname;
    const isProtectedRoute =
      protectedRoutes.includes(path) ||
      path.includes("/posts") ||
      path.includes("/products");

    const isPublicRoute = publicRoutes.includes(path);

    if (isProtectedRoute && !userId) {
      console.log(`Redirecting to login from protected route: ${path}`); // Change: Added logging for debugging.
      return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));
    }
    if (isPublicRoute && (userId === undefined || userId)) {
      console.log(`Redirecting to home from public route: ${path}`); // Change: Added logging for debugging.
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    console.log(`Allowing access to: ${path}`); // Change: Added logging for debugging.
    return res;
  } catch (error) {
    // Change: Added error handling.
    console.error("Middleware error:", error); // Change: Log the error.
    return new NextResponse("Internal Server Error", { status: 500 }); // Change: Return 500 response in case of an error.
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|logo.svg|assets).*)",
  ],
};
