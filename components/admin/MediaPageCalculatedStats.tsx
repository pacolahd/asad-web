'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@payloadcms/ui';

const ERROR_SYMBOL = '—';

const translations = {
  en: {
    title: '📊 Calculated Statistics (Read-only)',
    photosInLibrary: 'Photos in Media Library',
    photosInLibraryDesc: 'Count of image files in the Media collection',
    galleryAlbums: 'Gallery Albums',
    galleryAlbumsDesc: 'Count of albums in the Gallery Albums collection',
    note: 'ℹ️ These values are calculated from the database. The media categories above can be customized with manual counts and labels.',
    loading: 'Loading...',
  },
  fr: {
    title: '📊 Statistiques Calculées (Lecture seule)',
    photosInLibrary: 'Photos dans la Bibliothèque',
    photosInLibraryDesc: 'Nombre de fichiers image dans la collection Médias',
    galleryAlbums: 'Albums de la Galerie',
    galleryAlbumsDesc: 'Nombre d\'albums dans la collection Albums de la Galerie',
    note: 'ℹ️ Ces valeurs sont calculées à partir de la base de données. Les catégories de médias ci-dessus peuvent être personnalisées avec des compteurs et libellés manuels.',
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
        // Fetch photo count
        const mediaResponse = await fetch('/api/media?limit=0');
        const mediaData = await mediaResponse.json();
        const photoCount = mediaData.totalDocs || 0;

        // Fetch album count
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
        // Fallback values if API fails
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

  const displayStats = [
    {
      label: t.photosInLibrary,
      value: stats?.photoCount ?? t.loading,
      description: t.photosInLibraryDesc
    },
    {
      label: t.galleryAlbums,
      value: stats?.albumCount ?? t.loading,
      description: t.galleryAlbumsDesc
    },
  ];

  return (
    <div style={{
      padding: '16px',
      backgroundColor: 'var(--theme-elevation-50)',
      borderRadius: '8px',
      border: '1px solid var(--theme-elevation-100)',
      marginBottom: '16px',
    }}>
      <h4 style={{
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        {t.title}
      </h4>
      <div style={{ display: 'grid', gap: '8px' }}>
        {displayStats.map((stat) => (
          <div key={stat.label} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: 'var(--theme-elevation-0)',
            borderRadius: '4px',
            border: '1px solid var(--theme-elevation-100)',
          }}>
            <div>
              <span style={{
                color: 'var(--theme-elevation-800)',
                fontWeight: 500,
              }}>{stat.label}</span>
              <p style={{
                margin: '4px 0 0 0',
                fontSize: '11px',
                color: 'var(--theme-elevation-500)',
              }}>
                {stat.description}
              </p>
            </div>
            <span style={{
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--theme-success-500)',
              minWidth: '60px',
              textAlign: 'right',
            }}>{stat.value}</span>
          </div>
        ))}
      </div>
      <p style={{
        margin: '12px 0 0 0',
        fontSize: '12px',
        color: 'var(--theme-elevation-500)',
        padding: '8px',
        backgroundColor: 'var(--theme-elevation-100)',
        borderRadius: '4px',
      }}>
        {t.note}
      </p>
    </div>
  );
}
