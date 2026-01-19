import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTAProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href={primaryAction.href}>{primaryAction.label}</Link>
            </Button>
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
