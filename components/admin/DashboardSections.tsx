'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@payloadcms/ui';

const translations = {
  en: {
    contentManagement: 'Content Management',
    contentManagementDesc: 'Manage your media files, gallery albums, and documents',
    sitePages: 'Site Pages',
    sitePagesDesc: 'Edit the content for each page of your website',
    settings: 'Settings',
    settingsDesc: 'Configure global site settings and preferences',
    // Collections
    media: 'Media Library',
    mediaDesc: 'Upload and manage images, videos, and files',
    galleryAlbums: 'Gallery Albums',
    galleryAlbumsDesc: 'Organize photos into albums for the gallery',
    documents: 'Documents',
    documentsDesc: 'Manage PDFs and downloadable files',
    users: 'Users',
    usersDesc: 'Manage admin users and permissions',
    // Pages
    homePage: 'Home Page',
    aboutPage: 'About Page',
    historyPage: 'History Page',
    leadershipPage: 'Leadership Page',
    statutesPage: 'Statutes Page',
    communityPage: 'Community Page',
    sportsPage: 'Sports Page',
    membersPage: 'Members Page',
    inMemoriamPage: 'In Memoriam Page',
    mediaPage: 'Media Page',
    galleryPage: 'Gallery Page',
    programPage: 'Program of Year',
    contactPage: 'Contact Page',
    // Settings
    siteSettings: 'Site Settings',
    siteSettingsDesc: 'Organization info, contact details, and social links',
  },
  fr: {
    contentManagement: 'Gestion du Contenu',
    contentManagementDesc: 'Gérez vos fichiers médias, albums de galerie et documents',
    sitePages: 'Pages du Site',
    sitePagesDesc: 'Modifiez le contenu de chaque page de votre site web',
    settings: 'Paramètres',
    settingsDesc: 'Configurez les paramètres globaux du site',
    // Collections
    media: 'Médiathèque',
    mediaDesc: 'Téléchargez et gérez images, vidéos et fichiers',
    galleryAlbums: 'Albums de Galerie',
    galleryAlbumsDesc: 'Organisez les photos en albums pour la galerie',
    documents: 'Documents',
    documentsDesc: 'Gérez les PDFs et fichiers téléchargeables',
    users: 'Utilisateurs',
    usersDesc: 'Gérez les utilisateurs admin et permissions',
    // Pages
    homePage: 'Page d\'Accueil',
    aboutPage: 'Page À Propos',
    historyPage: 'Page Histoire',
    leadershipPage: 'Page Direction',
    statutesPage: 'Page Statuts',
    communityPage: 'Page Communauté',
    sportsPage: 'Page Sports',
    membersPage: 'Page Membres',
    inMemoriamPage: 'Page In Memoriam',
    mediaPage: 'Page Médias',
    galleryPage: 'Page Galerie',
    programPage: 'Programme de l\'Année',
    contactPage: 'Page Contact',
    // Settings
    siteSettings: 'Paramètres du Site',
    siteSettingsDesc: 'Infos organisation, coordonnées et liens sociaux',
  },
};

interface QuickLinkProps {
  href: string;
  icon: string;
  label: string;
  description?: string;
  color: string;
}

function QuickLink({ href, icon, label, description, color }: QuickLinkProps) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 16px',
        backgroundColor: 'var(--theme-elevation-0)',
        border: '1px solid var(--theme-elevation-100)',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 12px ${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--theme-elevation-100)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          backgroundColor: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--theme-elevation-800)',
          }}
        >
          {label}
        </div>
        {description && (
          <div
            style={{
              fontSize: '0.9rem',
              color: 'var(--theme-elevation-500)',
              marginTop: '3px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {description}
          </div>
        )}
      </div>
      <div
        style={{
          color: 'var(--theme-elevation-400)',
          fontSize: '14px',
        }}
      >
        →
      </div>
    </a>
  );
}

interface SectionProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  children: React.ReactNode;
}

