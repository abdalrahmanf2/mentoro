import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, publicRoutes } from "./routes";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  const isLoggedIn = false;
  const isMentor = false;
  const isAdmin = false;

  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Case 1: Mentor trying to access non-mentor-dashboard pages
  if (
    isMentor &&
    pathname !== "/mentor-dashboard" &&
    !pathname.startsWith("/mentor-dashboard/")
  ) {
    return NextResponse.redirect(new URL("/mentor-dashboard", request.url));
  }

  // Case 2: A user trying to access mentor-dashboard pages
  if (!isMentor && pathname.startsWith("/mentor-dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Case 3: Logged-in user trying to access auth pages (login, register)
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Case 4: Non-logged-in user trying to access protected routes
  if (!isLoggedIn && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // Case 5: Non-Admin user trying to access admin routes
  if (
    !isAdmin &&
    !isPublicRoute &&
    !isAuthRoute &&
    !pathname.startsWith("/mentor-dashboard")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

// Update the matcher to be more specific
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
