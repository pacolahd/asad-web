import type { Metadata } from "next";
import { Gift, Heart, Users, PartyPopper } from "lucide-react";
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
  title: "Baby Shower Program",
  description: `${siteConfig.name}'s Baby Shower program celebrates new life by supporting expecting and new parents in our community.`,
};

const programFeatures = [
  {
    icon: Gift,
    title: "Gift Package",
    description:
      "New parents receive a carefully curated package of essential items for their newborn, from clothing to care products.",
  },
  {
    icon: PartyPopper,
    title: "Community Celebration",
    description:
      "The ASAD family comes together to celebrate the new addition, creating lasting memories for the family.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description:
      "Beyond the shower, new parents can count on the community for advice, help, and support as they navigate parenthood.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Announcement",
    description:
      "When a member or their spouse is expecting, they inform the Social Affairs Director.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "The social committee organizes the baby shower, usually scheduled around a regular ASAD Sunday.",
  },
  {
    step: 3,
    title: "Contribution",
    description:
      "Members contribute to a collective gift fund, ensuring a meaningful present for the family.",
  },
  {
    step: 4,
    title: "Celebration",
    description:
      "The community gathers to celebrate, present gifts, and welcome the new life into the ASAD family.",
  },
];

export default function BabyShowerPage() {
  return (
    <>
      <PageHeader
        title="Baby Shower Program"
        description="Celebrating new life in our community. Our baby shower program supports expecting and new parents with gifts, celebration, and ongoing support."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Gift className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Welcoming New Life</h2>
            <p className="text-lg text-muted-foreground">
              At ASAD, every new child is a blessing to our entire community. Our
              baby shower program ensures that expecting and new parents feel the
              love and support of the ASAD family during this special time. It&apos;s
              our way of saying &quot;welcome&quot; to the newest members of our extended
              family.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What We Provide
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {programFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
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
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Who Is Eligible?</h2>
            <p className="text-muted-foreground">
              The baby shower program is available to all active ASAD members in
              good standing. Both the member and their spouse are covered by this
              program, regardless of whether both are ASAD members.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
