import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { en } from '@payloadcms/translations/languages/en';
import { fr } from '@payloadcms/translations/languages/fr';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Collections
import { Users } from '@/collections/Users';
import { Media } from '@/collections/Media';
import { GalleryAlbums } from '@/collections/GalleryAlbums';
import { Documents } from '@/collections/Documents';

// Globals
import { SiteSettings } from '@/globals/SiteSettings';
import {
  HomePage,
  AboutPage,
  HistoryPage,
  LeadershipPage,
  StatutesPage,
  CommunityPage,
  SportsPage,
  MembersPage,
  InMemoriamPage,
  MediaPage,
  ProgramOfYearPage,
  ContactPage,
} from '@/globals/pages';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- ASAD Admin',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/images/logo/asad-logo.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: '@/components/admin/Logo#default',
        Icon: '@/components/admin/Icon#default',
      },
    },
  },
  // Admin UI translations
  i18n: {
    supportedLanguages: { en, fr },
    fallbackLanguage: 'en',
  },
  collections: [
    Users,
    Media,
    GalleryAlbums,
    Documents,
  ],
  globals: [
    // Settings
    SiteSettings,
    // Pages
    HomePage,
    AboutPage,
    HistoryPage,
    LeadershipPage,
    StatutesPage,
    CommunityPage,
    SportsPage,
    MembersPage,
    InMemoriamPage,
    MediaPage,
    ProgramOfYearPage,
    ContactPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-ME-IN-PRODUCTION',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // Localization configuration
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Français',
        code: 'fr',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  // S3 storage for Cloudflare R2
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || 'asad-media',
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'auto',
        forcePathStyle: true,
      },
    }),
  ],
  sharp,
});
