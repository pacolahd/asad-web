'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@payloadcms/ui';
import { StatCard, StatCardContainer } from './shared/StatCard';

const ERROR_SYMBOL = '—';

const translations = {
  en: {
    title: 'Calculated Statistics (Read-only)',
    photosInLibrary: 'Photos in Media Library',
    photosInLibraryDesc: 'Count of image files in the Media collection',
    galleryAlbums: 'Gallery Albums',
    galleryAlbumsDesc: 'Count of albums in the Gallery Albums collection',
    note: 'These values are calculated from the database. The media categories above can be customized with manual counts and labels.',
    loading: 'Loading...',
  },
  fr: {
    title: 'Statistiques Calculées (Lecture seule)',
    photosInLibrary: 'Photos dans la Bibliothèque',
    photosInLibraryDesc: 'Nombre de fichiers image dans la collection Médias',
    galleryAlbums: 'Albums de la Galerie',
    galleryAlbumsDesc: 'Nombre d\'albums dans la collection Albums de la Galerie',
    note: 'Ces valeurs sont calculées à partir de la base de données. Les catégories de médias ci-dessus peuvent être personnalisées.',
    loading: 'Chargement...',
  },
};

function formatCount(count: number): string {
  if (count >= 500) return `${Math.floor(count / 100) * 100}+`;
  if (count >= 100) return `${Math.floor(count / 50) * 50}+`;
  if (count >= 10) return `${Math.floor(count / 10) * 10}+`;
  return String(count);
}

export default function MediaPageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const [stats, setStats] = useState<{ photoCount: string; albumCount: string } | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchStats() {
      try {
        const mediaResponse = await fetch('/api/media?limit=0');
        const mediaData = await mediaResponse.json();
        const photoCount = mediaData.totalDocs || 0;

        const albumsResponse = await fetch('/api/gallery-albums?limit=0');
        const albumsData = await albumsResponse.json();
        const albumCount = albumsData.totalDocs || 0;

        if (mounted) {
          setStats({
            photoCount: photoCount > 0 ? formatCount(photoCount) : '0',
            albumCount: String(albumCount),
          });
        }
      } catch {
        if (mounted) {
          setStats({
            photoCount: ERROR_SYMBOL,
            albumCount: ERROR_SYMBOL,
          });
        }
      }
    }

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <StatCardContainer title={t.title} note={t.note}>
      <StatCard
        label={t.photosInLibrary}
        value={stats?.photoCount ?? t.loading}
        description={t.photosInLibraryDesc}
        variant="green"
      />
      <StatCard
        label={t.galleryAlbums}
        value={stats?.albumCount ?? t.loading}
        description={t.galleryAlbumsDesc}
        variant="blue"
      />
    </StatCardContainer>
  );
}
