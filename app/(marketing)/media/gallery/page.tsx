import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: `Browse photo albums from ${siteConfig.name}'s events, competitions, and community activities.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        description="Browse through our collection of memories captured over the years. From match days to community celebrations, relive the moments that define ASAD."
      />

      {/* Albums Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryAlbums.map((album) => (
              <Link key={album.id} href={`/media/gallery/${album.id}`}>
                <Card className="overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative">
                    <Camera className="h-12 w-12 text-muted-foreground/50" />
                    <Badge className="absolute top-2 right-2">
                      {album.images.length} photos
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
              More photos are being added regularly. If you have photos from
              ASAD events to share, please contact the media coordinator.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
