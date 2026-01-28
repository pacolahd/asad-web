import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { FeatureGrid } from "@/components/sections";
import { communityPrograms } from "@/data/programs";
import { siteConfig } from "@/data/site-config";
import { getCommunityPage } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Community Programs",
  description: `Discover ${siteConfig.name}'s community programs that go beyond sports to support members and their families.`,
};

export const revalidate = 300;

type ImpactStat = { value: string; label: string };

export default async function CommunityPage() {
  const locale = await getLocale() as Locale;
  const tStats = await getTranslations('stats');
  const tCommunity = await getTranslations('community');
  const tCommon = await getTranslations('common');

  let pageContent: Awaited<ReturnType<typeof getCommunityPage>> = null;

  try {
    pageContent = await getCommunityPage(locale);
  } catch (error) {
    console.log('Using static community data:', error instanceof Error ? error.message : 'CMS not available');
  }

  // Build programs list from embedded page data or fallback to static data
  const programs = [
    {
      id: 'asad-sundays',
      title: pageContent?.asadSundaysTitle || communityPrograms[0].title,
      description: pageContent?.asadSundaysDescription || communityPrograms[0].description,
      icon: 'calendar',
      href: '/community/asad-sundays',
    },
    {
      id: 'baby-shower',
      title: pageContent?.babyShowerTitle || communityPrograms[1].title,
      description: pageContent?.babyShowerDescription || communityPrograms[1].description,
      icon: 'gift',
      href: '/community/baby-shower',
    },
    {
      id: 'back-to-school',
      title: pageContent?.backToSchoolTitle || communityPrograms[2].title,
      description: pageContent?.backToSchoolDescription || communityPrograms[2].description,
      icon: 'graduation-cap',
      href: '/community/back-to-school',
    },
    {
      id: 'soap-oil-thrift',
      title: pageContent?.soapOilTitle || communityPrograms[3].title,
      description: pageContent?.soapOilDescription || communityPrograms[3].description,
      icon: 'piggy-bank',
      href: '/community/soap-oil-thrift',
    },
    {
      id: 'ndjangi',
      title: pageContent?.ndjangiTitle || communityPrograms[4].title,
      description: pageContent?.ndjangiDescription || communityPrograms[4].description,
      icon: 'users',
      href: '/community/ndjangi',
    },
    {
      id: 'social-fund',
      title: pageContent?.socialFundTitle || communityPrograms[5].title,
      description: pageContent?.socialFundDescription || communityPrograms[5].description,
      icon: 'heart',
      href: '/community/social-fund',
    },
  ];

  // Calculated stats (translated)
  const calculatedStats: ImpactStat[] = [
    { value: `${new Date().getFullYear() - 2010}+`, label: tStats('yearsOfPrograms') },
    { value: String(programs.length), label: tStats('activePrograms') },
  ];

  // Default manual stats if none in CMS (translated)
  const defaultManualStats: ImpactStat[] = [
    { value: "100+", label: tStats('familiesSupported') },
    { value: "50+", label: tStats('childrenHelped') },
  ];

  // Get manual stats from CMS (already localized) or use translated defaults
  const cmsImpactStats = pageContent?.impactStats;
  const manualStats: ImpactStat[] = cmsImpactStats && cmsImpactStats.length > 0
    ? cmsImpactStats.map((s: { value?: string | null; label?: string | null }) => ({
        value: s.value || '',
        label: s.label || '',
      }))
    : defaultManualStats;

  // Combine calculated and manual stats
  const impactStats: ImpactStat[] = [...calculatedStats, ...manualStats];

  return (
    <>
      <PageHeader
        title={pageContent?.headerTitle || "Community Programs"}
        description={pageContent?.headerDescription || "At ASAD, we believe in supporting our members beyond the football pitch. Our community programs provide financial, educational, and social support to members and their families."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {pageContent?.introTitle || "More Than Football"}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {pageContent?.introContent ? (
                  <p>{pageContent?.introContent}</p>
                ) : (
                  <>
                    <p>
                      While football brought us together, our vision extends far
                      beyond the pitch. ASAD has developed a comprehensive network of
                      community programs designed to support members through life&apos;s
                      various stages and challenges.
                    </p>
                    <p>
                      From celebrating new life to supporting education, from
                      promoting financial discipline to providing emergency assistance,
                      our programs reflect the true meaning of community.
                    </p>
                    <p>
                      These initiatives are what transform ASAD from a sports club
                      into a family—one that stands together through good times and
                      difficult moments alike.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary">
                    {programs.length}
                  </div>
                  <p className="text-xl font-medium mt-4">{tCommunity('activePrograms')}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {tCommunity('supportingCommunity')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <FeatureGrid
        title={pageContent?.programsTitle || "Our Programs"}
        description={pageContent?.programsDescription || "Each program addresses a specific need in our community, creating a comprehensive support system for all members."}
        programs={programs}
      />

      {/* Impact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {impactStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              {pageContent?.ctaTitle || "Be Part of the Community"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {pageContent?.ctaDescription || "Our community programs are open to all ASAD members. Join us and become part of a family that supports each other through every stage of life."}
            </p>
            <Button asChild>
              <Link href="/members">
                {tCommon('becomeMember')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
