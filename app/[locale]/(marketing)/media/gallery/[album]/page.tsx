import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { galleryAlbums } from "@/data/gallery-albums";
import { getGalleryAlbumBySlug, getGalleryAlbums, getMediaUrl } from "@/lib/data";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";

interface AlbumPageProps {
  params: Promise<{
    album: string;
  }>;
}

export const revalidate = 300;

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { album: albumId } = await params;
  const locale = await getLocale() as Locale;

  // Try Payload first
  try {
    const payloadAlbum = await getGalleryAlbumBySlug(albumId, locale);
    if (payloadAlbum) {
      return {
        title: payloadAlbum.title,
        description: payloadAlbum.description || `Photos from ${payloadAlbum.title}`,
      };
    }
  } catch {
    // Fall back to static
  }

  const album = galleryAlbums.find((a) => a.id === albumId);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: album.title,
    description: album.description || `Photos from ${album.title}`,
  };
}

export async function generateStaticParams() {
  // Include both static and dynamic albums
  const staticParams = galleryAlbums.map((album) => ({
    album: album.id,
  }));

  try {
    const payloadAlbums = await getGalleryAlbums('en');
    const payloadParams = payloadAlbums.map((album) => ({
      album: album.slug,
    }));
    return [...staticParams, ...payloadParams];
  } catch {
    return staticParams;
  }
}

interface AlbumImage {
  src: string;
  alt: string;
  caption?: string;
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { album: albumId } = await params;
  const locale = await getLocale() as Locale;

  let album: {
    title: string;
    description?: string;
    date?: string;
    images: AlbumImage[];
  } | null = null;

  // Try Payload first
  try {
    const payloadAlbum = await getGalleryAlbumBySlug(albumId, locale);
    if (payloadAlbum) {
      album = {
        title: payloadAlbum.title,
        description: payloadAlbum.description || undefined,
        date: payloadAlbum.date || undefined,
        images: ((payloadAlbum.images as { image?: { url?: string; alt?: string }; caption?: string }[]) || []).map((img) => ({
          src: img.image ? getMediaUrl(img.image) : '',
          alt: img.image?.alt || payloadAlbum.title,
          caption: img.caption || undefined,
        })).filter((img) => img.src),
      };
    }
  } catch (error) {
    console.log('Payload album fetch error:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Fall back to static
  if (!album) {
    const staticAlbum = galleryAlbums.find((a) => a.id === albumId);
    if (staticAlbum) {
      album = {
        title: staticAlbum.title,
        description: staticAlbum.description,
        date: staticAlbum.date,
        images: staticAlbum.images.map((img) => ({
          src: img.src,
          alt: img.alt,
          caption: img.caption,
        })),
      };
    }
  }

  if (!album) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={album.title}
        description={album.description || `Photos from ${album.title}`}
      >
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link href="/media/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Gallery
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Photo Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {album.images.length > 0 ? (
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {album.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden relative"
                >
                  {image.src.startsWith('/') || image.src.startsWith('http') ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <Camera className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Photos for this album will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Album Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-primary">
                  {album.images.length}
                </div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
              {album.date && (
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {album.date}
                  </div>
                  <div className="text-sm text-muted-foreground">Date</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
