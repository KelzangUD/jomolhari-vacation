"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageDataProps = {
  src: string;
  alt: string;
};

const imagesData: ImageDataProps[] = [
  { src: "/Contact.png", alt: "Contact" },
  { src: "/dagala-trek.jpg", alt: "Dagala Trek" },
  { src: "/druk-path-trek.jpg", alt: "Druk Path Trek" },
  { src: "/hero.png", alt: "Hero" },
  { src: "/highland festival.png", alt: "Highland Festival" },
  { src: "/himalayas.jpg", alt: "Himalayas" },
  { src: "/jomolhari trek.png", alt: "Jomolhari Trek" },
  { src: "/snowman trek.png", alt: "Snowman Trek" },
  { src: "/valley.jpg", alt: "Valley" },
];

type ImageLayouts = Record<number, { colSpan: number; isPortrait: boolean }>;

export default function ImageGrid() {
  const [imageLayouts, setImageLayouts] = useState<ImageLayouts>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ prevent SSR crash

    let loadedCount = 0;
    const layouts: ImageLayouts = {};

    imagesData.forEach((image, index) => {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        const isPortrait = img.height > img.width;
        layouts[index] = {
          colSpan: isPortrait ? 1 : 2,
          isPortrait,
        };
        loadedCount++;

        if (loadedCount === imagesData.length) {
          setImageLayouts(layouts);
          setIsLoading(false);
        }
      };
    });
  }, []);

  const arrangeImages = () => {
    if (isLoading) return [];
    const rows: number[][] = [];
    let currentRow: number[] = [];
    let currentRowWidth = 0;
    const maxWidth = 6;

    imagesData.forEach((_, index) => {
      const layout = imageLayouts[index];
      if (!layout) return;

      const itemWidth = layout.colSpan;
      if (currentRowWidth + itemWidth > maxWidth) {
        rows.push([...currentRow]);
        currentRow = [index];
        currentRowWidth = itemWidth;
      } else {
        currentRow.push(index);
        currentRowWidth += itemWidth;
      }
      if (currentRowWidth === maxWidth) {
        rows.push([...currentRow]);
        currentRow = [];
        currentRowWidth = 0;
      }
    });

    if (currentRow.length > 0) rows.push(currentRow);
    return rows;
  };

  const rows = arrangeImages();

  if (isLoading) {
    return (
      <div className="my-10">
        {/* Mobile skeleton */}
        <div className="md:hidden flex flex-col gap-3">
          {imagesData.map((_, i) => (
            <div
              key={i}
              className="relative h-[200px] rounded-md bg-gray-200 animate-pulse"
            />
          ))}
        </div>
        {/* Desktop skeleton */}
        <div className="hidden md:grid grid-cols-6 gap-3">
          {imagesData.map((_, i) => (
            <div
              key={i}
              className="relative h-[220px] rounded-md bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-3">
        {imagesData.map((image, i) => (
          <div
            key={i}
            className="relative h-[200px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-3">
        {rows.map((row, rowIndex) => {
          const totalWidth = row.reduce(
            (sum, i) => sum + imageLayouts[i].colSpan,
            0
          );
          return (
            <div
              key={rowIndex}
              className="grid gap-3"
              style={{
                gridTemplateColumns: `repeat(${totalWidth}, minmax(0, 1fr))`,
              }}
            >
              {row.map((i) => {
                const layout = imageLayouts[i];
                return (
                  <div
                    key={i}
                    className="relative h-[150px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg group"
                    style={{ gridColumn: `span ${layout.colSpan}` }}
                  >
                    <Image
                      src={imagesData[i].src}
                      alt={imagesData[i].alt}
                      fill
                      className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
