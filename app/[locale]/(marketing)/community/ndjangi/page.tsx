import type { Metadata } from "next";
import { Users, Repeat, Banknote, Shield } from "lucide-react";
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
  title: "ASAD Ndjangi",
  description: `${siteConfig.name}'s Ndjangi - A traditional rotating savings and credit system adapted for our community to help members achieve financial goals.`,
};

const features = [
  {
    icon: Repeat,
    title: "Rotating System",
    description:
      "Each cycle, the pooled contributions go to one member on a rotating basis until everyone has received.",
  },
  {
    icon: Banknote,
    title: "Lump Sum Benefit",
    description:
      "Members receive a significant lump sum when it's their turn, enabling larger purchases or investments.",
  },
  {
    icon: Shield,
    title: "Trust-Based",
    description:
      "The system works on mutual trust and accountability within the ASAD community.",
  },
  {
    icon: Users,
    title: "Community Strength",
    description:
      "The collective power of members creates financial opportunities for everyone.",
  },
];

export default function NdjangiPage() {
  return (
    <>
      <PageHeader
        title="ASAD Ndjangi"
        description="A traditional Cameroonian rotating savings system adapted for our community. Together, we help each other achieve financial goals."
      />

      {/* What is Ndjangi */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">What is Ndjangi?</h2>
            <p className="text-lg text-muted-foreground">
              Ndjangi is a traditional Cameroonian practice of rotating savings
              and credit. A group of people contribute a fixed amount regularly,
              and the total collection goes to one member at a time. This
              continues until every member has received the pot. It&apos;s a
              time-tested system that leverages community trust to help members
              access funds they might not be able to save on their own.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Benefits Members</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              How ASAD Ndjangi Works
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Formation</h3>
                <p className="text-muted-foreground mt-1">
                  Interested members sign up for the Ndjangi cycle. The group
                  agrees on contribution amounts and frequency.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Regular Contributions</h3>
                <p className="text-muted-foreground mt-1">
                  Every cycle (weekly or monthly), all members contribute the
                  agreed amount to the pool.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Rotation Order</h3>
                <p className="text-muted-foreground mt-1">
                  The order of who receives the pot is determined at the start,
                  either by agreement or random selection.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Payout</h3>
                <p className="text-muted-foreground mt-1">
                  Each cycle, one member receives the entire pool. This continues
                  until everyone has received once.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Cycle Completion</h3>
                <p className="text-muted-foreground mt-1">
                  Once everyone has received, the cycle ends. Members can choose
                  to start a new cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Example</h2>
            <Card className="p-6">
              <div className="text-center">
                <p className="text-muted-foreground">
                  If 10 members each contribute <strong>10,000 FCFA</strong> per
                  week, the weekly pot is <strong>100,000 FCFA</strong>. Each
                  member will receive this amount once over 10 weeks. By the end
                  of the cycle, everyone has contributed and received the same
                  amount—but the lump sum allows for bigger purchases or savings.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Joining?</h2>
            <p className="text-muted-foreground">
              The ASAD Ndjangi is open to active members in good standing.
              Different cycles may have different contribution amounts to
              accommodate various budgets. Contact the Treasurer to learn about
              current or upcoming cycles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
