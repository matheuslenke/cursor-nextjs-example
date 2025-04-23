import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Define paths that are considered public (accessible without login)
const publicPaths = ['/login', '/api/auth']; // Allow access to login and NextAuth API routes

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is public
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (isPublicPath) {
    // Allow access to public paths
    return NextResponse.next();
  }

  // Check for session token on protected routes
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // If no token exists and it's not a public path, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Add a callbackUrl so the user is redirected back after login
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login page itself to avoid redirect loops
     * - api/auth routes for NextAuth
     */
    '/((?!_next/static|_next/image|favicon.ico|login|api/auth).*)',
     // Apply middleware specifically to dashboard routes if needed
     // '/dashboard/:path*', 
  ],
}; 