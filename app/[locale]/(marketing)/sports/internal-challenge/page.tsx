import type { Metadata } from "next";
import { Swords, Users, Trophy, Star } from "lucide-react";
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
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "ASAD # ASAD Internal Challenge",
  description: `The ${siteConfig.name} internal challenge where members form teams and compete against each other in friendly rivalry.`,
};

export const revalidate = 300;

const defaultChallengeRules = [
  {
    title: "Team Formation",
    description:
      "Members are divided into teams through a draft system or random selection, ensuring balanced squads.",
  },
  {
    title: "Match Format",
    description:
      "Teams play in a round-robin format, with points awarded for wins and draws. Top teams advance to knockouts.",
  },
  {
    title: "Fair Play",
    description:
      "Emphasis on sportsmanship and fair play. Cards and misconduct affect team standings.",
  },
  {
    title: "Prize & Glory",
    description:
      "Winning team earns bragging rights until the next challenge. Special recognition at ASAD events.",
  },
];

const defaultPastWinners = [
  { year: 2024, team: "Team Alpha", captain: "Member Name" },
  { year: 2023, team: "Team Bravo", captain: "Member Name" },
  { year: 2022, team: "Team Alpha", captain: "Member Name" },
  { year: 2021, team: "Team Charlie", captain: "Member Name" },
];

export default async function InternalChallengePage() {
  const locale = (await getLocale()) as Locale;

  let pageContent: {
    challengeTitle?: string | null;
    challengeDescription?: string | null;
    challengeConcept?: string | null;
    challengeRules?: Array<{
      title?: string | null;
      description?: string | null;
    }> | null;
    hallOfChampions?: Array<{
      year?: number | null;
      team?: string | null;
      captain?: string | null;
    }> | null;
  } = {};

  try {
    const payloadPage = await getSportsPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log(
      "Using static internal challenge data:",
      error instanceof Error ? error.message : "CMS not available"
    );
  }

  const challengeRules =
    pageContent.challengeRules && pageContent.challengeRules.length > 0
      ? pageContent.challengeRules.map((r) => ({
          title: r.title || "",
          description: r.description || "",
        }))
      : defaultChallengeRules;

  const pastWinners =
    pageContent.hallOfChampions && pageContent.hallOfChampions.length > 0
      ? pageContent.hallOfChampions.map((w) => ({
          year: w.year || 0,
          team: w.team || "",
          captain: w.captain || "",
        }))
      : defaultPastWinners;

  return (
    <>
      <PageHeader
        title={pageContent.challengeTitle || "ASAD # ASAD Challenge"}
        description={
          pageContent.challengeDescription ||
          "Our internal competition where members form teams and compete in friendly rivalry. All the fun of competition, all within the ASAD family."
        }
      />

      {/* Concept */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Swords className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">The Ultimate Family Rivalry</h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.challengeConcept ||
                "The ASAD # ASAD Challenge is our internal competition that brings a unique excitement to our community. Members are divided into teams and compete throughout the season. It's all the intensity of competitive football, but everyone goes home as friends."}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {challengeRules.map((rule, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{rule.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {rule.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Hall of Champions
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {pastWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      {index === 0 ? (
                        <Trophy className="h-6 w-6 text-accent" />
                      ) : (
                        <Star className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold">{winner.team}</div>
                      <div className="text-sm text-muted-foreground">
                        Captain: {winner.captain}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={index === 0 ? "default" : "secondary"}
                    className="text-lg px-4 py-1"
                  >
                    {winner.year}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Season */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Join the Competition</h2>
            <p className="text-muted-foreground">
              The ASAD # ASAD Challenge is open to all active members. Whether
              you&apos;re a seasoned player or just getting started, there&apos;s a place
              for you on one of our teams. Ask about the next challenge at any
              ASAD Sunday gathering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
