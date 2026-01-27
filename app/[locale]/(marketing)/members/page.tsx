import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import {
  Users,
  CheckCircle,
  Calendar,
  FileText,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getMembersPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Membership",
  description: `Join ${siteConfig.name} and become part of a community that values sports, unity, and mutual support. Learn about membership conditions and benefits.`,
};

export const revalidate = 300;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  calendar: Calendar,
  heart: Heart,
  'file-text': FileText,
};

const defaultMembershipBenefits = [
  {
    icon: Users,
    title: "Community & Fellowship",
    description:
      "Join a supportive family of like-minded individuals who share your passion for sports and community.",
  },
  {
    icon: Calendar,
    title: "Regular Activities",
    description:
      "Participate in weekly ASAD Sundays, competitions, and social events throughout the year.",
  },
  {
    icon: Heart,
    title: "Social Support Programs",
    description:
      "Access to our social fund, baby shower program, and other support systems for you and your family.",
  },
  {
    icon: FileText,
    title: "Financial Programs",
    description:
      "Participate in Ndjangi, Soap & Oil Thrift, and other savings programs designed to help members.",
  },
];

const defaultMembershipRequirements = [
  "Be at least 18 years of age",
  "Share ASAD's values of unity, sportsmanship, and community development",
  "Commit to participating regularly in ASAD activities",
  "Pay the registration fee and agree to regular membership dues",
  "Abide by ASAD's statutes and internal regulations",
  "Be recommended by an existing member or attend trial Sundays",
];

const defaultMembershipProcess = [
  {
    step: 1,
    title: "Express Interest",
    description:
      "Contact us or attend an ASAD Sunday to express your interest in joining.",
  },
  {
    step: 2,
    title: "Trial Period",
    description:
      "Participate in a few ASAD Sundays to get to know the community and let us know you.",
  },
  {
    step: 3,
    title: "Application",
    description:
      "Submit your membership application with required information and registration fee.",
  },
  {
    step: 4,
    title: "Approval",
    description:
      "The executive committee reviews applications and welcomes approved members.",
  },
];

export default async function MembersPage() {
  const locale = await getLocale() as Locale;

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    benefits?: Array<{ icon?: string | null; title?: string | null; description?: string | null }> | null;
    requirements?: Array<{ requirement?: string | null }> | null;
    process?: Array<{ title?: string | null; description?: string | null }> | null;
    duesTitle?: string | null;
    duesContent?: string | null;
    ctaTitle?: string | null;
    ctaDescription?: string | null;
  } = {};

  try {
    const payloadPage = await getMembersPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static members data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const membershipBenefits = pageContent.benefits && pageContent.benefits.length > 0
    ? pageContent.benefits.map((b) => ({
        icon: iconMap[b.icon || ''] || Users,
        title: b.title || '',
        description: b.description || '',
      }))
    : defaultMembershipBenefits;

  const membershipRequirements = pageContent.requirements && pageContent.requirements.length > 0
    ? pageContent.requirements.map((r) => r.requirement || '')
    : defaultMembershipRequirements;

  const membershipProcess = pageContent.process && pageContent.process.length > 0
    ? pageContent.process.map((p, index) => ({
        step: index + 1,
        title: p.title || '',
        description: p.description || '',
      }))
    : defaultMembershipProcess;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Join ASAD"}
        description={pageContent.headerDescription || "Become part of a community that values sports, unity, and mutual support. ASAD membership opens doors to fellowship, programs, and a family that stands together."}
      />

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Membership Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {membershipBenefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Membership Requirements
            </h2>
            <Card className="p-6">
              <ul className="space-y-4">
                {membershipRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            How to Join
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {membershipProcess.map((item) => (
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

      {/* Dues */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              {pageContent.duesTitle || "Membership Dues"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {pageContent.duesContent || "ASAD membership involves a one-time registration fee and regular dues that support our programs and activities. Specific amounts are communicated upon application. Our fees are designed to be accessible while ensuring we can deliver meaningful programs."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              {pageContent.ctaTitle || "Ready to Join?"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {pageContent.ctaDescription || "Take the first step toward becoming part of the ASAD family. Contact us to learn more or visit us on any Sunday to experience our community firsthand."}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/members/in-memoriam">In Memoriam</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
