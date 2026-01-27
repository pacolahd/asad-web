import { getPayload } from './payload';
import type { Locale } from '@/i18n/config';

export type LocaleParam = Locale;

// ============================================
// Site Settings
// ============================================

export async function getSiteSettings(locale: LocaleParam = 'en') {
  const payload = await getPayload();

  return payload.findGlobal({
    slug: 'site-settings',
    locale,
    depth: 0,
  });
}

// ============================================
// Programs
// ============================================

export async function getPrograms(locale: LocaleParam = 'en', category?: 'community' | 'sports') {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'programs',
    locale,
    ...(category && { where: { category: { equals: category } } }),
    sort: 'sortOrder',
    depth: 1,
    limit: 100,
  });

  return docs;
}

export async function getProgramBySlug(slug: string, locale: LocaleParam = 'en') {
  const payload = await getPayload();

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
}

// ============================================
// Leadership
// ============================================

export async function getLeadership(locale: LocaleParam = 'en') {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'leadership',
    locale,
    sort: 'sortOrder',
    depth: 1,
    limit: 100,
  });

  return docs;
}

// ============================================
// Timeline
// ============================================

export async function getTimeline(locale: LocaleParam = 'en') {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'timeline',
    locale,
    sort: '-year',
    depth: 0,
    limit: 100,
  });

  return docs;
}

// ============================================
// Gallery Albums
// ============================================

export async function getGalleryAlbums(locale: LocaleParam = 'en') {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'gallery-albums',
    locale,
    sort: '-createdAt',
    depth: 2,
    limit: 100,
  });

  return docs;
}

export async function getGalleryAlbumBySlug(slug: string, locale: LocaleParam = 'en') {
  const payload = await getPayload();

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
}

// ============================================
// Stats
// ============================================

export async function getStats(locale: LocaleParam = 'en') {
  const payload = await getPayload();

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
}

// ============================================
// Memorial Members
// ============================================

export async function getMemorialMembers(locale: LocaleParam = 'en') {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'memorial-members',
    locale,
    sort: '-deathYear',
    depth: 1,
    limit: 100,
  });

  return docs;
}

// ============================================
// Documents
// ============================================

export async function getDocuments(locale: LocaleParam = 'en', category?: string) {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: 'documents',
    locale,
    ...(category && { where: { category: { equals: category } } }),
    sort: '-createdAt',
    depth: 1,
    limit: 100,
  });

  return docs;
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
