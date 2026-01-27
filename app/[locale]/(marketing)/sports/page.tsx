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
import { getPrograms, getSportsPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  users: Users,
  swords: Swords,
  handshake: Users,
};

const defaultSportsActivities: SportsActivity[] = [
  {
    icon: Trophy,
    title: "Competitions",
    description:
      "We participate in local and regional tournaments, representing ASAD with pride and sportsmanship. Our competitive spirit drives us to excellence.",
    href: "/sports/competitions",
    highlights: ["Local tournaments", "Regional championships", "Trophy wins"],
  },
  {
    icon: Users,
    title: "Friendly Matches",
    description:
      "Building relationships through friendly games with other community teams. These matches foster camaraderie and expand our network.",
    href: "/sports/friendly-matches",
    highlights: ["Local teams", "Inter-neighborhood games", "Community bonding"],
  },
  {
    icon: Swords,
    title: "Internal Challenge",
    description:
      "The ASAD # ASAD challenge brings members together in friendly competition. Teams are formed and compete for bragging rights.",
    href: "/sports/internal-challenge",
    highlights: ["Member teams", "Internal league", "Fun competition"],
  },
  {
    icon: Shirt,
    title: "Jersey Collection",
    description:
      "Our iconic green and blue jerseys have evolved over the years. Each design represents a chapter in our history.",
    href: "/sports/jerseys",
    highlights: ["Historic jerseys", "Current design", "Team colors"],
  },
];

export default async function SportsPage() {
  const locale = await getLocale() as Locale;

  let sportsActivities: SportsActivity[] = defaultSportsActivities;
  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    introTitle?: string | null;
    introContent?: string | null;
    stats?: Array<{ value?: string | null; label?: string | null }> | null;
  } = {};

  try {
    const payloadPrograms = await getPrograms(locale, 'sports');
    if (payloadPrograms.length > 0) {
      sportsActivities = payloadPrograms.map((p) => ({
        icon: iconMap[p.icon || ''] || Trophy,
        title: p.title,
        description: p.description,
        href: `/sports/${p.slug}`,
        highlights: [],
      }));
    }

    const payloadPage = await getSportsPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static sports data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const defaultStats = [
    { value: "50+", label: "Competitions Played" },
    { value: "Every", label: "Sunday We Play" },
    { value: "100+", label: "Active Players" },
    { value: `${new Date().getFullYear() - siteConfig.founded}+`, label: "Years Playing" },
  ];

  const stats = pageContent.stats && pageContent.stats.length > 0
    ? pageContent.stats.map((s) => ({
        value: s.value || '',
        label: s.label || '',
      }))
    : defaultStats;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Sports at ASAD"}
        description={pageContent.headerDescription || "Football is at the heart of ASAD. Our sporting activities bring members together every week in pursuit of excellence and unity."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">
              {pageContent.introTitle || "More Than Just a Game"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.introContent || "At ASAD, football is the thread that weaves our community together. Every Sunday, members gather on the pitch to play, compete, and strengthen the bonds of friendship. Our sporting activities range from intense competitive tournaments to friendly matches that welcome players of all skill levels."}
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
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
