import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/auth(.*)",
  "/portal(.*)",
  "/images(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  // Completely skip Clerk processing for chatbot routes
  if (req.nextUrl.pathname.startsWith('/chatbot')) {
    return;
  }

  if (!isPublicRoute(req)) {
    const { userId } = await auth();

    if (!userId) {
      const signInUrl = new URL("/auth/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  // Exclude chatbot from the matcher entirely
  matcher: [
    '/((?!_next|chatbot|[^?]*\\.[\\w]+$).*)',
    '/',
    '/(api|trpc)(.*)'
  ]
};