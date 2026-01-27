import type { Metadata } from "next";
import { Calendar, Download, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getProgramOfYearPage, getMediaUrl } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Program of the Year",
  description: `${siteConfig.name}'s annual program and calendar of activities. Plan your participation in our events throughout the year.`,
};

export const revalidate = 300;

const currentYear = new Date().getFullYear();

// Default program data (fallback if CMS is not configured)
const defaultYearlyProgram = [
  {
    month: "January",
    events: [
      { title: "New Year ASAD Sunday", type: "regular", completed: true },
      { title: "Annual General Meeting", type: "major", completed: true },
    ],
  },
  {
    month: "February",
    events: [
      { title: "Regular ASAD Sundays", type: "regular", completed: true },
      { title: "Internal Challenge Kickoff", type: "sports", completed: true },
    ],
  },
  {
    month: "March",
    events: [
      { title: "Regular ASAD Sundays", type: "regular", completed: false },
      { title: "Women's Day Celebration", type: "social", completed: false },
    ],
  },
  {
    month: "April - May",
    events: [
      { title: "Regular ASAD Sundays", type: "regular", completed: false },
      { title: "Easter Friendly Match", type: "sports", completed: false },
    ],
  },
  {
    month: "June - August",
    events: [
      { title: "Regular ASAD Sundays", type: "regular", completed: false },
      { title: "Summer Tournament Season", type: "sports", completed: false },
      { title: "Holiday Celebrations", type: "social", completed: false },
    ],
  },
  {
    month: "September",
    events: [
      { title: "Back to School Distribution", type: "community", completed: false },
      { title: "Regular ASAD Sundays", type: "regular", completed: false },
    ],
  },
  {
    month: "October - November",
    events: [
      { title: "Regular ASAD Sundays", type: "regular", completed: false },
      { title: "Internal Challenge Finals", type: "sports", completed: false },
    ],
  },
  {
    month: "December",
    events: [
      { title: "End of Year Celebration", type: "major", completed: false },
      { title: "Christmas Gathering", type: "social", completed: false },
      { title: "Soap & Oil Distribution", type: "community", completed: false },
    ],
  },
];

const defaultNotes = [
  "ASAD Sundays are held every week throughout the year unless otherwise announced.",
  "Dates for major events are communicated in advance through our communication channels.",
  "Special events may be added based on opportunities or member initiatives.",
  "For the most up-to-date information, attend ASAD Sundays or contact the executive committee.",
];

const eventTypes = {
  regular: { color: "bg-blue-100 text-blue-800", label: "Regular" },
  sports: { color: "bg-green-100 text-green-800", label: "Sports" },
  social: { color: "bg-purple-100 text-purple-800", label: "Social" },
  community: { color: "bg-amber-100 text-amber-800", label: "Community" },
  major: { color: "bg-red-100 text-red-800", label: "Major" },
};

export default async function ProgramPage() {
  const locale = await getLocale() as Locale;

  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    downloadButtonText?: string | null;
    programDocument?: { url?: string } | string | null;
    programYear?: number | null;
    periods?: Array<{
      month?: string | null;
      events?: Array<{
        title?: string | null;
        type?: string | null;
        completed?: boolean | null;
      }> | null;
    }> | null;
    notesTitle?: string | null;
    notes?: Array<{ note?: string | null }> | null;
  } = {};

  try {
    const payloadPage = await getProgramOfYearPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static program data:', error instanceof Error ? error.message : 'CMS not available');
  }

  // Build program from CMS or use defaults
  const yearlyProgram = pageContent.periods && pageContent.periods.length > 0
    ? pageContent.periods.map(period => ({
        month: period.month || '',
        events: (period.events || []).map(event => ({
          title: event.title || '',
          type: event.type || 'regular',
          completed: event.completed || false,
        })),
      }))
    : defaultYearlyProgram;

  // Build notes from CMS or use defaults
  const notes = pageContent.notes && pageContent.notes.length > 0
    ? pageContent.notes.map(n => n.note || '')
    : defaultNotes;

  const programYear = pageContent.programYear || currentYear;
  const documentUrl = pageContent.programDocument ? getMediaUrl(pageContent.programDocument) : null;

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Program of the Year"}
        description={pageContent.headerDescription || `ASAD's calendar of activities for ${programYear}. Plan your participation and never miss an important event.`}
      />

      {/* Download Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">ASAD Program {programYear}</span>
            </div>
            {documentUrl ? (
              <Button variant="outline" asChild>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {pageContent.downloadButtonText || "Download PDF"}
                </a>
              </Button>
            ) : (
              <Button variant="outline" disabled>
                <Download className="mr-2 h-4 w-4" />
                {pageContent.downloadButtonText || "Download PDF (Coming Soon)"}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(eventTypes).map(([key, value]) => (
              <Badge key={key} variant="outline" className={value.color}>
                {value.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {yearlyProgram.map((period) => (
              <Card key={period.month}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {period.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {period.events.map((event, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {event.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <span className={event.completed ? "text-muted-foreground" : ""}>
                            {event.title}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            eventTypes[event.type as keyof typeof eventTypes]?.color
                          }
                        >
                          {eventTypes[event.type as keyof typeof eventTypes]?.label}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {pageContent.notesTitle || "Important Notes"}
            </h2>
            <Card className="p-6">
              <ul className="space-y-3 text-muted-foreground">
                {notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
