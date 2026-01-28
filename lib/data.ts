import { getPayload } from './payload';
import type { Locale } from '@/i18n/config';

export type LocaleParam = Locale;

// Helper to safely get payload with error handling
async function safeGetPayload() {
  try {
    return await getPayload();
  } catch (error) {
    console.log('Payload connection failed:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// ============================================
// Site Settings
// ============================================

export async function getSiteSettings(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'site-settings',
      locale,
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching site settings:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// ============================================
// Gallery Albums
// ============================================

export async function getGalleryAlbums(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'gallery-albums',
      locale,
      sort: '-createdAt',
      depth: 2,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching gallery albums:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function getGalleryAlbumBySlug(slug: string, locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    const { docs } = await payload.find({
      collection: 'gallery-albums',
      locale,
      where: {
        slug: { equals: slug },
      },
      depth: 2,
      limit: 1,
    });

    return docs[0] || null;
  } catch (error) {
    console.log('Error fetching gallery album by slug:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// ============================================
// Documents
// ============================================

export async function getDocuments(locale: LocaleParam = 'en', category?: string) {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'documents',
      locale,
      ...(category && { where: { category: { equals: category } } }),
      sort: '-createdAt',
      depth: 1,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching documents:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

// ============================================
// Media Helpers
// ============================================

export function getMediaUrl(media: { url?: string } | string | null | undefined): string {
  if (!media) return '';
  if (typeof media === 'string') return media;
  return media.url || '';
}

export function getMediaSizedUrl(
  media: { url?: string; sizes?: Record<string, { url?: string }> } | string | null | undefined,
  size: 'thumbnail' | 'card' | 'large' = 'large'
): string {
  if (!media) return '';
  if (typeof media === 'string') return media;
  return media.sizes?.[size]?.url || media.url || '';
}

// ============================================
// Page Content Globals
// ============================================

export async function getHomePage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'home-page',
      locale,
      depth: 1, // For aboutSectionImage
    });
  } catch (error) {
    console.log('Error fetching home page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getAboutPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'about-page',
      locale,
      depth: 1, // For storyImage
    });
  } catch (error) {
    console.log('Error fetching about page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getHistoryPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'history-page',
      locale,
      depth: 1, // For embedded timelineEvents
    });
  } catch (error) {
    console.log('Error fetching history page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getLeadershipPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'leadership-page',
      locale,
      depth: 1, // For embedded teamMembers with images
    });
  } catch (error) {
    console.log('Error fetching leadership page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getStatutesPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'statutes-page',
      locale,
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching statutes page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getCommunityPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'community-page',
      locale,
      depth: 1, // For embedded program data
    });
  } catch (error) {
    console.log('Error fetching community page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getSportsPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'sports-page',
      locale,
      depth: 1, // For embedded activity data and media uploads
    });
  } catch (error) {
    console.log('Error fetching sports page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getMembersPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'members-page',
      locale,
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching members page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getInMemoriamPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'in-memoriam-page',
      locale,
      depth: 1, // For embedded departedMembers with images
    });
  } catch (error) {
    console.log('Error fetching in-memoriam page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getMediaPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'media-page',
      locale,
      depth: 1, // For featuredMoments[].image
    });
  } catch (error) {
    console.log('Error fetching media page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getGalleryPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'gallery-page',
      locale,
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching gallery page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getProgramOfYearPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'program-of-year-page',
      locale,
      depth: 1, // For embedded periods and events arrays
    });
  } catch (error) {
    console.log('Error fetching program of year page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

export async function getContactPage(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    return await payload.findGlobal({
      slug: 'contact-page',
      locale,
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching contact page:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}