function Section({ title, description, icon, color, children }: SectionProps) {
  return (
    <div
      style={{
        marginBottom: '28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: `2px solid ${color}30`,
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: `0 2px 8px ${color}40`,
          }}
        >
          {icon}
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--theme-elevation-800)',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: '4px 0 0 0',
              fontSize: '1rem',
              color: 'var(--theme-elevation-500)',
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '12px',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function DashboardSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  const t = translations[lang];

  // Hide default Payload dashboard content that appears after our custom sections
  useEffect(() => {
    if (!containerRef.current) return;

    const hideDefaultDashboard = () => {
      // Find the dashboard container
      const dashboard = containerRef.current?.closest('.dashboard');
      if (!dashboard) return;

      // Get all children of the dashboard
      const children = Array.from(dashboard.children);

      // Find our container's index
      const ourIndex = children.findIndex(child =>
        child.contains(containerRef.current)
      );

      // Hide all siblings after our component
      children.forEach((child, index) => {
        if (index > ourIndex && child instanceof HTMLElement) {
          child.style.display = 'none';
        }
      });

      // Also hide any ul elements (default card lists)
      dashboard.querySelectorAll('ul').forEach(ul => {
        if (ul instanceof HTMLElement) {
          ul.style.display = 'none';
        }
      });

      // Hide h4/h5 headers (default group labels)
      dashboard.querySelectorAll('h4, h5').forEach(heading => {
        if (heading instanceof HTMLElement) {
          heading.style.display = 'none';
        }
      });
    };

    // Run immediately and after a short delay (for dynamic content)
    hideDefaultDashboard();
    const timeout = setTimeout(hideDefaultDashboard, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={containerRef} style={{ marginTop: '8px' }}>
      {/* Content Management Section */}
      <Section
        title={t.contentManagement}
        description={t.contentManagementDesc}
        icon="📁"
        color="#1B5E20"
      >
        <QuickLink
          href="/admin/collections/media"
          icon="🖼️"
          label={t.media}
          description={t.mediaDesc}
          color="#1B5E20"
        />
        <QuickLink
          href="/admin/collections/gallery-albums"
          icon="📸"
          label={t.galleryAlbums}
          description={t.galleryAlbumsDesc}
          color="#1B5E20"
        />
        <QuickLink
          href="/admin/collections/documents"
          icon="📄"
          label={t.documents}
          description={t.documentsDesc}
          color="#1B5E20"
        />
        <QuickLink
          href="/admin/collections/users"
          icon="👤"
          label={t.users}
          description={t.usersDesc}
          color="#1B5E20"
        />
      </Section>

      {/* Site Pages Section */}
      <Section
        title={t.sitePages}
        description={t.sitePagesDesc}
        icon="📄"
        color="#1976D2"
      >
        <QuickLink href="/admin/globals/home-page" icon="🏠" label={t.homePage} color="#1976D2" />
        <QuickLink href="/admin/globals/about-page" icon="ℹ️" label={t.aboutPage} color="#1976D2" />
        <QuickLink href="/admin/globals/history-page" icon="📜" label={t.historyPage} color="#1976D2" />
        <QuickLink href="/admin/globals/leadership-page" icon="👔" label={t.leadershipPage} color="#1976D2" />
        <QuickLink href="/admin/globals/statutes-page" icon="📋" label={t.statutesPage} color="#1976D2" />
        <QuickLink href="/admin/globals/community-page" icon="🤝" label={t.communityPage} color="#1976D2" />
        <QuickLink href="/admin/globals/sports-page" icon="⚽" label={t.sportsPage} color="#1976D2" />
        <QuickLink href="/admin/globals/members-page" icon="👥" label={t.membersPage} color="#1976D2" />
        <QuickLink href="/admin/globals/in-memoriam-page" icon="🕯️" label={t.inMemoriamPage} color="#1976D2" />
        <QuickLink href="/admin/globals/media-page" icon="🎬" label={t.mediaPage} color="#1976D2" />
        <QuickLink href="/admin/globals/gallery-page" icon="🖼️" label={t.galleryPage} color="#1976D2" />
        <QuickLink href="/admin/globals/program-of-year-page" icon="📅" label={t.programPage} color="#1976D2" />
        <QuickLink href="/admin/globals/contact-page" icon="📞" label={t.contactPage} color="#1976D2" />
      </Section>

      {/* Settings Section */}
      <Section
        title={t.settings}
        description={t.settingsDesc}
        icon="⚙️"
        color="#F57C00"
      >
        <QuickLink
          href="/admin/globals/site-settings"
          icon="🔧"
          label={t.siteSettings}
          description={t.siteSettingsDesc}
          color="#F57C00"
        />
      </Section>
    </div>
  );
}
