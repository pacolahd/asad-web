'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@payloadcms/ui';

const translations = {
  en: {
    title: 'Quick Stats',
    mediaFiles: 'Media Files',
    galleryAlbums: 'Gallery Albums',
    users: 'Users',
  },
  fr: {
    title: 'Statistiques Rapides',
    mediaFiles: 'Fichiers Médias',
    galleryAlbums: 'Albums Galerie',
    users: 'Utilisateurs',
  },
};

interface Stats {
  mediaCount: number | null;
  albumCount: number | null;
  userCount: number | null;
}

export default function DashboardStats() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  const t = translations[lang];

  const [stats, setStats] = useState<Stats>({
    mediaCount: null,
    albumCount: null,
    userCount: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchStats() {
      try {
        const [mediaRes, albumsRes, usersRes] = await Promise.all([
          fetch('/api/media?limit=0'),
          fetch('/api/gallery-albums?limit=0'),
          fetch('/api/users?limit=0'),
        ]);

        const [mediaData, albumsData, usersData] = await Promise.all([
          mediaRes.json(),
          albumsRes.json(),
          usersRes.json(),
        ]);

        if (mounted) {
          setStats({
            mediaCount: mediaData.totalDocs ?? null,
            albumCount: albumsData.totalDocs ?? null,
            userCount: usersData.totalDocs ?? null,
          });
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setStats({
            mediaCount: null,
            albumCount: null,
            userCount: null,
          });
          setLoading(false);
        }
      }
    }

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  const statCards = [
    {
      label: t.mediaFiles,
      value: loading ? '...' : stats.mediaCount !== null ? stats.mediaCount : '-',
      color: '#1B5E20',
      bgColor: 'rgba(27, 94, 32, 0.1)',
      icon: '📷',
    },
    {
      label: t.galleryAlbums,
      value: loading ? '...' : stats.albumCount !== null ? stats.albumCount : '-',
      color: '#1976D2',
      bgColor: 'rgba(25, 118, 210, 0.1)',
      icon: '📁',
    },
    {
      label: t.users,
      value: loading ? '...' : stats.userCount !== null ? stats.userCount : '-',
      color: '#FFC107',
      bgColor: 'rgba(255, 193, 7, 0.15)',
      icon: '👥',
    },
  ];

  return (
    <div style={{ marginBottom: '24px' }}>
      <h3
        style={{
          margin: '0 0 14px 0',
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'var(--theme-elevation-1000)',
        }}
      >
        {t.title}
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '12px',
        }}
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'var(--theme-elevation-0)',
              border: '1px solid var(--theme-elevation-100)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: card.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: card.color,
                    lineHeight: 1.2,
                  }}
                >
                  {card.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--theme-elevation-500)',
                    marginTop: '2px',
                  }}
                >
                  {card.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
