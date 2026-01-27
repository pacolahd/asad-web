import type { Metadata } from "next";
import { GraduationCap, BookOpen, Pencil, Heart } from "lucide-react";
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
  title: "Back to School Scheme",
  description: `${siteConfig.name}'s Back to School program supports children's education by providing school supplies and assistance at the start of each academic year.`,
};

export const revalidate = 300;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  pencil: Pencil,
  heart: Heart,
};

type SupportItem = { icon: string; title: string; description: string };
type ImpactStat = { value: string; label: string };
type ProcessStep = { title: string; description: string };

const defaultSupport: SupportItem[] = [
  {
    icon: "book-open",
    title: "School Supplies",
    description:
      "Notebooks, textbooks, pens, pencils, and other essential learning materials for the school year.",
  },
  {
    icon: "pencil",
    title: "Uniforms & Bags",
    description:
      "Support for school uniforms, bags, and other necessary items to start the year prepared.",
  },
  {
    icon: "heart",
    title: "Financial Assistance",
    description:
      "Help with registration fees and other educational expenses for families in need.",
  },
];

const defaultImpact: ImpactStat[] = [
  { value: "50+", label: "Children Supported Annually" },
  { value: "10+", label: "Years Running" },
  { value: "100%", label: "Member Participation" },
];

const defaultProcess: ProcessStep[] = [
  {
    title: "Collection Period",
    description:
      "In the months leading up to September, members contribute to the back-to-school fund during regular ASAD Sundays.",
  },
  {
    title: "Needs Assessment",
    description:
      "The social committee identifies children who need support and assesses their specific needs.",
  },
  {
    title: "Distribution Event",
    description:
      "Before school starts, we organize a distribution event where supplies are given to families in a dignified manner.",
  },
  {
    title: "Follow-Up",
    description:
      "Throughout the year, we check in with families to ensure children have ongoing support for their education.",
  },
];

export default async function BackToSchoolPage() {
  const locale = await getLocale() as Locale;

  let pageContent: Awaited<ReturnType<typeof getCommunityPage>> = null;

  try {
    pageContent = await getCommunityPage(locale);
  } catch (error) {
    console.log('Using static data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const cmsSupport = pageContent?.backToSchoolSupport;
  const support: SupportItem[] = cmsSupport && cmsSupport.length > 0
    ? cmsSupport.map((s: { icon?: string | null; title?: string | null; description?: string | null }) => ({
        icon: s.icon || 'book-open',
        title: s.title || '',
        description: s.description || '',
      }))
    : defaultSupport;

  const cmsImpact = pageContent?.backToSchoolImpact;
  const impact: ImpactStat[] = cmsImpact && cmsImpact.length > 0
    ? cmsImpact.map((i: { value?: string | null; label?: string | null }) => ({
        value: i.value || '',
        label: i.label || '',
      }))
    : defaultImpact;

  const cmsProcess = pageContent?.backToSchoolProcess;
  const process: ProcessStep[] = cmsProcess && cmsProcess.length > 0
    ? cmsProcess.map((p: { title?: string | null; description?: string | null }) => ({
        title: p.title || '',
        description: p.description || '',
      }))
    : defaultProcess;

  return (
    <>
      <PageHeader
        title={pageContent?.backToSchoolTitle || "Back to School Scheme"}
        description={pageContent?.backToSchoolDescription || "Investing in the future by supporting children's education. Our back-to-school program helps families prepare for each new academic year."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Investing in Tomorrow</h2>
            <p className="text-lg text-muted-foreground">
              {pageContent?.backToSchoolIntro || "Education is the foundation of a better future. Every September, ASAD mobilizes to ensure that children in our community have what they need to succeed in school. From basic supplies to financial assistance, we make sure no child is left behind as the school year begins."}
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            How We Support
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {support.map((item) => {
              const IconComponent = iconMap[item.icon] || BookOpen;
              return (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto text-center">
            {impact.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              How the Program Works
            </h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Support Education</h2>
            <p className="text-muted-foreground">
              Every contribution, no matter how small, makes a difference in a
              child&apos;s educational journey. As an ASAD member, you automatically
              participate in this program through your regular contributions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
