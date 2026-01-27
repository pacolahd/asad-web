import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { RichText } from "@/components/RichText";
import { siteConfig } from "@/data/site-config";
import { getProgramBySlug, getPrograms } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const programs = await getPrograms('en', 'community');
    return programs.map((program) => ({
      slug: program.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale() as Locale;

  try {
    const program = await getProgramBySlug(slug, locale);
    if (program) {
      return {
        title: program.title,
        description: program.description,
      };
    }
  } catch {
    // Fall through to default
  }

  return {
    title: "Community Program",
    description: `Learn about this ${siteConfig.name} community program.`,
  };
}

export default async function CommunityProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getLocale() as Locale;

  let program = null;

  try {
    program = await getProgramBySlug(slug, locale);
  } catch (error) {
    console.log('Error fetching program:', error instanceof Error ? error.message : 'Unknown error');
  }

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={program.title}
        description={program.pageHeaderDescription || program.description}
      />

      {/* Back Link */}
      <section className="pt-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/community">
              <ArrowLeft className="h-4 w-4" />
              Back to Community Programs
            </Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {program.content ? (
              <RichText
                data={program.content as SerializedEditorState}
                className="prose prose-lg dark:prose-invert max-w-none"
              />
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-lg">
                  {program.description}
                </p>
                <p className="mt-4">
                  More details about this program will be added soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in This Program?</h2>
            <p className="text-muted-foreground mb-6">
              This program is available to all ASAD members. Contact us or visit us
              on any Sunday to learn more.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/members">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
