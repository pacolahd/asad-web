import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Sports",
  description: `Discover the sporting activities of ${siteConfig.name}. From competitions to friendly matches, sports is at the heart of our community.`,
};

const sportsActivities = [
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

export default function SportsPage() {
  return (
    <>
      <PageHeader
        title="Sports at ASAD"
        description="Football is at the heart of ASAD. Our sporting activities bring members together every week in pursuit of excellence and unity."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">More Than Just a Game</h2>
            <p className="text-lg text-muted-foreground">
              At ASAD, football is the thread that weaves our community together.
              Every Sunday, members gather on the pitch to play, compete, and
              strengthen the bonds of friendship. Our sporting activities range
              from intense competitive tournaments to friendly matches that
              welcome players of all skill levels.
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
            <div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="mt-2 text-muted-foreground">
                Competitions Played
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">Every</div>
              <div className="mt-2 text-muted-foreground">
                Sunday We Play
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="mt-2 text-muted-foreground">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                {new Date().getFullYear() - siteConfig.founded}+
              </div>
              <div className="mt-2 text-muted-foreground">Years Playing</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
