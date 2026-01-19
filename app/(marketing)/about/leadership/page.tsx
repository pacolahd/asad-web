import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { TeamGrid } from "@/components/sections";
import { leadershipTeam } from "@/data/leadership";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: `Meet the dedicated leadership team of ${siteConfig.name}. Our leaders guide the organization with vision and commitment to our community.`,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Leadership Team"
        description="Meet the dedicated individuals who lead ASAD with vision, integrity, and commitment to our community."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-lg text-muted-foreground">
              Our leadership team is composed of dedicated members who volunteer
              their time and expertise to guide ASAD. Elected by the general
              assembly, they work tirelessly to ensure the organization fulfills
              its mission of promoting sports and community development.
            </p>
          </div>

          {/* Team Grid */}
          <TeamGrid members={leadershipTeam} />

          {/* Note about elections */}
          <div className="mx-auto max-w-3xl text-center mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Democratic Leadership
            </h3>
            <p className="text-sm text-muted-foreground">
              ASAD&apos;s leadership is elected democratically by the general
              assembly of members. Elections are held according to our statutes
              to ensure transparent and fair governance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
