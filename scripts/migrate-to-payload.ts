/**
 * Migration script to import existing static data into Payload CMS
 *
 * Run with: npx tsx scripts/migrate-to-payload.ts
 *
 * This script migrates:
 * - Site settings
 * - Programs (community and sports)
 * - Leadership team
 * - Timeline events
 * - Stats
 * - Gallery albums (metadata only, images need manual upload)
 */

import { getPayload } from 'payload';
import config from '@payload-config';

// Import static data
import { siteConfig, stats } from '@/data/site-config';
import { communityPrograms, sportsPrograms } from '@/data/programs';
import { leadershipTeam, historyTimeline } from '@/data/leadership';
import { galleryAlbums } from '@/data/gallery-albums';

async function migrate() {
  console.log('Starting migration to Payload CMS...\n');

  const payload = await getPayload({ config });

  // 1. Migrate Site Settings
  console.log('1. Migrating site settings...');
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      locale: 'en',
      data: {
        name: siteConfig.name,
        fullName: siteConfig.fullName,
        description: siteConfig.description,
        slogan: siteConfig.slogan,
        founded: siteConfig.founded,
        location: siteConfig.location,
        contact: siteConfig.contact,
        social: siteConfig.social,
      },
    });
    console.log('   ✓ Site settings migrated\n');
  } catch (error) {
    console.error('   ✗ Site settings migration failed:', error);
  }

  // 2. Migrate Stats
  console.log('2. Migrating stats...');
  for (const [index, stat] of stats.entries()) {
    try {
      // Check if stat already exists
      const existing = await payload.find({
        collection: 'stats',
        where: {
          label: { equals: stat.label },
        },
        locale: 'en',
      });

      if (existing.docs.length > 0) {
        console.log(`   - Skipping "${stat.label}" (already exists)`);
        continue;
      }

      // Handle dynamic "Years of Excellence" stat
      const isDynamic = stat.label === 'Years of Excellence';

      await payload.create({
        collection: 'stats',
        locale: 'en',
        data: {
          value: isDynamic ? 0 : stat.value as number,
          label: stat.label,
          prefix: undefined,
          suffix: stat.suffix || undefined,
          isDynamic,
          dynamicType: isDynamic ? 'years-since-founded' : undefined,
          sortOrder: index,
        },
      });
      console.log(`   ✓ Created stat: ${stat.label}`);
    } catch (error) {
      console.error(`   ✗ Failed to create stat "${stat.label}":`, error);
    }
  }
  console.log();

  // 3. Migrate Programs
  console.log('3. Migrating programs...');
  const allPrograms = [
    ...communityPrograms.map((p) => ({ ...p, category: 'community' as const })),
    ...sportsPrograms.map((p) => ({ ...p, category: 'sports' as const })),
  ];

  for (const [index, program] of allPrograms.entries()) {
    try {
      const existing = await payload.find({
        collection: 'programs',
        where: {
          slug: { equals: program.id },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`   - Skipping "${program.title}" (already exists)`);
        continue;
      }

      await payload.create({
        collection: 'programs',
        locale: 'en',
        data: {
          title: program.title,
          slug: program.id,
          description: program.description,
          category: program.category,
          icon: program.icon || undefined,
          sortOrder: index,
        },
      });
      console.log(`   ✓ Created program: ${program.title}`);
    } catch (error) {
      console.error(`   ✗ Failed to create program "${program.title}":`, error);
    }
  }
  console.log();

  // 4. Migrate Leadership
  console.log('4. Migrating leadership team...');
  for (const [index, member] of leadershipTeam.entries()) {
    try {
      const existing = await payload.find({
        collection: 'leadership',
        where: {
          name: { equals: member.name },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`   - Skipping "${member.name}" (already exists)`);
        continue;
      }

      await payload.create({
        collection: 'leadership',
        locale: 'en',
        data: {
          name: member.name,
          role: member.role,
          bio: member.bio || undefined,
          since: member.since || undefined,
          sortOrder: index,
        },
      });
      console.log(`   ✓ Created leader: ${member.name}`);
    } catch (error) {
      console.error(`   ✗ Failed to create leader "${member.name}":`, error);
    }
  }
  console.log();

  // 5. Migrate Timeline
  console.log('5. Migrating timeline events...');
  for (const event of historyTimeline) {
    try {
      const existing = await payload.find({
        collection: 'timeline',
        where: {
          year: { equals: event.year },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`   - Skipping year ${event.year} (already exists)`);
        continue;
      }

      await payload.create({
        collection: 'timeline',
        locale: 'en',
        data: {
          year: event.year,
          title: event.title,
          description: event.description,
        },
      });
      console.log(`   ✓ Created timeline event: ${event.year} - ${event.title}`);
    } catch (error) {
      console.error(`   ✗ Failed to create timeline event for ${event.year}:`, error);
    }
  }
  console.log();

  // 6. Migrate Gallery Albums (metadata only - images need manual upload)
  console.log('6. Migrating gallery albums (metadata only)...');
  console.log('   Note: Album cover images and photos need to be uploaded manually via admin panel\n');

  for (const album of galleryAlbums) {
    try {
      const existing = await payload.find({
        collection: 'gallery-albums',
        where: {
          slug: { equals: album.id },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`   - Skipping "${album.title}" (already exists)`);
        continue;
      }

      // Create album without images (they need to be uploaded manually)
      await payload.create({
        collection: 'gallery-albums',
        locale: 'en',
        data: {
          title: album.title,
          slug: album.id,
          description: album.description || undefined,
          date: album.date || undefined,
          // Note: coverImage and images array will be empty
          // Upload images via admin panel and update album
        },
      });
      console.log(`   ✓ Created album: ${album.title} (needs cover image and ${album.images.length} photos)`);
    } catch (error) {
      console.error(`   ✗ Failed to create album "${album.title}":`, error);
    }
  }
  console.log();

  console.log('Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Go to /admin and log in');
  console.log('2. Upload images to Media collection');
  console.log('3. Update gallery albums with cover images and photos');
  console.log('4. Update leadership members with profile photos');
  console.log('5. Review and edit French translations (auto-generated via DeepL)');

  process.exit(0);
}

migrate().catch((error) => {
  console.error('Migration failed:', error);
  process.exit(1);
});
