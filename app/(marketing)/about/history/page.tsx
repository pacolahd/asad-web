import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Timeline } from "@/components/sections";
import { historyTimeline } from "@/data/leadership";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Our History",
  description: `The history of ${siteConfig.name} from ${siteConfig.founded} to present day. Discover our journey of community building through sports.`,
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="Our History"
        description={`From humble beginnings in ${siteConfig.founded} to a thriving community organization, discover the journey of ASAD.`}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-lg text-muted-foreground">
              ASAD was founded in {siteConfig.founded} by a group of sports
              enthusiasts in {siteConfig.location.neighborhood},{" "}
              {siteConfig.location.city}. What began as informal Sunday football
              matches has evolved into a comprehensive community organization
              that touches the lives of hundreds of families.
            </p>
          </div>

          {/* Timeline */}
          <Timeline events={historyTimeline} />

          {/* Closing */}
          <div className="mx-auto max-w-3xl text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground">
              As we continue to grow, our commitment to unity, sports, and
              community development remains unchanged. The future holds exciting
              possibilities as we expand our programs and strengthen our impact
              in {siteConfig.location.neighborhood} and beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
