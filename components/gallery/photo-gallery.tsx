"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { GalleryImage } from "@/types";

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [index, setIndex] = useState(-1);

  const photos = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt,
    title: image.caption,
  }));

  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.caption,
    description: image.caption,
  }));

  return (
    <div className="cursor-pointer">
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={250}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Thumbnails, Zoom]}
        captions={{ showToggle: true }}
        thumbnails={{ showToggle: true }}
      />
    </div>
  );
}
