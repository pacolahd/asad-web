import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteSettings } from "@/lib/data";
import { siteConfig } from "@/data/site-config";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import type { SiteConfig } from "@/types";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale() as Locale;

  // Fetch site settings from CMS with fallback to static config
  let settings: SiteConfig = siteConfig;
  try {
    const cmsSettings = await getSiteSettings(locale);
    if (cmsSettings) {
      settings = {
        name: cmsSettings.name || siteConfig.name,
        fullName: cmsSettings.fullName || siteConfig.fullName,
        description: cmsSettings.description || siteConfig.description,
        shortDescription: cmsSettings.shortDescription || siteConfig.shortDescription,
        slogan: cmsSettings.slogan || siteConfig.slogan,
        founded: cmsSettings.founded || siteConfig.founded,
        location: cmsSettings.location || siteConfig.location,
        contact: cmsSettings.contact || siteConfig.contact,
        social: cmsSettings.social || siteConfig.social,
      };
    }
  } catch (error) {
    console.log('Using static site config:', error instanceof Error ? error.message : 'CMS not available');
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
