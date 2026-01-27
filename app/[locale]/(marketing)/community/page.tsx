import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { FeatureGrid } from "@/components/sections";
import { communityPrograms } from "@/data/programs";
import { siteConfig } from "@/data/site-config";
import { getPrograms, getCommunityPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Community Programs",
  description: `Discover ${siteConfig.name}'s community programs that go beyond sports to support members and their families.`,
};

export const revalidate = 300;

export default async function CommunityPage() {
  const locale = await getLocale() as Locale;

  let programs = communityPrograms;
  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    introTitle?: string | null;
    introContent?: string | null;
    impactStats?: Array<{ value?: string | null; label?: string | null }> | null;
    ctaTitle?: string | null;
    ctaDescription?: string | null;
  } = {};

  try {
    const payloadPrograms = await getPrograms(locale, 'community');
    if (payloadPrograms.length > 0) {
      programs = payloadPrograms.map((p) => ({
        id: p.slug,
        title: p.title,
        description: p.description,
        icon: p.icon || undefined,
        href: `/community/${p.slug}`,
        image: undefined,
      }));
    }

    const payloadPage = await getCommunityPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static community data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const defaultStats = [
    { value: "100+", label: "Families Supported" },
    { value: "Every", label: "Sunday Together" },
    { value: "50+", label: "Children Helped (Back to School)" },
    { value: `${new Date().getFullYear() - 2010}+`, label: "Years of Programs" },
  ];

  const impactStats = pageContent.impactStats && pageContent.impactStats.length > 0
    ? pageContent.impactStats.map((s) => ({
        value: s.value || '',
        label: s.label || '',
      }))
    : defaultStats;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Community Programs"}
        description={pageContent.headerDescription || "At ASAD, we believe in supporting our members beyond the football pitch. Our community programs provide financial, educational, and social support to members and their families."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {pageContent.introTitle || "More Than Football"}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {pageContent.introContent ? (
                  <p>{pageContent.introContent}</p>
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
                  <p className="text-xl font-medium mt-4">Active Programs</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Supporting our community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <FeatureGrid
        title="Our Programs"
        description="Each program addresses a specific need in our community, creating a comprehensive support system for all members."
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
              {pageContent.ctaTitle || "Be Part of the Community"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {pageContent.ctaDescription || "Our community programs are open to all ASAD members. Join us and become part of a family that supports each other through every stage of life."}
            </p>
            <Button asChild>
              <Link href="/members">
                Become a Member <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
