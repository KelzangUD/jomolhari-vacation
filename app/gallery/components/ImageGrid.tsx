"use client";

import Image, { StaticImageData } from "next/image";
import { galleryData } from "@/app/data/galleryData";

export default function ImageGrid() {
  return (
    <div className="my-10">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-3">
        {galleryData.map((image, i) => (
          <div
            key={i}
            className="relative h-[200px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Desktop View - Simple Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-3">
        {galleryData.map((image, i) => (
          <div
            key={i}
            className="relative h-[220px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}