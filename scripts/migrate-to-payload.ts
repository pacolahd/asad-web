/**
 * Migration script to import existing static data into Payload CMS
 *
 * Run with: npx tsx scripts/migrate-to-payload.ts
 *
 * This script migrates:
 * - Site settings
 * - Gallery albums (metadata only, images need manual upload)
 */

import { getPayload } from 'payload';
import config from '@payload-config';

// Import static data
import { siteConfig } from '@/data/site-config';
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

  // 2. Migrate Gallery Albums (metadata only - images need manual upload)
  console.log('2. Migrating gallery albums (metadata only)...');
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
  console.log('4. Configure page content in the Pages section');
  console.log('5. Review and edit French translations (auto-generated via DeepL)');

  process.exit(0);
}

migrate().catch((error) => {
  console.error('Migration failed:', error);
  process.exit(1);
});
