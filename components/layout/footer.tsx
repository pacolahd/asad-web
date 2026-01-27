import Image from "next/image";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import type { SiteConfig } from "@/types";

interface FooterProps {
  settings: SiteConfig;
}

export function Footer({ settings }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: tNav("home"), href: "/" },
    { title: tNav("about"), href: "/about" },
    { title: tNav("sports"), href: "/sports" },
    { title: tNav("community"), href: "/community" },
    { title: tNav("contact"), href: "/contact" },
  ];

  const programLinks = [
    { title: tNav("asadSundays"), href: "/community/asad-sundays" },
    { title: tNav("backToSchool"), href: "/community/back-to-school" },
    { title: tNav("ndjangi"), href: "/community/ndjangi" },
    { title: tNav("socialFund"), href: "/community/social-fund" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/asad-logo.png"
                alt={settings.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl text-primary">
                {settings.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {settings.description}
            </p>
            <div className="flex gap-4">
              {settings.social.facebook && (
                <a
                  href={settings.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {settings.social.instagram && (
                <a
                  href={settings.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">{t("communityPrograms")}</h3>
            <ul className="space-y-2">
              {programLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              {settings.contact.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {settings.contact.address}
                  </span>
                </li>
              )}
              {settings.contact.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`tel:${settings.contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {settings.contact.phone}
                  </a>
                </li>
              )}
              {settings.contact.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${settings.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {settings.contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {settings.fullName}. {t("allRightsReserved")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("foundedIn", {
              year: settings.founded,
              neighborhood: settings.location.neighborhood,
              city: settings.location.city,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
