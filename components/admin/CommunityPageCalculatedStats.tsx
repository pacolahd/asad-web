'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';

const PROGRAMS_STARTED_YEAR = 2010;
const PROGRAM_COUNT = 6; // Fixed count of community programs

const translations = {
  en: {
    title: '📊 Calculated Statistics (Read-only)',
    yearsOfPrograms: 'Years of Programs',
    yearsOfProgramsDesc: 'Calculated from programs start year (2010)',
    activePrograms: 'Active Programs',
    activeProgramsDesc: 'ASAD Sundays, Baby Shower, Back to School, Soap & Oil, Ndjangi, Social Fund',
    note: 'ℹ️ These values are calculated automatically. The impact statistics below can be customized (Families Supported, Children Helped, etc.).',
  },
  fr: {
    title: '📊 Statistiques Calculées (Lecture seule)',
    yearsOfPrograms: 'Années de Programmes',
    yearsOfProgramsDesc: 'Calculé à partir de l\'année de début des programmes (2010)',
    activePrograms: 'Programmes Actifs',
    activeProgramsDesc: 'Dimanches ASAD, Baby Shower, Rentrée Scolaire, Savon & Huile, Ndjangi, Fonds Social',
    note: 'ℹ️ Ces valeurs sont calculées automatiquement. Les statistiques d\'impact ci-dessous peuvent être personnalisées (Familles Soutenues, Enfants Aidés, etc.).',
  },
};

function getYearsOfPrograms(): number {
  return new Date().getFullYear() - PROGRAMS_STARTED_YEAR;
}

export default function CommunityPageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsOfPrograms = getYearsOfPrograms();

  const stats = [
    {
      label: t.yearsOfPrograms,
      value: `${yearsOfPrograms}+`,
      description: t.yearsOfProgramsDesc
    },
    {
      label: t.activePrograms,
      value: String(PROGRAM_COUNT),
      description: t.activeProgramsDesc
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
