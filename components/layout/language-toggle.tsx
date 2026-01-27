"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { localeNames, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const otherLocale = locale === "en" ? "fr" : "en";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
      title={`Switch to ${localeNames[otherLocale]}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{localeNames[otherLocale]}</span>
      <span className="sm:hidden">{otherLocale.toUpperCase()}</span>
    </Button>
  );
}
