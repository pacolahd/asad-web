import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Clock,
  MessageCircle,
  Share2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout";
import { siteConfig } from "@/data/site-config";
import { getContactPage, getSiteSettings } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import type { ContactMethod } from "@/types";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Find our contact information, location, and connect with us on social media.`,
};

export const revalidate = 300;

// Icon mapping for contact methods
const iconMap: Record<string, LucideIcon> = {
  'map-pin': MapPin,
  'phone': Phone,
  'whatsapp': MessageCircle,
  'mail': Mail,
  'clock': Clock,
};

// Generate link href based on link type
function getContactHref(method: ContactMethod): string | null {
  switch (method.linkType) {
    case 'tel':
      return `tel:${method.value}`;
    case 'mailto':
      return `mailto:${method.value}`;
    case 'whatsapp':
      return `https://wa.me/${method.value.replace(/[^0-9]/g, '')}`;
    case 'url':
      return method.value;
    default:
      return null;
  }
}

export default async function ContactPage() {
  const locale = await getLocale() as Locale;
  const t = await getTranslations('contact');

  let settings = siteConfig;
  let pageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    socialTitle?: string | null;
    socialDescription?: string | null;
    whenToFindUsTitle?: string | null;
    asadSundaysTitle?: string | null;
    asadSundaysDescription?: string | null;
    bestWayTitle?: string | null;
    bestWayDescription?: string | null;
    finalCtaTitle?: string | null;
    finalCtaDescription?: string | null;
  } = {};

  try {
    const payloadSettings = await getSiteSettings(locale);
    if (payloadSettings) {
      settings = {
        ...siteConfig,
        contact: payloadSettings.contact || siteConfig.contact,
        contactMethods: payloadSettings.contactMethods || siteConfig.contactMethods,
        primaryAddress: payloadSettings.primaryAddress || siteConfig.primaryAddress,
        primaryEmail: payloadSettings.primaryEmail || siteConfig.primaryEmail,
        primaryPhone: payloadSettings.primaryPhone || siteConfig.primaryPhone,
        social: payloadSettings.social || siteConfig.social,
      };
    }

    const payloadPage = await getContactPage(locale);
    if (payloadPage) {
      pageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static contact data:', error instanceof Error ? error.message : 'CMS not available');
  }

  // Build contact methods from the same fields the footer uses
  const contactMethods: ContactMethod[] = [];

  if (settings.primaryAddress || settings.contact.address) {
    contactMethods.push({
      icon: 'map-pin',
      title: t('location'),
      description: t('locationDescription'),
      value: settings.primaryAddress || settings.contact.address || '',
      linkType: 'none',
    });
  }

  if (settings.primaryPhone || settings.contact.phone) {
    contactMethods.push({
      icon: 'phone',
      title: t('phone'),
      description: t('phoneDescription'),
      value: settings.primaryPhone || settings.contact.phone || '',
      linkType: 'tel',
    });
  }

  if (settings.primaryEmail || settings.contact.email) {
    contactMethods.push({
      icon: 'mail',
      title: t('email'),
      description: t('emailDescription'),
      value: settings.primaryEmail || settings.contact.email || '',
      linkType: 'mailto',
    });
  }

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: settings.social.facebook,
      handle: "@asadbonaberi",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: settings.social.instagram,
      handle: "@asadbonaberi",
    },
  ];

  return (
    <>
      <PageHeader
        title={pageContent.headerTitle || "Contact Us"}
        description={pageContent.headerDescription || "Have questions about ASAD? Want to join or arrange a friendly match? We'd love to hear from you. Reach out through any of the channels below."}
      />

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className={`grid gap-6 max-w-4xl mx-auto ${contactMethods.length === 3 ? 'md:grid-cols-3' : contactMethods.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'}`}>
            {contactMethods.map((method, index) => {
              const IconComponent = iconMap[method.icon] || MapPin;
              const href = getContactHref(method);
              return (
                <Card key={method.id || index} className="text-center">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle>{method.title}</CardTitle>
                    {method.description && (
                      <CardDescription>{method.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {href ? (
                      <a
                        href={href}
                        className="text-primary hover:underline font-medium"
                        target={method.linkType === 'url' || method.linkType === 'whatsapp' ? '_blank' : undefined}
                        rel={method.linkType === 'url' || method.linkType === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{method.value}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold">
              {pageContent.socialTitle || "Connect on Social Media"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {pageContent.socialDescription || "Follow us on social media to stay updated with ASAD activities, photos, and announcements."}
            </p>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <social.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{social.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* When to Find Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">
                {pageContent.whenToFindUsTitle || "When to Find Us"}
              </h2>
            </div>

            <Card className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {pageContent.asadSundaysTitle || "ASAD Sundays"}
                  </h3>
                  <p className="text-muted-foreground">
                    {pageContent.asadSundaysDescription || "Every Sunday morning starting at 7:00 AM. This is the best time to meet the community, play football, and learn more about ASAD."}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {pageContent.bestWayTitle || "Best Way to Reach Us"}
                  </h3>
                  <p className="text-muted-foreground">
                    {pageContent.bestWayDescription || "For quick responses, WhatsApp or phone calls work best. For detailed inquiries, email is preferred."}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              {pageContent.finalCtaTitle || "We'd Love to Hear From You"}
            </h2>
            <p className="text-muted-foreground">
              {pageContent.finalCtaDescription || "Whether you're interested in joining, have questions about our programs, or want to arrange a friendly match with your team—don't hesitate to reach out. The ASAD family welcomes you!"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
