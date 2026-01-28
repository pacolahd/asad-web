import type { Metadata } from "next";
import { FileText, Download, ScrollText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getStatutesPage, getDocuments, getMediaUrl } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Statutes & Documents",
  description: `Access the official statutes and governing documents of ${siteConfig.name}. Our bylaws ensure transparent and fair governance.`,
};

export const revalidate = 300;

const defaultDocuments = [
  {
    icon: ScrollText,
    title: "ASAD Statutes",
    description:
      "The official statutes defining our organization's purpose, structure, and governance.",
    href: "/documents/asad-statutes.pdf",
    available: false,
  },
  {
    icon: Scale,
    title: "Internal Regulations",
    description:
      "Detailed rules and procedures for day-to-day operations and member conduct.",
    href: "/documents/internal-regulations.pdf",
    available: false,
  },
  {
    icon: FileText,
    title: "Membership Guidelines",
    description:
      "Information about membership requirements, rights, and responsibilities.",
    href: "/documents/membership-guidelines.pdf",
    available: false,
  },
];

const defaultKeyStatutes = [
  {
    title: "Article 1: Name and Purpose",
    content:
      "The Association Sportive des Amis du Developpement (ASAD) is a non-profit sports and community organization dedicated to promoting unity through sports and supporting community development.",
  },
  {
    title: "Article 2: Objectives",
    content:
      "ASAD aims to organize sporting activities, foster community spirit, provide mutual support among members, and contribute to the social and economic development of the community.",
  },
  {
    title: "Article 3: Membership",
    content:
      "Membership is open to individuals who share our values and commit to participating in our activities. Members must adhere to the statutes and pay required dues.",
  },
  {
    title: "Article 4: Governance",
    content:
      "ASAD is governed by a democratically elected executive committee, with major decisions made by the general assembly of all members.",
  },
  {
    title: "Article 5: Finances",
    content:
      "The organization's finances are managed transparently. All members have the right to be informed about financial matters and to review financial reports.",
  },
];

export default async function StatutesPage() {
  const locale = await getLocale() as Locale;
  const t = await getTranslations('common');

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    highlightsTitle?: string | null;
    keyStatutes?: Array<{ title?: string | null; content?: string | null }> | null;
    documentsTitle?: string | null;
    documentsDescription?: string | null;
    contactSectionTitle?: string | null;
    contactSectionContent?: string | null;
  } = {};
  let documents = defaultDocuments;

  try {
    const payloadPage = await getStatutesPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }

    const payloadDocs = await getDocuments(locale, 'statutes');
    if (payloadDocs.length > 0) {
      documents = payloadDocs.map((doc) => ({
        icon: FileText,
        title: doc.title,
        description: doc.description || '',
        href: doc.file ? getMediaUrl(doc.file as { url?: string }) : '#',
        available: !!doc.file,
      }));
    }
  } catch (error) {
    console.log('Using static statutes data:', error instanceof Error ? error.message : 'CMS not available');
  }

  const keyStatutes = pageContent.keyStatutes && pageContent.keyStatutes.length > 0
    ? pageContent.keyStatutes.map((s) => ({
        title: s.title || '',
        content: s.content || '',
      }))
    : defaultKeyStatutes;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Statutes & Documents"}
        description={pageContent.headerDescription || "Access our official governing documents that guide how ASAD operates with transparency and accountability."}
      />

      {/* Key Statutes Summary */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {pageContent.highlightsTitle || "Key Statute Highlights"}
            </h2>
            <div className="space-y-6">
              {keyStatutes.map((statute, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">{statute.title}</h3>
                  <p className="mt-2 text-muted-foreground">{statute.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">
              {pageContent.documentsTitle || "Download Documents"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {pageContent.documentsDescription || "Access our official documents for detailed information about ASAD's governance and operations."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {documents.map((doc) => (
              <Card key={doc.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <doc.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="flex-1">
                    {doc.description}
                  </CardDescription>
                  <div className="mt-4">
                    {doc.available ? (
                      <Button asChild className="w-full">
                        <a href={doc.href} download>
                          <Download className="mr-2 h-4 w-4" />
                          {t('downloadPdf')}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        {t('comingSoon')}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Documents */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              {pageContent.contactSectionTitle || "Need More Information?"}
            </h2>
            <p className="text-muted-foreground">
              {pageContent.contactSectionContent || "If you have questions about our statutes or need additional documentation, please contact our Secretary General. Members can request copies of official documents at any general assembly meeting."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
