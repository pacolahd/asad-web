import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "ASAD - Association Sportive des Amis du Developpement",
    fr: "ASAD - Association Sportive des Amis du Développement",
  };

  const descriptions: Record<string, string> = {
    en: "ASAD is a community sports organization dedicated to promoting sports, unity, and development in Bonaberi, Douala, Cameroon since 2004.",
    fr: "ASAD est une organisation sportive communautaire dédiée à la promotion du sport, de l'unité et du développement à Bonaberi, Douala, Cameroun depuis 2004.",
  };

  return {
    title: {
      default: titles[locale] || titles.en,
      template: `%s | ASAD`,
    },
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
