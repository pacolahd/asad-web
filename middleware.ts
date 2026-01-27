import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /admin (Payload CMS admin panel)
    // - /api routes
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /images, /documents (static files)
    // - favicon.ico, sitemap.xml, robots.txt
    '/((?!admin|api|_next|_vercel|images|documents|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
