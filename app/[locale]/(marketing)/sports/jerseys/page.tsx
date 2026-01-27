import type { Metadata } from "next";
import { Shirt, Palette, History, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getSportsPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Jersey Collection",
  description: `Explore ${siteConfig.name}'s iconic jersey collection. Our green and blue colors represent our identity and unity.`,
};

export const revalidate = 300;

const defaultJerseyHistory = [
  {
    era: "2004-2008",
    title: "The Original",
    description:
      "Our first official jersey featured a simple green design with the ASAD name. It marked the beginning of our visual identity.",
    colors: ["Green", "White"],
    status: "Historic",
  },
  {
    era: "2009-2014",
    title: "The Classic",
    description:
      "Introduction of blue as a secondary color. The jersey featured vertical stripes and became iconic among members.",
    colors: ["Green", "Blue", "White"],
    status: "Historic",
  },
  {
    era: "2015-2019",
    title: "Decade Edition",
    description:
      "Celebrating our 10th anniversary, this jersey incorporated all ASAD colors with a modern design and commemorative badge.",
    colors: ["Green", "Blue", "Yellow"],
    status: "Collector",
  },
  {
    era: "2020-Present",
    title: "Modern Era",
    description:
      "Our current jersey combines tradition with contemporary design. Features breathable fabric and the official ASAD crest.",
    colors: ["Green", "Blue", "White"],
    status: "Current",
  },
];

const defaultBrandColors = [
  {
    name: "ASAD Green",
    hex: "#1B5E20",
    meaning: "Represents growth, vitality, and our connection to the community",
  },
  {
    name: "ASAD Blue",
    hex: "#1976D2",
    meaning: "Symbolizes trust, unity, and the strength of our bond",
  },
  {
    name: "ASAD Yellow",
    hex: "#FFC107",
    meaning: "Represents energy, optimism, and our bright future",
  },
];

export default async function JerseysPage() {
  const locale = (await getLocale()) as Locale;

  let pageContent: {
    jerseysTitle?: string | null;
    jerseysDescription?: string | null;
    jerseysIntro?: string | null;
    brandColors?: Array<{
      name?: string | null;
      hex?: string | null;
      meaning?: string | null;
    }> | null;
    jerseyHistory?: Array<{
      era?: string | null;
      title?: string | null;
      description?: string | null;
      colors?: string | null;
      status?: string | null;
    }> | null;
  } = {};

  try {
    const payloadPage = await getSportsPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log(
      "Using static jerseys data:",
      error instanceof Error ? error.message : "CMS not available"
    );
  }

  const brandColors =
    pageContent.brandColors && pageContent.brandColors.length > 0
      ? pageContent.brandColors.map((c) => ({
          name: c.name || "",
          hex: c.hex || "#000000",
          meaning: c.meaning || "",
        }))
      : defaultBrandColors;

  const jerseyHistory =
    pageContent.jerseyHistory && pageContent.jerseyHistory.length > 0
      ? pageContent.jerseyHistory.map((j) => ({
          era: j.era || "",
          title: j.title || "",
          description: j.description || "",
          colors: j.colors ? j.colors.split(",").map((c) => c.trim()) : [],
          status: j.status || "Historic",
        }))
      : defaultJerseyHistory;

  return (
    <>
      <PageHeader
        title={pageContent.jerseysTitle || "Jersey Collection"}
        description={
          pageContent.jerseysDescription ||
          "Our jerseys are more than sportswear—they're symbols of our identity, unity, and history. Explore the evolution of ASAD's iconic colors."
        }
      />

      {/* Brand Colors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Our Colors, Our Identity</h2>
            <p className="mt-4 text-muted-foreground">
              {pageContent.jerseysIntro ||
                "Each color in the ASAD palette carries meaning and represents values we hold dear."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {brandColors.map((color) => (
              <Card key={color.name} className="text-center overflow-hidden">
                <div
                  className="h-24"
                  style={{ backgroundColor: color.hex }}
                />
                <CardHeader>
                  <CardTitle className="text-lg">{color.name}</CardTitle>
                  <CardDescription className="font-mono">
                    {color.hex}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {color.meaning}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey History */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <History className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Jersey Evolution</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to today, our jerseys have evolved while
              maintaining the core elements of our identity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {jerseyHistory.map((jersey) => (
              <Card key={jersey.era} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Shirt className="h-24 w-24 text-primary/50" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        jersey.status === "Current" ? "default" : "secondary"
                      }
                    >
                      {jersey.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {jersey.era}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{jersey.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {jersey.description}
                  </p>
                  <div className="flex gap-2">
                    {jersey.colors.map((color) => (
                      <span
                        key={color}
                        className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Jersey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Get Your Jersey</h2>
            <p className="text-muted-foreground">
              Official ASAD jerseys are available to members. Wearing the jersey
              is a privilege that comes with membership and represents your
              commitment to our community. Contact any executive member to inquire
              about availability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
