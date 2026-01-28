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
    <>
      <style>{`
        .asad-welcome-banner {
          position: relative;
          background: linear-gradient(135deg, #1B5E20 0%, #1976D2 100%);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(27, 94, 32, 0.25);
        }
        @media (min-width: 768px) {
          .asad-welcome-banner {
            padding: 28px 32px;
            margin-bottom: 28px;
          }
        }
        .asad-welcome-banner__overlay {
          display: none;
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__overlay {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 40%;
            background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
            pointer-events: none;
          }
        }
        .asad-welcome-banner__content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__content {
            gap: 24px;
          }
        }
        .asad-welcome-banner__logo {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
          width: 56px;
          height: 56px;
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__logo {
            padding: 10px;
            width: 72px;
            height: 72px;
          }
        }
        .asad-welcome-banner__text {
          flex: 1;
          min-width: 0;
        }
        .asad-welcome-banner__title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__title {
            font-size: 1.85rem;
            margin-bottom: 6px;
          }
        }
        .asad-welcome-banner__tagline,
        .asad-welcome-banner__subtitle {
          display: none;
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__tagline {
            display: block;
            margin: 0 0 6px 0;
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.95);
            font-weight: 500;
          }
          .asad-welcome-banner__subtitle {
            display: block;
            margin: 0;
            font-size: 1.05rem;
            color: rgba(255, 255, 255, 0.85);
          }
        }
        .asad-welcome-banner__button {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          color: #1B5E20;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        @media (min-width: 768px) {
          .asad-welcome-banner__button {
            gap: 8px;
            padding: 12px 24px;
            font-size: 1.05rem;
          }
        }
        .asad-welcome-banner__button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="asad-welcome-banner">
        <div className="asad-welcome-banner__overlay" />
        <div className="asad-welcome-banner__content">
          <div className="asad-welcome-banner__logo">
            <img
              src="/images/logo/asad-logo.png"
              alt="ASAD"
              style={{ objectFit: 'contain', display: 'block', width: '100%', height: '100%' }}
            />
          </div>
          <div className="asad-welcome-banner__text">
            <h2 className="asad-welcome-banner__title">
              {t.welcome}, {displayName}!
            </h2>
            <p className="asad-welcome-banner__tagline">{t.tagline}</p>
            <p className="asad-welcome-banner__subtitle">{t.subtitle}</p>
          </div>
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
    </>
  );
}
