import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { TeamGrid } from "@/components/sections";
import { leadershipTeam } from "@/data/leadership";
import { siteConfig } from "@/data/site-config";
import { getMediaUrl, getLeadershipPage } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: `Meet the dedicated leadership team of ${siteConfig.name}. Our leaders guide the organization with vision and commitment to our community.`,
};

export const revalidate = 300;

export default async function LeadershipPage() {
  const locale = await getLocale() as Locale;

  let members = leadershipTeam;
  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    introContent?: string | null;
    electionNoteTitle?: string | null;
    electionNoteContent?: string | null;
    teamMembers?: Array<{
      name: string;
      role: string;
      bio?: string | null;
      image?: { url?: string } | null;
      since?: number | null;
    }> | null;
  } = {};

  try {
    const payloadPage = await getLeadershipPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
      // Use embedded teamMembers from the page global
      if (payloadPage.teamMembers && payloadPage.teamMembers.length > 0) {
        members = payloadPage.teamMembers.map((l: { name: string; role: string; bio?: string | null; image?: { url?: string } | null; since?: number | null }, index: number) => ({
          id: String(index),
          name: l.name,
          role: l.role,
          bio: l.bio || undefined,
          image: l.image ? getMediaUrl(l.image as { url?: string }) : undefined,
          since: l.since || undefined,
        }));
      }
    }
  } catch (error) {
    console.log('Using static leadership data:', error instanceof Error ? error.message : 'CMS not available');
  }

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Leadership Team"}
        description={pageContent.headerDescription || "Meet the dedicated individuals who lead ASAD with vision, integrity, and commitment to our community."}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-lg text-muted-foreground">
              {pageContent.introContent || (
                <>
                  Our leadership team is composed of dedicated members who volunteer
                  their time and expertise to guide ASAD. Elected by the general
                  assembly, they work tirelessly to ensure the organization fulfills
                  its mission of promoting sports and community development.
                </>
              )}
            </p>
          </div>

          {/* Team Grid */}
          <TeamGrid members={members} />

          {/* Note about elections */}
          <div className="mx-auto max-w-3xl text-center mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              {pageContent.electionNoteTitle || "Democratic Leadership"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {pageContent.electionNoteContent || (
                <>
                  ASAD&apos;s leadership is elected democratically by the general
                  assembly of members. Elections are held according to our statutes
                  to ensure transparent and fair governance.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
