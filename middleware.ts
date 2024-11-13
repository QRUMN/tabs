import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/messages',
  '/settings',
  '/wallet',
];

export function middleware(request: NextRequest) {
  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for auth token
    const token = request.cookies.get('auth-token');

    if (!token) {
      // Redirect to login if no token is found
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}