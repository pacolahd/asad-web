import { getPayload } from './payload';

// Default founded year (should match SiteSettings default)
const DEFAULT_FOUNDED_YEAR = 2004;
const PROGRAMS_STARTED_YEAR = 2010;

// ============================================
// Dynamic Stats from Database
// ============================================

/**
 * Get media statistics from the database
 * Returns the count of image files in the media collection
 */
export async function getMediaStats(): Promise<{ photoCount: number }> {
  try {
    const payload = await getPayload();
    if (!payload) return { photoCount: 0 };

    const result = await payload.count({
      collection: 'media',
      where: {
        mimeType: { contains: 'image' },
      },
    });

    return { photoCount: result.totalDocs };
  } catch (error) {
    console.log('Error fetching media stats:', error instanceof Error ? error.message : 'Unknown error');
    return { photoCount: 0 };
  }
}

/**
 * Get gallery album statistics from the database
 * Returns the count of gallery albums
 */
export async function getGalleryStats(): Promise<{ albumCount: number }> {
  try {
    const payload = await getPayload();
    if (!payload) return { albumCount: 0 };

    const result = await payload.count({
      collection: 'gallery-albums',
    });

    return { albumCount: result.totalDocs };
  } catch (error) {
    console.log('Error fetching gallery stats:', error instanceof Error ? error.message : 'Unknown error');
    return { albumCount: 0 };
  }
}

// ============================================
// Calculated Stats (from known values)
// ============================================

/**
 * Calculate years since a given start year
 */
export function getYearsSince(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

/**
 * Get years of excellence (years since founding)
 */
export function getYearsOfExcellence(foundedYear?: number): number {
  return getYearsSince(foundedYear || DEFAULT_FOUNDED_YEAR);
}

/**
 * Get years of community programs
 */
export function getYearsOfPrograms(): number {
  return getYearsSince(PROGRAMS_STARTED_YEAR);
}

// ============================================
// Stats from Page Data (count arrays)
// ============================================

type SportsPageData = {
  achievements?: Array<unknown> | null;
  upcomingEvents?: Array<unknown> | null;
  hallOfChampions?: Array<unknown> | null;
  recentMatches?: Array<unknown> | null;
};

type InMemoriamPageData = {
  departedMembers?: Array<unknown> | null;
};

type CommunityPageData = {
  programs?: Array<unknown> | null;
};

/**
 * Count achievements from sports page data
 */
export function countAchievements(sportsPage: SportsPageData | null): number {
  return sportsPage?.achievements?.length || 0;
}

/**
 * Count upcoming events from sports page data
 */
export function countUpcomingEvents(sportsPage: SportsPageData | null): number {
  return sportsPage?.upcomingEvents?.length || 0;
}

/**
 * Count hall of champions entries from sports page data
 */
export function countHallOfChampions(sportsPage: SportsPageData | null): number {
  return sportsPage?.hallOfChampions?.length || 0;
}

/**
 * Count recent matches from sports page data
 */
export function countRecentMatches(sportsPage: SportsPageData | null): number {
  return sportsPage?.recentMatches?.length || 0;
}

/**
 * Count departed members from in memoriam page data
 */
export function countDepartedMembers(inMemoriamPage: InMemoriamPageData | null): number {
  return inMemoriamPage?.departedMembers?.length || 0;
}

/**
 * Count active programs from community page data
 */
export function countPrograms(communityPage: CommunityPageData | null): number {
  return communityPage?.programs?.length || 0;
}

// ============================================
// Stat Formatting Helpers
// ============================================

/**
 * Format a number with a suffix (e.g., "50+" or "100+")
 */
export function formatStatWithSuffix(value: number, threshold = 10): string {
  if (value >= threshold) {
    // Round down to nearest 10 and add +
    const rounded = Math.floor(value / 10) * 10;
    return `${rounded}+`;
  }
  return String(value);
}

/**
 * Format photo count for display
 * Returns a formatted string like "500+" or the actual count
 */
export function formatPhotoCount(count: number): string {
  if (count === 0) return '0';
  if (count >= 500) return `${Math.floor(count / 100) * 100}+`;
  if (count >= 100) return `${Math.floor(count / 50) * 50}+`;
  if (count >= 10) return `${Math.floor(count / 10) * 10}+`;
  return String(count);
}
