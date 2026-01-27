'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';

const FOUNDED_YEAR = 2004;

const translations = {
  en: {
    title: '📊 Calculated Statistics (Read-only)',
    yearsPlaying: 'Years Playing',
    yearsPlayingDesc: 'Calculated from founding year in Site Settings',
    note: 'ℹ️ This value is calculated automatically from the founding year. The manual statistics below can be customized (Competitions Played, Active Players, etc.).',
  },
  fr: {
    title: '📊 Statistiques Calculées (Lecture seule)',
    yearsPlaying: 'Années de Jeu',
    yearsPlayingDesc: 'Calculé à partir de l\'année de fondation dans les Paramètres du Site',
    note: 'ℹ️ Cette valeur est calculée automatiquement à partir de l\'année de fondation. Les statistiques manuelles ci-dessous peuvent être personnalisées (Compétitions Jouées, Joueurs Actifs, etc.).',
  },
};

function getYearsPlaying(): number {
  return new Date().getFullYear() - FOUNDED_YEAR;
}

export default function SportsPageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsPlaying = getYearsPlaying();

  const stats = [
    {
      label: t.yearsPlaying,
      value: `${yearsPlaying}+`,
      description: t.yearsPlayingDesc
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
        {stats.map((stat) => (
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
