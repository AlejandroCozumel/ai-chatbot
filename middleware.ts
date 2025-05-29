import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Create route matchers for your public and ignored routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/auth(.*)",
  "/portal(.*)",
  "/images(.*)",
  "/chatbot(.*)" // Include ignored routes as public
]);

export default clerkMiddleware(async (auth, req) => {
  // If the route is not public, check authentication
  if (!isPublicRoute(req)) {
    const { userId } = await auth();

    // If user is not authenticated, redirect to sign-in
    if (!userId) {
      const signInUrl = new URL("/auth/sign-in", req.url);
      // Optionally add the current URL as a redirect parameter
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};