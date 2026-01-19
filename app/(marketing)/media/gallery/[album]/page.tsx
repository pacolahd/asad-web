import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout";
import { galleryAlbums } from "@/data/gallery-albums";

interface AlbumPageProps {
  params: Promise<{
    album: string;
  }>;
}

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { album: albumId } = await params;
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

export function generateStaticParams() {
  return galleryAlbums.map((album) => ({
    album: album.id,
  }));
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { album: albumId } = await params;
  const album = galleryAlbums.find((a) => a.id === albumId);

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
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden"
                >
                  <div className="text-center p-4">
                    <Camera className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
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
            <p className="mt-8 text-muted-foreground">
              To view the full gallery with lightbox functionality, actual
              photos need to be added to the public folder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
