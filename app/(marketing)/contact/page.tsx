import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Clock,
  MessageCircle,
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

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Find our contact information, location, and connect with us on social media.`,
};

const contactMethods = [
  {
    icon: MapPin,
    title: "Location",
    description: "Where we gather",
    content: siteConfig.contact.address || "Bonaberi, Douala, Cameroon",
    action: null,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call or WhatsApp",
    content: siteConfig.contact.phone || "+237 6XX XXX XXX",
    action: siteConfig.contact.phone
      ? `tel:${siteConfig.contact.phone}`
      : null,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    content: siteConfig.contact.email || "contact@asad-bonaberi.org",
    action: siteConfig.contact.email
      ? `mailto:${siteConfig.contact.email}`
      : null,
  },
];

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    url: siteConfig.social.facebook,
    handle: "@asadbonaberi",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: siteConfig.social.instagram,
    handle: "@asadbonaberi",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have questions about ASAD? Want to join or arrange a friendly match? We'd love to hear from you. Reach out through any of the channels below."
      />

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <method.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-primary hover:underline font-medium"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{method.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">Connect on Social Media</h2>
            <p className="mt-4 text-muted-foreground">
              Follow us on social media to stay updated with ASAD activities,
              photos, and announcements.
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
              <h2 className="text-2xl font-bold">When to Find Us</h2>
            </div>

            <Card className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-lg mb-2">ASAD Sundays</h3>
                  <p className="text-muted-foreground">
                    Every Sunday morning starting at 7:00 AM. This is the best
                    time to meet the community, play football, and learn more
                    about ASAD.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Best Way to Reach Us</h3>
                  <p className="text-muted-foreground">
                    For quick responses, WhatsApp or phone calls work best. For
                    detailed inquiries, email is preferred.
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
            <h2 className="text-2xl font-bold mb-4">We&apos;d Love to Hear From You</h2>
            <p className="text-muted-foreground">
              Whether you&apos;re interested in joining, have questions about our
              programs, or want to arrange a friendly match with your team—don&apos;t
              hesitate to reach out. The ASAD family welcomes you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
