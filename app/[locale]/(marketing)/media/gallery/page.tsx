import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Camera } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout";
import { galleryAlbums } from "@/data/gallery-albums";
import { siteConfig } from "@/data/site-config";
import { getGalleryAlbums, getGalleryPage, getMediaSizedUrl } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: `Browse photo albums from ${siteConfig.name}'s events, competitions, and community activities.`,
};

export const revalidate = 300;

interface GalleryAlbumDisplay {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  date?: string;
  imageCount: number;
}

export default async function GalleryPage() {
  const locale = await getLocale() as Locale;
  const t = await getTranslations('media');

  let galleryPageContent: {
    headerTitle?: string | null;
    headerDescription?: string | null;
    shareNote?: string | null;
  } = {};

  let albums: GalleryAlbumDisplay[] = galleryAlbums.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    coverImage: a.coverImage,
    date: a.date,
    imageCount: a.images.length,
  }));

  try {
    const [payloadAlbums, payloadPage] = await Promise.all([
      getGalleryAlbums(locale),
      getGalleryPage(locale),
    ]);

    if (payloadAlbums.length > 0) {
      albums = payloadAlbums.map((a) => ({
        id: a.slug,
        title: a.title,
        description: a.description || undefined,
        coverImage: a.coverImage ? getMediaSizedUrl(a.coverImage as { url?: string; sizes?: Record<string, { url?: string }> }, 'card') : undefined,
        date: a.date || undefined,
        imageCount: (a.images as unknown[])?.length || 0,
      }));
    }

    if (payloadPage) {
      galleryPageContent = payloadPage;
    }
  } catch (error) {
    console.log('Using static gallery data:', error instanceof Error ? error.message : 'CMS not available');
  }
  return (
    <>
      <PageHeader
        title={galleryPageContent.headerTitle || "Photo Gallery"}
        description={galleryPageContent.headerDescription || "Browse through our collection of memories captured over the years. From match days to community celebrations, relive the moments that define ASAD."}
      />

      {/* Albums Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <Link key={album.id} href={`/media/gallery/${album.id}`}>
                <Card className="overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    {album.coverImage ? (
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Camera className="h-12 w-12 text-muted-foreground/50" />
                    )}
                    <Badge className="absolute top-2 right-2">
                      {album.imageCount} {t('photos')}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{album.title}</CardTitle>
                    {album.date && (
                      <CardDescription>{album.date}</CardDescription>
                    )}
                  </CardHeader>
                  {album.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {album.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground">
              {galleryPageContent.shareNote ||
                "More photos are being added regularly. If you have photos from ASAD events to share, please contact the media coordinator."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
