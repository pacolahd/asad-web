'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';
import { StatCard, StatCardContainer } from './shared/StatCard';

const PROGRAMS_STARTED_YEAR = 2010;
const PROGRAM_COUNT = 6;

const translations = {
  en: {
    title: 'Calculated Statistics (Read-only)',
    yearsOfPrograms: 'Years of Programs',
    yearsOfProgramsDesc: 'Calculated from programs start year (2010)',
    activePrograms: 'Active Programs',
    activeProgramsDesc: 'ASAD Sundays, Baby Shower, Back to School, Soap & Oil, Ndjangi, Social Fund',
    note: 'These values are calculated automatically. The impact statistics below can be customized (Families Supported, Children Helped, etc.).',
  },
  fr: {
    title: 'Statistiques Calculées (Lecture seule)',
    yearsOfPrograms: 'Années de Programmes',
    yearsOfProgramsDesc: 'Calculé à partir de l\'année de début des programmes (2010)',
    activePrograms: 'Programmes Actifs',
    activeProgramsDesc: 'Dimanches ASAD, Baby Shower, Rentrée Scolaire, Savon & Huile, Ndjangi, Fonds Social',
    note: 'Ces valeurs sont calculées automatiquement. Les statistiques d\'impact ci-dessous peuvent être personnalisées.',
  },
};

function getYearsOfPrograms(): number {
  return new Date().getFullYear() - PROGRAMS_STARTED_YEAR;
}

export default function CommunityPageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsOfPrograms = getYearsOfPrograms();

  return (
    <StatCardContainer title={t.title} note={t.note}>
      <StatCard
        label={t.yearsOfPrograms}
        value={`${yearsOfPrograms}+`}
        description={t.yearsOfProgramsDesc}
        variant="green"
      />
      <StatCard
        label={t.activePrograms}
        value={String(PROGRAM_COUNT)}
        description={t.activeProgramsDesc}
        variant="blue"
      />
    </StatCardContainer>
  );
}
