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

export const metadata: Metadata = {
  title: "Back to School Scheme",
  description: `${siteConfig.name}'s Back to School program supports children's education by providing school supplies and assistance at the start of each academic year.`,
};

const supportProvided = [
  {
    icon: BookOpen,
    title: "School Supplies",
    description:
      "Notebooks, textbooks, pens, pencils, and other essential learning materials for the school year.",
  },
  {
    icon: Pencil,
    title: "Uniforms & Bags",
    description:
      "Support for school uniforms, bags, and other necessary items to start the year prepared.",
  },
  {
    icon: Heart,
    title: "Financial Assistance",
    description:
      "Help with registration fees and other educational expenses for families in need.",
  },
];

const impactStats = [
  { number: "50+", label: "Children Supported Annually" },
  { number: "10+", label: "Years Running" },
  { number: "100%", label: "Member Participation" },
];

export default function BackToSchoolPage() {
  return (
    <>
      <PageHeader
        title="Back to School Scheme"
        description="Investing in the future by supporting children's education. Our back-to-school program helps families prepare for each new academic year."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Investing in Tomorrow</h2>
            <p className="text-lg text-muted-foreground">
              Education is the foundation of a better future. Every September,
              ASAD mobilizes to ensure that children in our community have what
              they need to succeed in school. From basic supplies to financial
              assistance, we make sure no child is left behind as the school year
              begins.
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
            {supportProvided.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto text-center">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
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
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Collection Period</h3>
                <p className="text-muted-foreground mt-1">
                  In the months leading up to September, members contribute to the
                  back-to-school fund during regular ASAD Sundays.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Needs Assessment</h3>
                <p className="text-muted-foreground mt-1">
                  The social committee identifies children who need support and
                  assesses their specific needs.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Distribution Event</h3>
                <p className="text-muted-foreground mt-1">
                  Before school starts, we organize a distribution event where
                  supplies are given to families in a dignified manner.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg">Follow-Up</h3>
                <p className="text-muted-foreground mt-1">
                  Throughout the year, we check in with families to ensure
                  children have ongoing support for their education.
                </p>
              </div>
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
