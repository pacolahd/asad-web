'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';
import { StatCard, StatCardContainer } from './shared/StatCard';

const PROGRAM_COUNT = 6;
const FOUNDED_YEAR = 2004;

const translations = {
  en: {
    title: 'Calculated Statistics (Read-only)',
    yearsOfExcellence: 'Years of Excellence',
    yearsOfExcellenceDesc: 'Calculated from founding year in Site Settings',
    communityPrograms: 'Community Programs',
    communityProgramsDesc: 'ASAD Sundays, Baby Shower, Back to School, Soap & Oil, Ndjangi, Social Fund',
    note: 'These values are calculated automatically and cannot be edited directly. The stats below (Active Members, Competitions Played) can be customized.',
  },
  fr: {
    title: 'Statistiques Calculées (Lecture seule)',
    yearsOfExcellence: 'Années d\'Excellence',
    yearsOfExcellenceDesc: 'Calculé à partir de l\'année de fondation dans les Paramètres du Site',
    communityPrograms: 'Programmes Communautaires',
    communityProgramsDesc: 'Dimanches ASAD, Baby Shower, Rentrée Scolaire, Savon & Huile, Ndjangi, Fonds Social',
    note: 'Ces valeurs sont calculées automatiquement et ne peuvent pas être modifiées directement. Les statistiques ci-dessous peuvent être personnalisées.',
  },
};

function getYearsOfExcellence(): number {
  return new Date().getFullYear() - FOUNDED_YEAR;
}

export default function HomePageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <StatCardContainer title={t.title} note={t.note}>
      <StatCard
        label={t.yearsOfExcellence}
        value={`${yearsOfExcellence}+`}
        description={t.yearsOfExcellenceDesc}
        variant="green"
      />
      <StatCard
        label={t.communityPrograms}
        value={String(PROGRAM_COUNT)}
        description={t.communityProgramsDesc}
        variant="blue"
      />
    </StatCardContainer>
  );
}
