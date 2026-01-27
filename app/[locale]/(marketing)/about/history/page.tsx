import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Timeline } from "@/components/sections";
import { historyTimeline } from "@/data/leadership";
import { siteConfig } from "@/data/site-config";
import { getTimeline, getSiteSettings } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Our History",
  description: `The history of ${siteConfig.name} from ${siteConfig.founded} to present day. Discover our journey of community building through sports.`,
};

export const revalidate = 300;

export default async function HistoryPage() {
  const locale = await getLocale() as Locale;

  let timeline = historyTimeline;
  let settings = siteConfig;

  try {
    const payloadTimeline = await getTimeline(locale);
    if (payloadTimeline.length > 0) {
      timeline = payloadTimeline.map((t) => ({
        year: t.year,
        title: t.title,
        description: t.description,
      }));
    }

    const payloadSettings = await getSiteSettings(locale);
    if (payloadSettings) {
      settings = {
        ...siteConfig,
        founded: payloadSettings.founded || siteConfig.founded,
        location: payloadSettings.location || siteConfig.location,
      };
    }
  } catch (error) {
    console.log('Using static history data:', error instanceof Error ? error.message : 'CMS not available');
  }

  return (
    <>
      <PageHeader
        title="Our History"
        description={`From humble beginnings in ${settings.founded} to a thriving community organization, discover the journey of ASAD.`}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-lg text-muted-foreground">
              ASAD was founded in {settings.founded} by a group of sports
              enthusiasts in {settings.location.neighborhood},{" "}
              {settings.location.city}. What began as informal Sunday football
              matches has evolved into a comprehensive community organization
              that touches the lives of hundreds of families.
            </p>
          </div>

          {/* Timeline */}
          <Timeline events={timeline} />

          {/* Closing */}
          <div className="mx-auto max-w-3xl text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground">
              As we continue to grow, our commitment to unity, sports, and
              community development remains unchanged. The future holds exciting
              possibilities as we expand our programs and strengthen our impact
              in {settings.location.neighborhood} and beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
