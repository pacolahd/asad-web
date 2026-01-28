import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

interface HeroProps {
  settings?: {
    name?: string;
    fullName?: string;
    slogan?: string;
    founded?: number;
    location?: {
      neighborhood?: string;
      city?: string;
    };
  };
  heroDescription?: string | null;
  translations: {
    becomeMember: string;
    learnMore: string;
  };
}

export function Hero({ settings, heroDescription, translations }: HeroProps) {
  // Merge with fallback static config
  const config = {
    name: settings?.name || siteConfig.name,
    fullName: settings?.fullName || siteConfig.fullName,
    slogan: settings?.slogan || siteConfig.slogan,
    founded: settings?.founded || siteConfig.founded,
    location: {
      neighborhood: settings?.location?.neighborhood || siteConfig.location.neighborhood,
      city: settings?.location?.city || siteConfig.location.city,
    },
  };

  // Build description from heroDescription or fallback
  const description = heroDescription ||
    `A community sports organization bringing together sports enthusiasts in ${config.location.neighborhood}, ${config.location.city} since ${config.founded}.`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-4 ring-white/20 p-2">
              <Image
                src="/images/logo/asad-logo.png"
                alt={config.name}
                width={96}
                height={96}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {config.name}
          </h1>

          {/* Full Name */}
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            {config.fullName}
          </p>

          {/* Slogan */}
          <p className="mt-6 text-xl font-medium text-accent sm:text-2xl">
            {config.slogan}
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/members">{translations.becomeMember}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/about">{translations.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
