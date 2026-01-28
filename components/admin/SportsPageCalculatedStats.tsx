'use client';

import React from 'react';
import { useLocale } from '@payloadcms/ui';
import { StatCard, StatCardContainer } from './shared/StatCard';

const FOUNDED_YEAR = 2004;

const translations = {
  en: {
    title: 'Calculated Statistics (Read-only)',
    yearsPlaying: 'Years Playing',
    yearsPlayingDesc: 'Calculated from founding year in Site Settings',
    note: 'This value is calculated automatically from the founding year. The manual statistics below can be customized (Competitions Played, Active Players, etc.).',
  },
  fr: {
    title: 'Statistiques Calculées (Lecture seule)',
    yearsPlaying: 'Années de Jeu',
    yearsPlayingDesc: 'Calculé à partir de l\'année de fondation dans les Paramètres du Site',
    note: 'Cette valeur est calculée automatiquement à partir de l\'année de fondation. Les statistiques manuelles ci-dessous peuvent être personnalisées.',
  },
};

function getYearsPlaying(): number {
  return new Date().getFullYear() - FOUNDED_YEAR;
}

export default function SportsPageCalculatedStats() {
  const { code: locale } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const yearsPlaying = getYearsPlaying();

  return (
    <StatCardContainer title={t.title} note={t.note}>
      <StatCard
        label={t.yearsPlaying}
        value={`${yearsPlaying}+`}
        description={t.yearsPlayingDesc}
        variant="green"
      />
    </StatCardContainer>
  );
}
