import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { Camera, Calendar, Video, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getMediaPage } from "@/lib/data";
import { getMediaStats, formatPhotoCount } from "@/lib/stats";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Media",
  description: `Browse photos, videos, and media from ${siteConfig.name}'s activities, events, and celebrations.`,
};

export const revalidate = 300;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: Camera,
  calendar: Calendar,
  video: Video,
};

export default async function MediaPage() {
  const locale = await getLocale() as Locale;

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    categories?: Array<{
      icon?: string | null;
      title?: string | null;
      description?: string | null;
      href?: string | null;
      count?: string | null;
      unit?: string | null;
      disabled?: boolean | null;
    }> | null;
    featuredTitle?: string | null;
    featuredDescription?: string | null;
    submitTitle?: string | null;
    submitDescription?: string | null;
  } = {};

  // Fetch dynamic stats
  const mediaStats = await getMediaStats();

  // Format dynamic photo count
  const photoCount = mediaStats.photoCount > 0
    ? formatPhotoCount(mediaStats.photoCount)
    : "500+"; // Fallback if no photos yet

  try {
    const payloadPage = await getMediaPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static media data:', error instanceof Error ? error.message : 'CMS not available');
  }

  // Build categories with dynamic counts
  const dynamicMediaCategories = [
    {
      icon: Camera,
      title: "Photo Gallery",
      description:
        "Browse through our collection of photos from competitions, community events, and celebrations.",
      href: "/media/gallery",
      count: photoCount,
      unit: "Photos",
      disabled: false,
    },
    {
      icon: Calendar,
      title: "Program of the Year",
      description:
        "View our annual calendar of activities, events, and important dates for the ASAD community.",
      href: "/media/program",
      count: "12",
      unit: "Months Planned",
      disabled: false,
    },
    {
      icon: Video,
      title: "Videos",
      description:
        "Watch highlights from our matches, events, and special moments captured on video.",
      href: "#",
      count: "Coming",
      unit: "Soon",
      disabled: true,
    },
  ];

  const mediaCategories = pageContent.categories && pageContent.categories.length > 0
    ? pageContent.categories.map((c) => ({
        icon: iconMap[c.icon || ''] || Camera,
        title: c.title || '',
        description: c.description || '',
        href: c.href || '#',
        count: c.count || '',
        unit: c.unit || '',
        disabled: c.disabled || false,
      }))
    : dynamicMediaCategories;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Media Gallery"}
        description={pageContent.headerDescription || "Capturing the moments that make ASAD special. Browse through our collection of photos, videos, and memories from years of community building."}
      />

      {/* Media Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {mediaCategories.map((category) => (
              <Card
                key={category.title}
                className={`flex flex-col ${
                  category.disabled
                    ? "opacity-60"
                    : "hover:shadow-lg hover:border-primary/50 transition-all"
                }`}
              >
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base flex-1">
                    {category.description}
                  </CardDescription>
                  <div className="mt-6 text-center">
                    <div className="text-3xl font-bold text-primary">
                      {category.count}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {category.unit}
                    </div>
                  </div>
                  <div className="mt-6">
                    {category.disabled ? (
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    ) : (
                      <Button asChild className="w-full">
                        <Link href={category.href}>
                          Explore <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">
              {pageContent.featuredTitle || "Featured Moments"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {pageContent.featuredDescription || "Some of our most memorable captures from recent events."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {["Competitions", "Community", "Celebrations"].map((title) => (
              <div
                key={title}
                className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <Camera className="h-12 w-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">{title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/media/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Photos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              {pageContent.submitTitle || "Have Photos to Share?"}
            </h2>
            <p className="text-muted-foreground">
              {pageContent.submitDescription || "If you have photos from ASAD events that you'd like to add to our gallery, please share them with the media coordinator at any ASAD Sunday gathering or through our contact page."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
