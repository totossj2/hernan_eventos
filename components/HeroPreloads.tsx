import { headers } from 'next/headers';
import { HERO_RESOURCES } from '@/lib/performance';

/**
 * Component that adds preload links for hero images.
 * Only adds them on the home page to avoid unnecessary preloads on other pages.
 * This is a server component that checks the pathname from middleware headers.
 */
export async function HeroPreloads() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const isHomePage = pathname === '/';

  // Only render preloads on home page
  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {HERO_RESOURCES.map((resource) => {
        const isMobile = resource.includes('mobile');
        return (
          <link
            key={resource}
            rel="preload"
            href={resource}
            as="image"
            type="image/webp"
            media={isMobile ? '(max-width: 767px)' : '(min-width: 768px)'}
            fetchPriority="high"
          />
        );
      })}
    </>
  );
}
