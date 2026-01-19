import type { Metadata } from "next";
import { Heart, Flower2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "In Memoriam",
  description: `Honoring the memory of ${siteConfig.name} members who have passed on. They remain forever in our hearts.`,
};

// Placeholder data - to be replaced with actual member information
const rememberedMembers = [
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

export default function InMemoriamPage() {
  return (
    <>
      <PageHeader
        title="In Memoriam"
        description="Honoring the memory of ASAD members who have passed on. Their contributions to our community live on in our hearts and in the legacy they left behind."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              The ASAD family has lost cherished members over the years. While
              they are no longer with us physically, their memory, their
              contributions, and their spirit continue to inspire us. We honor
              them here, ensuring they are never forgotten.
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
                    <Flower2 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{member.role}</span>
                        <span>•</span>
                        <span>{member.years}</span>
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
              &quot;Gone from our sight, but never from our hearts. Their legacy
              lives on through the community they helped build.&quot;
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              If you would like to add a tribute for a departed member, please
              contact the Social Affairs Director.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
