import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
	"/",
	"/sign-in(.*)",
	"/sign-up(.*)",
	"/api/public(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
	if (!isPublicRoute(req)) {
		// Protect all routes that aren't public
		await auth.protect();
	}
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files
		"/((?!_next|[^?]*\\.(html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico)$).*)",
		// Always run for API routes
		"/(api|trpc)(.*)"
	]
};
