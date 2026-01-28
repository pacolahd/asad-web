'use client';

import { useAuth, useTranslation } from '@payloadcms/ui';

const translations = {
  en: {
    welcome: 'Welcome back',
    tagline: 'Association Sportive des Amis du Developpement',
    subtitle: 'Manage your website content, media, and settings from here.',
    viewSite: 'View Site',
  },
  fr: {
    welcome: 'Bon retour',
    tagline: 'Association Sportive des Amis du Developpement',
    subtitle: 'Gérez le contenu, les médias et les paramètres de votre site ici.',
    viewSite: 'Voir le Site',
  },
};

export default function DashboardWelcome() {
  const { user } = useAuth();
  const { i18n } = useTranslation();

  // Get the UI language (not content locale)
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  const t = translations[lang];

  // Use the user's actual name from the Users collection
  const displayName = (user as { name?: string })?.name || 'Admin';

  return (
    <div className="asad-welcome-banner">
      {/* Decorative pattern overlay - hidden on mobile */}
      <div className="asad-welcome-banner__overlay" />

      <div className="asad-welcome-banner__content">
        {/* Logo */}
        <div className="asad-welcome-banner__logo">
          <img
            src="/images/logo/asad-logo.png"
            alt="ASAD"
            style={{ objectFit: 'contain', display: 'block', width: '100%', height: '100%' }}
          />
        </div>

        {/* Content */}
        <div className="asad-welcome-banner__text">
          <h2 className="asad-welcome-banner__title">
            {t.welcome}, {displayName}!
          </h2>
          <p className="asad-welcome-banner__tagline">
            {t.tagline}
          </p>
          <p className="asad-welcome-banner__subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* View Site Button */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="asad-welcome-banner__button"
        >
          <span>↗</span>
          {t.viewSite}
        </a>
      </div>
    </div>
  );
}
