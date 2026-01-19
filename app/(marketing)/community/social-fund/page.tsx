import type { Metadata } from "next";
import { Heart, Shield, Users, HandHeart } from "lucide-react";
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
  title: "Social Fund",
  description: `${siteConfig.name}'s Social Fund provides emergency financial assistance to members during difficult times, illness, or bereavement.`,
};

const coverageAreas = [
  {
    icon: Heart,
    title: "Health Emergencies",
    description:
      "Financial support for members and their immediate families facing unexpected medical expenses.",
  },
  {
    icon: HandHeart,
    title: "Bereavement Support",
    description:
      "Assistance during the loss of a family member, helping with funeral expenses and providing emotional support.",
  },
  {
    icon: Shield,
    title: "Emergency Relief",
    description:
      "Support for members facing unexpected hardships such as accidents or natural disasters.",
  },
  {
    icon: Users,
    title: "Family Support",
    description:
      "Coverage extends to immediate family members, recognizing that our community includes entire families.",
  },
];

const howItWorks = [
  {
    title: "Regular Contributions",
    description:
      "All members contribute a fixed amount to the social fund as part of their regular ASAD dues.",
  },
  {
    title: "Request Process",
    description:
      "When in need, members inform the executive committee, who assess the situation and determine appropriate support.",
  },
  {
    title: "Committee Decision",
    description:
      "The social affairs director, in consultation with the executive, approves disbursements based on established guidelines.",
  },
  {
    title: "Disbursement",
    description:
      "Approved funds are released promptly to ensure members receive help when they need it most.",
  },
];

export default function SocialFundPage() {
  return (
    <>
      <PageHeader
        title="Social Fund"
        description="Our safety net for difficult times. The Social Fund provides financial assistance to members facing emergencies, illness, or bereavement."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Standing Together</h2>
            <p className="text-lg text-muted-foreground">
              Life can be unpredictable, but no ASAD member faces hardship alone.
              Our Social Fund is a collective safety net that ensures members have
              support during life&apos;s most challenging moments. Through small
              regular contributions, we build a resource that can make a real
              difference when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">What We Cover</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {coverageAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {area.description}
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
              How It Works
            </h2>
            <div className="space-y-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {step.description}
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Eligibility</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-green-600">
                  Eligible
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Active members in good standing</li>
                  <li>• Members current with their contributions</li>
                  <li>• Immediate family members (spouse, children)</li>
                  <li>• Members who have been active for the qualifying period</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-amber-600">
                  Conditions
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Must be an active member</li>
                  <li>• Contributions must be current</li>
                  <li>• Request must be submitted to the executive</li>
                  <li>• Documentation may be required</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Building Security Together</h2>
            <p className="text-muted-foreground">
              The Social Fund represents the heart of ASAD&apos;s community spirit.
              Every contribution, no matter how small, helps build a safety net
              that protects all of us. When we support one member, we strengthen
              the entire community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
