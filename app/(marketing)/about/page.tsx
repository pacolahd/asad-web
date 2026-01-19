import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Users, Trophy } from "lucide-react";
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

export const metadata: Metadata = {
  title: "About ASAD",
  description: `Learn about ${siteConfig.fullName}, a community sports organization in ${siteConfig.location.neighborhood}, ${siteConfig.location.city} since ${siteConfig.founded}.`,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To promote sports, unity, and community development through football and social programs that support our members and their families.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description:
      "To be a model community organization that demonstrates how sports can transform lives and strengthen communities.",
  },
  {
    icon: Users,
    title: "Our Values",
    description:
      "Unity, sportsmanship, mutual support, transparency, and commitment to community development guide everything we do.",
  },
  {
    icon: Trophy,
    title: "Our Commitment",
    description:
      "We are committed to providing a supportive environment where members can grow, compete, and contribute to the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About ASAD"
        description={`Discover the story behind the Association Sportive des Amis du Developpement and our commitment to community development.`}
      />

      {/* Name Meaning Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Does <span className="text-primary">ASAD</span> Mean?
            </h2>
            <div className="mt-8 space-y-4">
              <div className="text-2xl md:text-3xl font-medium">
                <span className="text-primary font-bold">A</span>ssociation{" "}
                <span className="text-primary font-bold">S</span>portive des{" "}
                <span className="text-primary font-bold">A</span>mis du{" "}
                <span className="text-primary font-bold">D</span>eveloppement
              </div>
              <p className="text-lg text-muted-foreground">
                Translated from French: <em>&quot;Sports Association of Friends of Development&quot;</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded in <strong>{siteConfig.founded}</strong> in the vibrant
                  neighborhood of {siteConfig.location.neighborhood},{" "}
                  {siteConfig.location.city}, ASAD began as a group of football
                  enthusiasts who shared a common vision: to create a community
                  where sports could bring people together.
                </p>
                <p>
                  What started as friendly Sunday football matches has grown into
                  a comprehensive community organization. Today, ASAD is not just
                  about sports—it&apos;s about building a supportive family where
                  members look out for each other.
                </p>
                <p>
                  Our programs have expanded to include financial support systems,
                  educational initiatives, and social events that strengthen the
                  bonds between members and their families.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about/history">
                    Explore Our History <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary">
                    {new Date().getFullYear() - siteConfig.founded}+
                  </div>
                  <p className="text-xl font-medium mt-4">Years of Excellence</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Since {siteConfig.founded}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our core values guide everything we do at ASAD.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Learn More About Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/about/history">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle>Our History</CardTitle>
                  <CardDescription>
                    Follow our journey from {siteConfig.founded} to today
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/about/leadership">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle>Leadership Team</CardTitle>
                  <CardDescription>
                    Meet the dedicated team leading ASAD
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/about/statutes">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle>Our Statutes</CardTitle>
                  <CardDescription>
                    Read our governing documents and bylaws
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
