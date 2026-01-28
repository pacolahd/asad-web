import type { Metadata } from "next";
import { Trophy, Medal, Star, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getSportsPage } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Competitions & Achievements",
  description: `Explore ${siteConfig.name}'s competitive journey and achievements in local and regional football tournaments.`,
};

export const revalidate = 300;

const defaultAchievements = [
  {
    year: "2024",
    title: "Neighborhood Championship",
    result: "Finalist",
    description: "Reached the finals of the annual neighborhood tournament.",
  },
  {
    year: "2023",
    title: "Community Cup",
    result: "Champion",
    description: "Won the community cup after an intense final match.",
  },
  {
    year: "2022",
    title: "Inter-Quartier League",
    result: "Semi-Finalist",
    description: "Made it to the semi-finals in our first league participation.",
  },
  {
    year: "2020",
    title: "Solidarity Tournament",
    result: "Champion",
    description:
      "Won the solidarity tournament organized during challenging times.",
  },
  {
    year: "2015",
    title: "Decade Cup",
    result: "Champion",
    description: "Celebrated our 10th anniversary with a tournament victory.",
  },
];

const defaultUpcomingEvents = [
  {
    title: "Annual Neighborhood Cup",
    date: "Season 2025",
    status: "Preparing",
  },
  {
    title: "Community League",
    date: "Ongoing",
    status: "Active",
  },
  {
    title: "Holiday Tournament",
    date: "December 2025",
    status: "Upcoming",
  },
];

export default async function CompetitionsPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sports');

  let pageContent: {
    competitionsTitle?: string | null;
    competitionsDescription?: string | null;
    competitionsPhilosophy?: string | null;
    competitionsPhilosophyHeading?: string | null;
    achievementsHeading?: string | null;
    upcomingHeading?: string | null;
    achievements?: Array<{
      year?: string | null;
      title?: string | null;
      result?: string | null;
      description?: string | null;
    }> | null;
    upcomingEvents?: Array<{
      title?: string | null;
      date?: string | null;
      status?: string | null;
    }> | null;
  } = {};

  try {
    const payloadPage = await getSportsPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log(
      "Using static competitions data:",
      error instanceof Error ? error.message : "CMS not available"
    );
  }

  const achievements =
    pageContent.achievements && pageContent.achievements.length > 0
      ? pageContent.achievements.map((a) => ({
          year: a.year || "",
          title: a.title || "",
          result: a.result || "",
          description: a.description || "",
        }))
      : defaultAchievements;

  const upcomingEvents =
    pageContent.upcomingEvents && pageContent.upcomingEvents.length > 0
      ? pageContent.upcomingEvents.map((e) => ({
          title: e.title || "",
          date: e.date || "",
          status: e.status || "",
        }))
      : defaultUpcomingEvents;

  return (
    <>
      <PageHeader
        title={pageContent.competitionsTitle || "Competitions & Achievements"}
        description={
          pageContent.competitionsDescription ||
          "Our competitive journey has been marked by dedication, teamwork, and memorable victories. Discover our tournament history and achievements."
        }
      />

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">
              {pageContent?.competitionsPhilosophyHeading || "Competing with Honor"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.competitionsPhilosophy ||
                "At ASAD, competition is about more than winning trophies. It's about representing our community with pride, demonstrating sportsmanship, and pushing ourselves to be better. Every tournament we enter is an opportunity to showcase the values that define us."}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {pageContent?.achievementsHeading || "Notable Achievements"}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    {achievement.result === "Champion" ? (
                      <Trophy className="h-6 w-6" />
                    ) : achievement.result === "Finalist" ? (
                      <Medal className="h-6 w-6" />
                    ) : (
                      <Star className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <Badge
                        variant={
                          achievement.result === "Champion"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {t(`results.${achievement.result}`)}
                      </Badge>
                    </div>
                    <CardDescription>{achievement.year}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {pageContent?.upcomingHeading || "Current & Upcoming"}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{t(`status.${event.status}`)}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
