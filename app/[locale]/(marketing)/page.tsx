import { Link } from "@/i18n/routing";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hero, Stats, FeatureGrid, CTA } from "@/components/sections";
import { communityPrograms } from "@/data/programs";
import { siteConfig } from "@/data/site-config";
import { getPrograms, getStats, getSiteSettings, getGalleryAlbums, getHomePage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const revalidate = 300; // Revalidate every 5 minutes

export default async function HomePage() {
  const locale = await getLocale() as Locale;

  // Fetch from Payload with fallbacks
  let programs = communityPrograms;
  let stats = undefined;
  let settings = siteConfig;
  let albums: { title: string }[] = [];
  let pageContent: {
    whatIsAsadTitle?: string | null;
    whatIsAsadContent?: string | null;
    communityTitle?: string | null;
    communityDescription?: string | null;
    galleryTitle?: string | null;
    galleryDescription?: string | null;
    ctaTitle?: string | null;
    ctaDescription?: string | null;
  } = {};

  try {
    const payloadPrograms = await getPrograms(locale, 'community');
    if (payloadPrograms.length > 0) {
      programs = payloadPrograms.map((p) => ({
        id: p.slug,
        title: p.title,
        description: p.description,
        icon: p.icon || undefined,
        href: `/community/${p.slug}`,
        image: undefined,
      }));
    }

    const payloadStats = await getStats(locale);
    if (payloadStats.length > 0) {
      stats = payloadStats.map((s) => ({
        value: s.value,
        label: s.label,
        prefix: s.prefix || undefined,
        suffix: s.suffix || undefined,
      }));
    }

    const payloadSettings = await getSiteSettings(locale);
    if (payloadSettings) {
      settings = {
        name: payloadSettings.name || siteConfig.name,
        fullName: payloadSettings.fullName || siteConfig.fullName,
        description: payloadSettings.description || siteConfig.description,
        slogan: payloadSettings.slogan || siteConfig.slogan,
        founded: payloadSettings.founded || siteConfig.founded,
        location: payloadSettings.location || siteConfig.location,
        contact: payloadSettings.contact || siteConfig.contact,
        social: payloadSettings.social || siteConfig.social,
      };
    }

    const payloadAlbums = await getGalleryAlbums(locale);
    albums = payloadAlbums.slice(0, 3).map((a) => ({ title: a.title }));

    const payloadPageContent = await getHomePage(locale);
    if (payloadPageContent) {
      pageContent = payloadPageContent;
    }
  } catch (error) {
    // CMS not configured, use static data
    console.log('Using static data:', error instanceof Error ? error.message : 'CMS not available');
  }

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {pageContent.whatIsAsadTitle || (
                  <>What Does <span className="text-primary">ASAD</span> Mean?</>
                )}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                <strong>A</strong>ssociation <strong>S</strong>portive des{" "}
                <strong>A</strong>mis du <strong>D</strong>eveloppement
              </p>
              <p className="mt-4 text-muted-foreground">
                {pageContent.whatIsAsadContent || (
                  <>
                    ASAD is more than just a sports club. We are a family of friends
                    united by our love for football and our commitment to community
                    development. Founded in {settings.founded} in{" "}
                    {settings.location.neighborhood}, we have grown to become a
                    pillar of our community.
                  </>
                )}
              </p>
              <p className="mt-4 text-muted-foreground">
                Our mission extends beyond the football pitch. Through various
                programs, we support education, promote financial discipline,
                and provide a safety net for our members in times of need.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">
                    Learn Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-4xl font-bold">A</span>
                  </div>
                  <p className="text-lg font-medium">Since {settings.founded}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {settings.location.neighborhood}, {settings.location.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <FeatureGrid
        title={pageContent.communityTitle || "Community Programs"}
        description={pageContent.communityDescription || "Beyond sports, we invest in our community through various programs that support members and their families."}
        programs={programs}
      />

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {pageContent.galleryTitle || "Capturing Our Moments"}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {pageContent.galleryDescription || "From match days to community events, browse through our memories."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Gallery cards from CMS or fallback */}
            {(albums.length > 0 ? albums : [{ title: "Competitions" }, { title: "Community Events" }, { title: "Celebrations" }]).map(
              (album, index) => (
                <Card
                  key={album.title}
                  className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative">
                    <Camera className="h-12 w-12 text-muted-foreground/50" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <CardTitle>{album.title}</CardTitle>
                    <CardDescription>
                      {index + 5}+ photos from our {album.title.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            )}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/media/gallery">
                View All Photos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title={pageContent.ctaTitle || "Join the ASAD Family"}
        description={pageContent.ctaDescription || "Become part of a community that values sports, unity, and mutual support. Whether you're a football enthusiast or looking for a supportive community, ASAD welcomes you."}
        primaryAction={{ label: "Become a Member", href: "/members" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
