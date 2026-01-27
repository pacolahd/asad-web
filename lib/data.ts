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
// Programs
// ============================================

export async function getPrograms(locale: LocaleParam = 'en', category?: 'community' | 'sports') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'programs',
      locale,
      ...(category && { where: { category: { equals: category } } }),
      sort: 'sortOrder',
      depth: 1,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching programs:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function getProgramBySlug(slug: string, locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return null;

  try {
    const { docs } = await payload.find({
      collection: 'programs',
      locale,
      where: {
        slug: { equals: slug },
      },
      depth: 1,
      limit: 1,
    });

    return docs[0] || null;
  } catch (error) {
    console.log('Error fetching program by slug:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// ============================================
// Leadership
// ============================================

export async function getLeadership(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'leadership',
      locale,
      sort: 'sortOrder',
      depth: 1,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching leadership:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

// ============================================
// Timeline
// ============================================

export async function getTimeline(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'timeline',
      locale,
      sort: '-year',
      depth: 0,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching timeline:', error instanceof Error ? error.message : 'Unknown error');
    return [];
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
// Stats
// ============================================

export async function getStats(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'stats',
      locale,
      sort: 'sortOrder',
      depth: 0,
      limit: 10,
    });

    // Handle dynamic stats
    const settings = await getSiteSettings(locale);
    const foundedYear = settings?.founded || 2004;

    return docs.map((stat) => {
      if (stat.isDynamic && stat.dynamicType === 'years-since-founded') {
        return {
          ...stat,
          value: new Date().getFullYear() - foundedYear,
        };
      }
      return stat;
    });
  } catch (error) {
    console.log('Error fetching stats:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

// ============================================
// Memorial Members
// ============================================

export async function getMemorialMembers(locale: LocaleParam = 'en') {
  const payload = await safeGetPayload();
  if (!payload) return [];

  try {
    const { docs } = await payload.find({
      collection: 'memorial-members',
      locale,
      sort: '-deathYear',
      depth: 1,
      limit: 100,
    });

    return docs;
  } catch (error) {
    console.log('Error fetching memorial members:', error instanceof Error ? error.message : 'Unknown error');
    return [];
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
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
      depth: 0,
    });
  } catch (error) {
    console.log('Error fetching media page:', error instanceof Error ? error.message : 'Unknown error');
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
