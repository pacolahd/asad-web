'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';

const PROGRAM_COUNT = 6; // Fixed count of community programs
const FOUNDED_YEAR = 2004;

const translations = {
  en: {
    title: '📊 Calculated Statistics (Read-only)',
    yearsOfExcellence: 'Years of Excellence',
    yearsOfExcellenceDesc: 'Calculated from founding year in Site Settings',
    communityPrograms: 'Community Programs',
    communityProgramsDesc: 'Fixed count of community programs (ASAD Sundays, Baby Shower, Back to School, Soap & Oil, Ndjangi, Social Fund)',
    note: 'ℹ️ These values are calculated automatically and cannot be edited directly. The stats below (Active Members, Competitions Played) can be customized.',
  },
  fr: {
    title: '📊 Statistiques Calculées (Lecture seule)',
    yearsOfExcellence: 'Années d\'Excellence',
    yearsOfExcellenceDesc: 'Calculé à partir de l\'année de fondation dans les Paramètres du Site',
    communityPrograms: 'Programmes Communautaires',
    communityProgramsDesc: 'Nombre fixe de programmes communautaires (Dimanches ASAD, Baby Shower, Rentrée Scolaire, Savon & Huile, Ndjangi, Fonds Social)',
    note: 'ℹ️ Ces valeurs sont calculées automatiquement et ne peuvent pas être modifiées directement. Les statistiques ci-dessous (Membres Actifs, Compétitions Jouées) peuvent être personnalisées.',
  },
};

// Calculate years of excellence at module level (no useState needed)
function getYearsOfExcellence(): number {
  return new Date().getFullYear() - FOUNDED_YEAR;
}

export default function HomePageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsOfExcellence = getYearsOfExcellence();

  const stats = [
    {
      label: t.yearsOfExcellence,
      value: `${yearsOfExcellence}+`,
      description: t.yearsOfExcellenceDesc
    },
    {
      label: t.communityPrograms,
      value: String(PROGRAM_COUNT),
      description: t.communityProgramsDesc
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
