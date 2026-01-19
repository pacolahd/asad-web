import type { Metadata } from "next";
import { Calendar, Clock, MapPin, Users, Coffee, Trophy } from "lucide-react";
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
  title: "ASAD Sundays",
  description: `ASAD Sundays - Our signature weekly gathering where members come together for football, fellowship, and community building in ${siteConfig.location.neighborhood}.`,
};

const sundayActivities = [
  {
    icon: Trophy,
    title: "Football Matches",
    description:
      "The heart of ASAD Sundays. Members organize into teams and play matches throughout the morning.",
  },
  {
    icon: Coffee,
    title: "Fellowship",
    description:
      "After the games, members gather to share food, drinks, and conversation. It's where bonds are strengthened.",
  },
  {
    icon: Users,
    title: "Member Meetings",
    description:
      "Important announcements, updates on programs, and community discussions happen during these gatherings.",
  },
];

const schedule = [
  { time: "7:00 AM", activity: "Gathering & Warm-up" },
  { time: "7:30 AM", activity: "First Match Kicks Off" },
  { time: "9:00 AM", activity: "Second Round of Games" },
  { time: "10:30 AM", activity: "Cool Down & Fellowship" },
  { time: "11:00 AM", activity: "Member Discussions (when scheduled)" },
  { time: "12:00 PM", activity: "Dispersal" },
];

export default function ASADSundaysPage() {
  return (
    <>
      <PageHeader
        title="ASAD Sundays"
        description="Every Sunday, ASAD members gather for our signature weekly event. It's more than football—it's where our community comes alive."
      />

      {/* What is ASAD Sundays */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">The Heartbeat of ASAD</h2>
            <p className="text-lg text-muted-foreground">
              ASAD Sundays have been our cornerstone since the organization&apos;s
              founding. Rain or shine, members gather every Sunday to play
              football, catch up with each other, and strengthen the bonds that
              make us a family. It&apos;s where new members are welcomed, where
              friendships are forged, and where the ASAD spirit truly shines.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What Happens on ASAD Sundays
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {sundayActivities.map((activity) => (
              <Card key={activity.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <activity.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Typical Sunday Schedule</h2>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card"
                >
                  <div className="font-mono text-sm font-semibold text-primary w-20">
                    {item.time}
                  </div>
                  <div className="flex-1">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Join */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Where We Meet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We gather at our regular pitch in {siteConfig.location.neighborhood},{" "}
                  {siteConfig.location.city}. The exact location is shared with
                  members. Visitors are welcome to join us—just reach out through
                  our contact page!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Join Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ASAD Sundays are open to all members and prospective members.
                  If you&apos;re interested in joining ASAD, attending a Sunday
                  gathering is the perfect way to meet the community and see what
                  we&apos;re all about.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
