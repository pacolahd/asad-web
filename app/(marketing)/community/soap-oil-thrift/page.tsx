import type { Metadata } from "next";
import { PiggyBank, ShoppingBag, Calendar, TrendingUp } from "lucide-react";
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
  title: "Soap & Oil Thrift",
  description: `${siteConfig.name}'s Soap & Oil Thrift initiative promotes financial discipline through regular savings for household essentials.`,
};

const benefits = [
  {
    icon: PiggyBank,
    title: "Financial Discipline",
    description:
      "Regular small contributions build the habit of saving and financial planning.",
  },
  {
    icon: ShoppingBag,
    title: "Quality Products",
    description:
      "Bulk purchasing allows us to provide high-quality household essentials at better prices.",
  },
  {
    icon: TrendingUp,
    title: "Economic Relief",
    description:
      "Having essentials covered reduces the burden of monthly household expenses.",
  },
];

const howItWorks = [
  {
    title: "Weekly Contributions",
    description:
      "Members contribute a fixed amount each week during ASAD Sundays toward the thrift.",
  },
  {
    title: "Bulk Purchase",
    description:
      "At the end of each cycle, the collective fund is used to purchase soap, cooking oil, and other essentials in bulk.",
  },
  {
    title: "Fair Distribution",
    description:
      "Products are distributed equally among participating members based on their contributions.",
  },
  {
    title: "New Cycle Begins",
    description:
      "After distribution, a new savings cycle begins, allowing members to continue building.",
  },
];

export default function SoapOilThriftPage() {
  return (
    <>
      <PageHeader
        title="Soap & Oil Thrift"
        description="A unique savings initiative where small weekly contributions transform into household essentials. Building financial discipline, one contribution at a time."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <PiggyBank className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Small Savings, Big Impact</h2>
            <p className="text-lg text-muted-foreground">
              The Soap & Oil Thrift is a practical savings scheme that helps
              members build financial discipline while ensuring their homes are
              stocked with essential items. By saving small amounts regularly,
              members receive bulk quantities of soap, cooking oil, and other
              household necessities—taking one expense off their monthly budget.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
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

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">How It Works</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Participation */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Thrift</h2>
            <p className="text-muted-foreground">
              Participation in the Soap & Oil Thrift is optional but encouraged
              for all ASAD members. The contribution amount is affordable and
              designed to be accessible to all members. Speak with the Treasurer
              to join the next cycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
