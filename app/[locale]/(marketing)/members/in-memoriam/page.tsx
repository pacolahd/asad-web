import type { Metadata } from "next";
import { Heart, Flower2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getInMemoriamPage, getMemorialMembers, getMediaUrl } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "In Memoriam",
  description: `Honoring the memory of ${siteConfig.name} members who have passed on. They remain forever in our hearts.`,
};

export const revalidate = 300;

const defaultRememberedMembers: Array<{
  id: string;
  name: string;
  role?: string;
  years: string;
  tribute: string;
  image?: string;
}> = [
  {
    id: "member-1",
    name: "Member Name",
    role: "Founding Member",
    years: "2004 - 2020",
    tribute:
      "A dedicated member who contributed greatly to the foundation and growth of ASAD. Their spirit of unity and sportsmanship continues to inspire us.",
  },
  {
    id: "member-2",
    name: "Member Name",
    role: "Active Member",
    years: "2008 - 2022",
    tribute:
      "Known for their unwavering support and commitment to the community. Their kindness and generosity touched many lives.",
  },
  {
    id: "member-3",
    name: "Member Name",
    role: "Former Executive Member",
    years: "2006 - 2023",
    tribute:
      "A leader who served with integrity and dedication. Their vision helped shape many of our community programs.",
  },
];

export default async function InMemoriamPage() {
  const locale = await getLocale() as Locale;

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    introContent?: string | null;
    closingQuote?: string | null;
    contactNote?: string | null;
  } = {};
  let rememberedMembers = defaultRememberedMembers;

  try {
    const payloadPage = await getInMemoriamPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }

    const payloadMembers = await getMemorialMembers(locale);
    if (payloadMembers.length > 0) {
      rememberedMembers = payloadMembers.map((m) => ({
        id: String(m.id),
        name: m.name,
        role: m.role || undefined,
        years: m.birthYear && m.deathYear ? `${m.birthYear} - ${m.deathYear}` : '',
        tribute: m.tribute || '',
        image: m.image ? getMediaUrl(m.image as { url?: string }) : undefined,
      }));
    }
  } catch (error) {
    console.log('Using static in-memoriam data:', error instanceof Error ? error.message : 'CMS not available');
  }

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "In Memoriam"}
        description={pageContent.headerDescription || "Honoring the memory of ASAD members who have passed on. Their contributions to our community live on in our hearts and in the legacy they left behind."}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              {pageContent.introContent || "The ASAD family has lost cherished members over the years. While they are no longer with us physically, their memory, their contributions, and their spirit continue to inspire us. We honor them here, ensuring they are never forgotten."}
            </p>
          </div>
        </div>
      </section>

      {/* Memorial Cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {rememberedMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-48 aspect-square md:aspect-auto bg-muted flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Flower2 className="h-16 w-16 text-muted-foreground/50" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        {member.role && <span>{member.role}</span>}
                        {member.role && member.years && <span>•</span>}
                        {member.years && <span>{member.years}</span>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">
                        &quot;{member.tribute}&quot;
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg italic text-muted-foreground">
              {pageContent.closingQuote || "\"Gone from our sight, but never from our hearts. Their legacy lives on through the community they helped build.\""}
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              {pageContent.contactNote || "If you would like to add a tribute for a departed member, please contact the Social Affairs Director."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
