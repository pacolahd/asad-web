import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { Trophy, Users, Swords, Shirt } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getSportsPage, getSiteSettings } from "@/lib/data";
import { getYearsSince } from "@/lib/stats";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Sports",
  description: `Discover the sporting activities of ${siteConfig.name}. From competitions to friendly matches, sports is at the heart of our community.`,
};

export const revalidate = 300;

type SportsActivity = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  highlights: string[];
};

export default async function SportsPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('stats');

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    introTitle?: string | null;
    introContent?: string | null;
    stats?: Array<{ value?: string | null; label?: string | null }> | null;
    // Activities data
    competitionsTitle?: string | null;
    competitionsDescription?: string | null;
    competitionsHighlights?: Array<{ text?: string | null }> | null;
    friendlyMatchesTitle?: string | null;
    friendlyMatchesDescription?: string | null;
    friendlyMatchesHighlights?: Array<{ text?: string | null }> | null;
    challengeTitle?: string | null;
    challengeDescription?: string | null;
    challengeHighlights?: Array<{ text?: string | null }> | null;
    jerseysTitle?: string | null;
    jerseysDescription?: string | null;
    jerseysHighlights?: Array<{ text?: string | null }> | null;
  } = {};

  // Fetch page data and site settings in parallel
  let foundedYear = siteConfig.founded;

  try {
    const [payloadPage, settings] = await Promise.all([
      getSportsPage(locale),
      getSiteSettings(locale),
    ]);

    if (payloadPage) {
      pageContent = payloadPage;
    }
    if (settings?.founded) {
      foundedYear = settings.founded;
    }
  } catch (error) {
    console.log(
      "Using static sports data:",
      error instanceof Error ? error.message : "CMS not available"
    );
  }

  // Helper to get highlights from CMS or use defaults
  const getHighlights = (
    cmsHighlights: Array<{ text?: string | null }> | null | undefined,
    defaults: string[]
  ): string[] => {
    if (cmsHighlights && cmsHighlights.length > 0) {
      return cmsHighlights.map(h => h.text || '').filter(Boolean);
    }
    return defaults;
  };

  // Build activities from CMS data or use defaults
  const sportsActivities: SportsActivity[] = [
    {
      icon: Trophy,
      title: pageContent?.competitionsTitle || "Competitions",
      description:
        pageContent?.competitionsDescription ||
        "We participate in local and regional tournaments, representing ASAD with pride and sportsmanship. Our competitive spirit drives us to excellence.",
      href: "/sports/competitions",
      highlights: getHighlights(pageContent?.competitionsHighlights, ["Local tournaments", "Regional championships", "Trophy wins"]),
    },
    {
      icon: Users,
      title: pageContent?.friendlyMatchesTitle || "Friendly Matches",
      description:
        pageContent?.friendlyMatchesDescription ||
        "Building relationships through friendly games with other community teams. These matches foster camaraderie and expand our network.",
      href: "/sports/friendly-matches",
      highlights: getHighlights(pageContent?.friendlyMatchesHighlights, ["Local teams", "Inter-neighborhood games", "Community bonding"]),
    },
    {
      icon: Swords,
      title: pageContent?.challengeTitle || "Internal Challenge",
      description:
        pageContent?.challengeDescription ||
        "The ASAD # ASAD challenge brings members together in friendly competition. Teams are formed and compete for bragging rights.",
      href: "/sports/internal-challenge",
      highlights: getHighlights(pageContent?.challengeHighlights, ["Member teams", "Internal league", "Fun competition"]),
    },
    {
      icon: Shirt,
      title: pageContent?.jerseysTitle || "Jersey Collection",
      description:
        pageContent?.jerseysDescription ||
        "Our iconic green and blue jerseys have evolved over the years. Each design represents a chapter in our history.",
      href: "/sports/jerseys",
      highlights: getHighlights(pageContent?.jerseysHighlights, ["Historic jerseys", "Current design", "Team colors"]),
    },
  ];

  // Calculate dynamic stats
  const yearsPlaying = getYearsSince(foundedYear);

  // Calculated stats (translated)
  const calculatedStats = [
    { value: `${yearsPlaying}+`, label: t('yearsPlaying') },
  ];

  // Default manual stats if none in CMS (translated)
  const defaultManualStats = [
    { value: "50+", label: t('competitionsPlayed') },
    { value: t('every'), label: t('sundayWePlay') },
    { value: "100+", label: t('activePlayers') },
  ];

  // Get manual stats from CMS (already localized) or use translated defaults
  const manualStats =
    pageContent.stats && pageContent.stats.length > 0
      ? pageContent.stats.map((s) => ({
          value: s.value || "",
          label: s.label || "",
        }))
      : defaultManualStats;

  // Combine calculated and manual stats
  const stats = [...calculatedStats, ...manualStats];

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Sports at ASAD"}
        description={
          pageContent.headerDescription ||
          "Football is at the heart of ASAD. Our sporting activities bring members together every week in pursuit of excellence and unity."
        }
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">
              {pageContent.introTitle || "More Than Just a Game"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.introContent ||
                "At ASAD, football is the thread that weaves our community together. Every Sunday, members gather on the pitch to play, compete, and strengthen the bonds of friendship. Our sporting activities range from intense competitive tournaments to friendly matches that welcome players of all skill levels."}
            </p>
          </div>
        </div>
      </section>

      {/* Sports Activities Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {sportsActivities.map((activity) => (
              <Link key={activity.href} href={activity.href}>
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <activity.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {activity.description}
                    </CardDescription>
                    {activity.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activity.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
