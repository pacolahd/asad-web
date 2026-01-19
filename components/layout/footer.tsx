import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { navigation } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/asad-logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl text-primary">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
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
            <h3 className="font-semibold mb-4">Community Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/community/asad-sundays"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ASAD Sundays
                </Link>
              </li>
              <li>
                <Link
                  href="/community/back-to-school"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Back to School
                </Link>
              </li>
              <li>
                <Link
                  href="/community/ndjangi"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ASAD Ndjangi
                </Link>
              </li>
              <li>
                <Link
                  href="/community/social-fund"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Social Fund
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {siteConfig.contact.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {siteConfig.contact.address}
                  </span>
                </li>
              )}
              {siteConfig.contact.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              {siteConfig.contact.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Founded in {siteConfig.founded} in {siteConfig.location.neighborhood}
            , {siteConfig.location.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
