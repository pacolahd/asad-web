import type { Metadata } from "next";
import { Handshake, MapPin, Calendar, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Friendly Matches",
  description: `${siteConfig.name}'s friendly matches with local and external teams. Building relationships through the beautiful game.`,
};

const matchTypes = [
  {
    icon: MapPin,
    title: "Local Matches",
    description:
      "Regular friendly games with teams from Bonaberi and surrounding neighborhoods. These matches strengthen community ties and keep our players match-fit.",
    frequency: "Weekly",
  },
  {
    icon: Users,
    title: "External Encounters",
    description:
      "Matches with teams from other parts of Douala and beyond. These encounters expand our network and bring fresh competition.",
    frequency: "Monthly",
  },
  {
    icon: Calendar,
    title: "Holiday Friendlies",
    description:
      "Special matches organized during holidays and celebrations. These games often include former members and special guests.",
    frequency: "Seasonal",
  },
];

const recentMatches = [
  {
    opponent: "FC Quartier Nord",
    result: "3-2",
    outcome: "win",
    date: "January 2025",
    location: "Home",
  },
  {
    opponent: "Espoir de Bonaberi",
    result: "1-1",
    outcome: "draw",
    date: "December 2024",
    location: "Away",
  },
  {
    opponent: "Union Sportive",
    result: "2-0",
    outcome: "win",
    date: "December 2024",
    location: "Home",
  },
  {
    opponent: "Jeunesse de Deido",
    result: "1-2",
    outcome: "loss",
    date: "November 2024",
    location: "Away",
  },
  {
    opponent: "Amis du Sport",
    result: "4-1",
    outcome: "win",
    date: "November 2024",
    location: "Home",
  },
];

export default function FriendlyMatchesPage() {
  return (
    <>
      <PageHeader
        title="Friendly Matches"
        description="Building bridges through football. Our friendly matches connect us with teams across Douala and beyond."
      />

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Football as a Bridge</h2>
            <p className="text-lg text-muted-foreground">
              Friendly matches are about more than the scoreline. They&apos;re
              opportunities to build relationships, share experiences, and
              strengthen the bonds between communities. Every match we play, win
              or lose, contributes to our growth as a team and as individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Match Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Types of Friendly Matches
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {matchTypes.map((type) => (
              <Card key={type.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <type.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {type.frequency}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Matches */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Recent Friendly Matches
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-12 rounded-full ${
                        match.outcome === "win"
                          ? "bg-green-500"
                          : match.outcome === "draw"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    <div>
                      <div className="font-medium">vs {match.opponent}</div>
                      <div className="text-sm text-muted-foreground">
                        {match.date} • {match.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">{match.result}</div>
                    <div
                      className={`text-sm font-medium capitalize ${
                        match.outcome === "win"
                          ? "text-green-600"
                          : match.outcome === "draw"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {match.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Play Us?</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re always open to friendly matches with other community teams.
              If your team would like to arrange a match with ASAD, reach out to
              us through our contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
