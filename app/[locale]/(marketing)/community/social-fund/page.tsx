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
import { getCommunityPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Social Fund",
  description: `${siteConfig.name}'s Social Fund provides emergency financial assistance to members during difficult times, illness, or bereavement.`,
};

export const revalidate = 300;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  'hand-heart': HandHeart,
  shield: Shield,
  users: Users,
};

type CoverageArea = { icon: string; title: string; description: string };
type ProcessStep = { title: string; description: string };

const defaultCoverage: CoverageArea[] = [
  {
    icon: "heart",
    title: "Health Emergencies",
    description:
      "Financial support for members and their immediate families facing unexpected medical expenses.",
  },
  {
    icon: "hand-heart",
    title: "Bereavement Support",
    description:
      "Assistance during the loss of a family member, helping with funeral expenses and providing emotional support.",
  },
  {
    icon: "shield",
    title: "Emergency Relief",
    description:
      "Support for members facing unexpected hardships such as accidents or natural disasters.",
  },
  {
    icon: "users",
    title: "Family Support",
    description:
      "Coverage extends to immediate family members, recognizing that our community includes entire families.",
  },
];

const defaultProcess: ProcessStep[] = [
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

const defaultEligible = [
  { item: "Active members in good standing" },
  { item: "Members current with their contributions" },
  { item: "Immediate family members (spouse, children)" },
  { item: "Members who have been active for the qualifying period" },
];

const defaultConditions = [
  { item: "Must be an active member" },
  { item: "Contributions must be current" },
  { item: "Request must be submitted to the executive" },
  { item: "Documentation may be required" },
];

export default async function SocialFundPage() {
  const locale = await getLocale() as Locale;

  let pageContent: Awaited<ReturnType<typeof getCommunityPage>> = null;

  try {
    pageContent = await getCommunityPage(locale);
  } catch (error) {
    console.log('Using static data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const cmsCoverage = pageContent?.socialFundCoverage;
  const coverage: CoverageArea[] = cmsCoverage && cmsCoverage.length > 0
    ? cmsCoverage.map((c: { icon?: string | null; title?: string | null; description?: string | null }) => ({
        icon: c.icon || 'heart',
        title: c.title || '',
        description: c.description || '',
      }))
    : defaultCoverage;

  const cmsProcess = pageContent?.socialFundProcess;
  const process: ProcessStep[] = cmsProcess && cmsProcess.length > 0
    ? cmsProcess.map((p: { title?: string | null; description?: string | null }) => ({
        title: p.title || '',
        description: p.description || '',
      }))
    : defaultProcess;

  const cmsEligible = pageContent?.socialFundEligible;
  const eligible: string[] = cmsEligible && cmsEligible.length > 0
    ? cmsEligible.map((e: { item?: string | null }) => e.item || '')
    : defaultEligible.map((e) => e.item);

  const cmsConditions = pageContent?.socialFundConditions;
  const conditions: string[] = cmsConditions && cmsConditions.length > 0
    ? cmsConditions.map((c: { item?: string | null }) => c.item || '')
    : defaultConditions.map((c) => c.item);

  return (
    <>
      <PageHeader
        title={pageContent?.socialFundTitle || "Social Fund"}
        description={pageContent?.socialFundDescription || "Our safety net for difficult times. The Social Fund provides financial assistance to members facing emergencies, illness, or bereavement."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">{pageContent?.socialFundSectionTitle || "Standing Together"}</h2>
            <p className="text-lg text-muted-foreground">
              {pageContent?.socialFundIntro || "Life can be unpredictable, but no ASAD member faces hardship alone. Our Social Fund is a collective safety net that ensures members have support during life's most challenging moments. Through small regular contributions, we build a resource that can make a real difference when it matters most."}
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">{pageContent?.socialFundCoverageTitle || "What We Cover"}</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {coverage.map((area) => {
              const IconComponent = iconMap[area.icon] || Heart;
              return (
                <Card key={area.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <IconComponent className="h-6 w-6" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {pageContent?.socialFundHowItWorks || "How It Works"}
            </h2>
            <div className="space-y-6">
              {process.map((step, index) => (
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
            <h2 className="text-2xl font-bold mb-8 text-center">{pageContent?.socialFundEligibilityTitle || "Eligibility"}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-green-600">
                  {pageContent?.socialFundEligibleLabel || "Eligible"}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {eligible.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-amber-600">
                  {pageContent?.socialFundConditionsLabel || "Conditions"}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {conditions.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
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
            <h2 className="text-2xl font-bold mb-4">{pageContent?.socialFundCtaTitle || "Building Security Together"}</h2>
            <p className="text-muted-foreground">
              {pageContent?.socialFundCtaDescription || "The Social Fund represents the heart of ASAD's community spirit. Every contribution, no matter how small, helps build a safety net that protects all of us. When we support one member, we strengthen the entire community."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
