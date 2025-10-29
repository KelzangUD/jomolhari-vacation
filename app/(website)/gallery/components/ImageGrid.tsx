"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageDataProps = {
  src: string;
  alt: string;
};

const imagesData: ImageDataProps[] = [
  {
    src: "/Contact.png",
    alt: "Contact",
  },
  {
    src: "/dagala-trek.jpg",
    alt: "Dagala Trek",
  },
  {
    src: "/druk-path-trek.jpg",
    alt: "Druk Path Trek",
  },
  {
    src: "/hero.png",
    alt: "Hero",
  },
  {
    src: "/highland festival.png",
    alt: "Highland Festival",
  },
  {
    src: "/himalayas.jpg",
    alt: "Himalayas",
  },
  {
    src: "/jomolhari trek.png",
    alt: "Jomolhari Trek",
  },
  {
    src: "/snowman trek.png",
    alt: "Snowman Trek",
  },
  {
    src: "/valley.jpg",
    alt: "Druk Path Trek",
  },
];

type ImageLayouts = Record<number, { colSpan: number; isPortrait: boolean }>;

export default function ImageGrid() {
  const [imageLayouts, setImageLayouts] = useState<ImageLayouts>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const layouts: ImageLayouts = {};

    imagesData.forEach((image, index) => {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        const isPortrait = img.height > img.width;
        layouts[index] = {
          colSpan: isPortrait ? 1 : 2,
          isPortrait: isPortrait,
        };
        loadedCount++;

        if (loadedCount === imagesData.length) {
          setImageLayouts(layouts);
          setIsLoading(false);
        }
      };
    });
  }, []);

  // Function to arrange images in rows without gaps
  const arrangeImages = () => {
    if (isLoading) return [];

    const rows: number[][] = [];
    let currentRow: number[] = [];
    let currentRowWidth = 0;
    const maxWidth = 6; // 6 column grid for more columns

    imagesData.forEach((_, index) => {
      const layout = imageLayouts[index];
      if (!layout) return;

      const itemWidth = layout.colSpan;

      // If adding this item exceeds the row width, start a new row
      if (currentRowWidth + itemWidth > maxWidth) {
        rows.push([...currentRow]);
        currentRow = [index];
        currentRowWidth = itemWidth;
      } else {
        currentRow.push(index);
        currentRowWidth += itemWidth;
      }

      // If row is complete, add it to rows
      if (currentRowWidth === maxWidth) {
        rows.push([...currentRow]);
        currentRow = [];
        currentRowWidth = 0;
      }
    });

    // Add any remaining items
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const rows = arrangeImages();

  if (isLoading) {
    return (
      <div className="my-10">
        {/* Mobile: Single column */}
        <div className="md:hidden flex flex-col gap-3">
          {imagesData.map((_, index) => (
            <div
              key={index}
              className="relative h-[200px] rounded-md overflow-hidden bg-gray-200 animate-pulse"
            />
          ))}
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {imagesData.map((_, index) => (
            <div
              key={index}
              className="relative h-[180px] md:h-[220px] rounded-md overflow-hidden bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      {/* Mobile View: Single Column */}
      <div className="md:hidden flex flex-col gap-3">
        {imagesData.map((image, index) => (
          <div
            key={index}
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

      {/* Desktop View: Dynamic Grid */}
      <div className="hidden md:flex flex-col gap-3">
        {rows.map((row, rowIndex) => {
          const totalRowWidth = row.reduce(
            (sum, imageIndex) => sum + imageLayouts[imageIndex].colSpan,
            0
          );

          return (
            <div
              key={rowIndex}
              className="grid gap-3"
              style={{
                gridTemplateColumns: `repeat(${totalRowWidth}, minmax(0, 1fr))`,
              }}
            >
              {row.map((imageIndex) => {
                const layout = imageLayouts[imageIndex];
                return (
                  <div
                    key={imageIndex}
                    className="relative h-[150px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg group"
                    style={{
                      gridColumn: `span ${layout.colSpan}`,
                    }}
                  >
                    <Image
                      src={imagesData[imageIndex].src}
                      alt={imagesData[imageIndex].alt}
                      fill
                      className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
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
