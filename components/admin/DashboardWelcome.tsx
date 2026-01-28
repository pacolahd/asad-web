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
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1B5E20 0%, #1976D2 100%)',
        borderRadius: '12px',
        padding: '28px 32px',
        marginBottom: '28px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(27, 94, 32, 0.25)',
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '40%',
          background: `
            radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '50%',
            padding: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            flexShrink: 0,
            width: '72px',
            height: '72px',
          }}
        >
          <img
            src="/images/logo/asad-logo.png"
            alt="ASAD"
            style={{ objectFit: 'contain', display: 'block', width: '100%', height: '100%' }}
          />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h2
            style={{
              margin: '0 0 6px 0',
              fontSize: '1.85rem',
              fontWeight: 700,
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
            }}
          >
            {t.welcome}, {displayName}!
          </h2>
          <p
            style={{
              margin: '0 0 6px 0',
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
            }}
          >
            {t.tagline}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* View Site Button */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            color: '#1B5E20',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '1.05rem',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            flexShrink: 0,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <span>↗</span>
          {t.viewSite}
        </a>
      </div>
    </div>
  );
}
